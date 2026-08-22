import React, { useState } from 'react';
import { Cpu, Cloud, Check } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ModernAIEngine: React.FC = () => {
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
    <section id="ai-engine" className="py-10 px-3 sm:px-6 border-b border-slate-200 bg-slate-50/50 font-mono">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>ai_engine --status --runtime-matrix</span>
      </div>

      <div className="modern-card p-4 sm:p-6 border border-slate-200">
        
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-3 mb-6">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 font-heading tracking-wider">
              DUAL AI ENGINE ARCHITECTURE // CLOUD &amp; OFFLINE LOCAL LLM
            </h2>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              Intelligent coding and security scanning without mandatory external server dependencies.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleToggle('LOCAL')}
              className={`px-3 py-1.5 text-xs font-bold border rounded-lg transition-colors cursor-pointer flex items-center space-x-1.5 ${
                selectedMode === 'LOCAL'
                  ? 'border-amber-300 bg-amber-50 text-amber-900 shadow-xs'
                  : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-white'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>LOCAL LLM (OFFLINE)</span>
            </button>

            <button
              onClick={() => handleToggle('CLOUD')}
              className={`px-3 py-1.5 text-xs font-bold border rounded-lg transition-colors cursor-pointer flex items-center space-x-1.5 ${
                selectedMode === 'CLOUD'
                  ? 'border-blue-500 bg-blue-600 text-white shadow-xs'
                  : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-white'
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
          <div className={`p-4 sm:p-5 border rounded-xl transition-all ${
            selectedMode === 'LOCAL'
              ? 'bg-amber-50/50 border-amber-300 shadow-xs ring-1 ring-amber-400/40'
              : 'bg-slate-50 border-slate-200 opacity-80'
          }`}>
            <div className="flex items-center justify-between border-b border-amber-200/60 pb-2 mb-3">
              <div className="flex items-center space-x-2 text-amber-900">
                <Cpu className="w-4 h-4 text-amber-600" />
                <span className="font-bold text-sm tracking-wider font-heading">LOCAL LLM RUNTIME</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] bg-amber-100 border border-amber-300 text-amber-900 rounded font-bold">
                [ AVAILABLE ]
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 font-sans mb-4">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>100% Offline processing — zero internet required</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Zero code transmission or external telemetry</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Native llama.cpp engine with AVX2 &amp; GPU offload</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                <span>Complete air-gapped development compliance</span>
              </li>
            </ul>

            <div className="p-2.5 bg-white border border-amber-200 rounded-lg text-[11px] text-slate-600 font-sans leading-relaxed">
              <span className="font-bold text-amber-900 font-mono">OFFLINE CAPABILITY: </span>
              SecureForgeAI embeds optimized local inference pipelines so developers can write code, analyze security patterns, and run tests in restricted, defense, or offline environments.
            </div>
          </div>

          {/* Cloud AI Card */}
          <div className={`p-4 sm:p-5 border rounded-xl transition-all ${
            selectedMode === 'CLOUD'
              ? 'bg-blue-50/50 border-blue-300 shadow-xs ring-1 ring-blue-400/40'
              : 'bg-slate-50 border-slate-200 opacity-80'
          }`}>
            <div className="flex items-center justify-between border-b border-blue-200/60 pb-2 mb-3">
              <div className="flex items-center space-x-2 text-blue-900">
                <Cloud className="w-4 h-4 text-blue-600" />
                <span className="font-bold text-sm tracking-wider font-heading">CLOUD AI ORCHESTRATOR</span>
              </div>
              <span className="px-2 py-0.5 text-[10px] bg-blue-100 border border-blue-300 text-blue-800 rounded font-bold">
                [ AVAILABLE ]
              </span>
            </div>

            <ul className="space-y-2 text-xs text-slate-700 font-sans mb-4">
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>Ultra-fast high-parameter reasoning models</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>Multi-provider fallback (OpenAI, Anthropic, Custom)</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>Continuous threat database and CVE synchronization</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                <span>Encrypted transit (TLS 1.3 + payload stripping)</span>
              </li>
            </ul>

            <div className="p-2.5 bg-white border border-blue-200 rounded-lg text-[11px] text-slate-600 font-sans leading-relaxed">
              <span className="font-bold text-blue-700 font-mono">ONLINE ASSISTANCE: </span>
              Connects to enterprise cloud AI when available to handle complex multi-repository refactors and large-scale architecture reviews.
            </div>
          </div>

        </div>

        {/* Supported Local Models Table */}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <div className="text-xs font-bold text-slate-900 mb-3 flex items-center justify-between">
            <span>OFFLINE LOCAL MODEL COMPATIBILITY REGISTRY</span>
            <span className="text-[10px] text-slate-500">ENGINE: llama.cpp / GGUF</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 text-[11px]">
                  <th className="py-2 px-2">MODEL ARCHITECTURE</th>
                  <th className="py-2 px-2">QUANTIZATION</th>
                  <th className="py-2 px-2">RAM FOOTPRINT</th>
                  <th className="py-2 px-2">CONTEXT WINDOW</th>
                  <th className="py-2 px-2">INFERENCE SPEED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {localModels.map((m, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2 px-2 font-bold text-slate-900 font-sans">{m.name}</td>
                    <td className="py-2 px-2 text-amber-800">{m.params}</td>
                    <td className="py-2 px-2 text-slate-600">{m.ram}</td>
                    <td className="py-2 px-2 text-slate-600">{m.context}</td>
                    <td className="py-2 px-2 text-emerald-700 font-bold">{m.speed}</td>
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
