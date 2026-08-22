import React from 'react';
import { Target } from 'lucide-react';

export const ModernMissionObjective: React.FC = () => {
  return (
    <section id="mission" className="py-10 px-3 sm:px-6 border-b border-slate-200 bg-slate-50/50 font-mono">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>cat mission.txt</span>
      </div>

      <div className="modern-card p-6 sm:p-8 border border-slate-200 max-w-4xl mx-auto bg-white">
        <div className="flex items-center space-x-2 text-xs font-bold text-blue-700 border-b border-slate-100 pb-2 mb-4">
          <Target className="w-4 h-4 text-blue-600" />
          <span>PROJECT MISSION &amp; CORE PRINCIPLE</span>
        </div>

        <div className="font-mono space-y-4">
          <div className="text-xs text-slate-300 select-none">
            ------------------------------------------------------------------------
          </div>

          <div className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-relaxed font-heading">
            &ldquo;Make secure software development faster, smarter, and more accessible by combining artificial intelligence with automated security analysis, testing, and deployment.&rdquo;
          </div>

          <div className="text-xs text-slate-300 select-none">
            ------------------------------------------------------------------------
          </div>

          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-500 font-bold">PRIMARY DIRECTIVE:</div>
              <div className="text-sm font-bold text-blue-700 mt-1 font-heading">
                SECURITY + AI + DEVELOPER PRODUCTIVITY
              </div>
            </div>

            <div className="flex items-center space-x-2 text-xs font-semibold">
              <span className="px-2.5 py-1 border border-blue-200 bg-blue-50 text-blue-800 rounded">
                [ ZERO-TRUST ]
              </span>
              <span className="px-2.5 py-1 border border-amber-200 bg-amber-50 text-amber-900 rounded">
                [ AIR-GAP READY ]
              </span>
              <span className="px-2.5 py-1 border border-emerald-200 bg-emerald-50 text-emerald-800 rounded">
                [ DETERMINISTIC ]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
