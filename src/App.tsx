import React from 'react';
import { useGlitchTransition } from './hooks/useGlitchTransition';
import { ModernLanding } from './components/modern/ModernLanding';
import { CRTLanding } from './components/crt/CRTLanding';
import { GlitchOverlay } from './components/transition/GlitchOverlay';
import { DevControlDock } from './components/transition/DevControlDock';

export const App: React.FC = () => {
  const {
    glitchState,
    viewMode,
    isPaused,
    timingConfig,
    triggerGlitchSequence,
    switchToModern,
    switchToCRT,
    togglePause,
    updateTimingConfig,
  } = useGlitchTransition();

  // Dynamic animation class applied to the active page container during glitch transitions
  const getContainerGlitchClass = () => {
    switch (glitchState) {
      case 'GLITCH_MICRO':
        return 'glitch-micro-anim';
      case 'CRT_TAKEOVER':
        return 'crt-takeover-anim';
      case 'GLITCH_MAJOR':
        return 'major-tear-anim';
      case 'MODERN_RECOVERY':
        return 'modern-recovery-anim';
      default:
        return '';
    }
  };

  return (
    <div
      className={`relative min-h-screen w-full overflow-x-hidden ${
        viewMode === 'modern'
          ? 'bg-white text-slate-800 selection:bg-blue-100 selection:text-blue-800'
          : 'bg-[#040704] text-[#00ff66] selection:bg-[#00ff66]/30 selection:text-[#33ff77]'
      }`}
    >
      {/* Visual Glitch Shader & Chromatic Aberration Layer */}
      <GlitchOverlay glitchState={glitchState} />

      {/* Main Page View Container - Fixed width and position */}
      <div className={`w-full min-h-screen ${getContainerGlitchClass()}`}>
        {viewMode === 'modern' ? (
          <ModernLanding onTriggerGlitch={triggerGlitchSequence} />
        ) : (
          <CRTLanding />
        )}
      </div>

      {/* Developer Control Dock & Hotkey Switcher */}
      <DevControlDock
        glitchState={glitchState}
        viewMode={viewMode}
        isPaused={isPaused}
        timingConfig={timingConfig}
        onTriggerGlitch={triggerGlitchSequence}
        onSwitchToModern={switchToModern}
        onSwitchToCRT={switchToCRT}
        onTogglePause={togglePause}
        onUpdateTiming={updateTimingConfig}
      />
    </div>
  );
};

export default App;
