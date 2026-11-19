import type { Locale } from '../types';

export type RulebookTabId = 'predrive' | 'compound' | 'road' | 'signs' | 'written';

interface SignSpec {
  id: string;
  titleJa: string;
  titleEn: string;
  descJa: string;
  descEn: string;
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void;
}

const SIGN_SPECS: SignSpec[] = [
  {
    id: 'tomare',
    titleJa: '一時停止 (止まれ)',
    titleEn: 'Stop (Tomare / 止まれ)',
    descJa: '停止線の直前で車輪を完全に停止（0 km/h・約2秒）させ、左右の安全確認を行わなければなりません。徐行で通過すると一発検定中止（指定場所一時不停止）となります。',
    descEn: 'Mandatory complete 0.0 km/h stop before the white stop line, followed by distinct Left & Right head checks. Rolling stops cause immediate exam failure.',
    draw: (ctx, w, h) => {
      ctx.beginPath();
      ctx.moveTo(12, 16);
      ctx.lineTo(w - 12, 16);
      ctx.lineTo(w / 2, h - 14);
      ctx.closePath();
      ctx.fillStyle = '#d62828';
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.font = 'bold 22px "Noto Sans JP", sans-serif';
      ctx.fillText('止まれ', w / 2, 48);
      ctx.font = 'bold 13px sans-serif';
      ctx.fillText('STOP', w / 2, 68);
    },
  },
  {
    id: 'joko',
    titleJa: '徐行 (Slow Down)',
    titleEn: 'Slow Down (Jokō / 徐行)',
    descJa: 'ブレーキ操作から1m以内（時速10km/h以下目安）で直ちに停止できる速度で進行します。見通しの悪い交差点、曲がり角、上り坂の頂上付近、勾配の急な下り坂では徐行義務があります。',
    descEn: 'Drive at a speed where you can stop immediately (within 1 meter / ≤ 10 km/h). Mandatory at blind intersections, road corners, hill crests, and steep descents.',
    draw: (ctx, w, h) => {
      ctx.beginPath();
      ctx.moveTo(14, 18);
      ctx.lineTo(w - 14, 18);
      ctx.lineTo(w / 2, h - 16);
      ctx.closePath();
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();
      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'center';
      ctx.font = 'bold 20px "Noto Sans JP", sans-serif';
      ctx.fillText('徐 行', w / 2, 48);
      ctx.font = 'bold 11px sans-serif';
      ctx.fillText('SLOW', w / 2, 66);
    },
  },
  {
    id: 'speed40',
    titleJa: '最高速度 (40 km/h)',
    titleEn: 'Maximum Speed Limit (40 km/h)',
    descJa: '指定された最高速度を超えて運転してはいけません。標識がない一般道路の法定最高速度は自動車60km/h、原付30km/hです。',
    descEn: 'Do not exceed 40 km/h. Where no speed sign is posted on ordinary roads, the statutory limit is 60 km/h for cars/motorcycles and 30 km/h for mopeds.',
    draw: (ctx, w, h) => {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 42, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.fill();
      ctx.lineWidth = 11;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();
      ctx.fillStyle = '#0f172a';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 42px sans-serif';
      ctx.fillText('40', w / 2, h / 2 + 2);
    },
  },
  {
    id: 'crosswalk',
    titleJa: '横断歩道 (歩行者優先)',
    titleEn: 'Pedestrian Crosswalk (横断歩道)',
    descJa: '前方に横断歩道があることを示します。手前30mと15mには路面ダイヤ（◇）標示があります。歩行者が渡っている・渡ろうとしている時は必ず停止線手前で一時停止します（違反は一発検定中止）。',
    descEn: 'Indicates a pedestrian crosswalk ahead (preceded by ◇ road diamonds at 30m and 15m). You MUST stop whenever a pedestrian is crossing or waiting to cross.',
    draw: (ctx, w, h) => {
      ctx.beginPath();
      ctx.moveTo(w / 2, 10);
      ctx.lineTo(w - 14, 42);
      ctx.lineTo(w - 20, h - 12);
      ctx.lineTo(20, h - 12);
      ctx.lineTo(14, 42);
      ctx.closePath();
      ctx.fillStyle = '#005bac';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(w / 2, 38, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillRect(w / 2 - 5, 47, 10, 20);
      for (let i = -2; i <= 2; i++) {
        ctx.fillRect(w / 2 - 3 + i * 11, 74, 6, 14);
      }
    },
  },
  {
    id: 'railroad',
    titleJa: '踏切あり (警戒標識)',
    titleEn: 'Railroad Crossing Ahead (踏切あり)',
    descJa: '前方に踏切があることを警告する黄色ダイヤ標識。踏切手前では必ず完全停止し、窓を開けて目と耳で左右の安全を確認し、踏切内では変速（ギアチェンジ）せずに通過します。',
    descEn: 'Yellow warning diamond indicating a railway crossing ahead. Stop completely before the stop line, open window to listen, look Left & Right, and cross without shifting gears.',
    draw: (ctx, w, h) => {
      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(Math.PI / 4);
      ctx.fillStyle = '#f5b800';
      ctx.fillRect(-32, -32, 64, 64);
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#111827';
      ctx.strokeRect(-28, -28, 56, 56);
      ctx.restore();
      ctx.fillStyle = '#111827';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 17px "Noto Sans JP", sans-serif';
      ctx.fillText('踏切', w / 2, h / 2 + 2);
    },
  },
  {
    id: 'noEntry',
    titleJa: '車両進入禁止 (一方通行出口)',
    titleEn: 'No Entry for Vehicles (車両進入禁止)',
    descJa: '一方通行の出口などに設置され、この標識の方向からの車両の進入を全面禁止します。',
    descEn: 'Prohibits vehicles from entering from this direction (commonly placed at the exit of a one-way street).',
    draw: (ctx, w, h) => {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 42, 0, Math.PI * 2);
      ctx.fillStyle = '#d62828';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(w / 2 - 28, h / 2 - 8, 56, 16);
    },
  },
  {
    id: 'noParking',
    titleJa: '駐車禁止 ／ 駐停車禁止',
    titleEn: 'No Parking (駐車禁止) vs No Stopping (駐停車禁止)',
    descJa: '斜線1本は「駐車禁止」（5分以内の荷物の積み下ろしや人の乗降などの停車は可）。バツ印（×）2本は「駐停車禁止」（駐車も停車も両方禁止）。',
    descEn: 'Single red slash = No Parking (brief stopping for passenger pick-up or <5 min cargo loading is allowed). Double X slash = No Parking AND No Stopping.',
    draw: (ctx, w, h) => {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 42, 0, Math.PI * 2);
      ctx.fillStyle = '#005bac';
      ctx.fill();
      ctx.lineWidth = 10;
      ctx.strokeStyle = '#d62828';
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(22, 22);
      ctx.lineTo(w - 22, h - 22);
      ctx.stroke();
    },
  },
  {
    id: 'direction',
    titleJa: '指定方向外進行禁止',
    titleEn: 'Mandatory Direction (指定方向外進行禁止)',
    descJa: '青丸に白矢印の規制標識。矢印の方向（この例では直進と左折）以外の進行（右折）を禁止します。',
    descEn: 'Blue circular regulatory sign: Vehicles may ONLY proceed in the directions shown by the white arrows (here: Straight or Left only; Right turn prohibited).',
    draw: (ctx, w, h) => {
      ctx.beginPath();
      ctx.arc(w / 2, h / 2, 42, 0, Math.PI * 2);
      ctx.fillStyle = '#005bac';
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();
      ctx.strokeStyle = '#ffffff';
      ctx.fillStyle = '#ffffff';
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(w / 2, 76);
      ctx.lineTo(w / 2, 26);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(w / 2, 18);
      ctx.lineTo(w / 2 - 10, 32);
      ctx.lineTo(w / 2 + 10, 32);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(w / 2, 52);
      ctx.lineTo(26, 52);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(18, 52);
      ctx.lineTo(32, 42);
      ctx.lineTo(32, 62);
      ctx.closePath();
      ctx.fill();
    },
  },
];

export function renderRulebookContent(container: HTMLElement, tab: RulebookTabId, locale: Locale): void {
  const isJa = locale === 'ja';

  if (tab === 'predrive') {
    container.innerHTML = `
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${
            isJa
              ? '👨‍✈️ 助手席の検定員（Instructor View）が見ている「乗車〜発進の正しい順序」'
              : '👨‍✈️ Exact Japanese Practical Exam Pre-Drive Sequence (Graded from the Instructor Seat)'
          }</strong>
          <p>${
            isJa
              ? '日本の技能試験（外免切替・仮免修了検定・本免卒業検定）では、運転席に座ってから発進するまでの順序が厳格に定められています。順番を間違えたり（例：先にシートベルトをしてからシートやミラーを合わせる）、安全確認を省略して発進するとその場で減点されます。'
              : 'In the Japanese practical driving test (Gaimen Kirikae, Karimen & Honmen), the examiner sits in the left front passenger seat and grades your exact setup order BEFORE the wheels move. Putting on your seatbelt before adjusting your seat/mirrors or skipping the 5-point look causes immediate point deductions.'
          }</p>
        </div>

        <div class="rb-step-grid">
          <div class="rb-step-card">
            <span class="rb-step-num">1</span>
            <div>
              <h4>${isJa ? '乗車前の前後確認・ドア閉め・ドアロック' : '1. Check Around Car, Close & Lock Door (ドアロック)'}</h4>
              <p>${
                isJa
                  ? '車の前後（および車体下）に障害物がないか確認して乗車し、ドアを確実に閉めてロックします。'
                  : 'Walk around to check front/rear clearance before boarding, close the door firmly, and lock it.'
              }</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">2</span>
            <div>
              <h4>${isJa ? '座席（シート）の前後・背もたれ調整' : '2. Seat Adjustment FIRST (座席調整)'}</h4>
              <p>${
                isJa
                  ? 'ブレーキを奥まで踏み込んだ時に膝が軽く曲がる位置にシートを合わせます（※必ずミラーやシートベルトより先に行います！）。'
                  : 'Adjust seat distance so your knee remains slightly bent when pressing the brake pedal fully. MUST be done BEFORE mirrors and seatbelt!'
              }</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">3</span>
            <div>
              <h4>${isJa ? 'ルームミラー・左右ドアミラーの調整' : '3. Rearview & Left/Right Side Mirrors (ミラー調整)'}</h4>
              <p>${
                isJa
                  ? '姿勢が決まったら、ルームミラーに後部ガラス全体が映るよう手で触れて合わせ、左右ドアミラーを確認します。'
                  : 'Physically touch and adjust the center rearview mirror and check both left & right side mirrors.'
              }</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">4</span>
            <div>
              <h4>${isJa ? 'シートベルトの着用' : '4. Fasten Seatbelt (シートベルト着用)'}</h4>
              <p>${
                isJa
                  ? 'ねじれがないか確認してシートベルトを確実に装着します（未着用発進は減点10点）。'
                  : 'Fasten the seatbelt cleanly without twists. Pulling out without a seatbelt deducts -10 points.'
              }</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">5</span>
            <div>
              <h4>${isJa ? 'ブレーキ踏み込み＋ギアP確認＋エンジン始動' : '5. Foot Brake + Gear in P/N + Start Engine (エンジン始動)'}</h4>
              <p>${
                isJa
                  ? '右足でフットブレーキをしっかり踏み、ギアが「P」（MTは「N」＋クラッチ踏み込み）にあることを確認してエンジンを始動します。'
                  : 'Hold the foot brake firmly, verify gear is in P (or N + clutch for MT), and start the engine.'
              }</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">6</span>
            <div>
              <h4>${isJa ? 'ギアをD（1速）へ＋サイドブレーキ解除' : '6. Shift to D (or 1st) + Release Handbrake (ギア・サイド解除)'}</h4>
              <p>${
                isJa
                  ? 'ブレーキを踏んだままギアを「D」（MTは1速）に入れ、サイドブレーキを完全に下ろします（戻し忘れ走行は減点5点）。'
                  : 'While holding the foot brake, shift to D (or 1st gear) and fully release the handbrake.'
              }</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">7</span>
            <div>
              <h4>${isJa ? '右ウインカー合図（発進3秒前）' : '7. Activate Right Turn Signal 3 Seconds Before Pulling Out (右合図)'}</h4>
              <p>${
                isJa
                  ? '右ウインカー（Eキー）を出し、周囲の車に発進の意思を3秒間伝えます。'
                  : 'Turn on the Right blinker (key E) at least 3 seconds before moving.'
              }</p>
            </div>
          </div>
          <div class="rb-step-card">
            <span class="rb-step-num">8</span>
            <div>
              <h4>${isJa ? '5点安全確認＋右後方死角の目視（首振り）→発進' : '8. 5-Point Mirror & Right Blind-Spot Shoulder Check → Pull Out'}</h4>
              <p>${
                isJa
                  ? '①左ドアミラー → ②ルームミラー → ③前方 → ④右ドアミラー → ⑤右斜め後ろの死角を直接目視（Z/Xキーで首を振る）してから静かに発進します。'
                  : 'Check Left mirror → Center mirror → Front → Right mirror → Physically turn your head over your right shoulder (Z/X keys) to check the blind spot, then pull out smoothly.'
              }</p>
            </div>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (tab === 'compound') {
    container.innerHTML = `
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${
            isJa
              ? '🏫 自動車教習所・試験場 場内コース規則（外免切替技能確認・仮免修了検定）'
              : '🏫 Driving Center Compound Rules (場内コース — Gaimen Kirikae & Karimen Exam)'
          }</strong>
          <p>${
            isJa
              ? '場内コースは道路幅が狭く課題が連続するため、「キープレフト」「内輪差の計算」「完全停止と首振り目視」「切り返しの活用」が合否を分けます。'
              : 'Inside the driving school compound, examiners strictly grade lane positioning (Keep-Left), inner-wheel tracking (内輪差), complete 2-second stops, and smooth low-speed control.'
          }</p>
        </div>

        <div class="rb-rule-cards">
          <div class="rb-rule-card">
            <h4>1. ${isJa ? '左側通行とキープレフト・進路変更（3秒前合図）' : 'Keep-Left Principle & 30m / 3-Second Turn Signals'}</h4>
            <ul>
              <li>${
                isJa
                  ? '車線内の左端から約50〜70cmの位置（キープレフト）を維持して走行します。'
                  : 'Maintain Keep-Left positioning (~50–70 cm from the left curb) on straightaways.'
              }</li>
              <li>${
                isJa
                  ? '左折時はあらかじめ車を車線の左端へ寄せ（巻き込み防止）、交差点の30m手前で左ウインカーを出します。'
                  : 'Before turning left: check left mirror + left blind spot, signal left 3sec before moving close to the left curb (blocking bicycles from squeezing inside), then turn tightly along the curb.'
              }</li>
              <li>${
                isJa
                  ? '右折時はあらかじめ車線の中央線寄りに寄せ、交差点の中心のすぐ内側を徐行で通過します（ショートカット右折は減点）。'
                  : 'Before turning right: check right mirror + right blind spot, signal right, move adjacent to the centerline, and pass just inside the center diamond (◇) at slow speed.'
              }</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>2. ${isJa ? 'S字コース（狭路・曲線コース）とクランク（直角コース）' : 'S-Curve (S字コース) & 90° Crank (クランク)'}</h4>
            <ul>
              <li>${
                isJa
                  ? 'コース内部ではウインカーは不要ですが、入口への進入時と出口からの合流時には必ず左右ウインカーと安全確認が必要です。'
                  : 'Signal when entering and exiting the S-Curve and Crank (no signals needed for the internal bends).'
              }</li>
              <li>${
                isJa
                  ? '後輪は前輪よりも内側を通る「内輪差」があるため、クランクではコーナーの外側ギリギリまで進んでからハンドルを素早く切ります。'
                  : 'Because rear wheels track tighter than front wheels (内輪差), drive deep toward the outer curb of each 90° Crank corner before turning the wheel sharply.'
              }</li>
              <li>${
                isJa
                  ? '【重要】縁石に乗り上げそうな時は、当たる前に止まってバックする「切り返し（クランク・方向変換で1回目は減点なし、2〜3回目は5点減点、4回目は中止）」を使いましょう！脱輪したまま進むと一発検定中止です。'
                  : 'CRITICAL PRO TIP — Kirikaeshi (切り返し): If you are about to hit a curb or pole in the Crank or Parking bay, STOP before touching it, shift to Reverse (R), look back, and back up to fix your angle. The 1st reversal costs 0 points! Mounting a curb without reversing back is an instant fail.'
              }</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>3. ${isJa ? '坂道発進（後退・逆行防止）' : 'Hill Start (坂道発進 — Zero Rollback)'}</h4>
            <ul>
              <li>${
                isJa
                  ? '上り坂の停止標示で一度完全停止し、サイドブレーキ（Space）を引きます。'
                  : 'Stop completely at the sign on the uphill gradient and engage the handbrake (Space).'
              }</li>
              <li>${
                isJa
                  ? 'アクセルを少し強めに踏んでエンジン回転数を上げ（MTは半クラッチ）、車が前に進もうとする力を感じてからサイドブレーキを解除します。0.3m以上の後退は減点10点、1.0m以上の後退は一発検定中止です。'
                  : 'Apply gentle throttle (and half-clutch in MT) until you feel forward pull, check rear/right safety, then release the handbrake. Rolling backward >0.3m deducts -10 pts; >1.0m is an instant fail.'
              }</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>4. ${isJa ? '踏切通過と一時停止（止まれ）・見通しの悪い交差点' : 'Railroad Crossing (踏切), Stop Signs (止まれ) & Blind Corners'}</h4>
            <ul>
              <li>${
                isJa
                  ? '「止まれ」および踏切の停止線では、メーターが完全に0.0 km/hになるまで停止し、「1、2」と2秒数えてから左右を大きく首振り確認（Z/Xキー）します。'
                  : 'At every 止まれ stop line and railroad crossing, stop at 0.0 km/h for a full 2-second count, then visibly turn your head Left (Z) and Right (X).'
              }</li>
              <li>${
                isJa
                  ? '踏切内ではエンスト防止のためギアチェンジ（変速）禁止です。また、前方に自分の車が入る余地がない時は踏切に進入してはいけません。'
                  : 'Never shift gears while on railroad tracks, and never enter a crossing unless there is clear space for your entire vehicle on the far side.'
              }</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>5. ${isJa ? '方向変換・縦列駐車と駐車車両（障害物）回避' : 'Bay/Parallel Parking & Parked Obstacle Avoidance'}</h4>
            <ul>
              <li>${
                isJa
                  ? 'バック（後退）する前には必ず後方の直接目視とミラー確認を行います。ポケットに入ったら完全停止し、出庫時はウインカーと左右確認を行います。'
                  : 'Always look directly rearward and check all mirrors before reversing into the bay. Come to a full stop inside the bay before exiting.'
              }</li>
              <li>${
                isJa
                  ? '北直線の駐車車両を追い越す時は：①右ミラー・右死角目視 → ②右ウインカー3秒 → ③1m以上の側方間隔を空けて通過 → ④左ミラー・左目視＋左ウインカーで左車線へ戻ります。'
                  : 'Passing a parked obstacle: 1. Right mirror + right blind-spot look → 2. Right blinker for 3s → 3. Pass with ≥1.0m lateral clearance → 4. Left mirror + left look + Left blinker to return to the left lane.'
              }</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (tab === 'road') {
    container.innerHTML = `
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${
            isJa
              ? '🛣️ 路上教習・本免卒業検定・日本の公道ルール（道路交通法）'
              : '🛣️ Real Public Road Rules vs Compound Rules (路上教習・本免検定・道路交通法)'
          }</strong>
          <p>${
            isJa
              ? '公道（路上試験）では、場内コースのルールに加えて「歩行者・自転車の絶対保護」「制限速度の厳守」「他車との円滑な流れ」「駐停車禁止場所の判断」がリアルタイムに試されます。'
              : 'On public roads in Japan, any failure to protect pedestrians/cyclists or obey statutory speed and parking rules triggers the examiner’s auxiliary brake (補助ブレーキ = immediate termination).'
          }</p>
        </div>

        <div class="rb-rule-cards">
          <div class="rb-rule-card">
            <h4>1. ${isJa ? '横断歩道と歩行者・自転車の保護（最優先事項）' : 'Pedestrians & Cyclists Priority (Road Traffic Act Art. 38)'}</h4>
            <ul>
              <li>${
                isJa
                  ? '信号のない横断歩道の手前には30mと15mの位置に「◇（ダイヤマーク）」が路面に描かれています。◇を見たらすぐ減速準備をします。'
                  : 'White diamond markings (◇) painted on the road warn you 30m and 15m ahead of an unsignalized pedestrian crosswalk.'
              }</li>
              <li>${
                isJa
                  ? '横断歩道に歩行者・自転車がいる（または渡ろうとしている）時は、必ず停止線手前で一時停止します。横断歩道とその手前30m以内では追い越し・追い抜きともに絶対禁止です！'
                  : 'If a pedestrian is crossing or waiting to cross, you MUST stop completely. Overtaking or passing any vehicle within 30m before a crosswalk is strictly illegal!'
              }</li>
              <li>${
                isJa
                  ? '歩行者や自転車のそばを通過する時は、1.0〜1.5m以上の安全な側方間隔を空けるか、空けられない場合は徐行します。'
                  : 'Maintain at least 1.0–1.5m of safe lateral clearance when passing pedestrians or cyclists, or slow down to Jokō speed.'
              }</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>2. ${isJa ? '進路変更の3秒ルールと右左折の30mルール' : 'The 3-Second Lane Change Rule vs 30-Meter Turn Rule'}</h4>
            <ul>
              <li>${
                isJa
                  ? '【進路変更（車線変更）】①ミラー確認 → ②ウインカー点灯 → ③3秒間待つ → ④死角の直接目視 → ⑤緩やかに車線変更（ウインカーと同時にハンドルを切るのは減点！）。'
                  : 'Lane Change 5-Step Sequence: 1. Check mirrors → 2. Turn on blinker → 3. Wait 3 full seconds → 4. Shoulder blind-spot check → 5. Steer smoothly. (Turning the wheel simultaneously with the blinker is a deduction!).'
              }</li>
              <li>${
                isJa
                  ? '【交差点の右左折】曲がる交差点の「30m手前」でウインカーを出します。'
                  : 'Intersection Turns: Activate your turn signal 30 meters before the intersection.'
              }</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>3. ${isJa ? '法定最高速度とポンピングブレーキ' : 'Statutory Speed Limits & Pumping Brakes'}</h4>
            <ul>
              <li>${
                isJa
                  ? '標識がない一般道路の法定最高速度は「60 km/h」（原動機付自転車は30 km/h）。高速道路の本線車道は原則「100 km/h」（最低速度50 km/h）です。'
                  : 'Statutory speed limit on ordinary roads without signs: 60 km/h for cars/motorcycles, 30 km/h for 50cc mopeds. Expressways: max 100 km/h, min 50 km/h.'
              }</li>
              <li>${
                isJa
                  ? '停止する時は2〜3回に分けてブレーキを踏む「ポンピングブレーキ」で後続車にブレーキランプを点滅させて知らせ、停止直前に少し踏力を緩めてカックンブレーキを防ぎます。'
                  : 'Use "Pumping Brakes" (2–3 gentle brake taps before final braking) to flash your brake lights and warn following traffic.'
              }</li>
            </ul>
          </div>

          <div class="rb-rule-card">
            <h4>4. ${isJa ? '駐停車禁止場所の数字暗記（学科＆路上試験必須）' : 'Mandatory No-Stopping & No-Parking Distances (Must Memorize!)'}</h4>
            <ul>
              <li>${
                isJa
                  ? '【駐停車禁止（止まること自体が禁止）】交差点・横断歩道・自転車横断帯とその端から「5m以内」、坂の頂上付近・勾配の急な坂、トンネル、軌道敷内、踏切とその端から「10m以内」、バス停の標示板から「10m以内」。'
                  : 'NO STOPPING OR PARKING (駐停車禁止): Within 5m of intersections or crosswalks; within 10m of railroad crossings or bus stops; inside tunnels; on steep slopes or hill crests.'
              }</li>
              <li>${
                isJa
                  ? '【駐車禁止（駐車のみ禁止）】消火栓・火災報知器・消防用防火水槽から「5m以内」、駐車場・車庫の出入口から「3m以内」、道路工事区域の端から「5m以内」、駐車の余地が「3.5m未満」になる場所。'
                  : 'NO PARKING (駐車禁止): Within 5m of fire hydrants/fire alarms/roadworks; within 3m of garage driveways; or anywhere leaving less than 3.5m of clear road width on the right side.'
              }</li>
            </ul>
          </div>
        </div>
      </div>
    `;
    return;
  }

  if (tab === 'signs') {
    container.innerHTML = `
      <div class="rb-doc-section">
        <div class="rb-doc-callout">
          <strong>${
            isJa
              ? '🪧 日本の道路標識・標示ビジュアル図鑑（試験頻出8選）'
              : '🪧 Visual Encyclopedia of Japanese Road Signs & Markings'
          }</strong>
          <p>${
            isJa
              ? '規制標識（赤・青の丸や逆三角形）、警戒標識（黄色のひし形）、指示標識（青い五角形・四角形）の意味を正確に区別しましょう。'
              : 'Master the key Regulatory (Red/Blue circles & inverted triangles), Warning (Yellow diamonds), and Indication (Blue pentagon/square) signs tested in Japan.'
          }</p>
        </div>
        <div id="rbSignsGrid" class="rb-signs-grid"></div>
      </div>
    `;

    const grid = container.querySelector('#rbSignsGrid')!;
    for (const sp of SIGN_SPECS) {
      const card = document.createElement('div');
      card.className = 'rb-sign-card';
      const canvas = document.createElement('canvas');
      canvas.width = 104;
      canvas.height = 104;
      canvas.className = 'rb-sign-canvas';
      sp.draw(canvas.getContext('2d')!, 104, 104);

      const body = document.createElement('div');
      body.innerHTML = `
        <h4>${isJa ? sp.titleJa : sp.titleEn}</h4>
        <small style="color:#94a3b8;display:block;margin-bottom:4px;">${isJa ? sp.titleEn : sp.titleJa}</small>
        <p>${isJa ? sp.descJa : sp.descEn}</p>
      `;
      card.append(canvas, body);
      grid.append(card);
    }
    return;
  }

  // tab === 'written' (Gaimen Kirikae 2025 50-Question Written Test Study Guide + NPA Point Table + Embedded PDF)
  container.innerHTML = `
    <div class="rb-doc-section">
      <div class="rb-doc-callout" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
        <div style="flex:1;min-width:260px;">
          <strong>${
            isJa
              ? '📕 外免切替 学科試験コンプリート教本PDF（2025年10月新制度 50問・90%合格基準対応）'
              : '📕 Gaimen Kirikae Complete Study Guide PDF (Oct 2025 New Format: 50 Questions / 90% Pass Rate)'
          }</strong>
          <p>${
            isJa
              ? 'リポジトリ同梱の42ページ完全教本PDF（全23章・模擬試験100問・ひっかけ問題対策）をブラウザ内で直接開くかダウンロードして学習できます。'
              : 'Open or download the complete 42-page Gaimen Kirikae Study Guide PDF bundled directly in this repository (23 Chapters, 100 Practice Questions & Cheat Sheet).'
          }</p>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <a href="./docs/Gaimen_Kirikae_Study_Guide.pdf" target="_blank" rel="noopener" class="startDriving" style="text-decoration:none;padding:10px 16px;border-radius:10px;display:inline-flex;align-items:center;gap:6px;">
            📖 ${isJa ? '教本PDFを別タブで開く (Open PDF)' : 'Open Full Study Guide PDF (42p)'}
          </a>
          <a href="./docs/Gaimen_Kirikae_Study_Guide.pdf" download="Gaimen_Kirikae_Study_Guide.pdf" class="action-btn" style="text-decoration:none;padding:10px 14px;border-radius:10px;display:inline-flex;align-items:center;gap:6px;">
            ⬇️ ${isJa ? 'PDFダウンロード' : 'Download PDF'}
          </a>
        </div>
      </div>

      <h3 style="margin:14px 0 8px;font-size:15px;color:#e2e8f0;">
        ${
          isJa
            ? '📊 警察庁 技能試験減点基準一覧（100点満点中70点以上で合格）'
            : '📊 Official NPA Practical Exam Point Deduction Table (100 Pts Start → 70 Pts to Pass)'
        }
      </h3>
      <div class="rb-table-wrap">
        <table class="rb-table">
          <thead>
            <tr>
              <th>${isJa ? '違反項目 (Violation)' : 'Violation Item'}</th>
              <th>${isJa ? '減点 / 判定' : 'Deduction'}</th>
              <th>${isJa ? '適用基準・詳細' : 'Japanese Exam Standard Details'}</th>
            </tr>
          </thead>
          <tbody>
            <tr class="fail-row">
              <td><strong>${isJa ? '指定場所一時不停止 (止まれ無視)' : 'Stop Sign Violation (止まれ)'}</strong></td>
              <td><span class="rb-badge-fail">${isJa ? '検定中止 (一発不合格)' : 'INSTANT FAIL'}</span></td>
              <td>${isJa ? '停止線手前で完全停止（0 km/h）せず通過した場合' : 'Failed to come to a dead 0 km/h stop before the stop line'}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${isJa ? '信号無視 / 踏切不停止' : 'Red Light / Railroad No-Stop'}</strong></td>
              <td><span class="rb-badge-fail">${isJa ? '検定中止 (一発不合格)' : 'INSTANT FAIL'}</span></td>
              <td>${isJa ? '赤信号進入、または踏切手前での一時不停止・警報機無視' : 'Entered intersection on Red or crossed railway without stopping'}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${isJa ? '歩行者保護違反 (横断歩道)' : 'Pedestrian Crosswalk Priority'}</strong></td>
              <td><span class="rb-badge-fail">${isJa ? '検定中止 (一発不合格)' : 'INSTANT FAIL'}</span></td>
              <td>${isJa ? '横断歩道上の歩行者の通行を妨害した場合（補助ブレーキ介入）' : 'Failed to stop and yield to a pedestrian on a crosswalk'}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${isJa ? 'ポール・障害物・他車接触' : 'Pole / Obstacle / Car Collision'}</strong></td>
              <td><span class="rb-badge-fail">${isJa ? '検定中止 (一発不合格)' : 'INSTANT FAIL'}</span></td>
              <td>${isJa ? 'コースポール、パイロン、駐車車両、他の教習車への接触' : 'Contacted any course marker pole, cone, or vehicle'}</td>
            </tr>
            <tr class="fail-row">
              <td><strong>${isJa ? '脱輪 (縁石乗り上げ)' : 'Curb Mount (脱輪)'}</strong></td>
              <td><span class="rb-badge-warn">-20 pts / FAIL</span></td>
              <td>${isJa ? 'すぐ停止して戻れば-20点、そのまま進行または2回目で検定中止' : '-20 pts if immediately reversed; Instant Fail if continued or 2nd mount'}</td>
            </tr>
            <tr>
              <td><strong>${isJa ? '坂道逆行 (後退)' : 'Hill Start Rollback (坂道後退)'}</strong></td>
              <td><span class="rb-badge-warn">-10 pts / FAIL</span></td>
              <td>${isJa ? '0.3m〜1.0mの後退で-10点、1.0m以上の後退で検定中止' : '-10 pts for 0.3–1.0m rollback; Instant Fail for >1.0m rollback'}</td>
            </tr>
            <tr>
              <td><strong>${isJa ? 'シートベルト未着用 / 接輪 / 速度超過' : 'No Seatbelt / Curb Scrape / Speeding'}</strong></td>
              <td><span class="rb-badge-pt">-10 pts</span></td>
              <td>${isJa ? 'ベルト未装着発進、縁石へのタイヤ接触、40km/h制限超過' : 'Unfastened seatbelt, tire brushing curb, or exceeding 40 km/h'}</td>
            </tr>
            <tr>
              <td><strong>${isJa ? '乗車手順不備 / 安全確認不履行 / 合図不履行' : 'Pre-Drive Order / Missing Look / No Blinker'}</strong></td>
              <td><span class="rb-badge-pt">-5 pts</span></td>
              <td>${isJa ? 'シート→ミラー→ベルトの順序違反、首振り目視忘れ、ウインカー漏れ' : 'Out-of-order cockpit setup, skipping Z/X head checks, or missing turn signal'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 style="margin:16px 0 8px;font-size:15px;color:#e2e8f0;">
        ${
          isJa
            ? '⚠️ 外免切替 学科試験（50問・90%合格）の「超頻出ひっかけ問題」トップ6'
            : '⚠️ Top 6 Tricky Traps on the 50-Question Gaimen Kirikae Written Exam (From the PDF Guide)'
        }
      </h3>
      <div class="rb-rule-cards">
        <div class="rb-rule-card">
          <h4>Trap 1: ${isJa ? '黄信号の意味は「注意して進め」ではない！' : 'Yellow Traffic Light ≠ "Proceed with Caution"!'}</h4>
          <p>${
            isJa
              ? '×「黄信号は注意して進行できる」→ 誤り（FALSE）！黄信号は原則「止まれ（停止位置に近接していて安全に止まれない場合のみ進行可）」です。なお「黄色の点滅信号」は他の交通に注意して進行できます。'
              : 'FALSE: "A solid yellow light means proceed with caution." A solid yellow light means STOP (unless already so close to the stop line that you cannot stop safely). Only a FLASHING yellow light means proceed with caution.'
          }</p>
        </div>
        <div class="rb-rule-card">
          <h4>Trap 2: ${isJa ? '青矢印信号と「Uターン（転回）」の関係' : 'Green Right-Turn Arrow & U-Turns'}</h4>
          <p>${
            isJa
              ? '赤信号の下に「右向きの青矢印（→）」が出ている時は、右折だけでなく、転回禁止標識がない限り「転回（Uターン）」も可能です！'
              : 'TRUE: When a green right-turn arrow (→) is lit below a red light, you may make BOTH a right turn AND a U-turn (unless a No U-Turn sign is posted).'
          }</p>
        </div>
        <div class="rb-rule-card">
          <h4>Trap 3: ${isJa ? '中央線が黄色の実線 vs 白の実線' : 'Yellow Centerline vs White Centerline for Overtaking'}</h4>
          <p>${
            isJa
              ? '黄色の実線の中央線は「追い越しのための右側部分はみ出し通行禁止」（右側にはみ出さなければ同一車線内での追い越しは可）。白の実線は道幅6m以上の道路の中央線を示します。'
              : 'A solid YELLOW centerline prohibits crossing over the centerline into the right side to overtake (you may still overtake if you stay completely within your left side). A solid WHITE line simply marks the center of a road ≥6m wide.'
          }</p>
        </div>
        <div class="rb-rule-card">
          <h4>Trap 4: ${isJa ? '横断歩道の手前30m以内は「追い抜き」も禁止！' : 'Within 30m Before a Crosswalk: BOTH Overtaking AND Passing are Banned'}</h4>
          <p>${
            isJa
              ? '横断歩道・自転車横断帯とその手前30m以内では、車線変更を伴う「追い越し」だけでなく、直進のまま前に出る「追い抜き」もすべて禁止です。'
              : 'Within 30m before a pedestrian or bicycle crosswalk, you must NOT pass any moving motor vehicle — neither by changing lanes (追い越し) nor by staying in your lane (追い抜き).'
          }</p>
        </div>
      </div>
    </div>
  `;
}
