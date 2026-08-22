import React, { useState, useEffect } from 'react';
import { ArrowDown, ShieldCheck, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

export const WorkflowPipeline: React.FC = () => {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);
  const [isAutomatedPulse, setIsAutomatedPulse] = useState(true);

  const stages = [
    {
      id: 'user',
      title: 'OPERATOR INPUT / USER INTENT',
      sub: 'Natural Language Spec & Code Requirements',
      action: 'INITIATING_SESSION',
      input: 'Developer prompt or project scaffold requirement',
      output: 'Parsed intent tokens & security policy parameters',
      telemetry: 'Security Enclave Isolation Level: Strict'
    },
    {
      id: 'codegen',
      title: 'AI CODE GENERATION',
      sub: 'Context-Aware Synthesis Engine',
      action: 'GENERATING_AST',
      input: 'Intent tokens + Project repository context',
      output: 'Candidate source code AST with defensive guards',
      telemetry: 'Model: Local llama.cpp / Cloud LLM Hybrid'
    },
    {
      id: 'analysis',
      title: 'CODE ANALYSIS',
      sub: 'Static Semantic & Syntax Verification',
      action: 'TREE_SITTER_PARSING',
      input: 'Synthesized AST representation',
      output: 'Validated control flow graph & data dependencies',
      telemetry: 'Language Parsers: Python / TS / Rust / C++'
    },
    {
      id: 'scan',
      title: 'SECURITY SCAN',
      sub: 'Multi-layer SAST & Secret Leak Engine',
      action: 'VULN_AUDITING',
      input: 'Control flow graph + AST nodes',
      output: 'Zero high-risk findings, SBOM dependency clear',
      telemetry: 'Rule Count: 1,420+ OWASP / CWE Signatures'
    },
    {
      id: 'testing',
      title: 'AUTOMATED TESTING',
      sub: 'Synthesized Unit & Property Fuzzing',
      action: 'EXECUTING_TESTS',
      input: 'Function signatures & boundary invariants',
      output: '100% passing test assertions, 92%+ coverage',
      telemetry: 'Test Execution Duration: 240ms'
    },
    {
      id: 'vuln_analysis',
      title: 'VULNERABILITY ANALYSIS',
      sub: 'Threat Modeling & Taint Propagation Check',
      action: 'FINAL_AUDIT_PASS',
      input: 'Full codebase & test runtime execution logs',
      output: 'Threat Model verified, zero unhandled exceptions',
      telemetry: 'Cryptographic Attestation Token Generated'
    },
    {
      id: 'deploy',
      title: 'SECURE DEPLOYMENT',
      sub: 'Tamper-Evident Binary Packaging & Sign',
      action: 'PIPELINE_COMPLETE',
      input: 'Verified codebase & signed build artifacts',
      output: 'Production executable with SHA-256 manifest',
      telemetry: 'Artifact: SecureForgeAI.exe Verified'
    }
  ];

  // Auto-advance stream pulse every 2.5s
  useEffect(() => {
    if (!isAutomatedPulse) return;
    const interval = setInterval(() => {
      setActiveStageIdx(prev => (prev + 1) % stages.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [isAutomatedPulse, stages.length]);

  const handleSelectStage = (idx: number) => {
    sound.playKeyClick();
    setIsAutomatedPulse(false);
    setActiveStageIdx(idx);
  };

  const selectedStage = stages[activeStageIdx];

  return (
    <section id="pipeline" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command invocation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">./pipeline --watch-stream</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <div className="text-xs text-[#00ff66]/70">
          EXECUTION FLOW: REAL-TIME DATA STREAM WITH AUTOMATED CONTINUOUS VERIFICATION
        </div>
        <button
          onClick={() => {
            sound.playCommandExecuted();
            setIsAutomatedPulse(!isAutomatedPulse);
          }}
          className="text-[11px] px-2.5 py-1 border border-[#00ff66]/40 text-[#00ff66] hover:bg-[#00ff66]/10 transition-all cursor-pointer"
        >
          {isAutomatedPulse ? '[ PAUSE AUTO-STREAM ]' : '[ RESUME AUTO-STREAM ]'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left / Top: Interactive Visual Pipeline Track (7 Cols) */}
        <div className="lg:col-span-7 terminal-panel p-4 sm:p-6 border border-[#00ff66]/30">
          <div className="text-xs font-bold text-[#ffb000] mb-4 flex items-center justify-between border-b border-[#00ff66]/20 pb-2">
            <span>DATA-FLOW PIPELINE ENGINE</span>
            <span className="text-[10px] text-[#00ff66]/60">ACTIVE STAGE: [{String(activeStageIdx + 1).padStart(2, '0')}/07]</span>
          </div>

          <div className="space-y-2">
            {stages.map((stg, idx) => {
              const isActive = activeStageIdx === idx;
              const isPast = activeStageIdx > idx;

              return (
                <div key={stg.id} className="relative">
                  {/* Pipeline Stage Card */}
                  <div
                    onClick={() => handleSelectStage(idx)}
                    className={`p-3 border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-[#081508] border-[#00ff66] shadow-[0_0_15px_rgba(0,255,102,0.3)]'
                        : isPast
                        ? 'bg-[#020502] border-[#00ff66]/30 text-[#00ff66]/80 hover:border-[#00ff66]/60'
                        : 'bg-[#040704] border-[#00ff66]/20 text-[#00ff66]/50 hover:border-[#00ff66]/40'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-7 h-7 flex items-center justify-center font-bold text-xs border ${
                        isActive
                          ? 'border-[#00ff66] bg-[#00ff66] text-[#040704] font-black'
                          : isPast
                          ? 'border-[#00ff66]/40 text-[#00ff66]'
                          : 'border-[#00ff66]/20 text-[#00ff66]/40'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <div className={`text-xs font-bold ${isActive ? 'text-[#33ff77] text-glow' : ''}`}>
                          {stg.title}
                        </div>
                        <div className="text-[10px] text-[#00ff66]/60 font-mono">
                          {stg.sub}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 border ${
                        isActive
                          ? 'border-[#ffb000] text-[#ffb000] bg-[#ffb000]/10 text-glow-amber'
                          : 'border-[#00ff66]/20 text-[#00ff66]/50'
                      }`}>
                        {isActive ? `[ ${stg.action} ]` : isPast ? '[ PASSED ]' : '[ QUEUED ]'}
                      </span>
                    </div>
                  </div>

                  {/* Connecting Arrow with animated data pulse */}
                  {idx < stages.length - 1 && (
                    <div className="py-1 flex items-center justify-center relative overflow-hidden h-4">
                      <div className="w-[1px] h-full bg-[#00ff66]/30" />
                      {isActive && (
                        <div className="absolute w-1.5 h-1.5 rounded-full bg-[#33ff77] shadow-[0_0_8px_#00ff66] data-stream-y" />
                      )}
                      <ArrowDown className="w-2.5 h-2.5 text-[#00ff66]/40 absolute bottom-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Live Telemetry & Inspector Panel for selected stage (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="terminal-panel p-4 sm:p-5 border border-[#00ff66]/40 bg-[#060c06]">
            <div className="flex items-center justify-between border-b border-[#00ff66]/30 pb-2 mb-3">
              <span className="text-xs font-bold text-[#33ff77] text-glow flex items-center space-x-1.5">
                <Terminal className="w-4 h-4 text-[#00ff66]" />
                <span>STAGE TELEMETRY INSPECTOR</span>
              </span>
              <span className="text-[11px] px-2 py-0.5 border border-[#ffb000]/50 text-[#ffb000]">
                STAGE {activeStageIdx + 1} OF 7
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-[#00ff66]/50 text-[11px]">ACTIVE SUBSYSTEM:</span>
                <div className="text-sm font-bold text-[#00ff66] text-glow mt-0.5">
                  {selectedStage.title}
                </div>
              </div>

              <div className="p-2.5 bg-[#020502] border border-[#00ff66]/25 space-y-2 text-[11px]">
                <div>
                  <span className="text-[#ffb000] font-bold">INPUT VECTOR:</span>
                  <p className="text-[#00ff66]/90 mt-0.5">{selectedStage.input}</p>
                </div>

                <div className="pt-2 border-t border-[#00ff66]/15">
                  <span className="text-[#33ff77] font-bold">OUTPUT ARTIFACT:</span>
                  <p className="text-[#00ff66]/90 mt-0.5">{selectedStage.output}</p>
                </div>

                <div className="pt-2 border-t border-[#00ff66]/15">
                  <span className="text-[#00ff66]/60 font-bold">TELEMETRY STATUS:</span>
                  <p className="text-[#00ff66]/80 mt-0.5">{selectedStage.telemetry}</p>
                </div>
              </div>

              <div className="p-2.5 border border-[#00ff66]/20 text-[11px] text-[#00ff66]/70 leading-relaxed">
                <span className="text-[#ffb000] font-semibold">SECURITY GUARANTEE: </span>
                Every stage in SecureForgeAI is executed inside isolated memory rings. Data flows unidirectionally, preventing code injection or taint contamination.
              </div>
            </div>
          </div>

          {/* Quick Stats Box */}
          <div className="terminal-panel-amber p-4 border border-[#ffb000]/30 text-xs space-y-2">
            <div className="font-bold text-[#ffb000] border-b border-[#ffb000]/20 pb-1.5 flex items-center justify-between">
              <span>PIPELINE INTEGRITY METRICS</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
            <div className="flex justify-between text-[#ffb000]/90">
              <span>TAINT CONTAMINATION:</span>
              <span className="font-bold">0.00% (ZERO)</span>
            </div>
            <div className="flex justify-between text-[#ffb000]/90">
              <span>PIPELINE LATENCY:</span>
              <span className="font-bold">&lt; 1.2s TOTAL</span>
            </div>
            <div className="flex justify-between text-[#ffb000]/90">
              <span>SANDBOX STATUS:</span>
              <span className="font-bold text-[#00ff66]">100% CONFINED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
