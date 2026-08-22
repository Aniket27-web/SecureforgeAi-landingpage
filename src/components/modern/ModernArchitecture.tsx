import React, { useState } from 'react';
import { sound } from '../../utils/sound';

export const ModernArchitecture: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string>('ai');

  const nodesInfo: Record<string, { title: string; type: string; role: string; isolation: string; inputs: string; outputs: string }> = {
    user: {
      title: 'USER / DEVELOPER INTERACTION LAYER',
      type: 'ENTRYPOINT',
      role: 'Captures operator prompt, CLI switches, and source codebase references.',
      isolation: 'Protected memory ring with strictly validated sanitization buffers.',
      inputs: 'Natural language directives, terminal flags, code files.',
      outputs: 'Tokenized command vectors to SecureForgeAI GUI & Engine.'
    },
    gui: {
      title: 'SECUREFORGEAI GUI & CLI DISPATCHER',
      type: 'NATIVE_EXE_CORE',
      role: 'Win32 native desktop orchestrator coordinating AI, security scans, and build steps.',
      isolation: 'Restricted system privilege model, air-gap switchable.',
      inputs: 'User commands & filesystem project root.',
      outputs: 'Orchestration signals to AI, Security, and Test engines.'
    },
    ai: {
      title: 'AI ENGINE // LOCAL & CLOUD HYBRID',
      type: 'INFERENCE_SUBSYSTEM',
      role: 'Generates secure AST code, explains complex logic, and provides defensive refactoring.',
      isolation: 'Local GGUF sandbox / zero-data-retention cloud TLS enclave.',
      inputs: 'Sanitized code context & prompt parameters.',
      outputs: 'Security-validated code patches and automated documentation.'
    },
    security: {
      title: 'SECURITY ENGINE // SAST & TAINT TRACKER',
      type: 'STATIC_ANALYSIS_SUBSYSTEM',
      role: 'Evaluates abstract syntax trees for SQLi, XSS, Buffer Overflows, Secrets, and CVEs.',
      isolation: 'Strict readonly sandbox preventing any dynamic evaluation of untrusted code.',
      inputs: 'Synthesized code AST & dependency tree.',
      outputs: 'Zero-threat validation certificate & vulnerability remediation patches.'
    },
    test: {
      title: 'TEST ENGINE // FUZZ & ASSERTION RUNNER',
      type: 'VERIFICATION_SUBSYSTEM',
      role: 'Generates edge-case unit tests and performs continuous boundary verification.',
      isolation: 'Isolated subprocess container with execution timeouts and memory limits.',
      inputs: 'Candidate code modules & test specifications.',
      outputs: 'Assertion coverage matrix & pass/fail diagnostics.'
    },
    deploy: {
      title: 'DEPLOYMENT ENGINE // RELEASE PACKAGER',
      type: 'DISTRIBUTION_SUBSYSTEM',
      role: 'Compiles, bundles, and cryptographically signs binaries with SHA-256 integrity hashes.',
      isolation: 'Sealed build environment with immutable reproducible builds.',
      inputs: 'Verified code, passing tests, and SBOM manifest.',
      outputs: 'Production Windows .EXE binary & distribution checksums.'
    }
  };

  const handleNodeClick = (nodeKey: string) => {
    sound.playKeyClick();
    setSelectedNode(nodeKey);
  };

  const currentNode = nodesInfo[selectedNode];

  return (
    <section id="architecture" className="py-10 px-3 sm:px-6 border-b border-slate-200 bg-white">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4 font-mono">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>architecture --interactive</span>
      </div>

      <div className="modern-card p-4 sm:p-6 border border-slate-200 font-mono">
        
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3 mb-6">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-slate-900 font-heading tracking-wider">
              SYSTEM ARCHITECTURE // ENCLAVE TOPOLOGY
            </h2>
            <div className="text-[10px] sm:text-xs text-slate-500 mt-0.5 font-sans">
              Click any node in the diagram to inspect subsystem role and memory isolation boundaries.
            </div>
          </div>
          <span className="text-[11px] text-blue-700 bg-blue-50 px-2 py-0.5 border border-blue-200 rounded font-bold">
            [ INTERACTIVE TOPOLOGY ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Diagram (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3 font-mono text-xs">
            
            {/* User Node */}
            <button
              onClick={() => handleNodeClick('user')}
              className={`w-48 py-2 border rounded-lg text-center transition-all cursor-pointer ${
                selectedNode === 'user'
                  ? 'border-blue-600 bg-blue-600 text-white font-bold shadow-xs'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-blue-400'
              }`}
            >
              ┌─────────────────────┐<br />
              │       USER          │<br />
              └─────────────────────┘
            </button>

            <div className="text-slate-400">│ ▼</div>

            {/* GUI Node */}
            <button
              onClick={() => handleNodeClick('gui')}
              className={`w-56 py-2 border rounded-lg text-center transition-all cursor-pointer ${
                selectedNode === 'gui'
                  ? 'border-blue-600 bg-blue-600 text-white font-bold shadow-xs'
                  : 'border-slate-300 bg-white text-slate-700 hover:border-blue-400'
              }`}
            >
              ┌─────────────────────┐<br />
              │  SecureForgeAI GUI  │<br />
              └─────────────────────┘
            </button>

            <div className="text-slate-400">│ ▼</div>

            {/* 3 Pillars: AI, Security, Test */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-lg">
              <button
                onClick={() => handleNodeClick('ai')}
                className={`p-2 border rounded-lg text-center transition-all cursor-pointer text-[11px] ${
                  selectedNode === 'ai'
                    ? 'border-amber-400 bg-amber-100 text-amber-900 font-bold shadow-xs'
                    : 'border-amber-200 bg-amber-50 text-amber-800 hover:border-amber-400'
                }`}
              >
                [ AI ENGINE ]<br />
                <span className="text-[10px] text-amber-700">LOCAL / CLOUD</span>
              </button>

              <button
                onClick={() => handleNodeClick('security')}
                className={`p-2 border rounded-lg text-center transition-all cursor-pointer text-[11px] ${
                  selectedNode === 'security'
                    ? 'border-blue-600 bg-blue-600 text-white font-bold shadow-xs'
                    : 'border-blue-200 bg-blue-50 text-blue-800 hover:border-blue-400'
                }`}
              >
                [ SECURITY SCAN ]<br />
                <span className="text-[10px] text-blue-600">SAST &amp; SECRETS</span>
              </button>

              <button
                onClick={() => handleNodeClick('test')}
                className={`p-2 border rounded-lg text-center transition-all cursor-pointer text-[11px] ${
                  selectedNode === 'test'
                    ? 'border-purple-600 bg-purple-600 text-white font-bold shadow-xs'
                    : 'border-purple-200 bg-purple-50 text-purple-800 hover:border-purple-400'
                }`}
              >
                [ TEST ENGINE ]<br />
                <span className="text-[10px] text-purple-600">FUZZ &amp; ASSERT</span>
              </button>
            </div>

            <div className="text-slate-400">│ ▼</div>

            {/* Deployment Node */}
            <button
              onClick={() => handleNodeClick('deploy')}
              className={`w-60 py-2 border rounded-lg text-center transition-all cursor-pointer ${
                selectedNode === 'deploy'
                  ? 'border-emerald-600 bg-emerald-600 text-white font-bold shadow-xs'
                  : 'border-emerald-200 bg-emerald-50 text-emerald-900 hover:border-emerald-400'
              }`}
            >
              ┌─────────────────────┐<br />
              │  DEPLOYMENT ENGINE  │<br />
              └─────────────────────┘
            </button>
          </div>

          {/* Node Spec Inspector (5 cols) */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                <span className="font-bold text-blue-700 text-[11px]">
                  NODE DETAILS: [{selectedNode.toUpperCase()}]
                </span>
                <span className="text-[10px] text-slate-500 font-bold">
                  {currentNode.type}
                </span>
              </div>

              <div className="text-sm font-bold text-slate-900 mb-2 font-heading">
                {currentNode.title}
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mb-3 font-sans">
                {currentNode.role}
              </p>

              <div className="space-y-2 text-[11px] bg-white p-2.5 border border-slate-200 rounded-lg">
                <div>
                  <span className="text-amber-800 font-bold">ISOLATION MODEL:</span>
                  <div className="text-slate-600 mt-0.5 font-sans">{currentNode.isolation}</div>
                </div>

                <div className="pt-1.5 border-t border-slate-100">
                  <span className="text-blue-700 font-bold">INPUT VECTOR:</span>
                  <div className="text-slate-600 mt-0.5 font-sans">{currentNode.inputs}</div>
                </div>

                <div className="pt-1.5 border-t border-slate-100">
                  <span className="text-emerald-700 font-bold">OUTPUT VECTOR:</span>
                  <div className="text-slate-600 mt-0.5 font-sans">{currentNode.outputs}</div>
                </div>
              </div>
            </div>

            <div className="p-3 border border-slate-200 bg-slate-50 rounded-xl text-[11px] text-slate-600 leading-relaxed font-sans">
              &gt; SecureForgeAI enforces zero-trust inter-module communication. All IPC payloads are serialized and signed before crossing subsystem boundaries.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
