import React, { useState } from 'react';
import { Activity, ShieldCheck, Wifi, WifiOff, Cpu } from 'lucide-react';
import { sound } from '../utils/sound';

export const SystemStatus: React.FC = () => {
  const [networkMode, setNetworkMode] = useState<'ONLINE' | 'OFFLINE'>('ONLINE');

  const toggleNetwork = () => {
    sound.playCommandExecuted();
    setNetworkMode(prev => (prev === 'ONLINE' ? 'OFFLINE' : 'ONLINE'));
  };

  const statusRows = [
    { label: 'CORE ENGINE', status: 'ONLINE', state: 'green', desc: 'Kernel v1.0.4 - Secure Memory Ring' },
    { label: 'AI ENGINE', status: 'ONLINE', state: 'green', desc: 'Multi-provider Orchestrator + Fallback' },
    { label: 'SECURITY SCANNER', status: 'ACTIVE', state: 'green', desc: 'SAST / AST / Secret Anomaly Scanner' },
    { label: 'CODE ANALYZER', status: 'ACTIVE', state: 'green', desc: 'Tree-Sitter Syntax & Taint Tracker' },
    { label: 'TEST ENGINE', status: 'READY', state: 'green', desc: 'Automated Test Generation & Runner' },
    { label: 'LOCAL LLM', status: 'AVAILABLE', state: 'amber', desc: 'llama.cpp GGUF Quantized Offline Engine' },
    { label: 'DEPLOYMENT ENGINE', status: 'READY', state: 'green', desc: 'Cryptographic SHA-256 Pipeline' },
    { label: 'NETWORK MODE', status: networkMode === 'ONLINE' ? 'ONLINE / CLUSTER' : 'OFFLINE / AIR-GAPPED', state: networkMode === 'ONLINE' ? 'green' : 'amber', desc: networkMode === 'ONLINE' ? 'Cloud LLM + Updates Enabled' : 'Zero Network Calls, Complete Privacy' },
    { label: 'THREAT MONITOR', status: 'ACTIVE', state: 'green', desc: 'Real-time Buffer & Supply-Chain Guard' }
  ];

  return (
    <section id="status" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command invocation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">system_status</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Terminal Status Panel (2 Cols on Desktop) */}
        <div className="lg:col-span-2 terminal-panel p-4 sm:p-6 border border-[#00ff66]/30">
          <div className="flex items-center justify-between border-b border-[#00ff66]/30 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-[#00ff66] animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-[#00ff66] text-glow">
                SYSTEM STATUS // TELEMETRY REPORT
              </span>
            </div>
            <span className="text-[11px] px-2 py-0.5 border border-[#00ff66]/40 text-[#00ff66]">
              REALTIME: 60 FPS
            </span>
          </div>

          {/* Status Matrix */}
          <div className="space-y-2 text-xs sm:text-sm font-mono">
            <div className="text-[#00ff66]/40 select-none pb-1">
              ------------------------------------------------------------------------
            </div>

            {statusRows.map((row, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 px-2 hover:bg-[#00ff66]/5 transition-all border-l-2 border-transparent hover:border-[#00ff66]"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-[#00ff66]/50 text-xs w-6 select-none">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-[#00ff66] tracking-wide">
                    {row.label}
                  </span>
                </div>

                <div className="flex items-center space-x-3 mt-1 sm:mt-0">
                  <span className="text-[11px] text-[#00ff66]/60 hidden md:inline">
                    {row.desc}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-xs font-bold ${
                      row.state === 'amber'
                        ? 'border border-[#ffb000]/60 bg-[#ffb000]/10 text-[#ffb000] text-glow-amber'
                        : 'border border-[#00ff66]/60 bg-[#00ff66]/10 text-[#00ff66] text-glow'
                    }`}
                  >
                    [ {row.status} ]
                  </span>
                </div>
              </div>
            ))}

            <div className="text-[#00ff66]/40 select-none pt-1">
              ------------------------------------------------------------------------
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-[#00ff66]/20 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2 text-[#33ff77] text-glow">
              <ShieldCheck className="w-4 h-4 text-[#00ff66]" />
              <span>SYSTEM READY... ALL SUBSYSTEMS NOMINAL</span>
            </div>
            <span className="text-[#00ff66]/60 text-[11px]">
              SECURITY AUDIT LEVEL: LEVEL 4 RIGOROUS
            </span>
          </div>
        </div>

        {/* Live Controls & Telemetry Widget */}
        <div className="space-y-4">
          
          {/* Network Switcher Card */}
          <div className="terminal-panel-amber p-4 border border-[#ffb000]/30">
            <div className="flex items-center justify-between mb-3 border-b border-[#ffb000]/30 pb-2">
              <span className="text-xs font-bold text-[#ffb000] flex items-center space-x-1.5">
                {networkMode === 'ONLINE' ? <Wifi className="w-3.5 h-3.5" /> : <WifiOff className="w-3.5 h-3.5" />}
                <span>NETWORK ENVIRONMENT SWITCHER</span>
              </span>
            </div>

            <p className="text-xs text-[#ffb000]/80 mb-3 leading-relaxed">
              Toggle SecureForgeAI between cloud-assisted development and complete air-gapped offline local LLM execution.
            </p>

            <button
              onClick={toggleNetwork}
              className="w-full term-btn-amber py-2 text-xs flex items-center justify-center space-x-2 font-bold cursor-pointer"
            >
              <span>SWITCH TO {networkMode === 'ONLINE' ? 'OFFLINE (AIR-GAPPED)' : 'ONLINE (CLOUD ASSIST)'}</span>
            </button>

            <div className="mt-3 text-[11px] text-[#ffb000]/70 flex items-center justify-between">
              <span>CURRENT MODE:</span>
              <span className="font-bold text-[#ffb000]">[ {networkMode} ]</span>
            </div>
          </div>

          {/* Telemetry Metrics */}
          <div className="terminal-panel p-4 border border-[#00ff66]/30 space-y-3 text-xs">
            <div className="text-xs font-bold text-[#00ff66] border-b border-[#00ff66]/20 pb-1.5 flex items-center justify-between">
              <span>HOST HARDWARE TELEMETRY</span>
              <Cpu className="w-3.5 h-3.5 text-[#00ff66]" />
            </div>

            <div className="flex justify-between items-center text-[#00ff66]/80">
              <span>ACTIVE THREATS:</span>
              <span className="font-bold text-[#33ff77]">[ 0 DETECTED ]</span>
            </div>

            <div className="flex justify-between items-center text-[#00ff66]/80">
              <span>ENCLAVE MEMORY ALLOCATED:</span>
              <span className="font-mono text-[#00ff66]">142.4 MB</span>
            </div>

            <div className="flex justify-between items-center text-[#00ff66]/80">
              <span>SANDBOX ISOLATION:</span>
              <span className="text-[#00ff66] font-bold">[ 100% ENFORCED ]</span>
            </div>

            <div className="flex justify-between items-center text-[#00ff66]/80">
              <span>RESPONSE LATENCY:</span>
              <span className="font-mono text-[#00ff66]">0.4ms (LOCAL)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
