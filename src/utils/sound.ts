// Retro Terminal Web Audio Synthesizer
// Provides synthesized authentic computer terminal sounds (keyclicks, beeps, alarms, boot sounds)

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // Default muted for unobtrusive UX, user can toggle in header

  private initCtx() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (!this.isMuted) {
      this.initCtx();
      this.playBeep(880, 0.08, 'sine');
    }
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (!muted) {
      this.initCtx();
    }
  }

  public playKeyClick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(1200 + Math.random() * 400, this.ctx.currentTime);

    gain.gain.setValueAtTime(0.015, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.02);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.02);
  }

  public playBeep(freq = 600, duration = 0.06, type: OscillatorType = 'sine', volume = 0.05) {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

    gain.gain.setValueAtTime(volume, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + duration);
  }

  public playCommandExecuted() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.playBeep(520, 0.05, 'square', 0.03);
    setTimeout(() => {
      this.playBeep(780, 0.07, 'square', 0.03);
    }, 50);
  }

  public playSuccessChime() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.12, 'sine', 0.04);
      }, idx * 70);
    });
  }

  public playWarningBeep() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.playBeep(320, 0.12, 'sawtooth', 0.04);
    setTimeout(() => {
      this.playBeep(260, 0.15, 'sawtooth', 0.04);
    }, 120);
  }

  public playScanTick() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.playBeep(1400 + Math.random() * 600, 0.03, 'sine', 0.02);
  }

  public playCrtSwitchOn() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    // 1. High voltage CRT charge whine
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(8400, this.ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);

    // 2. Phosphor snap click
    setTimeout(() => {
      this.playBeep(980, 0.08, 'square', 0.05);
      setTimeout(() => {
        this.playBeep(1480, 0.12, 'sine', 0.04);
      }, 70);
    }, 120);
  }

  public playCrtSwitchOff() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    // 1. Degauss collapse thump
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(420, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, this.ctx.currentTime + 0.38);

    gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.4);

    // 2. Discharge fizzle
    setTimeout(() => {
      this.playBeep(120, 0.15, 'sawtooth', 0.03);
    }, 80);
  }

  public playCyberWarp() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const freqs = [320, 480, 640, 960, 1280, 1600];
    freqs.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.08, 'sine', 0.03);
      }, idx * 45);
    });
  }

  public playBreachAlarm() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    const sirenNotes = [880, 440, 880, 440];
    sirenNotes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.14, 'sawtooth', 0.05);
      }, idx * 160);
    });
  }

  public playGlitchStatic() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    try {
      const bufferSize = this.ctx.sampleRate * 0.18;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }

      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(1400, this.ctx.currentTime);
      filter.Q.setValueAtTime(3, this.ctx.currentTime);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.04, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.18);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      whiteNoise.start();
      whiteNoise.stop(this.ctx.currentTime + 0.18);
    } catch {
      this.playBeep(120, 0.12, 'sawtooth', 0.04);
    }
  }

  public playMatrixDecoding() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        this.playBeep(1800 + Math.random() * 1200, 0.025, 'sine', 0.02);
      }, i * 35);
    }
  }

  public playPhosphorDeconstruct() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    this.playGlitchStatic();
    setTimeout(() => {
      this.playBeep(320, 0.2, 'sawtooth', 0.04);
    }, 60);
  }

  public playQuantumElevation() {
    if (this.isMuted) return;
    this.initCtx();
    if (!this.ctx) return;

    // Sub-bass sweep
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(60, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(320, this.ctx.currentTime + 0.6);

    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.7);

    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.7);

    // Harmonic arpeggio
    const notes = [440, 554.37, 659.25, 880, 1108.73, 1318.51, 1760];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playBeep(freq, 0.18, 'sine', 0.035);
      }, idx * 60);
    });
  }
}

export const sound = new SoundEngine();
