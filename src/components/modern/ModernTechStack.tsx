import React from 'react';
import { Layers } from 'lucide-react';

export const ModernTechStack: React.FC = () => {
  const stackItems = [
    { name: 'PYTHON / C++ CORE', level: 90, bar: '████████████████░░', role: 'High-performance runtime & AST bindings', tags: ['Python 3.12', 'C++20', 'PyInstaller'] },
    { name: 'AI / LOCAL LLM', level: 85, bar: '███████████████░░░', role: 'llama.cpp, GGUF, Ollama, ONNX Runtime', tags: ['llama.cpp', 'GGUF', 'ONNX', 'PyTorch'] },
    { name: 'CYBERSECURITY', level: 85, bar: '███████████████░░░', role: 'Tree-sitter SAST, CWE/CVE heuristics, SBOM', tags: ['Tree-Sitter', 'Semgrep Rules', 'MITRE CWE'] },
    { name: 'SOFTWARE DEV / GUI', level: 90, bar: '████████████████░░', role: 'Windows Native GUI (.EXE) & CLI Interface', tags: ['Win32 / Modern UI', 'TypeScript', 'Node'] },
    { name: 'AUTOMATION & TEST', level: 80, bar: '██████████████░░░░', role: 'Automated test synthesizer & coverage suite', tags: ['Pytest', 'Jest', 'Hypothesis Fuzz'] },
    { name: 'ENCLAVE DATABASE', level: 75, bar: '█████████████░░░░░', role: 'Encrypted local SQLite & vector index', tags: ['SQLite3 Encrypted', 'HNSW Vector', 'FAISS'] }
  ];

  return (
    <section id="stack" className="py-10 px-3 sm:px-6 border-b border-slate-200 bg-white font-mono">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>cat stack.txt</span>
      </div>

      <div className="modern-card p-4 sm:p-6 border border-slate-200">
        
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-bold tracking-wider text-slate-900 font-heading">
              TECHNOLOGY STACK // SUBSYSTEM METERS
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">
            FORMAT: RAW_ASCII_BUFFER
          </span>
        </div>

        {/* Skill Meters */}
        <div className="space-y-4 font-mono text-xs sm:text-sm">
          {stackItems.map((item, idx) => (
            <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-blue-300 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                <span className="font-bold text-slate-900 tracking-wider font-heading">
                  {item.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-blue-700 font-bold">
                    {item.level}%
                  </span>
                </div>
              </div>

              {/* Progress Line */}
              <div className="flex items-center space-x-2 text-xs text-blue-600">
                <div className="text-blue-700 font-mono tracking-tighter hidden sm:inline select-none">
                  {item.bar}
                </div>
                {/* Modern responsive progress bar fill */}
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden p-0.5">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <span className="text-slate-600 font-sans">{item.role}</span>
                <div className="flex items-center space-x-1.5 font-mono">
                  {item.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-1.5 py-0.5 bg-white border border-slate-200 text-slate-700 rounded text-[10px] shadow-2xs font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
