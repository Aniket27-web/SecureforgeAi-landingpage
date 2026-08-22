import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { sound } from '../../utils/sound';

interface ModernFooterProps {
  onScrollToTop: () => void;
}

export const ModernFooter: React.FC<ModernFooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="py-10 px-3 sm:px-6 bg-slate-50 border-t-2 border-slate-200 font-mono text-xs text-slate-700">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Command invocation */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900">
          <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
          <span className="text-amber-800">exit --save-session</span>
        </div>

        {/* Termination Card */}
        <div className="p-4 bg-white border border-slate-200 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1">
            <div className="text-sm font-bold text-slate-900 flex items-center space-x-2 font-heading">
              <Shield className="w-4 h-4 text-blue-600" />
              <span>SESSION TERMINATED. ENCLAVE ISOLATION PRESERVED.</span>
            </div>
            <div className="text-[11px] text-slate-500 font-mono">
              SECUREFORGEAI © 2026. AI-POWERED SECURE SOFTWARE DEVELOPMENT &amp; DEPLOYMENT PLATFORM.
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-[11px] text-slate-500 font-mono">
              <span>CURSOR:</span>
              <span className="w-2 h-3.5 bg-blue-600 inline-block cursor-blink" />
            </div>

            <button
              onClick={() => {
                sound.playKeyClick();
                onScrollToTop();
              }}
              className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center space-x-1.5 cursor-pointer shadow-xs transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>[ ↑ RETURN TO ROOT ]</span>
            </button>
          </div>
        </div>

        {/* Disclaimer / Responsible Security notice */}
        <div className="pt-2 text-[10px] text-slate-500 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200 font-mono">
          <span>SECUREFORGEAI // DESIGNED FOR PROFESSIONAL SECURITY RESEARCH &amp; AIR-GAPPED SYSTEMS</span>
          <span>ALL COMMITS &amp; ARTIFACTS CRYPTOGRAPHICALLY ATTESTED</span>
        </div>

      </div>
    </footer>
  );
};
