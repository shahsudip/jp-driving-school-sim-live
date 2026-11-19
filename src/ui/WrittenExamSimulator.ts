import type { Locale } from '../types';

export interface WrittenQuestion {
  id: number;
  chapter: string;
  qJa: string;
  qEn: string;
  answer: boolean; // true = ○ (True), false = × (False)
  expJa: string;
  expEn: string;
}

export const WRITTEN_EXAM_QUESTIONS: WrittenQuestion[] = [
  {
    id: 1,
    chapter: 'Ch.1 Traffic Lights (信号機)',
    qJa: '前方の信号が黄色の灯火に変わったときは、注意しながらそのまま進行することができる。',
    qEn: 'When the traffic light ahead turns solid yellow, you may proceed through the intersection with caution.',
    answer: false,
    expJa: '× 誤り：黄色の灯火は原則「止まれ」です。停止位置に近づきすぎて安全に停止できない場合のみ進行できます。',
    expEn: 'FALSE: A solid yellow light means STOP (unless you are already so close to the stop line that you cannot stop safely).',
  },
  {
    id: 2,
    chapter: 'Ch.1 Traffic Lights (信号機)',
    qJa: '黄色の点滅信号がある交差点では、他の交通に注意して進行することができる。',
    qEn: 'At an intersection with a flashing yellow traffic light, you may proceed while paying attention to other traffic.',
    answer: true,
    expJa: '○ 正しい：黄色の点滅信号は「他の交通に注意して進行できる」という意味です（一時停止の義務はありません）。',
    expEn: 'TRUE: A flashing yellow light means proceed with caution while watching for other traffic.',
  },
  {
    id: 3,
    chapter: 'Ch.1 Traffic Lights (信号機)',
    qJa: '赤色の点滅信号では、停止位置で一時停止し、安全を確認した後に進行できる。',
    qEn: 'At a flashing red traffic light, you must come to a complete stop at the stop line, check for safety, and then proceed.',
    answer: true,
    expJa: '○ 正しい：赤色の点滅信号は「一時停止（止まれ）」と同じく、停止線で完全停止して左右の安全確認後に進行できます。',
    expEn: 'TRUE: A flashing red light acts like a STOP sign (止まれ): stop completely at the stop line, check safety, and proceed.',
  },
  {
    id: 4,
    chapter: 'Ch.1 Traffic Lights (信号機)',
    qJa: '赤信号の下に右向きの青色矢印（→）が表示されているときは、右折だけでなく転回（Uターン）もできる（転回禁止場所を除く）。',
    qEn: 'When a green right-turn arrow (→) is lit below a red signal, you may make both a right turn and a U-turn (unless U-turns are prohibited).',
    answer: true,
    expJa: '○ 正しい：右向きの青矢印信号では、右折のほか、転回禁止標識がない限り転回（Uターン）も可能です。',
    expEn: 'TRUE: Under Japanese Road Traffic Regulations, a green right-turn arrow permits both right turns and U-turns (unless prohibited by a No U-Turn sign).',
  },
  {
    id: 5,
    chapter: 'Ch.2 Road Signs (道路標識)',
    qJa: '赤い逆三角形の「止まれ」標識がある交差点でも、見通しが良ければ徐行して通過してよい。',
    qEn: 'At an intersection with a red inverted-triangle "止まれ (STOP)" sign, you may roll through slowly if visibility is clear.',
    answer: false,
    expJa: '× 誤り：「止まれ」標識では必ず停止線の直前で車輪を完全停止（0 km/h）させなければなりません。',
    expEn: 'FALSE: You must always bring your vehicle to a complete 0 km/h dead stop before the stop line at any 止まれ sign.',
  },
  {
    id: 6,
    chapter: 'Ch.2 Road Signs (道路標識)',
    qJa: '青地に赤枠で斜線1本の標識は「駐車禁止」を表し、人の乗降や5分以内の荷物の積み下ろしのための停車はできる。',
    qEn: 'A blue circular sign with a red border and a single diagonal red slash means "No Parking", allowing brief stops for passenger drop-off or cargo loading under 5 minutes.',
    answer: true,
    expJa: '○ 正しい：斜線1本は「駐車禁止」なので停車は可能です（バツ印2本の「駐停車禁止」では停車も禁止）。',
    expEn: 'TRUE: A single slash is No Parking (駐車禁止), so brief stopping is permitted. A double X slash is No Parking & No Stopping (駐停車禁止).',
  },
  {
    id: 7,
    chapter: 'Ch.3 Road Markings (路面標示)',
    qJa: '中央線が黄色の実線の道路では、いかなる場合も前の車を追い越してはならない。',
    qEn: 'On a road where the centerline is a solid yellow line, overtaking a vehicle ahead is prohibited under all circumstances.',
    answer: false,
    expJa: '× 誤り：黄色実線の中央線は「追い越しのための右側部分はみ出し通行禁止」です。中央線を越えずに左側車線内で追い越すことは可能です。',
    expEn: 'FALSE: A solid yellow centerline means "Do not cross into the right side to overtake." You may still overtake if you stay completely within the left side of the yellow line.',
  },
  {
    id: 8,
    chapter: 'Ch.3 Road Markings (路面標示)',
    qJa: '路面に白いひし形（◇）の標示があるときは、前方に信号機のない横断歩道または自転車横断帯があることを示している。',
    qEn: 'A white diamond (◇) painted on the road surface warns that there is an unsignalized pedestrian or bicycle crosswalk ahead.',
    answer: true,
    expJa: '○ 正しい：白いダイヤマーク（◇）は横断歩道・自転車横断帯の30m手前と15m手前に設置される事前予告標示です。',
    expEn: 'TRUE: White road diamonds (◇) are painted 30m and 15m ahead of unsignalized pedestrian or bicycle crosswalks.',
  },
  {
    id: 9,
    chapter: 'Ch.4 Lane Discipline (通行区分)',
    qJa: '片側3車線の道路では、最も右側の通行帯は追い越しなどのために空けておき、通常は左側の2つの車線を通行する。',
    qEn: 'On a road with 3 lanes in your direction, the rightmost lane must be kept clear for overtaking, and ordinary driving should use the left two lanes.',
    answer: true,
    expJa: '○ 正しい：同一方向に3つ以上の車両通行帯がある場合、最も右側の車線は追い越し等のために空けておきます。',
    expEn: 'TRUE: On roads with 3 or more lanes in the same direction, keep the rightmost lane open for overtaking and faster traffic.',
  },
  {
    id: 10,
    chapter: 'Ch.5 Intersections (交差点)',
    qJa: '交通整理の行われていない同じ道幅の交差点では、右方から来る車が優先である。',
    qEn: 'At an uncontrolled intersection of two roads of equal width, vehicles approaching from the RIGHT have priority.',
    answer: false,
    expJa: '× 誤り：日本は左側通行のため、同じ道幅の交差点では「左方から来る車（左方優先）」に優先権があります。',
    expEn: 'FALSE: In Japan (left-hand traffic), at uncontrolled intersections of equal width, vehicles approaching from the LEFT have right-of-way (左方優先).',
  },
  {
    id: 11,
    chapter: 'Ch.5 Intersections (交差点)',
    qJa: '交差点で右折するときは、対向車線を直進してくる車や左折しようとする車の進行を妨げてはならない。',
    qEn: 'When turning right at an intersection, you must yield to oncoming vehicles going straight or turning left.',
    answer: true,
    expJa: '○ 正しい：直進車・左折車が優先です。右折車は交差点の中心のすぐ内側で待機し、対向車が通過してから右折します。',
    expEn: 'TRUE: Oncoming straight and left-turning traffic always have priority over right-turning vehicles.',
  },
  {
    id: 12,
    chapter: 'Ch.6 Left & Right Turns (右左折・合図)',
    qJa: '交差点を左折または右折するときは、その交差点の30メートル手前の地点でウインカー（方向指示器）を出す。',
    qEn: 'When turning left or right at an intersection, you must activate your turn signal 30 meters before the intersection.',
    answer: true,
    expJa: '○ 正しい：右左折・転回（Uターン）の合図は30m手前、進路変更（車線変更）の合図は3秒前に出します。',
    expEn: 'TRUE: Intersection turns and U-turns require signaling 30 meters in advance (lane changes require 3 seconds in advance).',
  },
  {
    id: 13,
    chapter: 'Ch.6 Left & Right Turns (右左折・合図)',
    qJa: '進路変更（車線変更）をするときは、ウインカーを出すのと同時にハンドルを切ってよい。',
    qEn: 'When changing lanes, you may begin turning the steering wheel at the exact same moment you activate your turn signal.',
    answer: false,
    expJa: '× 誤り：進路変更は①ミラー確認→②ウインカー合図→③3秒待つ→④死角の目視確認→⑤ハンドル操作の順に行います。',
    expEn: 'FALSE: You must check mirrors, activate your turn signal, wait 3 full seconds, check your blind spot over your shoulder, and only then change lanes.',
  },
  {
    id: 14,
    chapter: 'Ch.6 Left & Right Turns (右左折・合図)',
    qJa: '左折するときは、あらかじめできるだけ道路の左端に寄り、徐行しながら小回りで曲がる。',
    qEn: 'When turning left, move close to the left edge of the road in advance and turn tightly at slow speed (Jokō).',
    answer: true,
    expJa: '○ 正しい：二輪車や自転車の巻き込みを防ぐため、あらかじめ左端に寄ってから徐行で小さく左折します。',
    expEn: 'TRUE: Moving close to the left curb in advance prevents bicycles or motorcycles from squeezing into your left blind spot (巻き込み防止).',
  },
  {
    id: 15,
    chapter: 'Ch.6 Left & Right Turns (右左折・合図)',
    qJa: '左折しやすくするため、一度右にハンドルを振ってから左折する（あおりハンドル）のが良い。',
    qEn: 'To make a left turn easier, it is good practice to swing the car slightly to the right before turning left.',
    answer: false,
    expJa: '× 誤り：右に振ってから左折する「あおりハンドル」は後続車や二輪車との接触事故を招くため厳禁（減点対象）です。',
    expEn: 'FALSE: Swinging wide to the right before turning left (あおりハンドル) is dangerous and causes immediate point deductions in the practical exam.',
  },
  {
    id: 16,
    chapter: 'Ch.7 Speed & Slow Down (速度と徐行)',
    qJa: '標識や標示で最高速度が指定されていない一般道路における普通自動車の法定最高速度は、時速60キロメートルである。',
    qEn: 'On ordinary roads where no speed limit sign is posted, the statutory maximum speed for standard passenger cars is 60 km/h.',
    answer: true,
    expJa: '○ 正しい：一般道路の法定最高速度は自動車60 km/h、原動機付自転車（50cc以下）は30 km/hです。',
    expEn: 'TRUE: The statutory speed limit on ordinary roads is 60 km/h for passenger cars/motorcycles and 30 km/h for 50cc mopeds.',
  },
  {
    id: 17,
    chapter: 'Ch.7 Speed & Slow Down (速度と徐行)',
    qJa: '「徐行」とは、ブレーキを操作してからおおむね1メートル以内で直ちに停止できるような速度（時速10km以下目安）で進行することをいう。',
    qEn: '"Slow Down (徐行 / Jokō)" means driving at a speed where you can stop immediately (within approximately 1 meter, or ≤10 km/h).',
    answer: true,
    expJa: '○ 正しい：徐行とは直ちに停止できる速度（時速10km以下、制動距離1m以内目安）のことです。',
    expEn: 'TRUE: Jokō (徐行) is defined under Japanese law as a speed at which the vehicle can stop immediately upon braking (~10 km/h or less).',
  },
  {
    id: 18,
    chapter: 'Ch.7 Speed & Slow Down (速度と徐行)',
    qJa: '上り坂の頂上付近や、勾配の急な下り坂では徐行しなければならないが、勾配の急な上り坂では徐行の義務はない。',
    qEn: 'You must slow down (徐行) near the top of an uphill slope and on steep downhill slopes, but not on steep uphill slopes.',
    answer: true,
    expJa: '○ 正しい：徐行義務があるのは「上り坂の頂上付近」と「勾配の急な下り坂」です（急な上り坂の途中は徐行場所ではありません）。',
    expEn: 'TRUE: A classic exam trap! Jokō is mandatory near hill crests (上り坂の頂上付近) and on steep descents (勾配の急な下り坂), NOT on steep ascents.',
  },
  {
    id: 19,
    chapter: 'Ch.8 Stopping Distance (停止距離)',
    qJa: '車が停止するまでの「停止距離」とは、危険を感じてからブレーキが効き始めるまでの「空走距離」と、ブレーキが効いてから止まるまでの「制動距離」を合わせた距離である。',
    qEn: 'Total stopping distance (停止距離) equals reaction distance (空走距離) plus braking distance (制動距離).',
    answer: true,
    expJa: '○ 正しい：停止距離 ＝ 空走距離（反応時間中に走る距離）＋ 制動距離（ブレーキが効いてから止まる距離）です。',
    expEn: 'TRUE: Stopping Distance = Reaction Distance (空走距離) + Braking Distance (制動距離).',
  },
  {
    id: 20,
    chapter: 'Ch.8 Stopping Distance (停止距離)',
    qJa: '速度が2倍になると、制動距離も2倍になる。',
    qEn: 'When vehicle speed doubles, the braking distance (制動距離) also doubles.',
    answer: false,
    expJa: '× 誤り：速度が2倍になると、空走距離は2倍になりますが、制動距離は速度の2乗に比例するため「4倍」になります！',
    expEn: 'FALSE: Braking distance increases with the SQUARE of speed. Doubling your speed makes your braking distance 4 TIMES longer (and 9 times longer at 3x speed).',
  },
  {
    id: 21,
    chapter: 'Ch.9 Overtaking & Passing (追い越し・追い抜き)',
    qJa: '横断歩道や自転車横断帯とその手前30メートル以内の場所では、他の自動車や原付を追い越すことも追い抜くことも禁止されている。',
    qEn: 'Within 30 meters before a pedestrian or bicycle crosswalk, both overtaking (changing lanes) and passing (without changing lanes) any motor vehicle are prohibited.',
    answer: true,
    expJa: '○ 正しい：横断歩道・自転車横断帯とその手前30m以内は「追い越し」だけでなく「追い抜き」もすべて禁止です。',
    expEn: 'TRUE: Within 30m before a crosswalk, you must not pass any moving motor vehicle—neither by changing lanes (追い越し) nor in an adjacent lane (追い抜き).',
  },
  {
    id: 22,
    chapter: 'Ch.9 Overtaking & Passing (追い越し・追い抜き)',
    qJa: '前の車が右折しようとして道路の中央に寄っているときは、その左側を通って追い越すことができる。',
    qEn: 'When a vehicle ahead has moved toward the center of the road to make a right turn, you may pass it on its left side.',
    answer: true,
    expJa: '○ 正しい：追い越しは原則「右側」からですが、前車が右折のために中央に寄っているときは例外として「左側」から追い越します。',
    expEn: 'TRUE: Normally overtaking is done on the right, EXCEPT when the vehicle ahead is signaling and positioned to turn right—then you must pass on its left.',
  },
  {
    id: 23,
    chapter: 'Ch.9 Overtaking & Passing (追い越し・追い抜き)',
    qJa: '前の車が他の自動車を追い越そうとしているときでも、自分の車の方が速ければ二重追い越しをしてよい。',
    qEn: 'Even if the car ahead is already overtaking another motor vehicle, you may overtake it at the same time (double overtaking) if your car is faster.',
    answer: false,
    expJa: '× 誤り：前車が他の自動車やトロリーバスを追い越そうとしているときの「二重追い越し」は法律で禁止されています。',
    expEn: 'FALSE: Double overtaking (二重追い越し) when the car ahead is overtaking another motor vehicle is strictly prohibited.',
  },
  {
    id: 24,
    chapter: 'Ch.10 Parking & Stopping (駐停車禁止)',
    qJa: '交差点や横断歩道の端から5メートル以内の場所は、駐車も停車も禁止（駐停車禁止）されている。',
    qEn: 'Both parking and stopping are prohibited within 5 meters of the edge of an intersection or pedestrian crosswalk.',
    answer: true,
    expJa: '○ 正しい：交差点・横断歩道・自転車横断帯とその端から5m以内は「駐停車禁止」です。',
    expEn: 'TRUE: Within 5 meters of an intersection or crosswalk is a strict No-Stopping and No-Parking zone (駐停車禁止).',
  },
  {
    id: 25,
    chapter: 'Ch.10 Parking & Stopping (駐停車禁止)',
    qJa: '踏切の端から10メートル以内の場所と、バス停留所の標示板から10メートル以内の場所（運行時間中）は、駐停車禁止である。',
    qEn: 'Within 10 meters of a railroad crossing and within 10 meters of a bus stop sign (during operating hours) are No-Stopping and No-Parking zones.',
    answer: true,
    expJa: '○ 正しい：踏切から10m以内、および運行時間中のバス停から10m以内は「駐停車禁止」です。',
    expEn: 'TRUE: Both parking and stopping are banned within 10m of railroad crossings and within 10m of active bus stops.',
  },
  {
    id: 26,
    chapter: 'Ch.10 Parking & Stopping (駐停車禁止)',
    qJa: '消火栓から5メートル以内の場所や、人の車庫（駐車場）の出入口から3メートル以内の場所は「駐車禁止」であるが、人の乗降のための短時間の「停車」はできる。',
    qEn: 'Within 5 meters of a fire hydrant and within 3 meters of a garage driveway are "No Parking" zones, meaning brief "Stopping" for passenger pick-up is allowed.',
    answer: true,
    expJa: '○ 正しい：消火栓（5m以内）・車庫出入口（3m以内）・工事区域（5m以内）は「駐車禁止」なので、停車は可能です！',
    expEn: 'TRUE: Fire hydrants (5m), garage driveways (3m), and roadworks (5m) are No-Parking (駐車禁止) zones, not No-Stopping zones.',
  },
  {
    id: 27,
    chapter: 'Ch.10 Parking & Stopping (駐停車禁止)',
    qJa: '運転者が車に乗っていれば、20分以上継続して止まっていても「駐車」にはならず「停車」とみなされる。',
    qEn: 'As long as the driver remains seated inside the car, waiting continuously for 20 minutes is considered "Stopping (停車)" rather than "Parking (駐車)".',
    answer: false,
    expJa: '× 誤り：運転者が車内にいても、客待ちや荷待ちなどで継続的に停止（または5分を超える荷物の積み下ろし）する場合は「駐車」となります。',
    expEn: 'FALSE: Even if the driver stays in the driver seat, waiting continuously (or cargo loading exceeding 5 minutes) is legally classified as Parking (駐車).',
  },
  {
    id: 28,
    chapter: 'Ch.11 Pedestrians & Cyclists (歩行者保護)',
    qJa: '信号のない横断歩道を渡ろうとしている歩行者がいるときは、横断歩道の手前（停止線）で一時停止して歩行者に道を譲らなければならない。',
    qEn: 'When a pedestrian is waiting to cross at an unsignalized crosswalk, you must come to a complete stop before the crosswalk and yield.',
    answer: true,
    expJa: '○ 正しい：歩行者が横断中または横断しようとしているときは必ず一時停止します（違反は技能試験で一発検定中止）。',
    expEn: 'TRUE: Failing to stop for a pedestrian crossing or about to cross a zebra crosswalk is an automatic disqualification.',
  },
  {
    id: 29,
    chapter: 'Ch.11 Pedestrians & Cyclists (歩行者保護)',
    qJa: '白い杖を持った人（目の不自由な人）や盲導犬を連れた人が道路を通行しているときは、一時停止するか徐行しなければならない。',
    qEn: 'When passing a person carrying a white cane or accompanied by a guide dog, you must either come to a complete stop or slow down (徐行).',
    answer: true,
    expJa: '○ 正しい：白杖・盲導犬・高齢者・児童・車いす等の通行に支障があるときは一時停止または徐行して保護します。',
    expEn: 'TRUE: Drivers must stop or slow down (徐行) to protect pedestrians with white canes, guide dogs, wheelchairs, or young children flying solo.',
  },
  {
    id: 30,
    chapter: 'Ch.11 Pedestrians & Cyclists (歩行者保護)',
    qJa: '安全地帯に路面電車が止まっていなくても、安全地帯のそばに歩行者がいるときは徐行して通過しなければならない。',
    qEn: 'Even if no streetcar is present at a safety zone (安全地帯), you must slow down (徐行) when passing if pedestrians are standing in the safety zone.',
    answer: true,
    expJa: '○ 正しい：安全地帯に歩行者がいるときは、路面電車の有無にかかわらず徐行義務があります。',
    expEn: 'TRUE: Whenever pedestrians are on a safety island (安全地帯), you must pass at slow speed (徐行), even if no streetcar is stopped there.',
  },
  {
    id: 31,
    chapter: 'Ch.11 Pedestrians & Cyclists (歩行者保護)',
    qJa: '停止している通学・通園バスのそばを通過するときは、児童・幼児が飛び出してくるおそれがあるため徐行して安全を確認する。',
    qEn: 'When passing a stopped school or kindergarten bus, you must slow down (徐行) and check for children who might dart out.',
    answer: true,
    expJa: '○ 正しい：乗降中の通学・通園バスの側方を通過するときは必ず徐行して安全を確認します。',
    expEn: 'TRUE: You are legally required to slow down (徐行) when passing a stopped school/kindergarten bus unloading children.',
  },
  {
    id: 32,
    chapter: 'Ch.12 Railway Crossings (踏切)',
    qJa: '踏切を通過するとき、前の車に続いて進行すれば一時停止を省略して通過することができる。',
    qEn: 'When crossing a railroad track, if you are following directly behind another car that just stopped, you may cross without stopping yourself.',
    answer: false,
    expJa: '× 誤り：前の車が一時停止していても、自分の車も必ず停止線手前で完全停止し、左右の安全確認を行わなければなりません。',
    expEn: 'FALSE: Every vehicle must stop independently at the railroad stop line—you may never piggyback on the car ahead.',
  },
  {
    id: 33,
    chapter: 'Ch.12 Railway Crossings (踏切)',
    qJa: '踏切内でエンストを防ぐため、踏切を通過している途中でギアチェンジ（変速）を行ってはならない。',
    qEn: 'To prevent stalling on the tracks, you must not shift gears while crossing a railroad crossing.',
    answer: true,
    expJa: '○ 正しい：踏切内では変速せず、発進した低いギアのまま一気に通過します。',
    expEn: 'TRUE: Never shift gears while on railway tracks; cross in one continuous motion in your starting gear.',
  },
  {
    id: 34,
    chapter: 'Ch.12 Railway Crossings (踏切)',
    qJa: '踏切の向こう側が渋滞していて自分の車が入る余地がないときは、遮断機が開いていても踏切内に進入してはならない。',
    qEn: 'If traffic on the far side of a railroad crossing is backed up with no room for your car, you must not enter the crossing even if the barrier gates are open.',
    answer: true,
    expJa: '○ 正しい：前方の状況により踏切内で立ち往生するおそれがあるときは、踏切の手前で待たなければなりません。',
    expEn: 'TRUE: Never enter a railroad crossing (or intersection) if congestion on the other side could trap you on the tracks.',
  },
  {
    id: 35,
    chapter: 'Ch.13 Emergency & Buses (緊急自動車・路線バス)',
    qJa: '交差点付近でサイレンを鳴らし赤色灯をつけた緊急自動車が近づいてきたときは、交差点を避けて道路の左側に寄って一時停止しなければならない。',
    qEn: 'When an emergency vehicle with sirens and red flashing lights approaches near an intersection, you must clear the intersection, pull over to the left, and come to a complete stop.',
    answer: true,
    expJa: '○ 正しい：交差点付近では「交差点を避けて道路の左側に寄って一時停止」、それ以外の場所では「道路の左側に寄って進路を譲る」がルールです。',
    expEn: 'TRUE: Near an intersection, clear the intersection, move left, and STOP completely. Away from intersections, move left to yield.',
  },
  {
    id: 36,
    chapter: 'Ch.13 Emergency & Buses (緊急自動車・路線バス)',
    qJa: '停留所で止まっていた路線バスが発進のウインカー合図を出したときは、急ブレーキや急ハンドルにならない限り、その発進を妨げてはならない。',
    qEn: 'When a public transit bus at a bus stop signals to pull out, you must yield and allow it to depart unless doing so requires sudden braking or swerving.',
    answer: true,
    expJa: '○ 正しい：発進合図を出した路線バスには進路を譲る義務があります。',
    expEn: 'TRUE: Drivers must yield to a signaling transit bus pulling out from a bus stop.',
  },
  {
    id: 37,
    chapter: 'Ch.14 Night & Lights (夜間・灯火・ホーン)',
    qJa: '夜間、対向車とすれ違うときや前の車のすぐ後ろを走行するときは、ヘッドライトを下向き（ロービーム）に切り替えなければならない。',
    qEn: 'At night, when meeting an oncoming vehicle or following closely behind another vehicle, you must switch your headlights to low beam.',
    answer: true,
    expJa: '○ 正しい：夜間は原則ハイビームですが、対向車とすれ違うときや前車の直後を走るときは眩惑防止のためロービームに切り替えます。',
    expEn: 'TRUE: Switch from high beams (走行用前照灯) to low beams (すれ違い用前照灯) when oncoming traffic approaches or when following another car.',
  },
  {
    id: 38,
    chapter: 'Ch.14 Night & Lights (夜間・灯火・ホーン)',
    qJa: '道を譲ってもらったときのお礼として、警音器（クラクション）を軽く鳴らすのは良いマナーであり法律でも推奨されている。',
    qEn: 'Lightly honking the horn to say "thank you" when another driver yields to you is good manners and encouraged by law.',
    answer: false,
    expJa: '× 誤り：警音器（ホーン）は「警音器を鳴らせ」の標識がある場所、または危険を避けるためやむを得ない場合以外は鳴らしてはいけません。',
    expEn: 'FALSE: Under Japanese law, the horn may ONLY be used where required by a horn sign or when strictly necessary to avert immediate danger—never to say thank you.',
  },
  {
    id: 39,
    chapter: 'Ch.15 Expressways (高速道路)',
    qJa: '高速自動車国道の本線車道における普通自動車の法定最高速度は時速100km、法定最低速度は時速50kmである。',
    qEn: 'On the main through-lanes of a national expressway (where no speed sign is posted), the statutory maximum speed for a standard passenger car is 100 km/h and the minimum speed is 50 km/h.',
    answer: true,
    expJa: '○ 正しい：高速自動車国道の本線車道では、普通車は最高100 km/h、最低50 km/hです。',
    expEn: 'TRUE: On national expressway main lanes, the default statutory limits for standard cars are 100 km/h maximum and 50 km/h minimum.',
  },
  {
    id: 40,
    chapter: 'Ch.15 Expressways (高速道路)',
    qJa: '総排気量125cc以下の普通自動二輪車や原動機付自転車は、高速道路を通行することができない。',
    qEn: 'Motorcycles with an engine displacement of 125cc or less and 50cc mopeds are prohibited from driving on expressways.',
    answer: true,
    expJa: '○ 正しい：高速道路を通行できる二輪車は「125ccを超える自動二輪車」のみです（125cc以下や原付は通行不可）。',
    expEn: 'TRUE: Only motorcycles over 125cc are permitted on Japanese expressways.',
  },
  {
    id: 41,
    chapter: 'Ch.15 Expressways (高速道路)',
    qJa: '高速道路で故障などのためやむを得ず路肩に駐車するときは、車の後方に停止表示器材（三角表示板など）を置かなければならない。',
    qEn: 'If your vehicle breaks down on an expressway and you must stop on the shoulder, you must place a warning reflector triangle (停止表示器材) behind your vehicle.',
    answer: true,
    expJa: '○ 正しい：高速道路でやむを得ず駐停車するときは、後方から見やすい位置に停止表示器材（三角表示板等）を設置する義務があります。',
    expEn: 'TRUE: Placing a warning triangle/lamp behind a disabled vehicle on an expressway is mandatory.',
  },
  {
    id: 42,
    chapter: 'Ch.16 Licenses & Passengers (免許・乗車・積載)',
    qJa: '普通自動車免許を取得してから1年未満の運転者は、車の前後に「初心運転者標識（若葉マーク）」をつけなければならない。',
    qEn: 'Drivers who have held a standard passenger car license for less than 1 year must display the Beginner Driver Sign (Shoshinsha / Wakaba mark) on the front and rear of the car.',
    answer: true,
    expJa: '○ 正しい：普通免許取得後1年間は初心運転者標識（若葉マーク）の表示義務があります。',
    expEn: 'TRUE: The green-and-yellow Wakaba beginner mark is mandatory for the first year after obtaining a standard license.',
  },
  {
    id: 43,
    chapter: 'Ch.16 Licenses & Passengers (免許・乗車・積載)',
    qJa: '後部座席の同乗者は、一般道路を走行するときはシートベルトを着用しなくてもよい。',
    qEn: 'Rear-seat passengers are not required to wear seatbelts when driving on ordinary non-expressway roads.',
    answer: false,
    expJa: '× 誤り：一般道路・高速道路を問わず、運転席・助手席・後部座席のすべての座席でシートベルト着用が義務付けられています。',
    expEn: 'FALSE: Seatbelts are legally mandatory for ALL seats (front and rear) on both ordinary roads and expressways.',
  },
  {
    id: 44,
    chapter: 'Ch.16 Licenses & Passengers (免許・乗車・積載)',
    qJa: '6歳未満の幼児を自動車に乗せて運転するときは、チャイルドシートを使用しなければならない。',
    qEn: 'When transporting a child under 6 years of age in a passenger car, you must use a child safety seat.',
    answer: true,
    expJa: '○ 正しい：6歳未満の幼児を乗せるときはチャイルドシートの使用が法律で義務付けられています。',
    expEn: 'TRUE: Child safety seats are legally mandatory for children under 6 years old.',
  },
  {
    id: 45,
    chapter: 'Ch.17 Pre-Drive & Maintenance (乗車手順・日常点検)',
    qJa: '運転席に乗車した後の正しい準備順序は、「①ドアロック → ②座席調整 → ③ミラー調整 → ④シートベルト着用 → ⑤エンジン始動」である。',
    qEn: 'The proper pre-drive cockpit sequence after boarding is: 1. Lock door → 2. Adjust seat → 3. Adjust mirrors → 4. Fasten seatbelt → 5. Start engine.',
    answer: true,
    expJa: '○ 正しい：日本の技能試験では必ず「座席（シート）→ ミラー → シートベルト → エンジン始動」の順番で行います。',
    expEn: 'TRUE: You must adjust your seat BEFORE your mirrors and seatbelt so your eye level is fixed and the belt does not restrict seat movement.',
  },
  {
    id: 46,
    chapter: 'Ch.17 Pre-Drive & Maintenance (乗車手順・日常点検)',
    qJa: 'AT（オートマチック）車のエンジンをかけるときは、ギアが「P」（または「N」）にあることを確認し、右足でフットブレーキをしっかり踏んで始動する。',
    qEn: 'When starting an automatic (AT) car, verify the gear selector is in "P" (or "N") and firmly depress the foot brake with your right foot.',
    answer: true,
    expJa: '○ 正しい：急発進を防ぐため、必ずフットブレーキを踏み、Pレンジを確認してからエンジンを始動します。',
    expEn: 'TRUE: Always hold the foot brake and confirm the gear is in P before starting the engine.',
  },
  {
    id: 47,
    chapter: 'Ch.18 Physics & Hazards (自然の力と悪天候)',
    qJa: 'カーブを曲がるときに働く「遠心力」は、速度が2倍になると4倍になるため、カーブに入る前に十分減速する必要がある。',
    qEn: 'Because centrifugal force in a curve increases 4-fold when speed doubles, you must decelerate sufficiently before entering the curve.',
    answer: true,
    expJa: '○ 正しい：遠心力は「速度の2乗」に比例し、カーブの半径が小さいほど大きくなります。必ずカーブの手前で減速します。',
    expEn: 'TRUE: Centrifugal force is proportional to the square of speed (2x speed = 4x centrifugal force). Always brake BEFORE entering a curve.',
  },
  {
    id: 48,
    chapter: 'Ch.18 Physics & Hazards (自然の力と悪天候)',
    qJa: '長い下り坂でフットブレーキを使いすぎると、ブレーキが過熱して効かなくなる「フェード現象」や「ベーパーロック現象」が起きることがあるため、エンジンブレーキを併用する。',
    qEn: 'Overusing the foot brake on a long downhill slope can overheat the brakes (causing brake fade or vapor lock), so you should use engine braking in combination.',
    answer: true,
    expJa: '○ 正しい：長い下り坂では低速ギア（2やLなど）に落としてエンジンブレーキを活用します。',
    expEn: 'TRUE: Shift to a lower gear and use engine braking on long descents to prevent brake fade (フェード現象) and vapor lock (ベーパーロック現象).',
  },
  {
    id: 49,
    chapter: 'Ch.19 Alcohol, Phones & Accidents (飲酒・スマホ・事故対応)',
    qJa: '少量のアルコール（ビール1杯程度）であれば、顔が赤くならず気分も普段通りなら運転してよい。',
    qEn: 'If you only drank a small amount of alcohol (such as one glass of beer) and feel completely normal, you are allowed to drive.',
    answer: false,
    expJa: '× 誤り：日本では飲酒運転はゼロ・トレランス（絶対禁止）です。わずか一口でも酒気帯び・酒酔い運転として厳罰に処されます。',
    expEn: 'FALSE: Japan enforces strict zero-tolerance for drinking and driving. Even a single sip of alcohol before driving is a serious criminal offense.',
  },
  {
    id: 50,
    chapter: 'Ch.19 Alcohol, Phones & Accidents (飲酒・スマホ・事故対応)',
    qJa: '交通事故を起こしたときは、まず負傷者の救護と道路上の危険防止措置を行い、その後に警察官（110番）へ報告しなければならない。',
    qEn: 'If you are involved in a traffic accident, you must first stop, aid any injured persons, take measures to prevent secondary road hazards, and then report the accident to the police (110).',
    answer: true,
    expJa: '○ 正しい：事故発生時の義務は①運転停止 → ②負傷者の救護（119番） → ③危険防止措置 → ④警察への報告（110番）です。',
    expEn: 'TRUE: The mandatory order after an accident is: 1. Stop driving → 2. Aid the injured (call 119) → 3. Prevent further road danger → 4. Report to Police (call 110).',
  },
];

export class WrittenExamController {
  private answers = new Map<number, boolean>();
  private submitted = false;

  reset(): void {
    this.answers.clear();
    this.submitted = false;
  }

  render(container: HTMLElement, locale: Locale): void {
    const isJa = locale === 'ja';
    const total = WRITTEN_EXAM_QUESTIONS.length;
    const answeredCount = this.answers.size;

    let correctCount = 0;
    for (const q of WRITTEN_EXAM_QUESTIONS) {
      if (this.answers.get(q.id) === q.answer) {
        correctCount++;
      }
    }
    const passed = correctCount >= 45; // Oct 2025 90% Pass Threshold (45/50)

    container.innerHTML = `
      <div class="wx-header-bar">
        <div>
          <strong>${
            isJa
              ? `📝 2025年10月新制度 外免切替 学科模擬試験（全50問 ／ 45問以上 [90%] で合格）`
              : `📝 Oct 2025 New Format Gaimen Kirikae Written Mock Exam (50 Questions · 45/50 [90%] to Pass)`
          }</strong>
          <div style="font-size:12px;color:#93c5fd;margin-top:2px;">
            ${
              this.submitted
                ? isJa
                  ? `採点結果: ${correctCount} / ${total} 問正解 (${Math.round((correctCount / total) * 100)}%) — ${
                      passed ? '🎉 合格 (PASSED!)' : '❌ 不合格 (45問以上で合格)'
                    }`
                  : `Final Score: ${correctCount} / ${total} (${Math.round((correctCount / total) * 100)}%) — ${
                      passed ? '🎉 PASSED (>= 90%)' : '❌ FAILED (Need 45/50)'
                    }`
                : isJa
                  ? `回答済み: ${answeredCount} / ${total} 問 （各問題の ○ または × をクリックすると即座に解説が表示されます）`
                  : `Answered: ${answeredCount} / ${total} (Click ○ True or × False on each question for instant feedback)`
            }
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <button id="wxGradeAllBtn" type="button" class="startDriving" style="padding:8px 14px;border-radius:9px;">
            ${isJa ? '📊 50問採点する (Grade Exam)' : '📊 Grade 50 Questions'}
          </button>
          <button id="wxResetBtn" type="button" class="action-btn" style="padding:8px 12px;border-radius:9px;">
            ${isJa ? '🔄 リセット' : '🔄 Reset'}
          </button>
        </div>
      </div>
      <div id="wxQuestionsList" class="wx-questions-list"></div>
    `;

    const listEl = container.querySelector('#wxQuestionsList')!;
    for (const q of WRITTEN_EXAM_QUESTIONS) {
      const userAns = this.answers.get(q.id);
      const isAnswered = userAns !== undefined;
      const isCorrect = isAnswered && userAns === q.answer;

      const card = document.createElement('div');
      card.className = `wx-q-card ${isAnswered ? (isCorrect ? 'answered-correct' : 'answered-wrong') : ''}`;
      card.innerHTML = `
        <div class="wx-q-top">
          <span class="wx-q-num">Q${q.id}</span>
          <span class="wx-q-chap">${q.chapter}</span>
          ${
            isAnswered
              ? `<span class="wx-q-badge ${isCorrect ? 'pass' : 'fail'}">${
                  isCorrect ? (isJa ? '⭕ 正解' : '⭕ Correct') : isJa ? '❌ 不正解' : '❌ Incorrect'
                }</span>`
              : ''
          }
        </div>
        <p class="wx-q-ja">${q.qJa}</p>
        <p class="wx-q-en">${q.qEn}</p>
        <div class="wx-q-btns">
          <button type="button" class="wx-ans-btn ${userAns === true ? 'selected' : ''}" data-qid="${q.id}" data-ans="true">
            ⭕ True (正しい / ○)
          </button>
          <button type="button" class="wx-ans-btn ${userAns === false ? 'selected' : ''}" data-qid="${q.id}" data-ans="false">
            ❌ False (誤り / ×)
          </button>
        </div>
        <div class="wx-q-exp" ${isAnswered || this.submitted ? '' : 'hidden'}>
          <strong>${isJa ? q.expJa : q.expEn}</strong>
          <div style="font-size:11.5px;color:#cbd5e1;margin-top:2px;">${isJa ? q.expEn : q.expJa}</div>
        </div>
      `;
      listEl.append(card);
    }

    container.querySelectorAll<HTMLButtonElement>('.wx-ans-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qid = Number(btn.dataset.qid);
        const ans = btn.dataset.ans === 'true';
        this.answers.set(qid, ans);
        this.render(container, locale);
      });
    });

    container.querySelector('#wxGradeAllBtn')?.addEventListener('click', () => {
      this.submitted = true;
      this.render(container, locale);
    });

    container.querySelector('#wxResetBtn')?.addEventListener('click', () => {
      this.reset();
      this.render(container, locale);
    });
  }
}
