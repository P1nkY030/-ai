const seedData = {
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
    "bow+sword": { name: "巨人杀手", desc: "适合持续输出核心，处理高血量前排稳定。", tags: ["物理输出", "通用主C"] },
    "rod+sword": { name: "海克斯科技枪刃", desc: "补足续航与容错，适合技能型主C。", tags: ["法术吸血", "功能续航"] },
    "sword+tear": { name: "朔极之矛", desc: "提升技能释放频率，适合启动依赖型英雄。", tags: ["回蓝", "启动"] },
    "vest+sword": { name: "夜之锋刃", desc: "给近战主C更高容错，避免被集火瞬间带走。", tags: ["保命", "物理主C"] },
    "cloak+sword": { name: "饮血剑", desc: "兼顾输出与护盾，适合前排战士与半坦主C。", tags: ["续航", "战士"] },
    "belt+sword": { name: "基克的先驱", desc: "提高相邻队友攻速，适合站位固定阵容。", tags: ["辅助", "攻速"] },
    "glove+sword": { name: "无尽之刃", desc: "高爆发标配，适合吃暴击收益的后排。", tags: ["暴击", "爆发"] },
    "bow+bow": { name: "鬼索的狂暴之刃", desc: "长线作战越打越强，是持续攻速核心装。", tags: ["攻速", "长线"] },
    "bow+rod": { name: "纳什之牙", desc: "施法后强化普攻节奏，适合混伤核心。", tags: ["混伤", "攻速"] },
    "bow+tear": { name: "斯塔缇克电刃", desc: "前中期过渡强势，还能补魔抗削减。", tags: ["过渡", "削抗"] },
    "bow+vest": { name: "泰坦的坚决", desc: "可叠层成长，适合站桩型战士。", tags: ["成长", "战士"] },
    "bow+cloak": { name: "卢安娜的飓风", desc: "扩大后排覆盖面，适合持续普攻型输出。", tags: ["分裂箭", "后排"] },
    "belt+bow": { name: "兹若特传送门", desc: "拖节奏、打牵扯，适合前排工具人。", tags: ["前排", "召唤"] },
    "bow+glove": { name: "最后的轻语", desc: "降低护甲，是物理阵容常见功能装。", tags: ["破甲", "物理"] },
    "rod+rod": { name: "灭世者的死亡之帽", desc: "纯法强爆发，给高倍率法系最直接。", tags: ["法强", "爆发"] },
    "rod+tear": { name: "大天使之杖", desc: "随着战斗时间增加法强，适合持久战。", tags: ["成长", "法系"] },
    "rod+vest": { name: "钢铁烈阳之匣", desc: "群体护盾，适合前排紧密站位。", tags: ["团队", "护盾"] },
    "cloak+rod": { name: "离子火花", desc: "近距离削魔抗，适合主坦或副坦携带。", tags: ["削抗", "前排"] },
    "belt+rod": { name: "莫雷洛秘典", desc: "重伤与灼烧兼备，适合范围技能型英雄。", tags: ["重伤", "范围"] },
    "glove+rod": { name: "珠光护手", desc: "技能也能暴击，是法系主C核心装。", tags: ["法爆", "法系"] },
    "tear+tear": { name: "蓝霸符", desc: "适合低蓝耗法师频繁启动。", tags: ["回蓝", "法师"] },
    "tear+vest": { name: "冰霜之心", desc: "限制周围敌人的攻速，克制贴脸阵容。", tags: ["限制", "功能"] },
    "cloak+tear": { name: "圣杯", desc: "给邻格队友提供法强，法系阵容常用。", tags: ["辅助", "法强"] },
    "belt+tear": { name: "救赎", desc: "提供团队治疗与减伤，前排保底价值高。", tags: ["团队", "治疗"] },
    "glove+tear": { name: "正义之手", desc: "输出与续航兼备，适合多种主C。", tags: ["通用", "续航"] },
    "vest+vest": { name: "棘刺背心", desc: "标准坦装，抗暴击并补足护甲。", tags: ["坦度", "反伤"] },
    "cloak+vest": { name: "石像鬼石板甲", desc: "单顶前排非常稳，吃集火越发强。", tags: ["坦度", "主坦"] },
    "belt+vest": { name: "日炎斗篷", desc: "前期连胜常用，稳定挂重伤。", tags: ["重伤", "前排"] },
    "glove+vest": { name: "静止法衣", desc: "延缓敌方关键位启动，适合对位。", tags: ["控制", "对位"] },
    "cloak+cloak": { name: "巨龙之爪", desc: "专门针对法系爆发，高魔抗收益稳定。", tags: ["魔抗", "前排"] },
    "belt+cloak": { name: "坚定之心", desc: "通用减伤坦装，谁带都不亏。", tags: ["减伤", "通用"] },
    "cloak+glove": { name: "水银", desc: "关键主C保启动，防控价值直接。", tags: ["免控", "主C"] },
    "belt+belt": { name: "狂徒铠甲", desc: "高额生命值，适合裸坦与副坦。", tags: ["血量", "坦装"] },
    "belt+glove": { name: "女妖面纱", desc: "保护相邻核心不被第一时间控制。", tags: ["保护", "辅助"] },
    "glove+glove": { name: "窃贼手套", desc: "灵活补装备，适合副C与打工牌。", tags: ["灵活", "副C"] }
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
      items: {
        "凯尔": ["鬼索的狂暴之刃", "珠光护手", "正义之手"],
        "加里奥": ["狂徒铠甲", "石像鬼石板甲", "救赎"]
      },
      plan: "2-1 升四，2-5 升五，前期优先用剪纸仙灵配任意斗士过渡。4-1 重点找凯尔与加里奥二星，血量健康时可以晚一点发力。",
      positioning: "加里奥单顶吸收首波伤害，凯尔沉底站安全角。遇到刺客或突进阵容时，核心与保护位同步换边。",
      notes: "吃装备质量与中期质量，适合稳定上分。"
    },
    {
      id: "comp-heavenly-lee",
      name: "天将决斗李青",
      tier: "A",
      difficulty: "困难",
      carries: ["李青", "沃利贝尔"],
      heroes: ["亚索", "墨菲特", "沃利贝尔", "李青", "洛", "瑟提"],
      traits: ["天将", "决斗大师", "斗士", "圣贤"],
      items: {
        "李青": ["饮血剑", "泰坦的坚决", "夜之锋刃"],
        "沃利贝尔": ["泰坦的坚决", "饮血剑", "正义之手"]
      },
      plan: "前期优先凑战士体系打工，保持连胜或稳血。7 级补李青和体系牌，8 级追整体质量，装备与站位都很关键。",
      positioning: "李青从侧翼切入避开主坦，沃利贝尔站第二排承担前段压力，洛负责保护后排与补控制。",
      notes: "成型后上限高，但很依赖装备完整度。"
    },
    {
      id: "comp-ghost-ashe",
      name: "幽魂狙神艾希",
      tier: "A",
      difficulty: "中等",
      carries: ["艾希", "俄洛伊"],
      heroes: ["赛娜", "拉克丝", "俄洛伊", "艾希", "瑟提", "黛安娜"],
      traits: ["幽魂", "狙神", "斗士", "圣贤"],
      items: {
        "艾希": ["鬼索的狂暴之刃", "最后的轻语", "巨人杀手"],
        "俄洛伊": ["日炎斗篷", "石像鬼石板甲", "坚定之心"]
      },
      plan: "以赛娜和任意斗士过渡，优先做攻速与破甲。8 级补齐四费质量后，利用射程和削甲滚雪球。",
      positioning: "艾希站最远角吃狙神收益，前排尽量分散避免一起吃范围技能。遇到切后阵容时，保护位紧贴艾希。",
      notes: "节奏平滑，适合熟悉站位博弈的玩家。"
    },
    {
      id: "comp-night-syndra",
      name: "夜幽法师辛德拉",
      tier: "B",
      difficulty: "简单",
      carries: ["辛德拉", "瑟提"],
      heroes: ["阿狸", "拉克丝", "黛安娜", "辛德拉", "瑟提", "洛"],
      traits: ["夜幽", "法师", "斗士", "圣贤"],
      items: {
        "辛德拉": ["蓝霸符", "珠光护手", "灭世者的死亡之帽"],
        "瑟提": ["狂徒铠甲", "巨龙之爪", "棘刺背心"]
      },
      plan: "前期以低费法师打工，优先做蓝量与法爆。7 级找辛德拉稳住战力，8 级再补高费控制与前排质量。",
      positioning: "辛德拉沉底避免先手控制，瑟提站前排中轴顶第一波。若对手切后能力强，让洛和黛安娜回收保护。",
      notes: "对装备要求友好，适合开局法系装多时转入。"
    }
  ]
};

const credentials = Object.freeze({
  username: "YJJ",
  password: "YJJ",
  role: "管理员"
});

const storageKey = "jcc_console_data_v2";
const sessionKey = "jcc_console_session_v1";

const state = {
  data: loadData(),
  activeView: "comps",
  selectedCompId: "",
  tierFilter: "全部",
  difficultyFilter: "全部",
  search: "",
  selectedHeroes: [],
  selectedItems: [],
  isAuthenticated: false
};

const viewMeta = {
  comps: {
    eyebrow: "Meta Overview",
    title: "阵容库",
    description: "按强度、难度与核心英雄快速筛选当前版本可用阵容。"
  },
  builder: {
    eyebrow: "Synergy Simulator",
    title: "羁绊模拟",
    description: "手动搭配英雄，实时查看羁绊触发节点与队伍容量。"
  },
  items: {
    eyebrow: "Item Recipes",
    title: "装备合成",
    description: "组合基础散件，快速确认成装方向与适配定位。"
  },
  admin: {
    eyebrow: "Admin Editor",
    title: "管理后台",
    description: "维护阵容名称、核心、运营节奏与站位说明。"
  }
};

const els = {
  authShell: document.getElementById("authShell"),
  appShell: document.getElementById("appShell"),
  loginForm: document.getElementById("loginForm"),
  loginError: document.getElementById("loginError"),
  usernameInput: document.getElementById("usernameInput"),
  passwordInput: document.getElementById("passwordInput"),
  accountName: document.getElementById("accountName"),
  logoutBtn: document.getElementById("logoutBtn"),
  viewTitle: document.getElementById("viewTitle"),
  viewEyebrow: document.getElementById("viewEyebrow"),
  viewDescription: document.getElementById("viewDescription"),
  navItems: document.querySelectorAll(".nav-item"),
  views: {
    comps: document.getElementById("compsView"),
    builder: document.getElementById("builderView"),
    items: document.getElementById("itemsView"),
    admin: document.getElementById("adminView")
  },
  overviewGrid: document.getElementById("overviewGrid"),
  globalSearch: document.getElementById("globalSearch"),
  resetDataBtn: document.getElementById("resetDataBtn"),
  difficultyFilter: document.getElementById("difficultyFilter"),
  filterButtons: document.querySelectorAll(".filter-button"),
  compList: document.getElementById("compList"),
  compCount: document.getElementById("compCount"),
  compDetail: document.getElementById("compDetail"),
  heroPool: document.getElementById("heroPool"),
  selectedHeroes: document.getElementById("selectedHeroes"),
  selectedHeroCount: document.getElementById("selectedHeroCount"),
  traitResults: document.getElementById("traitResults"),
  clearBuilderBtn: document.getElementById("clearBuilderBtn"),
  baseItems: document.getElementById("baseItems"),
  itemRecipeResult: document.getElementById("itemRecipeResult"),
  recipeTable: document.getElementById("recipeTable"),
  clearItemsBtn: document.getElementById("clearItemsBtn"),
  adminCompList: document.getElementById("adminCompList"),
  newCompBtn: document.getElementById("newCompBtn"),
  compForm: document.getElementById("compForm"),
  deleteCompBtn: document.getElementById("deleteCompBtn"),
  saveState: document.getElementById("saveState"),
  toast: document.getElementById("toast")
};

const form = {
  id: document.getElementById("compId"),
  name: document.getElementById("formName"),
  tier: document.getElementById("formTier"),
  difficulty: document.getElementById("formDifficulty"),
  carries: document.getElementById("formCarries"),
  heroes: document.getElementById("formHeroes"),
  traits: document.getElementById("formTraits"),
  items: document.getElementById("formItems"),
  plan: document.getElementById("formPlan"),
  positioning: document.getElementById("formPositioning")
};

function loadData() {
  const stored = localStorage.getItem(storageKey);
  if (!stored) return structuredClone(seedData);
  try {
    return JSON.parse(stored);
  } catch {
    return structuredClone(seedData);
  }
}

function saveData() {
  localStorage.setItem(storageKey, JSON.stringify(state.data));
}

function saveSession() {
  localStorage.setItem(sessionKey, JSON.stringify({
    username: credentials.username,
    role: credentials.role,
    loggedInAt: Date.now()
  }));
}

function loadSession() {
  const stored = localStorage.getItem(sessionKey);
  if (!stored) return false;
  try {
    const session = JSON.parse(stored);
    return session.username === credentials.username && session.role === credentials.role;
  } catch {
    return false;
  }
}

function clearSession() {
  localStorage.removeItem(sessionKey);
}

function splitList(value) {
  return value
    .split(/[,\n，、]/)
    .map(item => item.trim())
    .filter(Boolean);
}

function parseItems(text) {
  return text.split(/\n+/).reduce((acc, line) => {
    const [hero, rawItems] = line.split(/[:：]/);
    if (!hero || !rawItems) return acc;
    acc[hero.trim()] = splitList(rawItems);
    return acc;
  }, {});
}

function itemsObjectToText(items) {
  return Object.entries(items || {})
    .map(([hero, values]) => `${hero}: ${values.join(", ")}`)
    .join("\n");
}

function normalizeRecipeKey(a, b) {
  return [a, b].sort().join("+");
}

function tierClass(tier) {
  return `tier-${tier.toLowerCase()}`;
}

function showToast(message) {
  els.toast.textContent = message;
  els.toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.classList.remove("show");
  }, 2200);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setAuthenticated(isAuthenticated) {
  state.isAuthenticated = isAuthenticated;
  els.authShell.classList.toggle("is-hidden", isAuthenticated);
  els.appShell.classList.toggle("is-hidden", !isAuthenticated);
  if (isAuthenticated) {
    els.accountName.textContent = credentials.username;
  }
}

function filteredComps() {
  const keyword = state.search.trim().toLowerCase();
  return state.data.comps.filter(comp => {
    const haystack = [
      comp.name,
      comp.tier,
      comp.difficulty,
      comp.notes,
      ...comp.carries,
      ...comp.heroes,
      ...comp.traits
    ].join(" ").toLowerCase();
    const matchesSearch = !keyword || haystack.includes(keyword);
    const matchesTier = state.tierFilter === "全部" || comp.tier === state.tierFilter;
    const matchesDifficulty = state.difficultyFilter === "全部" || comp.difficulty === state.difficultyFilter;
    return matchesSearch && matchesTier && matchesDifficulty;
  });
}

function setView(view) {
  state.activeView = view;
  const meta = viewMeta[view];
  els.viewEyebrow.textContent = meta.eyebrow;
  els.viewTitle.textContent = meta.title;
  els.viewDescription.textContent = meta.description;

  els.navItems.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.view === view);
  });

  Object.entries(els.views).forEach(([key, element]) => {
    element.classList.toggle("active", key === view);
    element.classList.toggle("is-hidden", key !== view);
  });
}

function renderOverview() {
  const comps = state.data.comps;
  const sCount = comps.filter(comp => comp.tier === "S").length;
  const avgUnits = comps.length ? (comps.reduce((sum, comp) => sum + comp.heroes.length, 0) / comps.length).toFixed(1) : "0.0";
  const uniqueTraits = new Set(comps.flatMap(comp => comp.traits)).size;
  const tiles = [
    { label: "当前阵容数量", value: `${comps.length}`, meta: "已纳入后台管理的整套阵容" },
    { label: "高优先级阵容", value: `${sCount}`, meta: "评级为 S 的主推阵容" },
    { label: "平均成型人口", value: `${avgUnits}`, meta: "按现有阵容英雄数量估算" },
    { label: "覆盖羁绊数量", value: `${uniqueTraits}`, meta: "阵容库中出现过的主羁绊" }
  ];

  els.overviewGrid.innerHTML = tiles.map(tile => `
    <article class="metric-tile">
      <span>${escapeHtml(tile.label)}</span>
      <strong>${escapeHtml(tile.value)}</strong>
      <span>${escapeHtml(tile.meta)}</span>
    </article>
  `).join("");
}

function renderCompList() {
  const comps = filteredComps();
  els.compCount.textContent = `${comps.length} 套`;

  if (!comps.some(comp => comp.id === state.selectedCompId)) {
    state.selectedCompId = comps[0]?.id || "";
  }

  els.compList.innerHTML = comps.map(comp => `
    <button class="list-card ${comp.id === state.selectedCompId ? "active" : ""}" data-comp-id="${comp.id}" type="button">
      <div class="tag-row">
        <span class="tag ${tierClass(comp.tier)}">${escapeHtml(comp.tier)} 级</span>
        <span class="tag">${escapeHtml(comp.difficulty)}</span>
      </div>
      <h4>${escapeHtml(comp.name)}</h4>
      <div class="tag-row">${comp.traits.map(trait => `<span class="tag">${escapeHtml(trait)}</span>`).join("")}</div>
      <p>核心：${comp.carries.map(escapeHtml).join(" / ")}</p>
      <p>${escapeHtml(comp.notes || "")}</p>
    </button>
  `).join("");

  renderCompDetail();
}

function heroCard(name) {
  const hero = state.data.heroes.find(item => item.name === name);
  const traits = hero ? hero.traits.join(" / ") : "自定义英雄";
  const cost = hero ? `${hero.cost} 费` : "未录入";
  return `
    <div class="chip-card">
      <strong>${escapeHtml(name)}</strong>
      <small>${escapeHtml(cost)} / ${escapeHtml(traits)}</small>
    </div>
  `;
}

function renderCompDetail() {
  const comp = state.data.comps.find(item => item.id === state.selectedCompId);
  if (!comp) {
    els.compDetail.innerHTML = `<div class="detail-empty">没有匹配到可展示的阵容。</div>`;
    return;
  }

  els.compDetail.innerHTML = `
    <div class="detail-content">
      <div class="detail-hero">
        <div>
          <p class="section-label">Core Strategy</p>
          <h3>${escapeHtml(comp.name)}</h3>
          <div class="tag-row">
            <span class="tag ${tierClass(comp.tier)}">${escapeHtml(comp.tier)} 级阵容</span>
            <span class="tag">${escapeHtml(comp.difficulty)}</span>
            ${comp.traits.map(trait => `<span class="tag">${escapeHtml(trait)}</span>`).join("")}
          </div>
        </div>
        <button class="primary-button" data-edit-comp="${comp.id}" type="button">进入编辑</button>
      </div>

      <div class="stat-grid">
        <div class="stat-box">
          <span>成型人口</span>
          <strong>${comp.heroes.length}</strong>
        </div>
        <div class="stat-box">
          <span>主输出</span>
          <strong>${escapeHtml(comp.carries[0] || "-")}</strong>
        </div>
        <div class="stat-box">
          <span>主羁绊</span>
          <strong>${escapeHtml(comp.traits[0] || "-")}</strong>
        </div>
      </div>

      <div class="info-block">
        <span>阵容英雄</span>
        <div class="hero-board">${comp.heroes.map(heroCard).join("")}</div>
      </div>

      <div class="info-block">
        <span>装备建议</span>
        ${Object.entries(comp.items || {}).map(([hero, items]) => `
          <p><strong>${escapeHtml(hero)}</strong>：${items.map(escapeHtml).join(" / ")}</p>
        `).join("")}
      </div>

      <div class="info-block">
        <span>运营节奏</span>
        <p>${escapeHtml(comp.plan)}</p>
      </div>

      <div class="info-block">
        <span>站位提示</span>
        <p>${escapeHtml(comp.positioning)}</p>
      </div>
    </div>
  `;
}

function renderBuilder() {
  const keyword = state.search.trim().toLowerCase();
  const heroes = state.data.heroes.filter(hero => {
    const text = `${hero.name} ${hero.traits.join(" ")}`.toLowerCase();
    return !keyword || text.includes(keyword);
  });

  els.heroPool.innerHTML = heroes.map(hero => `
    <button class="chip-card ${state.selectedHeroes.includes(hero.name) ? "selected" : ""}" data-hero="${hero.name}" type="button">
      <strong>${escapeHtml(hero.name)}</strong>
      <small>${hero.cost} 费 / ${hero.traits.map(escapeHtml).join(" / ")}</small>
    </button>
  `).join("");

  els.selectedHeroCount.textContent = `${state.selectedHeroes.length} / 10`;
  els.selectedHeroes.innerHTML = state.selectedHeroes.length
    ? state.selectedHeroes.map(name => `
      <button class="selected-chip" data-remove-hero="${name}" type="button">
        <strong>${escapeHtml(name)}</strong>
        <small>点击移除</small>
      </button>
    `).join("")
    : `<span class="tag">尚未选择英雄</span>`;

  renderTraitResults();
}

function renderTraitResults() {
  const counts = {};

  state.selectedHeroes.forEach(name => {
    const hero = state.data.heroes.find(item => item.name === name);
    if (!hero) return;
    hero.traits.forEach(trait => {
      counts[trait] = (counts[trait] || 0) + 1;
    });
  });

  const rows = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([trait, count]) => {
      const traitInfo = state.data.traits.find(item => item.name === trait);
      const breakpoints = traitInfo?.breakpoints || [];
      const active = [...breakpoints].reverse().find(point => count >= point) || 0;
      const next = breakpoints.find(point => point > count);
      const max = breakpoints[breakpoints.length - 1] || count || 1;
      const value = Math.min(100, Math.round((count / max) * 100));
      const label = active ? `已激活 ${active}` : next ? `还差 ${next - count}` : "未激活";

      return `
        <div class="trait-row">
          <strong>${escapeHtml(trait)}</strong>
          <span class="tag">${count} 人 / ${escapeHtml(label)}</span>
          <div class="progress" aria-label="${escapeHtml(trait)} 进度">
            <span style="--value:${value}%"></span>
          </div>
        </div>
      `;
    });

  els.traitResults.innerHTML = rows.length
    ? rows.join("")
    : `<div class="detail-empty">选择英雄后自动计算羁绊结果。</div>`;
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
    const names = key.split("+").map(id => state.data.baseItems.find(item => item.id === id)?.name || id);
    return `
      <article class="recipe-row">
        <strong>${escapeHtml(recipe.name)}</strong>
        <p>${names.map(escapeHtml).join(" + ")}</p>
        <p>${escapeHtml(recipe.desc)}</p>
      </article>
    `;
  }).join("");
}

function renderRecipeResult() {
  if (state.selectedItems.length === 0) {
    els.itemRecipeResult.innerHTML = `<span class="tag">请选择两个基础散件</span>`;
    return;
  }

  const selectedNames = state.selectedItems.map(id => state.data.baseItems.find(item => item.id === id)?.name || id);

  if (state.selectedItems.length === 1) {
    els.itemRecipeResult.innerHTML = `
      <div class="recipe-main">
        <span>当前已选</span>
        <h3>${escapeHtml(selectedNames[0])}</h3>
        <p>再选择一个散件即可查看成装结果。</p>
      </div>
    `;
    return;
  }

  const recipe = state.data.recipes[normalizeRecipeKey(state.selectedItems[0], state.selectedItems[1])];

  els.itemRecipeResult.innerHTML = recipe
    ? `
      <div class="recipe-main">
        <span>${selectedNames.map(escapeHtml).join(" + ")}</span>
        <h3>${escapeHtml(recipe.name)}</h3>
        <p>${escapeHtml(recipe.desc)}</p>
        <div class="tag-row">${recipe.tags.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      </div>
    `
    : `
      <div class="recipe-main">
        <span>${selectedNames.map(escapeHtml).join(" + ")}</span>
        <h3>暂无配方</h3>
        <p>当前组合未写入成装表，请检查基础散件数据。</p>
      </div>
    `;
}

function renderAdminList() {
  els.adminCompList.innerHTML = state.data.comps.map(comp => `
    <button class="list-card ${comp.id === form.id.value ? "active" : ""}" data-admin-comp="${comp.id}" type="button">
      <div class="tag-row">
        <span class="tag ${tierClass(comp.tier)}">${escapeHtml(comp.tier)}</span>
        <span class="tag">${escapeHtml(comp.difficulty)}</span>
      </div>
      <h4>${escapeHtml(comp.name)}</h4>
      <p>${comp.traits.map(escapeHtml).join(" / ")}</p>
    </button>
  `).join("");
}

function fillForm(comp) {
  form.id.value = comp.id;
  form.name.value = comp.name;
  form.tier.value = comp.tier;
  form.difficulty.value = comp.difficulty;
  form.carries.value = comp.carries.join(", ");
  form.heroes.value = comp.heroes.join(", ");
  form.traits.value = comp.traits.join(", ");
  form.items.value = itemsObjectToText(comp.items);
  form.plan.value = comp.plan;
  form.positioning.value = comp.positioning;
  els.saveState.textContent = "正在编辑";
  renderAdminList();
}

function clearForm() {
  form.id.value = `comp-${Date.now()}`;
  form.name.value = "";
  form.tier.value = "A";
  form.difficulty.value = "中等";
  form.carries.value = "";
  form.heroes.value = "";
  form.traits.value = "";
  form.items.value = "";
  form.plan.value = "";
  form.positioning.value = "";
  els.saveState.textContent = "新增中";
  renderAdminList();
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
    items: parseItems(form.items.value),
    plan: form.plan.value.trim(),
    positioning: form.positioning.value.trim(),
    notes: "由管理员手动维护。"
  };
}

function renderAll() {
  renderOverview();
  renderCompList();
  renderBuilder();
  renderItems();
  renderAdminList();
}

function resetAppData() {
  state.data = structuredClone(seedData);
  state.selectedCompId = state.data.comps[0]?.id || "";
  state.selectedHeroes = [];
  state.selectedItems = [];
  state.search = "";
  state.tierFilter = "全部";
  state.difficultyFilter = "全部";
  els.globalSearch.value = "";
  els.difficultyFilter.value = "全部";
  els.filterButtons.forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tier === "全部");
  });
  saveData();
  renderAll();
  if (state.data.comps[0]) fillForm(state.data.comps[0]);
}

function bindEvents() {
  els.loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const username = els.usernameInput.value.trim();
    const password = els.passwordInput.value;
    if (username === credentials.username && password === credentials.password) {
      els.loginError.textContent = "";
      saveSession();
      setAuthenticated(true);
      renderAll();
      if (state.data.comps[0]) fillForm(state.data.comps[0]);
      setView(state.activeView);
      showToast("管理员已登录。");
    } else {
      els.loginError.textContent = "账号或密码错误。当前系统仅开放单一管理员账户。";
    }
  });

  els.logoutBtn.addEventListener("click", () => {
    clearSession();
    setAuthenticated(false);
    els.loginForm.reset();
    els.loginError.textContent = "";
    showToast("已退出登录。");
    els.usernameInput.focus();
  });

  els.navItems.forEach(btn => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  els.globalSearch.addEventListener("input", event => {
    state.search = event.target.value;
    renderCompList();
    renderBuilder();
  });

  els.filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      state.tierFilter = btn.dataset.tier;
      els.filterButtons.forEach(item => item.classList.toggle("active", item === btn));
      renderCompList();
    });
  });

  els.difficultyFilter.addEventListener("change", event => {
    state.difficultyFilter = event.target.value;
    renderCompList();
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
    if (!comp) return;
    fillForm(comp);
    setView("admin");
  });

  els.heroPool.addEventListener("click", event => {
    const button = event.target.closest("[data-hero]");
    if (!button) return;
    const name = button.dataset.hero;
    if (state.selectedHeroes.includes(name)) {
      state.selectedHeroes = state.selectedHeroes.filter(item => item !== name);
    } else if (state.selectedHeroes.length < 10) {
      state.selectedHeroes = [...state.selectedHeroes, name];
    } else {
      showToast("最多选择 10 名英雄。");
    }
    renderBuilder();
  });

  els.selectedHeroes.addEventListener("click", event => {
    const button = event.target.closest("[data-remove-hero]");
    if (!button) return;
    state.selectedHeroes = state.selectedHeroes.filter(item => item !== button.dataset.removeHero);
    renderBuilder();
  });

  els.clearBuilderBtn.addEventListener("click", () => {
    state.selectedHeroes = [];
    renderBuilder();
  });

  els.baseItems.addEventListener("click", event => {
    const button = event.target.closest("[data-item]");
    if (!button) return;
    const itemId = button.dataset.item;

    if (state.selectedItems.includes(itemId)) {
      state.selectedItems = state.selectedItems.filter(id => id !== itemId);
    } else if (state.selectedItems.length < 2) {
      state.selectedItems = [...state.selectedItems, itemId];
    } else {
      state.selectedItems = [state.selectedItems[1], itemId];
    }

    renderItems();
  });

  els.clearItemsBtn.addEventListener("click", () => {
    state.selectedItems = [];
    renderItems();
  });

  els.adminCompList.addEventListener("click", event => {
    const button = event.target.closest("[data-admin-comp]");
    if (!button) return;
    const comp = state.data.comps.find(item => item.id === button.dataset.adminComp);
    if (comp) fillForm(comp);
  });

  els.newCompBtn.addEventListener("click", clearForm);

  els.compForm.addEventListener("submit", event => {
    event.preventDefault();
    const comp = formToComp();
    if (!comp.name) {
      showToast("阵容名称不能为空。");
      return;
    }

    const index = state.data.comps.findIndex(item => item.id === comp.id);
    if (index >= 0) {
      state.data.comps[index] = comp;
    } else {
      state.data.comps.unshift(comp);
    }

    state.selectedCompId = comp.id;
    saveData();
    renderAll();
    fillForm(comp);
    els.saveState.textContent = "已保存";
    showToast("阵容已保存。");
  });

  els.deleteCompBtn.addEventListener("click", () => {
    const id = form.id.value;
    if (!id) return;
    const comp = state.data.comps.find(item => item.id === id);
    if (!comp) return;
    const confirmed = window.confirm(`确认删除「${comp.name}」吗？`);
    if (!confirmed) return;

    state.data.comps = state.data.comps.filter(item => item.id !== id);
    state.selectedCompId = state.data.comps[0]?.id || "";
    saveData();
    renderAll();

    if (state.data.comps[0]) {
      fillForm(state.data.comps[0]);
    } else {
      clearForm();
    }

    showToast("阵容已删除。");
  });

  els.resetDataBtn.addEventListener("click", () => {
    const confirmed = window.confirm("确认恢复内置种子数据吗？后台改动会被覆盖。");
    if (!confirmed) return;
    resetAppData();
    showToast("已恢复种子数据。");
  });
}

function init() {
  state.selectedCompId = state.data.comps[0]?.id || "";
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
}

init();
