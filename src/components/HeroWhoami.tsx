import React, { useState, useEffect } from 'react';
import { Download, Cpu, Terminal, Layers, Lock } from 'lucide-react';
import { sound } from '../utils/sound';

interface HeroWhoamiProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroWhoami: React.FC<HeroWhoamiProps> = ({ onNavigate }) => {
  const [timestamp, setTimestamp] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC');
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const asciiBanner = `
███████╗███████╗ ██████╗██╗   ██╗██████╗ ███████╗███████╗ ██████╗ ██████╗  ██████╗ ███████╗ █████╗ ██╗
██╔════╝██╔════╝██╔════╝██║   ██║██╔══██╗██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝ ██╔════╝██╔══██╗██║
███████╗█████╗  ██║     ██║   ██║██████╔╝█████╗  █████╗  ██║   ██║██████╔╝██║  ███╗█████╗  ███████║██║
╚════██║██╔══╝  ██║     ██║   ██║██╔══██╗██╔══╝  ██╔══╝  ██║   ██║██╔══██╗██║   ██║██╔══╝  ██╔══██║██║
███████║███████╗╚██████╗╚██████╔╝██║  ██║███████╗██║     ╚██████╔╝██║  ██║╚██████╔╝███████╗██║  ██║██║
╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝      ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝╚═╝
`;

  return (
    <section id="whoami" className="relative pt-6 pb-12 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt execution banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#00ff66]/70 pb-3 border-b border-[#00ff66]/15 select-none">
        <div className="flex items-center space-x-2">
          <span className="text-[#ffb000] font-bold">[SESSION_INIT]</span>
          <span>HOST: SECURE-FORGE-KERNEL</span>
          <span className="hidden sm:inline">PID: 0x4B21</span>
        </div>
        <div className="flex items-center space-x-3 text-[11px]">
          <span>ENCLAVE: ACTIVE</span>
          <span className="text-[#33ff77]">{timestamp}</span>
        </div>
      </div>

      {/* Terminal Command Line */}
      <div className="mt-4 flex items-center space-x-2 text-sm sm:text-base font-bold text-[#00ff66]">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">whoami --verbose</span>
        <span className="w-2.5 h-4 bg-[#00ff66] inline-block cursor-blink" />
      </div>

      {/* ASCII Logo Banner (Desktop) */}
      <div className="mt-6 overflow-x-auto py-2">
        <pre className="hidden lg:block text-[#00ff66] text-glow text-[11px] sm:text-xs font-mono leading-none tracking-tighter select-none">
          {asciiBanner}
        </pre>

        {/* Scaled / Mobile Friendly stylized Logo */}
        <div className="lg:hidden p-4 bg-[#081208] border border-[#00ff66]/40 text-center my-3">
          <div className="text-2xl sm:text-3xl font-black tracking-widest text-[#00ff66] text-glow">
            SECUREFORGEAI
          </div>
          <div className="text-[10px] sm:text-xs text-[#ffb000] font-mono tracking-wider mt-1">
            [ SECURE AI DEV &amp; DEPLOYMENT PLATFORM ]
          </div>
        </div>
      </div>

      {/* Tagline & Subheading */}
      <div className="mt-4 max-w-4xl space-y-4">
        <div className="text-base sm:text-xl md:text-2xl font-bold tracking-wide text-[#33ff77] text-glow uppercase">
          AI-POWERED SECURE SOFTWARE DEVELOPMENT
          <br className="hidden sm:inline" /> &amp; DEPLOYMENT PLATFORM
        </div>

        {/* Bullets */}
        <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-[#00ff66]/90 border-l-2 border-[#00ff66] pl-3 py-1">
          <div className="flex items-center space-x-2">
            <span className="text-[#ffb000]">&gt;</span>
            <span>BUILD SECURE.</span>
            <span className="text-[#00ff66]/50 text-xs">— Code synthesis with automated safety boundaries</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#ffb000]">&gt;</span>
            <span>SCAN INTELLIGENTLY.</span>
            <span className="text-[#00ff66]/50 text-xs">— Multi-layer SAST, CVE, secret, and AST anomaly audit</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#ffb000]">&gt;</span>
            <span>DEPLOY CONFIDENTLY.</span>
            <span className="text-[#00ff66]/50 text-xs">— Cryptographically signed releases with zero leakage</span>
          </div>
        </div>

        {/* Platform info pill */}
        <div className="inline-flex flex-wrap items-center gap-2 pt-2">
          <span className="px-2.5 py-1 text-xs bg-[#081208] border border-[#00ff66]/50 text-[#00ff66] flex items-center space-x-1.5">
            <Lock className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>PLATFORM: WINDOWS DESKTOP (.EXE)</span>
          </span>
          <span className="px-2.5 py-1 text-xs bg-[#0c0a04] border border-[#ffb000]/50 text-[#ffb000] flex items-center space-x-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#ffb000]" />
            <span>OFFLINE LOCAL LLM READY</span>
          </span>
          <span className="px-2.5 py-1 text-xs bg-[#081208] border border-[#00ff66]/30 text-[#00ff66]/80">
            x86_64 / x64 NATIVE
          </span>
        </div>

        {/* CTA Button Group */}
        <div className="pt-6 flex flex-wrap items-center gap-3">
          {/* Primary CTA */}
          <button
            onClick={() => {
              sound.playSuccessChime();
              onNavigate('download');
            }}
            className="term-btn-primary px-5 py-3 text-xs sm:text-sm font-bold tracking-wider flex items-center space-x-2.5 group cursor-pointer"
          >
            <Download className="w-4 h-4 group-hover:animate-bounce" />
            <span>[ INITIALIZE SECUREFORGEAI ]</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              sound.playCommandExecuted();
              onNavigate('architecture');
            }}
            className="term-btn px-4 py-3 text-xs sm:text-sm flex items-center space-x-2 cursor-pointer"
          >
            <Layers className="w-4 h-4" />
            <span>[ VIEW ARCHITECTURE ]</span>
          </button>

          {/* Preview CTA */}
          <button
            onClick={() => {
              sound.playCommandExecuted();
              onNavigate('preview');
            }}
            className="term-btn-amber px-4 py-3 text-xs sm:text-sm flex items-center space-x-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>[ LIVE APP PREVIEW ]</span>
          </button>
        </div>

        {/* Live system notice */}
        <div className="pt-3 text-[11px] text-[#00ff66]/50 flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-pulse" />
          <span>STATUS: SECURE WORKSTATION // LOCAL INFERENCE &amp; CLUSTER ENGINES SYNCHRONIZED</span>
        </div>
      </div>
    </section>
  );
};
