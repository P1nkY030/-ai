# 金铲铲阵容中控台

一个可直接打开的静态管理台页面，支持按游戏版本维护阵容、英雄、羁绊和装备数据。

## 登录信息

- 账号：`YJJ`
- 密码：`YJJ`
- 权限：管理员

系统仅开放这一个账户，不提供注册功能。登录态和后台编辑数据会保存在当前浏览器 `localStorage`。

## 打开方式

直接打开同目录下的 [index.html](D:\1111aaa\index.html) 即可使用。

也可以启动本地静态服务：

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

然后访问 [http://127.0.0.1:4173](http://127.0.0.1:4173)。

## 文件结构

- [index.html](D:\1111aaa\index.html)：页面结构
- [styles.css](D:\1111aaa\styles.css)：界面样式
- [app.js](D:\1111aaa\app.js)：登录、版本切换、编辑与渲染逻辑
- [data/versions.js](D:\1111aaa\data\versions.js)：所有游戏版本数据

## 版本数据维护

所有版本数据统一放在 `data/versions.js` 的 `GAME_VERSION_CATALOG` 里。

每个版本对象包含：

- `id`：版本唯一标识，例如 `s11-14-12`
- `name`：页面显示名称，例如 `S11 14.12`
- `season`：赛季名称
- `patch`：版本号
- `status`：正式服、测试服、草稿等
- `updatedAt`：维护日期
- `data.traits`：羁绊数据
- `data.heroes`：英雄数据
- `data.baseItems`：基础装备
- `data.recipes`：装备合成
- `data.comps`：阵容数据

## 在 GitHub 更新新游戏版本

1. 打开 `data/versions.js`
2. 复制 `versions` 数组里的 `S12 新版本模板`
3. 修改 `id`、`name`、`season`、`patch`、`status`、`updatedAt`
4. 替换该版本里的 `traits`、`heroes`、`comps`
5. 如装备变化，同时更新 `baseItems` 和 `recipes`
6. 如果新版本要默认展示，修改 `defaultVersionId`
7. 提交到 GitHub

页面顶部的“游戏版本”下拉框会自动读取 `versions` 数组，不需要额外改 HTML。

## 后台编辑说明

登录后进入“管理后台”：

- 顶部可以切换游戏版本
- 新增、编辑、删除阵容只影响当前选中的版本
- “新建版本”会从当前版本复制一份到浏览器本地
- “导出当前版本 JSON”会复制当前版本数据，方便粘贴回 `data/versions.js`

注意：浏览器后台编辑是本地数据，不会自动写回 GitHub。正式发布仍需要把导出的 JSON 手动更新到 `data/versions.js` 并提交。

## 后续可扩展

1. 接入真实后台 API，让版本数据直接保存到数据库
2. 拆分英雄、羁绊、装备独立管理页
3. 增加版本对比和更新日志
4. 增加阵容站位图、推荐强化符文
5. 增加从公开数据源自动同步版本数据的脚本
