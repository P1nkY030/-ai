const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const dataPath = path.join(root, "data.json");
const seedPath = path.join(root, "data.seed.json");
const port = Number(process.env.PORT || 4173);
const ocrPort = Number(process.env.OCR_PORT || 5000);

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml"
};

function nowText() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function seedData() {
  if (fs.existsSync(seedPath)) {
    return JSON.parse(fs.readFileSync(seedPath, "utf8"));
  }

  // 回退：当 data.seed.json 不存在时，返回 versions 数组格式
  return {
    defaultVersionId: "s11-14-12",
    versions: [
      {
        id: "s11-14-12",
        name: "S11 14.12",
        season: "画之灵",
        patch: "14.12",
        status: "正式服",
        updatedAt: nowText(),
        source: "内置回退数据",
        data: {
          traits: [
            { name: "剪纸仙灵", breakpoints: [3, 5, 7, 10] },
            { name: "天将", breakpoints: [2, 3, 4, 5, 6] },
            { name: "决斗大师", breakpoints: [2, 4, 6, 8] },
            { name: "斗士", breakpoints: [2, 4, 6, 8] },
            { name: "法师", breakpoints: [2, 4, 6, 8] },
            { name: "幽魂", breakpoints: [2, 4, 6] },
            { name: "狙神", breakpoints: [2, 4, 6] },
            { name: "武仙子", breakpoints: [2, 3, 4] },
            { name: "圣贤", breakpoints: [2, 3, 4, 5] },
            { name: "夜幽", breakpoints: [2, 4, 6, 8] }
          ],
          heroes: [
            { name: "凯尔", cost: 4, traits: ["剪纸仙灵", "武仙子"] },
            { name: "加里奥", cost: 4, traits: ["剪纸仙灵", "斗士"] },
            { name: "希维尔", cost: 1, traits: ["剪纸仙灵", "狙神"] },
            { name: "锐雯", cost: 2, traits: ["剪纸仙灵", "斗士"] },
            { name: "佐伊", cost: 3, traits: ["剪纸仙灵", "法师"] },
            { name: "洛", cost: 5, traits: ["武仙子", "圣贤"] },
            { name: "李青", cost: 4, traits: ["天将", "决斗大师"] },
            { name: "亚索", cost: 1, traits: ["天将", "决斗大师"] },
            { name: "沃利贝尔", cost: 3, traits: ["天将", "斗士"] },
            { name: "墨菲特", cost: 1, traits: ["天将", "斗士"] },
            { name: "拉克丝", cost: 2, traits: ["幽魂", "法师"] },
            { name: "辛德拉", cost: 4, traits: ["夜幽", "法师"] },
            { name: "阿狸", cost: 1, traits: ["夜幽", "法师"] },
            { name: "瑟提", cost: 5, traits: ["夜幽", "斗士"] },
            { name: "艾希", cost: 4, traits: ["幽魂", "狙神"] },
            { name: "赛娜", cost: 2, traits: ["幽魂", "狙神"] },
            { name: "俄洛伊", cost: 3, traits: ["幽魂", "斗士"] },
            { name: "黛安娜", cost: 3, traits: ["圣贤", "法师"] }
          ],
          baseItems: [
            { id: "sword", name: "暴风大剑", stat: "攻击力" },
            { id: "bow", name: "反曲之弓", stat: "攻速" },
            { id: "rod", name: "无用大棒", stat: "法强" },
            { id: "tear", name: "女神之泪", stat: "法力值" },
            { id: "vest", name: "锁子甲", stat: "护甲" },
            { id: "cloak", name: "负极斗篷", stat: "魔抗" },
            { id: "belt", name: "巨人腰带", stat: "生命值" },
            { id: "glove", name: "拳套", stat: "暴击" }
          ],
          recipes: {
            "bow+sword": { name: "巨人杀手", desc: "适合持续输出核心。", tags: ["物理输出", "通用 C"] },
            "rod+sword": { name: "海克斯科技枪刃", desc: "补充续航与容错。", tags: ["续航", "法术"] },
            "sword+tear": { name: "朔极之矛", desc: "提升技能释放频率。", tags: ["回蓝", "启动"] },
            "vest+sword": { name: "夜之锋刃", desc: "给近战主 C 更高容错。", tags: ["保命", "物理"] },
            "cloak+sword": { name: "饮血剑", desc: "兼顾输出与护盾。", tags: ["续航", "战士"] },
            "belt+sword": { name: "基克的先驱", desc: "提高相邻队友攻速。", tags: ["辅助", "攻速"] },
            "glove+sword": { name: "无尽之刃", desc: "高爆发标配。", tags: ["暴击", "爆发"] },
            "bow+bow": { name: "鬼索的狂暴之刃", desc: "持续攻速核心装。", tags: ["攻速", "长线"] },
            "bow+rod": { name: "纳什之牙", desc: "施法后强化普攻。", tags: ["混伤", "攻速"] },
            "bow+tear": { name: "斯塔缇克电刃", desc: "过渡强并削魔抗。", tags: ["过渡", "削抗"] },
            "bow+vest": { name: "泰坦的坚决", desc: "可叠层成长。", tags: ["成长", "战士"] },
            "bow+cloak": { name: "卢安娜的飓风", desc: "扩大后排覆盖面。", tags: ["分裂箭", "后排"] },
            "belt+bow": { name: "兹若特传送门", desc: "拖节奏与打牵制。", tags: ["前排", "召唤"] },
            "bow+glove": { name: "最后的轻语", desc: "降低护甲。", tags: ["破甲", "物理"] },
            "rod+rod": { name: "灭世者的死亡之帽", desc: "纯法强爆发。", tags: ["法强", "爆发"] },
            "rod+tear": { name: "大天使之杖", desc: "随时间增加法强。", tags: ["成长", "法系"] },
            "rod+vest": { name: "钢铁烈阳之匣", desc: "群体护盾。", tags: ["团队", "护盾"] },
            "cloak+rod": { name: "离子火花", desc: "近距离削减魔抗。", tags: ["削抗", "前排"] },
            "belt+rod": { name: "莫雷洛秘典", desc: "重伤与灼烧兼备。", tags: ["重伤", "范围"] },
            "glove+rod": { name: "珠光护手", desc: "技能可暴击。", tags: ["法爆", "法系"] },
            "tear+tear": { name: "蓝霸符", desc: "适合低蓝耗法师。", tags: ["回蓝", "法师"] },
            "tear+vest": { name: "冰霜之心", desc: "限制周围敌人攻速。", tags: ["限制", "功能"] },
            "cloak+tear": { name: "圣杯", desc: "给邻格队友提供法强。", tags: ["辅助", "法强"] },
            "belt+tear": { name: "救赎", desc: "团队治疗与减伤。", tags: ["团队", "治疗"] },
            "glove+tear": { name: "正义之手", desc: "输出与续航兼备。", tags: ["通用", "续航"] },
            "vest+vest": { name: "棘刺背心", desc: "标准坦装。", tags: ["坦度", "反伤"] },
            "cloak+vest": { name: "石像鬼石板甲", desc: "单顶前排稳定。", tags: ["坦度", "主坦"] },
            "belt+vest": { name: "日炎斗篷", desc: "稳定挂重伤。", tags: ["重伤", "前排"] },
            "glove+vest": { name: "静止法衣", desc: "延缓敌方关键位启动。", tags: ["控制", "对位"] },
            "cloak+cloak": { name: "巨龙之爪", desc: "针对法系爆发。", tags: ["魔抗", "前排"] },
            "belt+cloak": { name: "坚定之心", desc: "通用减伤坦装。", tags: ["减伤", "通用"] },
            "cloak+glove": { name: "水银", desc: "关键主 C 防控。", tags: ["免控", "主 C"] },
            "belt+belt": { name: "狂徒铠甲", desc: "高额生命值。", tags: ["血量", "坦装"] },
            "belt+glove": { name: "女妖面纱", desc: "保护相邻核心。", tags: ["保护", "辅助"] },
            "glove+glove": { name: "窃贼手套", desc: "灵活补装备。", tags: ["灵活", "副 C"] }
          },
          comps: [
            {
              id: "comp-paper-kayle",
              name: "剪纸仙灵凯尔",
              tier: "S",
              difficulty: "中等",
              carries: ["凯尔", "加里奥"],
              heroes: ["希维尔", "锐雯", "佐伊", "加里奥", "凯尔", "洛", "黛安娜"],
              traits: ["剪纸仙灵", "武仙子", "圣贤", "斗士"],
              items: { "凯尔": ["鬼索的狂暴之刃", "珠光护手", "正义之手"], "加里奥": ["狂徒铠甲", "石像鬼石板甲", "救赎"] },
              plan: "前期用剪纸仙灵配斗士过渡，4-1 找凯尔与加里奥两星。",
              positioning: "加里奥单顶，凯尔沉底站安全角。",
              notes: "适合稳定上分。"
            }
          ]
        }
      }
    ]
  };
}

function ensureDataFile() {
  if (!fs.existsSync(dataPath)) {
    fs.writeFileSync(dataPath, JSON.stringify(seedData(), null, 2), "utf8");
  }
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", chunk => {
      body += chunk;
      if (body.length > 2_000_000) {
        req.destroy();
        reject(new Error("Request body too large"));
      }
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
  });
}

function sendJson(res, status, data) {
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(data));
}

function sendStatic(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(url.pathname);
  const requestPath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": mimeTypes[path.extname(filePath)] || "application/octet-stream" });
    res.end(content);
  });
}

ensureDataFile();

const server = http.createServer(async (req, res) => {
  try {
    if (req.url === "/api/health") {
      sendJson(res, 200, { ok: true, dataPath });
      return;
    }
    if (req.url === "/api/data" && req.method === "GET") {
      ensureDataFile();
      sendJson(res, 200, JSON.parse(fs.readFileSync(dataPath, "utf8")));
      return;
    }
    if (req.url === "/api/data" && req.method === "PUT") {
      const data = await readJsonBody(req);
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
      sendJson(res, 200, data);
      return;
    }
    if (req.url === "/api/reset" && req.method === "POST") {
      const data = seedData();
      fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf8");
      sendJson(res, 200, data);
      return;
    }

    // OCR proxy routes - forward to Python OCR server
    if (req.url.startsWith("/ocr/") && req.method === "POST") {
      const body = await readJsonBody(req);
      const ocrUrl = `http://127.0.0.1:${ocrPort}${req.url}`;
      try {
        const ocrRes = await fetch(ocrUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        const ocrData = await ocrRes.json();
        sendJson(res, ocrRes.status, ocrData);
      } catch (err) {
        sendJson(res, 502, { error: "OCR 服务不可用，请确认 ocr_server.py 已启动。", detail: err.message });
      }
      return;
    }
    if (req.url === "/ocr/health" && req.method === "GET") {
      try {
        const ocrRes = await fetch(`http://127.0.0.1:${ocrPort}/ocr/health`);
        const ocrData = await ocrRes.json();
        sendJson(res, 200, ocrData);
      } catch {
        sendJson(res, 502, { ok: false, error: "OCR 服务未启动" });
      }
      return;
    }

    if (req.url.startsWith("/api/")) {
      sendJson(res, 404, { error: "Not found" });
      return;
    }
    sendStatic(req, res);
  } catch (err) {
    sendJson(res, 500, { error: err.message });
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`JCC admin API running at http://127.0.0.1:${port}`);
});
