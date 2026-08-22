import React, { useState } from 'react';
import { ShieldCheck, RefreshCw } from 'lucide-react';
import { sound } from '../utils/sound';

export const SecurityEngine: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number>(7);
  const [activeStep, setActiveStep] = useState<number>(-1);

  const scanItems = [
    { name: 'SOURCE CODE ANALYSIS', details: 'Full AST syntax tree tokenized & checked for dangerous sinks', ruleCount: '342 Rules' },
    { name: 'STATIC SECURITY ANALYSIS', details: 'SAST taint tracking for SQLi, XSS, RCE, and memory corruptions', ruleCount: '480 Rules' },
    { name: 'VULNERABILITY DETECTION', details: 'Cross-checked with MITRE CWE & OWASP Top 10 database', ruleCount: '1,200 Rules' },
    { name: 'DEPENDENCY ANALYSIS', details: 'Automated SBOM generation + CVE vulnerability intelligence feed', ruleCount: '65,000+ CVEs' },
    { name: 'SECRET DETECTION', details: 'High-entropy regex scan for private keys, AWS/API tokens, and passwords', ruleCount: '190 Patterns' },
    { name: 'AI SECURITY REVIEW', details: 'Adversarial prompt injection & model logic boundary assessment', ruleCount: '95 Checks' },
    { name: 'TEST VALIDATION', details: 'Dynamic fuzzing & assert boundary checks pass with zero exceptions', ruleCount: '100% Pass' }
  ];

  const handleStartScan = () => {
    if (isScanning) return;
    sound.playCommandExecuted();
    setIsScanning(true);
    setCompletedSteps(0);
    setActiveStep(0);

    let current = 0;
    const interval = setInterval(() => {
      if (current < scanItems.length) {
        sound.playScanTick();
        setActiveStep(current);
        setCompletedSteps(current + 1);
        current++;
      } else {
        clearInterval(interval);
        setIsScanning(false);
        setActiveStep(-1);
        sound.playSuccessChime();
      }
    }, 450);
  };

  return (
    <section id="security" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">security_scan --deep --comprehensive</span>
      </div>

      <div className="terminal-panel p-4 sm:p-6 border border-[#00ff66]/30">
        
        {/* Terminal Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#00ff66]/30 pb-3 mb-4">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-[#00ff66]" />
            <div>
              <span className="text-sm sm:text-base font-bold tracking-wider text-[#00ff66] text-glow">
                SECURITY ANALYSIS &amp; VULNERABILITY AUDIT
              </span>
              <div className="text-[10px] text-[#00ff66]/60">
                ENGINE: SECUREFORGE-SAST-v1.0 // MULTI-LAYER RECURSIVE ENGINE
              </div>
            </div>
          </div>

          <button
            onClick={handleStartScan}
            disabled={isScanning}
            className={`term-btn px-4 py-1.5 text-xs font-bold flex items-center space-x-2 cursor-pointer ${
              isScanning ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isScanning ? 'animate-spin' : ''}`} />
            <span>{isScanning ? '[ SCANNING IN PROGRESS... ]' : '[ RUN LIVE SECURITY AUDIT ]'}</span>
          </button>
        </div>

        {/* Scan Body */}
        <div className="space-y-3 font-mono text-xs sm:text-sm">
          <div className="text-[#00ff66]/40 select-none">
            ========================================================================
          </div>

          <div className="space-y-2.5">
            {scanItems.map((item, idx) => {
              const isDone = completedSteps > idx;
              const isCurrent = activeStep === idx;

              return (
                <div
                  key={idx}
                  className={`p-2.5 border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 ${
                    isCurrent
                      ? 'bg-[#0c0a04] border-[#ffb000] text-[#ffb000] shadow-[0_0_10px_rgba(255,176,0,0.2)]'
                      : isDone
                      ? 'bg-[#040a04] border-[#00ff66]/30 text-[#00ff66]'
                      : 'bg-[#020402] border-[#00ff66]/10 text-[#00ff66]/30'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <span className="font-bold text-xs select-none">
                      {isCurrent ? (
                        <span className="text-[#ffb000] animate-pulse">[⏳]</span>
                      ) : isDone ? (
                        <span className="text-[#33ff77] text-glow">[✓]</span>
                      ) : (
                        <span className="text-[#00ff66]/30">[ ]</span>
                      )}
                    </span>
                    <span className="font-bold tracking-wide">
                      {item.name}
                    </span>
                  </div>

                  <div className="flex items-center space-x-3 text-[11px]">
                    <span className="text-[#00ff66]/60 hidden md:inline">
                      {item.details}
                    </span>
                    <span className={`px-2 py-0.5 border ${
                      isCurrent
                        ? 'border-[#ffb000] text-[#ffb000] bg-[#ffb000]/10'
                        : isDone
                        ? 'border-[#00ff66]/40 text-[#33ff77] bg-[#00ff66]/10'
                        : 'border-[#00ff66]/20 text-[#00ff66]/30'
                    }`}>
                      {isCurrent ? 'SCANNING...' : isDone ? `VERIFIED [${item.ruleCount}]` : 'PENDING'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-[#00ff66]/40 select-none pt-2">
            ========================================================================
          </div>

          {/* Results Summary Box */}
          <div className="mt-4 p-4 bg-[#030803] border border-[#00ff66]/40 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
            <div className="p-2 border border-[#00ff66]/20">
              <div className="text-[10px] text-[#00ff66]/60">THREATS DETECTED</div>
              <div className="text-base sm:text-lg font-black text-[#33ff77] text-glow mt-0.5">
                0 THREATS
              </div>
            </div>

            <div className="p-2 border border-[#00ff66]/20">
              <div className="text-[10px] text-[#00ff66]/60">SECURITY STATUS</div>
              <div className="text-base sm:text-lg font-black text-[#33ff77] text-glow mt-0.5">
                SECURE (ENCLAVE A+)
              </div>
            </div>

            <div className="p-2 border border-[#00ff66]/20">
              <div className="text-[10px] text-[#00ff66]/60">AUDIT CONCLUSION</div>
              <div className="text-base sm:text-lg font-black text-[#00ff66] text-glow mt-0.5">
                SCAN COMPLETE
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
