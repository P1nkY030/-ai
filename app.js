const credentials = Object.freeze({
  username: "YJJ",
  password: "YJJ",
  role: "管理员"
});

const versionStorageKey = "jcc_console_active_version_v1";
const sessionKey = "jcc_console_session_v1";

const state = {
  versions: [],
  defaultVersionId: "",
  activeVersionId: localStorage.getItem(versionStorageKey) || "",
  activeView: "comps",
  selectedCompId: "",
  tierFilter: "全部",
  difficultyFilter: "全部",
  search: "",
  selectedHeroes: [],
  selectedItems: [],
  isAuthenticated: false
};

async function fetchData() {
  const res = await fetch("/api/data");
  if (!res.ok) throw new Error("API error: " + res.status);
  return res.json();
}

async function pushData(data) {
  const res = await fetch("/api/data", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error("Save failed: " + res.status);
  return res.json();
}

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
    description: "维护不同游戏版本的英雄、羁绊、装备和阵容数据。"
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
  versionSelect: document.getElementById("versionSelect"),
  activeVersionName: document.getElementById("activeVersionName"),
  activeVersionMeta: document.getElementById("activeVersionMeta"),
  newVersionBtn: document.getElementById("newVersionBtn"),
  exportVersionBtn: document.getElementById("exportVersionBtn"),
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

function clone(value) {
  return structuredClone(value);
}

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}

let heroCacheMap = null;
let heroCacheRef = null;

function getHeroMap(data) {
  if (heroCacheMap && heroCacheRef === data) return heroCacheMap;
  heroCacheMap = new Map(data.heroes.map(h => [h.name, h]));
  heroCacheRef = data;
  return heroCacheMap;
}


function activeVersion() {
  return state.versions.find(version => version.id === state.activeVersionId) || state.versions[0];
}

function activeData() {
  return activeVersion().data;
}

async function saveVersions() {
  localStorage.setItem(versionStorageKey, state.activeVersionId);
  try {
    await pushData({ defaultVersionId: state.defaultVersionId, versions: state.versions });
  } catch (err) {
    console.error("保存失败:", err);
    showToast("数据保存失败，请检查服务是否运行。");
  }
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
    element.classList.toggle("is-hidden", key !== view);
  });
}

function switchVersion(versionId) {
  const nextVersion = state.versions.find(version => version.id === versionId);
  if (!nextVersion) return;
  state.activeVersionId = versionId;
  state.selectedCompId = nextVersion.data.comps[0]?.id || "";
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
  saveVersions();
  renderAll();
  if (activeData().comps[0]) fillForm(activeData().comps[0]);
  showToast(`已切换到 ${nextVersion.name}`);
}

function renderVersionSelect() {
  els.versionSelect.innerHTML = state.versions.map(version => `
    <option value="${escapeHtml(version.id)}">${escapeHtml(version.name)} · ${escapeHtml(version.status)}</option>
  `).join("");
  els.versionSelect.value = activeVersion().id;
}

function renderVersionWorkspace() {
  const version = activeVersion();
  els.activeVersionName.textContent = `${version.name} · ${version.status}`;
  els.activeVersionMeta.textContent = `${version.season} / ${version.patch} / 更新：${version.updatedAt} / 来源：${version.source}`;
}

function filteredComps() {
  const data = activeData();
  const keyword = state.search.trim().toLowerCase();
  return data.comps.filter(comp => {
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

function renderOverview() {
  const version = activeVersion();
  const data = activeData();
  const sCount = data.comps.filter(comp => comp.tier === "S").length;
  const avgUnits = data.comps.length
    ? (data.comps.reduce((sum, comp) => sum + comp.heroes.length, 0) / data.comps.length).toFixed(1)
    : "0.0";
  const uniqueTraits = new Set(data.comps.flatMap(comp => comp.traits)).size;
  const tiles = [
    { label: "当前游戏版本", value: version.patch, meta: `${version.season} · ${version.status}` },
    { label: "阵容数量", value: `${data.comps.length}`, meta: "当前版本已维护阵容" },
    { label: "高优先级阵容", value: `${sCount}`, meta: "评级为 S 的主推阵容" },
    { label: "覆盖羁绊数量", value: `${uniqueTraits}`, meta: `平均成型人口 ${avgUnits}` }
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
  const data = activeData();
  const hero = getHeroMap(data).get(name);
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
  const data = activeData();
  const comp = data.comps.find(item => item.id === state.selectedCompId);
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
        <div class="stat-box"><span>成型人口</span><strong>${comp.heroes.length}</strong></div>
        <div class="stat-box"><span>主输出</span><strong>${escapeHtml(comp.carries[0] || "-")}</strong></div>
        <div class="stat-box"><span>主羁绊</span><strong>${escapeHtml(comp.traits[0] || "-")}</strong></div>
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

      <div class="info-block"><span>运营节奏</span><p>${escapeHtml(comp.plan)}</p></div>
      <div class="info-block"><span>站位提示</span><p>${escapeHtml(comp.positioning)}</p></div>
    </div>
  `;
}

function renderBuilder() {
  const data = activeData();
  const keyword = state.search.trim().toLowerCase();
  const heroes = data.heroes.filter(hero => {
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
  const data = activeData();
  const heroMap = getHeroMap(data);
  const counts = {};

  state.selectedHeroes.forEach(name => {
    const hero = heroMap.get(name);
    if (!hero) return;
    hero.traits.forEach(trait => {
      counts[trait] = (counts[trait] || 0) + 1;
    });
  });

  const rows = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .map(([trait, count]) => {
      const traitInfo = data.traits.find(item => item.name === trait);
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
  const data = activeData();
  els.baseItems.innerHTML = data.baseItems.map(item => `
    <button class="chip-card ${state.selectedItems.includes(item.id) ? "selected" : ""}" data-item="${item.id}" type="button">
      <strong>${escapeHtml(item.name)}</strong>
      <small>${escapeHtml(item.stat)}</small>
    </button>
  `).join("");

  renderRecipeResult();

  els.recipeTable.innerHTML = Object.entries(data.recipes).map(([key, recipe]) => {
    const names = key.split("+").map(id => data.baseItems.find(item => item.id === id)?.name || id);
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
  const data = activeData();
  if (state.selectedItems.length === 0) {
    els.itemRecipeResult.innerHTML = `<span class="tag">请选择两个基础散件</span>`;
    return;
  }

  const selectedNames = state.selectedItems.map(id => data.baseItems.find(item => item.id === id)?.name || id);

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

  const recipe = data.recipes[normalizeRecipeKey(state.selectedItems[0], state.selectedItems[1])];

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
  const data = activeData();
  els.adminCompList.innerHTML = data.comps.map(comp => `
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

function createVersionFromCurrent() {
  const base = activeVersion();
  const rawName = window.prompt("请输入新游戏版本名称，例如：S12 14.13");
  if (!rawName) return;
  const name = rawName.trim();
  if (!name) return;
  const id = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || `version-${Date.now()}`;
  if (state.versions.some(version => version.id === id)) {
    showToast("版本 ID 已存在，请换一个名称。");
    return;
  }

  const nextVersion = clone(base);
  nextVersion.id = id;
  nextVersion.name = name;
  nextVersion.patch = name;
  nextVersion.status = "草稿";
  nextVersion.updatedAt = new Date().toISOString().slice(0, 10);
  nextVersion.source = "从当前版本复制";
  nextVersion.notes = "新版本草稿，请在 GitHub 中替换英雄、羁绊、装备和阵容数据。";
  state.versions.unshift(nextVersion);
  state.activeVersionId = id;
  state.selectedCompId = nextVersion.data.comps[0]?.id || "";
  saveVersions();
  renderAll();
  showToast(`已创建 ${name}`);
}

function copyToClipboard(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.style.position = "fixed";
  ta.style.left = "-9999px";
  document.body.appendChild(ta);
  ta.select();
  document.execCommand("copy");
  document.body.removeChild(ta);
}

async function exportActiveVersion() {
  const version = activeVersion();
  const payload = JSON.stringify(version, null, 2);
  try {
    await navigator.clipboard.writeText(payload);
    showToast("当前版本 JSON 已复制到剪贴板。");
  } catch {
    copyToClipboard(payload);
    showToast("当前版本 JSON 已复制到剪贴板。");
  }
}

async function resetCurrentVersionData() {
  const confirmed = window.confirm("确认恢复所有版本的内置种子数据吗？所有改动会被覆盖。");
  if (!confirmed) return;
  try {
    const res = await fetch("/api/reset", { method: "POST" });
    if (!res.ok) throw new Error("Reset failed");
    const data = await res.json();
    state.defaultVersionId = data.defaultVersionId || "";
    state.versions = data.versions || [];
    if (!state.versions.some(v => v.id === state.activeVersionId)) {
      state.activeVersionId = state.defaultVersionId || state.versions[0]?.id || "";
    }
    state.selectedCompId = activeData().comps[0]?.id || "";
    state.selectedHeroes = [];
    state.selectedItems = [];
    renderAll();
    if (activeData().comps[0]) fillForm(activeData().comps[0]);
    showToast("已恢复种子数据。");
  } catch (err) {
    console.error("重置失败:", err);
    showToast("恢复失败，请检查服务是否运行。");
  }
}

function renderCurrentView() {
  switch (state.activeView) {
    case "comps": renderOverview(); renderCompList(); break;
    case "builder": renderBuilder(); break;
    case "items": renderItems(); break;
    case "admin": renderAdminList(); break;
  }
}

function renderAll() {
  renderVersionSelect();
  renderVersionWorkspace();
  renderCurrentView();
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
      if (activeData().comps[0]) fillForm(activeData().comps[0]);
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

  els.versionSelect.addEventListener("change", event => {
    switchVersion(event.target.value);
  });

  els.newVersionBtn.addEventListener("click", createVersionFromCurrent);
  els.exportVersionBtn.addEventListener("click", exportActiveVersion);

  els.navItems.forEach(btn => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  const doSearch = debounce(() => {
    if (state.activeView === "comps") renderCompList();
    if (state.activeView === "builder") renderBuilder();
  }, 150);

  els.globalSearch.addEventListener("input", event => {
    state.search = event.target.value;
    doSearch();
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
    const comp = activeData().comps.find(item => item.id === editButton.dataset.editComp);
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
    const comp = activeData().comps.find(item => item.id === button.dataset.adminComp);
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

    const data = activeData();
    const index = data.comps.findIndex(item => item.id === comp.id);
    if (index >= 0) {
      data.comps[index] = comp;
    } else {
      data.comps.unshift(comp);
    }

    activeVersion().updatedAt = new Date().toISOString().slice(0, 10);
    state.selectedCompId = comp.id;
    saveVersions();
    renderAll();
    fillForm(comp);
    els.saveState.textContent = "已保存";
    showToast("阵容已保存到当前版本。");
  });

  els.deleteCompBtn.addEventListener("click", () => {
    const id = form.id.value;
    if (!id) return;
    const data = activeData();
    const comp = data.comps.find(item => item.id === id);
    if (!comp) return;
    const confirmed = window.confirm(`确认删除「${comp.name}」吗？`);
    if (!confirmed) return;

    data.comps = data.comps.filter(item => item.id !== id);
    activeVersion().updatedAt = new Date().toISOString().slice(0, 10);
    state.selectedCompId = data.comps[0]?.id || "";
    saveVersions();
    renderAll();

    if (data.comps[0]) {
      fillForm(data.comps[0]);
    } else {
      clearForm();
    }

    showToast("阵容已从当前版本删除。");
  });

  els.resetDataBtn.addEventListener("click", resetCurrentVersionData);
}

async function init() {
  try {
    const serverData = await fetchData();
    state.defaultVersionId = serverData.defaultVersionId || "";
    state.versions = serverData.versions || [];

    if (!state.versions.length) {
      showToast("服务器返回数据为空，请检查 data.json。");
      return;
    }

    if (!state.versions.some(v => v.id === state.activeVersionId)) {
      state.activeVersionId = state.defaultVersionId || state.versions[0]?.id || "";
    }
    state.selectedCompId = activeData().comps[0]?.id || "";
  } catch (err) {
    console.error("加载数据失败:", err);
    showToast("无法连接服务器，请确认服务已启动 (start.bat)。");
    return;
  }

  bindEvents();
  setView("comps");

  if (loadSession()) {
    setAuthenticated(true);
    renderAll();
    if (activeData().comps[0]) fillForm(activeData().comps[0]);
  } else {
    setAuthenticated(false);
    els.usernameInput.focus();
  }
}

init();
