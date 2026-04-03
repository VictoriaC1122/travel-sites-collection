const sites = [
  {
    title: "Victoria & Aiden 東京爆買之旅",
    subtitle: "Tokyo shopping travel book",
    url: "https://victoriac1122.github.io/victoria-aiden-tokyo-trip/",
    description:
      "以東京購物和精品逛街為核心的高完成度旅遊手冊，結合多語切換、每日行程、預算規劃與購物節奏，是一個很完整的東京爆買主題站。",
    note:
      "適合想快速掌握購物熱區、交通安排與預算節奏的人，也很有精品旅行手冊的氛圍。",
    tags: ["東京", "購物", "多語系", "預算規劃"]
  },
  {
    title: "Bali × Java Travel Handbook 2026",
    subtitle: "Indonesia island-to-volcano route",
    url: "https://victoriac1122.github.io/bali-java-travel-2026/",
    description:
      "從峇里島延伸到東爪哇與日惹的印尼旅行手冊，路線橫跨海島、火山、瀑布與文化古城，資訊完整而且節奏安排很成熟。",
    note:
      "這個網站最迷人的地方，是把放鬆度假、冒險景色與文化收尾串成一條很漂亮的旅行敘事線。",
    tags: ["印尼", "峇里島", "火山", "旅遊手冊"]
  },
  {
    title: "Victoria 全美西行",
    subtitle: "West Coast USA road trip archive",
    url: "https://victoriac1122.github.io/USA/",
    description:
      "以美西公路旅行為主軸，整理城市移動、費用明細、每日行程與旅程 checklist，內容非常適合長天數、跨城市的旅行規劃。",
    note:
      "整體更偏大型旅程管理型網站，特別適合收錄多段交通、住宿與花費拆解。",
    tags: ["美西", "公路旅行", "費用整理", "長天數"]
  },
  {
    title: "東京之旅 12/3–12/8",
    subtitle: "Tokyo winter trip journal",
    url: "https://victoriac1122.github.io/tokyohot/",
    description:
      "偏向冬日東京的精緻旅程紀錄，含每日安排、住宿、花費與購物占比，是一個很有生活感與消費分析感的東京行程站。",
    note:
      "如果說東京爆買之旅偏完整手冊，這一站則更像帶有個人節奏與回顧感的東京旅程筆記。",
    tags: ["東京", "冬季", "花費分析", "行程紀錄"]
  },
  {
    title: "Victoria 日本東北行",
    subtitle: "Sendai and Aomori travel story",
    url: "https://victoriac1122.github.io/sendai-aomori-travel/",
    description:
      "以仙台、青森、藏王等東北區域為主角，融合雪景、溫泉、纜車與自駕元素，整體風格安靜、清冷，也很有季節感。",
    note:
      "很適合作為日本東北冬季旅行靈感頁，從配色到內容安排都帶著乾淨、優雅的雪國氣質。",
    tags: ["日本東北", "雪景", "溫泉", "自駕"]
  }
];

const cards = document.getElementById("cards");

cards.innerHTML = sites
  .map(
    (site, index) => `
      <article class="site-card" style="animation-delay:${index * 90}ms">
        <div class="site-topline">
          <div>
            <div class="site-index">${String(index + 1).padStart(2, "0")}</div>
            <h3>${site.title}</h3>
            <p class="site-subtitle">${site.subtitle}</p>
          </div>
        </div>
        <p class="site-description">${site.description}</p>
        <div class="tag-row">
          ${site.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <p class="site-note">${site.note}</p>
        <footer>
          <a class="site-link" href="${site.url}" target="_blank" rel="noreferrer">前往網站</a>
        </footer>
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
  { threshold: 0.18 }
);

document.querySelectorAll(".site-card").forEach((card) => observer.observe(card));
