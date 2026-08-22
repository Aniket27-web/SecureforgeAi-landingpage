import React, { useState, useEffect } from 'react';
import { Download, Cpu, Terminal, Layers, Lock } from 'lucide-react';
import { sound } from '../../utils/sound';

interface ModernHeroProps {
  onNavigate: (sectionId: string) => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onNavigate }) => {
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
    <section id="whoami" className="relative pt-6 pb-12 px-3 sm:px-6 border-b border-slate-200 bg-white">
      {/* Command prompt execution banner */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-600 pb-3 border-b border-slate-200 select-none font-mono">
        <div className="flex items-center space-x-2">
          <span className="text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 font-bold">[SESSION_INIT]</span>
          <span className="font-semibold text-slate-800">HOST: SECURE-FORGE-KERNEL</span>
          <span className="hidden sm:inline text-slate-400">PID: 0x4B21</span>
        </div>
        <div className="flex items-center space-x-3 text-[11px]">
          <span className="text-emerald-700 font-bold">ENCLAVE: ACTIVE</span>
          <span className="text-blue-700 font-semibold">{timestamp}</span>
        </div>
      </div>

      {/* Terminal Command Line */}
      <div className="mt-4 flex items-center space-x-2 text-sm sm:text-base font-bold text-slate-900 font-mono">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span className="text-slate-900">whoami --verbose</span>
        <span className="w-2.5 h-4 bg-blue-600 inline-block cursor-blink" />
      </div>

      {/* ASCII Logo Banner (Desktop) */}
      <div className="mt-6 overflow-x-auto py-2">
        <pre className="hidden lg:block text-blue-600 text-[11px] sm:text-xs font-mono leading-none tracking-tighter select-none">
          {asciiBanner}
        </pre>

        {/* Scaled / Mobile Friendly stylized Logo */}
        <div className="lg:hidden p-4 bg-slate-50 border border-slate-200 text-center my-3 rounded-xl">
          <div className="text-2xl sm:text-3xl font-black tracking-widest text-slate-900 font-heading">
            SECURE<span className="text-blue-600">FORGEAI</span>
          </div>
          <div className="text-[10px] sm:text-xs text-blue-700 font-mono tracking-wider mt-1 font-bold">
            [ SECURE AI DEV &amp; DEPLOYMENT PLATFORM ]
          </div>
        </div>
      </div>

      {/* Tagline & Subheading */}
      <div className="mt-4 max-w-4xl space-y-4">
        <div className="text-base sm:text-xl md:text-2xl font-bold tracking-wide text-slate-900 uppercase font-heading">
          AI-POWERED SECURE SOFTWARE DEVELOPMENT
          <br className="hidden sm:inline" /> &amp; DEPLOYMENT PLATFORM
        </div>

        {/* Bullets */}
        <div className="space-y-1.5 text-xs sm:text-sm font-semibold text-slate-800 border-l-3 border-blue-600 pl-3 py-1 font-sans">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-blue-700 font-bold font-mono">&gt;</span>
            <span className="font-bold text-slate-900">BUILD SECURE.</span>
            <span className="text-slate-500 text-xs font-normal">— Code synthesis with automated safety boundaries</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-blue-700 font-bold font-mono">&gt;</span>
            <span className="font-bold text-slate-900">SCAN INTELLIGENTLY.</span>
            <span className="text-slate-500 text-xs font-normal">— Multi-layer SAST, CVE, secret, and AST anomaly audit</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-blue-700 font-bold font-mono">&gt;</span>
            <span className="font-bold text-slate-900">DEPLOY CONFIDENTLY.</span>
            <span className="text-slate-500 text-xs font-normal">— Cryptographically signed releases with zero leakage</span>
          </div>
        </div>

        {/* Platform info pill */}
        <div className="inline-flex flex-wrap items-center gap-2 pt-2 font-mono">
          <span className="px-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded text-slate-800 flex items-center space-x-1.5 font-semibold">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>PLATFORM: WINDOWS DESKTOP (.EXE)</span>
          </span>
          <span className="px-2.5 py-1 text-xs bg-amber-50 border border-amber-200 rounded text-amber-900 flex items-center space-x-1.5 font-semibold">
            <Cpu className="w-3.5 h-3.5 text-amber-600" />
            <span>OFFLINE LOCAL LLM READY</span>
          </span>
          <span className="px-2.5 py-1 text-xs bg-slate-50 border border-slate-200 rounded text-slate-700">
            x86_64 / x64 NATIVE
          </span>
        </div>

        {/* CTA Button Group */}
        <div className="pt-6 flex flex-wrap items-center gap-3 font-mono">
          {/* Primary CTA */}
          <button
            onClick={() => {
              sound.playSuccessChime();
              onNavigate('download');
            }}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold tracking-wider flex items-center space-x-2.5 shadow-sm shadow-blue-600/20 cursor-pointer transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>[ INITIALIZE SECUREFORGEAI ]</span>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={() => {
              sound.playCommandExecuted();
              onNavigate('architecture');
            }}
            className="px-4 py-3 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm font-semibold flex items-center space-x-2 cursor-pointer transition-colors"
          >
            <Layers className="w-4 h-4 text-blue-600" />
            <span>[ VIEW ARCHITECTURE ]</span>
          </button>

          {/* Preview CTA */}
          <button
            onClick={() => {
              sound.playCommandExecuted();
              onNavigate('preview');
            }}
            className="px-4 py-3 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-900 text-xs sm:text-sm font-semibold flex items-center space-x-2 cursor-pointer transition-colors"
          >
            <Terminal className="w-4 h-4 text-amber-600" />
            <span>[ LIVE APP PREVIEW ]</span>
          </button>
        </div>

        {/* Live system notice */}
        <div className="pt-3 text-[11px] text-slate-500 flex items-center space-x-2 font-mono">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>STATUS: SECURE WORKSTATION // LOCAL INFERENCE &amp; CLUSTER ENGINES SYNCHRONIZED</span>
        </div>
      </div>
    </section>
  );
};
