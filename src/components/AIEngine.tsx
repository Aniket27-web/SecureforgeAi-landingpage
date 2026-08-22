import React, { useState } from 'react';
import { Cpu, Cloud, Check } from 'lucide-react';
import { sound } from '../utils/sound';

export const AIEngine: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<'LOCAL' | 'CLOUD'>('LOCAL');

  const handleToggle = (mode: 'LOCAL' | 'CLOUD') => {
    sound.playCommandExecuted();
    setSelectedMode(mode);
  };

  const localModels = [
    { name: 'DeepSeek-Coder-V2-Lite (GGUF)', params: '16B Quantized Q4_K_M', ram: '8.4 GB RAM', context: '32k tokens', speed: '48 tok/s' },
    { name: 'Llama-3.1-8B-Instruct (GGUF)', params: '8B Quantized Q5_K_M', ram: '5.8 GB RAM', context: '128k tokens', speed: '62 tok/s' },
    { name: 'Qwen-2.5-Coder-7B (GGUF)', params: '7B Quantized Q4_K_M', ram: '4.9 GB RAM', context: '32k tokens', speed: '70 tok/s' },
    { name: 'Mistral-Nemo-12B (GGUF)', params: '12B Quantized Q4_K_M', ram: '7.2 GB RAM', context: '128k tokens', speed: '52 tok/s' },
  ];

  return (
    <section id="ai-engine" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">ai_engine --status --runtime-matrix</span>
      </div>

      <div className="terminal-panel p-4 sm:p-6 border border-[#00ff66]/30">
        
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#00ff66]/30 pb-3 mb-6">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-[#33ff77] text-glow tracking-wider">
              DUAL AI ENGINE ARCHITECTURE // CLOUD &amp; OFFLINE LOCAL LLM
            </h2>
            <p className="text-xs text-[#00ff66]/70 mt-0.5">
              Intelligent coding and security scanning without mandatory external server dependencies.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleToggle('LOCAL')}
              className={`px-3 py-1.5 text-xs font-bold border transition-all cursor-pointer flex items-center space-x-1.5 ${
                selectedMode === 'LOCAL'
                  ? 'border-[#ffb000] bg-[#ffb000]/15 text-[#ffb000] text-glow-amber shadow-[0_0_12px_rgba(255,176,0,0.3)]'
                  : 'border-[#00ff66]/30 text-[#00ff66]/60 hover:text-[#00ff66]'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>LOCAL LLM (OFFLINE)</span>
            </button>

            <button
              onClick={() => handleToggle('CLOUD')}
              className={`px-3 py-1.5 text-xs font-bold border transition-all cursor-pointer flex items-center space-x-1.5 ${
                selectedMode === 'CLOUD'
                  ? 'border-[#00ff66] bg-[#00ff66]/15 text-[#00ff66] text-glow shadow-[0_0_12px_rgba(0,255,102,0.3)]'
                  : 'border-[#00ff66]/30 text-[#00ff66]/60 hover:text-[#00ff66]'
              }`}
            >
              <Cloud className="w-3.5 h-3.5" />
              <span>CLOUD AI (ONLINE)</span>
            </button>
          </div>
        </div>

        {/* Dual Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Local LLM Card */}
          <div className={`p-4 sm:p-5 border transition-all ${
            selectedMode === 'LOCAL'
              ? 'bg-[#0c0903] border-[#ffb000] shadow-[0_0_15px_rgba(255,176,0,0.2)]'
              : 'bg-[#040804] border-[#00ff66]/20 opacity-80'
          }`}>
            <div className="flex items-center justify-between border-b border-[#ffb000]/30 pb-2 mb-3">
              <div className="flex items-center space-x-2 text-[#ffb000]">
                <Cpu className="w-4 h-4" />
                <span className="font-bold text-sm tracking-wider">LOCAL LLM RUNTIME</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] bg-[#ffb000]/10 border border-[#ffb000]/40 text-[#ffb000] font-bold">
                [ AVAILABLE ]
              </span>
            </div>

            <ul className="space-y-2 text-xs text-[#ffb000]/90 font-mono mb-4">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#ffb000]" />
                <span>100% Offline processing — zero internet required</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#ffb000]" />
                <span>Zero code transmission or external telemetry</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#ffb000]" />
                <span>Native llama.cpp engine with AVX2 &amp; GPU offload</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#ffb000]" />
                <span>Complete air-gapped development compliance</span>
              </li>
            </ul>

            <div className="p-2.5 bg-[#050300] border border-[#ffb000]/25 text-[11px] text-[#ffb000]/80">
              <span className="font-bold text-[#ffb000]">OFFLINE CAPABILITY: </span>
              SecureForgeAI embeds optimized local inference pipelines so developers can write code, analyze security patterns, and run tests in restricted, defense, or offline environments.
            </div>
          </div>

          {/* Cloud AI Card */}
          <div className={`p-4 sm:p-5 border transition-all ${
            selectedMode === 'CLOUD'
              ? 'bg-[#061206] border-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.2)]'
              : 'bg-[#040804] border-[#00ff66]/20 opacity-80'
          }`}>
            <div className="flex items-center justify-between border-b border-[#00ff66]/30 pb-2 mb-3">
              <div className="flex items-center space-x-2 text-[#00ff66]">
                <Cloud className="w-4 h-4" />
                <span className="font-bold text-sm tracking-wider">CLOUD AI ORCHESTRATOR</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] bg-[#00ff66]/10 border border-[#00ff66]/40 text-[#00ff66] font-bold">
                [ AVAILABLE ]
              </span>
            </div>

            <ul className="space-y-2 text-xs text-[#00ff66]/90 font-mono mb-4">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                <span>Ultra-fast high-parameter reasoning models</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                <span>Multi-provider fallback (OpenAI, Anthropic, Custom)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                <span>Continuous threat database and CVE synchronization</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-[#00ff66]" />
                <span>Encrypted transit (TLS 1.3 + payload stripping)</span>
              </li>
            </ul>

            <div className="p-2.5 bg-[#020502] border border-[#00ff66]/25 text-[11px] text-[#00ff66]/80">
              <span className="font-bold text-[#00ff66]">ONLINE ASSISTANCE: </span>
              Connects to enterprise cloud AI when available to handle complex multi-repository refactors and large-scale architecture reviews.
            </div>
          </div>

        </div>

        {/* Supported Local Models Table */}
        <div className="mt-6 pt-4 border-t border-[#00ff66]/25">
          <div className="text-xs font-bold text-[#ffb000] mb-3 flex items-center justify-between">
            <span>OFFLINE LOCAL MODEL COMPATIBILITY REGISTRY</span>
            <span className="text-[10px] text-[#00ff66]/50">ENGINE: llama.cpp / GGUF</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-[#00ff66]/30 text-[#00ff66]/60 text-[11px]">
                  <th className="py-2 px-2">MODEL ARCHITECTURE</th>
                  <th className="py-2 px-2">QUANTIZATION</th>
                  <th className="py-2 px-2">RAM FOOTPRINT</th>
                  <th className="py-2 px-2">CONTEXT WINDOW</th>
                  <th className="py-2 px-2">INFERENCE SPEED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#00ff66]/15 text-[#00ff66]/90">
                {localModels.map((m, idx) => (
                  <tr key={idx} className="hover:bg-[#00ff66]/5 transition-all">
                    <td className="py-2 px-2 font-bold text-[#33ff77]">{m.name}</td>
                    <td className="py-2 px-2 text-[#ffb000]">{m.params}</td>
                    <td className="py-2 px-2">{m.ram}</td>
                    <td className="py-2 px-2">{m.context}</td>
                    <td className="py-2 px-2 text-[#00ff66] font-bold">{m.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
