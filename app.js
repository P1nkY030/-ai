const defaultData = {
  meta: {
    version: "星神",
    updatedAt: "2026-06-07 23:20",
    source: "内置种子数据"
  },
  traits: [
    { id: "trait-storyweaver", name: "剪纸仙灵", breakpoints: [3, 5, 7, 10], desc: "召唤凯尔并随羁绊层级强化。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-heavenly", name: "天将", breakpoints: [2, 3, 4, 5, 6], desc: "全队获得额外属性，天将单位收益更高。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-duelist", name: "决斗大师", breakpoints: [2, 4, 6, 8], desc: "攻击叠加攻速，适合持续作战。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-bruiser", name: "斗士", breakpoints: [2, 4, 6, 8], desc: "提供生命值，增强前排承伤。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-arcanist", name: "法师", breakpoints: [2, 4, 6, 8], desc: "提升法术强度，适合法系主 C。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-ghostly", name: "幽魂", breakpoints: [2, 4, 6], desc: "叠加易伤，强化集火效率。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-sniper", name: "狙神", breakpoints: [2, 4, 6], desc: "距离越远伤害越高。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-sage", name: "武仙子", breakpoints: [2, 3, 4], desc: "前后排获得不同加成。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-dragonlord", name: "圣贤", breakpoints: [2, 3, 4, 5], desc: "周期性强化友军并造成控制。", updatedAt: "2026-06-07 23:20" },
    { id: "trait-umbral", name: "夜幽", breakpoints: [2, 4, 6, 8], desc: "提供护盾与斩杀线收益。", updatedAt: "2026-06-07 23:20" }
  ],
  heroes: [
    { id: "hero-kayle", name: "凯尔", cost: 4, traits: ["剪纸仙灵", "武仙子"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-galio", name: "加里奥", cost: 4, traits: ["剪纸仙灵", "斗士"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-sivir", name: "希维尔", cost: 1, traits: ["剪纸仙灵", "狙神"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-riven", name: "锐雯", cost: 2, traits: ["剪纸仙灵", "斗士"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-zyra", name: "佐伊", cost: 3, traits: ["剪纸仙灵", "法师"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-luo", name: "洛", cost: 5, traits: ["武仙子", "圣贤"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-lee", name: "李青", cost: 4, traits: ["天将", "决斗大师"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-yasuo", name: "亚索", cost: 1, traits: ["天将", "决斗大师"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-volibear", name: "沃利贝尔", cost: 3, traits: ["天将", "斗士"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-malphite", name: "墨菲特", cost: 1, traits: ["天将", "斗士"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-lux", name: "拉克丝", cost: 2, traits: ["幽魂", "法师"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-syndra", name: "辛德拉", cost: 4, traits: ["夜幽", "法师"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-ahri", name: "阿狸", cost: 1, traits: ["夜幽", "法师"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-sett", name: "瑟提", cost: 5, traits: ["夜幽", "斗士"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-ashe", name: "艾希", cost: 4, traits: ["幽魂", "狙神"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-senna", name: "赛娜", cost: 2, traits: ["幽魂", "狙神"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-ornn", name: "奥恩", cost: 3, traits: ["幽魂", "斗士"], updatedAt: "2026-06-07 23:20" },
    { id: "hero-diana", name: "黛安娜", cost: 3, traits: ["圣贤", "法师"], updatedAt: "2026-06-07 23:20" }
  ],
  baseItems: [
    { id: "sword", name: "暴风大剑", stat: "攻击力", updatedAt: "2026-06-07 23:20" },
    { id: "bow", name: "反曲之弓", stat: "攻速", updatedAt: "2026-06-07 23:20" },
    { id: "rod", name: "无用大棒", stat: "法强", updatedAt: "2026-06-07 23:20" },
    { id: "tear", name: "女神之泪", stat: "法力值", updatedAt: "2026-06-07 23:20" },
    { id: "vest", name: "锁子甲", stat: "护甲", updatedAt: "2026-06-07 23:20" },
    { id: "cloak", name: "负极斗篷", stat: "魔抗", updatedAt: "2026-06-07 23:20" },
    { id: "belt", name: "巨人腰带", stat: "生命值", updatedAt: "2026-06-07 23:20" },
    { id: "glove", name: "拳套", stat: "暴击", updatedAt: "2026-06-07 23:20" }
  ],
  recipes: {
    "bow+sword": { name: "巨人杀手", desc: "适合持续输出核心，处理高血量前排稳定。", tags: ["物理输出", "通用 C"], updatedAt: "2026-06-07 23:20" },
    "rod+sword": { name: "海克斯科技枪刃", desc: "补充续航与容错，适合技能型主 C。", tags: ["续航", "法术"], updatedAt: "2026-06-07 23:20" },
    "sword+tear": { name: "朔极之矛", desc: "提升技能释放频率，适合启动依赖型英雄。", tags: ["回蓝", "启动"], updatedAt: "2026-06-07 23:20" },
    "vest+sword": { name: "夜之锋刃", desc: "给近战主 C 更高容错，避免被集火秒杀。", tags: ["保命", "物理"], updatedAt: "2026-06-07 23:20" },
    "cloak+sword": { name: "饮血剑", desc: "兼顾输出与护盾，适合前排战士和半坦主 C。", tags: ["续航", "战士"], updatedAt: "2026-06-07 23:20" },
    "belt+sword": { name: "基克的先驱", desc: "提高相邻队友攻速，适合固定后排站位。", tags: ["辅助", "攻速"], updatedAt: "2026-06-07 23:20" },
    "glove+sword": { name: "无尽之刃", desc: "高爆发标配，适合吃暴击收益的后排。", tags: ["暴击", "爆发"], updatedAt: "2026-06-07 23:20" },
    "bow+bow": { name: "鬼索的狂暴之刃", desc: "长线作战越打越强，是持续攻速核心装。", tags: ["攻速", "长线"], updatedAt: "2026-06-07 23:20" },
    "bow+rod": { name: "纳什之牙", desc: "施法后强化普攻节奏，适合混伤核心。", tags: ["混伤", "攻速"], updatedAt: "2026-06-07 23:20" },
    "bow+tear": { name: "斯塔缇克电刃", desc: "前中期过渡强，能削减魔抗。", tags: ["过渡", "削抗"], updatedAt: "2026-06-07 23:20" },
    "bow+vest": { name: "泰坦的坚决", desc: "可叠层成长，适合站桩型战士。", tags: ["成长", "战士"], updatedAt: "2026-06-07 23:20" },
    "bow+cloak": { name: "卢安娜的飓风", desc: "扩大后排覆盖面，适合持续普攻输出。", tags: ["分裂箭", "后排"], updatedAt: "2026-06-07 23:20" },
    "belt+bow": { name: "兹若特传送门", desc: "拖节奏、打牵制，适合前排工具人。", tags: ["前排", "召唤"], updatedAt: "2026-06-07 23:20" },
    "bow+glove": { name: "最后的轻语", desc: "降低护甲，是物理阵容常见功能装。", tags: ["破甲", "物理"], updatedAt: "2026-06-07 23:20" },
    "rod+rod": { name: "灭世者的死亡之帽", desc: "纯法强爆发，给高倍率法系最直接。", tags: ["法强", "爆发"], updatedAt: "2026-06-07 23:20" },
    "rod+tear": { name: "大天使之杖", desc: "随着战斗时间增加法强，适合持久战。", tags: ["成长", "法系"], updatedAt: "2026-06-07 23:20" },
    "rod+vest": { name: "钢铁烈阳之匣", desc: "群体护盾，适合前排紧密站位。", tags: ["团队", "护盾"], updatedAt: "2026-06-07 23:20" },
    "cloak+rod": { name: "离子火花", desc: "近距离削减魔抗，适合主坦或副坦携带。", tags: ["削抗", "前排"], updatedAt: "2026-06-07 23:20" },
    "belt+rod": { name: "莫雷洛秘典", desc: "重伤与灼烧兼备，适合范围技能英雄。", tags: ["重伤", "范围"], updatedAt: "2026-06-07 23:20" },
    "glove+rod": { name: "珠光护手", desc: "技能可暴击，是法系主 C 核心装。", tags: ["法爆", "法系"], updatedAt: "2026-06-07 23:20" },
    "tear+tear": { name: "蓝霸符", desc: "适合低蓝耗法师频繁启动。", tags: ["回蓝", "法师"], updatedAt: "2026-06-07 23:20" },
    "tear+vest": { name: "冰霜之心", desc: "限制周围敌人攻速，克制贴脸阵容。", tags: ["限制", "功能"], updatedAt: "2026-06-07 23:20" },
    "cloak+tear": { name: "圣杯", desc: "给邻格队友提供法强，法系阵容常用。", tags: ["辅助", "法强"], updatedAt: "2026-06-07 23:20" },
    "belt+tear": { name: "救赎", desc: "提供团队治疗与减伤，前排保底价值高。", tags: ["团队", "治疗"], updatedAt: "2026-06-07 23:20" },
    "glove+tear": { name: "正义之手", desc: "输出与续航兼备，适合多种主 C。", tags: ["通用", "续航"], updatedAt: "2026-06-07 23:20" },
    "vest+vest": { name: "棘刺背心", desc: "标准坦装，抗暴击并补足护甲。", tags: ["坦度", "反伤"], updatedAt: "2026-06-07 23:20" },
    "cloak+vest": { name: "石像鬼石板甲", desc: "单顶前排非常稳，吃集火收益高。", tags: ["坦度", "主坦"], updatedAt: "2026-06-07 23:20" },
    "belt+vest": { name: "日炎斗篷", desc: "前期连胜常用，稳定挂重伤。", tags: ["重伤", "前排"], updatedAt: "2026-06-07 23:20" },
    "glove+vest": { name: "静止法衣", desc: "延缓敌方关键位启动，适合对位。", tags: ["控制", "对位"], updatedAt: "2026-06-07 23:20" },
    "cloak+cloak": { name: "巨龙之爪", desc: "针对法系爆发，高魔抗收益稳定。", tags: ["魔抗", "前排"], updatedAt: "2026-06-07 23:20" },
    "belt+cloak": { name: "坚定之心", desc: "通用减伤坦装，谁带都不亏。", tags: ["减伤", "通用"], updatedAt: "2026-06-07 23:20" },
    "cloak+glove": { name: "水银", desc: "关键主 C 保启动，防控价值直接。", tags: ["免控", "主 C"], updatedAt: "2026-06-07 23:20" },
    "belt+belt": { name: "狂徒铠甲", desc: "高额生命值，适合裸坦与副坦。", tags: ["血量", "坦装"], updatedAt: "2026-06-07 23:20" },
    "belt+glove": { name: "女妖面纱", desc: "保护相邻核心不被第一时间控制。", tags: ["保护", "辅助"], updatedAt: "2026-06-07 23:20" },
    "glove+glove": { name: "窃贼手套", desc: "灵活补装备，适合副 C 与打工牌。", tags: ["灵活", "副 C"], updatedAt: "2026-06-07 23:20" }
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
      augments: ["剪纸之徽", "珠光莲花", "治疗法球", "了解你的敌人"],
      items: {
        "凯尔": ["鬼索的狂暴之刃", "珠光护手", "正义之手"],
        "加里奥": ["狂徒铠甲", "石像鬼石板甲", "救赎"]
      },
      plan: "2-1 升四，2-5 升五，前期优先用剪纸仙灵配任意斗士过渡。4-1 找凯尔与加里奥两星，血量健康时可以晚一点发力。",
      positioning: "加里奥单顶吸收首波伤害，凯尔沉底站安全角。遇到刺客或突进阵容时，核心和保护位同步换边。",
      board: [
        { hero: "加里奥", row: 0, col: 3 },
        { hero: "锐雯", row: 1, col: 2 },
        { hero: "洛", row: 1, col: 4 },
        { hero: "黛安娜", row: 2, col: 3 },
        { hero: "佐伊", row: 3, col: 1 },
        { hero: "凯尔", row: 3, col: 5 },
        { hero: "希维尔", row: 3, col: 6 }
      ],
      notes: "吃装备质量与中期质量，适合稳定上分。",
      updatedAt: "2026-06-07 23:20"
    },
    {
      id: "comp-heavenly-lee",
      name: "天将决斗李青",
      tier: "A",
      difficulty: "困难",
      carries: ["李青", "沃利贝尔"],
      heroes: ["亚索", "墨菲特", "沃利贝尔", "李青", "洛", "瑟提"],
      traits: ["天将", "决斗大师", "斗士", "圣贤"],
      augments: ["决斗转职", "参天巨人的坚决", "理想主义", "潘朵拉的装备"],
      items: {
        "李青": ["饮血剑", "泰坦的坚决", "夜之锋刃"],
        "沃利贝尔": ["泰坦的坚决", "饮血剑", "正义之手"]
      },
      plan: "前期用战士体系打工，保持连胜或稳血。7 级补李青和体系牌，8 级追整体质量。",
      positioning: "李青从侧翼切入避开主坦，沃利贝尔站第二排承接前段压力，洛负责保护后排与补控制。",
      board: [
        { hero: "墨菲特", row: 0, col: 2 },
        { hero: "瑟提", row: 0, col: 4 },
        { hero: "沃利贝尔", row: 1, col: 3 },
        { hero: "李青", row: 1, col: 5 },
        { hero: "洛", row: 2, col: 2 },
        { hero: "亚索", row: 2, col: 4 }
      ],
      notes: "成型上限高，但依赖装备完整度。",
      updatedAt: "2026-06-07 23:20"
    },
    {
      id: "comp-ghost-ashe",
      name: "幽魂狙神艾希",
      tier: "A",
      difficulty: "中等",
      carries: ["艾希", "奥恩"],
      heroes: ["赛娜", "拉克丝", "奥恩", "艾希", "瑟提", "黛安娜"],
      traits: ["幽魂", "狙神", "斗士", "圣贤"],
      augments: ["狙神之徽", "联合抵抗", "打气", "小伙伴"],
      items: {
        "艾希": ["鬼索的狂暴之刃", "最后的轻语", "巨人杀手"],
        "奥恩": ["日炎斗篷", "石像鬼石板甲", "坚定之心"]
      },
      plan: "以赛娜和任意斗士过渡，优先做攻速与破甲。8 级补齐四费质量后滚雪球。",
      positioning: "艾希站最远角吃狙神收益，前排分散避免同时吃范围技能。遇切后阵容时让保护位紧贴艾希。",
      board: [
        { hero: "奥恩", row: 0, col: 2 },
        { hero: "瑟提", row: 0, col: 4 },
        { hero: "黛安娜", row: 1, col: 3 },
        { hero: "拉克丝", row: 3, col: 1 },
        { hero: "赛娜", row: 3, col: 5 },
        { hero: "艾希", row: 3, col: 6 }
      ],
      notes: "节奏平滑，适合熟悉站位博弈的玩家。",
      updatedAt: "2026-06-07 23:20"
    },
    {
      id: "comp-night-syndra",
      name: "夜幽法师辛德拉",
      tier: "B",
      difficulty: "简单",
      carries: ["辛德拉", "瑟提"],
      heroes: ["阿狸", "拉克丝", "黛安娜", "辛德拉", "瑟提", "洛"],
      traits: ["夜幽", "法师", "斗士", "圣贤"],
      augments: ["法师之徽", "魔杖", "珠光莲花", "药剂师"],
      items: {
        "辛德拉": ["蓝霸符", "珠光护手", "灭世者的死亡之帽"],
        "瑟提": ["狂徒铠甲", "巨龙之爪", "棘刺背心"]
      },
      plan: "前期以低费法师打工，优先做蓝量与法爆。7 级找辛德拉稳住，8 级补高费控制与前排质量。",
      positioning: "辛德拉沉底避免先手控制，瑟提站前排中轴顶第一波。若对手切后能力强，让洛和黛安娜回收保护。",
      board: [
        { hero: "瑟提", row: 0, col: 3 },
        { hero: "洛", row: 1, col: 2 },
        { hero: "黛安娜", row: 1, col: 4 },
        { hero: "阿狸", row: 3, col: 1 },
        { hero: "拉克丝", row: 3, col: 3 },
        { hero: "辛德拉", row: 3, col: 5 }
      ],
      notes: "装备要求友好，适合开局法系装多时转入。",
      updatedAt: "2026-06-07 23:20"
    }
  ]
};

const credentials = Object.freeze({ username: "YJJ", password: "YJJ", role: "管理员" });
const fallbackKey = "jcc_console_api_fallback_v1";
const sessionKey = "jcc_console_session_v1";
const API_BASE = window.location.protocol === "file:" ? "" : "";

const state = {
  data: structuredClone(defaultData),
  activeView: "comps",
  selectedCompId: "",
  tierFilter: "全部",
  difficultyFilter: "全部",
  search: "",
  selectedHeroes: [],
  selectedItems: [],
  isAuthenticated: false,
  apiOnline: false,
  editingBoard: [],
  recognition: {
    imageData: null,
    ocrText: "",
    matchedHeroes: [],
    matchedTraits: [],
    matchedItems: [],
    confirmedHeroes: [],
    confirmedTraits: [],
    confirmedItems: [],
    isProcessing: false,
    captureStream: null,
    autoTimer: null
  },
  gameAssistant: {
    selectedCompId: "",
    isActive: false,
    captureStream: null,
    autoTimer: null,
    isProcessing: false,
    ocrOnline: false,
    lastAnalysis: null,
    currentHeroes: []
  }
};

const viewMeta = {
  comps: { eyebrow: "Meta Overview", title: "阵容库", description: "按强度、难度与核心英雄筛选当前版本阵容。" },
  builder: { eyebrow: "Synergy Simulator", title: "羁绊模拟", description: "手动搭配英雄，实时查看羁绊触发节点。" },
  items: { eyebrow: "Item Recipes", title: "装备合成", description: "组合基础散件，快速确认成装方向与适配定位。" },
  recognition: { eyebrow: "Screen Recognition", title: "屏幕识别", description: "截取游戏画面，自动识别英雄、羁绊与装备信息。" },
  gameAssistant: { eyebrow: "Game Assistant", title: "对局助手", description: "选择目标阵容，实时分析对局，智能推荐购买、站位与装备。" },
  admin: { eyebrow: "Lineup Admin", title: "阵容管理", description: "维护阵容、站位图、推荐强化符文、装备与运营节奏。" },
  heroAdmin: { eyebrow: "Hero Admin", title: "英雄管理", description: "独立维护英雄费用、羁绊与更新时间。" },
  traitAdmin: { eyebrow: "Trait Admin", title: "羁绊管理", description: "独立维护羁绊触发人数与说明。" },
  itemAdmin: { eyebrow: "Item Admin", title: "装备管理", description: "独立维护散件与合成装备数据。" }
};

const $ = id => document.getElementById(id);
const els = {
  authShell: $("authShell"), appShell: $("appShell"), loginForm: $("loginForm"), loginError: $("loginError"),
  usernameInput: $("usernameInput"), passwordInput: $("passwordInput"), accountName: $("accountName"), logoutBtn: $("logoutBtn"),
  viewTitle: $("viewTitle"), viewEyebrow: $("viewEyebrow"), viewDescription: $("viewDescription"), navItems: document.querySelectorAll(".nav-item"),
  dataSourceText: $("dataSourceText"), versionBadge: $("versionBadge"), updatedBadge: $("updatedBadge"),
  overviewGrid: $("overviewGrid"), globalSearch: $("globalSearch"), resetDataBtn: $("resetDataBtn"), reloadDataBtn: $("reloadDataBtn"),
  difficultyFilter: $("difficultyFilter"), filterButtons: document.querySelectorAll(".filter-button"),
  compList: $("compList"), compCount: $("compCount"), compDetail: $("compDetail"),
  heroPool: $("heroPool"), selectedHeroes: $("selectedHeroes"), selectedHeroCount: $("selectedHeroCount"), traitResults: $("traitResults"), clearBuilderBtn: $("clearBuilderBtn"),
  baseItems: $("baseItems"), itemRecipeResult: $("itemRecipeResult"), recipeTable: $("recipeTable"), clearItemsBtn: $("clearItemsBtn"),
  adminCompList: $("adminCompList"), newCompBtn: $("newCompBtn"), compForm: $("compForm"), deleteCompBtn: $("deleteCompBtn"), saveState: $("saveState"),
  positionHeroSelect: $("positionHeroSelect"), positionEditor: $("positionEditor"), clearPositionBtn: $("clearPositionBtn"),
  heroAdminList: $("heroAdminList"), newHeroBtn: $("newHeroBtn"), heroForm: $("heroForm"), deleteHeroBtn: $("deleteHeroBtn"),
  traitAdminList: $("traitAdminList"), newTraitBtn: $("newTraitBtn"), traitForm: $("traitForm"), deleteTraitBtn: $("deleteTraitBtn"),
  itemAdminList: $("itemAdminList"), newItemBtn: $("newItemBtn"), itemForm: $("itemForm"), deleteItemBtn: $("deleteItemBtn"), itemKind: $("itemKind"),
  toast: $("toast"),
  views: {
    comps: $("compsView"), builder: $("builderView"), items: $("itemsView"), recognition: $("recognitionView"),
    gameAssistant: $("gameAssistantView"), admin: $("adminView"),
    heroAdmin: $("heroAdminView"), traitAdmin: $("traitAdminView"), itemAdmin: $("itemAdminView")
  },
  startCaptureBtn: $("startCaptureBtn"), stopCaptureBtn: $("stopCaptureBtn"), captureCanvas: $("captureCanvas"),
  captureVideo: $("captureVideo"), capturePlaceholder: $("capturePlaceholder"), liveIndicator: $("liveIndicator"),
  recognizeInterval: $("recognizeInterval"),
  ocrProgress: $("ocrProgress"), ocrProgressBar: $("ocrProgressBar"), ocrProgressText: $("ocrProgressText"), recognitionResult: $("recognitionResult"),
  ocrRawText: $("ocrRawText"), rawTextContent: $("rawTextContent"), toggleRawTextBtn: $("toggleRawTextBtn"), fillFormBtn: $("fillFormBtn"),
  // Game Assistant elements
  gaCompSelect: $("gaCompSelect"), gaStartBtn: $("gaStartBtn"), gaStopBtn: $("gaStopBtn"),
  gaVideo: $("gaVideo"), gaPlaceholder: $("gaPlaceholder"), gaLiveIndicator: $("gaLiveIndicator"),
  gaCaptureBtn: $("gaCaptureBtn"), gaInterval: $("gaInterval"),
  gaOcrStatusText: $("gaOcrStatusText"), gaCheckOcr: $("gaCheckOcr"),
  gaAnalysisTime: $("gaAnalysisTime"), gaBuyList: $("gaBuyList"),
  gaTraitList: $("gaTraitList"), gaItemList: $("gaItemList"),
  gaOpponentList: $("gaOpponentList"), gaPositionAdvice: $("gaPositionAdvice")
};

const form = {
  id: $("compId"), name: $("formName"), tier: $("formTier"), difficulty: $("formDifficulty"), carries: $("formCarries"),
  heroes: $("formHeroes"), traits: $("formTraits"), augments: $("formAugments"), items: $("formItems"), plan: $("formPlan"), positioning: $("formPositioning")
};
const heroForm = { id: $("heroId"), name: $("heroName"), cost: $("heroCost"), traits: $("heroTraits") };
const traitForm = { id: $("traitId"), name: $("traitName"), breakpoints: $("traitBreakpoints"), desc: $("traitDesc") };
const itemForm = { originalId: $("itemOriginalId"), id: $("itemId"), kind: $("itemKind"), name: $("itemName"), stat: $("itemStat"), recipeParts: $("itemRecipeParts"), tags: $("itemTags") };

function nowText() {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char]));
}

function splitList(value = "") {
  return value.split(/[,，、\n]/).map(item => item.trim()).filter(Boolean);
}

function parseNumbers(value = "") {
  return splitList(value).map(Number).filter(num => Number.isFinite(num) && num > 0);
}

function parseItems(text = "") {
  return text.split(/\n+/).reduce((acc, line) => {
    const [hero, rawItems] = line.split(/[:：]/);
    if (!hero || !rawItems) return acc;
    acc[hero.trim()] = splitList(rawItems);
    return acc;
  }, {});
}

function itemsObjectToText(items) {
  return Object.entries(items || {}).map(([hero, values]) => `${hero}: ${values.join(", ")}`).join("\n");
}

function normalizeRecipeKey(a, b) {
  return [a, b].sort().join("+");
}

function recipePartsFromKey(key) {
  return key.split("+");
}

function tierClass(tier = "") {
  return `tier-${tier.toLowerCase()}`;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => els.toast.classList.remove("show"), 2600);
}

async function requestJson(url, options = {}) {
  const response = await fetch(`${API_BASE}${url}`, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options
  });
  if (!response.ok) throw new Error(`API ${response.status}`);
  return response.json();
}

function saveFallback() {
  localStorage.setItem(fallbackKey, JSON.stringify(state.data));
}

async function loadDataFromApi({ silent = false } = {}) {
  try {
    const data = await requestJson("/api/data");
    state.data = normalizeData(data);
    state.apiOnline = true;
    saveFallback();
    updateSourceBadges();
    if (!silent) showToast("已从后台 API 拉取最新数据。");
  } catch {
    const cached = localStorage.getItem(fallbackKey);
    state.data = normalizeData(cached ? JSON.parse(cached) : structuredClone(defaultData));
    state.apiOnline = false;
    updateSourceBadges();
    if (!silent) showToast("后台 API 不可用，已使用本地缓存。");
  }
}

async function persistData(message = "数据已保存。") {
  state.data.meta.updatedAt = nowText();
  saveFallback();
  try {
    state.data = normalizeData(await requestJson("/api/data", { method: "PUT", body: JSON.stringify(state.data) }));
    state.apiOnline = true;
    saveFallback();
    updateSourceBadges();
    showToast(message);
  } catch {
    state.apiOnline = false;
    updateSourceBadges();
    showToast("API 保存失败，已暂存到浏览器缓存。");
  }
  renderAll();
}

async function resetServerData() {
  try {
    state.data = normalizeData(await requestJson("/api/reset", { method: "POST" }));
    state.apiOnline = true;
  } catch {
    state.data = structuredClone(defaultData);
    state.apiOnline = false;
  }
  state.selectedCompId = state.data.comps[0]?.id || "";
  state.selectedHeroes = [];
  state.selectedItems = [];
  state.search = "";
  state.tierFilter = "全部";
  state.difficultyFilter = "全部";
  els.globalSearch.value = "";
  els.difficultyFilter.value = "全部";
  els.filterButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.tier === "全部"));
  saveFallback();
  renderAll();
  if (state.data.comps[0]) fillForm(state.data.comps[0]);
  updateSourceBadges();
}

function normalizeData(data) {
  const next = structuredClone(data || defaultData);
  next.meta = { version: "星神", updatedAt: nowText(), source: "未知数据源", ...(next.meta || {}) };
  next.traits ||= [];
  next.heroes ||= [];
  next.baseItems ||= [];
  next.recipes ||= {};
  next.comps ||= [];
  next.comps.forEach(comp => {
    comp.augments ||= [];
    comp.board ||= [];
    comp.updatedAt ||= next.meta.updatedAt;
  });
  return next;
}

function updateSourceBadges() {
  els.dataSourceText.textContent = state.apiOnline ? "真实后台 API" : "本地缓存兜底";
  els.versionBadge.textContent = `版本 ${state.data.meta.version || "--"}`;
  els.updatedBadge.textContent = `更新时间 ${state.data.meta.updatedAt || "--"}`;
}

function saveSession() {
  localStorage.setItem(sessionKey, JSON.stringify({ username: credentials.username, role: credentials.role, loggedInAt: Date.now() }));
}

function loadSession() {
  try {
    const session = JSON.parse(localStorage.getItem(sessionKey) || "{}");
    return session.username === credentials.username && session.role === credentials.role;
  } catch {
    return false;
  }
}

function clearSession() {
  localStorage.removeItem(sessionKey);
}

function setAuthenticated(value) {
  state.isAuthenticated = value;
  els.authShell.classList.toggle("is-hidden", value);
  els.appShell.classList.toggle("is-hidden", !value);
}

function setView(view) {
  state.activeView = view;
  const meta = viewMeta[view];
  els.viewEyebrow.textContent = meta.eyebrow;
  els.viewTitle.textContent = meta.title;
  els.viewDescription.textContent = meta.description;
  els.navItems.forEach(btn => btn.classList.toggle("active", btn.dataset.view === view));
  Object.entries(els.views).forEach(([key, element]) => element.classList.toggle("active", key === view));
  if (view === "admin" && !form.id.value && state.data.comps[0]) fillForm(state.data.comps[0]);
  if (view === "heroAdmin" && !heroForm.id.value && state.data.heroes[0]) fillHeroForm(state.data.heroes[0]);
  if (view === "traitAdmin" && !traitForm.id.value && state.data.traits[0]) fillTraitForm(state.data.traits[0]);
  if (view === "itemAdmin" && !itemForm.originalId.value && state.data.baseItems[0]) fillItemForm({ kind: "base", ...state.data.baseItems[0] });
}

function filteredComps() {
  const query = state.search.trim().toLowerCase();
  return state.data.comps.filter(comp => {
    const matchesTier = state.tierFilter === "全部" || comp.tier === state.tierFilter;
    const matchesDifficulty = state.difficultyFilter === "全部" || comp.difficulty === state.difficultyFilter;
    const haystack = [comp.name, comp.difficulty, comp.tier, ...(comp.carries || []), ...(comp.heroes || []), ...(comp.traits || []), ...(comp.augments || [])].join(" ").toLowerCase();
    return matchesTier && matchesDifficulty && (!query || haystack.includes(query));
  });
}

function renderOverview() {
  const comps = state.data.comps;
  const tierS = comps.filter(comp => comp.tier === "S").length;
  const uniqueHeroes = new Set(comps.flatMap(comp => comp.heroes || [])).size;
  const recipes = Object.keys(state.data.recipes).length;
  els.overviewGrid.innerHTML = [
    ["阵容数量", `${comps.length}`, "当前可用阵容"],
    ["S 级阵容", `${tierS}`, "优先关注"],
    ["登场英雄", `${uniqueHeroes}`, "阵容覆盖英雄"],
    ["装备配方", `${recipes}`, "后台 API 维护"]
  ].map(([label, value, hint]) => `<div class="metric-tile"><span>${label}</span><strong>${value}</strong><span>${hint}</span></div>`).join("");
}

function renderCompList() {
  const comps = filteredComps();
  els.compCount.textContent = `${comps.length} 套`;
  if (!comps.length) {
    els.compList.innerHTML = `<div class="detail-empty">没有匹配的阵容。</div>`;
    els.compDetail.innerHTML = `<div class="detail-empty">调整筛选条件后查看阵容详情。</div>`;
    return;
  }
  if (!comps.some(comp => comp.id === state.selectedCompId)) state.selectedCompId = comps[0].id;
  els.compList.innerHTML = comps.map(comp => `
    <button class="list-card ${comp.id === state.selectedCompId ? "active" : ""}" data-comp-id="${comp.id}" type="button">
      <div class="tag-row">
        <span class="tag ${tierClass(comp.tier)}">${escapeHtml(comp.tier)}</span>
        <span class="tag">${escapeHtml(comp.difficulty)}</span>
        <span class="tag">${escapeHtml(comp.updatedAt || state.data.meta.updatedAt)}</span>
      </div>
      <h4>${escapeHtml(comp.name)}</h4>
      <p>${(comp.traits || []).map(escapeHtml).join(" / ")}</p>
    </button>
  `).join("");
  renderCompDetail();
}

function renderBoard(board = []) {
  const map = new Map(board.map(cell => [`${cell.row}-${cell.col}`, cell.hero]));
  return `<div class="position-board">${Array.from({ length: 28 }, (_, index) => {
    const row = Math.floor(index / 7);
    const col = index % 7;
    const hero = map.get(`${row}-${col}`) || "";
    return `<div class="position-cell ${hero ? "filled" : ""} ${row >= 2 ? "backline" : ""}">${escapeHtml(hero || `${row + 1}-${col + 1}`)}</div>`;
  }).join("")}</div>`;
}

function renderCompDetail() {
  const comp = state.data.comps.find(item => item.id === state.selectedCompId);
  if (!comp) {
    els.compDetail.innerHTML = `<div class="detail-empty">选择左侧阵容查看详情。</div>`;
    return;
  }
  const itemBlocks = Object.entries(comp.items || {}).map(([hero, items]) => `
    <div class="info-block"><span>${escapeHtml(hero)}</span><p>${items.map(escapeHtml).join(" / ")}</p></div>
  `).join("");
  els.compDetail.innerHTML = `
    <div class="detail-content">
      <div class="detail-hero">
        <div>
          <p class="kicker">Tier ${escapeHtml(comp.tier)}</p>
          <h3>${escapeHtml(comp.name)}</h3>
        </div>
        <button class="primary-button" data-edit-comp="${comp.id}" type="button">编辑</button>
      </div>
      <div class="stat-grid">
        <div class="stat-box"><span>运营难度</span><strong>${escapeHtml(comp.difficulty)}</strong></div>
        <div class="stat-box"><span>核心</span><strong>${(comp.carries || []).length}</strong></div>
        <div class="stat-box"><span>更新时间</span><strong>${escapeHtml(comp.updatedAt || state.data.meta.updatedAt)}</strong></div>
      </div>
      <div class="info-block"><span>阵容英雄</span><p>${(comp.heroes || []).map(escapeHtml).join(" / ")}</p></div>
      <div class="info-block"><span>主要羁绊</span><div class="tag-row">${(comp.traits || []).map(trait => `<span class="tag">${escapeHtml(trait)}</span>`).join("")}</div></div>
      <div class="info-block"><span>推荐强化符文</span><div class="tag-row">${(comp.augments || []).map(augment => `<span class="tag">${escapeHtml(augment)}</span>`).join("") || "<p>暂无推荐</p>"}</div></div>
      <div class="info-block"><span>阵容站位图</span>${renderBoard(comp.board)}</div>
      <div class="info-block"><span>装备建议</span><div class="result-stack">${itemBlocks || "<p>暂无装备建议</p>"}</div></div>
      <div class="info-block"><span>运营节奏</span><p>${escapeHtml(comp.plan)}</p></div>
      <div class="info-block"><span>站位说明</span><p>${escapeHtml(comp.positioning)}</p></div>
      <div class="info-block"><span>备注</span><p>${escapeHtml(comp.notes || "暂无备注")}</p></div>
    </div>
  `;
}

function renderBuilder() {
  const query = state.search.trim().toLowerCase();
  const heroes = state.data.heroes.filter(hero => !query || [hero.name, ...(hero.traits || [])].join(" ").toLowerCase().includes(query));
  els.heroPool.innerHTML = heroes.map(hero => `
    <button class="chip-card ${state.selectedHeroes.includes(hero.name) ? "selected" : ""}" data-hero="${escapeHtml(hero.name)}" type="button">
      <strong>${escapeHtml(hero.name)}</strong>
      <small>${hero.cost} 费 · ${(hero.traits || []).map(escapeHtml).join(" / ")}</small>
    </button>
  `).join("");
  els.selectedHeroCount.textContent = `${state.selectedHeroes.length} / 10`;
  els.selectedHeroes.innerHTML = state.selectedHeroes.length
    ? state.selectedHeroes.map(name => `<button class="selected-chip" data-remove-hero="${escapeHtml(name)}" type="button"><strong>${escapeHtml(name)}</strong><small>点击移除</small></button>`).join("")
    : `<div class="detail-empty">从左侧选择英雄。</div>`;
  renderTraitResults();
}

function renderTraitResults() {
  const selected = state.selectedHeroes.map(name => state.data.heroes.find(hero => hero.name === name)).filter(Boolean);
  const counts = selected.reduce((acc, hero) => {
    (hero.traits || []).forEach(trait => { acc[trait] = (acc[trait] || 0) + 1; });
    return acc;
  }, {});
  const rows = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  if (!rows.length) {
    els.traitResults.innerHTML = `<div class="detail-empty">暂无羁绊触发。</div>`;
    return;
  }
  els.traitResults.innerHTML = rows.map(([name, count]) => {
    const trait = state.data.traits.find(item => item.name === name);
    const breakpoints = trait?.breakpoints || [];
    const nextPoint = breakpoints.find(point => point > count) || breakpoints.at(-1) || count;
    const active = breakpoints.filter(point => point <= count).at(-1) || 0;
    const value = Math.min(100, Math.round((count / Math.max(nextPoint, 1)) * 100));
    return `
      <div class="trait-row">
        <strong>${escapeHtml(name)}</strong>
        <span class="tag">${count} / ${breakpoints.join("/") || "--"}</span>
        <div>
          <div class="progress" style="--value:${value}%"><span></span></div>
          <small>${active ? `已触发 ${active}` : `距离 ${nextPoint} 还差 ${Math.max(nextPoint - count, 0)}`}</small>
        </div>
      </div>
    `;
  }).join("");
}

function renderItems() {
  els.baseItems.innerHTML = state.data.baseItems.map(item => `
    <button class="chip-card ${state.selectedItems.includes(item.id) ? "selected" : ""}" data-item="${item.id}" type="button">
      <strong>${escapeHtml(item.name)}</strong>
      <small>${escapeHtml(item.stat)}</small>
    </button>
  `).join("");
  renderRecipeResult();
  els.recipeTable.innerHTML = Object.entries(state.data.recipes).map(([key, recipe]) => {
    const parts = recipePartsFromKey(key).map(id => state.data.baseItems.find(item => item.id === id)?.name || id);
    return `<div class="recipe-row"><strong>${escapeHtml(recipe.name)}</strong><p>${parts.map(escapeHtml).join(" + ")}</p><div class="tag-row">${(recipe.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div></div>`;
  }).join("");
}

function renderRecipeResult() {
  if (state.selectedItems.length < 2) {
    els.itemRecipeResult.innerHTML = `<div class="recipe-main"><span>选择两个基础散件</span><h3>等待合成</h3><p>点击左侧散件后在这里查看成装结果。</p></div>`;
    return;
  }
  const selectedNames = state.selectedItems.map(id => state.data.baseItems.find(item => item.id === id)?.name || id);
  const recipe = state.data.recipes[normalizeRecipeKey(state.selectedItems[0], state.selectedItems[1])];
  els.itemRecipeResult.innerHTML = recipe
    ? `<div class="recipe-main"><span>${selectedNames.map(escapeHtml).join(" + ")}</span><h3>${escapeHtml(recipe.name)}</h3><p>${escapeHtml(recipe.desc)}</p><div class="tag-row">${(recipe.tags || []).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div></div>`
    : `<div class="recipe-main"><span>${selectedNames.map(escapeHtml).join(" + ")}</span><h3>暂无配方</h3><p>当前组合未写入成装表，请在装备管理中补充。</p></div>`;
}

function renderAdminList() {
  els.adminCompList.innerHTML = state.data.comps.map(comp => `
    <button class="list-card ${comp.id === form.id.value ? "active" : ""}" data-admin-comp="${comp.id}" type="button">
      <div class="tag-row"><span class="tag ${tierClass(comp.tier)}">${escapeHtml(comp.tier)}</span><span class="tag">${escapeHtml(comp.difficulty)}</span></div>
      <h4>${escapeHtml(comp.name)}</h4><p>${(comp.traits || []).map(escapeHtml).join(" / ")}</p>
    </button>
  `).join("");
}

function renderPositionEditor() {
  const heroes = splitList(form.heroes.value);
  const selectedHero = els.positionHeroSelect.value || heroes[0] || "";
  els.positionHeroSelect.innerHTML = heroes.length
    ? heroes.map(hero => `<option ${hero === selectedHero ? "selected" : ""}>${escapeHtml(hero)}</option>`).join("")
    : `<option value="">请先填写阵容英雄</option>`;
  const map = new Map(state.editingBoard.map(cell => [`${cell.row}-${cell.col}`, cell.hero]));
  els.positionEditor.innerHTML = Array.from({ length: 28 }, (_, index) => {
    const row = Math.floor(index / 7);
    const col = index % 7;
    const hero = map.get(`${row}-${col}`) || "";
    return `<button class="position-cell ${hero ? "filled" : ""} ${row >= 2 ? "backline" : ""}" data-row="${row}" data-col="${col}" type="button">${escapeHtml(hero || `${row + 1}-${col + 1}`)}</button>`;
  }).join("");
}

function fillForm(comp) {
  form.id.value = comp.id;
  form.name.value = comp.name;
  form.tier.value = comp.tier;
  form.difficulty.value = comp.difficulty;
  form.carries.value = (comp.carries || []).join(", ");
  form.heroes.value = (comp.heroes || []).join(", ");
  form.traits.value = (comp.traits || []).join(", ");
  form.augments.value = (comp.augments || []).join(", ");
  form.items.value = itemsObjectToText(comp.items);
  form.plan.value = comp.plan || "";
  form.positioning.value = comp.positioning || "";
  state.editingBoard = structuredClone(comp.board || []);
  els.saveState.textContent = "正在编辑";
  renderAdminList();
  renderPositionEditor();
}

function clearForm() {
  form.id.value = `comp-${Date.now()}`;
  form.name.value = "";
  form.tier.value = "A";
  form.difficulty.value = "中等";
  form.carries.value = "";
  form.heroes.value = "";
  form.traits.value = "";
  form.augments.value = "";
  form.items.value = "";
  form.plan.value = "";
  form.positioning.value = "";
  state.editingBoard = [];
  els.saveState.textContent = "新增中";
  renderAdminList();
  renderPositionEditor();
  form.name.focus();
}

function formToComp() {
  return {
    id: form.id.value || `comp-${Date.now()}`,
    name: form.name.value.trim(),
    tier: form.tier.value,
    difficulty: form.difficulty.value,
    carries: splitList(form.carries.value),
    heroes: splitList(form.heroes.value),
    traits: splitList(form.traits.value),
    augments: splitList(form.augments.value),
    items: parseItems(form.items.value),
    plan: form.plan.value.trim(),
    positioning: form.positioning.value.trim(),
    board: state.editingBoard.filter(cell => splitList(form.heroes.value).includes(cell.hero)),
    notes: "由管理员维护。",
    updatedAt: nowText()
  };
}

function renderHeroAdmin() {
  els.heroAdminList.innerHTML = state.data.heroes.map(hero => `
    <button class="list-card ${hero.id === heroForm.id.value ? "active" : ""}" data-hero-admin="${hero.id}" type="button">
      <div class="tag-row"><span class="tag">${hero.cost} 费</span><span class="tag">${escapeHtml(hero.updatedAt || "")}</span></div>
      <h4>${escapeHtml(hero.name)}</h4><p>${(hero.traits || []).map(escapeHtml).join(" / ")}</p>
    </button>
  `).join("");
}

function fillHeroForm(hero) {
  heroForm.id.value = hero.id;
  heroForm.name.value = hero.name;
  heroForm.cost.value = hero.cost;
  heroForm.traits.value = (hero.traits || []).join(", ");
  renderHeroAdmin();
}

function clearHeroForm() {
  heroForm.id.value = `hero-${Date.now()}`;
  heroForm.name.value = "";
  heroForm.cost.value = 1;
  heroForm.traits.value = "";
  renderHeroAdmin();
  heroForm.name.focus();
}

function renderTraitAdmin() {
  els.traitAdminList.innerHTML = state.data.traits.map(trait => `
    <button class="list-card ${trait.id === traitForm.id.value ? "active" : ""}" data-trait-admin="${trait.id}" type="button">
      <div class="tag-row"><span class="tag">${(trait.breakpoints || []).join(" / ")}</span><span class="tag">${escapeHtml(trait.updatedAt || "")}</span></div>
      <h4>${escapeHtml(trait.name)}</h4><p>${escapeHtml(trait.desc || "暂无说明")}</p>
    </button>
  `).join("");
}

function fillTraitForm(trait) {
  traitForm.id.value = trait.id;
  traitForm.name.value = trait.name;
  traitForm.breakpoints.value = (trait.breakpoints || []).join(", ");
  traitForm.desc.value = trait.desc || "";
  renderTraitAdmin();
}

function clearTraitForm() {
  traitForm.id.value = `trait-${Date.now()}`;
  traitForm.name.value = "";
  traitForm.breakpoints.value = "";
  traitForm.desc.value = "";
  renderTraitAdmin();
  traitForm.name.focus();
}

function renderItemAdmin() {
  const recipeItems = Object.entries(state.data.recipes).map(([key, recipe]) => ({ id: key, kind: "recipe", ...recipe }));
  const baseItems = state.data.baseItems.map(item => ({ kind: "base", ...item }));
  els.itemAdminList.innerHTML = [...baseItems, ...recipeItems].map(item => `
    <button class="list-card ${item.id === itemForm.originalId.value ? "active" : ""}" data-item-admin="${escapeHtml(item.id)}" data-item-kind="${item.kind}" type="button">
      <div class="tag-row"><span class="tag">${item.kind === "base" ? "散件" : "成装"}</span><span class="tag">${escapeHtml(item.updatedAt || "")}</span></div>
      <h4>${escapeHtml(item.name)}</h4><p>${escapeHtml(item.kind === "base" ? item.stat : item.desc)}</p>
    </button>
  `).join("");
  document.querySelectorAll(".recipe-only").forEach(node => node.classList.toggle("is-hidden", itemForm.kind.value !== "recipe"));
}

function fillItemForm(item) {
  itemForm.originalId.value = item.id;
  itemForm.id.value = item.id;
  itemForm.kind.value = item.kind;
  itemForm.name.value = item.name;
  itemForm.stat.value = item.kind === "base" ? item.stat : item.desc;
  itemForm.recipeParts.value = item.kind === "recipe" ? recipePartsFromKey(item.id).join(", ") : "";
  itemForm.tags.value = item.kind === "recipe" ? (item.tags || []).join(", ") : "";
  renderItemAdmin();
}

function clearItemForm() {
  itemForm.originalId.value = "";
  itemForm.id.value = "";
  itemForm.kind.value = "base";
  itemForm.name.value = "";
  itemForm.stat.value = "";
  itemForm.recipeParts.value = "";
  itemForm.tags.value = "";
  renderItemAdmin();
  itemForm.id.focus();
}

function renderAll() {
  updateSourceBadges();
  renderOverview();
  renderCompList();
  renderBuilder();
  renderItems();
  renderAdminList();
  renderPositionEditor();
  renderHeroAdmin();
  renderTraitAdmin();
  renderItemAdmin();
  renderGACompSelect();
}

function levenshteinDistance(a, b) {
  const dp = Array.from({ length: a.length + 1 }, () => Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) dp[i][0] = i;
  for (let j = 0; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[a.length][b.length];
}

function fuzzyMatch(text, candidates, threshold) {
  const results = [];
  const normalized = text.replace(/\s+/g, "");
  for (const candidate of candidates) {
    const name = candidate.name || candidate;
    if (normalized.includes(name)) {
      results.push({ name, score: 0 });
    } else if (name.length <= 4 && levenshteinDistance(name, normalized.slice(0, name.length + 2)) <= threshold) {
      results.push({ name, score: 1 });
    }
  }
  return results.sort((a, b) => a.score - b.score).map(result => result.name);
}

async function startCapture() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" }, audio: false });
    state.recognition.captureStream = stream;

    // 实时预览
    els.captureVideo.srcObject = stream;
    els.captureVideo.classList.remove("is-hidden");
    els.capturePlaceholder.classList.add("is-hidden");
    els.liveIndicator.classList.remove("is-hidden");
    els.startCaptureBtn.classList.add("is-hidden");
    els.stopCaptureBtn.classList.remove("is-hidden");

    // 流结束时（用户关闭共享窗口）自动停止
    stream.getTracks().forEach(track => {
      track.addEventListener("ended", stopCapture);
    });

    showToast("已开始捕获，将定时自动识别画面。");

    // 等 1 秒后执行第一次识别
    await new Promise(resolve => setTimeout(resolve, 1000));
    await captureAndRecognize();

    // 启动定时识别
    const interval = parseInt(els.recognizeInterval.value, 10) * 1000;
    state.recognition.autoTimer = setInterval(captureAndRecognize, interval);
  } catch (err) {
    showToast(err.name === "NotAllowedError" ? "已取消屏幕捕获。" : `屏幕捕获失败：${err.message}`);
  }
}

function captureFrame() {
  const video = els.captureVideo;
  const canvas = els.captureCanvas;
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0);
  return canvas.toDataURL("image/png");
}

async function captureAndRecognize() {
  if (!state.recognition.captureStream || state.recognition.isProcessing) return;
  const imageData = captureFrame();
  state.recognition.imageData = imageData;
  await performOCR(imageData, true);
}

function stopCapture() {
  // 停止定时器
  if (state.recognition.autoTimer) {
    clearInterval(state.recognition.autoTimer);
    state.recognition.autoTimer = null;
  }
  // 停止视频流
  if (state.recognition.captureStream) {
    state.recognition.captureStream.getTracks().forEach(track => track.stop());
    state.recognition.captureStream = null;
  }
  els.captureVideo.srcObject = null;
  els.captureVideo.classList.add("is-hidden");
  els.capturePlaceholder.classList.remove("is-hidden");
  els.liveIndicator.classList.add("is-hidden");
  els.startCaptureBtn.classList.remove("is-hidden");
  els.stopCaptureBtn.classList.add("is-hidden");
  els.ocrProgress.classList.add("is-hidden");
  showToast("已停止识别。");
}

async function performOCR(imageData, silent) {
  state.recognition.isProcessing = true;
  if (!silent) {
    els.ocrProgress.classList.remove("is-hidden");
    els.recognitionResult.innerHTML = `<div class="recognition-loading"><div class="spinner"></div><p>正在识别游戏画面，请稍候...</p></div>`;
    els.fillFormBtn.classList.add("is-hidden");
  }
  els.ocrProgress.classList.remove("is-hidden");
  els.ocrProgressBar.style.width = "35%";
  els.ocrProgressText.textContent = "正在调用 YOLO + OCR 服务...";
  try {
    const result = await requestJson("/ocr/recognize", {
      method: "POST",
      body: JSON.stringify({
        image: imageData,
        data: state.data
      })
    });
    const text = (result.texts || []).map(item => item.text).join("\n");
    const prevHeroes = state.recognition.matchedHeroes.join(",");
    els.ocrProgressBar.style.width = "80%";
    els.ocrProgressText.textContent = "正在整理识别结果...";
    state.recognition.ocrText = text;
    state.recognition.yolo = result.yolo || null;
    state.recognition.matchedHeroes = (result.heroes || []).map(item => item.name);
    state.recognition.matchedTraits = (result.traits || []).map(item => item.name);
    state.recognition.matchedItems = (result.items || []).map(item => item.name);
    state.recognition.confirmedHeroes = [...state.recognition.matchedHeroes];
    state.recognition.confirmedTraits = [...state.recognition.matchedTraits];
    state.recognition.confirmedItems = [...state.recognition.matchedItems];
    renderRecognitionResults();
    els.ocrRawText.classList.remove("is-hidden");
    els.rawTextContent.textContent = formatRecognitionDebug(result, text);
    els.fillFormBtn.classList.remove("is-hidden");
    // 只在结果有变化时 toast
    const newHeroes = state.recognition.matchedHeroes.join(",");
    if (!silent || prevHeroes !== newHeroes) {
      const yoloCount = result.yolo?.detections?.length || 0;
      showToast(`识别完成：YOLO ${yoloCount} 个目标，匹配到 ${state.recognition.matchedHeroes.length} 个英雄。`);
    }
  } catch (err) {
    if (!silent) {
      els.recognitionResult.innerHTML = `<div class="detail-empty">识别失败：${escapeHtml(err.message)}</div>`;
    }
    showToast("YOLO/OCR 识别失败，请确认 python ocr_server.py 已启动。");
  } finally {
    state.recognition.isProcessing = false;
    els.ocrProgress.classList.add("is-hidden");
    els.ocrProgressBar.style.width = "0%";
  }
}

function formatRecognitionDebug(result, text) {
  const yolo = result.yolo || {};
  const lines = [
    `YOLO: ${yolo.enabled ? "enabled" : "disabled"} (${yolo.detections?.length || 0} detections)`,
    `Model: ${yolo.modelPath || "not configured"}`
  ];
  if (yolo.error) lines.push(`YOLO error: ${yolo.error}`);
  if (yolo.detections?.length) {
    lines.push("");
    lines.push("Detections:");
    for (const item of yolo.detections) {
      lines.push(`- ${item.label} ${Math.round(item.confidence * 100)}% [${item.box.join(", ")}]`);
    }
  }
  if (text) {
    lines.push("");
    lines.push("OCR Text:");
    lines.push(text);
  }
  return lines.join("\n");
}

function renderRecognitionResults() {
  const { matchedHeroes, matchedTraits, matchedItems, confirmedHeroes, confirmedTraits, confirmedItems } = state.recognition;
  const renderGroup = (items, confirmed, type, label) => items.length ? `
    <div class="result-section"><h4>${label}：${items.length}</h4><div class="result-chip-grid">
      ${items.map(name => `<div class="result-chip ${confirmed.includes(name) ? "confirmed" : ""}" data-result-type="${type}" data-result-name="${escapeHtml(name)}"><input type="checkbox" ${confirmed.includes(name) ? "checked" : ""}><span>${escapeHtml(name)}</span></div>`).join("")}
    </div></div>` : "";
  els.recognitionResult.innerHTML = renderGroup(matchedHeroes, confirmedHeroes, "hero", "英雄") + renderGroup(matchedTraits, confirmedTraits, "trait", "羁绊") + renderGroup(matchedItems, confirmedItems, "item", "装备") || `<div class="detail-empty">未识别到已知数据。</div>`;
}

function toggleRecognitionChip(type, name) {
  const key = type === "hero" ? "confirmedHeroes" : type === "trait" ? "confirmedTraits" : "confirmedItems";
  const arr = state.recognition[key];
  const index = arr.indexOf(name);
  if (index >= 0) arr.splice(index, 1);
  else arr.push(name);
  renderRecognitionResults();
}

function fillFormFromRecognition() {
  const { confirmedHeroes, confirmedTraits, confirmedItems } = state.recognition;
  if (!confirmedHeroes.length && !confirmedTraits.length && !confirmedItems.length) {
    showToast("没有可填入的识别结果。");
    return;
  }
  clearForm();
  form.heroes.value = confirmedHeroes.join(", ");
  const heroObjs = confirmedHeroes.map(name => state.data.heroes.find(hero => hero.name === name)).filter(Boolean).sort((a, b) => b.cost - a.cost);
  form.carries.value = heroObjs.slice(0, 2).map(hero => hero.name).join(", ");
  form.traits.value = confirmedTraits.join(", ");
  form.items.value = confirmedItems.join(", ");
  renderPositionEditor();
  setView("admin");
  els.saveState.textContent = "由屏幕识别填入";
  showToast("已填入阵容管理，请检查后保存。");
}

function resetRecognition() {
  stopCapture();
  state.recognition.imageData = null;
  state.recognition.ocrText = "";
  state.recognition.matchedHeroes = [];
  state.recognition.matchedTraits = [];
  state.recognition.matchedItems = [];
  state.recognition.confirmedHeroes = [];
  state.recognition.confirmedTraits = [];
  state.recognition.confirmedItems = [];
  els.ocrRawText.classList.add("is-hidden");
  els.fillFormBtn.classList.add("is-hidden");
  els.recognitionResult.innerHTML = `<div class="detail-empty">选择游戏窗口后实时预览并自动识别。</div>`;
}

// ──────────────────────────────────────────
// Game Assistant Functions
// ──────────────────────────────────────────

function renderGACompSelect() {
  const comps = state.data.comps;
  const selected = state.gameAssistant.selectedCompId;
  els.gaCompSelect.innerHTML = comps.map(comp => `
    <div class="ga-comp-option ${comp.id === selected ? "selected" : ""}" data-ga-comp="${comp.id}">
      <span class="tag ${tierClass(comp.tier)}">${escapeHtml(comp.tier)}</span>
      <div>
        <strong>${escapeHtml(comp.name)}</strong>
        <small>${(comp.heroes || []).slice(0, 4).map(escapeHtml).join(" / ")}${comp.heroes && comp.heroes.length > 4 ? "..." : ""}</small>
      </div>
    </div>
  `).join("");
}

async function checkOcrService() {
  try {
    const res = await requestJson("/ocr/health");
    state.gameAssistant.ocrOnline = res.ok === true;
    els.gaOcrStatusText.innerHTML = state.gameAssistant.ocrOnline
      ? '<span class="online">✓ OCR 服务在线</span>'
      : '<span class="offline">✗ OCR 服务未就绪</span>';
  } catch {
    state.gameAssistant.ocrOnline = false;
    els.gaOcrStatusText.innerHTML = '<span class="offline">✗ OCR 服务未启动（请运行 python ocr_server.py）</span>';
  }
}

async function startGameAssistant() {
  const comp = state.data.comps.find(c => c.id === state.gameAssistant.selectedCompId);
  if (!comp) {
    showToast("请先选择目标阵容。");
    return;
  }
  if (!state.gameAssistant.ocrOnline) {
    showToast("OCR 服务未启动，请先运行 python ocr_server.py");
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" }, audio: false });
    state.gameAssistant.captureStream = stream;
    state.gameAssistant.isActive = true;

    els.gaVideo.srcObject = stream;
    els.gaVideo.classList.remove("is-hidden");
    els.gaPlaceholder.classList.add("is-hidden");
    els.gaLiveIndicator.classList.remove("is-hidden");
    els.gaStartBtn.classList.add("is-hidden");
    els.gaStopBtn.classList.remove("is-hidden");

    stream.getTracks().forEach(track => {
      track.addEventListener("ended", stopGameAssistant);
    });

    showToast("对局助手已启动，正在实时分析...");

    await new Promise(resolve => setTimeout(resolve, 1000));
    await gaCaptureAndAnalyze();

    const interval = parseInt(els.gaInterval.value, 10) * 1000;
    state.gameAssistant.autoTimer = setInterval(gaCaptureAndAnalyze, interval);
  } catch (err) {
    showToast(err.name === "NotAllowedError" ? "已取消屏幕捕获。" : `捕获失败：${err.message}`);
  }
}

function stopGameAssistant() {
  if (state.gameAssistant.autoTimer) {
    clearInterval(state.gameAssistant.autoTimer);
    state.gameAssistant.autoTimer = null;
  }
  if (state.gameAssistant.captureStream) {
    state.gameAssistant.captureStream.getTracks().forEach(track => track.stop());
    state.gameAssistant.captureStream = null;
  }
  state.gameAssistant.isActive = false;
  els.gaVideo.srcObject = null;
  els.gaVideo.classList.add("is-hidden");
  els.gaPlaceholder.classList.remove("is-hidden");
  els.gaLiveIndicator.classList.add("is-hidden");
  els.gaStartBtn.classList.remove("is-hidden");
  els.gaStopBtn.classList.add("is-hidden");
  showToast("对局助手已停止。");
}

async function gaCaptureAndAnalyze() {
  if (!state.gameAssistant.captureStream || state.gameAssistant.isProcessing) return;
  state.gameAssistant.isProcessing = true;

  try {
    const video = els.gaVideo;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext("2d").drawImage(video, 0, 0);
    const imageData = canvas.toDataURL("image/png");

    const comp = state.data.comps.find(c => c.id === state.gameAssistant.selectedCompId);

    const result = await requestJson("/ocr/analyze-board", {
      method: "POST",
      body: JSON.stringify({
        image: imageData,
        targetComp: comp,
        currentHeroes: state.gameAssistant.currentHeroes,
        data: state.data
      })
    });

    if (result.ok) {
      state.gameAssistant.lastAnalysis = result;
      // Update current heroes from recognition
      const recognizedNames = (result.recognized?.heroes || []).map(h => h.name);
      if (recognizedNames.length) {
        state.gameAssistant.currentHeroes = [...new Set([...state.gameAssistant.currentHeroes, ...recognizedNames])];
      }
      renderGAAnalysis(result);
      els.gaAnalysisTime.textContent = `更新于 ${nowText()}`;
    }
  } catch (err) {
    console.error("GA analyze error:", err);
  } finally {
    state.gameAssistant.isProcessing = false;
  }
}

function renderGAAnalysis(result) {
  const { recognized, analysis } = result;

  // Buy Priority
  if (analysis.buyPriority && analysis.buyPriority.length) {
    els.gaBuyList.innerHTML = analysis.buyPriority.map(item => `
      <div class="ga-buy-item ${item.isCarry ? "carry" : ""}">
        <div class="cost-badge cost-${item.cost}">${item.cost}费</div>
        <div class="buy-info">
          <strong>${escapeHtml(item.name)}</strong>
          <small>${item.isCarry ? "⭐ 核心英雄" : `羁绊补充`}</small>
        </div>
      </div>
    `).join("");
  } else if (analysis.missingHeroes && analysis.missingHeroes.length === 0) {
    els.gaBuyList.innerHTML = `<div class="ga-position-box">✅ 阵容已成型！关注追三和装备分配。</div>`;
  }

  // Trait Status
  if (analysis.traitStatus && analysis.traitStatus.length) {
    els.gaTraitList.innerHTML = analysis.traitStatus.map(trait => `
      <div class="ga-trait-item ${trait.active ? "active" : ""}">
        <span class="trait-name">${escapeHtml(trait.name)}</span>
        <div class="progress" style="--value:${trait.breakpoints.length ? Math.min(100, Math.round(trait.current / trait.breakpoints.at(-1) * 100)) : 0}%">
          <span></span>
        </div>
        <span class="trait-count">${trait.current}/${trait.breakpoints.join("/")}</span>
      </div>
    `).join("");
  }

  // Item Recommendations
  if (analysis.itemRecommendations && analysis.itemRecommendations.length) {
    els.gaItemList.innerHTML = analysis.itemRecommendations.map(rec => `
      <div class="ga-item-card">
        <span class="item-hero">${escapeHtml(rec.hero)}${rec.isCarry ? " ⭐" : ""}</span>
        <span class="item-names">→ ${rec.items.map(escapeHtml).join(" / ")}</span>
      </div>
    `).join("");
  }

  // Opponent Analysis
  if (recognized.heroes && recognized.heroes.length) {
    const opponentHeroes = recognized.heroes.filter(h => {
      const comp = state.data.comps.find(c => c.id === state.gameAssistant.selectedCompId);
      return comp && !comp.heroes.includes(h.name);
    });
    if (opponentHeroes.length) {
      els.gaOpponentList.innerHTML = `
        <div class="ga-opponent-card">
          <h5>识别到的对手英雄</h5>
          <p>${opponentHeroes.map(h => escapeHtml(h.name)).join(" / ")}</p>
        </div>
      `;
    }
  }

  // Position Suggestion
  if (analysis.positionSuggestion) {
    els.gaPositionAdvice.innerHTML = `
      <div class="ga-position-box">${escapeHtml(analysis.positionSuggestion)}</div>
    `;
    // Show board if available
    const comp = state.data.comps.find(c => c.id === state.gameAssistant.selectedCompId);
    if (comp && comp.board && comp.board.length) {
      els.gaPositionAdvice.innerHTML += renderBoard(comp.board);
    }
  }
}

function bindEvents() {
  els.loginForm.addEventListener("submit", event => {
    event.preventDefault();
    if (els.usernameInput.value.trim() === credentials.username && els.passwordInput.value === credentials.password) {
      els.loginError.textContent = "";
      saveSession();
      setAuthenticated(true);
      renderAll();
      if (state.data.comps[0]) fillForm(state.data.comps[0]);
      setView(state.activeView);
      showToast("管理员已登录。");
    } else {
      els.loginError.textContent = "账号或密码错误。";
    }
  });

  els.logoutBtn.addEventListener("click", () => {
    clearSession();
    setAuthenticated(false);
    els.loginForm.reset();
    els.usernameInput.focus();
  });

  els.navItems.forEach(btn => btn.addEventListener("click", () => setView(btn.dataset.view)));
  els.globalSearch.addEventListener("input", event => { state.search = event.target.value; renderCompList(); renderBuilder(); });
  els.filterButtons.forEach(btn => btn.addEventListener("click", () => {
    state.tierFilter = btn.dataset.tier;
    els.filterButtons.forEach(item => item.classList.toggle("active", item === btn));
    renderCompList();
  }));
  els.difficultyFilter.addEventListener("change", event => { state.difficultyFilter = event.target.value; renderCompList(); });
  els.reloadDataBtn.addEventListener("click", async () => { await loadDataFromApi(); renderAll(); });
  els.resetDataBtn.addEventListener("click", async () => {
    if (!window.confirm("确认恢复种子数据吗？当前后台改动会被覆盖。")) return;
    await resetServerData();
    showToast("已恢复种子数据。");
  });

  els.compList.addEventListener("click", event => {
    const card = event.target.closest("[data-comp-id]");
    if (!card) return;
    state.selectedCompId = card.dataset.compId;
    renderCompList();
  });
  els.compDetail.addEventListener("click", event => {
    const editButton = event.target.closest("[data-edit-comp]");
    if (!editButton) return;
    const comp = state.data.comps.find(item => item.id === editButton.dataset.editComp);
    if (comp) { fillForm(comp); setView("admin"); }
  });

  els.heroPool.addEventListener("click", event => {
    const button = event.target.closest("[data-hero]");
    if (!button) return;
    const name = button.dataset.hero;
    if (state.selectedHeroes.includes(name)) state.selectedHeroes = state.selectedHeroes.filter(item => item !== name);
    else if (state.selectedHeroes.length < 10) state.selectedHeroes.push(name);
    else showToast("最多选择 10 名英雄。");
    renderBuilder();
  });
  els.selectedHeroes.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-hero]");
    if (!button) return;
    state.selectedHeroes = state.selectedHeroes.filter(item => item !== button.dataset.removeHero);
    renderBuilder();
  });
  els.clearBuilderBtn.addEventListener("click", () => { state.selectedHeroes = []; renderBuilder(); });
  els.baseItems.addEventListener("click", event => {
    const button = event.target.closest("[data-item]");
    if (!button) return;
    const itemId = button.dataset.item;
    if (state.selectedItems.includes(itemId)) state.selectedItems = state.selectedItems.filter(id => id !== itemId);
    else if (state.selectedItems.length < 2) state.selectedItems.push(itemId);
    else state.selectedItems = [state.selectedItems[1], itemId];
    renderItems();
  });
  els.clearItemsBtn.addEventListener("click", () => { state.selectedItems = []; renderItems(); });

  els.adminCompList.addEventListener("click", event => {
    const button = event.target.closest("[data-admin-comp]");
    const comp = button && state.data.comps.find(item => item.id === button.dataset.adminComp);
    if (comp) fillForm(comp);
  });
  els.newCompBtn.addEventListener("click", clearForm);
  ["input", "change"].forEach(type => form.heroes.addEventListener(type, renderPositionEditor));
  els.positionEditor.addEventListener("click", event => {
    const cell = event.target.closest("[data-row]");
    if (!cell) return;
    const hero = els.positionHeroSelect.value;
    if (!hero) return;
    const row = Number(cell.dataset.row);
    const col = Number(cell.dataset.col);
    state.editingBoard = state.editingBoard.filter(item => item.hero !== hero && !(item.row === row && item.col === col));
    state.editingBoard.push({ hero, row, col });
    renderPositionEditor();
  });
  els.clearPositionBtn.addEventListener("click", () => { state.editingBoard = []; renderPositionEditor(); });
  els.compForm.addEventListener("submit", async event => {
    event.preventDefault();
    const comp = formToComp();
    if (!comp.name) return showToast("阵容名称不能为空。");
    const index = state.data.comps.findIndex(item => item.id === comp.id);
    if (index >= 0) state.data.comps[index] = comp;
    else state.data.comps.unshift(comp);
    state.selectedCompId = comp.id;
    await persistData("阵容已保存。");
    fillForm(comp);
    els.saveState.textContent = "已保存";
  });
  els.deleteCompBtn.addEventListener("click", async () => {
    const id = form.id.value;
    const comp = state.data.comps.find(item => item.id === id);
    if (!comp || !window.confirm(`确认删除「${comp.name}」吗？`)) return;
    state.data.comps = state.data.comps.filter(item => item.id !== id);
    state.selectedCompId = state.data.comps[0]?.id || "";
    await persistData("阵容已删除。");
    state.data.comps[0] ? fillForm(state.data.comps[0]) : clearForm();
  });

  els.heroAdminList.addEventListener("click", event => {
    const button = event.target.closest("[data-hero-admin]");
    const hero = button && state.data.heroes.find(item => item.id === button.dataset.heroAdmin);
    if (hero) fillHeroForm(hero);
  });
  els.newHeroBtn.addEventListener("click", clearHeroForm);
  els.heroForm.addEventListener("submit", async event => {
    event.preventDefault();
    const hero = { id: heroForm.id.value || `hero-${Date.now()}`, name: heroForm.name.value.trim(), cost: Number(heroForm.cost.value), traits: splitList(heroForm.traits.value), updatedAt: nowText() };
    if (!hero.name) return showToast("英雄名称不能为空。");
    const index = state.data.heroes.findIndex(item => item.id === hero.id);
    if (index >= 0) state.data.heroes[index] = hero;
    else state.data.heroes.unshift(hero);
    await persistData("英雄已保存。");
    fillHeroForm(hero);
  });
  els.deleteHeroBtn.addEventListener("click", async () => {
    const id = heroForm.id.value;
    const hero = state.data.heroes.find(item => item.id === id);
    if (!hero || !window.confirm(`确认删除「${hero.name}」吗？`)) return;
    state.data.heroes = state.data.heroes.filter(item => item.id !== id);
    await persistData("英雄已删除。");
    state.data.heroes[0] ? fillHeroForm(state.data.heroes[0]) : clearHeroForm();
  });

  els.traitAdminList.addEventListener("click", event => {
    const button = event.target.closest("[data-trait-admin]");
    const trait = button && state.data.traits.find(item => item.id === button.dataset.traitAdmin);
    if (trait) fillTraitForm(trait);
  });
  els.newTraitBtn.addEventListener("click", clearTraitForm);
  els.traitForm.addEventListener("submit", async event => {
    event.preventDefault();
    const trait = { id: traitForm.id.value || `trait-${Date.now()}`, name: traitForm.name.value.trim(), breakpoints: parseNumbers(traitForm.breakpoints.value), desc: traitForm.desc.value.trim(), updatedAt: nowText() };
    if (!trait.name) return showToast("羁绊名称不能为空。");
    const index = state.data.traits.findIndex(item => item.id === trait.id);
    if (index >= 0) state.data.traits[index] = trait;
    else state.data.traits.unshift(trait);
    await persistData("羁绊已保存。");
    fillTraitForm(trait);
  });
  els.deleteTraitBtn.addEventListener("click", async () => {
    const id = traitForm.id.value;
    const trait = state.data.traits.find(item => item.id === id);
    if (!trait || !window.confirm(`确认删除「${trait.name}」吗？`)) return;
    state.data.traits = state.data.traits.filter(item => item.id !== id);
    await persistData("羁绊已删除。");
    state.data.traits[0] ? fillTraitForm(state.data.traits[0]) : clearTraitForm();
  });

  els.itemAdminList.addEventListener("click", event => {
    const button = event.target.closest("[data-item-admin]");
    if (!button) return;
    if (button.dataset.itemKind === "base") fillItemForm({ kind: "base", ...state.data.baseItems.find(item => item.id === button.dataset.itemAdmin) });
    else fillItemForm({ kind: "recipe", id: button.dataset.itemAdmin, ...state.data.recipes[button.dataset.itemAdmin] });
  });
  els.newItemBtn.addEventListener("click", clearItemForm);
  els.itemKind.addEventListener("change", renderItemAdmin);
  els.itemForm.addEventListener("submit", async event => {
    event.preventDefault();
    const id = itemForm.kind.value === "recipe" ? normalizeRecipeKey(...splitList(itemForm.recipeParts.value).slice(0, 2)) : itemForm.id.value.trim();
    if (!id || !itemForm.name.value.trim()) return showToast("装备 ID 和名称不能为空。");
    if (itemForm.kind.value === "base") {
      state.data.baseItems = state.data.baseItems.filter(item => item.id !== itemForm.originalId.value);
      state.data.baseItems.unshift({ id, name: itemForm.name.value.trim(), stat: itemForm.stat.value.trim(), updatedAt: nowText() });
    } else {
      if (splitList(itemForm.recipeParts.value).length < 2) return showToast("合成装备需要两个散件 ID。");
      if (itemForm.originalId.value && itemForm.originalId.value !== id) delete state.data.recipes[itemForm.originalId.value];
      state.data.recipes[id] = { name: itemForm.name.value.trim(), desc: itemForm.stat.value.trim(), tags: splitList(itemForm.tags.value), updatedAt: nowText() };
    }
    await persistData("装备已保存。");
    fillItemForm(itemForm.kind.value === "base" ? { kind: "base", ...state.data.baseItems.find(item => item.id === id) } : { kind: "recipe", id, ...state.data.recipes[id] });
  });
  els.deleteItemBtn.addEventListener("click", async () => {
    const id = itemForm.originalId.value;
    if (!id || !window.confirm("确认删除当前装备吗？")) return;
    if (itemForm.kind.value === "base") state.data.baseItems = state.data.baseItems.filter(item => item.id !== id);
    else delete state.data.recipes[id];
    await persistData("装备已删除。");
    state.data.baseItems[0] ? fillItemForm({ kind: "base", ...state.data.baseItems[0] }) : clearItemForm();
  });

  els.startCaptureBtn.addEventListener("click", startCapture);
  els.stopCaptureBtn.addEventListener("click", stopCapture);
  els.recognitionResult.addEventListener("click", event => {
    const chip = event.target.closest(".result-chip");
    if (!chip) return;
    toggleRecognitionChip(chip.dataset.resultType, chip.dataset.resultName);
  });
  els.fillFormBtn.addEventListener("click", fillFormFromRecognition);
  els.toggleRawTextBtn.addEventListener("click", () => {
    const isHidden = els.rawTextContent.classList.toggle("is-hidden");
    els.toggleRawTextBtn.textContent = isHidden ? "展开" : "收起";
  });

  // Game Assistant events
  els.gaCompSelect.addEventListener("click", event => {
    const option = event.target.closest("[data-ga-comp]");
    if (!option) return;
    state.gameAssistant.selectedCompId = option.dataset.gaComp;
    renderGACompSelect();
  });
  els.gaStartBtn.addEventListener("click", startGameAssistant);
  els.gaStopBtn.addEventListener("click", stopGameAssistant);
  els.gaCaptureBtn.addEventListener("click", gaCaptureAndAnalyze);
  els.gaCheckOcr.addEventListener("click", checkOcrService);
}

async function init() {
  await loadDataFromApi({ silent: true });
  state.selectedCompId = state.data.comps[0]?.id || "";
  state.gameAssistant.selectedCompId = state.data.comps[0]?.id || "";
  bindEvents();
  setView("comps");
  if (loadSession()) {
    setAuthenticated(true);
    renderAll();
    if (state.data.comps[0]) fillForm(state.data.comps[0]);
  } else {
    setAuthenticated(false);
    els.usernameInput.focus();
  }
  checkOcrService();
}

init();
