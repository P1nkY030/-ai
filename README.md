# 金铲铲阵容中控台

一个本地可运行的阵容资料管理台，前端使用原生 `HTML + CSS + JavaScript`，后台使用无依赖 Node API 读写 `data.json`。

## 已实现功能

- 管理员登录，默认账号 / 密码：`YJJ` / `YJJ`
- 接入真实本地后台 API：`GET /api/data`、`PUT /api/data`、`POST /api/reset`
- 阵容库浏览、强度筛选、难度筛选、全局搜索
- 阵容管理页：阵容英雄、核心英雄、装备、运营节奏、站位说明
- 英雄、羁绊、装备独立管理页
- 版本号与更新时间展示
- 阵容站位图展示与编辑
- 推荐强化符文维护
- 羁绊模拟与装备合成查询
- 屏幕识别：通过浏览器屏幕捕获 + Tesseract.js OCR 匹配英雄、羁绊、装备

## 启动方式

在项目目录运行：

```powershell
node server.js
```

然后访问：

[http://127.0.0.1:4173](http://127.0.0.1:4173)

首次启动时会自动创建 `data.json`。之后页面上的管理操作会通过 API 保存到这个文件。

`data.seed.json` 是恢复种子数据的来源，点击页面里的“恢复种子数据”或请求 `POST /api/reset` 时会用它覆盖 `data.json`。

## API

- `GET /api/health`：检查服务状态
- `GET /api/data`：读取完整资料库
- `PUT /api/data`：保存完整资料库
- `POST /api/reset`：从 `data.seed.json` 恢复种子数据

如果直接用 `file://` 打开 `index.html`，页面会使用内置数据和浏览器缓存兜底，但不能使用真实 API，也不能使用屏幕捕获。

## 页面结构

1. 登录页
2. 阵容库
3. 羁绊模拟
4. 装备合成
5. 屏幕识别
6. 阵容管理
7. 英雄管理
8. 羁绊管理
9. 装备管理

## 数据说明

核心数据存放在 `data.json`：

- `meta.version`：版本号
- `meta.updatedAt`：全局更新时间
- `comps[].augments`：推荐强化符文
- `comps[].board`：站位图，使用 `{ hero, row, col }` 记录 4 x 7 棋盘位置
- `heroes`：英雄资料
- `traits`：羁绊资料
- `baseItems`：基础散件
- `recipes`：合成装备
