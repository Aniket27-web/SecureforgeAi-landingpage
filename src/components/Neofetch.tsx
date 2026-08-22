import React from 'react';
import { Cpu } from 'lucide-react';

export const Neofetch: React.FC = () => {
  const asciiShield = `
           /\\
          /  \\
         / /\\ \\
        / /  \\ \\
       / / /\\ \\ \\
      / / /  \\ \\ \\
     | | | () | | |
     | | |    | | |
     | | |    | | |
      \\ \\ \\  / / /
       \\ \\ \\/ / /
        \\ \\  / /
         \\ \\/ /
          \\  /
           \\/
  [ SECUREFORGE ENCLAVE ]
`;

  const specs = [
    { key: 'OS', value: 'Windows Desktop (10 / 11)' },
    { key: 'Platform', value: '.EXE APPLICATION (Native x64)' },
    { key: 'AI', value: 'LOCAL + CLOUD LLM (GGUF / Ollama / API)' },
    { key: 'Security', value: 'MULTI-LAYER SCANNING (SAST / AST / CVE)' },
    { key: 'Testing', value: 'AUTOMATED (Unit / Integration / Fuzz)' },
    { key: 'Deployment', value: 'SECURE PIPELINE (Cryptographic Sign)' },
    { key: 'Network', value: 'ONLINE / OFFLINE (Air-gap Capable)' },
    { key: 'Status', value: 'OPERATIONAL' },
    { key: 'Version', value: 'v1.0.0-RELEASE' },
    { key: 'Uptime', value: '99.99% Local Reliability' },
  ];

  return (
    <section id="neofetch" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">neofetch</span>
      </div>

      <div className="terminal-panel p-4 sm:p-6 border border-[#00ff66]/30">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Left Column: ASCII Shield Graphic */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-4 bg-[#030603] border border-[#00ff66]/20">
            <pre className="text-[#00ff66] text-glow text-xs sm:text-sm font-mono leading-tight select-none text-center animate-pulse">
              {asciiShield}
            </pre>
            <div className="mt-3 flex items-center space-x-2 text-xs text-[#ffb000]">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE: SECURE KERNEL</span>
            </div>
          </div>

          {/* Right Column: Neofetch Specifications Table */}
          <div className="md:col-span-7 space-y-2 text-xs sm:text-sm font-mono">
            <div className="border-b border-[#00ff66]/40 pb-2">
              <span className="text-base sm:text-lg font-bold text-[#33ff77] text-glow">
                SecureForgeAI@WINDOWS-WORKSTATION
              </span>
              <div className="text-[11px] text-[#00ff66]/50">
                -------------------------------------------------
              </div>
            </div>

            <div className="space-y-1.5 pt-1">
              {specs.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-1 py-0.5 hover:bg-[#00ff66]/5 transition-all">
                  <span className="col-span-4 sm:col-span-3 text-[#ffb000] font-semibold">
                    {item.key}
                  </span>
                  <span className="col-span-1 text-[#00ff66]/40 text-center">:</span>
                  <span className="col-span-7 sm:col-span-8 text-[#00ff66] font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Terminal Cursor and Color Palette Blocks */}
            <div className="pt-4 border-t border-[#00ff66]/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center space-x-1">
                <span className="text-xs text-[#00ff66]/60">PALETTE:</span>
                <span className="px-1.5 py-0.5 bg-[#00ff66] text-[#040704] text-[10px] font-bold">CRT_GRN</span>
                <span className="px-1.5 py-0.5 bg-[#33ff77] text-[#040704] text-[10px] font-bold">BRIGHT</span>
                <span className="px-1.5 py-0.5 bg-[#ffb000] text-[#040704] text-[10px] font-bold">AMBER</span>
                <span className="px-1.5 py-0.5 bg-[#ff3344] text-[#040704] text-[10px] font-bold">ALERT</span>
                <span className="px-1.5 py-0.5 bg-[#003314] text-[#00ff66] text-[10px] font-bold">DARK</span>
              </div>

              <div className="flex items-center space-x-1 text-xs text-[#33ff77]">
                <span>READY</span>
                <span className="w-2 h-3.5 bg-[#00ff66] inline-block cursor-blink" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
