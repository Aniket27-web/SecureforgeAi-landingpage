import React from 'react';
import { ArrowUp, Shield } from 'lucide-react';
import { sound } from '../utils/sound';

interface TerminalFooterProps {
  onScrollToTop: () => void;
}

export const TerminalFooter: React.FC<TerminalFooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="py-10 px-3 sm:px-6 bg-[#020402] border-t-2 border-[#00ff66]/30 font-mono text-xs">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Command invocation */}
        <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66]">
          <span>C:\SecureForgeAI&gt;</span>
          <span className="text-[#ffb000] text-glow-amber">exit --save-session</span>
        </div>

        {/* Termination Card */}
        <div className="p-4 bg-[#040804] border border-[#00ff66]/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="text-sm font-bold text-[#33ff77] text-glow flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[#00ff66]" />
              <span>SESSION TERMINATED. ENCLAVE ISOLATION PRESERVED.</span>
            </div>
            <div className="text-[11px] text-[#00ff66]/60">
              SECUREFORGEAI © 2026. AI-POWERED SECURE SOFTWARE DEVELOPMENT &amp; DEPLOYMENT PLATFORM.
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-[11px] text-[#00ff66]/70">
              <span>CURSOR:</span>
              <span className="w-2 h-3.5 bg-[#00ff66] inline-block cursor-blink" />
            </div>

            <button
              onClick={() => {
                sound.playKeyClick();
                onScrollToTop();
              }}
              className="term-btn px-3 py-1.5 text-xs font-bold flex items-center space-x-1.5 cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>[ ↑ RETURN TO ROOT ]</span>
            </button>
          </div>
        </div>

        {/* Disclaimer / Responsible Security notice */}
        <div className="pt-2 text-[10px] text-[#00ff66]/40 flex flex-wrap items-center justify-between gap-2 border-t border-[#00ff66]/10">
          <span>SECUREFORGEAI // DESIGNED FOR PROFESSIONAL SECURITY RESEARCH &amp; AIR-GAPPED SYSTEMS</span>
          <span>ALL COMMITS &amp; ARTIFACTS CRYPTOGRAPHICALLY ATTESTED</span>
        </div>

      </div>
    </footer>
  );
};
