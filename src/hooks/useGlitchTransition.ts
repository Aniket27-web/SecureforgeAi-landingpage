import { useState, useEffect, useCallback, useRef } from 'react';
import { type GlitchState, type ViewMode, type TimingConfig, DEFAULT_TIMING_CONFIG } from '../types/transition';
import { sound } from '../utils/sound';

// Module-level singleton — survives HMR re-renders and React double-invoke
let _glitchHasRunOnce = false;

export interface UseGlitchTransitionReturn {
  glitchState: GlitchState;
  viewMode: ViewMode;
  isGlitching: boolean;
  isPaused: boolean;
  reducedMotion: boolean;
  timingConfig: TimingConfig;
  triggerGlitchSequence: () => void;
  switchToModern: () => void;
  switchToCRT: () => void;
  togglePause: () => void;
  updateTimingConfig: (newConfig: Partial<TimingConfig>) => void;
}

export const useGlitchTransition = (
  initialConfig: Partial<TimingConfig> = {}
): UseGlitchTransitionReturn => {
  const [timingConfig, setTimingConfig] = useState<TimingConfig>({
    ...DEFAULT_TIMING_CONFIG,
    ...initialConfig,
    // autoLoop comes from DEFAULT_TIMING_CONFIG (true) — do NOT override here
  });

  const [glitchState, setGlitchState] = useState<GlitchState>('MODERN_INTRO');
  const [viewMode, setViewMode] = useState<ViewMode>('modern');
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loopTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef<boolean>(false);
  isPausedRef.current = isPaused;


  // Stable ref to always call the latest runSequence from the loop timer
  const runSequenceRef = useRef<() => void>(() => {});


  const clearCurrentTimer = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const clearLoopTimer = useCallback(() => {
    if (loopTimerRef.current) {
      clearTimeout(loopTimerRef.current);
      loopTimerRef.current = null;
    }
  }, []);

  // Schedule the next auto-loop glitch after loopInterval ms
  const scheduleNextLoop = useCallback((config: TimingConfig) => {
    if (!config.autoLoop) return;
    clearLoopTimer();
    loopTimerRef.current = setTimeout(() => {
      if (!isPausedRef.current) {
        runSequenceRef.current();
      }
    }, config.loopInterval);
  }, [clearLoopTimer]);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
      if (e.matches) {
        clearCurrentTimer();
        clearLoopTimer();
        setGlitchState('MODERN_STABLE');
        setViewMode('modern');
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [clearCurrentTimer, clearLoopTimer]);

  // Transition sequence
  const runSequence = useCallback(() => {
    if (reducedMotion || isPausedRef.current) return;
    clearCurrentTimer();
    clearLoopTimer(); // cancel any pending loop while sequence is running

    // Stage 1: GLITCH_MICRO
    setGlitchState('GLITCH_MICRO');
    sound.playGlitchStatic();

    timerRef.current = setTimeout(() => {
      if (isPausedRef.current) return;
      // Stage 2: CRT_TAKEOVER
      setGlitchState('CRT_TAKEOVER');
      setViewMode('crt');
      sound.playCrtSwitchOn();

      timerRef.current = setTimeout(() => {
        if (isPausedRef.current) return;
        // Stage 3: CRT_MODE
        setGlitchState('CRT_MODE');

        timerRef.current = setTimeout(() => {
          if (isPausedRef.current) return;
          // Stage 4: GLITCH_MAJOR
          setGlitchState('GLITCH_MAJOR');
          sound.playPhosphorDeconstruct();

          timerRef.current = setTimeout(() => {
            if (isPausedRef.current) return;
            // Stage 5: MODERN_RECOVERY
            setGlitchState('MODERN_RECOVERY');
            setViewMode('modern');
            sound.playQuantumElevation();

            timerRef.current = setTimeout((cfg: TimingConfig) => {
              if (isPausedRef.current) return;
              // Stage 6: MODERN_STABLE — schedule the next auto-loop
              setGlitchState('MODERN_STABLE');
              scheduleNextLoop(cfg);
            // Pass timingConfig as arg to avoid stale closure
            }, timingConfig.modernRecoveryDuration, timingConfig);

          }, timingConfig.secondGlitchDuration);
        }, timingConfig.crtHoldDuration);
      }, timingConfig.crtTakeoverDuration);
    }, timingConfig.firstGlitchDuration);
  }, [clearCurrentTimer, clearLoopTimer, reducedMotion, scheduleNextLoop, timingConfig]);

  // Keep runSequenceRef always pointing at the latest version
  runSequenceRef.current = runSequence;

  // Initial page entrance: runs STRICTLY ONCE on load
  useEffect(() => {
    if (reducedMotion) {
      setGlitchState('MODERN_STABLE');
      setViewMode('modern');
      return;
    }

    if (_glitchHasRunOnce) return;
    _glitchHasRunOnce = true;

    clearCurrentTimer();
    setGlitchState('MODERN_INTRO');
    setViewMode('modern');

    timerRef.current = setTimeout(() => {
      if (!isPausedRef.current) {
        runSequenceRef.current();
      }
    }, timingConfig.modernIntroDuration);

    return () => {
      clearCurrentTimer();
      clearLoopTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Manual actions
  const triggerGlitchSequence = useCallback(() => {
    clearLoopTimer();
    runSequence();
  }, [clearLoopTimer, runSequence]);

  const switchToModern = useCallback(() => {
    clearCurrentTimer();
    clearLoopTimer();
    setGlitchState('MODERN_STABLE');
    setViewMode('modern');
  }, [clearCurrentTimer, clearLoopTimer]);

  const switchToCRT = useCallback(() => {
    clearCurrentTimer();
    clearLoopTimer();
    setGlitchState('CRT_MODE');
    setViewMode('crt');
    sound.playCrtSwitchOn();
  }, [clearCurrentTimer, clearLoopTimer]);

  const togglePause = useCallback(() => {
    setIsPaused((prev) => {
      const next = !prev;
      if (next) {
        clearCurrentTimer();
        clearLoopTimer();
      }
      return next;
    });
  }, [clearCurrentTimer, clearLoopTimer]);

  const updateTimingConfig = useCallback((newConfig: Partial<TimingConfig>) => {
    setTimingConfig((prev) => ({ ...prev, ...newConfig }));
  }, []);

  // Global Keyboard shortcuts: M, C, G, P
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const tag = (document.activeElement?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;

      if (e.key === 'm' || e.key === 'M') {
        switchToModern();
      } else if (e.key === 'c' || e.key === 'C') {
        switchToCRT();
      } else if (e.key === 'g' || e.key === 'G') {
        triggerGlitchSequence();
      } else if (e.key === 'p' || e.key === 'P') {
        togglePause();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [switchToModern, switchToCRT, triggerGlitchSequence, togglePause]);

  const isGlitching =
    glitchState === 'GLITCH_MICRO' ||
    glitchState === 'CRT_TAKEOVER' ||
    glitchState === 'GLITCH_MAJOR' ||
    glitchState === 'MODERN_RECOVERY';

  return {
    glitchState,
    viewMode,
    isGlitching,
    isPaused,
    reducedMotion,
    timingConfig,
    triggerGlitchSequence,
    switchToModern,
    switchToCRT,
    togglePause,
    updateTimingConfig,
  };
};
