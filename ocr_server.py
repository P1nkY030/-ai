"""
JCC Console - PaddleOCR Backend Service
Provides OCR recognition for TFT game screenshots.

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

# Global OCR instance (lazy init)
ocr_engine = None

def get_ocr_engine():
    """Lazy-initialize PaddleOCR engine."""
    global ocr_engine
    if ocr_engine is None:
        logger.info("Initializing PaddleOCR engine (first request may take ~10s)...")
        from paddleocr import PaddleOCR
        ocr_engine = PaddleOCR(
            use_angle_cls=True,
            lang="ch",
            show_log=False,
            use_gpu=False  # Set to True if you have CUDA
        )
        logger.info("PaddleOCR engine ready.")
    return ocr_engine


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
    return jsonify({"ok": True, "service": "JCC OCR Server", "port": 5000})


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
        texts = run_ocr(image)

        heroes = match_heroes(texts, game_data.get("heroes", []))
        traits = match_traits(texts, game_data.get("traits", []))
        items = match_items(
            texts,
            game_data.get("baseItems", []),
            game_data.get("recipes", {})
        )

        return jsonify({
            "ok": True,
            "timestamp": datetime.now().isoformat(),
            "texts": texts,
            "heroes": heroes,
            "traits": traits,
            "items": items
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
        texts = run_ocr(image)

        recognized = {
            "heroes": match_heroes(texts, game_data.get("heroes", [])),
            "traits": match_traits(texts, game_data.get("traits", [])),
            "items": match_items(
                texts,
                game_data.get("baseItems", []),
                game_data.get("recipes", {})
            )
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
        texts = run_ocr(image)

        opponent_heroes = match_heroes(texts, game_data.get("heroes", []))
        opponent_traits = match_traits(texts, game_data.get("traits", []))

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
