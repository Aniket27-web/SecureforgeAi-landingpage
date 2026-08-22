import React from 'react';
import { Layers } from 'lucide-react';

export const TechStack: React.FC = () => {
  const stackItems = [
    { name: 'PYTHON / C++ CORE', level: 90, bar: '████████████████░░', role: 'High-performance runtime & AST bindings', tags: ['Python 3.12', 'C++20', 'PyInstaller'] },
    { name: 'AI / LOCAL LLM', level: 85, bar: '███████████████░░░', role: 'llama.cpp, GGUF, Ollama, ONNX Runtime', tags: ['llama.cpp', 'GGUF', 'ONNX', 'PyTorch'] },
    { name: 'CYBERSECURITY', level: 85, bar: '███████████████░░░', role: 'Tree-sitter SAST, CWE/CVE heuristics, SBOM', tags: ['Tree-Sitter', 'Semgrep Rules', 'MITRE CWE'] },
    { name: 'SOFTWARE DEV / GUI', level: 90, bar: '████████████████░░', role: 'Windows Native GUI (.EXE) & CLI Interface', tags: ['Win32 / Modern UI', 'TypeScript', 'Node'] },
    { name: 'AUTOMATION & TEST', level: 80, bar: '██████████████░░░░', role: 'Automated test synthesizer & coverage suite', tags: ['Pytest', 'Jest', 'Hypothesis Fuzz'] },
    { name: 'ENCLAVE DATABASE', level: 75, bar: '█████████████░░░░░', role: 'Encrypted local SQLite & vector index', tags: ['SQLite3 Encrypted', 'HNSW Vector', 'FAISS'] }
  ];

  return (
    <section id="stack" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">cat stack.txt</span>
      </div>

      <div className="terminal-panel p-4 sm:p-6 border border-[#00ff66]/30">
        
        <div className="flex items-center justify-between border-b border-[#00ff66]/30 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-[#00ff66]" />
            <span className="text-sm font-bold tracking-wider text-[#00ff66] text-glow">
              TECHNOLOGY STACK // SUBSYSTEM METERS
            </span>
          </div>
          <span className="text-[11px] text-[#00ff66]/60 font-mono">
            FORMAT: RAW_ASCII_BUFFER
          </span>
        </div>

        {/* ASCII Skill Meters */}
        <div className="space-y-4 font-mono text-xs sm:text-sm">
          {stackItems.map((item, idx) => (
            <div key={idx} className="p-3 bg-[#030603] border border-[#00ff66]/20 hover:border-[#00ff66]/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                <span className="font-bold text-[#33ff77] tracking-wider">
                  {item.name}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-[#00ff66] font-bold text-glow">
                    {item.level}%
                  </span>
                </div>
              </div>

              {/* ASCII Progress Line */}
              <div className="flex items-center space-x-2 text-xs text-[#00ff66]">
                <div className="text-[#00ff66] text-glow font-mono tracking-tighter hidden sm:inline select-none">
                  {item.bar}
                </div>
                {/* Modern responsive progress bar fill */}
                <div className="w-full h-2 bg-[#020502] border border-[#00ff66]/30 p-0.5">
                  <div
                    className="h-full bg-[#00ff66] shadow-[0_0_8px_#00ff66]"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>

              <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                <span className="text-[#00ff66]/70">{item.role}</span>
                <div className="flex items-center space-x-1.5">
                  {item.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-1.5 py-0.5 bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66]/80 text-[10px]">
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
