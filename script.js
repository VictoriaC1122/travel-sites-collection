const copy = {
  zh: {
    brandEyebrow: "Victoria Travel Archive",
    brandTitle: "旅遊網站總整理",
    heroEyebrow: "Travel guide collection",
    heroTitle: "Victoria 的旅遊手冊整理",
    heroLead:
      "這裡收錄 Victoria 一站一站整理出的旅遊網站，從東京、東北、美西到英國與印尼，都可以直接從這裡進入。",
    introEyebrow: "Browse by destination",
    introTitle: "想看哪一段旅程，就從那座城市開始。",
    collectionEyebrow: "Collection",
    collectionTitle: "旅程列表",
    cta: "前往網站"
  },
  en: {
    brandEyebrow: "Victoria Travel Archive",
    brandTitle: "Travel Collection",
    heroEyebrow: "Travel guide collection",
    heroTitle: "Victoria's travel guide collection",
    heroLead:
      "A single place for Victoria's travel guide websites, from Tokyo and Tohoku to the American West, the UK, and Indonesia.",
    introEyebrow: "Browse by destination",
    introTitle: "Choose a place, then open the trip.",
    collectionEyebrow: "Collection",
    collectionTitle: "Explore the journeys",
    cta: "Open site"
  }
};

const sites = [
  {
    region: "Tokyo Edit",
    category: {
      zh: "購物旅冊",
      en: "Shopping Guide"
    },
    duration: {
      zh: "東京城市停留",
      en: "Tokyo city stay"
    },
    dates: "2026/02/21 - 2026/02/27",
    title: {
      zh: "Victoria & Aiden 東京爆買之旅",
      en: "Victoria & Aiden Tokyo Shopping Trip"
    },
    subtitle: {
      zh: "東京購物旅遊手冊",
      en: "Tokyo shopping travel book"
    },
    url: "https://victoriac1122.github.io/victoria-aiden-tokyo-trip/",
    description: {
      zh: "以東京購物和精品逛街為主軸，整理多語切換、每日行程、預算規劃與購物節奏，是一個完整又很有質感的東京旅遊手冊。",
      en: "A polished Tokyo handbook focused on shopping districts, daily plans, multilingual browsing, and budget rhythm."
    },
    note: {
      zh: "適合快速掌握購物熱區與城市動線。",
      en: "Best for shopping districts and city flow."
    },
    tags: ["東京", "購物", "多語系", "預算規劃"],
    tagsEn: ["Tokyo", "Shopping", "Multilingual", "Budget"],
    surface: "#efe4d5",
    accent: "#8c6b47",
    regionColor: "#6f593a"
  },
  {
    region: "UK · AIB 2026",
    category: {
      zh: "研討會旅程",
      en: "Conference Journey"
    },
    duration: {
      zh: "曼城到倫敦",
      en: "Manchester to London"
    },
    dates: "2026/06/29 - 2026/07/12",
    title: {
      zh: "AIB 2026 曼徹斯特英國行",
      en: "AIB 2026 Manchester UK Trip"
    },
    subtitle: {
      zh: "英國研討會與城市旅程手冊",
      en: "UK conference and city travel handbook"
    },
    url: "https://victoriac1122.github.io/uk-aib-2026-travel/",
    description: {
      zh: "以 AIB 2026 曼徹斯特研討會為起點，串起航班、住宿、會議安排、報帳資訊與倫敦段移動，是一份實用又完整的英國旅程手冊。",
      en: "A practical UK handbook built around AIB 2026 in Manchester, connecting flights, stays, conference plans, reimbursement details, and the London leg."
    },
    note: {
      zh: "適合查看會議旅程與英國移動安排。",
      en: "Best for conference travel and UK routing."
    },
    tags: ["英國", "曼徹斯特", "倫敦", "研討會"],
    tagsEn: ["UK", "Manchester", "London", "Conference"],
    surface: "#e5dee6",
    accent: "#76647d",
    regionColor: "#66566f"
  },
  {
    region: "Bali × Java",
    category: {
      zh: "自然路線",
      en: "Nature Route"
    },
    duration: {
      zh: "海島到火山",
      en: "Island to volcano"
    },
    dates: "2026/06/13 - 2026/06/21",
    title: {
      zh: "Bali × Java Travel Handbook 2026",
      en: "Bali × Java Travel Handbook 2026"
    },
    subtitle: {
      zh: "印尼海島與火山旅程",
      en: "Indonesia island-to-volcano route"
    },
    url: "https://victoriac1122.github.io/bali-java-travel-2026/",
    description: {
      zh: "從峇里島延伸到東爪哇與日惹的印尼旅行手冊，串起海島、火山、瀑布與文化古城，整體節奏安排非常完整。",
      en: "An Indonesia travel handbook linking Bali, East Java, waterfalls, volcanoes, and Yogyakarta in one smooth route."
    },
    note: {
      zh: "適合喜歡自然景觀與完整旅程節奏。",
      en: "Best for scenery and full-route planning."
    },
    tags: ["印尼", "峇里島", "火山", "旅遊手冊"],
    tagsEn: ["Indonesia", "Bali", "Volcano", "Handbook"],
    surface: "#ead8c7",
    accent: "#9a6a48",
    regionColor: "#8d5837"
  },
  {
    region: "USA West",
    category: {
      zh: "公路旅行",
      en: "Road Trip"
    },
    duration: {
      zh: "長線旅程",
      en: "Long-haul itinerary"
    },
    dates: "2025/12/20 - 2026/01/07",
    title: {
      zh: "Victoria 全美西行",
      en: "Victoria USA West Coast Trip"
    },
    subtitle: {
      zh: "美西公路旅行總整理",
      en: "West Coast USA road trip archive"
    },
    url: "https://victoriac1122.github.io/USA/",
    description: {
      zh: "以美西公路旅行為主軸，整理交通、花費、每日行程和 checklist，資訊量大但結構清楚，適合長天數跨城市旅行。",
      en: "A clear long-form West Coast road trip archive with transport, budget, daily plans, and trip checklists."
    },
    note: {
      zh: "適合需要長線旅行規劃參考的人。",
      en: "Best for long-route planning."
    },
    tags: ["美西", "公路旅行", "費用整理", "長天數"],
    tagsEn: ["USA West", "Road Trip", "Budget", "Long Stay"],
    surface: "#e3e7e7",
    accent: "#768e98",
    regionColor: "#627b88"
  },
  {
    region: "Tokyo Winter",
    category: {
      zh: "城市日誌",
      en: "City Journal"
    },
    duration: {
      zh: "冬日短旅",
      en: "Winter short trip"
    },
    dates: "2025/12/03 - 2025/12/08",
    title: {
      zh: "東京之旅 12/3–12/8",
      en: "Tokyo Trip 12/3-12/8"
    },
    subtitle: {
      zh: "東京冬日旅程日誌",
      en: "Tokyo winter trip journal"
    },
    url: "https://victoriac1122.github.io/tokyohot/",
    description: {
      zh: "偏向冬日東京的精緻旅程紀錄，整理每日安排、住宿與花費分析，閱讀感更像細膩的旅行日誌。",
      en: "A winter Tokyo journal with daily plans, stays, and spending notes, shaped more like a personal travel diary."
    },
    note: {
      zh: "適合喜歡生活感與回顧感的東京旅程。",
      en: "Best for a softer city-diary mood."
    },
    tags: ["東京", "冬季", "花費分析", "行程紀錄"],
    tagsEn: ["Tokyo", "Winter", "Spending", "Journal"],
    surface: "#e6e7e2",
    accent: "#7b8a87",
    regionColor: "#61757b"
  },
  {
    region: "Tohoku",
    category: {
      zh: "雪國路線",
      en: "Snow Country"
    },
    duration: {
      zh: "冬季自駕",
      en: "Winter drive"
    },
    dates: "2026/01/21 - 2026/01/28",
    title: {
      zh: "Victoria 日本東北行",
      en: "Victoria Tohoku Winter Trip"
    },
    subtitle: {
      zh: "仙台與青森雪國旅程",
      en: "Sendai and Aomori travel story"
    },
    url: "https://victoriac1122.github.io/sendai-aomori-travel/",
    description: {
      zh: "以仙台、青森、藏王等東北區域為主角，融合雪景、溫泉、纜車與自駕元素，整體風格安靜、優雅，也很有季節感。",
      en: "A quiet winter route through Sendai, Aomori, and Zao, shaped by snow scenes, onsen stays, cable cars, and driving."
    },
    note: {
      zh: "適合尋找冬季東北旅行靈感的人。",
      en: "Best for winter Tohoku inspiration."
    },
    tags: ["日本東北", "雪景", "溫泉", "自駕"],
    tagsEn: ["Tohoku", "Snow", "Onsen", "Drive"],
    surface: "#e4ebf0",
    accent: "#6c7a89",
    regionColor: "#5e7182"
  }
];

const cards = document.getElementById("cards");

let currentLang = "zh";

const sortedSites = [...sites].sort((a, b) => a.dates.localeCompare(b.dates));

function renderCards(lang) {
  cards.innerHTML = sortedSites
    .map(
      (site) => `
        <article class="site-card" style="--card-surface:${site.surface}; --card-accent:${site.accent}; --card-region:${site.regionColor};">
          <div class="site-body">
            <div class="site-top">
              <span class="site-region">${site.region}</span>
            </div>
            <h3>${site.title[lang]}</h3>
            <p class="site-subtitle">${site.subtitle[lang]}</p>
            <div class="site-meta-line">
              <span>${site.category[lang]}</span>
              <span class="site-meta-dot"></span>
              <span>${site.duration[lang]}</span>
            </div>
            <p class="site-description">${site.description[lang]}</p>
            <div class="tag-row">
              ${(lang === "zh" ? site.tags : site.tagsEn).map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
            <p class="site-note">${site.note[lang]}</p>
          </div>
          <div class="site-side">
            <span class="site-date">${site.dates}</span>
            <div class="site-actions">
              <a class="site-link" href="${site.url}" target="_blank" rel="noreferrer">${copy[lang].cta}</a>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = copy[lang][el.dataset.i18n];
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  renderCards(lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

applyLanguage(currentLang);
