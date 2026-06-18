/* @ds-bundle: {"format":3,"namespace":"SuiDesignSystem_840c19","components":[{"name":"BookingForm","sourcePath":"components/booking/BookingForm.jsx"},{"name":"DateRangePicker","sourcePath":"components/booking/DateRangePicker.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Modal","sourcePath":"components/core/Modal.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"SkeletonCard","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Countdown","sourcePath":"components/hospitality/Countdown.jsx"},{"name":"DatePicker","sourcePath":"components/hospitality/DatePicker.jsx"},{"name":"LanguageSwitcher","sourcePath":"components/hospitality/LanguageSwitcher.jsx"},{"name":"ReservationForm","sourcePath":"components/hospitality/ReservationForm.jsx"},{"name":"StatusBadge","sourcePath":"components/hospitality/StatusBadge.jsx"},{"name":"Gallery","sourcePath":"components/media/Gallery.jsx"},{"name":"InstagramEmbed","sourcePath":"components/media/InstagramEmbed.jsx"},{"name":"MapEmbed","sourcePath":"components/media/MapEmbed.jsx"},{"name":"DropCard","sourcePath":"components/preorder/DropCard.jsx"},{"name":"PickupSlotPicker","sourcePath":"components/preorder/PickupSlotPicker.jsx"},{"name":"PreorderForm","sourcePath":"components/preorder/PreorderForm.jsx"},{"name":"TodayBoard","sourcePath":"components/preorder/TodayBoard.jsx"}],"sourceHashes":{"brands/atelier-ling/About.jsx":"db6cb85c4f1d","brands/atelier-ling/Contact.jsx":"fdb4e9348054","brands/atelier-ling/Header.jsx":"acb4d4610d6e","brands/atelier-ling/Home.jsx":"1592b0b4e4b8","brands/atelier-ling/Item.jsx":"16f957ebcc85","brands/atelier-ling/Preorder.jsx":"c5e872d8f237","brands/atelier-ling/SiteApp.jsx":"806edab9434a","brands/hoshi-onsen/OnsenHeader.jsx":"80803593acae","brands/hoshi-onsen/OnsenHome.jsx":"81ee9ea8c746","brands/kit/hearth-kit.jsx":"31b7f064bdba","components/booking/BookingForm.jsx":"84229f020fcc","components/booking/DateRangePicker.jsx":"12e59f4684e7","components/core/Badge.jsx":"d3dd74ef6822","components/core/Button.jsx":"13a6bb04388b","components/core/Card.jsx":"612fe53587f0","components/core/Modal.jsx":"b02042d46db3","components/core/Tag.jsx":"bb1fdaadd47a","components/feedback/EmptyState.jsx":"13b1b3d74c1d","components/feedback/Skeleton.jsx":"93e691ec31b6","components/forms/Input.jsx":"827099a0e72e","components/hospitality/Countdown.jsx":"6f30cf7133a3","components/hospitality/DatePicker.jsx":"076375fcd452","components/hospitality/LanguageSwitcher.jsx":"cfb9a99b9113","components/hospitality/ReservationForm.jsx":"6567c60dbb16","components/hospitality/StatusBadge.jsx":"87435d6e77b8","components/media/Gallery.jsx":"bba3a4f92bdd","components/media/InstagramEmbed.jsx":"9201ff8d75e2","components/media/MapEmbed.jsx":"ef27d9986e7e","components/preorder/DropCard.jsx":"0243a5969e12","components/preorder/PickupSlotPicker.jsx":"ad37dcc3c810","components/preorder/PreorderForm.jsx":"7206b93b12c3","components/preorder/TodayBoard.jsx":"e0a7ff71c2f7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SuiDesignSystem_840c19 = window.SuiDesignSystem_840c19 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// brands/atelier-ling/About.jsx
try { (() => {
/* Atelier Ling — 關於頁 (品牌故事).
   Copy is verbatim from the brand-story PDF (pp.2–3); only PDF-extraction
   radical-form glyphs were normalised to standard Han characters.
   Page-local components prefixed AB*. */

const AB_SEGMENTS = [{
  stage: "01 · 家中起點",
  photo: "這裡放 家中烘焙起點 照片",
  tone: "#2E2620",
  lines: ["一開始只是喜歡吃。", "喜歡那種剛出爐的溫度，剛好的甜，奶油融進麵團的香氣。", "後來開始想：如果是我做的呢？", "第一條土司出爐，她覺得不夠好。", "不是因為家人說，是她自己知道——還差一點點。", "就是那「一點點」，讓她沒辦法停下來。"]
}, {
  stage: "02 · 學習",
  photo: "這裡放 進修上課 照片",
  tone: "#332A20",
  lines: ["她去考了烘焙丙級。", "那不是終點，是起點。", "考完繼續上課，麵包、蛋糕、慕斯、糖工、法式甜點。", "每學一樣，就更清楚自己還不夠清楚什麼。", "一堂課接著一堂課，不是因為有人要求，是因為她停不了。", "朋友問：「你是要開店嗎？」", "她說：「我只是想做好。」"]
}, {
  stage: "03 · 求藝",
  photo: "這裡放 法國職人教室 照片",
  tone: "#2A2C2E",
  lines: ["然後她飛去了法國。", "不是旅遊。", "是帶著筆記本，去一間職人教室，從早做到晚，學一個可頌為什麼要折二十七層、奶油為什麼要計算到公克、為什麼在法國，一個塔的邊緣是否平整，會讓師傅皺眉。", "她在那裡學到的不只是配方——", "是對「夠不夠好」這件事的標準，又往上移了一格。"]
}, {
  stage: "04 · 現在",
  photo: "這裡放 深夜工作室 照片",
  tone: "#22262C",
  lines: ["回來之後，夜晚成了她的工作室時間。", "等家裡安靜下來，她才真正開始。", "趁著夜深人靜，揉麵、測溫、計時、出爐。", "這個時間沒有打擾，只有麵團的呼吸和烤箱的溫度。", "她說，這樣做出來的東西比較誠實。", "品項每天不一樣，因為她做的是當天想做、當天覺得好的。", "做完就沒了，不是行銷話術——她從來不留隔夜的給客人吃。", "小店面就在那裡，玻璃窗後面是今天夜裡的成果。", "來了就有，賣完就是完了，明天再來。", "這不是一個「熱愛烘焙的人開的甜點店」那種故事。", "這是一個對自己說「還差一點點」的人，", "一直往前走，走去法國，走回深夜的工作室，", "最後把那份執著揉進麵團裡，每天早上烤給你吃。"]
}];
function ABHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter) var(--space-7)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u95DC\u65BC \xB7 Our story"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-display)",
      lineHeight: 1.05,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--c-text)",
      margin: "var(--space-5) 0 0"
    }
  }, "\u5979\u53EA\u662F", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--c-accent)"
    }
  }, "\u60F3\u505A\u597D")));
}
function ABSegment({
  seg,
  flip
}) {
  const Text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--c-accent)",
      marginBottom: "var(--space-5)"
    }
  }, seg.stage), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, seg.lines.map((ln, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontSize: "clamp(1.15rem, 0.95rem + 0.7vw, 1.5rem)",
      lineHeight: 1.75,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--c-text)",
      margin: 0,
      textWrap: "pretty"
    }
  }, ln))));
  const Photo = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Plate, {
    tone: seg.tone,
    ratio: "4 / 5",
    label: seg.photo,
    style: {
      width: "100%"
    }
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "clamp(2rem, 6vw, 6rem)",
      alignItems: "stretch"
    }
  }, flip ? /*#__PURE__*/React.createElement(React.Fragment, null, Photo, Text) : /*#__PURE__*/React.createElement(React.Fragment, null, Text, Photo)));
}
function ABEnding() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-primary)",
      color: "var(--c-on-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 900,
      margin: "0 auto",
      padding: "var(--space-10) var(--gutter)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: "clamp(1.6rem, 1.1rem + 2.2vw, 2.6rem)",
      lineHeight: 1.6,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--c-on-primary)",
      margin: 0,
      textWrap: "balance"
    }
  }, "\u4F60\u5403\u5230\u7684\uFF0C\u662F\u5979\u89BA\u5F97\u7D42\u65BC\u5920\u597D\u7684\u90A3\u4E00\u4EFD\u3002")));
}
function AboutPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "about"
  }), /*#__PURE__*/React.createElement(ABHero, null), AB_SEGMENTS.map((seg, i) => /*#__PURE__*/React.createElement(ABSegment, {
    key: seg.stage,
    seg: seg,
    flip: i % 2 === 1
  })), /*#__PURE__*/React.createElement(ABEnding, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.ALPAGES = window.ALPAGES || {};
window.ALPAGES.about = AboutPage;
if (!window.AL_SPA) ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(AboutPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/atelier-ling/About.jsx", error: String((e && e.message) || e) }); }

// brands/atelier-ling/Contact.jsx
try { (() => {
/* Atelier Ling — 聯絡頁. Minimal, IG-first.
   Per brand-story PDF p.5 #05. Page-local components prefixed CT*. */

function CTContact() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-display)",
      lineHeight: 1.0,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--c-text)",
      margin: "0 0 var(--space-3)"
    }
  }, "\u806F\u7D61"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontStyle: "italic",
      fontSize: "clamp(1.3rem, 1rem + 1.4vw, 1.9rem)",
      lineHeight: 1.5,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--c-text-muted)",
      margin: "0 0 var(--space-8)",
      maxWidth: 560
    }
  }, "\u6709\u8CA8\u5C31\u958B\uFF0C\u505A\u5B8C\u5C31\u95DC\uFF0C\u6700\u65B0\u72C0\u614B\u770B IG\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr 1fr",
      gap: "var(--space-7)",
      alignItems: "stretch"
    }
  }, /*#__PURE__*/React.createElement(MapEmbed, {
    address: "[\u5730\u5740\u5F85\u88DC]",
    addressEn: "Datong District, Taipei",
    note: "\u73BB\u7483\u7A97\u5F8C\u9762\u662F\u4ECA\u5929\u591C\u88E1\u7684\u6210\u679C\u3002",
    mapsUrl: "#",
    height: 420
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://instagram.com/",
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      textDecoration: "none",
      background: "var(--c-primary)",
      color: "var(--c-on-primary)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)",
      flex: 1,
      justifyContent: "center",
      minHeight: 220
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--c-secondary)"
    }
  }, "\u4E3B\u8981\u901A\u8DEF \xB7 Main channel"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h1)",
      letterSpacing: "var(--tracking-heading)",
      lineHeight: 1.05
    }
  }, "\u8FFD\u8E64 IG", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--c-secondary)"
    }
  }, "@atelier.ling")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "color-mix(in oklab, var(--c-on-primary) 72%, transparent)"
    }
  }, "\u4ECA\u65E5\u73FE\u8CA8\u3001\u958B\u8CE3\u516C\u544A\u8207\u5BA2\u88FD\u9810\u8A02\uFF0C\u90FD\u5728\u9650\u52D5\u66F4\u65B0 \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--c-accent)",
      marginBottom: "var(--space-2)"
    }
  }, "Email"), /*#__PURE__*/React.createElement("a", {
    href: "mailto:hello@atelier-ling.com",
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)",
      textDecoration: "none",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "hello@atelier-ling.com"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginTop: "var(--space-2)"
    }
  }, "\u5BA2\u88FD\u9810\u8A02\u4E5F\u53EF\u4F86\u4FE1\uFF0C\u56DE\u8986\u8F03\u6162\uFF0C\u6025\u4EF6\u8ACB\u79C1\u8A0A IG\u3002")))));
}
function ContactPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "contact"
  }), /*#__PURE__*/React.createElement(CTContact, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.ALPAGES = window.ALPAGES || {};
window.ALPAGES.contact = ContactPage;
if (!window.AL_SPA) ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ContactPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/atelier-ling/Contact.jsx", error: String((e && e.message) || e) }); }

// brands/atelier-ling/Header.jsx
try { (() => {
/* Atelier Ling — shared site shell (nav + footer + photo helpers).
   Used by every Atelier Ling page so navigation & footer stay consistent.
   Exposed on window for the per-page scripts. */

/* Documentary photo plate (placeholder — swap for real photography).
   Picks up the theme --photo-bg + --photo-filter automatically. */
function Plate({
  label,
  tone,
  ratio = "4 / 3",
  style = {}
}) {
  const bg = tone || "var(--photo-bg)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      filter: "var(--photo-filter)",
      background: "radial-gradient(120% 90% at 72% 14%, rgba(255,255,255,.10), transparent 55%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.92' numOctaves='2'/%3E%3C/filter%3E%3Crect width='90' height='90' filter='url(%23n)' opacity='.55'/%3E%3C/svg%3E\")",
      opacity: 0.10,
      mixBlendMode: "overlay"
    }
  }), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      color: "rgba(246,240,227,.82)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 1,
      background: "currentColor",
      opacity: .6
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontSize: 17
    }
  }, label)) : null);
}
function Eyebrow({
  children,
  onDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--c-secondary)" : "var(--c-accent)"
    }
  }, children);
}

/* Site navigation, shared across pages. `current` highlights the active item. */
const AL_NAV = [["home", "首頁", "index.html"], ["preorder", "下次出爐", "preorder.html"], ["item", "品項", "item.html"], ["about", "關於", "about.html"], ["contact", "聯絡", "contact.html"]];
function Header({
  current = "home"
}) {
  const [lang, setLang] = React.useState("zh");
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: "var(--z-header)",
      background: "color-mix(in oklab, var(--c-bg) 88%, transparent)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 23,
      letterSpacing: ".02em",
      color: "var(--c-text)"
    }
  }, "Atelier\xA0Ling"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10.5,
      letterSpacing: ".26em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)",
      marginTop: 3
    }
  }, "\u51CC\u6668\u88FD\u4F5C\u6240")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 22,
      marginLeft: 20
    }
  }, AL_NAV.map(([id, t, href]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: href,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      fontWeight: current === id ? 600 : 500,
      color: current === id ? "var(--c-text)" : "var(--c-text-muted)",
      textDecoration: "none",
      whiteSpace: "nowrap",
      borderBottom: current === id ? "1.5px solid var(--c-accent)" : "1.5px solid transparent",
      paddingBottom: 2
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LanguageSwitcher, {
    value: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: () => {
      if (window.AL_SPA) {
        window.location.hash = "preorder";
      } else {
        window.location.href = "preorder.html";
      }
    }
  }, lang === "zh" ? "預訂麵包" : "Pre-order"))));
}

/* Shared footer, used on every page. */
function SiteFooter() {
  const cols = [["品項", [["本檔麵包", "preorder.html"], ["品項細節", "item.html"], ["禮盒", "#"], ["大量訂購", "contact.html"]]], ["關於", [["品牌故事", "about.html"], ["聯絡我們", "contact.html"]]], ["關注", [["Instagram 看公告", "contact.html"], ["LINE 開賣提醒", "#"]]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--c-surface-2)",
      borderTop: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 24,
      color: "var(--c-text)"
    }
  }, "Atelier Ling"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10.5,
      letterSpacing: ".26em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)",
      marginTop: 4
    }
  }, "\u51CC\u6668\u88FD\u4F5C\u6240"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--c-text-muted)",
      maxWidth: 280,
      marginTop: 16
    }
  }, "\u6DF1\u591C\u958B\u5DE5\u7684\u6CD5\u5F0F\u624B\u4F5C\u70D8\u7119\u3002\u53EA\u505A\u5916\u5E36\u8207\u9810\u8A02\uFF0C\u552E\u5B8C\u5373\u6B62\u3002\u53F0\u5317\u5E02\u5927\u540C\u5340\u8D64\u5CF0\u8857 7 \u5DF7\u3002")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--c-accent)",
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(([t, href]) => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: href,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--c-text-muted)",
      textDecoration: "none"
    }
  }, t)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--c-border)",
      marginTop: "var(--space-6)",
      paddingTop: "var(--space-4)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--c-text-subtle)"
    }
  }, "\xA9 2026 Atelier Ling \xB7 \u7531 Hearth Studio \u8A2D\u8A08"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--c-text-subtle)"
    }
  }, "\u6709\u8CA8\u5C31\u958B\uFF0C\u505A\u5B8C\u5C31\u95DC\uFF0C\u6700\u65B0\u72C0\u614B\u770B IG"))));
}
Object.assign(window, {
  Plate,
  Eyebrow,
  Header,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/atelier-ling/Header.jsx", error: String((e && e.message) || e) }); }

// brands/atelier-ling/Home.jsx
try { (() => {
/* Atelier Ling — homepage body.
   Pre-order & Pickup model (no dine-in, no fixed menu — runs on 檔期 drops).
   NOTE: Hero is intentionally unchanged. */

function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter) var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "\u6BCF\u65E5 06:00 \u51FA\u7210 \xB7 Baked at dawn"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "calc(var(--text-display) * var(--font-heading-scale))",
      lineHeight: 1.0,
      letterSpacing: "var(--tracking-tight)",
      color: "var(--c-text)",
      margin: "var(--space-4) 0 0"
    }
  }, "\u8D81\u57CE\u5E02\u9084\u5728", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--c-accent)"
    }
  }, "\u6C89\u7761"), "\u6642\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u6211\u5011\u5DF2\u958B\u59CB\u63C9\u9EB5\u3002"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: 1.6,
      color: "var(--c-text-muted)",
      maxWidth: 440,
      margin: "var(--space-5) 0 0"
    }
  }, "\u4E00\u9593\u6DF1\u591C\u958B\u5DE5\u7684\u6CD5\u5F0F\u624B\u4F5C\u70D8\u7119\u6240\u3002\u9577\u6642\u9593\u4F4E\u6EAB\u767C\u9175\uFF0C\u5929\u672A\u4EAE\u5C31\u51FA\u7210\u2014\u2014\u53EA\u70BA\u8D95\u4E0A\u4F60\u7684\u7B2C\u4E00\u676F\u5496\u5561\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\u9810\u8A02\u660E\u65E9\u9EB5\u5305"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg"
  }, "\u67E5\u770B\u54C1\u9805"))), /*#__PURE__*/React.createElement(Plate, {
    label: "Midnight bench, flour & steam",
    tone: "#222B38",
    ratio: "4 / 5"
  })));
}

/* 檔期公告 — the heart of the Pre-order & Pickup model:
   下次出爐 (DropCard) beside 今日現場供應 (TodayBoard). */
function Announce() {
  const cutoff = React.useMemo(() => {
    const d = new Date();
    d.setHours(22, 0, 0, 0);
    if (d.getTime() < Date.now()) d.setDate(d.getDate() + 1);
    return d.getTime();
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u6A94\u671F\u516C\u544A \xB7 This week's bench"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h2)",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 0"
    }
  }, "\u6C92\u6709\u56FA\u5B9A\u83DC\u55AE\uFF0C", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--c-accent)"
    }
  }, "\u6BCF\u6A94"), "\u90FD\u4E0D\u4E00\u6A23"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)",
      maxWidth: 520,
      margin: "var(--space-3) 0 0"
    }
  }, "\u6211\u5011\u4E0D\u5B9A\u671F\u516C\u544A\u4E0B\u4E00\u6A94\u8981\u505A\u4EC0\u9EBC\u3002\u770B\u5230\u559C\u6B61\u7684\u5C31\u7DDA\u4E0A\u9810\u8A02\uFF0C\u6216\u5929\u4EAE\u5F8C\u5230\u5E97\u73FE\u5834\u8CFC\u8CB7\u2014\u2014\u552E\u5B8C\u5373\u6B62\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(DropCard, {
    dropDate: "6 / 21\uFF08\u516D\uFF09",
    status: "accepting",
    items: [{
      name: "深夜可頌",
      note: "27 層奶油"
    }, {
      name: "裸麥酸種",
      note: "天然酵母"
    }, {
      name: "焦糖肉桂卷",
      note: "現烤淋醬"
    }, {
      name: "鹽可頌",
      note: "限量 40 個"
    }],
    cutoff: cutoff,
    openText: "6/18 20:00 \u958B\u653E\u9810\u8A02"
  }), /*#__PURE__*/React.createElement(TodayBoard, {
    asOf: "11:20 \u66F4\u65B0",
    items: [{
      name: "深夜可頌",
      note: "奶油充足",
      price: "NT$95",
      state: "whilestockslast"
    }, {
      name: "裸麥酸種",
      note: "整條 / 半條",
      price: "NT$180",
      state: "available"
    }, {
      name: "鄉村法棍",
      price: "NT$120",
      state: "limited"
    }, {
      name: "焦糖肉桂卷",
      price: "NT$110",
      state: "soldout"
    }]
  })));
}

/* 線上預訂 — the full Pre-order & Pickup flow (replaces the old reservation). */
function Preorder() {
  const [toast, setToast] = React.useState(null);
  const full = React.useMemo(() => {
    const d = new Date();
    d.setDate(d.getDate() + 4);
    return [d.toISOString().slice(0, 10)];
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-primary)",
      color: "var(--c-on-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--c-secondary)"
    }
  }, "\u7DDA\u4E0A\u9810\u8A02 \xB7 Pre-order & pickup"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontStyle: "italic",
      fontSize: "var(--text-h1)",
      color: "var(--c-on-primary)",
      margin: "var(--space-3) 0 var(--space-3)"
    }
  }, "\u9078\u597D\u54C1\u9805\uFF0C\u7559\u7210\u7D66\u4F60"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "color-mix(in oklab, var(--c-on-primary) 72%, transparent)",
      margin: 0
    }
  }, "\u9078\u64C7\u6A94\u671F\u8207\u54C1\u9805\uFF0C\u6311\u81EA\u53D6\u3001\u5B85\u914D\u6216\u5916\u9001\u5E73\u53F0\u3002\u81EA\u53D6\u8ACB\u9078\u65E5\u671F\u8207\u6642\u6BB5\u2014\u2014\u505A\u5B8C\u5C31\u95DC\uFF0C\u552E\u5B8C\u5373\u6B62\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      color: "var(--c-text)",
      border: "1px solid var(--c-border)",
      padding: "var(--pad-card)"
    }
  }, /*#__PURE__*/React.createElement(PreorderForm, {
    fullDates: full,
    pickupSlots: [{
      range: "07:00–09:00",
      state: "almostfull"
    }, {
      range: "09:00–11:00",
      state: "available"
    }, {
      range: "12:00–14:00",
      state: "available"
    }, {
      range: "17:00–19:00",
      state: "full"
    }],
    onSubmit: o => {
      setToast(`預訂已收到 · ${o.count} 件 · NT$${o.total}（製作中）`);
      setTimeout(() => setToast(null), 4200);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: toast ? 28 : -80,
      transform: "translateX(-50%)",
      transition: "bottom var(--dur-3) var(--ease-out)",
      zIndex: "var(--z-toast)",
      background: "var(--c-text)",
      color: "var(--c-bg)",
      padding: "12px 22px",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--c-success)"
    }
  }), toast || ""));
}
function Footer() {
  const cols = [["品項", ["本檔麵包", "節慶限定", "禮盒", "大量訂購"]], ["取貨", ["門市自取 · 赤峰街 7 巷", "冷藏宅配 · 隔日到", "外送平台 · Uber / panda"]], ["關注", ["Instagram 看公告", "LINE 開賣提醒"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--c-surface-2)",
      borderTop: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: 24,
      color: "var(--c-text)"
    }
  }, "Atelier Ling"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10.5,
      letterSpacing: ".26em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)",
      marginTop: 4
    }
  }, "\u51CC\u6668\u88FD\u4F5C\u6240"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--c-text-muted)",
      maxWidth: 280,
      marginTop: 16
    }
  }, "\u6DF1\u591C\u958B\u5DE5\u7684\u6CD5\u5F0F\u624B\u4F5C\u70D8\u7119\u3002\u53EA\u505A\u5916\u5E36\u8207\u9810\u8A02\uFF0C\u552E\u5B8C\u5373\u6B62\u3002\u53F0\u5317\u5E02\u5927\u540C\u5340\u8D64\u5CF0\u8857 7 \u5DF7\u3002")), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: ".16em",
      textTransform: "uppercase",
      color: "var(--c-accent)",
      marginBottom: 14
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--c-text-muted)",
      textDecoration: "none"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--c-border)",
      marginTop: "var(--space-6)",
      paddingTop: "var(--space-4)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--c-text-subtle)"
    }
  }, "\xA9 2026 Atelier Ling \xB7 \u7531 Hearth Studio \u8A2D\u8A08"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--c-text-subtle)"
    }
  }, "Mode: Pre-order & Pickup \xB7 theme atelier-ling"))));
}
function Home() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "home"
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Announce, null), /*#__PURE__*/React.createElement(Preorder, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.ALPAGES = window.ALPAGES || {};
window.ALPAGES.home = Home;
if (!window.AL_SPA) ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(Home, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/atelier-ling/Home.jsx", error: String((e && e.message) || e) }); }

// brands/atelier-ling/Item.jsx
try { (() => {
/* Atelier Ling — 品項細節頁 (templated single-item page).
   Swap ITEM data for any product. Page-local components prefixed IT*. */

const IT_ITEM = {
  name: "深夜可頌",
  en: "Midnight Croissant",
  price: 95,
  bake: "06:00 出爐",
  limit: "本檔限量 60 份",
  status: "accepting",
  // accepting | closed
  desc: "以法國 T65 麵粉與發酵奶油，經 72 小時低溫冷藏發酵，手工摺疊 27 層。深夜入爐，天未亮出爐——外殼薄脆，內裡濕潤帶蜂巢氣孔，奶油香氣飽滿而不膩。",
  specs: [["麵粉", "法國 T65"], ["奶油", "發酵奶油 · 27 層"], ["發酵", "72 小時低溫冷藏"], ["保存", "當日享用最佳 · 冷凍可 7 天"]],
  allergens: [["麩", "含麩質", true], ["奶", "含奶", true], ["蛋", "含蛋", true], ["堅", "含堅果", false]],
  gallery: [{
    label: "可頌剖面"
  }, {
    label: "27 層摺疊"
  }, {
    label: "出爐瞬間"
  }, {
    label: "工作檯"
  }]
};
const IT_RELATED = [{
  name: "鹽可頌",
  en: "Salt butter roll",
  price: 70,
  tone: "#2E2A22"
}, {
  name: "裸麥酸種",
  en: "Rye sourdough",
  price: 180,
  tone: "#2C2620"
}, {
  name: "焦糖肉桂卷",
  en: "Cinnamon roll",
  price: 110,
  tone: "#33241A"
}];
function ITBreadcrumb() {
  const sep = /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-text-subtle)"
    }
  }, "/");
  const link = {
    fontFamily: "var(--font-body)",
    fontSize: "var(--text-sm)",
    color: "var(--c-text-muted)",
    textDecoration: "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-5) var(--gutter) 0",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html",
    style: link
  }, "\u9996\u9801"), sep, /*#__PURE__*/React.createElement("a", {
    href: "preorder.html",
    style: link
  }, "\u4E0B\u6B21\u51FA\u7210"), sep, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text)"
    }
  }, IT_ITEM.name));
}
function ITAllergen({
  mark,
  label,
  has
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      opacity: has ? 1 : 0.4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-heading)",
      fontSize: 13,
      fontWeight: 600,
      color: has ? "var(--c-on-accent)" : "var(--c-text-subtle)",
      background: has ? "var(--c-accent)" : "transparent",
      border: has ? "1px solid var(--c-accent)" : "1px dashed var(--c-border-strong)"
    }
  }, mark), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)",
      textDecoration: has ? "none" : "line-through"
    }
  }, label));
}
function ITDetail() {
  const open = IT_ITEM.status === "accepting";
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-6) var(--gutter) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr 0.95fr",
      gap: "var(--space-8)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Gallery, {
    ratio: "4 / 3",
    images: IT_ITEM.gallery.map(g => ({
      label: g.label,
      node: /*#__PURE__*/React.createElement(Plate, {
        tone: "#322318",
        ratio: "4 / 3",
        label: g.label
      })
    }))
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "\u672C\u6A94\u54C1\u9805 \xB7 6/15"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h1)",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 var(--space-1)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, IT_ITEM.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      letterSpacing: ".12em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)"
    }
  }, IT_ITEM.en), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-5) 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: "var(--text-h2)",
      color: "var(--c-accent)",
      lineHeight: 1
    }
  }, "NT$", IT_ITEM.price), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)",
      marginTop: "var(--space-2)"
    }
  }, IT_ITEM.bake, " \xB7 ", IT_ITEM.limit)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--leading-relaxed)",
      color: "var(--c-text-muted)",
      margin: 0
    }
  }, IT_ITEM.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: 10
    }
  }, "\u904E\u654F\u539F\u6A19\u793A"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--space-4)"
    }
  }, IT_ITEM.allergens.map(([m, l, has]) => /*#__PURE__*/React.createElement(ITAllergen, {
    key: l,
    mark: m,
    label: l,
    has: has
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, open ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => {
      if (window.AL_SPA) {
        window.location.hash = "preorder";
      } else {
        window.location.href = "preorder.html";
      }
    }
  }, "\u52A0\u5165\u9810\u8A02"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)"
    }
  }, /*#__PURE__*/React.createElement(StatusBadge, {
    status: "accepting"
  }), " \u622A\u6B62 6/14 22:00")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    disabled: true
  }, "\u672C\u6A94\u5DF2\u622A\u6B62"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "closed"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      borderTop: "1px solid var(--c-border)",
      paddingTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u88FD\u4F5C\u7B46\u8A18 \xB7 How it's made"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-5)",
      marginTop: "var(--space-5)"
    }
  }, IT_ITEM.specs.map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)",
      marginBottom: 6
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, v))))));
}
function ITRelated() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-surface)",
      borderTop: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u4E00\u8D77\u51FA\u7210 \xB7 You may also like"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h3)",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 var(--space-6)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "\u76F8\u95DC\u54C1\u9805"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)"
    }
  }, IT_RELATED.map(r => /*#__PURE__*/React.createElement("a", {
    key: r.name,
    href: "item.html",
    style: {
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    cover: /*#__PURE__*/React.createElement(Plate, {
      tone: r.tone,
      ratio: "16 / 11"
    }),
    interactive: true,
    title: r.name,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontWeight: 600,
        fontSize: "var(--text-h4)",
        color: "var(--c-accent)"
      }
    }, "NT$", r.price), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--c-accent)"
      }
    }, "\u67E5\u770B \u2192"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)"
    }
  }, r.en)))))));
}
function ItemPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "item"
  }), /*#__PURE__*/React.createElement(ITBreadcrumb, null), /*#__PURE__*/React.createElement(ITDetail, null), /*#__PURE__*/React.createElement(ITRelated, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.ALPAGES = window.ALPAGES || {};
window.ALPAGES.item = ItemPage;
if (!window.AL_SPA) ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(ItemPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/atelier-ling/Item.jsx", error: String((e && e.message) || e) }); }

// brands/atelier-ling/Preorder.jsx
try { (() => {
/* Atelier Ling — 下次出爐 / 預訂頁 (Pre-order & Pickup main page).
   Page-local components prefixed PO* to stay out of the shared namespace. */

const PO_DROP_CUTOFF = (() => {
  const d = new Date();
  d.setHours(22, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  return d.getTime();
})();
const PO_ITEMS = [{
  id: "croissant",
  name: "深夜可頌",
  en: "Croissant",
  price: 95,
  desc: "72 小時冷藏發酵，27 層奶油，外殼酥脆。",
  left: 18,
  tone: "#3A2A1C"
}, {
  id: "rye",
  name: "裸麥酸種",
  en: "Rye sourdough",
  price: 180,
  desc: "天然酵母，深烤外殼，微酸回甘。",
  left: 9,
  tone: "#2C2620"
}, {
  id: "cinnamon",
  name: "焦糖肉桂卷",
  en: "Cinnamon roll",
  price: 110,
  desc: "現烤淋焦糖醬，肉桂香氣飽滿。",
  left: 4,
  tone: "#33241A"
}, {
  id: "saltbun",
  name: "鹽可頌",
  en: "Salt butter roll",
  price: 70,
  desc: "海鹽與發酵奶油，外脆內軟。",
  left: 25,
  tone: "#2E2A22"
}, {
  id: "baguette",
  name: "鄉村法棍",
  en: "Campagne",
  price: 120,
  desc: "T65 麵粉，長棍裂口，麥香純粹。",
  left: 0,
  tone: "#322A20"
}, {
  id: "tart",
  name: "李子杏仁塔",
  en: "Plum tart",
  price: 220,
  desc: "糖煮李子與杏仁奶油，季節限定。",
  left: 6,
  tone: "#3A2630"
}];
function POHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-primary)",
      color: "var(--c-on-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)",
      display: "grid",
      gridTemplateColumns: "1fr auto",
      gap: "var(--space-7)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    onDark: true
  }, "\u4E0B\u6B21\u51FA\u7210 \xB7 Next drop"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h1)",
      lineHeight: 1.12,
      letterSpacing: "var(--tracking-heading)",
      color: "var(--c-on-primary)",
      margin: "var(--space-4) 0 var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", null, "6 / 15\uFF08\u516D\uFF09"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontStyle: "italic",
      color: "var(--c-secondary)"
    }
  }, "06:00 \u51FA\u7210")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "color-mix(in oklab, var(--c-on-primary) 72%, transparent)",
      margin: 0,
      maxWidth: 440
    }
  }, "\u672C\u6A94\u516D\u6B3E\uFF0C\u552E\u5B8C\u5373\u6B62\u3002\u7DDA\u4E0A\u9810\u8A02\u4FDD\u7559\u81F3\u53D6\u8CA8\uFF0C\u6216\u5929\u4EAE\u5F8C\u5230\u5E97\u73FE\u5834\u8CFC\u8CB7\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "color-mix(in oklab, var(--c-on-primary) 70%, transparent)",
      marginBottom: 12,
      whiteSpace: "nowrap"
    }
  }, "\u8DDD\u96E2\u9810\u8A02\u622A\u6B62\u9084\u6709"), /*#__PURE__*/React.createElement("div", {
    style: {
      filter: "invert(1) hue-rotate(180deg)",
      opacity: 0.96,
      display: "inline-block"
    }
  }, /*#__PURE__*/React.createElement(Countdown, {
    to: PO_DROP_CUTOFF
  })))));
}
function POItems() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u672C\u6A94\u54C1\u9805 \xB7 On the bench"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h2)",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 0",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "\u9810\u8A08\u51FA\u7210")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)"
    }
  }, PO_ITEMS.map(it => {
    const out = it.left === 0;
    const low = it.left > 0 && it.left <= 5;
    return /*#__PURE__*/React.createElement("a", {
      key: it.id,
      href: "item.html",
      style: {
        textDecoration: "none"
      }
    }, /*#__PURE__*/React.createElement(Card, {
      cover: /*#__PURE__*/React.createElement(Plate, {
        tone: it.tone,
        ratio: "16 / 11"
      }),
      interactive: true,
      title: it.name,
      footer: /*#__PURE__*/React.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-heading)",
          fontStyle: "italic",
          fontWeight: 600,
          fontSize: "var(--text-h4)",
          color: "var(--c-accent)"
        }
      }, "NT$", it.price), out ? /*#__PURE__*/React.createElement(StatusBadge, {
        status: "soldout"
      }) : low ? /*#__PURE__*/React.createElement(StatusBadge, {
        status: "limited",
        label: `剩 ${it.left} 份`
      }) : /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          color: "var(--c-text-subtle)"
        }
      }, "\u53EF\u9810\u8A02 ", it.left, " \u4EFD"))
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-xs)",
        letterSpacing: ".1em",
        textTransform: "uppercase",
        color: "var(--c-text-subtle)",
        marginBottom: 4
      }
    }, it.en), it.desc));
  })));
}
function POForm() {
  const [toast, setToast] = React.useState(null);
  const orderItems = PO_ITEMS.filter(i => i.left > 0).map(i => ({
    id: i.id,
    name: i.name,
    price: i.price,
    note: i.en
  }));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-surface)",
      borderTop: "1px solid var(--c-border)",
      borderBottom: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u7DDA\u4E0A\u9810\u8A02 \xB7 Pre-order"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h1)",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 var(--space-3)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "\u9078\u597D\u54C1\u9805\uFF0C", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: "italic",
      color: "var(--c-accent)"
    }
  }, "\u7559\u7210"), "\u7D66\u4F60"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)",
      margin: 0
    }
  }, "\u9078\u54C1\u9805\u8207\u6578\u91CF\uFF0C\u6311\u81EA\u53D6\u6216\u5B85\u914D\uFF08\u9650\u53F0\u7063\u672C\u5CF6\uFF09\u3002\u81EA\u53D6\u8ACB\u9078\u65E5\u671F\u8207\u6642\u6BB5\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-bg)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)"
    }
  }, /*#__PURE__*/React.createElement(PreorderForm, {
    items: orderItems,
    drops: [{
      id: "0615",
      label: "本檔 · 6/15",
      sub: "6/15（六）06:00 出爐"
    }],
    pickupMethods: [{
      id: "self",
      label: "門市自取",
      note: "赤峰街 7 巷"
    }, {
      id: "delivery",
      label: "宅配",
      note: "限台灣本島，冷藏隔日到"
    }],
    pickupSlots: [{
      range: "07:00–09:00",
      state: "almostfull"
    }, {
      range: "09:00–11:00",
      state: "available"
    }, {
      range: "12:00–14:00",
      state: "available"
    }, {
      range: "17:00–19:00",
      state: "full"
    }],
    onSubmit: o => {
      setToast(`預訂已收到 · ${o.count} 件 · NT$${o.total}（製作中）`);
      setTimeout(() => setToast(null), 4200);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: toast ? 28 : -80,
      transform: "translateX(-50%)",
      transition: "bottom var(--dur-3) var(--ease-out)",
      zIndex: "var(--z-toast)",
      background: "var(--c-primary)",
      color: "var(--c-on-primary)",
      padding: "12px 22px",
      borderRadius: "var(--radius-control)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--c-success)"
    }
  }), toast || ""));
}
function PONotes() {
  const notes = [["取貨與退款", "未取貨視同放棄，恕不退款。請於所選時段內取貨。"], ["客製需求", "蛋糕、禮盒與大量客製品另洽，請至聯絡頁來訊。"], ["售完即止", "每檔限量製作，售完不補。預訂截止後不再追加。"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u9810\u8A02\u9808\u77E5 \xB7 Before you order"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-5)"
    }
  }, notes.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      borderTop: "2px solid var(--c-accent)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 300,
      fontSize: "var(--text-h3)",
      color: "color-mix(in oklab, var(--c-text) 30%, transparent)"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h4)",
      color: "var(--c-text)",
      margin: "var(--space-2) 0 var(--space-2)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)",
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, d)))));
}

/* 訂單查詢 — enter order id; demo: AL + 4 digits found, else empty. Shows skeleton while "loading". */
function POLookup() {
  const [id, setId] = React.useState("");
  const [state, setState] = React.useState("idle"); // idle | loading | found | empty
  const [result, setResult] = React.useState(null);
  const query = e => {
    e.preventDefault();
    if (!id.trim()) return;
    setState("loading");
    setResult(null);
    setTimeout(() => {
      const ok = /^AL\d{4}$/i.test(id.trim());
      if (ok) {
        setResult({
          id: id.trim().toUpperCase(),
          status: "making",
          items: "深夜可頌 ×2、裸麥酸種 ×1",
          pickup: "6/15 09:00–11:00 · 門市自取"
        });
        setState("found");
      } else setState("empty");
    }, 900);
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-surface-2)",
      borderTop: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "\u8A02\u55AE\u67E5\u8A62 \xB7 Order status"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 600,
      fontSize: "var(--text-h2)",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 var(--space-2)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, "\u67E5\u8A62\u4F60\u7684\u9810\u8A02"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)",
      margin: 0
    }
  }, "\u8F38\u5165\u8A02\u55AE\u7DE8\u865F\uFF08\u4F8B\u5982 AL2261\uFF09\u67E5\u770B\u88FD\u4F5C\u8207\u53D6\u8CA8\u72C0\u614B\u3002")), /*#__PURE__*/React.createElement("form", {
    onSubmit: query,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-end",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u8A02\u55AE\u7DE8\u865F \xB7 Order ID",
    placeholder: "AL2261",
    value: id,
    onChange: e => setId(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary"
  }, "\u67E5\u8A62")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-5)"
    }
  }, state === "loading" ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "0.8rem"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "line",
    width: "40%",
    height: 16
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "line",
    lines: 2
  })) : state === "found" ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "0.6rem"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)"
    }
  }, "\u8A02\u55AE ", result.id), /*#__PURE__*/React.createElement(StatusBadge, {
    status: "making"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)"
    }
  }, result.items), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, "\u53D6\u8CA8\uFF1A", result.pickup)) : state === "empty" ? /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)"
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    glyph: "?",
    title: "\u67E5\u7121\u6B64\u8A02\u55AE",
    message: "\u8ACB\u78BA\u8A8D\u8A02\u55AE\u7DE8\u865F\u662F\u5426\u6B63\u78BA\uFF0C\u6216\u81F3\u806F\u7D61\u9801\u4F86\u8A0A\u8A62\u554F\u3002"
  })) : null)));
}
function PreorderPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    current: "preorder"
  }), /*#__PURE__*/React.createElement(POHero, null), /*#__PURE__*/React.createElement(POItems, null), /*#__PURE__*/React.createElement(POForm, null), /*#__PURE__*/React.createElement(PONotes, null), /*#__PURE__*/React.createElement(POLookup, null), /*#__PURE__*/React.createElement(SiteFooter, null));
}
window.ALPAGES = window.ALPAGES || {};
window.ALPAGES.preorder = PreorderPage;
if (!window.AL_SPA) ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(PreorderPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/atelier-ling/Preorder.jsx", error: String((e && e.message) || e) }); }

// brands/atelier-ling/SiteApp.jsx
try { (() => {
/* Atelier Ling — single-page-app router for the shareable / mobile build.
   Loads after all page scripts (which expose components on window.ALPAGES when
   window.AL_SPA is set). Hash routing: #home #preorder #item #about #contact.
   A global click interceptor rewrites the existing <a href="*.html"> links and
   keeps every in-page link working without touching the page components. */

(function () {
  const FILE_TO_KEY = {
    "index.html": "home",
    "preorder.html": "preorder",
    "item.html": "item",
    "about.html": "about",
    "contact.html": "contact"
  };
  function keyFromHash() {
    const h = (window.location.hash || "").replace(/^#\/?/, "");
    return window.ALPAGES[h] ? h : "home";
  }

  // Intercept clicks on links that point at the multi-page files → route in-app.
  document.addEventListener("click", function (e) {
    const a = e.target.closest && e.target.closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (FILE_TO_KEY[href]) {
      e.preventDefault();
      const key = FILE_TO_KEY[href];
      if (keyFromHash() === key) {
        window.scrollTo(0, 0);
      } else {
        window.location.hash = key;
      }
    }
  });
  function Router() {
    const [key, setKey] = React.useState(keyFromHash());
    React.useEffect(function () {
      const onHash = function () {
        setKey(keyFromHash());
        window.scrollTo(0, 0);
      };
      window.addEventListener("hashchange", onHash);
      return function () {
        window.removeEventListener("hashchange", onHash);
      };
    }, []);
    const Comp = window.ALPAGES[key] || window.ALPAGES.home;
    return React.createElement(Comp);
  }
  ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Router));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/atelier-ling/SiteApp.jsx", error: String((e && e.message) || e) }); }

// brands/hoshi-onsen/OnsenHeader.jsx
try { (() => {
/* Hoshi Onsen — shared parts. Exposed on window for the page script. */

/* Cool, misty placeholder plate. Adopts theme --photo-bg + --photo-filter. */
function OnsenPlate({
  label,
  tone,
  ratio = "4 / 3",
  style = {}
}) {
  const bg = tone || "var(--photo-bg)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      filter: "var(--photo-filter)",
      background: "linear-gradient(180deg, rgba(255,255,255,.16), transparent 40%, rgba(40,52,48,.14))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='90'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='90' height='90' filter='url(%23n)' opacity='.4'/%3E%3C/svg%3E\")",
      opacity: 0.08,
      mixBlendMode: "overlay"
    }
  }), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      color: "rgba(245,246,244,.9)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 1,
      background: "currentColor",
      opacity: .55
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: 16,
      letterSpacing: ".12em"
    }
  }, label)) : null);
}
function OnsenEyebrow({
  children,
  onDark
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-medium)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: onDark ? "var(--c-secondary)" : "var(--c-accent)"
    }
  }, children);
}
function OnsenHeader() {
  const [lang, setLang] = React.useState("zh");
  const nav = lang === "zh" ? ["客房", "溫泉", "料理", "周邊", "交通"] : ["Rooms", "Onsen", "Dining", "Around", "Access"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: "var(--z-header)",
      background: "color-mix(in oklab, var(--c-bg) 84%, transparent)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 var(--gutter)",
      height: 78,
      display: "flex",
      alignItems: "center",
      gap: 30
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 30
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.15
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 500,
      fontSize: 20,
      letterSpacing: ".06em",
      color: "var(--c-text)"
    }
  }, "\u661F\u4E4B\u6EAB\u6CC9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 9.5,
      letterSpacing: ".3em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)",
      marginTop: 2
    }
  }, "Hoshi Onsen"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26,
      marginLeft: 18
    }
  }, nav.map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: ".04em",
      color: "var(--c-text-muted)",
      textDecoration: "none",
      whiteSpace: "nowrap"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(LanguageSwitcher, {
    value: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, lang === "zh" ? "預約訂房" : "Reserve"))));
}

/* A quiet circular seal — concentric rings + a dot (a moon over the mountains). */
function Seal({
  size = 30,
  color = "var(--c-accent)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 40 40",
    "aria-hidden": "true",
    style: {
      display: "block"
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "20",
    r: "18.5",
    fill: "none",
    stroke: color,
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "20",
    cy: "16",
    r: "6",
    fill: "none",
    stroke: color,
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 27 L15 19 L22 24 L30 16 L34 20",
    fill: "none",
    stroke: color,
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    opacity: "0.85"
  }));
}
Object.assign(window, {
  OnsenPlate,
  OnsenEyebrow,
  OnsenHeader,
  Seal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/hoshi-onsen/OnsenHeader.jsx", error: String((e && e.message) || e) }); }

// brands/hoshi-onsen/OnsenHome.jsx
try { (() => {
/* Hoshi Onsen 星之溫泉 — homepage body.
   Mode B · Booking (訂房). Same Core components, opposite skin. */

function OnsenHero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 620,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(OnsenPlate, {
    ratio: "auto",
    tone: "#9AA6A0",
    style: {
      position: "absolute",
      inset: 0,
      aspectRatio: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(40,52,48,.22) 0%, rgba(40,52,48,.05) 32%, rgba(40,52,48,.45) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "var(--space-5)",
      opacity: 0.95
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 52,
    color: "#F5F6F4"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "rgba(245,246,244,.82)"
    }
  }, "\u5C71\u6797 \xB7 \u6EAB\u6CC9 \xB7 \u975C\u8B10 \xA0 Mountain ryokan"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontSize: "calc(var(--text-display) * .92)",
      lineHeight: 1.18,
      letterSpacing: "0.06em",
      color: "#F5F6F4",
      margin: "var(--space-4) 0 0",
      maxWidth: 900,
      textWrap: "balance"
    }
  }, "\u5728\u5C71\u88E1\uFF0C\u628A\u6642\u9593", /*#__PURE__*/React.createElement("br", null), "\u9084\u7D66\u81EA\u5DF1"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-lead)",
      lineHeight: 1.8,
      letterSpacing: "0.02em",
      color: "rgba(245,246,244,.86)",
      margin: "var(--space-5) 0 0",
      maxWidth: 460
    }
  }, "\u96B1\u65BC\u5C71\u6797\u7684 12 \u9593\u5BA2\u623F\u3002\u6668\u9727\u3001\u6A9C\u6728\u6E6F\u5C4B\u3001\u8207\u7576\u4EE4\u5C71\u7522\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "\u67E5\u770B\u7A7A\u623F \xB7 Check availability")))));
}
function Intro() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(OnsenEyebrow, null, "About \xB7 \u7DE3\u8D77"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontStyle: "normal",
      fontSize: "var(--text-h2)",
      lineHeight: 1.6,
      letterSpacing: "0.05em",
      color: "var(--c-text)",
      margin: "var(--space-4) 0 0",
      textWrap: "balance"
    }
  }, "\u6211\u5011\u76F8\u4FE1\uFF0C\u6700\u597D\u7684\u6B3E\u5F85\u662F\u7559\u767D\u3002", /*#__PURE__*/React.createElement("br", null), "\u5341\u4E8C\u9593\u5BA2\u623F\uFF0C\u4F9D\u5C71\u800C\u7BC9\uFF0C \u5404\u81EA\u671B\u5411\u4E0D\u540C\u7684\u5B63\u7BC0\u3002"));
}
function Rooms() {
  const rooms = [{
    name: "山霧 · 標準和室",
    en: "Standard",
    size: "1 床 · 28㎡ · 望山",
    price: 8800,
    status: "bookable",
    tone: "#A7B0A8"
  }, {
    name: "苔泉 · 半露天風呂房",
    en: "Onsen suite",
    size: "1 床 · 42㎡ · 私人風呂",
    price: 14800,
    status: "limited",
    tone: "#8E9A8C"
  }, {
    name: "月見 · 閣樓套房",
    en: "Tsukimi suite",
    size: "1 床 + 茶室 · 58㎡",
    price: 22000,
    status: "soldout",
    tone: "#9BA39C"
  }, {
    name: "檜の間 · 離れ獨棟",
    en: "Private villa",
    size: "2 床 · 76㎡ · 獨立庭園",
    price: 32000,
    status: "comingsoon",
    tone: "#7E8A7C"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-7) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(OnsenEyebrow, null, "Rooms \xB7 \u5BA2\u623F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontSize: "var(--text-h1)",
      letterSpacing: "0.05em",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 0"
    }
  }, "\u56DB\u7A2E\u68F2\u8EAB\u4E4B\u6240")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "var(--space-6)"
    }
  }, rooms.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    cover: /*#__PURE__*/React.createElement(OnsenPlate, {
      tone: r.tone,
      ratio: "16 / 10"
    }),
    interactive: true,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--c-text-muted)"
      }
    }, "\u4E00\u6CCA\u4E8C\u98DF / \u6BCF\u665A ", /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h4)",
        color: "var(--c-accent)",
        letterSpacing: ".02em"
      }
    }, "NT$", r.price.toLocaleString())), /*#__PURE__*/React.createElement(StatusBadge, {
      status: r.status === "limited" ? "limited" : r.status,
      label: r.status === "bookable" ? "可訂房 Available" : r.status === "limited" ? "僅剩一間 1 left" : r.status === "soldout" ? "售完 Sold out" : "即將開放 Coming soon"
    }))
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 500,
      fontSize: "1.35rem",
      lineHeight: 1.35,
      letterSpacing: ".04em",
      color: "var(--c-text)",
      margin: 0,
      textWrap: "balance"
    }
  }, r.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "var(--c-text-subtle)",
      letterSpacing: ".14em",
      textTransform: "uppercase",
      marginTop: 6
    }
  }, r.en), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-3) 0 0",
      color: "var(--c-text-muted)"
    }
  }, r.size)))));
}
function BookingSection() {
  const [toast, setToast] = React.useState(null);
  const full = React.useMemo(() => {
    const out = [];
    const base = new Date();
    [3, 4, 10].forEach(n => {
      const d = new Date(base);
      d.setDate(d.getDate() + n);
      out.push(d.toISOString().slice(0, 10));
    });
    return out;
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-surface)",
      borderTop: "1px solid var(--c-border)",
      borderBottom: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      maxWidth: 560,
      margin: "0 auto var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(OnsenEyebrow, null, "Booking \xB7 \u8A02\u623F"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontSize: "var(--text-h1)",
      letterSpacing: "0.05em",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 var(--space-3)"
    }
  }, "\u9078\u4E00\u6BB5\uFF0C\u7559\u7D66\u5C71"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)",
      letterSpacing: ".02em",
      margin: 0
    }
  }, "\u9078\u64C7\u5165\u4F4F\u8207\u9000\u623F\u65E5\u671F\u3001\u623F\u578B\u8207\u4EBA\u6578\u3002\u516B\u4EBA\u4EE5\u4E0A\u6216\u5305\u68DF\uFF0C\u8ACB\u6D3D\u8A02\u623F\u5BA2\u670D\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-bg)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)",
      maxWidth: 980,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(BookingForm, {
    fullDates: full,
    rooms: [{
      id: "std",
      name: "山霧 · 標準和室",
      note: "1 床 · 28㎡ · 望山",
      price: 8800,
      status: "bookable"
    }, {
      id: "onsen",
      name: "苔泉 · 半露天風呂房",
      note: "1 床 · 42㎡ · 私人風呂",
      price: 14800,
      status: "bookable"
    }, {
      id: "suite",
      name: "月見 · 閣樓套房",
      note: "1 床 + 茶室 · 58㎡",
      price: 22000,
      status: "soldout"
    }],
    maxGuests: 4,
    onSubmit: b => {
      setToast(`已確認 · ${b.room.name} · ${b.nights} 晚 · NT$${b.total.toLocaleString()}`);
      setTimeout(() => setToast(null), 4200);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      left: "50%",
      bottom: toast ? 28 : -80,
      transform: "translateX(-50%)",
      transition: "bottom var(--dur-3) var(--ease-out)",
      zIndex: "var(--z-toast)",
      background: "var(--c-primary)",
      color: "var(--c-on-primary)",
      padding: "12px 22px",
      borderRadius: "var(--radius-control)",
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: "var(--c-success)"
    }
  }), toast || ""));
}
function Experiences() {
  const items = [{
    eyebrow: "Onsen · 溫泉",
    title: "檜木湯屋",
    note: "引山泉入檜木湯池，晨昏各有不同的霧氣與光。",
    tone: "#8E9A8C"
  }, {
    eyebrow: "Dining · 料理",
    title: "季節山產",
    note: "依當令採集，山菜、溪魚與在地米，一日一獻立。",
    tone: "#A7B0A8"
  }, {
    eyebrow: "Around · 周邊",
    title: "森林散策",
    note: "步道、苔庭與觀星台，把山的時間走進身體裡。",
    tone: "#7E8A7C"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(OnsenEyebrow, null, "The stay \xB7 \u5728\u5730\u9AD4\u9A57"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontSize: "var(--text-h1)",
      letterSpacing: "0.05em",
      color: "var(--c-text)",
      margin: "var(--space-3) 0 0"
    }
  }, "\u5C71\u4E2D\u7684\u4E00\u65E5")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6)"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.title
  }, /*#__PURE__*/React.createElement(OnsenPlate, {
    tone: it.tone,
    ratio: "3 / 4"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(OnsenEyebrow, null, it.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 500,
      fontSize: "var(--text-h3)",
      letterSpacing: ".05em",
      color: "var(--c-text)",
      margin: "var(--space-2) 0 var(--space-2)"
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "var(--c-text-muted)",
      lineHeight: 1.8
    }
  }, it.note))))));
}
function ServicePromise() {
  const points = [["一期一會", "每位客人僅此一次的相遇，我們以全心相待。"], ["留白即款待", "不打擾的服務，讓山林與靜默成為主角。"], ["在地為本", "食材、湯泉與器物，皆取自這座山。"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--c-primary)",
      color: "var(--c-on-primary)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-9) var(--gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: 400,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--c-secondary)"
    }
  }, "Omotenashi \xB7 \u670D\u52D9\u627F\u8AFE")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-7)"
    }
  }, points.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 300,
      fontSize: "var(--text-h2)",
      color: "color-mix(in oklab, var(--c-on-primary) 40%, transparent)",
      letterSpacing: ".1em"
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 400,
      fontSize: "var(--text-h3)",
      letterSpacing: ".1em",
      color: "var(--c-on-primary)",
      margin: "var(--space-3) 0 var(--space-3)"
    }
  }, t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: "color-mix(in oklab, var(--c-on-primary) 70%, transparent)",
      lineHeight: 1.85,
      letterSpacing: ".02em"
    }
  }, d))))));
}
function OnsenFooter() {
  const cols = [["客房", ["山霧和室", "苔泉風呂房", "月見套房", "檜の間離れ"]], ["體驗", ["檜木湯屋", "季節料理", "森林散策", "觀星台"]], ["聯絡", ["訂房客服 · 03-2580 0000", "info@hoshionsen.jp", "南投縣仁愛鄉 · 山中"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--c-surface-2)",
      borderTop: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "var(--space-8) var(--gutter) var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr 1fr 1.2fr",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Seal, {
    size: 32
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: 500,
      fontSize: 22,
      letterSpacing: ".06em",
      color: "var(--c-text)"
    }
  }, "\u661F\u4E4B\u6EAB\u6CC9"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 9.5,
      letterSpacing: ".3em",
      textTransform: "uppercase",
      color: "var(--c-text-subtle)"
    }
  }, "Hoshi Onsen"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.8,
      letterSpacing: ".02em",
      color: "var(--c-text-muted)",
      maxWidth: 280,
      marginTop: 18
    }
  }, "\u96B1\u65BC\u5C71\u6797\u7684 12 \u9593\u5BA2\u623F\u3002\u4E00\u6CCA\u4E8C\u98DF\uFF0C\u975C\u8B10\u8207\u6EAB\u6CC9\u7684\u6B3E\u5F85\u3002"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-4)",
      display: "flex",
      gap: 16
    }
  }, ["Instagram", "LINE", "Facebook"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      letterSpacing: ".04em",
      color: "var(--c-accent)",
      textDecoration: "none"
    }
  }, s)))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: ".2em",
      textTransform: "uppercase",
      color: "var(--c-accent)",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      letterSpacing: ".02em",
      color: "var(--c-text-muted)",
      textDecoration: "none"
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--c-border)",
      marginTop: "var(--space-7)",
      paddingTop: "var(--space-4)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      letterSpacing: ".03em",
      color: "var(--c-text-subtle)"
    }
  }, "\xA9 2026 Hoshi Onsen \u661F\u4E4B\u6EAB\u6CC9 \xB7 \u7531 Hearth Studio \u8A2D\u8A08"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      letterSpacing: ".03em",
      color: "var(--c-text-subtle)"
    }
  }, "Mode: Booking \xB7 theme hoshi-onsen \xB7 radius 4 \xB7 loose"))));
}
function OnsenHome() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OnsenHeader, null), /*#__PURE__*/React.createElement(OnsenHero, null), /*#__PURE__*/React.createElement(Intro, null), /*#__PURE__*/React.createElement(Rooms, null), /*#__PURE__*/React.createElement(BookingSection, null), /*#__PURE__*/React.createElement(Experiences, null), /*#__PURE__*/React.createElement(ServicePromise, null), /*#__PURE__*/React.createElement(OnsenFooter, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(OnsenHome, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/hoshi-onsen/OnsenHome.jsx", error: String((e && e.message) || e) }); }

// brands/kit/hearth-kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* AUTO-MIRROR of canonical components/ for standalone pages. Do not hand-edit. */

// ===== components/core/Button.jsx =====
/**
 * Hearth Studio — Button (Core)
 * Theme-driven action. Reads only semantic tokens, so it re-skins with
 * the active [data-theme]. Padding/height follow the active density.
 */
function Button({
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = "button",
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // size tweaks ride on top of density-driven control height
  const sizePad = {
    sm: "0 0.95rem",
    md: "0 var(--pad-control-x)",
    lg: "0 calc(var(--pad-control-x) + 0.5rem)"
  };
  const sizeH = {
    sm: "calc(var(--control-h) - 8px)",
    md: "var(--control-h)",
    lg: "calc(var(--control-h) + 8px)"
  };
  const sizeFont = {
    sm: "var(--text-sm)",
    md: "0.95rem",
    lg: "var(--text-lead)"
  };
  const palettes = {
    primary: {
      bg: "var(--c-primary)",
      bgH: "var(--c-primary-hover)",
      fg: "var(--c-on-primary)",
      bd: "transparent"
    },
    accent: {
      bg: "var(--c-accent)",
      bgH: "var(--c-accent-hover)",
      fg: "var(--c-on-accent)",
      bd: "transparent"
    },
    outline: {
      bg: hover ? "var(--c-surface-2)" : "transparent",
      bgH: "var(--c-surface-2)",
      fg: "var(--c-text)",
      bd: "var(--c-border-strong)"
    },
    ghost: {
      bg: hover ? "var(--c-surface-2)" : "transparent",
      bgH: "var(--c-surface-2)",
      fg: "var(--c-accent)",
      bd: "transparent"
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: full ? "flex" : "inline-flex",
      width: full ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.55rem",
      height: sizeH[size],
      padding: sizePad[size],
      fontFamily: "var(--font-body)",
      fontSize: sizeFont[size],
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.01em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      color: p.fg,
      background: active && !disabled ? p.bgH : p.bg,
      border: `1px solid ${p.bd}`,
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      transform: active && !disabled ? "translateY(0.5px)" : "none",
      transition: "background var(--dur-1) var(--ease-out), transform var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out)",
      userSelect: "none",
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}

// ===== components/core/Badge.jsx =====
/**
 * Hearth Studio — Badge (Core)
 * Compact label/pill. Soft (tinted) or solid. Reads only semantic tokens,
 * so its corners follow the theme radius (round in house, square in Atelier Ling).
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ["var(--c-surface-2)", "var(--c-text-muted)"],
      solid: ["var(--c-text)", "var(--c-bg)"]
    },
    accent: {
      soft: ["var(--c-warning-bg)", "var(--c-accent)"],
      solid: ["var(--c-accent)", "var(--c-on-accent)"]
    },
    success: {
      soft: ["var(--c-success-bg)", "var(--c-success)"],
      solid: ["var(--c-success)", "#fff"]
    },
    warning: {
      soft: ["var(--c-warning-bg)", "var(--c-warning)"],
      solid: ["var(--c-warning)", "#fff"]
    },
    danger: {
      soft: ["var(--c-danger-bg)", "var(--c-danger)"],
      solid: ["var(--c-danger)", "#fff"]
    },
    info: {
      soft: ["var(--c-info-bg)", "var(--c-info)"],
      solid: ["var(--c-info)", "#fff"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[solid ? "solid" : "soft"];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.2rem 0.6rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1.5,
      letterSpacing: "0.02em",
      color: fg,
      background: bg,
      borderRadius: "var(--radius-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor"
    }
  }) : null, children);
}

// ===== components/core/Tag.jsx =====
/**
 * Hearth Studio — Tag (Core)
 * Outlined, selectable filter chip. Fills with the theme accent/primary when
 * selected. Corners follow the theme radius.
 */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      padding: "0.32rem 0.8rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.4,
      color: selected ? "var(--c-on-primary)" : "var(--c-text-muted)",
      background: selected ? "var(--c-primary)" : hover && interactive ? "var(--c-surface-2)" : "transparent",
      border: `1px solid ${selected ? "var(--c-primary)" : "var(--c-border-strong)"}`,
      borderRadius: "var(--radius-control)",
      cursor: interactive ? "pointer" : "default",
      transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)",
      userSelect: "none",
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      marginRight: -2,
      opacity: 0.7,
      cursor: "pointer",
      fontSize: "1rem",
      lineHeight: 1
    },
    "aria-label": "Remove"
  }, "\xD7") : null);
}

// ===== components/core/Card.jsx =====
/**
 * Hearth Studio — Card (Core)
 * Editorial content card: optional cover (image URL or node), eyebrow, serif
 * title, meta, body, footer. House keeps it near-flat; lifts subtly when
 * interactive. Corners + padding follow theme + density.
 */
function Card({
  image = null,
  cover = null,
  imageAlt = "",
  imageRatio = "4 / 3",
  eyebrow = null,
  title = null,
  meta = null,
  footer = null,
  interactive = false,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      cursor: interactive ? "pointer" : "default",
      boxShadow: lift ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: lift ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out)",
      ...style
    }
  }, rest), cover ? /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, cover) : image ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: imageRatio,
      overflow: "hidden",
      background: "var(--photo-bg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "var(--photo-filter)",
      transform: lift ? "scale(1.035)" : "scale(1)",
      transition: "transform var(--dur-3) var(--ease-out)"
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      flex: 1
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--c-accent)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h3)",
      lineHeight: 1.14,
      letterSpacing: 0,
      color: "var(--c-text)",
      margin: 0
    }
  }, title) : null, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, meta) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      lineHeight: "var(--leading-normal)",
      color: "var(--c-text-muted)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "0.75rem"
    }
  }, footer) : null));
}

// ===== components/core/Modal.jsx =====
/**
 * Hearth Studio — Modal (Core)
 * Centered dialog with a scrim. Theme-driven surface, corners and motion.
 * Closes on scrim click and Esc. Renders nothing when closed.
 */
function Modal({
  open = false,
  onClose,
  title = null,
  footer = null,
  width = 460,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-modal)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-5)",
      background: "color-mix(in oklab, var(--c-text) 46%, transparent)",
      backdropFilter: "blur(2px)",
      animation: "hearth-fade var(--dur-2) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      animation: "hearth-rise var(--dur-2) var(--ease-out)"
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      padding: "var(--space-5) var(--pad-card) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h3)",
      margin: 0,
      color: "var(--c-text)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "1.5rem",
      lineHeight: 1,
      color: "var(--c-text-subtle)"
    }
  }, "\xD7")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--pad-card)",
      color: "var(--c-text-muted)",
      fontFamily: "var(--font-body)",
      lineHeight: "var(--leading-normal)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.6rem",
      justifyContent: "flex-end",
      padding: "0 var(--pad-card) var(--pad-card)"
    }
  }, footer) : null), /*#__PURE__*/React.createElement("style", null, `
        @keyframes hearth-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes hearth-rise { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
      `));
}

// ===== components/forms/Input.jsx =====
/**
 * Hearth Studio — Input (Core)
 * Labelled text field with hint / error. Theme focus ring; density-driven height.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  type = "text",
  prefix = null,
  full = true,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId ? React.useId() : "in";
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: full ? "100%" : "auto",
      fontFamily: "var(--font-body)"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: "0.4rem",
      letterSpacing: "0.01em"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      height: "var(--control-h)",
      padding: "0 0.9rem",
      background: "var(--c-surface)",
      border: `1px solid ${error ? "var(--c-danger)" : focus ? "var(--c-ring)" : "var(--c-border-strong)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus && !error ? "0 0 0 3px color-mix(in oklab, var(--c-ring) 22%, transparent)" : "none",
      transition: "border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out)"
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-text-subtle)",
      display: "inline-flex",
      fontSize: "0.95rem"
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      color: "var(--c-text)",
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-danger)",
      marginTop: "0.4rem"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginTop: "0.4rem"
    }
  }, hint) : null);
}

// ===== components/hospitality/StatusBadge.jsx =====
/**
 * Hearth Studio — StatusBadge (Hospitality)
 * Availability / lifecycle state across all three interaction modes:
 * Reservation (訂位), Booking (訂房), Pre-order & Pickup (預訂取貨).
 * Bilingual labels baked in; pass `label` to override.
 */
const STATUS = {
  // ── Generic / Reservation (訂位) ──
  available: {
    tone: "success",
    dot: true,
    label: "可預約 Available"
  },
  limited: {
    tone: "warning",
    dot: true,
    label: "僅剩少量 Limited"
  },
  soldout: {
    tone: "danger",
    dot: false,
    label: "售完 Sold out"
  },
  full: {
    tone: "danger",
    dot: false,
    label: "額滿 Fully booked"
  },
  comingsoon: {
    tone: "info",
    dot: false,
    label: "即將開放 Coming soon"
  },
  confirmed: {
    tone: "success",
    dot: true,
    label: "已確認 Confirmed"
  },
  cancelled: {
    tone: "danger",
    dot: false,
    label: "已取消 Cancelled"
  },
  // ── Booking (訂房) ──
  bookable: {
    tone: "success",
    dot: true,
    label: "可訂房 Available"
  },
  checkedin: {
    tone: "info",
    dot: true,
    label: "已入住 Checked in"
  },
  // ── Pre-order & Pickup (預訂取貨) ──
  accepting: {
    tone: "success",
    dot: true,
    label: "接受預訂中 Accepting orders"
  },
  almostfull: {
    tone: "warning",
    dot: true,
    label: "名額將滿 Almost full"
  },
  closed: {
    tone: "neutral",
    dot: false,
    label: "預訂截止 Orders closed"
  },
  making: {
    tone: "info",
    dot: true,
    label: "製作中 In the oven"
  },
  ready: {
    tone: "success",
    dot: false,
    label: "可取貨 Ready for pickup"
  },
  done: {
    tone: "neutral",
    dot: false,
    label: "已完成 Completed"
  },
  whilestockslast: {
    tone: "warning",
    dot: false,
    label: "售完即止 While stocks last"
  }
};
function StatusBadge({
  status = "available",
  label,
  solid,
  style = {},
  ...rest
}) {
  const s = STATUS[status] || STATUS.available;
  const tones = {
    neutral: ["var(--c-surface-2)", "var(--c-text-muted)", "var(--c-text-muted)"],
    success: ["var(--c-success-bg)", "var(--c-success)", "var(--c-success)"],
    warning: ["var(--c-warning-bg)", "var(--c-warning)", "var(--c-warning)"],
    danger: ["var(--c-danger-bg)", "var(--c-danger)", "var(--c-danger)"],
    info: ["var(--c-info-bg)", "var(--c-info)", "var(--c-info)"]
  };
  const [bg, fg, solidBg] = tones[s.tone];
  const useSolid = solid ?? (status === "soldout" || status === "full");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.25rem 0.65rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.04em",
      lineHeight: 1.5,
      color: useSolid ? "#fff" : fg,
      background: useSolid ? solidBg : bg,
      borderRadius: "var(--radius-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), s.dot && !useSolid ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor"
    }
  }) : null, label ?? s.label);
}

// ===== components/hospitality/LanguageSwitcher.jsx =====
/**
 * Hearth Studio — LanguageSwitcher (Hospitality)
 * Compact segmented control for site language. Controlled or uncontrolled.
 */
function LanguageSwitcher({
  langs = [["zh", "中"], ["en", "EN"]],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? langs[0][0]);
  const current = value ?? internal;
  const pick = code => {
    if (value === undefined) setInternal(code);
    if (onChange) onChange(code);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Language",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      padding: 2,
      border: "1px solid var(--c-border-strong)",
      borderRadius: "var(--radius-control)",
      background: "var(--c-surface)",
      ...style
    }
  }, langs.map(([code, label]) => {
    const on = current === code;
    return /*#__PURE__*/React.createElement("button", {
      key: code,
      onClick: () => pick(code),
      "aria-pressed": on,
      style: {
        border: "none",
        cursor: "pointer",
        padding: "0.28rem 0.7rem",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--fw-semibold)",
        color: on ? "var(--c-on-primary)" : "var(--c-text-muted)",
        background: on ? "var(--c-primary)" : "transparent",
        borderRadius: "calc(var(--radius-control) - 1px)",
        transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out)"
      }
    }, label);
  }));
}

// ===== components/hospitality/Countdown.jsx =====
/**
 * Hearth Studio — Countdown (Hospitality)
 * Counts down to a target time — limited bakes, event reservations.
 * Shows D/H/M/S blocks; calls onComplete once when it reaches zero.
 */
function Countdown({
  to,
  labels = ["天", "時", "分", "秒"],
  onComplete,
  compact = false,
  style = {}
}) {
  const target = React.useMemo(() => new Date(to).getTime(), [to]);
  const calc = React.useCallback(() => Math.max(0, target - Date.now()), [target]);
  const [ms, setMs] = React.useState(calc);
  const fired = React.useRef(false);
  React.useEffect(() => {
    const id = setInterval(() => {
      const next = calc();
      setMs(next);
      if (next === 0 && !fired.current) {
        fired.current = true;
        onComplete && onComplete();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [calc, onComplete]);
  const s = Math.floor(ms / 1000);
  const parts = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60];
  const pad = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "flex-end",
      gap: compact ? "0.5rem" : "0.9rem",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, parts.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: compact ? 28 : 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: compact ? "var(--text-h4)" : "var(--text-h2)",
      lineHeight: 1,
      color: "var(--c-text)",
      fontVariantNumeric: "tabular-nums"
    }
  }, pad(n)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "0.3rem",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.12em",
      color: "var(--c-text-subtle)"
    }
  }, labels[i])), i < parts.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: compact ? "var(--text-h4)" : "var(--text-h3)",
      color: "var(--c-border-strong)",
      paddingBottom: compact ? 14 : 22
    }
  }, ":") : null)));
}

// ===== components/hospitality/DatePicker.jsx =====
/**
 * Hearth Studio — DatePicker (Hospitality)
 * Single-month calendar for booking dates. Disables past days and any in
 * `disabledDates`/`fullDates`. Theme-driven; square cells in artisanal themes.
 */
const WEEK_ZH = ["一", "二", "三", "四", "五", "六", "日"];
function DatePicker({
  value,
  onChange,
  month,
  // Date controlling the visible month
  onMonthChange,
  minDate = new Date(),
  fullDates = [],
  // ISO yyyy-mm-dd strings marked 額滿
  disabledDates = [],
  style = {}
}) {
  const [viewInternal, setViewInternal] = React.useState(() => startOfMonth(month || value || new Date()));
  const view = month ? startOfMonth(month) : viewInternal;
  const setView = d => {
    if (onMonthChange) onMonthChange(d);
    if (!month) setViewInternal(d);
  };
  const iso = d => d.toISOString().slice(0, 10);
  const min = stripTime(minDate);
  const selISO = value ? iso(stripTime(new Date(value))) : null;
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const startPad = (first.getDay() + 6) % 7; // Monday-first
  const daysIn = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  const monthLabel = `${view.getFullYear()} 年 ${view.getMonth() + 1} 月`;
  const navBtn = {
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    width: 32,
    height: 32,
    cursor: "pointer",
    color: "var(--c-text)",
    borderRadius: "var(--radius-control)",
    fontSize: "1rem",
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      width: 300,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous month",
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)",
      whiteSpace: "nowrap"
    }
  }, monthLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next month",
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 4,
      marginBottom: 4
    }
  }, WEEK_ZH.map(w => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      textAlign: "center",
      fontSize: "var(--text-xs)",
      color: "var(--c-text-subtle)",
      padding: "2px 0"
    }
  }, w))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 4
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const dISO = iso(d);
    const isPast = stripTime(d) < min;
    const isFull = fullDates.includes(dISO);
    const isDisabled = isPast || isFull || disabledDates.includes(dISO);
    const isSel = selISO === dISO;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      disabled: isDisabled,
      onClick: () => onChange && onChange(d),
      "aria-pressed": isSel,
      title: isFull ? "額滿 Fully booked" : undefined,
      style: {
        position: "relative",
        aspectRatio: "1",
        border: "1px solid",
        borderColor: isSel ? "var(--c-primary)" : "transparent",
        background: isSel ? "var(--c-primary)" : "transparent",
        color: isSel ? "var(--c-on-primary)" : isDisabled ? "var(--c-text-subtle)" : "var(--c-text)",
        opacity: isPast ? 0.35 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
        borderRadius: "var(--radius-control)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        textDecoration: isFull ? "line-through" : "none",
        transition: "background var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)"
      }
    }, d.getDate());
  })));
}
function startOfMonth(d) {
  const x = new Date(d);
  return new Date(x.getFullYear(), x.getMonth(), 1);
}
function stripTime(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

// ===== components/hospitality/ReservationForm.jsx =====
/**
 * Hearth Studio — ReservationForm (Hospitality)
 * Full booking flow: date (calendar) · party size · time slot · notes.
 * Shows a confirmed state on submit. Reads only semantic tokens.
 */
function ReservationForm({
  times = ["12:00", "12:30", "18:00", "18:30", "19:00", "20:00"],
  fullDates = [],
  fullTimes = [],
  maxParty = 8,
  onSubmit,
  style = {}
}) {
  const [date, setDate] = React.useState(null);
  const [party, setParty] = React.useState(2);
  const [time, setTime] = React.useState(null);
  const [name, setName] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [done, setDone] = React.useState(null);
  const fmt = d => d ? `${d.getMonth() + 1}/${d.getDate()}` : "—";
  const canSubmit = date && time && name.trim();
  const submit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    const booking = {
      date,
      party,
      time,
      name: name.trim(),
      notes
    };
    setDone(booking);
    onSubmit && onSubmit(booking);
  };
  const stepBtn = {
    width: 38,
    height: "var(--control-h)",
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    cursor: "pointer",
    fontSize: "1.15rem",
    color: "var(--c-text-muted)",
    borderRadius: "var(--radius-control)"
  };
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ...style
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: "confirmed"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h2)",
        margin: 0,
        color: "var(--c-text)"
      }
    }, done.name, "\uFF0C\u5DF2\u70BA\u60A8\u4FDD\u7559\u5EA7\u4F4D"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-muted)"
      }
    }, fmt(done.date), " \xB7 ", done.time, " \xB7 ", done.party, " \u4F4D\u3002\u78BA\u8A8D\u4FE1\u5C07\u5BC4\u81F3\u60A8\u7684\u4FE1\u7BB1\u3002"), done.notes ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-subtle)",
        fontSize: "var(--text-sm)"
      }
    }, "\u5099\u8A3B\uFF1A", done.notes) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setDone(null)
    }, "\u4FEE\u6539\u8A02\u4F4D")));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      fontFamily: "var(--font-body)",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u9078\u64C7\u65E5\u671F \xB7 Date"), /*#__PURE__*/React.createElement(DatePicker, {
    value: date,
    onChange: setDate,
    fullDates: fullDates
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-stack)",
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u4EBA\u6578 \xB7 Party size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setParty(Math.max(1, party - 1)),
    "aria-label": "Fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)"
    }
  }, party), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setParty(Math.min(maxParty, party + 1)),
    "aria-label": "More"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginLeft: "0.25rem"
    }
  }, "\u6700\u591A ", maxParty, " \u4F4D"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u6642\u6BB5 \xB7 Time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }
  }, times.map(t => {
    const isFull = fullTimes.includes(t);
    const on = time === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      disabled: isFull,
      onClick: () => setTime(t),
      style: {
        padding: "0.4rem 0.8rem",
        cursor: isFull ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--fw-medium)",
        color: on ? "var(--c-on-primary)" : isFull ? "var(--c-text-subtle)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)",
        textDecoration: isFull ? "line-through" : "none",
        transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out)"
      }
    }, t);
  }))), /*#__PURE__*/React.createElement(Input, {
    label: "\u59D3\u540D \xB7 Name",
    placeholder: "\u738B\u5C0F\u660E",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u9700\u6C42\u5099\u8A3B \xB7 Notes"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: e => setNotes(e.target.value),
    rows: 2,
    placeholder: "\u9AD8\u8173\u6905\u3001\u904E\u654F\u539F\u3001\u6176\u751F\u2026",
    style: {
      width: "100%",
      resize: "vertical",
      padding: "0.6rem 0.9rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      color: "var(--c-text)",
      background: "var(--c-surface)",
      border: "1px solid var(--c-border-strong)",
      borderRadius: "var(--radius-control)",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    full: true,
    disabled: !canSubmit
  }, "\u78BA\u8A8D\u8A02\u4F4D \xB7 Confirm")));
}
function FieldLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: "0.5rem",
      letterSpacing: "0.01em"
    }
  }, children);
}

// ===== components/preorder/PickupSlotPicker.jsx =====
/**
 * Hearth Studio — PickupSlotPicker (Pre-order & Pickup)
 * Time-RANGE slot selector for pickup windows (e.g. 09:00–11:00). Each slot
 * may carry capacity state: available / almostfull / full. Theme-driven.
 */
function PickupSlotPicker({
  slots = [{
    range: "09:00–11:00",
    state: "available"
  }, {
    range: "11:00–13:00",
    state: "almostfull"
  }, {
    range: "14:00–16:00",
    state: "available"
  }, {
    range: "17:00–19:00",
    state: "full"
  }],
  value,
  onChange,
  columns = 2,
  style = {}
}) {
  const stateMeta = {
    available: {
      note: "可預訂",
      color: "var(--c-success)"
    },
    almostfull: {
      note: "名額將滿",
      color: "var(--c-warning)"
    },
    full: {
      note: "已額滿",
      color: "var(--c-text-subtle)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "0.6rem",
      ...style
    }
  }, slots.map(s => {
    const isFull = s.state === "full";
    const on = value === s.range;
    const meta = stateMeta[s.state] || stateMeta.available;
    return /*#__PURE__*/React.createElement("button", {
      key: s.range,
      type: "button",
      disabled: isFull,
      onClick: () => onChange && onChange(s.range),
      "aria-pressed": on,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.2rem",
        padding: "0.6rem 0.85rem",
        textAlign: "left",
        cursor: isFull ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)",
        color: on ? "var(--c-on-primary)" : isFull ? "var(--c-text-subtle)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)",
        opacity: isFull ? 0.6 : 1,
        transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.95rem",
        fontWeight: "var(--fw-semibold)",
        fontVariantNumeric: "tabular-nums",
        textDecoration: isFull ? "line-through" : "none"
      }
    }, s.range), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: on ? "color-mix(in oklab, var(--c-on-primary) 80%, transparent)" : meta.color
      }
    }, meta.note));
  }));
}

// ===== components/preorder/DropCard.jsx =====
/**
 * Hearth Studio — DropCard 「下次出爐」公告卡 (Pre-order & Pickup)
 * Announces the next bake/drop: date, planned items, when ordering opens,
 * and a live countdown to the order cutoff. For shops that run on 檔期 (drops)
 * rather than a fixed menu.
 */
function DropCard({
  title = "下次出爐",
  dropDate,
  // display string, e.g. "6 / 21（六）"
  items = [],
  // planned items: string[] or {name, note}[]
  openText,
  // e.g. "6/18 20:00 開放預訂"
  cutoff,
  // datetime → countdown to order cutoff
  status = "accepting",
  // accepting | closed | comingsoon
  onOrder,
  style = {}
}) {
  const closed = status === "closed";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--c-accent)"
    }
  }, title, " \xB7 Next drop"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h2)",
      color: "var(--c-text)",
      marginTop: "0.35rem",
      lineHeight: 1.05
    }
  }, dropDate)), /*#__PURE__*/React.createElement(StatusBadge, {
    status: status
  })), items.length ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginBottom: "0.5rem"
    }
  }, "\u9810\u8A08\u54C1\u9805 \xB7 On the bench"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.4rem"
    }
  }, items.map((it, i) => {
    const name = typeof it === "string" ? it : it.name;
    const note = typeof it === "string" ? null : it.note;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: "0.6rem",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: 999,
        background: "var(--c-accent)",
        flexShrink: 0,
        transform: "translateY(-2px)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.95rem",
        color: "var(--c-text)",
        fontWeight: "var(--fw-medium)"
      }
    }, name), note ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--c-text-subtle)"
      }
    }, note) : null);
  }))) : null, cutoff && !closed ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--c-border)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)",
      marginBottom: "0.5rem"
    }
  }, "\u8DDD\u96E2\u9810\u8A02\u622A\u6B62\u9084\u6709"), /*#__PURE__*/React.createElement(Countdown, {
    to: cutoff,
    compact: true
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.75rem",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, openText), /*#__PURE__*/React.createElement(Button, {
    variant: closed ? "outline" : "primary",
    size: "sm",
    disabled: closed,
    onClick: onOrder
  }, closed ? "預訂已截止" : "線上預訂")));
}

// ===== components/preorder/TodayBoard.jsx =====
/**
 * Hearth Studio — TodayBoard 「今日現場供應」公告卡 (Pre-order & Pickup)
 * Live list of what's available at the counter RIGHT NOW (walk-in, no order).
 * Each item shows price + a live availability state. Carries an "as of" time.
 */
function TodayBoard({
  title = "今日現場供應",
  asOf,
  // e.g. "11:20 更新"
  items = [],
  // { name, note, price, state }
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      padding: "var(--pad-card)",
      paddingBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--c-accent)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginTop: "0.3rem"
    }
  }, "\u73FE\u5834\u8CFC\u8CB7 \xB7 walk-in \xA0\xB7\xA0 ", asOf)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "var(--c-success)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--c-success)"
    }
  }), "\u5373\u6642")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const out = it.state === "soldout";
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.9rem",
        padding: "0.8rem var(--pad-card)",
        borderTop: "1px solid var(--c-border)",
        opacity: out ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.98rem",
        fontWeight: "var(--fw-semibold)",
        color: "var(--c-text)",
        textDecoration: out ? "line-through" : "none"
      }
    }, it.name), it.note ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--c-text-subtle)"
      }
    }, it.note) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-h4)",
        color: "var(--c-accent)"
      }
    }, it.price), /*#__PURE__*/React.createElement(StatusBadge, {
      status: it.state || "available"
    }));
  })));
}

// ===== components/preorder/PreorderForm.jsx =====
/**
 * Hearth Studio — PreorderForm 預訂取貨流程 (Pre-order & Pickup)
 * The full flow for drop-based / takeaway / artisan shops:
 *   檔期 drop → 品項 + 數量 → 取貨日期 → 取貨時段 → 取貨方式 → confirm.
 * No dine-in. Confirms into a 製作中 (in-the-oven) state.
 */
function PreorderForm({
  drops = [{
    id: "w26",
    label: "本週檔期",
    sub: "6/21（六）出爐"
  }, {
    id: "w27",
    label: "下週檔期",
    sub: "6/28（六）出爐"
  }],
  items = [{
    id: "croissant",
    name: "深夜可頌",
    price: 95,
    note: "27 層奶油"
  }, {
    id: "rye",
    name: "裸麥酸種",
    price: 180,
    note: "天然酵母"
  }, {
    id: "cinnamon",
    name: "焦糖肉桂卷",
    price: 110,
    note: "現烤淋醬"
  }],
  pickupSlots,
  pickupMethods = [{
    id: "self",
    label: "自取",
    note: "門市取貨"
  }, {
    id: "delivery",
    label: "宅配",
    note: "冷藏宅配，隔日到"
  }, {
    id: "platform",
    label: "外送平台",
    note: "Uber / foodpanda"
  }],
  fullDates = [],
  onSubmit,
  style = {}
}) {
  const [drop, setDrop] = React.useState(drops[0]?.id);
  const [qty, setQty] = React.useState({});
  const [date, setDate] = React.useState(null);
  const [slot, setSlot] = React.useState(null);
  const [method, setMethod] = React.useState(pickupMethods[0]?.id);
  const [name, setName] = React.useState("");
  const [done, setDone] = React.useState(null);
  const setItemQty = (id, d) => setQty(q => ({
    ...q,
    [id]: Math.max(0, (q[id] || 0) + d)
  }));
  const lines = items.filter(it => (qty[it.id] || 0) > 0);
  const count = lines.reduce((n, it) => n + qty[it.id], 0);
  const total = lines.reduce((s, it) => s + qty[it.id] * it.price, 0);
  const selfPickup = method === "self";
  const canSubmit = count > 0 && name.trim() && (!selfPickup || date && slot);
  const submit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    const order = {
      drop,
      lines: lines.map(it => ({
        ...it,
        qty: qty[it.id]
      })),
      count,
      total,
      date,
      slot,
      method,
      name: name.trim()
    };
    setDone(order);
    onSubmit && onSubmit(order);
  };
  const stepBtn = {
    width: 32,
    height: 32,
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    cursor: "pointer",
    fontSize: "1.05rem",
    color: "var(--c-text-muted)",
    borderRadius: "var(--radius-control)"
  };
  if (done) {
    const methodLabel = pickupMethods.find(m => m.id === done.method)?.label;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ...style
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: "making"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h2)",
        margin: 0,
        color: "var(--c-text)"
      }
    }, done.name, "\uFF0C\u9810\u8A02\u5DF2\u6536\u5230"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-muted)"
      }
    }, done.count, " \u4EF6 \xB7 NT$", done.total, " \xB7 ", methodLabel, done.method === "self" && done.date ? ` · ${done.date.getMonth() + 1}/${done.date.getDate()} ${done.slot} 取貨` : ""), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-subtle)",
        fontSize: "var(--text-sm)"
      }
    }, "\u51FA\u7210\u524D\u4E00\u5929\u6703\u4EE5\u7C21\u8A0A\u63D0\u9192\u3002\u53EF\u53D6\u8CA8\u6642\u5C07\u901A\u77E5\u60A8\u3002"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setDone(null)
    }, "\u4FEE\u6539\u9810\u8A02")));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Section, {
    step: "1",
    label: "\u9078\u64C7\u6A94\u671F \xB7 Choose a drop"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.6rem"
    }
  }, drops.map(d => {
    const on = drop === d.id;
    return /*#__PURE__*/React.createElement("button", {
      key: d.id,
      type: "button",
      onClick: () => setDrop(d.id),
      "aria-pressed": on,
      style: {
        textAlign: "left",
        padding: "0.6rem 0.9rem",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        color: on ? "var(--c-on-primary)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.95rem",
        fontWeight: "var(--fw-semibold)"
      }
    }, d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-xs)",
        opacity: 0.8
      }
    }, d.sub));
  }))), /*#__PURE__*/React.createElement(Section, {
    step: "2",
    label: "\u54C1\u9805\u8207\u6578\u91CF \xB7 Items"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.9rem",
      padding: "0.55rem 0",
      borderBottom: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.98rem",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)"
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, it.note, " \xB7 NT$", it.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setItemQty(it.id, -1),
    "aria-label": "\u2212"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 22,
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)"
    }
  }, qty[it.id] || 0), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setItemQty(it.id, +1),
    "aria-label": "+"
  }, "+")))))), /*#__PURE__*/React.createElement(Section, {
    step: "3",
    label: "\u53D6\u8CA8\u65B9\u5F0F \xB7 Pickup"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "0.6rem"
    }
  }, pickupMethods.map(m => {
    const on = method === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      type: "button",
      onClick: () => setMethod(m.id),
      "aria-pressed": on,
      style: {
        textAlign: "left",
        padding: "0.6rem 0.85rem",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        color: on ? "var(--c-on-primary)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.95rem",
        fontWeight: "var(--fw-semibold)"
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-xs)",
        opacity: 0.8
      }
    }, m.note));
  }))), selfPickup ? /*#__PURE__*/React.createElement(Section, {
    step: "4",
    label: "\u53D6\u8CA8\u65E5\u671F\u8207\u6642\u6BB5 \xB7 Date & time"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(DatePicker, {
    value: date,
    onChange: setDate,
    fullDates: fullDates
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(PickupSlotPicker, {
    value: slot,
    onChange: setSlot,
    slots: pickupSlots
  })))) : null, /*#__PURE__*/React.createElement(Section, {
    step: selfPickup ? "5" : "4",
    label: "\u806F\u7D61\u8CC7\u8A0A \xB7 Contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-stack)",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u59D3\u540D \xB7 Name",
    placeholder: "\u738B\u5C0F\u660E",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      padding: "0.5rem 0",
      borderTop: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-text-muted)"
    }
  }, count, " \u4EF6\u5408\u8A08"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h3)",
      color: "var(--c-accent)"
    }
  }, "NT$", total)), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    full: true,
    disabled: !canSubmit
  }, "\u9001\u51FA\u9810\u8A02 \xB7 Place pre-order"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      color: "var(--c-text-subtle)",
      textAlign: "center"
    }
  }, "\u552E\u5B8C\u5373\u6B62 \xB7 \u9810\u8A02\u622A\u6B62\u5F8C\u4E0D\u518D\u8FFD\u52A0"))));
}
function Section({
  step,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-bold)",
      color: "var(--c-on-primary)",
      background: "var(--c-primary)",
      borderRadius: "var(--radius-control)"
    }
  }, step), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      letterSpacing: "0.01em",
      whiteSpace: "nowrap"
    }
  }, label)), children);
}

// ===== components/booking/DateRangePicker.jsx =====
/**
 * Hearth Studio — DateRangePicker (Booking)
 * Two-step range calendar for 入住/退房 (check-in → check-out). First click sets
 * check-in, second sets check-out; clicking again restarts. Highlights the span,
 * disables past days and any in fullDates. Monday-first. Theme-driven.
 */
const WEEK_ZH_R = ["一", "二", "三", "四", "五", "六", "日"];
function DateRangePicker({
  value = {},
  // { start: Date|null, end: Date|null }
  onChange,
  minDate = new Date(),
  fullDates = [],
  months = 1,
  style = {}
}) {
  const [viewBase, setViewBase] = React.useState(() => somR(value.start || new Date()));
  const start = value.start ? stR(new Date(value.start)) : null;
  const end = value.end ? stR(new Date(value.end)) : null;
  const min = stR(minDate);
  const iso = d => d.toISOString().slice(0, 10);
  const pick = d => {
    const day = stR(d);
    if (!start || start && end) {
      onChange && onChange({
        start: day,
        end: null
      });
      return;
    }
    if (day <= start) {
      onChange && onChange({
        start: day,
        end: null
      });
      return;
    }
    onChange && onChange({
      start,
      end: day
    });
  };
  const navBtn = {
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    width: 32,
    height: 32,
    cursor: "pointer",
    color: "var(--c-text)",
    borderRadius: "var(--radius-control)",
    fontSize: "1rem",
    lineHeight: 1
  };
  const renderMonth = offset => {
    const view = new Date(viewBase.getFullYear(), viewBase.getMonth() + offset, 1);
    const startPad = (view.getDay() + 6) % 7;
    const daysIn = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < startPad; i++) cells.push(null);
    for (let d = 1; d <= daysIn; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
    return /*#__PURE__*/React.createElement("div", {
      key: offset,
      style: {
        width: 280
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.75rem"
      }
    }, offset === 0 ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Previous",
      style: navBtn,
      onClick: () => setViewBase(new Date(viewBase.getFullYear(), viewBase.getMonth() - 1, 1))
    }, "\u2039") : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-h4)",
        color: "var(--c-text)",
        whiteSpace: "nowrap"
      }
    }, view.getFullYear(), " \u5E74 ", view.getMonth() + 1, " \u6708"), offset === months - 1 ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Next",
      style: navBtn,
      onClick: () => setViewBase(new Date(viewBase.getFullYear(), viewBase.getMonth() + 1, 1))
    }, "\u203A") : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gap: 4,
        marginBottom: 4
      }
    }, WEEK_ZH_R.map(w => /*#__PURE__*/React.createElement("div", {
      key: w,
      style: {
        textAlign: "center",
        fontSize: "var(--text-xs)",
        color: "var(--c-text-subtle)"
      }
    }, w))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gap: 4
      }
    }, cells.map((d, i) => {
      if (!d) return /*#__PURE__*/React.createElement("div", {
        key: i
      });
      const day = stR(d);
      const isPast = day < min;
      const isFull = fullDates.includes(iso(day));
      const disabled = isPast || isFull;
      const isStart = start && +day === +start;
      const isEnd = end && +day === +end;
      const inRange = start && end && day > start && day < end;
      const edge = isStart || isEnd;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        type: "button",
        disabled: disabled,
        onClick: () => pick(d),
        style: {
          aspectRatio: "1",
          border: "1px solid",
          borderColor: edge ? "var(--c-primary)" : "transparent",
          background: edge ? "var(--c-primary)" : inRange ? "var(--c-surface-2)" : "transparent",
          color: edge ? "var(--c-on-primary)" : disabled ? "var(--c-text-subtle)" : "var(--c-text)",
          opacity: isPast ? 0.35 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
          borderRadius: "var(--radius-control)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          textDecoration: isFull ? "line-through" : "none",
          transition: "background var(--dur-1) var(--ease-out)"
        }
      }, d.getDate());
    })));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      gap: "var(--space-6)",
      ...style
    }
  }, Array.from({
    length: months
  }, (_, i) => renderMonth(i)));
}
function somR(d) {
  const x = new Date(d);
  return new Date(x.getFullYear(), x.getMonth(), 1);
}
function stR(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

// ===== components/booking/BookingForm.jsx =====
/**
 * Hearth Studio — BookingForm 訂房流程 (Booking)
 * Hotel / B&B booking: 入住日–退房日 (date range) · 房型 · 人數 · contact.
 * Computes nights and total. Confirms into a 已確認 state.
 * (Variant skeleton — wire room availability + pricing per property.)
 */
function BookingForm({
  rooms = [{
    id: "std",
    name: "標準雙人房",
    note: "1 大床 · 25㎡",
    price: 4200,
    status: "bookable"
  }, {
    id: "dlx",
    name: "豪華景觀房",
    note: "1 大床 · 32㎡ · 城景",
    price: 5800,
    status: "bookable"
  }, {
    id: "suite",
    name: "閣樓套房",
    note: "1 大床 + 客廳 · 48㎡",
    price: 8800,
    status: "soldout"
  }],
  fullDates = [],
  maxGuests = 4,
  onSubmit,
  style = {}
}) {
  const [range, setRange] = React.useState({
    start: null,
    end: null
  });
  const [room, setRoom] = React.useState(rooms.find(r => r.status !== "soldout")?.id);
  const [guests, setGuests] = React.useState(2);
  const [name, setName] = React.useState("");
  const [done, setDone] = React.useState(null);
  const nights = range.start && range.end ? Math.round((range.end - range.start) / 86400000) : 0;
  const roomObj = rooms.find(r => r.id === room);
  const total = roomObj && nights ? roomObj.price * nights : 0;
  const fmt = d => d ? `${d.getMonth() + 1}/${d.getDate()}` : "—";
  const canSubmit = nights > 0 && room && name.trim();
  const submit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    const booking = {
      range,
      nights,
      room: roomObj,
      guests,
      name: name.trim(),
      total
    };
    setDone(booking);
    onSubmit && onSubmit(booking);
  };
  const stepBtn = {
    width: 36,
    height: "var(--control-h)",
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    cursor: "pointer",
    fontSize: "1.1rem",
    color: "var(--c-text-muted)",
    borderRadius: "var(--radius-control)"
  };
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ...style
      }
    }, /*#__PURE__*/React.createElement(StatusBadge, {
      status: "confirmed"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h2)",
        margin: 0,
        color: "var(--c-text)"
      }
    }, done.name, "\uFF0C\u8A02\u623F\u5DF2\u78BA\u8A8D"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-muted)"
      }
    }, done.room.name, " \xB7 ", fmt(done.range.start), "\u2013", fmt(done.range.end), " \xB7 ", done.nights, " \u665A \xB7 ", done.guests, " \u4F4D \xB7 NT$", done.total), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setDone(null)
    }, "\u4FEE\u6539\u8A02\u623F")));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "\u5165\u4F4F \u2014 \u9000\u623F \xB7 Stay dates"), /*#__PURE__*/React.createElement(DateRangePicker, {
    value: range,
    onChange: setRange,
    fullDates: fullDates,
    months: 1
  }), nights ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.6rem",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)"
    }
  }, fmt(range.start), " \u2192 ", fmt(range.end), " \xB7 \u5171 ", nights, " \u665A") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "\u623F\u578B \xB7 Room type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, rooms.map(r => {
    const out = r.status === "soldout";
    const on = room === r.id;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      type: "button",
      disabled: out,
      onClick: () => setRoom(r.id),
      "aria-pressed": on,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.9rem",
        textAlign: "left",
        padding: "0.7rem 0.9rem",
        cursor: out ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)",
        background: on ? "var(--c-surface-2)" : "transparent",
        opacity: out ? 0.6 : 1,
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.98rem",
        fontWeight: "var(--fw-semibold)",
        color: "var(--c-text)"
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--c-text-subtle)"
      }
    }, r.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-h4)",
        color: "var(--c-accent)"
      }
    }, "NT$", r.price), /*#__PURE__*/React.createElement(StatusBadge, {
      status: out ? "soldout" : "bookable"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "\u4EBA\u6578 \xB7 Guests"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setGuests(Math.max(1, guests - 1)),
    "aria-label": "\u2212"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 26,
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)"
    }
  }, guests), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setGuests(Math.min(maxGuests, guests + 1)),
    "aria-label": "+"
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "\u59D3\u540D \xB7 Name",
    placeholder: "\u738B\u5C0F\u660E",
    value: name,
    onChange: e => setName(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)"
    }
  }, nights ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u5408\u8A08 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h3)",
      color: "var(--c-accent)"
    }
  }, "NT$", total), " \xB7 ", nights, " \u665A") : "請選擇入住日期"), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    variant: "primary",
    disabled: !canSubmit
  }, "\u78BA\u8A8D\u8A02\u623F \xB7 Confirm booking")));
}
function Label({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: "0.6rem"
    }
  }, children);
}

// ===== components/media/Gallery.jsx =====
/**
 * Hearth Studio — Gallery (Media)
 * Large main image with a thumbnail strip. Click/keyboard to switch.
 * Images adopt the theme photo tone. Accepts URLs or custom nodes.
 */
function Gallery({
  images = [],
  // [{ src?, node?, label?, alt? }]
  ratio = "4 / 3",
  thumbs = true,
  start = 0,
  style = {}
}) {
  const [i, setI] = React.useState(start);
  const cur = images[i] || {};
  const renderMedia = (img, main) => img.node ? img.node : img.src ? /*#__PURE__*/React.createElement("img", {
    src: img.src,
    alt: img.alt || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "var(--photo-filter)"
    }
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    label: img.label,
    main: main
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--photo-bg)",
      borderRadius: "var(--radius-card)"
    }
  }, renderMedia(cur, true), images.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 10,
      right: 12,
      display: "flex",
      gap: 5
    }
  }, images.map((_, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: n === i ? "var(--c-on-accent)" : "color-mix(in oklab, var(--c-on-accent) 45%, transparent)"
    }
  }))) : null), thumbs && images.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, images.map((img, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    onClick: () => setI(n),
    "aria-label": `View image ${n + 1}`,
    "aria-pressed": n === i,
    style: {
      width: 72,
      height: 56,
      padding: 0,
      overflow: "hidden",
      cursor: "pointer",
      background: "var(--photo-bg)",
      borderRadius: "var(--radius-control)",
      border: `2px solid ${n === i ? "var(--c-accent)" : "transparent"}`,
      opacity: n === i ? 1 : 0.7,
      transition: "opacity var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)"
    }
  }, renderMedia(img, false)))) : null);
}
function Placeholder({
  label,
  main
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "var(--photo-filter)"
    }
  }, main && label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontSize: "var(--text-h4)",
      color: "rgba(255,255,255,.85)"
    }
  }, label) : null);
}

// ===== components/media/MapEmbed.jsx =====
/**
 * Hearth Studio — MapEmbed (Media)
 * A framed location block: a stylised placeholder map with a pin, an address
 * overlay card, and a link out to Google Maps. Swap `embedSrc` for a real
 * <iframe> map in production. Theme-driven.
 */
function MapEmbed({
  address = "",
  addressEn = "",
  note = "",
  mapsUrl = "#",
  embedSrc = null,
  height = 360,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      overflow: "hidden",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--c-border)",
      background: "var(--c-surface-2)",
      ...style
    }
  }, embedSrc ? /*#__PURE__*/React.createElement("iframe", {
    title: "map",
    src: embedSrc,
    style: {
      width: "100%",
      height: "100%",
      border: 0,
      filter: "var(--photo-filter)"
    },
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement(PlaceholderMap, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-5)",
      bottom: "var(--space-5)",
      maxWidth: 320,
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-4)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--c-accent)",
      marginBottom: 6
    }
  }, "Find us \xB7 \u4F86\u8A2A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, address), addressEn ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginTop: 2
    }
  }, addressEn) : null, note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)",
      marginTop: 8
    }
  }, note) : null, /*#__PURE__*/React.createElement("a", {
    href: mapsUrl,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 12,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-accent)",
      textDecoration: "none"
    }
  }, "\u5728 Google \u5730\u5716\u958B\u555F \u2192")));
}
function PlaceholderMap() {
  // simple stylised map: soft blocks + a pin, all in theme tones
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      filter: "var(--photo-filter)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    viewBox: "0 0 600 360",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "600",
    height: "360",
    fill: "var(--c-surface-2)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--c-border-strong)",
    strokeWidth: "6",
    fill: "none",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 90 H620"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 250 H620"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M160 -20 V380"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M430 -20 V380"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 170 L260 170 L320 230 L620 230",
    strokeWidth: "10",
    stroke: "var(--c-accent)",
    opacity: "0.5"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "var(--c-border)",
    opacity: "0.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "110",
    width: "90",
    height: "110"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "190",
    y: "30",
    width: "210",
    height: "40"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "460",
    y: "110",
    width: "110",
    height: "110"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "190",
    y: "270",
    width: "210",
    height: "70"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(300 175)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "26",
    fill: "var(--c-primary)",
    opacity: "0.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 -22 C12 -22 20 -13 20 -2 C20 12 0 26 0 26 C0 26 -20 12 -20 -2 C-20 -13 -12 -22 0 -22 Z",
    fill: "var(--c-accent)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "-2",
    r: "6",
    fill: "var(--c-surface)"
  }))));
}

// ===== components/media/InstagramEmbed.jsx =====
/**
 * Hearth Studio — InstagramEmbed (Media)
 * A branded IG feed block: handle header, a grid of post tiles (placeholder or
 * real image URLs), and a follow CTA. For shops where IG is the main channel.
 */
function InstagramEmbed({
  handle = "@studio",
  caption = "",
  posts = [],
  // [{ src?, label?, alt? }] — 6–9 recommended
  profileUrl = "#",
  columns = 3,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      marginBottom: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--c-primary)",
      color: "var(--c-on-primary)",
      fontFamily: "var(--font-heading)",
      fontSize: "1.1rem"
    }
  }, handle.replace(/^@/, "").slice(0, 1).toUpperCase()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)"
    }
  }, handle), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, caption) : null)), /*#__PURE__*/React.createElement("a", {
    href: profileUrl,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "0.45rem 1rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-on-primary)",
      background: "var(--c-primary)",
      borderRadius: "var(--radius-control)",
      textDecoration: "none"
    }
  }, "\u8FFD\u8E64 \xB7 Follow")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "var(--space-2)"
    }
  }, posts.map((p, n) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: profileUrl,
    target: "_blank",
    rel: "noreferrer",
    style: {
      position: "relative",
      aspectRatio: "1",
      overflow: "hidden",
      background: "var(--photo-bg)",
      display: "block"
    }
  }, p.src ? /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.alt || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "var(--photo-filter)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "var(--photo-filter)",
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontSize: "var(--text-sm)",
      color: "rgba(255,255,255,.8)"
    }
  }, p.label || "")))));
}

// ===== components/feedback/Skeleton.jsx =====
/**
 * Hearth Studio — Skeleton (Feedback)
 * Loading placeholder with a slow, quiet shimmer (house motion = unhurried).
 * Variants: line / block / circle. Compose several to mimic a card.
 */
function Skeleton({
  variant = "line",
  width,
  height,
  lines = 1,
  style = {}
}) {
  const base = {
    background: "linear-gradient(90deg, var(--c-surface-2) 25%, color-mix(in oklab, var(--c-surface-2) 55%, var(--c-surface)) 50%, var(--c-surface-2) 75%)",
    backgroundSize: "200% 100%",
    animation: "hearth-shimmer 1.6s var(--ease-soft) infinite",
    borderRadius: "var(--radius-control)"
  };
  const Style = () => /*#__PURE__*/React.createElement("style", null, `@keyframes hearth-shimmer { from { background-position: 200% 0 } to { background-position: -200% 0 } }
      @media (prefers-reduced-motion: reduce) { .hearth-sk { animation: none !important } }`);
  if (variant === "circle") {
    const d = width || height || 44;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
      className: "hearth-sk",
      style: {
        ...base,
        width: d,
        height: d,
        borderRadius: "999px",
        ...style
      }
    }));
  }
  if (variant === "block") {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
      className: "hearth-sk",
      style: {
        ...base,
        width: width || "100%",
        height: height || 160,
        borderRadius: "var(--radius-card)",
        ...style
      }
    }));
  }
  // line(s)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.55rem",
      ...style
    }
  }, Array.from({
    length: lines
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hearth-sk",
    style: {
      ...base,
      height: height || 13,
      width: width || (i === lines - 1 && lines > 1 ? "60%" : "100%")
    }
  }))));
}

/** Convenience: a card-shaped skeleton (cover + title + two lines). */
function SkeletonCard({
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "block",
    height: 150,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "0.7rem"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "line",
    height: 20,
    width: "70%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "line",
    lines: 2
  })));
}

// ===== components/feedback/EmptyState.jsx =====
/**
 * Hearth Studio — EmptyState (Feedback)
 * Quiet centered message for "nothing here yet" moments — no orders found, the
 * gap between drops, an empty cart. Optional glyph and action.
 */
function EmptyState({
  glyph = "○",
  title = "",
  message = "",
  action = null,
  // { label, onClick } or a node
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "var(--space-8) var(--space-5)",
      gap: "var(--space-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--c-border)",
      background: "var(--c-surface)",
      fontFamily: "var(--font-heading)",
      fontSize: "1.8rem",
      color: "var(--c-text-subtle)"
    }
  }, glyph), title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h3)",
      color: "var(--c-text)",
      margin: "var(--space-2) 0 0",
      letterSpacing: "var(--tracking-heading)"
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)",
      maxWidth: 380,
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, message) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, React.isValidElement(action) ? action : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: action.onClick
  }, action.label)) : null);
}
Object.assign(window, {
  Button,
  Badge,
  Tag,
  Card,
  Modal,
  Input,
  StatusBadge,
  LanguageSwitcher,
  Countdown,
  DatePicker,
  ReservationForm,
  PickupSlotPicker,
  DropCard,
  TodayBoard,
  PreorderForm,
  DateRangePicker,
  BookingForm,
  Gallery,
  MapEmbed,
  InstagramEmbed,
  Skeleton,
  SkeletonCard,
  EmptyState
});
window.Hearth = {
  Button,
  Badge,
  Tag,
  Card,
  Modal,
  Input,
  StatusBadge,
  LanguageSwitcher,
  Countdown,
  DatePicker,
  ReservationForm,
  PickupSlotPicker,
  DropCard,
  TodayBoard,
  PreorderForm,
  DateRangePicker,
  BookingForm,
  Gallery,
  MapEmbed,
  InstagramEmbed,
  Skeleton,
  SkeletonCard,
  EmptyState
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "brands/kit/hearth-kit.jsx", error: String((e && e.message) || e) }); }

// components/booking/DateRangePicker.jsx
try { (() => {
/**
 * Hearth Studio — DateRangePicker (Booking)
 * Two-step range calendar for 入住/退房 (check-in → check-out). First click sets
 * check-in, second sets check-out; clicking again restarts. Highlights the span,
 * disables past days and any in fullDates. Monday-first. Theme-driven.
 */
const WEEK_ZH_R = ["一", "二", "三", "四", "五", "六", "日"];
function DateRangePicker({
  value = {},
  // { start: Date|null, end: Date|null }
  onChange,
  minDate = new Date(),
  fullDates = [],
  months = 1,
  style = {}
}) {
  const [viewBase, setViewBase] = React.useState(() => somR(value.start || new Date()));
  const start = value.start ? stR(new Date(value.start)) : null;
  const end = value.end ? stR(new Date(value.end)) : null;
  const min = stR(minDate);
  const iso = d => d.toISOString().slice(0, 10);
  const pick = d => {
    const day = stR(d);
    if (!start || start && end) {
      onChange && onChange({
        start: day,
        end: null
      });
      return;
    }
    if (day <= start) {
      onChange && onChange({
        start: day,
        end: null
      });
      return;
    }
    onChange && onChange({
      start,
      end: day
    });
  };
  const navBtn = {
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    width: 32,
    height: 32,
    cursor: "pointer",
    color: "var(--c-text)",
    borderRadius: "var(--radius-control)",
    fontSize: "1rem",
    lineHeight: 1
  };
  const renderMonth = offset => {
    const view = new Date(viewBase.getFullYear(), viewBase.getMonth() + offset, 1);
    const startPad = (view.getDay() + 6) % 7;
    const daysIn = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < startPad; i++) cells.push(null);
    for (let d = 1; d <= daysIn; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
    return /*#__PURE__*/React.createElement("div", {
      key: offset,
      style: {
        width: 280
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "0.75rem"
      }
    }, offset === 0 ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Previous",
      style: navBtn,
      onClick: () => setViewBase(new Date(viewBase.getFullYear(), viewBase.getMonth() - 1, 1))
    }, "\u2039") : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-h4)",
        color: "var(--c-text)",
        whiteSpace: "nowrap"
      }
    }, view.getFullYear(), " \u5E74 ", view.getMonth() + 1, " \u6708"), offset === months - 1 ? /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Next",
      style: navBtn,
      onClick: () => setViewBase(new Date(viewBase.getFullYear(), viewBase.getMonth() + 1, 1))
    }, "\u203A") : /*#__PURE__*/React.createElement("span", {
      style: {
        width: 32
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gap: 4,
        marginBottom: 4
      }
    }, WEEK_ZH_R.map(w => /*#__PURE__*/React.createElement("div", {
      key: w,
      style: {
        textAlign: "center",
        fontSize: "var(--text-xs)",
        color: "var(--c-text-subtle)"
      }
    }, w))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(7,1fr)",
        gap: 4
      }
    }, cells.map((d, i) => {
      if (!d) return /*#__PURE__*/React.createElement("div", {
        key: i
      });
      const day = stR(d);
      const isPast = day < min;
      const isFull = fullDates.includes(iso(day));
      const disabled = isPast || isFull;
      const isStart = start && +day === +start;
      const isEnd = end && +day === +end;
      const inRange = start && end && day > start && day < end;
      const edge = isStart || isEnd;
      return /*#__PURE__*/React.createElement("button", {
        key: i,
        type: "button",
        disabled: disabled,
        onClick: () => pick(d),
        style: {
          aspectRatio: "1",
          border: "1px solid",
          borderColor: edge ? "var(--c-primary)" : "transparent",
          background: edge ? "var(--c-primary)" : inRange ? "var(--c-surface-2)" : "transparent",
          color: edge ? "var(--c-on-primary)" : disabled ? "var(--c-text-subtle)" : "var(--c-text)",
          opacity: isPast ? 0.35 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
          borderRadius: "var(--radius-control)",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-sm)",
          textDecoration: isFull ? "line-through" : "none",
          transition: "background var(--dur-1) var(--ease-out)"
        }
      }, d.getDate());
    })));
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      gap: "var(--space-6)",
      ...style
    }
  }, Array.from({
    length: months
  }, (_, i) => renderMonth(i)));
}
function somR(d) {
  const x = new Date(d);
  return new Date(x.getFullYear(), x.getMonth(), 1);
}
function stR(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
Object.assign(__ds_scope, { DateRangePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/booking/DateRangePicker.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hearth Studio — Badge (Core)
 * Compact label/pill. Soft (tinted) or solid. Reads only semantic tokens,
 * so its corners follow the theme radius (round in house, square in Atelier Ling).
 */
function Badge({
  children,
  tone = "neutral",
  solid = false,
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      soft: ["var(--c-surface-2)", "var(--c-text-muted)"],
      solid: ["var(--c-text)", "var(--c-bg)"]
    },
    accent: {
      soft: ["var(--c-warning-bg)", "var(--c-accent)"],
      solid: ["var(--c-accent)", "var(--c-on-accent)"]
    },
    success: {
      soft: ["var(--c-success-bg)", "var(--c-success)"],
      solid: ["var(--c-success)", "#fff"]
    },
    warning: {
      soft: ["var(--c-warning-bg)", "var(--c-warning)"],
      solid: ["var(--c-warning)", "#fff"]
    },
    danger: {
      soft: ["var(--c-danger-bg)", "var(--c-danger)"],
      solid: ["var(--c-danger)", "#fff"]
    },
    info: {
      soft: ["var(--c-info-bg)", "var(--c-info)"],
      solid: ["var(--c-info)", "#fff"]
    }
  };
  const [bg, fg] = (tones[tone] || tones.neutral)[solid ? "solid" : "soft"];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.2rem 0.6rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1.5,
      letterSpacing: "0.02em",
      color: fg,
      background: bg,
      borderRadius: "var(--radius-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hearth Studio — Button (Core)
 * Theme-driven action. Reads only semantic tokens, so it re-skins with
 * the active [data-theme]. Padding/height follow the active density.
 */
function Button({
  variant = "primary",
  size = "md",
  iconLeft = null,
  iconRight = null,
  full = false,
  disabled = false,
  type = "button",
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // size tweaks ride on top of density-driven control height
  const sizePad = {
    sm: "0 0.95rem",
    md: "0 var(--pad-control-x)",
    lg: "0 calc(var(--pad-control-x) + 0.5rem)"
  };
  const sizeH = {
    sm: "calc(var(--control-h) - 8px)",
    md: "var(--control-h)",
    lg: "calc(var(--control-h) + 8px)"
  };
  const sizeFont = {
    sm: "var(--text-sm)",
    md: "0.95rem",
    lg: "var(--text-lead)"
  };
  const palettes = {
    primary: {
      bg: "var(--c-primary)",
      bgH: "var(--c-primary-hover)",
      fg: "var(--c-on-primary)",
      bd: "transparent"
    },
    accent: {
      bg: "var(--c-accent)",
      bgH: "var(--c-accent-hover)",
      fg: "var(--c-on-accent)",
      bd: "transparent"
    },
    outline: {
      bg: hover ? "var(--c-surface-2)" : "transparent",
      bgH: "var(--c-surface-2)",
      fg: "var(--c-text)",
      bd: "var(--c-border-strong)"
    },
    ghost: {
      bg: hover ? "var(--c-surface-2)" : "transparent",
      bgH: "var(--c-surface-2)",
      fg: "var(--c-accent)",
      bd: "transparent"
    }
  };
  const p = palettes[variant] || palettes.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
    style: {
      display: full ? "flex" : "inline-flex",
      width: full ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: "0.55rem",
      height: sizeH[size],
      padding: sizePad[size],
      fontFamily: "var(--font-body)",
      fontSize: sizeFont[size],
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.01em",
      lineHeight: 1,
      whiteSpace: "nowrap",
      color: p.fg,
      background: active && !disabled ? p.bgH : p.bg,
      border: `1px solid ${p.bd}`,
      borderRadius: "var(--radius-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.42 : 1,
      transform: active && !disabled ? "translateY(0.5px)" : "none",
      transition: "background var(--dur-1) var(--ease-out), transform var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out)",
      userSelect: "none",
      ...style
    }
  }, rest), iconLeft ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconLeft) : null, children, iconRight ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex"
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hearth Studio — Card (Core)
 * Editorial content card: optional cover (image URL or node), eyebrow, serif
 * title, meta, body, footer. House keeps it near-flat; lifts subtly when
 * interactive. Corners + padding follow theme + density.
 */
function Card({
  image = null,
  cover = null,
  imageAlt = "",
  imageRatio = "4 / 3",
  eyebrow = null,
  title = null,
  meta = null,
  footer = null,
  interactive = false,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lift = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      cursor: interactive ? "pointer" : "default",
      boxShadow: lift ? "var(--shadow-md)" : "var(--shadow-sm)",
      transform: lift ? "translateY(-2px)" : "none",
      transition: "box-shadow var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out)",
      ...style
    }
  }, rest), cover ? /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, cover) : image ? /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: imageRatio,
      overflow: "hidden",
      background: "var(--photo-bg)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "var(--photo-filter)",
      transform: lift ? "scale(1.035)" : "scale(1)",
      transition: "transform var(--dur-3) var(--ease-out)"
    }
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem",
      flex: 1
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--c-accent)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h3)",
      lineHeight: 1.14,
      letterSpacing: 0,
      color: "var(--c-text)",
      margin: 0
    }
  }, title) : null, meta ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, meta) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      lineHeight: "var(--leading-normal)",
      color: "var(--c-text-muted)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "0.75rem"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Modal.jsx
try { (() => {
/**
 * Hearth Studio — Modal (Core)
 * Centered dialog with a scrim. Theme-driven surface, corners and motion.
 * Closes on scrim click and Esc. Renders nothing when closed.
 */
function Modal({
  open = false,
  onClose,
  title = null,
  footer = null,
  width = 460,
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: "var(--z-modal)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-5)",
      background: "color-mix(in oklab, var(--c-text) 46%, transparent)",
      backdropFilter: "blur(2px)",
      animation: "hearth-fade var(--dur-2) var(--ease-out)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      animation: "hearth-rise var(--dur-2) var(--ease-out)"
    }
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      padding: "var(--space-5) var(--pad-card) 0"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h3)",
      margin: 0,
      color: "var(--c-text)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: "1.5rem",
      lineHeight: 1,
      color: "var(--c-text-subtle)"
    }
  }, "\xD7")) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-4) var(--pad-card)",
      color: "var(--c-text-muted)",
      fontFamily: "var(--font-body)",
      lineHeight: "var(--leading-normal)"
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "0.6rem",
      justifyContent: "flex-end",
      padding: "0 var(--pad-card) var(--pad-card)"
    }
  }, footer) : null), /*#__PURE__*/React.createElement("style", null, `
        @keyframes hearth-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes hearth-rise { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
      `));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Modal.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hearth Studio — Tag (Core)
 * Outlined, selectable filter chip. Fills with the theme accent/primary when
 * selected. Corners follow the theme radius.
 */
function Tag({
  children,
  selected = false,
  onClick,
  onRemove,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick;
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.45rem",
      padding: "0.32rem 0.8rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-medium)",
      lineHeight: 1.4,
      color: selected ? "var(--c-on-primary)" : "var(--c-text-muted)",
      background: selected ? "var(--c-primary)" : hover && interactive ? "var(--c-surface-2)" : "transparent",
      border: `1px solid ${selected ? "var(--c-primary)" : "var(--c-border-strong)"}`,
      borderRadius: "var(--radius-control)",
      cursor: interactive ? "pointer" : "default",
      transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)",
      userSelect: "none",
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      marginRight: -2,
      opacity: 0.7,
      cursor: "pointer",
      fontSize: "1rem",
      lineHeight: 1
    },
    "aria-label": "Remove"
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
/**
 * Hearth Studio — EmptyState (Feedback)
 * Quiet centered message for "nothing here yet" moments — no orders found, the
 * gap between drops, an empty cart. Optional glyph and action.
 */
function EmptyState({
  glyph = "○",
  title = "",
  message = "",
  action = null,
  // { label, onClick } or a node
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "var(--space-8) var(--space-5)",
      gap: "var(--space-3)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--c-border)",
      background: "var(--c-surface)",
      fontFamily: "var(--font-heading)",
      fontSize: "1.8rem",
      color: "var(--c-text-subtle)"
    }
  }, glyph), title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h3)",
      color: "var(--c-text)",
      margin: "var(--space-2) 0 0",
      letterSpacing: "var(--tracking-heading)"
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)",
      maxWidth: 380,
      margin: 0,
      lineHeight: "var(--leading-relaxed)"
    }
  }, message) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)"
    }
  }, React.isValidElement(action) ? action : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: action.onClick
  }, action.label)) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
/**
 * Hearth Studio — Skeleton (Feedback)
 * Loading placeholder with a slow, quiet shimmer (house motion = unhurried).
 * Variants: line / block / circle. Compose several to mimic a card.
 */
function Skeleton({
  variant = "line",
  width,
  height,
  lines = 1,
  style = {}
}) {
  const base = {
    background: "linear-gradient(90deg, var(--c-surface-2) 25%, color-mix(in oklab, var(--c-surface-2) 55%, var(--c-surface)) 50%, var(--c-surface-2) 75%)",
    backgroundSize: "200% 100%",
    animation: "hearth-shimmer 1.6s var(--ease-soft) infinite",
    borderRadius: "var(--radius-control)"
  };
  const Style = () => /*#__PURE__*/React.createElement("style", null, `@keyframes hearth-shimmer { from { background-position: 200% 0 } to { background-position: -200% 0 } }
      @media (prefers-reduced-motion: reduce) { .hearth-sk { animation: none !important } }`);
  if (variant === "circle") {
    const d = width || height || 44;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
      className: "hearth-sk",
      style: {
        ...base,
        width: d,
        height: d,
        borderRadius: "999px",
        ...style
      }
    }));
  }
  if (variant === "block") {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
      className: "hearth-sk",
      style: {
        ...base,
        width: width || "100%",
        height: height || 160,
        borderRadius: "var(--radius-card)",
        ...style
      }
    }));
  }
  // line(s)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Style, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.55rem",
      ...style
    }
  }, Array.from({
    length: lines
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "hearth-sk",
    style: {
      ...base,
      height: height || 13,
      width: width || (i === lines - 1 && lines > 1 ? "60%" : "100%")
    }
  }))));
}

/** Convenience: a card-shaped skeleton (cover + title + two lines). */
function SkeletonCard({
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "block",
    height: 150,
    style: {
      borderRadius: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "0.7rem"
    }
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "line",
    height: 20,
    width: "70%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "line",
    lines: 2
  })));
}
Object.assign(__ds_scope, { Skeleton, SkeletonCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hearth Studio — Input (Core)
 * Labelled text field with hint / error. Theme focus ring; density-driven height.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  type = "text",
  prefix = null,
  full = true,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const reactId = React.useId ? React.useId() : "in";
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: full ? "100%" : "auto",
      fontFamily: "var(--font-body)"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: "block",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: "0.4rem",
      letterSpacing: "0.01em"
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
      height: "var(--control-h)",
      padding: "0 0.9rem",
      background: "var(--c-surface)",
      border: `1px solid ${error ? "var(--c-danger)" : focus ? "var(--c-ring)" : "var(--c-border-strong)"}`,
      borderRadius: "var(--radius-control)",
      boxShadow: focus && !error ? "0 0 0 3px color-mix(in oklab, var(--c-ring) 22%, transparent)" : "none",
      transition: "border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-1) var(--ease-out)"
    }
  }, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-text-subtle)",
      display: "inline-flex",
      fontSize: "0.95rem"
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      color: "var(--c-text)",
      ...style
    }
  }, rest))), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-danger)",
      marginTop: "0.4rem"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginTop: "0.4rem"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/Countdown.jsx
try { (() => {
/**
 * Hearth Studio — Countdown (Hospitality)
 * Counts down to a target time — limited bakes, event reservations.
 * Shows D/H/M/S blocks; calls onComplete once when it reaches zero.
 */
function Countdown({
  to,
  labels = ["天", "時", "分", "秒"],
  onComplete,
  compact = false,
  style = {}
}) {
  const target = React.useMemo(() => new Date(to).getTime(), [to]);
  const calc = React.useCallback(() => Math.max(0, target - Date.now()), [target]);
  const [ms, setMs] = React.useState(calc);
  const fired = React.useRef(false);
  React.useEffect(() => {
    const id = setInterval(() => {
      const next = calc();
      setMs(next);
      if (next === 0 && !fired.current) {
        fired.current = true;
        onComplete && onComplete();
      }
    }, 1000);
    return () => clearInterval(id);
  }, [calc, onComplete]);
  const s = Math.floor(ms / 1000);
  const parts = [Math.floor(s / 86400), Math.floor(s % 86400 / 3600), Math.floor(s % 3600 / 60), s % 60];
  const pad = n => String(n).padStart(2, "0");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "flex-end",
      gap: compact ? "0.5rem" : "0.9rem",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, parts.map((n, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minWidth: compact ? 28 : 44
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: compact ? "var(--text-h4)" : "var(--text-h2)",
      lineHeight: 1,
      color: "var(--c-text)",
      fontVariantNumeric: "tabular-nums"
    }
  }, pad(n)), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: "0.3rem",
      fontSize: "var(--text-xs)",
      letterSpacing: "0.12em",
      color: "var(--c-text-subtle)"
    }
  }, labels[i])), i < parts.length - 1 ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: compact ? "var(--text-h4)" : "var(--text-h3)",
      color: "var(--c-border-strong)",
      paddingBottom: compact ? 14 : 22
    }
  }, ":") : null)));
}
Object.assign(__ds_scope, { Countdown });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/Countdown.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/DatePicker.jsx
try { (() => {
/**
 * Hearth Studio — DatePicker (Hospitality)
 * Single-month calendar for booking dates. Disables past days and any in
 * `disabledDates`/`fullDates`. Theme-driven; square cells in artisanal themes.
 */
const WEEK_ZH = ["一", "二", "三", "四", "五", "六", "日"];
function DatePicker({
  value,
  onChange,
  month,
  // Date controlling the visible month
  onMonthChange,
  minDate = new Date(),
  fullDates = [],
  // ISO yyyy-mm-dd strings marked 額滿
  disabledDates = [],
  style = {}
}) {
  const [viewInternal, setViewInternal] = React.useState(() => startOfMonth(month || value || new Date()));
  const view = month ? startOfMonth(month) : viewInternal;
  const setView = d => {
    if (onMonthChange) onMonthChange(d);
    if (!month) setViewInternal(d);
  };
  const iso = d => d.toISOString().slice(0, 10);
  const min = stripTime(minDate);
  const selISO = value ? iso(stripTime(new Date(value))) : null;
  const first = new Date(view.getFullYear(), view.getMonth(), 1);
  const startPad = (first.getDay() + 6) % 7; // Monday-first
  const daysIn = new Date(view.getFullYear(), view.getMonth() + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < startPad; i++) cells.push(null);
  for (let d = 1; d <= daysIn; d++) cells.push(new Date(view.getFullYear(), view.getMonth(), d));
  const monthLabel = `${view.getFullYear()} 年 ${view.getMonth() + 1} 月`;
  const navBtn = {
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    width: 32,
    height: 32,
    cursor: "pointer",
    color: "var(--c-text)",
    borderRadius: "var(--radius-control)",
    fontSize: "1rem",
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      width: 300,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Previous month",
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))
  }, "\u2039"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)",
      whiteSpace: "nowrap"
    }
  }, monthLabel), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Next month",
    style: navBtn,
    onClick: () => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))
  }, "\u203A")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 4,
      marginBottom: 4
    }
  }, WEEK_ZH.map(w => /*#__PURE__*/React.createElement("div", {
    key: w,
    style: {
      textAlign: "center",
      fontSize: "var(--text-xs)",
      color: "var(--c-text-subtle)",
      padding: "2px 0"
    }
  }, w))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(7,1fr)",
      gap: 4
    }
  }, cells.map((d, i) => {
    if (!d) return /*#__PURE__*/React.createElement("div", {
      key: i
    });
    const dISO = iso(d);
    const isPast = stripTime(d) < min;
    const isFull = fullDates.includes(dISO);
    const isDisabled = isPast || isFull || disabledDates.includes(dISO);
    const isSel = selISO === dISO;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      disabled: isDisabled,
      onClick: () => onChange && onChange(d),
      "aria-pressed": isSel,
      title: isFull ? "額滿 Fully booked" : undefined,
      style: {
        position: "relative",
        aspectRatio: "1",
        border: "1px solid",
        borderColor: isSel ? "var(--c-primary)" : "transparent",
        background: isSel ? "var(--c-primary)" : "transparent",
        color: isSel ? "var(--c-on-primary)" : isDisabled ? "var(--c-text-subtle)" : "var(--c-text)",
        opacity: isPast ? 0.35 : 1,
        cursor: isDisabled ? "not-allowed" : "pointer",
        borderRadius: "var(--radius-control)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        textDecoration: isFull ? "line-through" : "none",
        transition: "background var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)"
      }
    }, d.getDate());
  })));
}
function startOfMonth(d) {
  const x = new Date(d);
  return new Date(x.getFullYear(), x.getMonth(), 1);
}
function stripTime(d) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}
Object.assign(__ds_scope, { DatePicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/DatePicker.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/LanguageSwitcher.jsx
try { (() => {
/**
 * Hearth Studio — LanguageSwitcher (Hospitality)
 * Compact segmented control for site language. Controlled or uncontrolled.
 */
function LanguageSwitcher({
  langs = [["zh", "中"], ["en", "EN"]],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(defaultValue ?? langs[0][0]);
  const current = value ?? internal;
  const pick = code => {
    if (value === undefined) setInternal(code);
    if (onChange) onChange(code);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": "Language",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 2,
      padding: 2,
      border: "1px solid var(--c-border-strong)",
      borderRadius: "var(--radius-control)",
      background: "var(--c-surface)",
      ...style
    }
  }, langs.map(([code, label]) => {
    const on = current === code;
    return /*#__PURE__*/React.createElement("button", {
      key: code,
      onClick: () => pick(code),
      "aria-pressed": on,
      style: {
        border: "none",
        cursor: "pointer",
        padding: "0.28rem 0.7rem",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--fw-semibold)",
        color: on ? "var(--c-on-primary)" : "var(--c-text-muted)",
        background: on ? "var(--c-primary)" : "transparent",
        borderRadius: "calc(var(--radius-control) - 1px)",
        transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out)"
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { LanguageSwitcher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/LanguageSwitcher.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/StatusBadge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Hearth Studio — StatusBadge (Hospitality)
 * Availability / lifecycle state across all three interaction modes:
 * Reservation (訂位), Booking (訂房), Pre-order & Pickup (預訂取貨).
 * Bilingual labels baked in; pass `label` to override.
 */
const STATUS = {
  // ── Generic / Reservation (訂位) ──
  available: {
    tone: "success",
    dot: true,
    label: "可預約 Available"
  },
  limited: {
    tone: "warning",
    dot: true,
    label: "僅剩少量 Limited"
  },
  soldout: {
    tone: "danger",
    dot: false,
    label: "售完 Sold out"
  },
  full: {
    tone: "danger",
    dot: false,
    label: "額滿 Fully booked"
  },
  comingsoon: {
    tone: "info",
    dot: false,
    label: "即將開放 Coming soon"
  },
  confirmed: {
    tone: "success",
    dot: true,
    label: "已確認 Confirmed"
  },
  cancelled: {
    tone: "danger",
    dot: false,
    label: "已取消 Cancelled"
  },
  // ── Booking (訂房) ──
  bookable: {
    tone: "success",
    dot: true,
    label: "可訂房 Available"
  },
  checkedin: {
    tone: "info",
    dot: true,
    label: "已入住 Checked in"
  },
  // ── Pre-order & Pickup (預訂取貨) ──
  accepting: {
    tone: "success",
    dot: true,
    label: "接受預訂中 Accepting orders"
  },
  almostfull: {
    tone: "warning",
    dot: true,
    label: "名額將滿 Almost full"
  },
  closed: {
    tone: "neutral",
    dot: false,
    label: "預訂截止 Orders closed"
  },
  making: {
    tone: "info",
    dot: true,
    label: "製作中 In the oven"
  },
  ready: {
    tone: "success",
    dot: false,
    label: "可取貨 Ready for pickup"
  },
  done: {
    tone: "neutral",
    dot: false,
    label: "已完成 Completed"
  },
  whilestockslast: {
    tone: "warning",
    dot: false,
    label: "售完即止 While stocks last"
  }
};
function StatusBadge({
  status = "available",
  label,
  solid,
  style = {},
  ...rest
}) {
  const s = STATUS[status] || STATUS.available;
  const tones = {
    neutral: ["var(--c-surface-2)", "var(--c-text-muted)", "var(--c-text-muted)"],
    success: ["var(--c-success-bg)", "var(--c-success)", "var(--c-success)"],
    warning: ["var(--c-warning-bg)", "var(--c-warning)", "var(--c-warning)"],
    danger: ["var(--c-danger-bg)", "var(--c-danger)", "var(--c-danger)"],
    info: ["var(--c-info-bg)", "var(--c-info)", "var(--c-info)"]
  };
  const [bg, fg, solidBg] = tones[s.tone];
  const useSolid = solid ?? (status === "soldout" || status === "full");
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.25rem 0.65rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "0.04em",
      lineHeight: 1.5,
      color: useSolid ? "#fff" : fg,
      background: useSolid ? solidBg : bg,
      borderRadius: "var(--radius-control)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), s.dot && !useSolid ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: "currentColor"
    }
  }) : null, label ?? s.label);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/booking/BookingForm.jsx
try { (() => {
/**
 * Hearth Studio — BookingForm 訂房流程 (Booking)
 * Hotel / B&B booking: 入住日–退房日 (date range) · 房型 · 人數 · contact.
 * Computes nights and total. Confirms into a 已確認 state.
 * (Variant skeleton — wire room availability + pricing per property.)
 */
function BookingForm({
  rooms = [{
    id: "std",
    name: "標準雙人房",
    note: "1 大床 · 25㎡",
    price: 4200,
    status: "bookable"
  }, {
    id: "dlx",
    name: "豪華景觀房",
    note: "1 大床 · 32㎡ · 城景",
    price: 5800,
    status: "bookable"
  }, {
    id: "suite",
    name: "閣樓套房",
    note: "1 大床 + 客廳 · 48㎡",
    price: 8800,
    status: "soldout"
  }],
  fullDates = [],
  maxGuests = 4,
  onSubmit,
  style = {}
}) {
  const [range, setRange] = React.useState({
    start: null,
    end: null
  });
  const [room, setRoom] = React.useState(rooms.find(r => r.status !== "soldout")?.id);
  const [guests, setGuests] = React.useState(2);
  const [name, setName] = React.useState("");
  const [done, setDone] = React.useState(null);
  const nights = range.start && range.end ? Math.round((range.end - range.start) / 86400000) : 0;
  const roomObj = rooms.find(r => r.id === room);
  const total = roomObj && nights ? roomObj.price * nights : 0;
  const fmt = d => d ? `${d.getMonth() + 1}/${d.getDate()}` : "—";
  const canSubmit = nights > 0 && room && name.trim();
  const submit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    const booking = {
      range,
      nights,
      room: roomObj,
      guests,
      name: name.trim(),
      total
    };
    setDone(booking);
    onSubmit && onSubmit(booking);
  };
  const stepBtn = {
    width: 36,
    height: "var(--control-h)",
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    cursor: "pointer",
    fontSize: "1.1rem",
    color: "var(--c-text-muted)",
    borderRadius: "var(--radius-control)"
  };
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
      status: "confirmed"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h2)",
        margin: 0,
        color: "var(--c-text)"
      }
    }, done.name, "\uFF0C\u8A02\u623F\u5DF2\u78BA\u8A8D"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-muted)"
      }
    }, done.room.name, " \xB7 ", fmt(done.range.start), "\u2013", fmt(done.range.end), " \xB7 ", done.nights, " \u665A \xB7 ", done.guests, " \u4F4D \xB7 NT$", done.total), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setDone(null)
    }, "\u4FEE\u6539\u8A02\u623F")));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "\u5165\u4F4F \u2014 \u9000\u623F \xB7 Stay dates"), /*#__PURE__*/React.createElement(__ds_scope.DateRangePicker, {
    value: range,
    onChange: setRange,
    fullDates: fullDates,
    months: 1
  }), nights ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "0.6rem",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)"
    }
  }, fmt(range.start), " \u2192 ", fmt(range.end), " \xB7 \u5171 ", nights, " \u665A") : null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "\u623F\u578B \xB7 Room type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, rooms.map(r => {
    const out = r.status === "soldout";
    const on = room === r.id;
    return /*#__PURE__*/React.createElement("button", {
      key: r.id,
      type: "button",
      disabled: out,
      onClick: () => setRoom(r.id),
      "aria-pressed": on,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.9rem",
        textAlign: "left",
        padding: "0.7rem 0.9rem",
        cursor: out ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)",
        background: on ? "var(--c-surface-2)" : "transparent",
        opacity: out ? 0.6 : 1,
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.98rem",
        fontWeight: "var(--fw-semibold)",
        color: "var(--c-text)"
      }
    }, r.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--c-text-subtle)"
      }
    }, r.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-h4)",
        color: "var(--c-accent)"
      }
    }, "NT$", r.price), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
      status: out ? "soldout" : "bookable"
    }));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Label, null, "\u4EBA\u6578 \xB7 Guests"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setGuests(Math.max(1, guests - 1)),
    "aria-label": "\u2212"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 26,
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)"
    }
  }, guests), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setGuests(Math.min(maxGuests, guests + 1)),
    "aria-label": "+"
  }, "+"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "\u59D3\u540D \xB7 Name",
    placeholder: "\u738B\u5C0F\u660E",
    value: name,
    onChange: e => setName(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      color: "var(--c-text-muted)"
    }
  }, nights ? /*#__PURE__*/React.createElement(React.Fragment, null, "\u5408\u8A08 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h3)",
      color: "var(--c-accent)"
    }
  }, "NT$", total), " \xB7 ", nights, " \u665A") : "請選擇入住日期"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    disabled: !canSubmit
  }, "\u78BA\u8A8D\u8A02\u623F \xB7 Confirm booking")));
}
function Label({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: "0.6rem"
    }
  }, children);
}
Object.assign(__ds_scope, { BookingForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/booking/BookingForm.jsx", error: String((e && e.message) || e) }); }

// components/hospitality/ReservationForm.jsx
try { (() => {
/**
 * Hearth Studio — ReservationForm (Hospitality)
 * Full booking flow: date (calendar) · party size · time slot · notes.
 * Shows a confirmed state on submit. Reads only semantic tokens.
 */
function ReservationForm({
  times = ["12:00", "12:30", "18:00", "18:30", "19:00", "20:00"],
  fullDates = [],
  fullTimes = [],
  maxParty = 8,
  onSubmit,
  style = {}
}) {
  const [date, setDate] = React.useState(null);
  const [party, setParty] = React.useState(2);
  const [time, setTime] = React.useState(null);
  const [name, setName] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [done, setDone] = React.useState(null);
  const fmt = d => d ? `${d.getMonth() + 1}/${d.getDate()}` : "—";
  const canSubmit = date && time && name.trim();
  const submit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    const booking = {
      date,
      party,
      time,
      name: name.trim(),
      notes
    };
    setDone(booking);
    onSubmit && onSubmit(booking);
  };
  const stepBtn = {
    width: 38,
    height: "var(--control-h)",
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    cursor: "pointer",
    fontSize: "1.15rem",
    color: "var(--c-text-muted)",
    borderRadius: "var(--radius-control)"
  };
  if (done) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
      status: "confirmed"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h2)",
        margin: 0,
        color: "var(--c-text)"
      }
    }, done.name, "\uFF0C\u5DF2\u70BA\u60A8\u4FDD\u7559\u5EA7\u4F4D"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-muted)"
      }
    }, fmt(done.date), " \xB7 ", done.time, " \xB7 ", done.party, " \u4F4D\u3002\u78BA\u8A8D\u4FE1\u5C07\u5BC4\u81F3\u60A8\u7684\u4FE1\u7BB1\u3002"), done.notes ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-subtle)",
        fontSize: "var(--text-sm)"
      }
    }, "\u5099\u8A3B\uFF1A", done.notes) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setDone(null)
    }, "\u4FEE\u6539\u8A02\u4F4D")));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      fontFamily: "var(--font-body)",
      display: "grid",
      gridTemplateColumns: "auto 1fr",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u9078\u64C7\u65E5\u671F \xB7 Date"), /*#__PURE__*/React.createElement(__ds_scope.DatePicker, {
    value: date,
    onChange: setDate,
    fullDates: fullDates
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-stack)",
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u4EBA\u6578 \xB7 Party size"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.6rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setParty(Math.max(1, party - 1)),
    "aria-label": "Fewer"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 28,
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)"
    }
  }, party), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setParty(Math.min(maxParty, party + 1)),
    "aria-label": "More"
  }, "+"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginLeft: "0.25rem"
    }
  }, "\u6700\u591A ", maxParty, " \u4F4D"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u6642\u6BB5 \xB7 Time"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.5rem"
    }
  }, times.map(t => {
    const isFull = fullTimes.includes(t);
    const on = time === t;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      type: "button",
      disabled: isFull,
      onClick: () => setTime(t),
      style: {
        padding: "0.4rem 0.8rem",
        cursor: isFull ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--fw-medium)",
        color: on ? "var(--c-on-primary)" : isFull ? "var(--c-text-subtle)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)",
        textDecoration: isFull ? "line-through" : "none",
        transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out)"
      }
    }, t);
  }))), /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "\u59D3\u540D \xB7 Name",
    placeholder: "\u738B\u5C0F\u660E",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FieldLabel, null, "\u9700\u6C42\u5099\u8A3B \xB7 Notes"), /*#__PURE__*/React.createElement("textarea", {
    value: notes,
    onChange: e => setNotes(e.target.value),
    rows: 2,
    placeholder: "\u9AD8\u8173\u6905\u3001\u904E\u654F\u539F\u3001\u6176\u751F\u2026",
    style: {
      width: "100%",
      resize: "vertical",
      padding: "0.6rem 0.9rem",
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      color: "var(--c-text)",
      background: "var(--c-surface)",
      border: "1px solid var(--c-border-strong)",
      borderRadius: "var(--radius-control)",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    full: true,
    disabled: !canSubmit
  }, "\u78BA\u8A8D\u8A02\u4F4D \xB7 Confirm")));
}
function FieldLabel({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      marginBottom: "0.5rem",
      letterSpacing: "0.01em"
    }
  }, children);
}
Object.assign(__ds_scope, { ReservationForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/hospitality/ReservationForm.jsx", error: String((e && e.message) || e) }); }

// components/media/Gallery.jsx
try { (() => {
/**
 * Hearth Studio — Gallery (Media)
 * Large main image with a thumbnail strip. Click/keyboard to switch.
 * Images adopt the theme photo tone. Accepts URLs or custom nodes.
 */
function Gallery({
  images = [],
  // [{ src?, node?, label?, alt? }]
  ratio = "4 / 3",
  thumbs = true,
  start = 0,
  style = {}
}) {
  const [i, setI] = React.useState(start);
  const cur = images[i] || {};
  const renderMedia = (img, main) => img.node ? img.node : img.src ? /*#__PURE__*/React.createElement("img", {
    src: img.src,
    alt: img.alt || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "var(--photo-filter)"
    }
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    label: img.label,
    main: main
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: ratio,
      overflow: "hidden",
      background: "var(--photo-bg)",
      borderRadius: "var(--radius-card)"
    }
  }, renderMedia(cur, true), images.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 10,
      right: 12,
      display: "flex",
      gap: 5
    }
  }, images.map((_, n) => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: n === i ? "var(--c-on-accent)" : "color-mix(in oklab, var(--c-on-accent) 45%, transparent)"
    }
  }))) : null), thumbs && images.length > 1 ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, images.map((img, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    type: "button",
    onClick: () => setI(n),
    "aria-label": `View image ${n + 1}`,
    "aria-pressed": n === i,
    style: {
      width: 72,
      height: 56,
      padding: 0,
      overflow: "hidden",
      cursor: "pointer",
      background: "var(--photo-bg)",
      borderRadius: "var(--radius-control)",
      border: `2px solid ${n === i ? "var(--c-accent)" : "transparent"}`,
      opacity: n === i ? 1 : 0.7,
      transition: "opacity var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)"
    }
  }, renderMedia(img, false)))) : null);
}
function Placeholder({
  label,
  main
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "var(--photo-filter)"
    }
  }, main && label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontSize: "var(--text-h4)",
      color: "rgba(255,255,255,.85)"
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Gallery });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Gallery.jsx", error: String((e && e.message) || e) }); }

// components/media/InstagramEmbed.jsx
try { (() => {
/**
 * Hearth Studio — InstagramEmbed (Media)
 * A branded IG feed block: handle header, a grid of post tiles (placeholder or
 * real image URLs), and a follow CTA. For shops where IG is the main channel.
 */
function InstagramEmbed({
  handle = "@studio",
  caption = "",
  posts = [],
  // [{ src?, label?, alt? }] — 6–9 recommended
  profileUrl = "#",
  columns = 3,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "1rem",
      marginBottom: "var(--space-4)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "var(--c-primary)",
      color: "var(--c-on-primary)",
      fontFamily: "var(--font-heading)",
      fontSize: "1.1rem"
    }
  }, handle.replace(/^@/, "").slice(0, 1).toUpperCase()), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "0.95rem",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)"
    }
  }, handle), caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, caption) : null)), /*#__PURE__*/React.createElement("a", {
    href: profileUrl,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "0.45rem 1rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-on-primary)",
      background: "var(--c-primary)",
      borderRadius: "var(--radius-control)",
      textDecoration: "none"
    }
  }, "\u8FFD\u8E64 \xB7 Follow")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "var(--space-2)"
    }
  }, posts.map((p, n) => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: profileUrl,
    target: "_blank",
    rel: "noreferrer",
    style: {
      position: "relative",
      aspectRatio: "1",
      overflow: "hidden",
      background: "var(--photo-bg)",
      display: "block"
    }
  }, p.src ? /*#__PURE__*/React.createElement("img", {
    src: p.src,
    alt: p.alt || "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block",
      filter: "var(--photo-filter)"
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      filter: "var(--photo-filter)",
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontSize: "var(--text-sm)",
      color: "rgba(255,255,255,.8)"
    }
  }, p.label || "")))));
}
Object.assign(__ds_scope, { InstagramEmbed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/InstagramEmbed.jsx", error: String((e && e.message) || e) }); }

// components/media/MapEmbed.jsx
try { (() => {
/**
 * Hearth Studio — MapEmbed (Media)
 * A framed location block: a stylised placeholder map with a pin, an address
 * overlay card, and a link out to Google Maps. Swap `embedSrc` for a real
 * <iframe> map in production. Theme-driven.
 */
function MapEmbed({
  address = "",
  addressEn = "",
  note = "",
  mapsUrl = "#",
  embedSrc = null,
  height = 360,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height,
      overflow: "hidden",
      borderRadius: "var(--radius-card)",
      border: "1px solid var(--c-border)",
      background: "var(--c-surface-2)",
      ...style
    }
  }, embedSrc ? /*#__PURE__*/React.createElement("iframe", {
    title: "map",
    src: embedSrc,
    style: {
      width: "100%",
      height: "100%",
      border: 0,
      filter: "var(--photo-filter)"
    },
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement(PlaceholderMap, null), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-5)",
      bottom: "var(--space-5)",
      maxWidth: 320,
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--space-4)",
      boxShadow: "var(--shadow-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--c-accent)",
      marginBottom: 6
    }
  }, "Find us \xB7 \u4F86\u8A2A"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)",
      letterSpacing: "var(--tracking-heading)"
    }
  }, address), addressEn ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginTop: 2
    }
  }, addressEn) : null, note ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)",
      marginTop: 8
    }
  }, note) : null, /*#__PURE__*/React.createElement("a", {
    href: mapsUrl,
    target: "_blank",
    rel: "noreferrer",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      marginTop: 12,
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-accent)",
      textDecoration: "none"
    }
  }, "\u5728 Google \u5730\u5716\u958B\u555F \u2192")));
}
function PlaceholderMap() {
  // simple stylised map: soft blocks + a pin, all in theme tones
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      filter: "var(--photo-filter)"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "100%",
    height: "100%",
    preserveAspectRatio: "xMidYMid slice",
    viewBox: "0 0 600 360",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "600",
    height: "360",
    fill: "var(--c-surface-2)"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "var(--c-border-strong)",
    strokeWidth: "6",
    fill: "none",
    opacity: "0.7"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M-20 90 H620"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 250 H620"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M160 -20 V380"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M430 -20 V380"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M-20 170 L260 170 L320 230 L620 230",
    strokeWidth: "10",
    stroke: "var(--c-accent)",
    opacity: "0.5"
  })), /*#__PURE__*/React.createElement("g", {
    fill: "var(--c-border)",
    opacity: "0.5"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "110",
    width: "90",
    height: "110"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "190",
    y: "30",
    width: "210",
    height: "40"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "460",
    y: "110",
    width: "110",
    height: "110"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "190",
    y: "270",
    width: "210",
    height: "70"
  })), /*#__PURE__*/React.createElement("g", {
    transform: "translate(300 175)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "26",
    fill: "var(--c-primary)",
    opacity: "0.14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 -22 C12 -22 20 -13 20 -2 C20 12 0 26 0 26 C0 26 -20 12 -20 -2 C-20 -13 -12 -22 0 -22 Z",
    fill: "var(--c-accent)"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "-2",
    r: "6",
    fill: "var(--c-surface)"
  }))));
}
Object.assign(__ds_scope, { MapEmbed });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/MapEmbed.jsx", error: String((e && e.message) || e) }); }

// components/preorder/DropCard.jsx
try { (() => {
/**
 * Hearth Studio — DropCard 「下次出爐」公告卡 (Pre-order & Pickup)
 * Announces the next bake/drop: date, planned items, when ordering opens,
 * and a live countdown to the order cutoff. For shops that run on 檔期 (drops)
 * rather than a fixed menu.
 */
function DropCard({
  title = "下次出爐",
  dropDate,
  // display string, e.g. "6 / 21（六）"
  items = [],
  // planned items: string[] or {name, note}[]
  openText,
  // e.g. "6/18 20:00 開放預訂"
  cutoff,
  // datetime → countdown to order cutoff
  status = "accepting",
  // accepting | closed | comingsoon
  onOrder,
  style = {}
}) {
  const closed = status === "closed";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      padding: "var(--pad-card)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "1rem"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--c-accent)"
    }
  }, title, " \xB7 Next drop"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-heading)",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h2)",
      color: "var(--c-text)",
      marginTop: "0.35rem",
      lineHeight: 1.05
    }
  }, dropDate)), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
    status: status
  })), items.length ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginBottom: "0.5rem"
    }
  }, "\u9810\u8A08\u54C1\u9805 \xB7 On the bench"), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "0.4rem"
    }
  }, items.map((it, i) => {
    const name = typeof it === "string" ? it : it.name;
    const note = typeof it === "string" ? null : it.note;
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "baseline",
        gap: "0.6rem",
        fontFamily: "var(--font-body)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        borderRadius: 999,
        background: "var(--c-accent)",
        flexShrink: 0,
        transform: "translateY(-2px)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.95rem",
        color: "var(--c-text)",
        fontWeight: "var(--fw-medium)"
      }
    }, name), note ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-sm)",
        color: "var(--c-text-subtle)"
      }
    }, note) : null);
  }))) : null, cutoff && !closed ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--c-border)",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-muted)",
      marginBottom: "0.5rem"
    }
  }, "\u8DDD\u96E2\u9810\u8A02\u622A\u6B62\u9084\u6709"), /*#__PURE__*/React.createElement(__ds_scope.Countdown, {
    to: cutoff,
    compact: true
  })) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0.75rem",
      marginTop: "auto"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, openText), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: closed ? "outline" : "primary",
    size: "sm",
    disabled: closed,
    onClick: onOrder
  }, closed ? "預訂已截止" : "線上預訂")));
}
Object.assign(__ds_scope, { DropCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/preorder/DropCard.jsx", error: String((e && e.message) || e) }); }

// components/preorder/PickupSlotPicker.jsx
try { (() => {
/**
 * Hearth Studio — PickupSlotPicker (Pre-order & Pickup)
 * Time-RANGE slot selector for pickup windows (e.g. 09:00–11:00). Each slot
 * may carry capacity state: available / almostfull / full. Theme-driven.
 */
function PickupSlotPicker({
  slots = [{
    range: "09:00–11:00",
    state: "available"
  }, {
    range: "11:00–13:00",
    state: "almostfull"
  }, {
    range: "14:00–16:00",
    state: "available"
  }, {
    range: "17:00–19:00",
    state: "full"
  }],
  value,
  onChange,
  columns = 2,
  style = {}
}) {
  const stateMeta = {
    available: {
      note: "可預訂",
      color: "var(--c-success)"
    },
    almostfull: {
      note: "名額將滿",
      color: "var(--c-warning)"
    },
    full: {
      note: "已額滿",
      color: "var(--c-text-subtle)"
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "0.6rem",
      ...style
    }
  }, slots.map(s => {
    const isFull = s.state === "full";
    const on = value === s.range;
    const meta = stateMeta[s.state] || stateMeta.available;
    return /*#__PURE__*/React.createElement("button", {
      key: s.range,
      type: "button",
      disabled: isFull,
      onClick: () => onChange && onChange(s.range),
      "aria-pressed": on,
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "0.2rem",
        padding: "0.6rem 0.85rem",
        textAlign: "left",
        cursor: isFull ? "not-allowed" : "pointer",
        fontFamily: "var(--font-body)",
        color: on ? "var(--c-on-primary)" : isFull ? "var(--c-text-subtle)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)",
        opacity: isFull ? 0.6 : 1,
        transition: "background var(--dur-1) var(--ease-out), color var(--dur-1) var(--ease-out), border-color var(--dur-1) var(--ease-out)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "0.95rem",
        fontWeight: "var(--fw-semibold)",
        fontVariantNumeric: "tabular-nums",
        textDecoration: isFull ? "line-through" : "none"
      }
    }, s.range), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: on ? "color-mix(in oklab, var(--c-on-primary) 80%, transparent)" : meta.color
      }
    }, meta.note));
  }));
}
Object.assign(__ds_scope, { PickupSlotPicker });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/preorder/PickupSlotPicker.jsx", error: String((e && e.message) || e) }); }

// components/preorder/PreorderForm.jsx
try { (() => {
/**
 * Hearth Studio — PreorderForm 預訂取貨流程 (Pre-order & Pickup)
 * The full flow for drop-based / takeaway / artisan shops:
 *   檔期 drop → 品項 + 數量 → 取貨日期 → 取貨時段 → 取貨方式 → confirm.
 * No dine-in. Confirms into a 製作中 (in-the-oven) state.
 */
function PreorderForm({
  drops = [{
    id: "w26",
    label: "本週檔期",
    sub: "6/21（六）出爐"
  }, {
    id: "w27",
    label: "下週檔期",
    sub: "6/28（六）出爐"
  }],
  items = [{
    id: "croissant",
    name: "深夜可頌",
    price: 95,
    note: "27 層奶油"
  }, {
    id: "rye",
    name: "裸麥酸種",
    price: 180,
    note: "天然酵母"
  }, {
    id: "cinnamon",
    name: "焦糖肉桂卷",
    price: 110,
    note: "現烤淋醬"
  }],
  pickupSlots,
  pickupMethods = [{
    id: "self",
    label: "自取",
    note: "門市取貨"
  }, {
    id: "delivery",
    label: "宅配",
    note: "冷藏宅配，隔日到"
  }, {
    id: "platform",
    label: "外送平台",
    note: "Uber / foodpanda"
  }],
  fullDates = [],
  onSubmit,
  style = {}
}) {
  const [drop, setDrop] = React.useState(drops[0]?.id);
  const [qty, setQty] = React.useState({});
  const [date, setDate] = React.useState(null);
  const [slot, setSlot] = React.useState(null);
  const [method, setMethod] = React.useState(pickupMethods[0]?.id);
  const [name, setName] = React.useState("");
  const [done, setDone] = React.useState(null);
  const setItemQty = (id, d) => setQty(q => ({
    ...q,
    [id]: Math.max(0, (q[id] || 0) + d)
  }));
  const lines = items.filter(it => (qty[it.id] || 0) > 0);
  const count = lines.reduce((n, it) => n + qty[it.id], 0);
  const total = lines.reduce((s, it) => s + qty[it.id] * it.price, 0);
  const selfPickup = method === "self";
  const canSubmit = count > 0 && name.trim() && (!selfPickup || date && slot);
  const submit = e => {
    e.preventDefault();
    if (!canSubmit) return;
    const order = {
      drop,
      lines: lines.map(it => ({
        ...it,
        qty: qty[it.id]
      })),
      count,
      total,
      date,
      slot,
      method,
      name: name.trim()
    };
    setDone(order);
    onSubmit && onSubmit(order);
  };
  const stepBtn = {
    width: 32,
    height: 32,
    border: "1px solid var(--c-border-strong)",
    background: "var(--c-surface)",
    cursor: "pointer",
    fontSize: "1.05rem",
    color: "var(--c-text-muted)",
    borderRadius: "var(--radius-control)"
  };
  if (done) {
    const methodLabel = pickupMethods.find(m => m.id === done.method)?.label;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
      status: "making"
    }), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: "var(--font-heading)",
        fontSize: "var(--text-h2)",
        margin: 0,
        color: "var(--c-text)"
      }
    }, done.name, "\uFF0C\u9810\u8A02\u5DF2\u6536\u5230"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-muted)"
      }
    }, done.count, " \u4EF6 \xB7 NT$", done.total, " \xB7 ", methodLabel, done.method === "self" && done.date ? ` · ${done.date.getMonth() + 1}/${done.date.getDate()} ${done.slot} 取貨` : ""), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        color: "var(--c-text-subtle)",
        fontSize: "var(--text-sm)"
      }
    }, "\u51FA\u7210\u524D\u4E00\u5929\u6703\u4EE5\u7C21\u8A0A\u63D0\u9192\u3002\u53EF\u53D6\u8CA8\u6642\u5C07\u901A\u77E5\u60A8\u3002"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "outline",
      size: "sm",
      onClick: () => setDone(null)
    }, "\u4FEE\u6539\u9810\u8A02")));
  }
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      fontFamily: "var(--font-body)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      ...style
    }
  }, /*#__PURE__*/React.createElement(Section, {
    step: "1",
    label: "\u9078\u64C7\u6A94\u671F \xB7 Choose a drop"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: "0.6rem"
    }
  }, drops.map(d => {
    const on = drop === d.id;
    return /*#__PURE__*/React.createElement("button", {
      key: d.id,
      type: "button",
      onClick: () => setDrop(d.id),
      "aria-pressed": on,
      style: {
        textAlign: "left",
        padding: "0.6rem 0.9rem",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        color: on ? "var(--c-on-primary)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.95rem",
        fontWeight: "var(--fw-semibold)"
      }
    }, d.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-xs)",
        opacity: 0.8
      }
    }, d.sub));
  }))), /*#__PURE__*/React.createElement(Section, {
    step: "2",
    label: "\u54C1\u9805\u8207\u6578\u91CF \xB7 Items"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "0.5rem"
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.9rem",
      padding: "0.55rem 0",
      borderBottom: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "0.98rem",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)"
    }
  }, it.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)"
    }
  }, it.note, " \xB7 NT$", it.price)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.5rem"
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setItemQty(it.id, -1),
    "aria-label": "\u2212"
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: 22,
      textAlign: "center",
      fontFamily: "var(--font-heading)",
      fontSize: "var(--text-h4)",
      color: "var(--c-text)"
    }
  }, qty[it.id] || 0), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: stepBtn,
    onClick: () => setItemQty(it.id, +1),
    "aria-label": "+"
  }, "+")))))), /*#__PURE__*/React.createElement(Section, {
    step: "3",
    label: "\u53D6\u8CA8\u65B9\u5F0F \xB7 Pickup"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "0.6rem"
    }
  }, pickupMethods.map(m => {
    const on = method === m.id;
    return /*#__PURE__*/React.createElement("button", {
      key: m.id,
      type: "button",
      onClick: () => setMethod(m.id),
      "aria-pressed": on,
      style: {
        textAlign: "left",
        padding: "0.6rem 0.85rem",
        cursor: "pointer",
        fontFamily: "var(--font-body)",
        color: on ? "var(--c-on-primary)" : "var(--c-text)",
        background: on ? "var(--c-primary)" : "transparent",
        border: `1px solid ${on ? "var(--c-primary)" : "var(--c-border-strong)"}`,
        borderRadius: "var(--radius-control)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "0.95rem",
        fontWeight: "var(--fw-semibold)"
      }
    }, m.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: "var(--text-xs)",
        opacity: 0.8
      }
    }, m.note));
  }))), selfPickup ? /*#__PURE__*/React.createElement(Section, {
    step: "4",
    label: "\u53D6\u8CA8\u65E5\u671F\u8207\u6642\u6BB5 \xB7 Date & time"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      flexWrap: "wrap",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.DatePicker, {
    value: date,
    onChange: setDate,
    fullDates: fullDates
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PickupSlotPicker, {
    value: slot,
    onChange: setSlot,
    slots: pickupSlots
  })))) : null, /*#__PURE__*/React.createElement(Section, {
    step: selfPickup ? "5" : "4",
    label: "\u806F\u7D61\u8CC7\u8A0A \xB7 Contact"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--gap-stack)",
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    label: "\u59D3\u540D \xB7 Name",
    placeholder: "\u738B\u5C0F\u660E",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      padding: "0.5rem 0",
      borderTop: "1px solid var(--c-border)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--c-text-muted)"
    }
  }, count, " \u4EF6\u5408\u8A08"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-heading)",
      fontStyle: "italic",
      fontWeight: "var(--fw-semibold)",
      fontSize: "var(--text-h3)",
      color: "var(--c-accent)"
    }
  }, "NT$", total)), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    type: "submit",
    variant: "primary",
    full: true,
    disabled: !canSubmit
  }, "\u9001\u51FA\u9810\u8A02 \xB7 Place pre-order"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-xs)",
      color: "var(--c-text-subtle)",
      textAlign: "center"
    }
  }, "\u552E\u5B8C\u5373\u6B62 \xB7 \u9810\u8A02\u622A\u6B62\u5F8C\u4E0D\u518D\u8FFD\u52A0"))));
}
function Section({
  step,
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "0.6rem",
      marginBottom: "0.75rem"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flexShrink: 0,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--fw-bold)",
      color: "var(--c-on-primary)",
      background: "var(--c-primary)",
      borderRadius: "var(--radius-control)"
    }
  }, step), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--c-text)",
      letterSpacing: "0.01em",
      whiteSpace: "nowrap"
    }
  }, label)), children);
}
Object.assign(__ds_scope, { PreorderForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/preorder/PreorderForm.jsx", error: String((e && e.message) || e) }); }

// components/preorder/TodayBoard.jsx
try { (() => {
/**
 * Hearth Studio — TodayBoard 「今日現場供應」公告卡 (Pre-order & Pickup)
 * Live list of what's available at the counter RIGHT NOW (walk-in, no order).
 * Each item shows price + a live availability state. Carries an "as of" time.
 */
function TodayBoard({
  title = "今日現場供應",
  asOf,
  // e.g. "11:20 更新"
  items = [],
  // { name, note, price, state }
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--c-surface)",
      border: "1px solid var(--c-border)",
      borderRadius: "var(--radius-card)",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      padding: "var(--pad-card)",
      paddingBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-label)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--c-accent)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-sm)",
      color: "var(--c-text-subtle)",
      marginTop: "0.3rem"
    }
  }, "\u73FE\u5834\u8CFC\u8CB7 \xB7 walk-in \xA0\xB7\xA0 ", asOf)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      fontFamily: "var(--font-body)",
      fontSize: "var(--text-xs)",
      color: "var(--c-success)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: 999,
      background: "var(--c-success)"
    }
  }), "\u5373\u6642")), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, items.map((it, i) => {
    const out = it.state === "soldout";
    return /*#__PURE__*/React.createElement("li", {
      key: i,
      style: {
        display: "flex",
        alignItems: "center",
        gap: "0.9rem",
        padding: "0.8rem var(--pad-card)",
        borderTop: "1px solid var(--c-border)",
        opacity: out ? 0.55 : 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "0.98rem",
        fontWeight: "var(--fw-semibold)",
        color: "var(--c-text)",
        textDecoration: out ? "line-through" : "none"
      }
    }, it.name), it.note ? /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        color: "var(--c-text-subtle)"
      }
    }, it.note) : null), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-heading)",
        fontStyle: "italic",
        fontWeight: "var(--fw-semibold)",
        fontSize: "var(--text-h4)",
        color: "var(--c-accent)"
      }
    }, it.price), /*#__PURE__*/React.createElement(__ds_scope.StatusBadge, {
      status: it.state || "available"
    }));
  })));
}
Object.assign(__ds_scope, { TodayBoard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/preorder/TodayBoard.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BookingForm = __ds_scope.BookingForm;

__ds_ns.DateRangePicker = __ds_scope.DateRangePicker;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.SkeletonCard = __ds_scope.SkeletonCard;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Countdown = __ds_scope.Countdown;

__ds_ns.DatePicker = __ds_scope.DatePicker;

__ds_ns.LanguageSwitcher = __ds_scope.LanguageSwitcher;

__ds_ns.ReservationForm = __ds_scope.ReservationForm;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Gallery = __ds_scope.Gallery;

__ds_ns.InstagramEmbed = __ds_scope.InstagramEmbed;

__ds_ns.MapEmbed = __ds_scope.MapEmbed;

__ds_ns.DropCard = __ds_scope.DropCard;

__ds_ns.PickupSlotPicker = __ds_scope.PickupSlotPicker;

__ds_ns.PreorderForm = __ds_scope.PreorderForm;

__ds_ns.TodayBoard = __ds_scope.TodayBoard;

})();
