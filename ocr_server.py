"""
JCC Console - Screen Recognition Backend Service
Provides YOLO detection and OCR recognition for TFT game screenshots.

Usage:
  pip install -r requirements.txt
  python ocr_server.py

The service runs on port 5000 by default.
"""

import os
import io
import json
import base64
import logging
import re
import importlib.util
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s"
)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Global model instances (lazy init)
ocr_engine = None
ocr_error = None
yolo_model = None
yolo_error = None

YOLO_MODEL_PATH = os.environ.get("YOLO_MODEL_PATH", os.path.join("models", "screen.pt"))
YOLO_CONF = float(os.environ.get("YOLO_CONF", "0.35"))
YOLO_DEVICE = os.environ.get("YOLO_DEVICE", "").strip() or None


def dependency_available(module_name):
    """Return whether an optional Python dependency can be imported."""
    return importlib.util.find_spec(module_name) is not None

def get_ocr_engine():
    """Lazy-initialize PaddleOCR engine. Missing OCR is non-fatal."""
    global ocr_engine, ocr_error
    if ocr_engine is None:
        if not dependency_available("paddleocr"):
            ocr_error = "paddleocr is not installed"
            return None
        try:
            logger.info("Initializing PaddleOCR engine (first request may take ~10s)...")
            from paddleocr import PaddleOCR
            ocr_engine = PaddleOCR(
                use_angle_cls=True,
                lang="ch",
                show_log=False,
                use_gpu=False  # Set to True if you have CUDA
            )
            ocr_error = None
            logger.info("PaddleOCR engine ready.")
        except Exception as exc:
            ocr_error = str(exc)
            logger.exception("PaddleOCR initialization failed")
            return None
    return ocr_engine


def get_yolo_model():
    """Lazy-initialize YOLO model. Missing model is non-fatal."""
    global yolo_model, yolo_error
    if yolo_model is not None:
        return yolo_model

    if not os.path.exists(YOLO_MODEL_PATH):
        yolo_error = f"YOLO model not found: {YOLO_MODEL_PATH}"
        return None
    if not dependency_available("ultralytics"):
        yolo_error = "ultralytics is not installed"
        return None

    try:
        logger.info("Initializing YOLO model from %s...", YOLO_MODEL_PATH)
        from ultralytics import YOLO
        yolo_model = YOLO(YOLO_MODEL_PATH)
        yolo_error = None
        logger.info("YOLO model ready.")
        return yolo_model
    except Exception as exc:
        yolo_error = str(exc)
        logger.exception("YOLO initialization failed")
        return None


def decode_image(image_data):
    """Decode base64 image data to PIL Image."""
    if image_data.startswith("data:"):
        # Remove data URI prefix
        image_data = image_data.split(",", 1)[1]
    raw = base64.b64decode(image_data)
    return Image.open(io.BytesIO(raw)).convert("RGB")


def run_ocr(image):
    """Run PaddleOCR on a PIL Image, return structured results."""
    ocr = get_ocr_engine()
    if ocr is None:
        return []

    img_array = np.array(image)
    results = ocr.ocr(img_array, cls=True)

    texts = []
    if results and results[0]:
        for line in results[0]:
            box = line[0]  # [[x1,y1],[x2,y2],[x3,y3],[x4,y4]]
            text = line[1][0]  # recognized text
            confidence = line[1][1]  # confidence score
            texts.append({
                "text": text,
                "confidence": round(confidence, 4),
                "box": box
            })

    return texts


def run_yolo(image):
    """Run YOLO on a PIL Image, return detection boxes and status."""
    model = get_yolo_model()
    if model is None:
        return {
            "enabled": False,
            "modelPath": YOLO_MODEL_PATH,
            "error": yolo_error,
            "detections": []
        }

    img_array = np.array(image)
    predict_args = {"conf": YOLO_CONF, "verbose": False}
    if YOLO_DEVICE:
        predict_args["device"] = YOLO_DEVICE

    results = model.predict(img_array, **predict_args)
    detections = []
    if results:
        result = results[0]
        names = result.names or {}
        for box in result.boxes:
            cls_id = int(box.cls[0].item())
            confidence = float(box.conf[0].item())
            xyxy = [round(float(v), 2) for v in box.xyxy[0].tolist()]
            detections.append({
                "classId": cls_id,
                "label": str(names.get(cls_id, cls_id)),
                "confidence": round(confidence, 4),
                "box": xyxy
            })

    return {
        "enabled": True,
        "modelPath": YOLO_MODEL_PATH,
        "confidence": YOLO_CONF,
        "detections": detections
    }


def normalize_label(value):
    """Normalize YOLO class labels and database names for matching."""
    return re.sub(r"[\s_\-:/\\|]+", "", str(value or "").strip()).lower()


def split_yolo_label(label):
    """Support labels like hero_Ahri, trait:Sniper, item-bow, or exact names."""
    raw = str(label or "").strip()
    lowered = raw.lower()
    for prefix, entity_type in (
        ("hero_", "hero"), ("hero-", "hero"), ("hero:", "hero"),
        ("trait_", "trait"), ("trait-", "trait"), ("trait:", "trait"),
        ("item_", "item"), ("item-", "item"), ("item:", "item"),
    ):
        if lowered.startswith(prefix):
            return entity_type, raw[len(prefix):]
    return None, raw


def match_yolo_entities(detections, game_data):
    """Map YOLO class labels to known heroes, traits, and items."""
    heroes_by_name = {normalize_label(h.get("name")): h for h in game_data.get("heroes", [])}
    traits_by_name = {normalize_label(t.get("name")): t for t in game_data.get("traits", [])}
    base_items_by_name = {normalize_label(i.get("name")): i for i in game_data.get("baseItems", [])}
    recipes_by_name = {normalize_label(r.get("name")): r for r in game_data.get("recipes", {}).values()}

    matched = {"heroes": [], "traits": [], "items": []}
    seen = {"hero": set(), "trait": set(), "item": set()}

    def add_once(entity_type, key, payload):
        if not key or key in seen[entity_type]:
            return
        seen[entity_type].add(key)
        matched[f"{entity_type}s"].append(payload)

    for detection in sorted(detections, key=lambda item: item.get("confidence", 0), reverse=True):
        entity_type, name = split_yolo_label(detection.get("label"))
        key = normalize_label(name)

        if entity_type in (None, "hero") and key in heroes_by_name:
            hero = heroes_by_name[key]
            add_once("hero", key, {
                "name": hero.get("name"),
                "cost": hero.get("cost", 0),
                "traits": hero.get("traits", []),
                "source": "yolo",
                "confidence": detection.get("confidence"),
                "box": detection.get("box")
            })
            continue

        if entity_type in (None, "trait") and key in traits_by_name:
            trait = traits_by_name[key]
            add_once("trait", key, {
                "name": trait.get("name"),
                "breakpoints": trait.get("breakpoints", []),
                "source": "yolo",
                "confidence": detection.get("confidence"),
                "box": detection.get("box")
            })
            continue

        if entity_type in (None, "item"):
            if key in base_items_by_name:
                item = base_items_by_name[key]
                add_once("item", key, {
                    "name": item.get("name"),
                    "type": "base",
                    "source": "yolo",
                    "confidence": detection.get("confidence"),
                    "box": detection.get("box")
                })
            elif key in recipes_by_name:
                item = recipes_by_name[key]
                add_once("item", key, {
                    "name": item.get("name"),
                    "type": "recipe",
                    "source": "yolo",
                    "confidence": detection.get("confidence"),
                    "box": detection.get("box")
                })

    return matched


def merge_by_name(primary, fallback):
    """Merge YOLO and OCR matches by name, keeping YOLO metadata first."""
    merged = []
    seen = set()
    for item in [*(primary or []), *(fallback or [])]:
        key = item.get("name")
        if key and key not in seen:
            merged.append(item)
            seen.add(key)
    return merged


def recognize_image(image, game_data):
    """Run YOLO first and OCR as a text fallback, then merge known entities."""
    yolo = run_yolo(image)
    yolo_matches = match_yolo_entities(yolo.get("detections", []), game_data)

    texts = run_ocr(image)
    ocr_matches = {
        "heroes": match_heroes(texts, game_data.get("heroes", [])),
        "traits": match_traits(texts, game_data.get("traits", [])),
        "items": match_items(
            texts,
            game_data.get("baseItems", []),
            game_data.get("recipes", {})
        )
    }

    return {
        "texts": texts,
        "yolo": yolo,
        "heroes": merge_by_name(yolo_matches["heroes"], ocr_matches["heroes"]),
        "traits": merge_by_name(yolo_matches["traits"], ocr_matches["traits"]),
        "items": merge_by_name(yolo_matches["items"], ocr_matches["items"])
    }


def match_heroes(texts, hero_list):
    """Match recognized text against known hero names."""
    matched = []
    seen = set()
    full_text = " ".join(t["text"] for t in texts)
    for hero in hero_list:
        name = hero["name"]
        if name in full_text and name not in seen:
            matched.append({
                "name": name,
                "cost": hero.get("cost", 0),
                "traits": hero.get("traits", [])
            })
            seen.add(name)
    return matched


def match_traits(texts, trait_list):
    """Match recognized text against known trait names."""
    matched = []
    seen = set()
    full_text = " ".join(t["text"] for t in texts)
    for trait in trait_list:
        name = trait["name"]
        if name in full_text and name not in seen:
            matched.append({
                "name": name,
                "breakpoints": trait.get("breakpoints", [])
            })
            seen.add(name)
    return matched


def match_items(texts, base_items, recipes):
    """Match recognized text against known item names."""
    matched = []
    seen = set()
    full_text = " ".join(t["text"] for t in texts)

    for item in base_items:
        name = item["name"]
        if name in full_text and name not in seen:
            matched.append({"name": name, "type": "base"})
            seen.add(name)

    for key, recipe in recipes.items():
        name = recipe["name"]
        if name in full_text and name not in seen:
            matched.append({"name": name, "type": "recipe"})
            seen.add(name)

    return matched


# ──────────────────────────────────────────
# Routes
# ──────────────────────────────────────────

@app.route("/ocr/health", methods=["GET"])
def health():
    model_exists = os.path.exists(YOLO_MODEL_PATH)
    ocr_installed = dependency_available("paddleocr")
    yolo_installed = dependency_available("ultralytics")
    return jsonify({
        "ok": True,
        "service": "JCC Screen Recognition Server",
        "port": 5000,
        "ocr": {
            "enabled": ocr_installed and ocr_error is None,
            "engine": "PaddleOCR",
            "dependencyInstalled": ocr_installed,
            "error": ocr_error
        },
        "yolo": {
            "enabled": model_exists and yolo_installed and yolo_error is None,
            "modelPath": YOLO_MODEL_PATH,
            "modelExists": model_exists,
            "dependencyInstalled": yolo_installed,
            "confidence": YOLO_CONF,
            "device": YOLO_DEVICE or "auto",
            "error": yolo_error
        }
    })


@app.route("/ocr/recognize", methods=["POST"])
def recognize():
    """
    Recognize text from a game screenshot.

    POST JSON:
      { "image": "base64...", "data": { "heroes": [...], "traits": [...], ... } }

    Returns:
      { "texts": [...], "heroes": [...], "traits": [...], "items": [...] }
    """
    try:
        body = request.get_json(force=True)
        image_data = body.get("image")
        game_data = body.get("data", {})

        if not image_data:
            return jsonify({"error": "Missing 'image' field"}), 400

        image = decode_image(image_data)
        recognized = recognize_image(image, game_data)

        return jsonify({
            "ok": True,
            "timestamp": datetime.now().isoformat(),
            **recognized
        })

    except Exception as e:
        logger.exception("OCR recognition failed")
        return jsonify({"error": str(e)}), 500


@app.route("/ocr/analyze-board", methods=["POST"])
def analyze_board():
    """
    Advanced analysis: recognize board state and provide recommendations.

    POST JSON:
      {
        "image": "base64...",
        "targetComp": { ... },  // the comp the user wants to play
        "currentHeroes": [...], // heroes currently on board
        "data": { "heroes": [...], "traits": [...], ... }
      }

    Returns:
      {
        "recognized": { "heroes": [...], "traits": [...], "items": [...] },
        "analysis": {
          "missingHeroes": [...],
          "buyPriority": [...],
          "traitStatus": [...],
          "itemRecommendations": [...],
          "positionSuggestion": "..."
        }
      }
    """
    try:
        body = request.get_json(force=True)
        image_data = body.get("image")
        target_comp = body.get("targetComp", {})
        current_heroes = body.get("currentHeroes", [])
        game_data = body.get("data", {})

        if not image_data:
            return jsonify({"error": "Missing 'image' field"}), 400

        image = decode_image(image_data)
        recognized_data = recognize_image(image, game_data)
        recognized = {
            "heroes": recognized_data["heroes"],
            "traits": recognized_data["traits"],
            "items": recognized_data["items"]
        }

        # ── Analysis ──
        analysis = {}

        # 1. Missing heroes from target comp
        target_heroes = set(target_comp.get("heroes", []))
        owned_heroes = set(current_heroes) | set(h["name"] for h in recognized["heroes"])
        missing = target_heroes - owned_heroes
        analysis["missingHeroes"] = list(missing)

        # 2. Buy priority (carry heroes first)
        carries = set(target_comp.get("carries", []))
        hero_db = {h["name"]: h for h in game_data.get("heroes", [])}
        priority_list = []
        for name in missing:
            hero = hero_db.get(name, {})
            is_carry = name in carries
            priority_list.append({
                "name": name,
                "cost": hero.get("cost", 0),
                "isCarry": is_carry,
                "priority": 0 if is_carry else hero.get("cost", 0)
            })
        priority_list.sort(key=lambda x: (-x["isCarry"], -x["cost"]))
        analysis["buyPriority"] = priority_list

        # 3. Trait status
        all_heroes_data = [hero_db.get(n, {}) for n in owned_heroes if n in hero_db]
        trait_counts = {}
        for h in all_heroes_data:
            for t in h.get("traits", []):
                trait_counts[t] = trait_counts.get(t, 0) + 1

        trait_db = {t["name"]: t for t in game_data.get("traits", [])}
        target_traits = set(target_comp.get("traits", []))
        trait_status = []
        for trait_name in target_traits:
            count = trait_counts.get(trait_name, 0)
            breakpoints = trait_db.get(trait_name, {}).get("breakpoints", [])
            active = max((bp for bp in breakpoints if bp <= count), default=0)
            next_bp = next((bp for bp in breakpoints if bp > count), None)
            trait_status.append({
                "name": trait_name,
                "current": count,
                "breakpoints": breakpoints,
                "active": active,
                "nextTarget": next_bp,
                "needed": next_bp - count if next_bp else 0
            })
        analysis["traitStatus"] = trait_status

        # 4. Item recommendations
        target_items = target_comp.get("items", {})
        analysis["itemRecommendations"] = []
        for hero_name, items in target_items.items():
            analysis["itemRecommendations"].append({
                "hero": hero_name,
                "items": items,
                "isCarry": hero_name in carries
            })

        # 5. Position suggestion
        analysis["positionSuggestion"] = target_comp.get("positioning", "参考目标阵容站位。")

        return jsonify({
            "ok": True,
            "timestamp": datetime.now().isoformat(),
            "texts": recognized_data["texts"],
            "yolo": recognized_data["yolo"],
            "recognized": recognized,
            "analysis": analysis
        })

    except Exception as e:
        logger.exception("Board analysis failed")
        return jsonify({"error": str(e)}), 500


@app.route("/ocr/analyze-opponent", methods=["POST"])
def analyze_opponent():
    """
    Analyze opponent's board from screenshot.

    POST JSON:
      {
        "image": "base64...",
        "myComp": { ... },
        "data": { "heroes": [...], "traits": [...], ... }
      }

    Returns:
      {
        "opponentHeroes": [...],
        "opponentTraits": [...],
        "counterSuggestion": "..."
      }
    """
    try:
        body = request.get_json(force=True)
        image_data = body.get("image")
        my_comp = body.get("myComp", {})
        game_data = body.get("data", {})

        if not image_data:
            return jsonify({"error": "Missing 'image' field"}), 400

        image = decode_image(image_data)
        recognized_data = recognize_image(image, game_data)

        opponent_heroes = recognized_data["heroes"]
        opponent_traits = recognized_data["traits"]

        # Generate counter suggestion based on opponent traits
        counter_tips = []
        opponent_trait_names = {t["name"] for t in opponent_traits}

        # Common counter logic
        if "法师" in opponent_trait_names or "夜幽" in opponent_trait_names:
            counter_tips.append("对手是法系阵容，建议给前排巨龙之爪，后排出水银防控制。")
        if "狙神" in opponent_trait_names:
            counter_tips.append("对手是狙神阵容，建议分散站位，用刺客切入后排。")
        if "决斗大师" in opponent_trait_names:
            counter_tips.append("对手是决斗阵容，建议出冰霜之心限制攻速，前排堆坦度。")
        if "斗士" in opponent_trait_names:
            counter_tips.append("对手前排较肉，建议出巨人杀手或破甲装。")

        if not counter_tips:
            counter_tips.append("暂无针对性建议，参考目标阵容标准站位。")

        return jsonify({
            "ok": True,
            "timestamp": datetime.now().isoformat(),
            "texts": recognized_data["texts"],
            "yolo": recognized_data["yolo"],
            "opponentHeroes": opponent_heroes,
            "opponentTraits": opponent_traits,
            "counterSuggestion": " ".join(counter_tips)
        })

    except Exception as e:
        logger.exception("Opponent analysis failed")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.environ.get("OCR_PORT", 5000))
    logger.info(f"Starting JCC OCR Server on port {port}...")
    app.run(host="127.0.0.1", port=port, debug=False)
