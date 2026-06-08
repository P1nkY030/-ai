# 金铲铲阵容中控台

一个本地可运行的阵容资料管理台，前端使用原生 `HTML + CSS + JavaScript`，后台使用无依赖 Node API 读写 `data.json`。集成 Python PaddleOCR 后端识别服务，支持智能对局助手。

## 快速启动

### 方式一：一键启动（推荐）

```powershell
# 双击 start.bat 即可
start.bat
```

自动启动 Node 服务 + Python OCR 服务，并打开浏览器。

### 方式二：开机自启

```powershell
# 运行安装脚本，注册到 Windows 启动项
install-autostart.bat

# 取消开机自启
uninstall-autostart.bat
```

### 方式三：手动启动

```powershell
# 终端 1：启动 Web 服务
node server.js

# 终端 2：启动 OCR 服务（可选，对局助手需要）
python ocr_server.py
```

然后访问：[http://127.0.0.1:4173](http://127.0.0.1:4173)

## 环境依赖

### Node.js（必需）

- Node.js 18+

### Python（可选，对局助手需要）

```powershell
pip install -r requirements.txt
```

依赖列表：
- `paddlepaddle` - PaddlePaddle 深度学习框架
- `paddleocr` - PaddleOCR 文字识别
- `flask` - Web 框架
- `flask-cors` - 跨域支持
- `Pillow` - 图像处理
- `numpy` - 数值计算

## 已实现功能

### 基础功能
- 管理员登录
- 接入真实本地后台 API：`GET /api/data`、`PUT /api/data`、`POST /api/reset`
- 阵容库浏览、强度筛选、难度筛选、全局搜索
- 阵容管理页：阵容英雄、核心英雄、装备、运营节奏、站位说明
- 英雄、羁绊、装备独立管理页
- 版本号与更新时间展示
- 阵容站位图展示与编辑
- 推荐强化符文维护
- 羁绊模拟与装备合成查询

### 屏幕识别
- 通过浏览器屏幕捕获 + OCR 匹配英雄、羁绊、装备
- 支持实时预览和定时自动识别

### 对局助手（新）
- **目标阵容选择**：选择想玩的阵容，系统自动分析
- **实时屏幕识别**：通过 PaddleOCR 后端精准识别游戏画面
- **购买优先级**：根据目标阵容推荐当前应该购买的英雄
- **羁绊进度**：实时显示目标羁绊的触发状态和差距
- **装备推荐**：根据核心英雄推荐装备合成路径
- **对手分析**：识别对手英雄和羁绊，提供针对性建议
- **站位建议**：根据目标阵容推荐最优站位

## API

- `GET /api/health`：检查服务状态
- `GET /api/data`：读取完整资料库
- `PUT /api/data`：保存完整资料库
- `POST /api/reset`：从 `data.seed.json` 恢复种子数据
- `GET /ocr/health`：检查 OCR 服务状态
- `POST /ocr/recognize`：OCR 文字识别
- `POST /ocr/analyze-board`：棋盘分析（含阵容建议）
- `POST /ocr/analyze-opponent`：对手分析

## 页面结构

1. 登录页
2. 阵容库
3. 羁绊模拟
4. 装备合成
5. 屏幕识别
6. **对局助手**
7. 阵容管理
8. 英雄管理
9. 羁绊管理
10. 装备管理

## 数据说明

核心数据存放在 `data.json`（首次启动自动创建）：

- `meta.version`：版本号
- `meta.updatedAt`：全局更新时间
- `comps[].augments`：推荐强化符文
- `comps[].board`：站位图，使用 `{ hero, row, col }` 记录 4 x 7 棋盘位置
- `heroes`：英雄资料
- `traits`：羁绊资料
- `baseItems`：基础散件
- `recipes`：合成装备

`data.seed.json` 是恢复种子数据的来源。

## 文件结构

```
├── index.html          # 前端页面
├── app.js              # 前端逻辑
├── styles.css          # 样式
├── server.js           # Node.js API 服务
├── ocr_server.py       # Python OCR 服务
├── requirements.txt    # Python 依赖
├── data.json           # 运行时数据（自动创建）
├── data.seed.json      # 种子数据
├── start.bat           # 一键启动脚本
├── install-autostart.bat   # 开机自启安装
└── uninstall-autostart.bat # 开机自启卸载
```
