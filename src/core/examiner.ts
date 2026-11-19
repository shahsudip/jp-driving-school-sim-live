import type { CollisionReport } from './collision';
import { distance, normalizeAngle } from './coordinates';
import {
  HILL_UP_END,
  HILL_UP_START,
  HILL_Z,
  OBSTACLE_COLLIDERS,
  SPAWN_STATIONS,
  STOP_LINE_ZONES,
  type StopLineZone,
} from './courseLayout';
import type { TrafficSignalController } from './trafficSignals';
import type { TrafficSafetyReport } from '../scene/TrafficAndPedestrians';
import type {
  ExamSummary,
  RuleStudyQuiz,
  SimMode,
  SpawnStationId,
  VehicleState,
  ViolationCode,
  ViolationEvent,
} from '../types';

export interface RuleExplanationMeta {
  ruleRefJa: string;
  ruleRefEn: string;
  howToFixJa: string;
  howToFixEn: string;
  quiz: RuleStudyQuiz;
}

export const VIOLATION_RULE_EXPLANATIONS: Record<ViolationCode, RuleExplanationMeta> = {
  CURB_TOUCH: {
    ruleRefJa: '技能試験実施基準「接輪（小）」：縁石へのタイヤ側面接触（減点10点）',
    ruleRefEn: 'NPA Practical Exam Standard "Curb Contact (接輪)": Tire sidewall brushed against the concrete curb (-10 pts).',
    howToFixJa: 'S字やクランクで接触しそうな時は無理に進まず、停止してバックでやり直す「切り返し（1回目は減点なし）」を使いましょう。',
    howToFixEn: 'If your turn feels too tight in the S-Curve or Crank, STOP before touching the curb and reverse to readjust (Kirikaeshi — 1st reversal is 0 pt deduction!).',
    quiz: {
      chapterRefJa: '教本 第7章・実技編「狭路（S字・クランク）の通行と内輪差・切り返し」',
      chapterRefEn: 'Study Guide Ch. 7 & Practical Manual: "Narrow Courses (S-Curve & Crank), Inner-Wheel Difference & Kirikaeshi"',
      studyPointJa: [
        '車が曲がる時、後輪は前輪よりも内側を通る「内輪差（ないりんさ）」が生じる。',
        '縁石に当たりそうな時は、接触する前に停止してバックでやり直す「切り返し（1回目は減点0点）」を行う。',
      ],
      studyPointEn: [
        'When turning, rear wheels track along a tighter inner radius than front wheels (Inner-Wheel Difference / 内輪差).',
        'If you are about to brush a curb, STOP before contact and reverse to fix your angle (Kirikaeshi — 1st reversal is 0 pt deduction).',
      ],
      questionJa: '【理解確認クイズ】S字やクランクで縁石に接触しそうになった時の正しい対応はどれですか？',
      questionEn: 'Comprehension Check: What is the proper action if you are about to touch a curb in the S-Curve or Crank?',
      optionsJa: [
        'A. 接触する前に一時停止し、後方確認をしてバックで「切り返し（1回目は減点なし）」を行う',
        'B. そのままアクセルを踏んで縁石をこすりながら一気に通り抜ける',
      ],
      optionsEn: [
        'A. Stop BEFORE touching the curb, check behind, and reverse to readjust (1st Kirikaeshi = 0 pt deduction)',
        'B. Keep pressing the throttle and scrape past the curb without stopping',
      ],
      correctIndex: 0,
    },
  },
  CURB_MOUNT: {
    ruleRefJa: '技能試験実施基準「脱輪」：車輪が縁石に乗り上げ、またはコース外へ逸脱（減点20点／戻らず進行・2回目は検定中止）',
    ruleRefEn: 'NPA Practical Exam Standard "Wheel Off-Course / Curb Mount (脱輪)": Wheel climbed over the curb (-20 pts / instant fail if not immediately reversed or on 2nd mount).',
    howToFixJa: '脱輪した瞬間に必ず完全停止し、縁石に乗り上げる前の位置までバックして体制を立て直してください。内輪差（後輪が前輪より内側を通る特性）を意識し、外側に寄せてから曲がり始めましょう。',
    howToFixEn: 'Stop immediately upon mounting a curb and reverse back onto the pavement. Account for rear-wheel inner tracking (内輪差) by swinging slightly wider before turning.',
    quiz: {
      chapterRefJa: '技能試験実施基準「脱輪時の措置（停止・後退による復帰義務）」',
      chapterRefEn: 'NPA Practical Exam Standard: "Mandatory Stop & Reverse Recovery Upon Curb Mount (脱輪)"',
      studyPointJa: [
        'タイヤが縁石に乗り上げた（脱輪した）まま前進し続けると、その場で一発「検定中止（不合格）」となる。',
        '脱輪した瞬間に直ちに停止し、後方確認をして乗り上げる前の位置までバックで戻れば試験を続行できる。',
      ],
      studyPointEn: [
        'Continuing forward after a wheel mounts the curb results in immediate exam termination (検定中止).',
        'If you stop immediately upon mounting the curb, check behind, and reverse back onto the road, you can continue the test.',
      ],
      questionJa: '【理解確認クイズ】クランクやS字でタイヤが縁石に乗り上げた（脱輪した）場合、検定中止を防ぐために直ちに行うべき操作は？',
      questionEn: 'Comprehension Check: If a tire mounts the curb (脱輪), what must you do IMMEDIATELY to avoid automatic disqualification?',
      optionsJa: [
        'A. 直ちに停止し、周囲と後方を目視確認してから乗り上げる前の位置までバックで戻る',
        'B. バックすると減点されるので、そのまま前進してコースへ戻る',
      ],
      optionsEn: [
        'A. Stop immediately, check mirrors & blind spots, and reverse back to the point before the wheel mounted the curb',
        'B. Keep driving forward over the curb so you do not lose time',
      ],
      correctIndex: 0,
    },
  },
  POLE_COLLISION: {
    ruleRefJa: '技能試験実施基準「接触・危険行為（検定中止）」：ポール・パイロン・駐車車両等への接触（一発不合格・補助ブレーキ介入）',
    ruleRefEn: 'NPA Practical Exam Standard "Obstacle Collision (接触・検定中止)": Struck a marker pole, cone, or parked vehicle (Instant Disqualification / Examiner Auxiliary Brake).',
    howToFixJa: '方向変換・縦列駐車・クランクではポールとの距離をサイドミラーで確認し、当たりそうな場合は必ず停止して「切り返し」を行ってください。',
    howToFixEn: 'Check both side mirrors in Bay/Parallel Parking and Crank corners. Always stop and perform a corrective reversal (切り返し) before touching any pole.',
    quiz: {
      chapterRefJa: '技能試験実施基準「障害物接触（検定中止）と方向変換・縦列駐車の切り返し規則」',
      chapterRefEn: 'NPA Practical Exam Standard: "Obstacle Contact (Instant Fail) & Parking Reversal Rules"',
      studyPointJa: [
        'コース上の赤白ポール、パイロン、駐車車両に車体やバンパーが軽くでも接触すると一発「検定中止」となる。',
        '方向変換・縦列駐車では1回目の切り返しは減点なし（2〜3回目は各5点減点）なので、当たる前に必ず止まって切り返す。',
      ],
      studyPointEn: [
        'Even slight bumper or mirror contact with a red/white pole, cone, or parked vehicle causes immediate exam failure.',
        'In Bay or Parallel Parking, your 1st corrective reversal (切り返し) costs 0 points—always stop and readjust before hitting a pole.',
      ],
      questionJa: '【理解確認クイズ】方向変換やクランクでポールにぶつかりそうになった時のルールとして正しいものは？',
      questionEn: 'Comprehension Check: Which rule applies when you are close to hitting a marker pole during parking or crank turns?',
      optionsJa: [
        'A. ポールに接触すると一発で検定中止になるため、接触する前に停止して切り返し（1回目は減点0）で修正する',
        'B. ゴム製のポールなら軽く接触しても減点されない',
      ],
      optionsEn: [
        'A. Contacting a pole is an instant fail; stop BEFORE contact and use a corrective reversal (1st reversal = 0 pts)',
        'B. Lightly touching a flexible marker pole does not deduct points',
      ],
      correctIndex: 0,
    },
  },
  STOP_SIGN_VIOLATION: {
    ruleRefJa: '道路交通法第43条「指定場所一時不停止（検定中止）」：『止まれ』標識の停止線手前で車輪が完全停止（0 km/h）していない（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 43 "Stop Sign Violation (指定場所一時不停止・検定中止)": Failed to bring wheels to a complete 0.0 km/h stop before the white stop line (Instant Fail).',
    howToFixJa: '停止線の直前でスピードが0.0 km/hになるまで約2秒間しっかり停止し、その後に左・右（Z/Xキー）を大きく目視確認してから発進してください（徐行・ローリングストップは一発中止です）。',
    howToFixEn: 'Come to a dead 0.0 km/h stop before the stop line for 2 full seconds (rolling stops are an automatic fail in Japan!), then look Left (Z) and Right (X) before proceeding.',
    quiz: {
      chapterRefJa: '外免切替教本 第2章・道路交通法第43条「指定場所における一時停止（止まれ）」',
      chapterRefEn: 'Gaimen Kirikae Study Guide Ch. 2 & Road Traffic Act Art. 43: "Mandatory Complete Stop at 止まれ Signs"',
      studyPointJa: [
        '赤い逆三角形の「止まれ」標識がある交差点では、白の「停止線の直前」で車輪を完全に停止（0.0 km/h・約2秒間）させなければならない。',
        'タイヤが少しでも転がっている「徐行（ローリングストップ）」や、停止線を越えてからの停止は一発で検定中止となる。',
      ],
      studyPointEn: [
        'At a red inverted-triangle 止まれ (STOP) sign, your wheels must come to a complete 0.0 km/h stop JUST BEFORE the white stop line for ~2 full seconds.',
        'A rolling stop (徐行) or stopping past the white stop line is an automatic exam disqualification.',
      ],
      questionJa: '【理解確認クイズ】日本の「止まれ（一時停止）」標識がある場所での正しい止まり方はどれですか？',
      questionEn: 'Comprehension Check: How must you stop at a Japanese 止まれ (STOP) sign to pass the practical test?',
      optionsJa: [
        'A. 停止線の直前で車輪が完全に止まる（0.0 km/h）まで約2秒間停止し、左右の安全確認（Z/X）をしてから進む',
        'B. 周囲に車がいないのが見えれば、徐行（2〜3 km/h）のまま通過してよい',
      ],
      optionsEn: [
        'A. Come to a complete 0.0 km/h dead stop BEFORE the white stop line for ~2 seconds, then look Left & Right (Z/X)',
        'B. If no cross traffic is visible, you may roll through slowly at 2–3 km/h',
      ],
      correctIndex: 0,
    },
  },
  RAILROAD_NO_STOP: {
    ruleRefJa: '道路交通法第33条「踏切不停止等（検定中止）」：踏切停止線手前での完全停止不履行、または警報機作動中の進入（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 33 "Railroad Crossing Violation (踏切不停止・検定中止)": Failed to stop before the railroad stop line or entered while alarm/gates were active (Instant Fail).',
    howToFixJa: '日本の道路交通法では、踏切通過時は信号や遮断機が開いていても必ず停止線手前で完全停止（0 km/h）し、窓を開けて左右の安全確認（Z/X）を行い、踏切内は変速せず一気に通過します。',
    howToFixEn: 'In Japan, every vehicle MUST come to a complete 0 km/h stop before ANY railroad crossing stop line, look Left & Right (Z/X), listen, and cross in one continuous motion without shifting gears.',
    quiz: {
      chapterRefJa: '外免切替教本 第12章・道路交通法第33条「踏切の通過方法とエンスト防止」',
      chapterRefEn: 'Gaimen Kirikae Study Guide Ch. 12 & Road Traffic Act Art. 33: "Railway Crossings (踏切)"',
      studyPointJa: [
        '遮断機が上がっていても、すべての車両は踏切の停止線手前で必ず完全停止（0 km/h）し、窓を開けて目と耳で左右の安全を確認しなければならない。',
        '警報機が鳴り始めた後や遮断機が下り始めた後は絶対に進入禁止。踏切内ではエンスト防止のため変速（ギアチェンジ）をせずに一気に通過する。',
      ],
      studyPointEn: [
        'Even when the barrier gates are open, EVERY vehicle in Japan must come to a complete 0 km/h stop before the railway stop line and check Left & Right with eyes and ears.',
        'Never enter once the alarm bells or flashing red lights start, and never shift gears while crossing the tracks.',
      ],
      questionJa: '【理解確認クイズ】日本の道路交通法における「踏切の通過方法」として正しいものはどれですか？',
      questionEn: 'Comprehension Check: What does Japanese law require when crossing a railroad track (踏切) when the gates are open?',
      optionsJa: [
        'A. 遮断機が開いていても必ず停止線手前で完全停止（0 km/h）し、左右の安全確認（Z/X）を行ってから変速せずに通過する',
        'B. 遮断機が上がっていて警報機が鳴っていなければ、一時停止せずに徐行で通過してよい',
      ],
      optionsEn: [
        'A. Always come to a complete 0 km/h stop before the stop line, look & listen Left/Right (Z/X), and cross without shifting gears',
        'B. If the barrier gates are up and no alarm is ringing, you can cross without stopping',
      ],
      correctIndex: 0,
    },
  },
  RED_LIGHT: {
    ruleRefJa: '道路交通法第7条「信号無視（検定中止）」：赤信号（または停止可能な黄信号）で停止線を越えて交差点へ進入（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 7 "Traffic Signal Violation (信号無視・検定中止)": Crossed the stop line into the intersection during a Red signal (Instant Fail).',
    howToFixJa: '交差点接近時は信号を早めに確認し、黄信号・赤信号では必ず停止線の手前で停止してください。',
    howToFixEn: 'Check the intersection signal early and stop cleanly before the white stop line on Yellow or Red.',
    quiz: {
      chapterRefJa: '外免切替教本 第1章・道路交通法第7条「信号機の意味（赤・黄・青）」',
      chapterRefEn: 'Gaimen Kirikae Study Guide Ch. 1 & Road Traffic Act Art. 7: "Traffic Lights (Red, Yellow & Green)"',
      studyPointJa: [
        '赤信号は「停止位置（停止線）を越えて進行してはならない」。',
        '黄信号も原則「止まれ」であり、「注意して進め」ではない（停止位置に近づきすぎて安全に停止できない場合のみ進行可）。',
      ],
      studyPointEn: [
        'Red light means you must not proceed beyond the white stop line.',
        'A solid Yellow light ALSO means STOP (not "proceed with caution"), unless you are already so close to the stop line that you cannot stop safely.',
      ],
      questionJa: '【理解確認クイズ】日本の信号機において「黄色の灯火（点灯）」と「赤色の灯火」の正しいルールは？',
      questionEn: 'Comprehension Check: What is the official rule for a Yellow or Red traffic signal in Japan?',
      optionsJa: [
        'A. 赤信号はもちろん、黄信号でも安全に止まれる距離であれば必ず停止線の手前で停止する',
        'B. 黄信号は「急いで交差点を通過せよ」という意味なので加速して通過する',
      ],
      optionsEn: [
        'A. You must stop before the stop line on Red, and also on Yellow whenever you can safely come to a stop',
        'B. A yellow light means accelerate to clear the intersection before it turns red',
      ],
      correctIndex: 0,
    },
  },
  NO_SIGNAL: {
    ruleRefJa: '道路交通法第53条「合図不履行（減点5点）」：右左折の30m手前、または進路変更の3秒前のウインカー合図漏れ',
    ruleRefEn: 'Road Traffic Act Art. 53 "Failure to Signal (合図不履行 -5 pts)": Missing turn signal (Q/E) 30m before turning or 3 seconds before changing lanes/passing obstacles.',
    howToFixJa: '左折（Q）・右折（E）の30m手前、および発進・駐車車両回避・進路変更の3秒前に必ずウインカーを出してください。',
    howToFixEn: 'Activate Left (Q) or Right (E) turn signal 30 meters before any intersection turn and 3 seconds before pulling out or passing a parked obstacle.',
    quiz: {
      chapterRefJa: '外免切替教本 第6章・道路交通法第53条「合図を行う時期（30m手前と3秒前）」',
      chapterRefEn: 'Gaimen Kirikae Study Guide Ch. 6 & Road Traffic Act Art. 53: "Turn Signal Timing (30 Meters vs 3 Seconds)"',
      studyPointJa: [
        '交差点での「左折・右折・転回（Uターン）」の合図は、その地点の『30メートル手前』で出す。',
        '「進路変更（車線変更・障害物回避）」および「発進」の合図は、行為を始める『3秒前』に出す。',
      ],
      studyPointEn: [
        'For Left Turns, Right Turns, and U-Turns at intersections: activate your turn signal 30 METERS before the turn.',
        'For Lane Changes, Obstacle Passing, and Pulling Out: activate your turn signal 3 SECONDS before steering.',
      ],
      questionJa: '【理解確認クイズ】日本の道路交通法で定められた「右左折」と「進路変更（車線変更）」のウインカー合図を出す正しいタイミングは？',
      questionEn: 'Comprehension Check: What is the mandatory turn-signal timing in Japan for intersection turns vs lane changes?',
      optionsJa: [
        'A. 右左折は交差点の「30m手前」、進路変更や発進は操作の「3秒前」にウインカーを出す',
        'B. ハンドルを切り始めるのと同時にウインカーを出せばよい',
      ],
      optionsEn: [
        'A. Signal 30 meters before an intersection turn, and 3 seconds before changing lanes or pulling out',
        'B. Turn on the blinker at the exact moment you start turning the steering wheel',
      ],
      correctIndex: 0,
    },
  },
  NO_SAFETY_LOOK: {
    ruleRefJa: '技能試験実施基準「安全確認不履行（減点5〜10点）」：発進・交差点・踏切・右左折時の目視（首振り確認）不足',
    ruleRefEn: 'NPA Practical Exam Standard "Failure to Perform Visual Safety Check (安全確認不履行 -5 to -10 pts)": Proceeded without distinctly turning head Left/Right (Z/X) to check blind spots.',
    howToFixJa: '日本の技能試験では「目で見ただけ」では認められません。検定員から見えるようにZキー（左目視）・Xキー（右目視）で首をしっかり振って確認してください。',
    howToFixEn: 'Examiners in Japan grade visible head movement! Press Z (Look Left) and X (Look Right) so your driver avatar physically rotates their head to check mirrors and blind spots.',
    quiz: {
      chapterRefJa: '技能試験実施基準「直接目視とミラーによる安全確認（巻き込み確認・左右確認）」',
      chapterRefEn: 'NPA Practical Exam Standard: "Visible Head Movement & Blind-Spot Safety Checks (安全確認)"',
      studyPointJa: [
        '助手席の検定員は「受験者の頭（首）がしっかり動いてミラーと死角を見たか」を目視で採点している。眼球だけ動かしても確認不足（減点）となる。',
        '発進時・一時停止からの進行時・踏切通過時・左折時の巻き込み確認では必ずZキー（左目視）・Xキー（右目視）で首を振る。',
      ],
      studyPointEn: [
        'Japanese examiners sitting in the passenger seat grade visible head movement. Moving only your eyeballs without turning your head counts as a missed check (-5 pts).',
        'Always turn your head distinctly Left (Z) and Right (X) at stop signs, railroad crossings, pull-outs, and left-turn bicycle blind spots.',
      ],
      questionJa: '【理解確認クイズ】日本の技能試験において、検定員に「安全確認をした」と認められるための正しい動作は？',
      questionEn: 'Comprehension Check: How must you perform safety checks so the Japanese examiner sitting beside you awards full credit?',
      optionsJa: [
        'A. ミラーを見るだけでなく、検定員から見て分かるように首をしっかり左右に振って死角を直接目視（Z/Xキー）する',
        'B. 顔を正面に向けたまま視線（目の玉）だけを動かして確認する',
      ],
      optionsEn: [
        'A. Visibly rotate your head Left & Right (Z/X keys) to check mirrors and blind spots so the examiner clearly sees your check',
        'B. Keep your head facing straight ahead and only glance with your eyes',
      ],
      correctIndex: 0,
    },
  },
  HILL_ROLLBACK: {
    ruleRefJa: '技能試験実施基準「坂道後退（逆行）」：上り坂での発進時に車両が後退（0.3m以上で減点10点、1.0m以上で検定中止）',
    ruleRefEn: 'NPA Practical Exam Standard "Hill Start Rollback (坂道逆行)": Vehicle rolled backward on the hill ramp (-10 pts for >0.3m rollback, Instant Fail for >1.0m).',
    howToFixJa: '坂の途中で停止したらサイドブレーキ（Space）を引き、アクセル（W）を少し踏んで駆動力を感じてからサイドブレーキを解除して発進しましょう。',
    howToFixEn: 'When stopped on the hill upgrade, engage the handbrake (Space), apply gentle throttle (W), then release the handbrake smoothly to pull away with zero rollback.',
    quiz: {
      chapterRefJa: '技能試験実施基準「坂道発進（後退防止とサイドブレーキ操作）」',
      chapterRefEn: 'NPA Practical Exam Standard: "Hill Start (坂道発進) & Zero-Rollback Procedure"',
      studyPointJa: [
        '上り坂での発進時に0.3m〜1.0m後退すると減点10点、1.0m以上後退するとその場で一発「検定中止」となる。',
        'サイドブレーキ（Space）を引いた状態でアクセル（W）を踏み、車が前に進もうとする駆動力を感じてからサイドブレーキを下ろすと逆行しない。',
      ],
      studyPointEn: [
        'Rolling backward 0.3m–1.0m on an uphill start deducts -10 points; rolling back 1.0m or more is an automatic fail.',
        'Hold the car with the handbrake (Space), apply throttle (W) until forward torque engages, then release the handbrake smoothly.',
      ],
      questionJa: '【理解確認クイズ】坂道発進で車が後ろへ下がらない（逆行しない）ための正しい手順はどれですか？',
      questionEn: 'Comprehension Check: What is the proper technique to prevent backward rollback during a Hill Start?',
      optionsJa: [
        'A. サイドブレーキを引いて停止し、アクセルを踏んで前進する駆動力を感じてからサイドブレーキを解除する',
        'B. サイドブレーキを使わず、フットブレーキからアクセルへ素早く足を踏み替えるだけで発進する',
      ],
      optionsEn: [
        'A. Engage the handbrake while stopped, apply throttle until forward pull is felt, then release the handbrake',
        'B. Release all brakes first on the slope and then look for the throttle pedal',
      ],
      correctIndex: 0,
    },
  },
  SPEED_LIMIT: {
    ruleRefJa: '道路交通法第22条「最高速度違反（減点10点）」：教習所場内の指定最高速度（40 km/h）を超過',
    ruleRefEn: 'Road Traffic Act Art. 22 "Speed Limit Violation (速度超過 -10 pts)": Exceeded the 40 km/h maximum speed limit.',
    howToFixJa: '直線40km/h課題では38〜40km/hに到達したらすぐにアクセルを戻し、コーナー手前でしっかり減速してください。',
    howToFixEn: 'On the 40 km/h straight, accelerate up to 38–40 km/h briefly, then ease off the throttle and brake smoothly before the corner.',
    quiz: {
      chapterRefJa: '外免切替教本 第3章・道路交通法第22条「最高速度の遵守と指定速度課題」',
      chapterRefEn: 'Gaimen Kirikae Study Guide Ch. 3 & Road Traffic Act Art. 22: "Maximum Speed Limits"',
      studyPointJa: [
        '「40」の最高速度標識がある区間では40 km/hを超えてはならない。指示速度（40km/hを出す課題）では38〜40km/hに達したらすぐ減速準備に入る。',
        '標識がない一般道路の法定最高速度は自動車60 km/h、原動機付自転車（50cc）30 km/hである。',
      ],
      studyPointEn: [
        'Never exceed the posted 40 km/h speed limit. On the 40 km/h target straight, reach ~38–40 km/h briefly and decelerate before the turn.',
        'On ordinary public roads without speed signs, the statutory limit is 60 km/h for cars/motorcycles and 30 km/h for mopeds.',
      ],
      questionJa: '【理解確認クイズ】場内コースの「40 km/h指定速度課題」および最高速度標識に関する正しいルールは？',
      questionEn: 'Comprehension Check: How should you drive the 40 km/h speed section without getting a speeding deduction?',
      optionsJa: [
        'A. 直線区間で38〜40 km/hに到達したらアクセルを戻し、40 km/hを超えないようカーブ手前で十分に減速する',
        'B. 40 km/h課題では最低45〜50 km/hまで加速した方が高評価になる',
      ],
      optionsEn: [
        'A. Reach 38–40 km/h on the straight without exceeding the 40 km/h limit, then brake smoothly before the curve',
        'B. Accelerate to 50 km/h so the examiner sees confident driving',
      ],
      correctIndex: 0,
    },
  },
  HANDBRAKE_DRAG: {
    ruleRefJa: '技能試験実施基準「駐停車ブレーキ戻し忘れ（減点5点）」：サイドブレーキを引いたまま発進・走行',
    ruleRefEn: 'NPA Practical Exam Standard "Parking Brake Drag (サイド戻し忘れ -5 pts)": Drove with the handbrake still engaged.',
    howToFixJa: '発進前の手順（⑥ギアD＋サイドブレーキ解除 [Space]）を徹底してからアクセルを踏んでください。',
    howToFixEn: 'Always release the parking brake (Space) in Pre-Drive Step 6 before pressing the throttle.',
    quiz: {
      chapterRefJa: '技能試験実施基準「発進準備手順⑥：ギア選択とパーキングブレーキ完全解除」',
      chapterRefEn: 'NPA Practical Exam Standard: "Pre-Drive Step 6 — Gear Selection & Full Handbrake Release"',
      studyPointJa: [
        '発進時や坂道発進の後にサイドブレーキを引いたまま走行すると「駐停車ブレーキ戻し忘れ（減点5点）」となる。',
        'エンジン始動後、フットブレーキを踏んだままギアをD（または1速）に入れ、サイドブレーキ（Space）を完全に下ろしてから発進する。',
      ],
      studyPointEn: [
        'Driving with the parking brake still engaged incurs a -5 point deduction (駐停車ブレーキ戻し忘れ).',
        'Always verify the handbrake is fully released (Space) after shifting into D (or 1st gear) before pressing the throttle.',
      ],
      questionJa: '【理解確認クイズ】発進前にサイドブレーキ（パーキングブレーキ）を解除する正しいタイミングはいつですか？',
      questionEn: 'Comprehension Check: When should you release the handbrake (parking brake) during the pre-drive sequence?',
      optionsJa: [
        'A. フットブレーキを踏んだままエンジンを始動し、ギアをD（または1速）に入れた直後、発進する前に完全解除する',
        'B. 発進して時速20 km/hくらいに乗ってからサイドブレーキを下ろす',
      ],
      optionsEn: [
        'A. While holding the foot brake after starting the engine and shifting into D (or 1st), BEFORE moving the car',
        'B. After driving 20 meters down the road',
      ],
      correctIndex: 0,
    },
  },
  PRE_DRIVE_ORDER: {
    ruleRefJa: '技能試験実施基準「乗車・発進手順不備（減点5点）」：乗車後の準備手順（①ドアロック→②座席調整→③ミラー調整→④シートベルト→⑤ブレーキ＋エンジン始動）の順序違反または省略',
    ruleRefEn: 'NPA Practical Exam Standard "Improper Pre-Drive Cockpit Procedure (発進準備手順不備 -5 pts)": Skipped or performed cockpit setup out of official order (1. Door Lock → 2. Seat → 3. Mirrors → 4. Seatbelt → 5. Brake+Start).',
    howToFixJa: '発進前に画面上部の「乗車〜発進手順チェックバー」を①から⑧まで順番通りに完了させてください。特に「シート調整→ミラー調整→シートベルト」の順序は検定員が助手席から厳しくチェックします。',
    howToFixEn: 'Before pulling out of the Start Bay, complete steps 1 through 8 on the Pre-Drive Checklist Bar in exact sequence: 1. Door Lock → 2. Seat → 3. Mirrors → 4. Seatbelt → 5. Brake+Ignition → 6. Gear D+Handbrake → 7. Right Blinker → 8. 5-Point Mirror & Right Shoulder Look.',
    quiz: {
      chapterRefJa: '技能試験実施基準「乗車から発進までの正しい8ステップ順序」',
      chapterRefEn: 'NPA Practical Exam Standard: "Mandatory 8-Step Pre-Drive Cockpit Sequence"',
      studyPointJa: [
        '乗車後の準備は必ず「①ドアロック → ②座席（シート）調整 → ③ルームミラー・サイドミラー調整 → ④シートベルト着用 → ⑤ブレーキ＋エンジン始動」の順番で行う。',
        '先にシートベルトを着けてからシートやミラーを合わせたり、ミラーに触れずに発進すると助手席の検定員から減点される。',
      ],
      studyPointEn: [
        'Cockpit setup MUST follow the exact order: 1. Door Lock → 2. Seat Adjustment → 3. Mirror Adjustment → 4. Fasten Seatbelt → 5. Foot Brake + Start Engine.',
        'Why Seat before Mirrors & Seatbelt? Because moving your seat changes your eye angle in the mirrors, and a fastened seatbelt restricts your seat & mirror adjustment!',
      ],
      questionJa: '【理解確認クイズ】日本の技能試験において、乗車してドアを閉めた直後に行う「座席・ミラー・シートベルト」の正しい順番は？',
      questionEn: 'Comprehension Check: After boarding and locking the door, what is the mandatory Japanese exam order for Seat, Mirrors, and Seatbelt?',
      optionsJa: [
        'A. ①座席（シート）調整 → ②ルーム・サイドミラー調整 → ③シートベルト着用 → ④エンジン始動',
        'B. ①シートベルト着用 → ②エンジン始動 → ③走りながらミラーと座席を合わせる',
      ],
      optionsEn: [
        'A. 1st: Seat Adjustment → 2nd: Rearview & Side Mirrors → 3rd: Fasten Seatbelt → 4th: Foot Brake & Start Engine',
        'B. 1st: Fasten Seatbelt → 2nd: Start Engine → 3rd: Adjust Seat & Mirrors while rolling',
      ],
      correctIndex: 0,
    },
  },
  NO_SEATBELT: {
    ruleRefJa: '道路交通法第71条の3「シートベルト着用義務違反（減点10点）」：シートベルトを着用せずに発進',
    ruleRefEn: 'Road Traffic Act Art. 71-3 "Unfastened Seatbelt (シートベルト未着用 -10 pts)": Pulled out without fastening the driver seatbelt.',
    howToFixJa: '乗車したら座席とミラーを合わせた直後に必ず「④シートベルト着用」をクリック（またはキー4）して3Dシートベルトを装着してから発進してください。',
    howToFixEn: 'Always click Step 4 (or press key 4) to latch your 3D red diagonal seatbelt across the driver avatar after adjusting your seat and mirrors.',
    quiz: {
      chapterRefJa: '道路交通法第71条の3「座席ベルト（シートベルト）の装着義務」',
      chapterRefEn: 'Road Traffic Act Art. 71-3: "Mandatory Seatbelt Fastening Before Engine Start & Pull-Out"',
      studyPointJa: [
        '運転席・助手席だけでなく後部座席を含む全座席でシートベルト着用が法律で義務付けられている。',
        '技能試験では座席（②）とミラー（③）を調整した直後、エンジンをかけて発進する前に必ずシートベルト（④）を装着する。',
      ],
      studyPointEn: [
        'Japanese law requires seatbelt use for all occupants (front and rear seats).',
        'In the practical exam, you must latch your seatbelt (Step 4) right after adjusting your seat (Step 2) and mirrors (Step 3), before moving the car.',
      ],
      questionJa: '【理解確認クイズ】発進前のシートベルト着用に関する正しい手順はどれですか？',
      questionEn: 'Comprehension Check: When must you fasten your seatbelt during the practical driving exam?',
      optionsJa: [
        'A. 発進する前（①ドアロック→②座席調整→③ミラー調整の直後）に必ずねじれなく着用する',
        'B. 教習所場内コースは低速なのでシートベルトは着用しなくてよい',
      ],
      optionsEn: [
        'A. Before moving the car—immediately after 1. Door Lock → 2. Seat Adjust → 3. Mirror Check (Step 4)',
        'B. Seatbelts are optional inside the driving school compound',
      ],
      correctIndex: 0,
    },
  },
  PEDESTRIAN_PRIORITY: {
    ruleRefJa: '道路交通法第38条「横断歩道等における歩行者等の優先（検定中止）」：横断歩道を通行中の歩行者の進行を妨害（一発不合格・補助ブレーキ介入）',
    ruleRefEn: 'Road Traffic Act Art. 38 "Failure to Yield to Pedestrian at Crosswalk (歩行者保護違反・検定中止)": Drove close to a pedestrian crossing on a zebra crosswalk without stopping (Instant Fail).',
    howToFixJa: '横断歩道（◇マーク手前）に近づいたら減速し、歩行者が渡っている・渡ろうとしている時は必ず停止線（または横断歩道手前）で完全停止して歩行者が渡り切るのを待ってください。',
    howToFixEn: 'Whenever a pedestrian is crossing or waiting at a zebra crosswalk (横断歩道), come to a complete stop before the crosswalk and wait until they finish crossing.',
    quiz: {
      chapterRefJa: '外免切替教本 第11章・道路交通法第38条「横断歩道における歩行者最優先と手前30m追い越し・追い抜き禁止」',
      chapterRefEn: 'Gaimen Kirikae Study Guide Ch. 11 & Road Traffic Act Art. 38: "Absolute Pedestrian Priority at Crosswalks"',
      studyPointJa: [
        '横断歩道の手前30mと15mには白いひし形（◇）の路面標示がある。歩行者が横断中または横断しようとしている時は必ず一時停止して道を譲らなければならない。',
        '横断歩道・自転車横断帯とその手前30m以内では、他の車を「追い越す」ことも「追い抜く」こともすべて法律で禁止されている。',
      ],
      studyPointEn: [
        'White road diamonds (◇) are painted 30m and 15m before unsignalized crosswalks. If any pedestrian is crossing or waiting to cross, you MUST come to a complete stop.',
        'Within 30m before a crosswalk, BOTH overtaking (changing lanes) and passing (in the same lane) any motor vehicle are strictly prohibited.',
      ],
      questionJa: '【理解確認クイズ】横断歩道を通行中の歩行者がいる場合の運転ルールとして正しいものは？',
      questionEn: 'Comprehension Check: What must you do when a pedestrian is crossing or about to cross a zebra crosswalk (横断歩道)?',
      optionsJa: [
        'A. 必ず横断歩道の手前（停止線）で完全停止し、歩行者が安全に渡り切るまで待つ（妨害は一発検定中止）',
        'B. 歩行者との距離があれば、クラクションを鳴らして歩行者の前を素早く通過する',
      ],
      optionsEn: [
        'A. Come to a complete stop before the crosswalk and wait until the pedestrian finishes crossing (failing to yield = Instant Fail)',
        'B. Slow down slightly and steer around the pedestrian while they are on the stripes',
      ],
      correctIndex: 0,
    },
  },
  TRAFFIC_COLLISION: {
    ruleRefJa: '道路交通法第70条「安全運転義務違反・他車接触（検定中止）」：他の教習車・走行車両との接触事故（一発不合格）',
    ruleRefEn: 'Road Traffic Act Art. 70 "Vehicle Collision (他車接触事故・検定中止)": Collided with another vehicle on the course (Instant Fail).',
    howToFixJa: '交差点や合流では他車（教習車）の動きと優先関係を確認し、十分な車間距離を保って走行してください。',
    howToFixEn: 'Check for other training vehicles at intersections and merges, yield right-of-way, and maintain a safe following distance.',
    quiz: {
      chapterRefJa: '外免切替教本 第5章・道路交通法第36条・第70条「交差点の優先関係（左方優先・直進優先）と車間距離」',
      chapterRefEn: 'Gaimen Kirikae Study Guide Ch. 5 & Road Traffic Act Art. 36/70: "Intersection Right-of-Way & Safe Following Distance"',
      studyPointJa: [
        '道幅が同じ交差点では「左方から来る車」が優先であり、また右折車は「直進車および左折車」の進行を妨げてはならない。',
        '前車に追従する時は、前の車が急停止しても追突しない安全な車間距離を保つ義務がある。',
      ],
      studyPointEn: [
        'At intersections of equal width, vehicles approaching from the LEFT have priority, and right-turning cars must yield to oncoming straight and left-turning traffic.',
        'Always maintain a safe following distance so you can stop smoothly even if the vehicle ahead brakes suddenly.',
      ],
      questionJa: '【理解確認クイズ】交差点での優先関係および他車との車間距離に関する正しいルールは？',
      questionEn: 'Comprehension Check: Which rule governs intersection priority and following traffic in Japan?',
      optionsJa: [
        'A. 直進・左折車が右折車より優先であり、前車との間には急ブレーキにも対応できる安全な車間距離を保つ',
        'B. 右折車の方が直進車より常に優先される',
      ],
      optionsEn: [
        'A. Straight and left-turning vehicles have priority over right-turning vehicles, and you must keep a safe following distance',
        'B. Right-turning vehicles always have right-of-way over oncoming straight traffic',
      ],
      correctIndex: 0,
    },
  },
};

export interface ExamWaypoint {
  id: string;
  stationHint: SpawnStationId;
  x: number;
  z: number;
  radius: number;
  instructionJa: string;
  instructionEn: string;
}

export const EXAM_WAYPOINTS: ExamWaypoint[] = [
  {
    id: 'wp-pullout',
    stationHint: 'startBay',
    x: -10.0,
    z: 47.75,
    radius: 6.5,
    instructionJa: '発着点1番：右ウインカー(E)を出して発進し、左車線へ進みましょう',
    instructionEn: 'Bay 1: Signal right (E), glance right (X), and pull into the left lane',
  },
  {
    id: 'wp-west-turn',
    stationHint: 'stopSign',
    x: -77.75,
    z: 10.0,
    radius: 7.0,
    instructionJa: '外周西側を通って北の直線（40km/h区間）へ向かいましょう',
    instructionEn: 'Continue along the West loop toward the North 40 km/h straight',
  },
  {
    id: 'wp-north-straight',
    stationHint: 'speedStraight',
    x: 10.0,
    z: -47.75,
    radius: 7.5,
    instructionJa: '北直線：駐車車両を右・左ウインカーで回避し、40km/h近くまで加速',
    instructionEn: 'North straight: Signal past the parked van and reach ~35–40 km/h',
  },
  {
    id: 'wp-hill-approach',
    stationHint: 'hillStart',
    x: 24.0,
    z: -24.0,
    radius: 6.0,
    instructionJa: '坂道発進：坂の途中で一度完全停止し、逆行せずに発進しましょう',
    instructionEn: 'Hill Start: Stop on the up-ramp, then pull away cleanly without rollback',
  },
  {
    id: 'wp-bay-access',
    stationHint: 'bayParking',
    x: 26.0,
    z: 30.8,
    radius: 4.5,
    instructionJa: '方向変換：SEエリアの駐車スペースへバックで進入し、前向きに出庫',
    instructionEn: 'Bay Parking: Reverse into the SE T-bay, then exit forward toward the crossing',
  },
  {
    id: 'wp-railroad',
    stationHint: 'railroad',
    x: 22.0,
    z: 1.75,
    radius: 6.5,
    instructionJa: '踏切：停止線手前で完全停止し、左右確認（Z/X）してから通過しましょう',
    instructionEn: 'Railroad: Stop completely before line, look Left & Right (Z/X), then cross',
  },
  {
    id: 'wp-signal',
    stationHint: 'trafficLight',
    x: -15.0,
    z: 1.75,
    radius: 6.5,
    instructionJa: '信号交差点：信号に従って直進し、NWのS字コース入口へ左折',
    instructionEn: 'Signal Intersection: Obey light, cross West, then enter S-Curve (North)',
  },
  {
    id: 'wp-scurve',
    stationHint: 'sCurve',
    x: -27.12,
    z: -36.0,
    radius: 5.5,
    instructionJa: 'S字コース：脱輪・ポール接触に注意して低速で通り抜けましょう',
    instructionEn: 'S-Curve: Creep slowly through the bends without touching curbs or poles',
  },
  {
    id: 'wp-crank',
    stationHint: 'crank',
    x: -34.0,
    z: 36.0,
    radius: 5.5,
    instructionJa: 'クランク：直角コーナーを大回りで曲がり、南外周へ合流しましょう',
    instructionEn: 'Crank: Swing wide around both 90° turns cleanly onto the South road',
  },
  {
    id: 'wp-finish-bay',
    stationHint: 'startBay',
    x: 12.0,
    z: 48.1,
    radius: 3.5,
    instructionJa: 'ゴール：発着点1番の縁石沿いに停止し、完全停止で検定終了です',
    instructionEn: 'Finish: Pull alongside Start Bay 1 and come to a complete stop',
  },
];

interface ZoneTracker {
  approached: boolean;
  stoppedBeforeLine: boolean;
  lookedBothSides: boolean;
  wasClosedOrWarning: boolean;
  crossed: boolean;
  prevSignedDist: number;
}

export class ExaminerEngine {
  private mode: SimMode = 'practice';
  private score = 100;
  private terminated = false;
  private finished = false;
  private simTimeSec = 0;
  private startOdometerM = 0;
  private violations: ViolationEvent[] = [];
  private waypointIndex = 0;
  private cooldowns = new Map<ViolationCode, number>();
  private zoneTrackers = new Map<string, ZoneTracker>();
  private recentSignalTime = -999;
  private recentSignalDir: 'left' | 'right' | null = null;
  private headingSample = 0;
  private headingAccumTurn = 0;
  private hillMaxXOnRamp = -Infinity;
  private handbrakeDragDist = 0;
  private curbMountCount = 0;
  private preDriveChecked = false;
  private spawnedAtStartBay = false;

  // Callbacks / latest UI state
  public lastViolation: ViolationEvent | null = null;
  public onViolation?: (v: ViolationEvent) => void;
  public onExamFinish?: (summary: ExamSummary) => void;

  reset(mode: SimMode, state: VehicleState): void {
    this.mode = mode;
    this.score = 100;
    this.terminated = false;
    this.finished = false;
    this.simTimeSec = 0;
    this.startOdometerM = state.odometerM;
    this.violations = [];
    this.waypointIndex = 0;
    this.cooldowns.clear();
    this.zoneTrackers.clear();
    this.recentSignalTime = -999;
    this.recentSignalDir = null;
    this.headingSample = state.heading;
    this.headingAccumTurn = 0;
    this.hillMaxXOnRamp = -Infinity;
    this.handbrakeDragDist = 0;
    this.curbMountCount = 0;
    this.lastViolation = null;
    const sb = SPAWN_STATIONS.startBay;
    this.spawnedAtStartBay = distance(state.x, state.z, sb.x, sb.z) < 2.2;
    this.preDriveChecked = false;
  }

  getMode(): SimMode {
    return this.mode;
  }

  getScore(): number {
    return Math.max(0, this.score);
  }

  isTerminated(): boolean {
    return this.terminated;
  }

  isFinished(): boolean {
    return this.finished;
  }

  getViolations(): readonly ViolationEvent[] {
    return this.violations;
  }

  getCurrentWaypoint(): ExamWaypoint | null {
    if (this.mode !== 'exam') return null;
    return EXAM_WAYPOINTS[this.waypointIndex] ?? null;
  }

  getWaypointProgress(): { current: number; total: number } {
    return { current: this.waypointIndex, total: EXAM_WAYPOINTS.length };
  }

  getSummary(state: VehicleState): ExamSummary {
    const score = this.getScore();
    const counts = new Map<ViolationCode, number>();
    for (const v of this.violations) {
      counts.set(v.code, (counts.get(v.code) ?? 0) + 1);
    }
    let weakArea: SpawnStationId | undefined;
    if (counts.has('RAILROAD_NO_STOP')) weakArea = 'railroad';
    else if (counts.has('STOP_SIGN_VIOLATION')) weakArea = 'stopSign';
    else if (counts.has('RED_LIGHT')) weakArea = 'trafficLight';
    else if (counts.has('HILL_ROLLBACK')) weakArea = 'hillStart';
    else if (counts.has('CURB_MOUNT') || counts.has('POLE_COLLISION')) {
      weakArea = this.getCurrentWaypoint()?.stationHint ?? 'crank';
    }

    return {
      passed: !this.terminated && score >= 70,
      terminated: this.terminated,
      score,
      elapsedSec: this.simTimeSec,
      distanceM: Math.max(0, state.odometerM - this.startOdometerM),
      violations: [...this.violations],
      weakArea,
    };
  }

  private recordViolation(
    code: ViolationCode,
    points: number,
    instantFail: boolean,
    labelJa: string,
    labelEn: string,
    detailJa: string,
    detailEn: string,
    cooldownSec = 3.0
  ): void {
    if (this.finished) return;
    const prev = this.cooldowns.get(code) ?? -999;
    if (this.simTimeSec - prev < cooldownSec) return;
    this.cooldowns.set(code, this.simTimeSec);

    const meta = VIOLATION_RULE_EXPLANATIONS[code];
    const event: ViolationEvent = {
      id: `${code}-${this.violations.length + 1}`,
      code,
      points,
      instantFail,
      timestampSec: this.simTimeSec,
      labelJa,
      labelEn,
      detailJa,
      detailEn,
      ruleRefJa: meta?.ruleRefJa,
      ruleRefEn: meta?.ruleRefEn,
      howToFixJa: meta?.howToFixJa,
      howToFixEn: meta?.howToFixEn,
      quiz: meta?.quiz,
    };

    this.violations.push(event);
    this.lastViolation = event;
    this.score = Math.max(0, this.score - points);
    this.onViolation?.(event);

    if (instantFail && this.mode === 'exam') {
      this.terminated = true;
      this.finished = true;
    }
  }

  update(
    dt: number,
    state: VehicleState,
    collision: CollisionReport,
    signals: TrafficSignalController,
    trafficSafety?: TrafficSafetyReport
  ): void {
    if (this.finished) return;
    this.simTimeSec += dt;

    // 0. Check Pedestrian Priority & AI Traffic Collision
    if (trafficSafety?.pedestrianDanger) {
      this.recordViolation(
        'PEDESTRIAN_PRIORITY',
        30,
        true,
        '歩行者保護違反（横断歩道）',
        'Pedestrian Crosswalk Violation',
        trafficSafety.pedestrianLabelJa ?? '横断歩道上の歩行者の通行を妨害しました',
        trafficSafety.pedestrianLabelEn ?? 'Failed to stop for a pedestrian crossing the zebra crosswalk',
        4.0
      );
    }
    if (trafficSafety?.trafficCollision) {
      this.recordViolation(
        'TRAFFIC_COLLISION',
        30,
        true,
        '他車接触事故',
        'Traffic Vehicle Collision',
        'コース上の他車（教習車）と接触しました',
        'Collided with another training vehicle on the course',
        3.5
      );
    }

    // 0b. Evaluate Pre-Drive Cockpit Checklist when pulling out of Start Bay 1
    if (this.spawnedAtStartBay && !this.preDriveChecked && state.odometerM - this.startOdometerM > 1.2) {
      this.preDriveChecked = true;
      const pd = state.preDrive;
      if (pd) {
        if (!pd.seatbeltFastened) {
          this.recordViolation(
            'NO_SEATBELT',
            10,
            false,
            'シートベルト未着用',
            'Seatbelt Not Fastened',
            '乗車手順④「シートベルト着用」を行わずに発進しました',
            'Pulled out of Start Bay without fastening seatbelt (Pre-Drive Step 4)',
            10.0
          );
        } else if (!pd.doorLocked || !pd.seatAdjusted || !pd.mirrorsAdjusted || pd.orderErrorStep) {
          this.recordViolation(
            'PRE_DRIVE_ORDER',
            5,
            false,
            '乗車・発進準備手順不備',
            'Pre-Drive Checklist Order Error',
            pd.orderErrorStep
              ? '乗車準備（①ドアロック→②座席調整→③ミラー調整→④シートベルト）の順序が正しくありません'
              : '発進前の座席調整またはミラー確認を省略して発進しました',
            pd.orderErrorStep
              ? 'Pre-drive cockpit preparation steps were performed out of the official Japanese exam sequence'
              : 'Pulled out without completing Door Lock → Seat Adjust → Mirror Check in order',
            10.0
          );
        } else if (!pd.fivePointLookDone && this.simTimeSec - state.lookedRightTimestamp > 8.0) {
          this.recordViolation(
            'NO_SAFETY_LOOK',
            5,
            false,
            '発進時5点安全確認不足',
            'Missing Pull-Out Safety Look',
            '発進前の後方・右死角目視確認（Xキーまたは手順⑧）を行わずに発進しました',
            'Pulled out from curb without performing right blind-spot shoulder check (X / Step 8)',
            8.0
          );
        }
      }
    }

    // 1. Track active signal history (valid for 7s after turn starts)
    if (state.blinker === 'left' || state.blinker === 'right') {
      this.recentSignalTime = this.simTimeSec;
      this.recentSignalDir = state.blinker;
    }

    // 2. Curb touches & mounts
    if (collision.anyCurbMount) {
      this.curbMountCount++;
      const fail = this.mode === 'exam' && this.curbMountCount >= 2;
      this.recordViolation(
        'CURB_MOUNT',
        20,
        fail,
        '脱輪',
        'Curb Mount',
        'タイヤが縁石に乗り上げました',
        'Wheel mounted over the course curb',
        3.0
      );
    } else if (collision.anyCurbTouch) {
      this.recordViolation(
        'CURB_TOUCH',
        10,
        false,
        '接輪',
        'Curb Scrape',
        'タイヤが縁石に接触しました',
        'Tire brushed against the curb',
        2.5
      );
    }

    // 3. Pole / Parked obstacle contact
    if (collision.poleHit || (collision.obstacleHit && collision.obstacleHit.kind === 'parkedCar')) {
      this.recordViolation(
        'POLE_COLLISION',
        30,
        true,
        '接触事故',
        'Obstacle Contact',
        'ポールまたは障害物に接触しました',
        'Vehicle struck a course marker pole or obstacle',
        2.5
      );
    }

    // 4. Speed limit (> 46 km/h inside Kyoshujo)
    const speedKmh = Math.abs(state.speedMs) * 3.6;
    if (speedKmh > 46.0) {
      this.recordViolation(
        'SPEED_LIMIT',
        10,
        false,
        '速度超過',
        'Speeding',
        '場内制限速度（40km/h）を大幅に超過しました',
        'Exceeded 40 km/h compound speed limit',
        4.0
      );
    }

    // 5. Handbrake drag
    if (state.handbrake && Math.abs(state.speedMs) > 1.2) {
      this.handbrakeDragDist += Math.abs(state.speedMs) * dt;
      if (this.handbrakeDragDist > 3.5) {
        this.handbrakeDragDist = 0;
        this.recordViolation(
          'HANDBRAKE_DRAG',
          5,
          false,
          'サイド戻し忘れ',
          'Handbrake Left On',
          'サイドブレーキを引いたまま走行しています',
          'Driving with the parking brake still engaged',
          5.0
        );
      }
    } else {
      this.handbrakeDragDist = 0;
    }

    // 6. Hill Start rollback tracking (x in [19, 34], z around -24, heading East)
    if (
      state.x > HILL_UP_START + 1.0 &&
      state.x < HILL_UP_END &&
      Math.abs(state.z - HILL_Z) < 3.0
    ) {
      if (state.x > this.hillMaxXOnRamp) {
        this.hillMaxXOnRamp = state.x;
      }
      const rollback = this.hillMaxXOnRamp - state.x;
      if (rollback > 0.35 && state.speedMs < -0.15) {
        const fail = rollback > 1.0;
        this.recordViolation(
          'HILL_ROLLBACK',
          fail ? 30 : 10,
          fail,
          '坂道逆行',
          'Hill Rollback',
          fail ? '坂道で1m以上逆行しました' : '坂道で車両が後退しました',
          fail ? 'Rolled back over 1.0m on hill ramp' : 'Vehicle rolled backward on hill ramp',
          4.0
        );
      }
    } else {
      this.hillMaxXOnRamp = -Infinity;
    }

    // 7. Stop lines: Stop Signs, Railroad Crossing, Traffic Signals
    this.evaluateStopLines(state, signals);

    // 8. Turn signal requirement on major turns (> 55 deg heading change in short window)
    const dh = normalizeAngle(state.heading - this.headingSample);
    this.headingSample = state.heading;
    if (state.speedMs > 1.5) {
      this.headingAccumTurn += dh;
      if (Math.abs(this.headingAccumTurn) > 0.96) {
        const turnDir = this.headingAccumTurn > 0 ? 'left' : 'right';
        // Ignore S-Curve interior bends (NW quadrant) where blinkers aren't used inside S-Curve
        const insideSCurve = state.x < -24 && state.x > -50 && state.z < -4 && state.z > -42;
        const signalValid =
          this.simTimeSec - this.recentSignalTime < 7.0 && this.recentSignalDir === turnDir;
        if (!insideSCurve && !signalValid) {
          this.recordViolation(
            'NO_SIGNAL',
            5,
            false,
            '合図不履行',
            'Missing Blinker',
            `${turnDir === 'left' ? '左折' : '右折'}時のウインカー合図がありません`,
            `Turned ${turnDir} without activating blinker beforehand`,
            3.5
          );
        }
        this.headingAccumTurn = 0;
      }
    } else {
      this.headingAccumTurn *= Math.max(0, 1 - dt * 0.5);
    }

    // Check obstacle avoidance signal near North parked van (-10, -48.1)
    const van = OBSTACLE_COLLIDERS[0];
    if (van && Math.abs(state.x - van.x) < 2.0 && state.z > -50 && state.z < -42.5 && state.speedMs > 1.5) {
      // Passing parked van on right lane should have signal history
      if (this.simTimeSec - this.recentSignalTime > 8.0) {
        this.recordViolation(
          'NO_SIGNAL',
          5,
          false,
          '進路変更合図不履行',
          'Missing Lane Signal',
          '障害物回避時の右・左ウインカー合図がありません',
          'Passed parked obstacle without turn signal',
          6.0
        );
      }
    }

    // 9. Advance Exam Waypoints & Check Finish
    if (this.mode === 'exam' && !this.finished) {
      const wp = EXAM_WAYPOINTS[this.waypointIndex];
      if (wp && distance(state.x, state.z, wp.x, wp.z) <= wp.radius) {
        const isLast = this.waypointIndex === EXAM_WAYPOINTS.length - 1;
        if (isLast) {
          if (Math.abs(state.speedMs) < 0.15) {
            this.finished = true;
            this.onExamFinish?.(this.getSummary(state));
          }
        } else {
          this.waypointIndex++;
        }
      }
    }

    if (this.terminated && this.finished) {
      this.onExamFinish?.(this.getSummary(state));
    }
  }

  private evaluateStopLines(state: VehicleState, signals: TrafficSignalController): void {
    const railState = signals.getRailroadState();

    for (const zone of STOP_LINE_ZONES) {
      let tracker = this.zoneTrackers.get(zone.id);
      if (!tracker) {
        tracker = {
          approached: false,
          stoppedBeforeLine: false,
          lookedBothSides: false,
          wasClosedOrWarning: false,
          crossed: false,
          prevSignedDist: 999,
        };
        this.zoneTrackers.set(zone.id, tracker);
      }

      // Signed distance along approach direction: negative = before line, positive = past line
      const dx = state.x - zone.x;
      const dz = state.z - zone.z;
      const signedDist = dx * zone.dirX + dz * zone.dirZ;
      // Lateral distance perpendicular to approach direction
      const perpX = -zone.dirZ;
      const perpZ = zone.dirX;
      const lateralDist = Math.abs(dx * perpX + dz * perpZ);
      // Alignment check: vehicle must be roughly facing the zone travel direction
      const fwdDot = -Math.sin(state.heading) * zone.dirX - Math.cos(state.heading) * zone.dirZ;

      const inApproachCorridor = lateralDist <= zone.halfWidth + 0.9 && fwdDot > 0.65;

      if (inApproachCorridor && signedDist >= -9.0 && signedDist <= -0.1) {
        tracker.approached = true;
        if (Math.abs(state.speedMs) < 0.15) {
          tracker.stoppedBeforeLine = true;
        }
        const lookedL = this.simTimeSec - state.lookedLeftTimestamp < 6.0;
        const lookedR = this.simTimeSec - state.lookedRightTimestamp < 6.0;
        if (lookedL && lookedR) {
          tracker.lookedBothSides = true;
        }
        if (zone.kind === 'railroad' && railState.isWarningActive) {
          tracker.wasClosedOrWarning = true;
        }
      }

      // Detect line crossing (prevSignedDist < 0 -> signedDist >= 0)
      if (
        tracker.approached &&
        inApproachCorridor &&
        tracker.prevSignedDist < 0 &&
        signedDist >= 0 &&
        signedDist < 3.0
      ) {
        this.handleLineCrossed(zone, tracker, signals, railState.isWarningActive);
        tracker.approached = false;
        tracker.stoppedBeforeLine = false;
        tracker.lookedBothSides = false;
        tracker.wasClosedOrWarning = false;
      }

      // Reset tracker if moved far away
      if (Math.abs(signedDist) > 14.0 || lateralDist > 8.0) {
        tracker.approached = false;
        tracker.stoppedBeforeLine = false;
        tracker.lookedBothSides = false;
        tracker.wasClosedOrWarning = false;
      }

      tracker.prevSignedDist = signedDist;
    }
  }

  private handleLineCrossed(
    zone: StopLineZone,
    tracker: ZoneTracker,
    signals: TrafficSignalController,
    railWarningNow: boolean
  ): void {
    if (zone.kind === 'stopSign') {
      if (!tracker.stoppedBeforeLine) {
        this.recordViolation(
          'STOP_SIGN_VIOLATION',
          25,
          true,
          '指定場所一時不停止',
          'Stop Sign Violation',
          '「止まれ」停止線手前で完全停止していません',
          'Failed to come to a complete 0 km/h stop at 止まれ line',
          3.0
        );
      } else if (!tracker.lookedBothSides) {
        this.recordViolation(
          'NO_SAFETY_LOOK',
          5,
          false,
          '安全確認不履行',
          'Missing L/R Check',
          '発進前の左右安全確認（Z/Xキー）が不足しています',
          'Proceeded from stop line without glancing Left & Right (Z/X)',
          3.0
        );
      }
    } else if (zone.kind === 'railroad') {
      if (!tracker.stoppedBeforeLine || railWarningNow || tracker.wasClosedOrWarning) {
        this.recordViolation(
          'RAILROAD_NO_STOP',
          30,
          true,
          '踏切不停止・遮断機無視',
          'Railroad Violation',
          railWarningNow ? '警報機作動中に踏切へ進入しました' : '踏切手前で完全停止していません',
          railWarningNow
            ? 'Entered railroad crossing while warning/barrier active'
            : 'Crossed railroad tracks without stopping before stop line',
          3.0
        );
      } else if (!tracker.lookedBothSides) {
        this.recordViolation(
          'NO_SAFETY_LOOK',
          5,
          false,
          '踏切安全確認不履行',
          'Railroad Look Check',
          '踏切通過前の左右確認（Z/Xキー）が不足しています',
          'Crossed railroad without checking Left & Right (Z/X)',
          3.0
        );
      }
    } else if (zone.kind === 'trafficLight' && zone.axis) {
      const light = signals.getLightForAxis(zone.axis);
      if (light === 'red') {
        this.recordViolation(
          'RED_LIGHT',
          30,
          true,
          '信号無視',
          'Red Light Violation',
          '赤信号で交差点に進入しました',
          'Crossed intersection stop line on a RED traffic signal',
          3.0
        );
      }
    }
  }
}
