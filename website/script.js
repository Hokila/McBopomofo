const demos = {
  selection: {
    number: "01 / 04",
    title: "候選字不是猜謎，是一條可以調整的路。",
    copy: "小麥注音用語料與讀音資料建立選字模型，從輸入的注音找出更可能的字詞。候選字太長時，仍可在組字區中移動游標，逐段確認自己的選擇。",
    link: "閱讀選字引擎的技術說明",
    href: "https://mcbopomofo.substack.com/p/dag",
    window: `<div class="mini-toolbar"><span>智慧選字</span><span>候選字 3 / 8</span></div><div class="mini-input">ㄊㄞ ㄨㄢ ㄉㄜ ㄩˇ ㄧㄢˊ</div><div class="mini-result">臺灣的語言</div><div class="mini-candidates"><span class="selected">1 臺灣的語言</span><span>2 台灣的語言</span><span>3 臺灣的預言</span></div><div class="mini-hints"><span>Shift-Enter 聯想詞</span><span>J / K 移動</span></div>`
  },
  custom: {
    number: "02 / 04",
    title: "常用的詞，應該只需要選一次。",
    copy: "把人名、專有名詞或工作裡反覆出現的詞加入使用者詞彙。2.9.4 起，自訂詞可以包含空白；詞檔案有錯誤時，系統也會主動通知。",
    link: "查看自訂詞彙說明",
    href: "https://github.com/openvanilla/McBopomofo/wiki/使用手冊",
    window: `<div class="mini-toolbar"><span>使用者詞彙</span><span>已加入</span></div><div class="mini-input">ㄒㄧㄠˇ ㄇㄞˋ</div><div class="mini-result">小麥注音</div><div class="mini-candidates"><span class="selected">1 小麥注音</span><span>2 小麥助音</span><span>3 小麥主音</span></div><div class="mini-hints"><span>自訂詞條</span><span>含空白字元</span></div>`
  },
  annotation: {
    number: "03 / 04",
    title: "讓輸入時得到的讀音，直接進入文件。",
    copy: "開啟注音字型破音字標記模式後，小麥注音會把選字時取得的讀音轉成 Unicode 變體選擇符。搭配支援的注音字型，教材與出版文件可以直接呈現正確讀音。",
    link: "閱讀 3.0 發布文章",
    href: "https://mcbopomofo.substack.com/p/30",
    window: `<div class="mini-toolbar"><span>注音字型模式</span><span>已開啟</span></div><div class="mini-input">ㄔㄨㄥˊ ㄒㄧㄣ ㄒㄧㄝˇ</div><div class="mini-result">重新寫</div><div class="mini-candidates"><span class="selected">讀音標記已隨文字輸出</span><span>搭配注音芫荽、注音粉圓等字型</span></div><div class="mini-hints"><span>適合教材與出版</span><span>Unicode IVS</span></div>`
  },
  tools: {
    number: "04 / 04",
    title: "文字工作需要的工具，應該就在手邊。",
    copy: "從日期與中文數字，到線上詞典、HTML 旁注與台灣點字轉換，小麥注音把常用的文字處理放在同一個輸入流程中，少一點切換，也少一點複製貼上。",
    link: "查看 2.7 版功能摘要",
    href: "https://mcbopomofo.substack.com/p/27",
    window: `<div class="mini-toolbar"><span>文字工具</span><span>Ctrl-\\</span></div><div class="mini-input">ㄐㄧㄣ ㄊㄧㄢ</div><div class="mini-result">2026 年 9 月 18 日</div><div class="mini-candidates"><span class="selected">日期時間</span><span>中文數字</span><span>台灣點字</span></div><div class="mini-hints"><span>? 線上詞典</span><span>Ctrl-Enter 轉換</span></div>`
  }
};

const panel = document.querySelector("#demo-panel");
const tabs = document.querySelectorAll(".demo-tab");

function renderDemo(name) {
  const demo = demos[name];
  panel.style.opacity = "0";
  window.setTimeout(() => {
    panel.querySelector(".panel-number").textContent = demo.number;
    panel.querySelector("h3").textContent = demo.title;
    panel.querySelector("p").textContent = demo.copy;
    const link = panel.querySelector("a");
    link.textContent = `${demo.link} ↗`;
    link.href = demo.href;
    const windowElement = panel.querySelector(".demo-window");
    windowElement.className = `demo-window demo-window-${name}`;
    windowElement.innerHTML = demo.window;
    panel.style.opacity = "1";
  }, 130);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => {
      const isSelected = item === tab;
      item.classList.toggle("is-active", isSelected);
      item.setAttribute("aria-selected", String(isSelected));
    });
    renderDemo(tab.dataset.demo);
  });
});

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});
