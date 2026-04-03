const sites = [
  {
    index: "01",
    region: "Tokyo Edit",
    asideLabel: "Editorial Note",
    asideText: "城市精品購物、日程安排與預算節奏全都被整理得很完整。",
    title: "Victoria & Aiden 東京爆買之旅",
    subtitle: "Tokyo shopping travel book",
    url: "https://victoriac1122.github.io/victoria-aiden-tokyo-trip/",
    description:
      "以東京購物和精品逛街為主軸，把行程、預算、多語切換與購物節奏整理成完整旅遊手冊，質感很像真正會收藏的東京 shopping guide。",
    note:
      "金棕色調很適合它的購物主題，所以我讓這張卡片更像精品百貨的封面入口。",
    tags: ["東京", "購物", "多語系", "預算規劃"],
    gradient: "radial-gradient(circle at 18% 18%, rgba(255,255,255,0.18), transparent 16%), linear-gradient(160deg, #5b4830 0%, #8b6f47 38%, #baa07b 100%)"
  },
  {
    index: "02",
    region: "Island to Volcano",
    asideLabel: "Feature Story",
    asideText: "最像封面故事的一站，從度假海島一路走到火山與文化尾韻。",
    title: "Bali × Java Travel Handbook 2026",
    subtitle: "Indonesia island-to-volcano route",
    url: "https://victoriac1122.github.io/bali-java-travel-2026/",
    description:
      "從峇里島的鬆弛感，一路延伸到東爪哇火山、瀑布和日惹文化尾韻，這站最厲害的是旅程節奏漂亮，而且很有大地景觀感。",
    note:
      "我把它做成帶沙色與海霧感的版面，去對齊它原本站裡那種溫暖又有探險感的氛圍。",
    tags: ["印尼", "峇里島", "火山", "旅遊手冊"],
    gradient: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.15), transparent 16%), linear-gradient(150deg, #c46f42 0%, #8d5837 38%, #4f6c68 100%)"
  },
  {
    index: "03",
    region: "Road Trip",
    asideLabel: "Long Form",
    asideText: "適合長線旅程的整理型網站，資訊量充足又不亂。",
    title: "Victoria 全美西行",
    subtitle: "West Coast USA road trip archive",
    url: "https://victoriac1122.github.io/USA/",
    description:
      "長天數、多城市、多段移動的美西旅行站，擅長把交通、花費與每日安排拆得非常清楚，是整個系列裡最有大型旅程管理感的一站。",
    note:
      "這張卡片改成天空與沙岩色層次，讓它更像公路旅行手冊，而不是一般資訊卡。",
    tags: ["美西", "公路旅行", "費用整理", "長天數"],
    gradient: "radial-gradient(circle at 82% 24%, rgba(255,255,255,0.18), transparent 18%), linear-gradient(145deg, #7ea2b4 0%, #9b8b7e 48%, #d8cabd 100%)"
  },
  {
    index: "04",
    region: "Winter Tokyo",
    asideLabel: "City Journal",
    asideText: "比較像東京旅途日記，生活感和花費節奏都很鮮明。",
    title: "東京之旅 12/3–12/8",
    subtitle: "Tokyo winter trip journal",
    url: "https://victoriac1122.github.io/tokyohot/",
    description:
      "偏生活感與回顧感的東京冬季旅程紀錄，除了每日行程，也把購物與花費占比整理得很有記憶點，讀起來像精緻版旅行日誌。",
    note:
      "這張卡片比較安靜，讓東京冬日的霧藍和暖金去說話，和原本站的細膩感比較接近。",
    tags: ["東京", "冬季", "花費分析", "行程紀錄"],
    gradient: "radial-gradient(circle at 18% 16%, rgba(255,255,255,0.16), transparent 18%), linear-gradient(150deg, #73868d 0%, #a89e94 50%, #d2a273 100%)"
  },
  {
    index: "05",
    region: "Snow Country",
    asideLabel: "Seasonal Mood",
    asideText: "雪景、溫泉與安靜冷調，是整個系列裡最有季節感的一站。",
    title: "Victoria 日本東北行",
    subtitle: "Sendai and Aomori travel story",
    url: "https://victoriac1122.github.io/sendai-aomori-travel/",
    description:
      "仙台、青森、藏王與雪景路線組成的東北旅行站，從配色到內容節奏都很乾淨，溫泉、纜車與冬季景色的氣質非常明顯。",
    note:
      "我把這張卡片拉成偏冷藍與霧灰雪色，去呼應它原本那種清冷、漂亮、安靜的質感。",
    tags: ["日本東北", "雪景", "溫泉", "自駕"],
    gradient: "radial-gradient(circle at 80% 18%, rgba(255,255,255,0.16), transparent 18%), linear-gradient(150deg, #5f6d7a 0%, #7a8fa0 48%, #dbe4ec 100%)"
  }
];

const cards = document.getElementById("cards");

cards.innerHTML = sites
  .map(
    (site, index) => `
      <article class="site-card" style="--card-gradient:${site.gradient}; animation-delay:${index * 90}ms">
        <div class="site-meta">
          <span class="site-region">${site.region}</span>
          <span class="site-index">${site.index}</span>
        </div>
        <div class="site-card-content">
          <h3>${site.title}</h3>
          <p class="site-subtitle">${site.subtitle}</p>
          <div class="site-deck">
            <div>
              <p class="site-description">${site.description}</p>
              <div class="tag-row">
                ${site.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
              </div>
            </div>
            <aside class="site-aside">
              <span class="site-aside-label">${site.asideLabel}</span>
              <p class="site-aside-text">${site.asideText}</p>
            </aside>
          </div>
          <p class="site-note">${site.note}</p>
          <div class="site-actions">
            <a class="site-link" href="${site.url}" target="_blank" rel="noreferrer">Read the site</a>
          </div>
        </div>
      </article>
    `
  )
  .join("");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll(".site-card").forEach((card) => observer.observe(card));
