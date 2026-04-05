const sites = [
  {
    index: "01",
    region: "Tokyo Edit",
    category: "Shopping Guide",
    duration: "Tokyo city stay",
    dates: "2026/02/21 - 2026/02/27",
    title: "Victoria & Aiden 東京爆買之旅",
    subtitle: "Tokyo shopping travel book",
    url: "https://victoriac1122.github.io/victoria-aiden-tokyo-trip/",
    description:
      "以東京購物和精品逛街為主軸，整理多語切換、每日行程、預算規劃與購物節奏，是一個完整又很有質感的東京旅遊手冊。",
    note: "適合想快速掌握購物熱區、交通安排與預算的人。",
    tags: ["東京", "購物", "多語系", "預算規劃"],
    surface: "linear-gradient(135deg, #f4ede4 0%, #e6d7c1 100%)",
    accent: "linear-gradient(90deg, #6b5a3a 0%, #a68b63 100%)",
    regionColor: "#6f593a"
  },
  {
    index: "02",
    region: "Bali × Java",
    category: "Nature Route",
    duration: "Island to volcano",
    dates: "2026/06/13 - 2026/06/21",
    title: "Bali × Java Travel Handbook 2026",
    subtitle: "Indonesia island-to-volcano route",
    url: "https://victoriac1122.github.io/bali-java-travel-2026/",
    description:
      "從峇里島延伸到東爪哇與日惹的印尼旅行手冊，串起海島、火山、瀑布與文化古城，整體節奏安排非常完整。",
    note: "適合喜歡自然景觀和完整旅程動線整理的人。",
    tags: ["印尼", "峇里島", "火山", "旅遊手冊"],
    surface: "linear-gradient(135deg, #f4eadf 0%, #ead3bf 55%, #d7ddd6 100%)",
    accent: "linear-gradient(90deg, #c46f42 0%, #556f6f 100%)",
    regionColor: "#8d5837"
  },
  {
    index: "03",
    region: "USA West",
    category: "Road Trip",
    duration: "Long-haul itinerary",
    dates: "2025/12/20 - 2026/01/04",
    title: "Victoria 全美西行",
    subtitle: "West Coast USA road trip archive",
    url: "https://victoriac1122.github.io/USA/",
    description:
      "以美西公路旅行為主軸，整理交通、花費、每日行程和 checklist，資訊量大但結構清楚，適合長天數跨城市旅行。",
    note: "適合把大型旅行做成清楚規劃頁的人參考。",
    tags: ["美西", "公路旅行", "費用整理", "長天數"],
    surface: "linear-gradient(135deg, #eef2f1 0%, #dfe7ea 52%, #ebe0d5 100%)",
    accent: "linear-gradient(90deg, #8db4c8 0%, #9b8b7e 100%)",
    regionColor: "#627b88"
  },
  {
    index: "04",
    region: "Tokyo Winter",
    category: "City Journal",
    duration: "Winter short trip",
    dates: "2025/12/03 - 2025/12/08",
    title: "東京之旅 12/3–12/8",
    subtitle: "Tokyo winter trip journal",
    url: "https://victoriac1122.github.io/tokyohot/",
    description:
      "偏向冬日東京的精緻旅程紀錄，整理每日安排、住宿與花費分析，閱讀感更像細膩的旅行日誌。",
    note: "適合喜歡帶生活感與回顧感的東京行程整理。",
    tags: ["東京", "冬季", "花費分析", "行程紀錄"],
    surface: "linear-gradient(135deg, #edf1f2 0%, #dfe5e5 52%, #ece2d8 100%)",
    accent: "linear-gradient(90deg, #7b8d91 0%, #d4a574 100%)",
    regionColor: "#61757b"
  },
  {
    index: "05",
    region: "Tohoku",
    category: "Snow Country",
    duration: "Winter drive",
    dates: "2026/01/21 - 2026/01/28",
    title: "Victoria 日本東北行",
    subtitle: "Sendai and Aomori travel story",
    url: "https://victoriac1122.github.io/sendai-aomori-travel/",
    description:
      "以仙台、青森、藏王等東北區域為主角，融合雪景、溫泉、纜車與自駕元素，整體風格安靜、優雅，也很有季節感。",
    note: "適合想找日本東北冬季旅行靈感的人。",
    tags: ["日本東北", "雪景", "溫泉", "自駕"],
    surface: "linear-gradient(135deg, #edf2f6 0%, #dde6ee 55%, #f2f5f7 100%)",
    accent: "linear-gradient(90deg, #5f6d7a 0%, #8fa1b3 100%)",
    regionColor: "#5e7182"
  }
];

const cards = document.getElementById("cards");

cards.innerHTML = sites
  .map(
    (site, index) => `
      <article class="site-card${index === 0 ? " is-featured" : ""}" style="--card-surface:${site.surface}; --card-accent:${site.accent}; --card-region:${site.regionColor};">
        <div class="site-body">
          <div class="site-top">
            <span class="site-region">${site.region}</span>
            <span class="site-index">${site.index}</span>
          </div>
          <h3>${site.title}</h3>
          <p class="site-subtitle">${site.subtitle}</p>
          <div class="site-meta-line">
            <span>${site.category}</span>
            <span class="site-meta-dot"></span>
            <span>${site.duration}</span>
          </div>
          <p class="site-description">${site.description}</p>
          <div class="tag-row">
            ${site.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
          </div>
          <p class="site-note">${site.note}</p>
        </div>
        <div class="site-side">
          <span class="site-date">${site.dates}</span>
          <div class="site-actions">
            <a class="site-link" href="${site.url}" target="_blank" rel="noreferrer">前往網站</a>
          </div>
        </div>
      </article>
    `
  )
  .join("");
