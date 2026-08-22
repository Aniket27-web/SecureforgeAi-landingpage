import React from 'react';
import { Target } from 'lucide-react';

export const MissionObjective: React.FC = () => {
  return (
    <section id="mission" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">cat mission.txt</span>
      </div>

      <div className="terminal-panel p-6 sm:p-8 border border-[#00ff66]/30 max-w-4xl mx-auto">
        <div className="flex items-center space-x-2 text-xs font-bold text-[#ffb000] border-b border-[#00ff66]/30 pb-2 mb-4">
          <Target className="w-4 h-4" />
          <span>PROJECT MISSION &amp; CORE PRINCIPLE</span>
        </div>

        <div className="font-mono space-y-4">
          <div className="text-xs text-[#00ff66]/50 select-none">
            ------------------------------------------------------------------------
          </div>

          <div className="text-base sm:text-lg md:text-xl font-bold text-[#33ff77] text-glow leading-relaxed">
            &ldquo;Make secure software development faster, smarter, and more accessible by combining artificial intelligence with automated security analysis, testing, and deployment.&rdquo;
          </div>

          <div className="text-xs text-[#00ff66]/50 select-none">
            ------------------------------------------------------------------------
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-[#ffb000] font-bold">PRIMARY DIRECTIVE:</div>
              <div className="text-sm font-black text-[#00ff66] text-glow mt-1">
                SECURITY + AI + DEVELOPER PRODUCTIVITY
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <span className="px-2.5 py-1 border border-[#00ff66]/40 bg-[#00ff66]/10 text-[#00ff66]">
                [ ZERO-TRUST ]
              </span>
              <span className="px-2.5 py-1 border border-[#ffb000]/40 bg-[#ffb000]/10 text-[#ffb000]">
                [ AIR-GAP READY ]
              </span>
              <span className="px-2.5 py-1 border border-[#00ff66]/40 bg-[#00ff66]/10 text-[#00ff66]">
                [ DETERMINISTIC ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
