(() => {
  const storageKey = "travel-library-language";
  const supportedLanguages = new Set(["zh", "en"]);
  const languageButtons = [...document.querySelectorAll("[data-language]")];
  const translatedElements = [...document.querySelectorAll("[data-zh][data-en]")];
  const languageStatus = document.getElementById("language-status");
  const descriptionMeta = document.querySelector('meta[name="description"]');
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  const ogDescriptionMeta = document.querySelector('meta[property="og:description"]');
  const ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
  const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
  const twitterDescriptionMeta = document.querySelector('meta[name="twitter:description"]');

  const pageMetadata = {
    zh: {
      title: "Victoria 的旅行手冊｜Victoria's Travel Library",
      description: "Victoria 替每趟旅行做的手冊網站，目前十本：東京、美國西南、日本東北、首爾、澳洲、峇里島與爪哇、AIB 2026 歐洲行、葡萄牙與西班牙、美東。照出發日期排。",
      socialDescription: "Victoria 替每趟旅行做的手冊網站，目前十本，照出發日期排。",
      locale: "zh_TW",
      status: "已切換為繁體中文",
      navLabel: "主要導覽",
      switcherLabel: "語言切換",
      homeLabel: "Victoria's Travel Library 首頁",
      linkLabel: (title) => `打開手冊：${title}（另開分頁）`
    },
    en: {
      title: "Victoria's Travel Handbooks",
      description: "The handbook sites Victoria makes for each trip. Ten so far: Tokyo, the US Southwest, Tohoku, Seoul, Australia, Bali and Java, Europe for AIB 2026, Portugal and Spain, and the US East Coast.",
      socialDescription: "The handbook sites Victoria makes for each trip. Ten so far, listed by departure date.",
      locale: "en_US",
      status: "Language changed to English",
      navLabel: "Primary navigation",
      switcherLabel: "Language switcher",
      homeLabel: "Victoria's Travel Library home",
      linkLabel: (title) => `Open handbook: ${title} (opens in a new tab)`
    }
  };

  function readStoredLanguage() {
    try {
      const storedLanguage = localStorage.getItem(storageKey);
      return supportedLanguages.has(storedLanguage) ? storedLanguage : "zh";
    } catch {
      return "zh";
    }
  }

  function storeLanguage(language) {
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // The language switch still works when storage is unavailable.
    }
  }

  function applyLanguage(language, announce = false) {
    const selectedLanguage = supportedLanguages.has(language) ? language : "zh";
    const metadata = pageMetadata[selectedLanguage];

    document.documentElement.lang = selectedLanguage === "zh" ? "zh-Hant" : "en";
    document.title = metadata.title;

    translatedElements.forEach((element) => {
      element.textContent = element.dataset[selectedLanguage];
      element.lang = selectedLanguage === "zh" ? "zh-Hant" : "en";
    });

    languageButtons.forEach((button) => {
      const isActive = button.dataset.language === selectedLanguage;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    document.querySelector(".topbar")?.setAttribute("aria-label", metadata.navLabel);
    document.querySelector(".lang-switcher")?.setAttribute("aria-label", metadata.switcherLabel);
    document.querySelector(".brand")?.setAttribute("aria-label", metadata.homeLabel);

    document.querySelectorAll(".site-card").forEach((card) => {
      const title = card.querySelector("h3")?.textContent.trim();
      const link = card.querySelector(".site-link");
      if (title && link) {
        link.setAttribute("aria-label", metadata.linkLabel(title));
      }
    });

    descriptionMeta?.setAttribute("content", metadata.description);
    ogTitleMeta?.setAttribute("content", metadata.title);
    ogDescriptionMeta?.setAttribute("content", metadata.socialDescription);
    ogLocaleMeta?.setAttribute("content", metadata.locale);
    twitterTitleMeta?.setAttribute("content", metadata.title);
    twitterDescriptionMeta?.setAttribute("content", metadata.socialDescription);

    if (announce && languageStatus) {
      languageStatus.textContent = metadata.status;
    }

    storeLanguage(selectedLanguage);
  }

  languageButtons.forEach((button) => {
    button.addEventListener("click", () => applyLanguage(button.dataset.language, true));
  });

  applyLanguage(readStoredLanguage());
})();
