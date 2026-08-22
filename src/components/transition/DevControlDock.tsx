import React from 'react';
import type { GlitchState, ViewMode, TimingConfig } from '../../types/transition';

interface DevControlDockProps {
  glitchState: GlitchState;
  viewMode: ViewMode;
  isPaused: boolean;
  timingConfig: TimingConfig;
  onTriggerGlitch: () => void;
  onSwitchToModern: () => void;
  onSwitchToCRT: () => void;
  onTogglePause: () => void;
  onUpdateTiming: (newConfig: Partial<TimingConfig>) => void;
}

// Dev dock hidden — keyboard shortcuts (M/C/G/P) still work via useGlitchTransition
export const DevControlDock: React.FC<DevControlDockProps> = () => {
  return null;
};
