export type GlitchState =
  | 'MODERN_INTRO'      // Initial smooth modern entry (0s - 3.5s)
  | 'MODERN_STABLE'     // Clean modern browsing state
  | 'GLITCH_MICRO'      // ~250ms subtle signal anomaly
  | 'CRT_TAKEOVER'      // ~600ms visual corruption/takeover into CRT
  | 'CRT_MODE'          // Authentic retro CRT experience (2.5s - 3.5s)
  | 'GLITCH_MAJOR'      // ~450ms strong glitch / screen tear
  | 'MODERN_RECOVERY';  // ~700ms collapse back into modern

export type ViewMode = 'modern' | 'crt';

export interface TimingConfig {
  modernIntroDuration: number;    // ms before first glitch on initial load
  firstGlitchDuration: number;     // ms for micro anomaly
  crtTakeoverDuration: number;     // ms for degradation into CRT
  crtHoldDuration: number;        // ms holding CRT mode
  secondGlitchDuration: number;    // ms for major breach glitch
  modernRecoveryDuration: number;  // ms for recovery back to modern
  autoLoop: boolean;               // whether to repeat sequence periodically
  loopInterval: number;            // ms between periodic loops if autoLoop is true
}

export const DEFAULT_TIMING_CONFIG: TimingConfig = {
  modernIntroDuration: 3500,
  firstGlitchDuration: 250,
  crtTakeoverDuration: 600,
  crtHoldDuration: 3200,
  secondGlitchDuration: 450,
  modernRecoveryDuration: 750,
  autoLoop: true,
  loopInterval: 15000,
};
