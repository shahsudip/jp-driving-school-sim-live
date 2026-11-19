import type { Locale, ViolationEvent } from '../types';

export class VoiceExaminer {
  private enabled = true;
  private lastSpokenText = '';
  private lastSpokenTime = 0;

  setEnabled(enabled: boolean): void {
    this.enabled = enabled;
    if (!enabled && typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  isEnabled(): boolean {
    return this.enabled;
  }

  speak(textJa: string, textEn: string, locale: Locale, priority = false): void {
    if (!this.enabled || typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const text = locale === 'ja' ? textJa : textEn;
    const now = performance.now();
    if (!priority && text === this.lastSpokenText && now - this.lastSpokenTime < 5500) {
      return;
    }
    this.lastSpokenText = text;
    this.lastSpokenTime = now;

    try {
      if (priority) {
        window.speechSynthesis.cancel();
      }
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = locale === 'ja' ? 'ja-JP' : 'en-US';
      utter.rate = locale === 'ja' ? 1.05 : 1.02;
      utter.pitch = 1.0;
      utter.volume = 0.9;
      window.speechSynthesis.speak(utter);
    } catch {
      // Ignore browser speech synthesis restrictions if uninitialized
    }
  }

  announceViolation(v: ViolationEvent, locale: Locale): void {
    const ja = v.instantFail
      ? `検定中止。${v.labelJa}。補助ブレーキ作動。`
      : `減点${v.points}点。${v.labelJa}。`;
    const en = v.instantFail
      ? `Exam terminated. ${v.labelEn}. Auxiliary brake applied.`
      : `Minus ${v.points} points. ${v.labelEn}.`;
    this.speak(ja, en, locale, true);
  }
}
