import type { CollisionReport } from '../core/collision';
import type { ExaminerEngine } from '../core/examiner';
import { t } from '../i18n';
import type {
  CameraMode,
  ExamSummary,
  Gear,
  Locale,
  SpawnStationId,
  VehicleState,
  ViolationEvent,
} from '../types';

export interface HudCallbacks {
  onSelectGear: (gear: Gear) => void;
  onToggleBlinker: (dir: 'left' | 'right' | 'hazard') => void;
  onToggleHandbrake: () => void;
  onRestartEngine: () => void;
  onRetryExam: () => void;
  onPracticeWeak: (station: SpawnStationId) => void;
  onCloseExamModal: () => void;
}

export class HudController {
  private readonly scoreEl = document.getElementById('hudScore')!;
  private readonly modePillEl = document.getElementById('hudModePill')!;
  private readonly directiveEl = document.getElementById('hudDirective')!;
  private readonly toastContainerEl = document.getElementById('violationToasts')!;
  private readonly speedNumEl = document.getElementById('hudSpeedNum')!;
  private readonly speedNeedleEl = document.getElementById('speedNeedle')!;
  private readonly rpmFillEl = document.getElementById('rpmFill')!;
  private readonly steerWheelEl = document.getElementById('hudSteerSvg')!;
  private readonly steerDegEl = document.getElementById('hudSteerDeg')!;
  private readonly gearListEl = document.getElementById('hudGearList')!;
  private readonly blinkLeftEl = document.getElementById('hudBlinkLeft')!;
  private readonly blinkRightEl = document.getElementById('hudBlinkRight')!;
  private readonly handbrakeLampEl = document.getElementById('hudHandbrakeLamp')!;
  private readonly lookLeftLampEl = document.getElementById('hudLookLeft')!;
  private readonly lookRightLampEl = document.getElementById('hudLookRight')!;
  private readonly stallBannerEl = document.getElementById('stallBanner')!;
  private readonly stallBtnEl = document.getElementById('stallRestartBtn')!;
  private readonly camBadgeEl = document.getElementById('camLabel')!;

  private readonly wheelBadges: Record<'FL' | 'FR' | 'RL' | 'RR', HTMLElement> = {
    FL: document.getElementById('wheelFL')!,
    FR: document.getElementById('wheelFR')!,
    RL: document.getElementById('wheelRL')!,
    RR: document.getElementById('wheelRR')!,
  };

  private readonly examModalEl = document.getElementById('examResultModal')!;
  private readonly examStampEl = document.getElementById('examStamp')!;
  private readonly examSubEl = document.getElementById('examResultSub')!;
  private readonly examFinalScoreEl = document.getElementById('examFinalScore')!;
  private readonly examElapsedEl = document.getElementById('examElapsed')!;
  private readonly examDistEl = document.getElementById('examDistance')!;
  private readonly examListEl = document.getElementById('examViolationList')!;
  private readonly examPracticeBtnEl = document.getElementById('examPracticeWeakBtn')!;

  private lastTransmission: string | null = null;
  private weakStation: SpawnStationId = 'crank';
  private callbacks: HudCallbacks;

  constructor(callbacks: HudCallbacks) {
    this.callbacks = callbacks;

    this.blinkLeftEl.addEventListener('click', () => callbacks.onToggleBlinker('left'));
    this.blinkRightEl.addEventListener('click', () => callbacks.onToggleBlinker('right'));
    this.handbrakeLampEl.addEventListener('click', () => callbacks.onToggleHandbrake());
    this.stallBtnEl.addEventListener('click', () => callbacks.onRestartEngine());

    document.getElementById('examRetryBtn')?.addEventListener('click', () => {
      this.examModalEl.hidden = true;
      callbacks.onRetryExam();
    });
    this.examPracticeBtnEl.addEventListener('click', () => {
      this.examModalEl.hidden = true;
      callbacks.onPracticeWeak(this.weakStation);
    });
    document.getElementById('examCloseBtn')?.addEventListener('click', () => {
      this.examModalEl.hidden = true;
      callbacks.onCloseExamModal();
    });
  }

  pushViolationToast(v: ViolationEvent, locale: Locale): void {
    const item = document.createElement('div');
    item.className = `violation-toast ${v.instantFail ? 'fail' : 'deduct'}`;
    const title = locale === 'ja' ? v.labelJa : v.labelEn;
    const detail = locale === 'ja' ? v.detailJa : v.detailEn;
    const ptsText = v.instantFail
      ? locale === 'ja'
        ? '検定中止'
        : 'FAIL'
      : `-${v.points}`;

    item.innerHTML = `<span class="vt-pts">${ptsText}</span><div><strong>${title}</strong><p>${detail}</p></div>`;
    this.toastContainerEl.prepend(item);

    while (this.toastContainerEl.children.length > 3) {
      this.toastContainerEl.lastElementChild?.remove();
    }

    window.setTimeout(() => {
      item.classList.add('fade-out');
      window.setTimeout(() => item.remove(), 350);
    }, 4500);
  }

  showExamSummary(summary: ExamSummary, locale: Locale): void {
    this.examModalEl.hidden = false;
    this.weakStation = summary.weakArea ?? 'crank';

    document.getElementById('examResultTitle')!.textContent = t(locale, 'examResultTitle');
    document.getElementById('examScoreLabelText')!.textContent = t(locale, 'examFinalScore');
    document.getElementById('examElapsedLabelText')!.textContent = t(locale, 'examElapsed');
    document.getElementById('examDistanceLabelText')!.textContent = t(locale, 'examDistance');
    document.getElementById('examRetryBtn')!.textContent = t(locale, 'retryExam');
    this.examPracticeBtnEl.textContent = t(locale, 'practiceWeak');
    document.getElementById('examCloseBtn')!.textContent = t(locale, 'closeModal');

    this.examStampEl.textContent = summary.passed
      ? t(locale, 'examPassStamp')
      : t(locale, 'examFailStamp');
    this.examStampEl.className = `exam-stamp ${summary.passed ? 'pass' : 'fail'}`;

    this.examSubEl.textContent = summary.terminated
      ? t(locale, 'examTerminatedSub')
      : summary.passed
        ? t(locale, 'examPassedSub')
        : t(locale, 'examFailedSub');

    this.examFinalScoreEl.textContent = `${summary.score} / 100`;
    const mins = Math.floor(summary.elapsedSec / 60);
    const secs = Math.floor(summary.elapsedSec % 60);
    this.examElapsedEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    this.examDistEl.textContent = `${Math.round(summary.distanceM)} m`;

    this.examListEl.innerHTML = '';
    if (summary.violations.length === 0) {
      const li = document.createElement('li');
      li.className = 'clean-pass';
      li.textContent = t(locale, 'examNoViolations');
      this.examListEl.append(li);
    } else {
      for (const v of summary.violations) {
        const li = document.createElement('li');
        const label = locale === 'ja' ? v.labelJa : v.labelEn;
        const detail = locale === 'ja' ? v.detailJa : v.detailEn;
        const badge = v.instantFail
          ? locale === 'ja'
            ? '中止'
            : 'FAIL'
          : `-${v.points}`;
        li.innerHTML = `<span class="ev-badge ${v.instantFail ? 'fail' : ''}">${badge}</span><span><strong>${label}</strong> — ${detail}</span>`;
        this.examListEl.append(li);
      }
    }
  }

  hideExamSummary(): void {
    this.examModalEl.hidden = true;
  }

  update(
    state: VehicleState,
    collision: CollisionReport,
    examiner: ExaminerEngine,
    cameraMode: CameraMode,
    locale: Locale,
    customGuideText: string | null
  ): void {
    // 1. Score & Examiner Directive
    this.scoreEl.textContent = String(examiner.getScore());
    this.scoreEl.className = `score-num ${examiner.getScore() < 70 ? 'danger' : ''}`;

    const isExam = examiner.getMode() === 'exam';
    this.modePillEl.textContent = isExam ? t(locale, 'modeExam') : t(locale, 'modePractice');
    this.modePillEl.className = `mode-pill ${isExam ? 'exam' : 'practice'}`;

    const wp = examiner.getCurrentWaypoint();
    const prog = examiner.getWaypointProgress();
    if (customGuideText) {
      this.directiveEl.textContent = customGuideText;
    } else if (wp) {
      const stepTag = `[${prog.current + 1}/${prog.total}] `;
      this.directiveEl.textContent = stepTag + (locale === 'ja' ? wp.instructionJa : wp.instructionEn);
    } else {
      this.directiveEl.textContent = t(locale, 'practiceGuideFree');
    }

    // 2. Speedometer (0 - 60 km/h mapped to -125 deg .. +125 deg)
    const speedKmh = Math.round(Math.abs(state.speedMs) * 3.6);
    this.speedNumEl.textContent = String(speedKmh);
    const clampedKmh = Math.min(60, Math.abs(state.speedMs) * 3.6);
    const needleDeg = -125 + (clampedKmh / 60) * 250;
    this.speedNeedleEl.setAttribute('transform', `rotate(${needleDeg.toFixed(1)} 56 56)`);

    const rpmPct = Math.min(100, Math.max(0, (state.rpm / 5000) * 100));
    this.rpmFillEl.style.width = `${rpmPct.toFixed(1)}%`;

    // 3. Steering wheel dial (SVG rotates +CW in CSS when turning right, -CCW when turning left!)
    // Remember state.steeringWheelRad > 0 is LEFT (+CCW), so CSS rotate is -deg!
    const wheelDeg = Math.round((state.steeringWheelRad * 180) / Math.PI);
    this.steerWheelEl.style.transform = `rotate(${-wheelDeg}deg)`;
    this.steerDegEl.textContent = `${wheelDeg > 0 ? '+' : ''}${wheelDeg}°`;

    // 4. Gear selector strip
    if (this.lastTransmission !== state.transmission) {
      this.lastTransmission = state.transmission;
      const gears: Gear[] =
        state.transmission === 'AT' ? ['P', 'R', 'N', 'D'] : ['R', 'N', '1', '2', '3', '4', '5'];
      this.gearListEl.innerHTML = '';
      for (const g of gears) {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'gear-btn';
        btn.dataset.gear = g;
        btn.textContent = g;
        btn.addEventListener('click', () => this.callbacks.onSelectGear(g));
        this.gearListEl.append(btn);
      }
    }
    this.gearListEl.querySelectorAll<HTMLButtonElement>('.gear-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.gear === state.gear);
    });

    // 5. Lamps, Blinkers, Look indicators, Stall banner
    const leftLit = state.blinkerOn && (state.blinker === 'left' || state.blinker === 'hazard');
    const rightLit = state.blinkerOn && (state.blinker === 'right' || state.blinker === 'hazard');
    this.blinkLeftEl.classList.toggle('lit', leftLit);
    this.blinkRightEl.classList.toggle('lit', rightLit);
    this.handbrakeLampEl.classList.toggle('lit', state.handbrake);
    this.lookLeftLampEl.classList.toggle('lit', state.lookAngleRad > 0.35);
    this.lookRightLampEl.classList.toggle('lit', state.lookAngleRad < -0.35);

    this.stallBannerEl.hidden = !state.stalled;
    if (state.stalled) {
      document.getElementById('stallText')!.textContent = t(locale, 'stalledWarning');
      this.stallBtnEl.textContent = t(locale, 'restartEngine');
    }

    // 6. Camera label
    const camKey =
      cameraMode === 'cockpit'
        ? 'camCockpit'
        : cameraMode === 'hood'
          ? 'camHood'
          : cameraMode === 'orbit'
            ? 'camOrbit'
            : 'camChase';
    this.camBadgeEl.textContent = t(locale, camKey);

    // 7. 4-Wheel Curb Proximity Graphic
    (['FL', 'FR', 'RL', 'RR'] as const).forEach((corner) => {
      const info = collision.wheels[corner];
      const el = this.wheelBadges[corner];
      el.classList.toggle('mount', info.curbMount);
      el.classList.toggle('touch', !info.curbMount && info.curbTouch);
      el.classList.toggle('close', !info.curbMount && !info.curbTouch && info.proximity > 0.35);
    });
  }
}
