# McBopomofo website draft

這是一個不依賴建置工具的靜態首頁草稿，用來承接 Issue #916 的新版網站資訊架構。首頁內容以繁體中文撰寫，功能示範使用原生 JavaScript 切換，不需要安裝套件。

## 本地預覽

在 repository 根目錄執行：

```sh
python3 -m http.server 4173 --directory website
```

接著開啟 <http://127.0.0.1:4173/>。

## 檔案

- `index.html`：首頁內容與連結。
- `styles.css`：響應式版面、配色與互動示意元件。
- `script.js`：功能示範分頁與行動版導覽選單。
- `content-notes.md`：Substack 文章素材分析與版本維護筆記。
- `favicon.svg`：小麥注音專用 favicon。
