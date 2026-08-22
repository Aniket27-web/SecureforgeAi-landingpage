import React, { useState, useEffect } from 'react';
import { FastForward } from 'lucide-react';
import { sound } from '../utils/sound';

interface BootSequenceProps {
  onComplete: () => void;
}

export const BootSequence: React.FC<BootSequenceProps> = ({ onComplete }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [progress, setProgress] = useState<number>(0);
  const [phase, setPhase] = useState<'booting' | 'ready'>('booting');

  const bootLogs = [
    'SECUREFORGEAI ROM BIOS v1.0.4 - SYSTEM INITIALIZATION',
    'CPU: AMD/Intel x86_64 Architecture Detected [ 16 THREADS ]',
    'RAM: 32768MB OK - L1/L2/L3 CACHE INTEGRITY PASSED',
    'STORAGE: NVMe Secure Enclave Mounted at /dev/nvme0n1',
    'INITIALIZING SECUREFORGEAI KERNEL ENGINE...',
    'LOADING [SEC-AST-PARSER] ....... OK',
    'LOADING [STATIC-VULN-SCANNER] .. OK',
    'LOADING [AI-CODE-ORCHESTRATOR] . OK',
    'MOUNTING LOCAL LLM RUNTIME [llama.cpp/GGUF] ... READY',
    'VERIFYING CRYPTOGRAPHIC SHA-256 SIGNATURES ... VERIFIED',
    'ISOLATING SANDBOX ENVIRONMENT ... ACTIVE',
    'NETWORK STACK: ONLINE / AIR-GAP SWITCHABLE',
    'SYSTEM DIAGNOSTICS COMPLETE. ALL 12 ENGINES ONLINE.',
    'SECUREFORGEAI TERMINAL READY FOR OPERATOR INPUT.'
  ];

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < bootLogs.length) {
        const nextLog = bootLogs[currentIdx];
        if (typeof nextLog === 'string') {
          setLines(prev => [...prev, nextLog]);
          setProgress(Math.min(100, Math.floor(((currentIdx + 1) / bootLogs.length) * 100)));
          sound.playScanTick();
        }
        currentIdx++;
      } else {
        clearInterval(interval);
        setPhase('ready');
        setProgress(100);
        sound.playSuccessChime();
        const finishTimeout = setTimeout(() => {
          onComplete();
        }, 500);
        return () => clearTimeout(finishTimeout);
      }
    }, 110);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        clearInterval(interval);
        onComplete();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#040704] flex flex-col justify-between p-4 sm:p-8 font-mono text-[#00ff66] select-none">
      {/* Top status */}
      <div className="flex items-center justify-between border-b border-[#00ff66]/30 pb-3">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#ff3344] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#ffb000] opacity-80" />
          <div className="w-3 h-3 rounded-full bg-[#00ff66] animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#00ff66]">
            SECUREFORGEAI // BIOS POST BOOT LOADER
          </span>
        </div>

        <button
          onClick={onComplete}
          className="flex items-center space-x-1.5 px-3 py-1 text-xs border border-[#00ff66]/40 text-[#00ff66] hover:bg-[#00ff66] hover:text-[#040704] transition-all cursor-pointer rounded-none"
        >
          <FastForward className="w-3.5 h-3.5" />
          <span>SKIP BOOT (ESC)</span>
        </button>
      </div>

      {/* Main Terminal Output */}
      <div className="flex-1 my-6 overflow-y-auto space-y-1.5 text-xs sm:text-sm leading-relaxed max-w-4xl">
        <div className="text-[#ffb000] mb-4">
          <pre className="text-[10px] sm:text-xs leading-tight font-mono">
{`  ___ ___ ___ _   _ ___ ___ ___ ___  ___  ___ ___   _   ___ 
 / __| __/ __| | | | _ \\ __| __/ _ \\| _ \\/ __| __| /_\\ |_ _|
 \\__ \\ _| (__| |_| |   / _|| _| (_) |   / (_ | _| / _ \\ | | 
 |___/___\\___|\\___/|_|_\\___|_| \\___/|_|_\\\\___|___/_/ \\_\\___|`}
          </pre>
        </div>

        {lines.map((line, idx) => {
          if (!line) return null;
          const isHighlight = line.includes('SECUREFORGEAI') || line.includes('READY');
          const isPassed = line.includes('OK') || line.includes('PASSED') || line.includes('VERIFIED');
          return (
            <div key={idx} className="flex items-start space-x-2">
              <span className="text-[#00ff66]/50 select-none">[{String(idx + 1).padStart(2, '0')}]</span>
              <span className={isHighlight ? 'text-[#33ff77] font-semibold text-glow' : isPassed ? 'text-[#00ff66]' : 'text-[#00ff66]/80'}>
                {line}
              </span>
            </div>
          );
        })}

        {phase === 'booting' && (
          <div className="flex items-center space-x-2 text-[#00ff66] animate-pulse pt-2">
            <span className="text-[#00ff66]">_</span>
            <span className="text-xs text-[#00ff66]/60">EXECUTING KERNEL MEMORY MAP...</span>
          </div>
        )}
      </div>

      {/* Bottom Progress Bar */}
      <div className="border-t border-[#00ff66]/30 pt-4 space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="text-[#00ff66]/70">INITIALIZING SECUREFORGEAI SUBSYSTEMS</span>
          <span className="text-[#00ff66] font-bold">{progress}%</span>
        </div>

        <div className="w-full h-3 bg-[#081208] border border-[#00ff66]/40 p-0.5">
          <div
            className="h-full bg-[#00ff66] transition-all duration-100 ease-out shadow-[0_0_10px_#00ff66]"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#00ff66]/50">
          <span>PLATFORM: WINDOWS DESKTOP (.EXE)</span>
          <span>SECURITY LEVEL: MAXIMUM ENCLAVE</span>
        </div>
      </div>
    </div>
  );
};
