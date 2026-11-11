# Victoria's Travel Library

Victoria 旅行手冊的索引頁，中英文可切換。
https://victoriac1122.github.io/travel-sites-collection/

## 目前列出的手冊

| 日期 | 手冊 | 網址 |
| --- | --- | --- |
| 2025.12.03–12.08 | 東京之旅 | https://victoriac1122.github.io/tokyohot/ |
| 2025.12.19–2026.01.07 | 全美西行 | https://victoriac1122.github.io/USA/ |
| 2026.01.21–01.28 | 日本東北行 | https://victoriac1122.github.io/sendai-aomori-travel/ |
| 2026.02.21–02.27 | 東京爆買之旅 | https://victoriac1122.github.io/victoria-aiden-tokyo-trip/ |
| 2026.05.15–05.20 | 首爾旅行 2026 | https://victoriac1122.github.io/seoul-travel-2026/ |
| 2026.05.23–05.30 | 澳洲：墨爾本到雪梨 | https://victoriac1122.github.io/australia-travel-2026/ |
| 2026.06.13–06.21 | 峇里島 × 爪哇 | https://victoriac1122.github.io/bali-java-travel-2026/ |
| 2026.06.29–07.12 | AIB 2026 曼徹斯特｜德英法之旅 | https://victoriac1122.github.io/uk-aib-2026-travel/ |
| 2026.11.02–11.09、11.24–12.02 | 葡萄牙・西班牙 2026 | https://victoriac1122.github.io/iberia-travel-2026/victoria.html?lang=zh-TW |

## 新增一本手冊

1. 在 `index.html` 的 `<ol class="collection-grid">` 裡複製一個 `<li class="collection-item">`，改掉標題、說明、標籤、日期和連結。中文寫在 `data-zh` 和標籤內文，英文寫在 `data-en`。
2. 同一個檔案上方的 JSON-LD 清單補一筆，`numberOfItems` 加一。
3. 首頁文案和 `script.js` 的 `pageMetadata` 裡寫了「九本」，數量變了要一起改。
4. `sitemap.xml` 的 `lastmod` 改成當天日期。

## 檔案

- `index.html`：頁面內容與 meta
- `styles.css`：樣式
- `script.js`：中英文切換，選擇會記在 localStorage
- `og-card.svg` / `og-card.png`：分享預覽圖。改了 SVG 要重新輸出成 1200×630 的 PNG
- `favicon.svg`、`robots.txt`、`sitemap.xml`

沒有建置步驟，推到 `main` 後 GitHub Pages 會直接發布。
