# YOLO Models

Put your trained screen-recognition model here.

Default path:

```text
models/screen.pt
```

You can override it before starting the Python service:

```powershell
$env:YOLO_MODEL_PATH="C:\path\to\your\model.pt"
$env:YOLO_CONF="0.35"
$env:YOLO_DEVICE="0"
python ocr_server.py
```

Recommended class labels:

```text
hero_<hero name>
trait_<trait name>
item_<item name>
```

Exact data names also work when the model class name matches a hero, trait, or item name in `data.json`.
