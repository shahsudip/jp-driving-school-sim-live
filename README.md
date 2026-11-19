# 🚗 Japan Driving School & Gaimen Kirikae 3D Simulator (日本の自動車教習所・外免切替 3Dシミュレーター)

[![Live Website](https://img.shields.io/badge/Live_Demo-GitHub_Pages-059669?style=for-the-badge&logo=github)](https://shahsudip.github.io/jp-driving-school-sim-live/)
[![Study Guide PDF](https://img.shields.io/badge/Study_Guide_PDF-42_Pages_Oct_2025_Format-2563eb?style=for-the-badge&logo=adobeacrobatreader)](https://shahsudip.github.io/jp-driving-school-sim-live/docs/Gaimen_Kirikae_Study_Guide.pdf)

An interactive 3D Japanese Driving School (*自動車教習所 / Kyōshūjo*) and Foreign License Conversion (*外免切替 / Gaimen Kirikae*) practical & written test simulator built with **Three.js + TypeScript + Vite**.

🌐 **Live Simulator URL:** **https://shahsudip.github.io/jp-driving-school-sim-live/**  
📕 **Bundled 42-Page Study Guide PDF:** **[`public/docs/Gaimen_Kirikae_Study_Guide.pdf`](./public/docs/Gaimen_Kirikae_Study_Guide.pdf)** ([Direct Live PDF Link](https://shahsudip.github.io/jp-driving-school-sim-live/docs/Gaimen_Kirikae_Study_Guide.pdf))

---

## ✨ Key Features (主な機能)

### 1. 👨‍✈️ Instructor Passenger-Seat Camera Mode (`助手席・検定員視点`) & 8-Step Pre-Drive Checklist
- Switch to **`👨‍✈️ Instructor / 検定員席`** view to sit in the left front passenger seat of the right-hand-drive (RHD) Toyota Corolla training sedan and watch the **3D Driver Avatar** in real time.
- Verifies that you perform the official Japanese practical exam **Pre-Drive Cockpit Setup in the exact mandatory sequence** (click steps `1`–`8` or press keys `1`–`8`):
  1. **Door Close & Lock (`ドアロック`)**
  2. **Seat Adjustment (`座席調整`)** — *visibly slides the 3D driver seat forward*
  3. **Rearview & Side Mirror Adjustment (`ミラー確認`)** — *3D driver avatar reaches up to touch & align the center mirror*
  4. **Fasten Seatbelt (`シートベルト着用`)** — *latches the 3D red diagonal seatbelt strap & metal buckle across the driver's chest*
  5. **Foot Brake + Gear in P/N + Start Engine (`ブレーキ＋エンジン始動`)**
  6. **Shift to D (or 1st) + Release Handbrake (`ギアD＋サイド解除`)**
  7. **Right Turn Signal (`右ウインカー合図 [E]`)**
  8. **5-Point Mirror & Right Blind-Spot Shoulder Check (`5点安全確認＋右後方目視 [Z/X]`)** — *3D driver avatar visibly rotates head left and right*

### 2. 🚨 Red Error Freeze Screen on Any Japanese Rule Violation (`違反時赤画面ロック＆法令解説`)
- Whenever you break any Japanese driving exam rule (e.g., rolling through a `止まれ` stop sign, failing to stop at a railroad crossing, skipping a blinker or head check, mounting a curb, rolling backward on the hill, failing to yield to a crossing pedestrian, or pulling out without a seatbelt), **the simulator immediately freezes, turns crimson red like an auxiliary brake (`補助ブレーキ`) intervention, and explains**:
  - ❌ **What Rule You Broke** (Japanese & English)
  - ⚖️ **Exact Japanese Road Traffic Act (`道路交通法`) & NPA Practical Exam Standard (`技能試験実施基準`) citation and point deduction**
  - ✅ **How to Pass According to Japanese Standard** (including when to use *Kirikaeshi* `切り返し` corrective reversal)

### 3. 🚶‍♂️ Realistic AI Training Cars, Crossing Pedestrians & Japanese Road Signs
- **AI Training Cars (`他車・教習車`)** circulate along the course lanes, obeying traffic signals and yielding at crosswalks.
- **Animated 3D Pedestrians (`歩行者`)** cross at zebra crosswalks (`横断歩道`), enforcing strict pedestrian priority (`歩行者保護違反 = 一発検定中止`).
- **Authentic 3D Japanese Traffic Signs & Road Markings**:
  - `止まれ (STOP)` inverted red triangle, `徐行 (SLOW)` red-bordered inverted triangle, `40 km/h` speed limit, `横断歩道` blue pentagon crosswalk sign + `◇` 30m/15m approach diamonds, `踏切あり` yellow railway diamond + animated barrier gates & alternating red flashers, `駐車禁止` no-parking sign, and `指定方向外進行禁止` directional sign.

### 4. 📍 Custom Driving Center Route Builder & Memorization Trainer (`コース図ルート作成・暗記トレーナー`)
- Upload a photo or image of your real driving center's test route map (`📷 Upload Route Image`).
- **Auto-Detect Colored Route Lines** (Red / Blue / Green / Orange) or click along the road to place numbered waypoints (`S → 1 → 2 → ... → G`) and stamp 3D `止まれ` Stop Signs, Traffic Signals, and Marker Poles.
- Practice in 3 memorization stages:
  - **📍 Guided Mode (`ガイド表示`)**: 3D glowing ribbon + voice/HUD turn prompts.
  - **🧠 Memory Test (`暗記テスト`)**: Hides the 3D ribbon so you drive from memory and alerts you if you take a wrong turn.
  - **🤖 Auto-Drive Preview (`お手本自動走行`)**: Watch the simulator drive your custom route automatically while obeying every stop sign and traffic signal.

### 5. 📖 Built-in Bilingual Rulebook & Bundled 42-Page Gaimen Kirikae Study Guide PDF
- Click **`📖 Rules & PDF / 教本・標識`** in the top bar to open the 5-tab bilingual study encyclopedia:
  1. **Pre-Drive Cockpit Sequence (`乗車〜発進手順`)**
  2. **Driving Center Compound Rules (`場内コース規則`: S-Curve, Crank, *Kirikaeshi*, Hill Start, Railroad, Parking)**
  3. **Real Public Road Rules (`路上試験・道路交通法`: Pedestrian crosswalks, 3-second lane change vs 30m turn signals, statutory speed limits, mandatory no-parking/no-stopping distances)**
  4. **Visual Japanese Road Signs Encyclopedia (`道路標識図鑑`)**
  5. **Official NPA 100-Point Deduction Table & Direct Link to [`public/docs/Gaimen_Kirikae_Study_Guide.pdf`](./public/docs/Gaimen_Kirikae_Study_Guide.pdf)** (Updated for the **October 2025 New Format: 50 Questions / 90% Pass Rate [45/50]**).

---

## 🎮 Controls (操作方法)

| Key / Control | Action (English) | 操作 (日本語) |
| :--- | :--- | :--- |
| **`W` / `S`** or **`↑` / `↓`** | Throttle / Foot Brake | アクセル ／ フットブレーキ |
| **`A` / `D`** or **`←` / `→`** | Steer Left / Right | 左・右ハンドル操作 |
| **`Q` / `E` / `H`** | Left Blinker / Right Blinker / Hazard | 左ウインカー ／ 右ウインカー ／ ハザード |
| **`Z` / `X`** | Look Left / Look Right (Head Check) | 左目視 ／ 右目視（首振り安全確認） |
| **`1` – `8`** | Execute Pre-Drive Cockpit Steps 1–8 in Order | 乗車〜発進手順 ①〜⑧ を順番に実行 |
| **`Space`** | Toggle Handbrake (or Resume from Red Freeze) | サイドブレーキ解除・作動（違反画面の再開） |
| **`Shift` / `Ctrl`** | Shift Gear Up / Down (`P ↔ R ↔ N ↔ D` or `1–5`) | ギア変更 |
| **`V`** | Cycle Camera (`Chase` → `Cockpit` → `Instructor` → `Hood` → `Free`) | カメラ視点切替（後方・運転席・検定員席・自由） |
| **`O`** | Reset Vehicle to Station Start | 車両を開始位置へリセット |

---

## 🛠️ Local Development & Build (ローカル実行手順)

```bash
# 1. Install dependencies
npm install

# 2. Start live development server (http://localhost:5173/)
npm run dev

# 3. Run unit test suite (Vitest: Physics, Course Geometry, Examiner Rules)
npm test

# 4. Build production bundle into dist/
npm run build
```

---

## 📚 Bundled Books & Study Materials (`public/docs/`)

- **[`public/docs/Gaimen_Kirikae_Study_Guide.pdf`](./public/docs/Gaimen_Kirikae_Study_Guide.pdf)** — *Gaimen Kirikae Written Test Complete Study Guide (Updated for October 2025 New Format: 50 Questions · 90% Pass Rate [45/50], 23 Chapters, 100 Practice Test Questions with Explanations & Quick-Reference Cheat Sheet)*.
