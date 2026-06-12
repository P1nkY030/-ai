const sharedBaseItems = [
  { id: "sword", name: "暴风大剑", stat: "攻击力" },
  { id: "bow", name: "反曲之弓", stat: "攻速" },
  { id: "rod", name: "无用大棒", stat: "法强" },
  { id: "tear", name: "女神之泪", stat: "法力值" },
  { id: "vest", name: "锁子甲", stat: "护甲" },
  { id: "cloak", name: "负极斗篷", stat: "魔抗" },
  { id: "belt", name: "巨人腰带", stat: "生命值" },
  { id: "glove", name: "拳套", stat: "暴击" }
];

const sharedRecipes = {
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
};

const GAME_VERSION_CATALOG = {
  defaultVersionId: "s11-14-12",
  versions: [
    {
      id: "s11-14-12",
      name: "S11 14.12",
      season: "画之灵",
      patch: "14.12",
      status: "正式服",
      updatedAt: "2026-06-07",
      source: "手动维护",
      notes: "当前项目内置示例版本，可在 GitHub 中持续替换为正式数据。",
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
        baseItems: sharedBaseItems,
        recipes: sharedRecipes,
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
      }
    },
    {
      id: "s12-template",
      name: "S12 新版本模板",
      season: "待填写",
      patch: "待填写",
      status: "草稿",
      updatedAt: "2026-06-07",
      source: "版本模板",
      notes: "复制此版本对象，在 GitHub 中替换羁绊、英雄、装备、阵容即可发布新版本。",
      data: {
        traits: [
          { name: "新羁绊示例", breakpoints: [2, 4, 6] },
          { name: "职业示例", breakpoints: [2, 4, 6, 8] }
        ],
        heroes: [
          { name: "一费英雄示例", cost: 1, traits: ["新羁绊示例", "职业示例"] },
          { name: "四费主C示例", cost: 4, traits: ["新羁绊示例", "职业示例"] }
        ],
        baseItems: sharedBaseItems,
        recipes: sharedRecipes,
        comps: [
          {
            id: "comp-new-version-demo",
            name: "新版本阵容示例",
            tier: "A",
            difficulty: "中等",
            carries: ["四费主C示例"],
            heroes: ["一费英雄示例", "四费主C示例"],
            traits: ["新羁绊示例", "职业示例"],
            items: {
              "四费主C示例": ["鬼索的狂暴之刃", "珠光护手", "正义之手"]
            },
            plan: "在这里填写该版本阵容的运营节奏。",
            positioning: "在这里填写站位与对位提示。",
            notes: "模板数据，发布前请替换。"
          }
        ]
      }
    }
  ]
};
