import React, { useState, useEffect } from 'react';
import { ArrowDown, ShieldCheck, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ModernWorkflowPipeline: React.FC = () => {
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

  // Auto-advance stream pulse every 2.4s
  useEffect(() => {
    if (!isAutomatedPulse) return;
    const interval = setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % stages.length);
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
    <section id="pipeline" className="py-10 px-3 sm:px-6 border-b border-slate-200 bg-slate-50/50 font-mono">
      {/* Command invocation */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>./pipeline --watch-stream</span>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mb-6">
        <div className="text-xs text-slate-600">
          EXECUTION FLOW: REAL-TIME DATA STREAM WITH AUTOMATED CONTINUOUS VERIFICATION
        </div>
        <button
          onClick={() => {
            sound.playCommandExecuted();
            setIsAutomatedPulse(!isAutomatedPulse);
          }}
          className="text-[11px] px-2.5 py-1 border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-lg transition-colors cursor-pointer shadow-2xs font-semibold"
        >
          {isAutomatedPulse ? '[ PAUSE AUTO-STREAM ]' : '[ RESUME AUTO-STREAM ]'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left / Top: Interactive Visual Pipeline Track (7 Cols) */}
        <div className="lg:col-span-7 modern-card p-4 sm:p-6 border border-slate-200">
          <div className="text-xs font-bold text-blue-700 mb-4 flex items-center justify-between border-b border-slate-100 pb-2">
            <span>DATA-FLOW PIPELINE ENGINE</span>
            <span className="text-[10px] text-slate-500">ACTIVE STAGE: [{String(activeStageIdx + 1).padStart(2, '0')}/07]</span>
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
                    className={`p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-50/60 border-blue-500 shadow-xs ring-1 ring-blue-500/30'
                        : isPast
                        ? 'bg-slate-50 border-slate-200 text-slate-800 hover:border-slate-300'
                        : 'bg-white border-slate-200/60 text-slate-400 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-7 h-7 flex items-center justify-center font-bold text-xs rounded border ${
                        isActive
                          ? 'border-blue-600 bg-blue-600 text-white font-bold'
                          : isPast
                          ? 'border-slate-300 bg-slate-100 text-slate-700'
                          : 'border-slate-200 bg-slate-50 text-slate-400'
                      }`}>
                        {String(idx + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <div className={`text-xs font-bold ${isActive ? 'text-blue-900' : 'text-slate-900'}`}>
                          {stg.title}
                        </div>
                        <div className="text-[10px] text-slate-500 font-mono">
                          {stg.sub}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                        isActive
                          ? 'border-blue-300 text-blue-800 bg-blue-100 font-bold'
                          : isPast
                          ? 'border-emerald-200 text-emerald-800 bg-emerald-50'
                          : 'border-slate-200 text-slate-400'
                      }`}>
                        {isActive ? `[ ${stg.action} ]` : isPast ? '[ PASSED ]' : '[ QUEUED ]'}
                      </span>
                    </div>
                  </div>

                  {/* Connecting Arrow */}
                  {idx < stages.length - 1 && (
                    <div className="py-1 flex items-center justify-center relative overflow-hidden h-4">
                      <div className="w-[1px] h-full bg-slate-200" />
                      <ArrowDown className="w-2.5 h-2.5 text-slate-400 absolute bottom-0" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Live Telemetry & Inspector Panel for selected stage (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className="modern-card p-4 sm:p-5 border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
              <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5 font-heading">
                <Terminal className="w-4 h-4 text-blue-600" />
                <span>STAGE TELEMETRY INSPECTOR</span>
              </span>
              <span className="text-[11px] px-2 py-0.5 rounded bg-blue-50 border border-blue-200 text-blue-700 font-bold">
                STAGE {activeStageIdx + 1} OF 7
              </span>
            </div>

            <div className="space-y-3 text-xs font-mono">
              <div>
                <span className="text-slate-500 text-[11px]">ACTIVE SUBSYSTEM:</span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  {selectedStage.title}
                </div>
              </div>

              <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 text-[11px]">
                <div>
                  <span className="text-blue-700 font-bold">INPUT VECTOR:</span>
                  <p className="text-slate-800 mt-0.5 font-sans">{selectedStage.input}</p>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-emerald-700 font-bold">OUTPUT ARTIFACT:</span>
                  <p className="text-slate-800 mt-0.5 font-sans">{selectedStage.output}</p>
                </div>

                <div className="pt-2 border-t border-slate-200">
                  <span className="text-slate-600 font-bold">TELEMETRY STATUS:</span>
                  <p className="text-slate-700 mt-0.5 font-sans">{selectedStage.telemetry}</p>
                </div>
              </div>

              <div className="p-2.5 border border-slate-200 bg-slate-50 rounded-lg text-[11px] text-slate-600 leading-relaxed font-sans">
                <span className="text-blue-700 font-semibold font-mono">SECURITY GUARANTEE: </span>
                Every stage in SecureForgeAI is executed inside isolated memory rings. Data flows unidirectionally, preventing code injection or taint contamination.
              </div>
            </div>
          </div>

          {/* Quick Stats Box */}
          <div className="modern-card p-4 border-amber-200 bg-amber-50/50 text-xs space-y-2">
            <div className="font-bold text-amber-900 border-b border-amber-200 pb-1.5 flex items-center justify-between">
              <span>PIPELINE INTEGRITY METRICS</span>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            </div>
            <div className="flex justify-between text-slate-700">
              <span className="text-slate-500">TAINT CONTAMINATION:</span>
              <span className="font-bold text-emerald-700">0.00% (ZERO)</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span className="text-slate-500">PIPELINE LATENCY:</span>
              <span className="font-bold text-slate-900">&lt; 1.2s TOTAL</span>
            </div>
            <div className="flex justify-between text-slate-700">
              <span className="text-slate-500">SANDBOX STATUS:</span>
              <span className="font-bold text-emerald-700">100% CONFINED</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
