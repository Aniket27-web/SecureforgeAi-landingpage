import React from 'react';
import type { GlitchState } from '../../types/transition';

interface GlitchOverlayProps {
  glitchState: GlitchState;
}

export const GlitchOverlay: React.FC<GlitchOverlayProps> = ({ glitchState }) => {
  if (glitchState === 'MODERN_STABLE' || glitchState === 'CRT_MODE') {
    return null;
  }

  const isMicro = glitchState === 'GLITCH_MICRO';
  const isTakeover = glitchState === 'CRT_TAKEOVER';
  const isMajor = glitchState === 'GLITCH_MAJOR';
  const isRecovery = glitchState === 'MODERN_RECOVERY';

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
      {/* 1. Micro-Glitch Anomaly Layer */}
      {isMicro && (
        <>
          <div className="absolute inset-0 bg-red-500/5 mix-blend-screen glitch-micro-anim" />
          <div className="absolute inset-0 bg-cyan-500/5 mix-blend-screen glitch-micro-anim [animation-delay:-0.1s]" />
          <div className="matrix-beam-line" />
        </>
      )}

      {/* 2. CRT Takeover Corruption Layer */}
      {isTakeover && (
        <>
          {/* Intense Scanlines */}
          <div className="absolute inset-0 crt-scanlines opacity-80" />
          {/* Phosphor Green Flash */}
          <div className="absolute inset-0 bg-radial from-[#00ff66]/20 via-transparent to-black/60 crt-takeover-anim" />
          <div className="matrix-beam-line" />
          <div className="matrix-beam-line [animation-delay:-0.25s]" />
          {/* Screen tear slices */}
          <div className="absolute inset-0 major-tear-anim opacity-50 bg-[#00ff66]/10" />
        </>
      )}

      {/* 3. Major Glitch / Signal Breach Layer */}
      {isMajor && (
        <>
          {/* Noise Burst */}
          <div className="absolute inset-0 noise-burst-overlay opacity-40" />
          {/* Chromatic Red/Cyan Displacements */}
          <div className="absolute inset-0 major-tear-anim bg-gradient-to-r from-red-600/15 via-transparent to-cyan-500/15 mix-blend-screen" />
          <div className="absolute inset-0 major-tear-anim [animation-delay:-0.15s] bg-[#00ff66]/10" />
          <div className="matrix-beam-line" />
          <div className="cyber-beam-line" />
          {/* Brief System Anomaly Banner */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="inline-block px-4 py-1.5 bg-black/90 border border-[#00ff66] text-[#00ff66] font-mono text-xs sm:text-sm font-bold tracking-widest text-glow shadow-[0_0_20px_#00ff66]">
              [ SIGNAL INSTABILITY // RE-ALIGNING QUANTUM ENCLAVE ]
            </div>
          </div>
        </>
      )}

      {/* 4. Modern Recovery Layer */}
      {isRecovery && (
        <>
          <div className="absolute inset-0 bg-radial from-[#1D8BF7]/25 via-transparent to-black/30 modern-recovery-anim" />
          <div className="cyber-beam-line" />
        </>
      )}
    </div>
  );
};
