# Design Inspiration — Instagram Reels Analysis

> 整理自 4 支 Instagram Reels，供網站改版設計討論使用
> 更新日期：2026-04-12

---

## REEL 1 — 超完整互動開發者作品集
**來源：** @animmaster_studio｜標題：「Vibecoder's nightmare」  
**互動：** 829 讚 · 846 留言 · 27 轉發

### 整體視覺系統

**色彩系統：**

| 用途 | 顏色 |
|------|------|
| 主背景 | `#050A1A`（極深靛黑，帶藍） |
| 次背景 | `#0A1428`（深海軍藍） |
| 主強調色 | `#00D4FF`（電藍/青色） |
| 次強調色 | `#FFDD00`（黃綠，用於文字高亮） |
| 卡片背景 | `rgba(255,255,255,0.04)` + 1px 藍色邊框 |

**字型風格：**
- Logo：Pixel-Art 風格 `{FMB}`，像程式碼大括號
- 標題：粗體 Sans-serif，白色
- Gradient 文字：黃綠色漸層（`#FFDD00` → `#00FF88`）
- 正文：細 Sans-serif，`#b5b5b5`

### 逐頁面分析

**Hero（首屏）：**
- 左半：坐姿 3D 卡通人物 + 筆電，帶背景浮水印文字
- 右半：技能浮動標籤群（`[Logo] 技能名稱 — XX%`）

```
React       98%   （紫色 logo）
Next.js     85%   （三角形 logo）
Node.js     80%   （綠色球 logo）
Firebase    85%   （橘色火焰 logo）
PostgreSQL  75%   （大象 logo）
MySQL       46%   （海豚 logo，附 toggle 切換）
PHP         75%   （紫色 logo）
```

背景粒子：數十個白色亮點散佈，部分帶微抖動 + 1~2 個彩色光球

Navbar：
```
[{FMB}]  About  Skills  Projects  Testimonials  Contact  [🇬🇧▼]  [☀️]  [Let's Talk]
```

**Skills（服務卡片）：**  
2×2 不對稱 Grid，卡片含：小 icon、標題、副標題、技術 chip 標籤

**About（互動 3D 辦公桌）⭐ 最獨特設計：**  
整個 About 頁面是可點擊、可旋轉視角的 3D 辦公桌場景。

| 物件 | 互動功能 |
|------|----------|
| 筆電（閉合） | 點擊 → 顯示技術棧 |
| 桌上螢幕 | 點擊 → 播放影片/推薦語 |
| 獎盃 | 點擊 → 顯示獲獎紀錄 |
| 網路攝影機 | 點擊 → 顯示聯絡資訊 |

技術：Three.js WebGL + `Raycasting` + `OrbitControls`

**Projects（水平捲軸）：**  
極大號加粗 Serif 字填滿卡片，最後一個字母以 3D 立體字效果溢出卡片邊緣 → 引發好奇心驅動滑動探索

**Contact：**  
- 標題：`"Let's build something"`（"something" 用黃綠漸層顯示）
- 右上角：`8 min`（平均回覆時間，增加信任感）

### 核心 CSS 技術：漸層流動文字

```css
.shimmer-text {
  background: linear-gradient(
    120deg,
    #b5b5b5 0%,
    #ffffff 40%,  /* 亮點位置 */
    #b5b5b5 60%,
    #b5b5b5 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}

@keyframes shimmer {
  to { background-position: 200% center; }
}
```

---

## REEL 2 — Figma 動畫四技術合集
**來源：** @neuwebstudio  
**互動：** 4,378 讚 · 1,209 留言 · 108 轉發

### 動畫技術 A — Parallax Storytelling（Everbloom 香水品牌）

**視覺設計：**
- 背景色：淡黃綠色 `#D8E8C0`（植物感、有機）
- Hero 視差層次（由後到前）：
  1. 最底層：淡色背景
  2. 第二層：香水瓶主體
  3. 第三層：花卉元素（不同速度移動）
  4. 最前層：文字（最慢或固定）

**動畫邏輯：**  
頁面初始只看到瓶蓋 → 滾動時瓶子從下方緩慢升起（如「拆包禮物」）→ 花卉飛散四周

### 動畫技術 B — 3D Hover Animation（深海潛水主題）

**視覺設計：**
- 全版深海場景：珊瑚礁邊框 + 中央水母（粉紫色發光）
- 岩石隧道形成自然圓形取景框

**3D Hover CSS + JS：**
```css
.card {
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.1s ease-out;
}
```

```javascript
element.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = element.getBoundingClientRect();
  const x = (e.clientX - left) / width - 0.5;
  const y = (e.clientY - top) / height - 0.5;
  element.style.transform = `
    rotateY(${x * 20}deg)
    rotateX(${-y * 20}deg)
  `;
});
```

### 動畫技術 C — Interactive Immersive（魔法森林 RPG）

- 全螢幕魔法森林場景（AI 生成）
- 數十個黃色燈籠懸掛在樹枝間，閃爍光效
- 鼠標移動 → 燈籠輕微搖曳

### 動畫技術 D — Immersive Zoom-in（登山探索品牌）

**最具創意的部分：**  
全屏黑色背景 + 中央圓形洞口（從洞穴內向外看到沙漠黃昏） + 超大 Serif 字 "Discover" 被圖片遮住

```css
.hero-text {
  position: absolute;
  z-index: 1;
  font-size: 25vw;  /* 超大響應式字體 */
}
.hero-image {
  position: absolute;
  z-index: 2;       /* 圖片壓在文字上方 */
  border-radius: 50%;
}
```

進場動畫：洞口從極小放大 + 文字從左右兩側滑入

---

## REEL 3 — WebGL 粒子系統炸裂網站
**來源：** @wearebrand.io｜網站：iGLOO (igloo inc.)  
**互動：** 3,144 讚 · 61 留言 · 40 轉發

### 兩段式載入動畫

**第一階段：Wireframe 骨架**
- 背景：淺灰色 `#C8C8C8`
- Igloo 冰屋的 3D 線框模型 + 破碎幾何立方體散落空間
- 感覺：工業藍圖 + 正在組裝

**第二階段：粒子渲染完成**
- 背景：極深黑色 `#080808`
- 冰屋形狀 Morph 成熊形吉祥物（Point Cloud，數十萬粒子）
- 粒子有細微呼吸式抖動

### 技術棧
```
渲染引擎：Three.js（或 React Three Fiber）
粒子系統：Three.js Points + BufferGeometry
變形動畫：GSAP morphing 或 Shader 頂點插值
後期處理：bloom 光暈（@react-three/postprocessing）
物理感：Simplex Noise 驅動粒子微抖
```

### 設計哲學
捨棄傳統文字+圖片結構，用整個 3D 空間作為品牌語言。黑白灰克制用色讓粒子動態成為唯一焦點。載入動畫本身就是品牌體驗的一部分。

---

## REEL 4 — 科學植物學 × 編輯風格網站
**來源：** @vedant.design.tech｜網站：PHYLUM.01  
**副標：** "A record of nature after design."  
**互動：** 8,233 讚 · 326 留言 · 134 轉發（最高人氣）  
**風格：** Scientific Editorial × Brutalist Web × Botanical Art

### 視覺系統

**色彩：**

| 區塊 | 顏色 |
|------|------|
| Hero（上） | 全彩自然風景攝影 |
| 內容區（下） | 米白/奶油色 `#F5F0E8` |
| 文字 | 深墨黑 `#1A1A1A` |
| 毛玻璃卡片 | `rgba(0,0,0,0.35)` + `backdrop-filter: blur(8px)` |

**字型對比：**
- 主標題：超大 Serif（Playfair Display 風格）
- 導覽：極小 Sans-serif，大字間距
- 裝飾：斜體，部分圓弧排列
- 數字（48\*, 27x）：超大粗體，半透明白

### 導覽列（雙層設計）

第一層（頂部，鏡像對稱）：
```
Contact · Method · Specimens · Archive ·· Archive · Specimens · Method · Contact
```

第二層：
```
[線框地球儀]  Living System  Natural Record  PHYLUM.01  Specimen Index  Adaptive Structures  [線框地球儀]
```

### 最關鍵設計元素：有機波浪邊框

Hero 下緣使用 SVG Blob/Wave 形狀分隔（非直線）：
- 白色波浪，左右各有凹陷（像被咬掉一口）
- 中間有 ▼ 引導視線往下

```css
/* SVG Path 裁切法 */
.hero-section {
  clip-path: url(#wave-path);
}

/* Blob 效果（快速版） */
.hero-bottom-edge {
  border-radius: 45% 55% 60% 40% / 35% 45% 55% 65%;
}
```

### 數據浮層卡片（Glassmorphism）

```
┌──────────────────────────────┐
│  48*                         │
│  A modular intelligence      │
│  layer designed for adaptive │
│  interfaces.                 │
└──────────────────────────────┘
```

- 材質：深色半透明 + `backdrop-filter: blur(8px)`
- 數字：超大白色，半透明，與邊緣對齊

### Terrain Systems 內容區

三欄架構（左數字列 ＋ 中央主體 ＋ 右數字列）  
左右欄各有 9 行分類命名 + 線框植物/幾何插圖

### 裝飾語言（貫穿全頁）

| 符號 | 用途 |
|------|------|
| `▲` | 行間分隔 |
| `▼` | 引導視線 |
| `◆` | 重點強調 |
| `·` | 列表標記 |
| `+` | 網格交叉點 |
| `···` | 段落結尾 |

---

## 綜合設計洞察

### 全部 4 個 Reels 的共同主題

1. **沉浸感優先**：所有設計都盡量填滿螢幕，用戶進入就像進入另一個世界
2. **動態是核心**：靜態截圖只有 30% 的效果，精髓在動畫過渡和懸停反饋
3. **主視覺搶眼**：Hero 無一例外有衝擊力的主視覺，絕不依賴純色背景
4. **技術即設計**：CSS/WebGL 技術本身被設計成可見的視覺表達

### 難度 × 效果 × 適合度矩陣

| 技術 | 開發難度 | 視覺衝擊 | 適合我們的網站？ | 優先順序 |
|------|----------|----------|-----------------|----------|
| 漸層流動文字 | ⭐ | ⭐⭐⭐ | ✅ 非常適合 | 🔴 立刻可做 |
| SVG Blob 有機邊框 | ⭐⭐ | ⭐⭐⭐⭐ | ✅ 非常適合 | 🔴 立刻可做 |
| Glassmorphism 數據卡 | ⭐⭐ | ⭐⭐⭐ | ✅ 非常適合 | 🔴 立刻可做 |
| 3D Card Hover 效果 | ⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ 適合 | 🟡 短期目標 |
| Parallax 視差捲軸 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ 適合 | 🟡 短期目標 |
| Immersive Zoom-in | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⚠️ 視內容而定 | 🟠 中期目標 |
| 3D 可旋轉場景（桌子） | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⚠️ 需大量資源 | 🔵 長期野心 |
| WebGL 粒子系統 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⚠️ 需大量資源 | 🔵 長期野心 |

### 可以「明天就做」的三件事
1. 把標題文字換成 Gradient Shimmer 動畫（純 CSS，10 分鐘）→ **已實作**
2. 把分區之間加入波浪分隔線（SVG stroke，30 分鐘）→ **已實作**
3. Hero 數據指標卡加毛玻璃效果（backdrop-filter，20 分鐘）

---

## 實作記錄（feat/design-experiments）

| 日期 | 實作項目 | 狀態 | 備註 |
|------|----------|------|------|
| 2026-04-12 | Hero h1 漸層流動動畫（`gradientShimmer`） | ✅ 已完成 | 7s loop，支援 prefers-reduced-motion |
| 2026-04-12 | WaveSep 虛線波浪分隔線 | ✅ 已完成 | dasharray 動畫，金色 0.2 opacity |
| 2026-04-12 | Stat Card 強化（accent 數字 + 頂部光線） | ✅ 已完成 | hover 時頂部金線展開 |
| 2026-04-12 | Achievement Badges emoji 替換 | 🚧 進行中 | emoji → 編輯風格符號 |

### Lung 的 Feedback 紀錄

| 日期 | 反饋 | 處理方式 |
|------|------|----------|
| 2026-04-12 | 「統計的 emoji 感覺有點醜」 | Achievement Badges 的 🧊🦈👥🎯⚡ 換為編輯排版符號 ◆ ▲ ✦ ◇ ▸，accent 色呈現 |
