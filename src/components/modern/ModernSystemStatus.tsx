import React, { useState } from 'react';
import { Activity, ShieldCheck, Wifi, WifiOff, Cpu } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ModernSystemStatus: React.FC = () => {
  const [networkMode, setNetworkMode] = useState<'ONLINE' | 'OFFLINE'>('ONLINE');

  const toggleNetwork = () => {
    sound.playCommandExecuted();
    setNetworkMode((prev) => (prev === 'ONLINE' ? 'OFFLINE' : 'ONLINE'));
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
    <section id="status" className="py-10 px-3 sm:px-6 border-b border-slate-200 bg-white font-mono">
      {/* Command invocation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>system_status</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Status Panel (2 Cols on Desktop) */}
        <div className="lg:col-span-2 modern-card p-4 sm:p-6 border border-slate-200">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-blue-600 animate-pulse" />
              <span className="text-sm font-bold tracking-widest text-slate-900 font-heading">
                SYSTEM STATUS // TELEMETRY REPORT
              </span>
            </div>
            <span className="text-[11px] px-2 py-0.5 border border-slate-200 text-slate-600 rounded bg-slate-50 font-semibold">
              REALTIME: 60 FPS
            </span>
          </div>

          {/* Status Matrix */}
          <div className="space-y-2 text-xs sm:text-sm font-mono">
            <div className="text-slate-300 select-none pb-1">
              ------------------------------------------------------------------------
            </div>

            {statusRows.map((row, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-1.5 px-2 hover:bg-slate-50 rounded transition-colors border-l-2 border-transparent hover:border-blue-600"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-slate-400 text-xs w-6 select-none font-semibold">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-semibold text-slate-900 tracking-wide">
                    {row.label}
                  </span>
                </div>

                <div className="flex items-center space-x-3 mt-1 sm:mt-0">
                  <span className="text-[11px] text-slate-500 hidden md:inline font-sans">
                    {row.desc}
                  </span>
                  <span
                    className={`px-2.5 py-0.5 text-xs font-bold rounded border ${
                      row.state === 'amber'
                        ? 'border-amber-300 bg-amber-50 text-amber-900'
                        : 'border-blue-200 bg-blue-50 text-blue-800'
                    }`}
                  >
                    [ {row.status} ]
                  </span>
                </div>
              </div>
            ))}

            <div className="text-slate-300 select-none pt-1">
              ------------------------------------------------------------------------
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
            <div className="flex items-center space-x-2 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>SYSTEM READY... ALL SUBSYSTEMS NOMINAL</span>
            </div>
            <span className="text-slate-500 text-[11px] font-sans">
              SECURITY AUDIT LEVEL: LEVEL 4 RIGOROUS
            </span>
          </div>
        </div>

        {/* Live Controls & Telemetry Widget (1 Col) */}
        <div className="space-y-4">
          
          {/* Network Switcher Card */}
          <div className="modern-card p-4 border-amber-200 bg-amber-50/50">
            <div className="flex items-center justify-between mb-3 border-b border-amber-200/60 pb-2">
              <span className="text-xs font-bold text-amber-900 flex items-center space-x-1.5 font-heading">
                {networkMode === 'ONLINE' ? <Wifi className="w-3.5 h-3.5 text-amber-600" /> : <WifiOff className="w-3.5 h-3.5 text-amber-600" />}
                <span>NETWORK ENVIRONMENT SWITCHER</span>
              </span>
            </div>

            <p className="text-xs text-slate-600 mb-3 leading-relaxed font-sans">
              Toggle SecureForgeAI between cloud-assisted development and complete air-gapped offline local LLM execution.
            </p>

            <button
              onClick={toggleNetwork}
              className="w-full py-2 px-3 rounded-lg bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-900 text-xs flex items-center justify-center space-x-2 font-bold cursor-pointer transition-colors shadow-2xs"
            >
              <span>SWITCH TO {networkMode === 'ONLINE' ? 'OFFLINE (AIR-GAPPED)' : 'ONLINE (CLOUD ASSIST)'}</span>
            </button>

            <div className="mt-3 text-[11px] text-slate-600 flex items-center justify-between font-mono">
              <span>CURRENT MODE:</span>
              <span className="font-bold text-amber-900">[ {networkMode} ]</span>
            </div>
          </div>

          {/* Telemetry Metrics */}
          <div className="modern-card p-4 border border-slate-200 space-y-3 text-xs">
            <div className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-1.5 flex items-center justify-between font-heading">
              <span>HOST HARDWARE TELEMETRY</span>
              <Cpu className="w-3.5 h-3.5 text-blue-600" />
            </div>

            <div className="flex justify-between items-center text-slate-700">
              <span className="text-slate-500">ACTIVE THREATS:</span>
              <span className="font-bold text-emerald-700">[ 0 DETECTED ]</span>
            </div>

            <div className="flex justify-between items-center text-slate-700">
              <span className="text-slate-500">ENCLAVE MEMORY ALLOCATED:</span>
              <span className="font-mono text-blue-700 font-semibold">142.4 MB</span>
            </div>

            <div className="flex justify-between items-center text-slate-700">
              <span className="text-slate-500">SANDBOX ISOLATION:</span>
              <span className="text-emerald-700 font-bold">[ 100% ENFORCED ]</span>
            </div>

            <div className="flex justify-between items-center text-slate-700">
              <span className="text-slate-500">RESPONSE LATENCY:</span>
              <span className="font-mono text-slate-900 font-semibold">0.4ms (LOCAL)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
