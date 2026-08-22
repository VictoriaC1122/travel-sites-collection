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
      title: "旅行手冊收藏｜Victoria's Travel Library",
      description: "Victoria 親手整理的旅行手冊收藏，收錄東京、首爾、澳洲、日本東北、美西、印尼與英國旅程，依出發日期翻閱每一段路。",
      socialDescription: "Victoria 親手整理的旅行手冊收藏。循著日期，翻開城市、雪國、海岸與長路。",
      locale: "zh_TW",
      status: "已切換為繁體中文",
      navLabel: "主要導覽",
      switcherLabel: "語言切換",
      homeLabel: "Victoria's Travel Library 首頁",
      openLabel: "打開手冊",
      newTabLabel: "另開分頁"
    },
    en: {
      title: "Victoria's Travel Library | Travel Handbook Shelf",
      description: "Victoria's travel handbook collection, with journeys through Tokyo, Seoul, Australia, Tohoku, the American West, Indonesia, and the UK.",
      socialDescription: "Victoria's own travel handbooks, arranged by departure date and gathered on one quiet shelf.",
      locale: "en_US",
      status: "Language changed to English",
      navLabel: "Primary navigation",
      switcherLabel: "Language switcher",
      homeLabel: "Victoria's Travel Library home",
      openLabel: "Open handbook",
      newTabLabel: "opens in a new tab"
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
        link.setAttribute("aria-label", `${metadata.openLabel}: ${title}, ${metadata.newTabLabel}`);
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
