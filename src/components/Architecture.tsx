import React, { useState } from 'react';
import { sound } from '../utils/sound';

export const Architecture: React.FC = () => {
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
    <section id="architecture" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">architecture --interactive</span>
      </div>

      <div className="terminal-panel p-4 sm:p-6 border border-[#00ff66]/30">
        
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#00ff66]/30 pb-3 mb-6">
          <div>
            <h2 className="text-sm sm:text-base font-bold text-[#33ff77] text-glow tracking-wider">
              SYSTEM ARCHITECTURE // ENCLAVE TOPOLOGY
            </h2>
            <div className="text-[10px] sm:text-xs text-[#00ff66]/60 mt-0.5">
              Click any node in the diagram to inspect subsystem role and memory isolation boundaries.
            </div>
          </div>
          <span className="text-[11px] text-[#ffb000] px-2 py-0.5 border border-[#ffb000]/40">
            [ INTERACTIVE TOPOLOGY ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Diagram (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center p-4 bg-[#020502] border border-[#00ff66]/20 space-y-3 font-mono text-xs">
            
            {/* User Node */}
            <button
              onClick={() => handleNodeClick('user')}
              className={`w-48 py-2 border text-center transition-all cursor-pointer ${
                selectedNode === 'user'
                  ? 'border-[#00ff66] bg-[#00ff66]/20 text-[#33ff77] font-bold text-glow shadow-[0_0_12px_#00ff66]'
                  : 'border-[#00ff66]/40 text-[#00ff66] hover:border-[#00ff66]'
              }`}
            >
              ┌─────────────────────┐<br />
              │       USER          │<br />
              └─────────────────────┘
            </button>

            <div className="text-[#00ff66]/60">│ ▼</div>

            {/* GUI Node */}
            <button
              onClick={() => handleNodeClick('gui')}
              className={`w-56 py-2 border text-center transition-all cursor-pointer ${
                selectedNode === 'gui'
                  ? 'border-[#00ff66] bg-[#00ff66]/20 text-[#33ff77] font-bold text-glow shadow-[0_0_12px_#00ff66]'
                  : 'border-[#00ff66]/40 text-[#00ff66] hover:border-[#00ff66]'
              }`}
            >
              ┌─────────────────────┐<br />
              │  SecureForgeAI GUI  │<br />
              └─────────────────────┘
            </button>

            <div className="text-[#00ff66]/60">│ ▼</div>

            {/* 3 Pillars: AI, Security, Test */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full max-w-lg">
              <button
                onClick={() => handleNodeClick('ai')}
                className={`p-2 border text-center transition-all cursor-pointer text-[11px] ${
                  selectedNode === 'ai'
                    ? 'border-[#ffb000] bg-[#ffb000]/20 text-[#ffb000] font-bold text-glow-amber shadow-[0_0_10px_#ffb000]'
                    : 'border-[#ffb000]/40 text-[#ffb000]/80 hover:border-[#ffb000]'
                }`}
              >
                [ AI ENGINE ]<br />
                <span className="text-[10px] text-[#ffb000]/60">LOCAL / CLOUD</span>
              </button>

              <button
                onClick={() => handleNodeClick('security')}
                className={`p-2 border text-center transition-all cursor-pointer text-[11px] ${
                  selectedNode === 'security'
                    ? 'border-[#00ff66] bg-[#00ff66]/20 text-[#33ff77] font-bold text-glow shadow-[0_0_10px_#00ff66]'
                    : 'border-[#00ff66]/40 text-[#00ff66]/80 hover:border-[#00ff66]'
                }`}
              >
                [ SECURITY SCAN ]<br />
                <span className="text-[10px] text-[#00ff66]/60">SAST &amp; SECRETS</span>
              </button>

              <button
                onClick={() => handleNodeClick('test')}
                className={`p-2 border text-center transition-all cursor-pointer text-[11px] ${
                  selectedNode === 'test'
                    ? 'border-[#00ff66] bg-[#00ff66]/20 text-[#33ff77] font-bold text-glow shadow-[0_0_10px_#00ff66]'
                    : 'border-[#00ff66]/40 text-[#00ff66]/80 hover:border-[#00ff66]'
                }`}
              >
                [ TEST ENGINE ]<br />
                <span className="text-[10px] text-[#00ff66]/60">FUZZ &amp; ASSERT</span>
              </button>
            </div>

            <div className="text-[#00ff66]/60">│ ▼</div>

            {/* Deployment Node */}
            <button
              onClick={() => handleNodeClick('deploy')}
              className={`w-60 py-2 border text-center transition-all cursor-pointer ${
                selectedNode === 'deploy'
                  ? 'border-[#00ff66] bg-[#00ff66]/20 text-[#33ff77] font-bold text-glow shadow-[0_0_12px_#00ff66]'
                  : 'border-[#00ff66]/40 text-[#00ff66] hover:border-[#00ff66]'
              }`}
            >
              ┌─────────────────────┐<br />
              │  DEPLOYMENT ENGINE  │<br />
              └─────────────────────┘
            </button>
          </div>

          {/* Node Spec Inspector (5 cols) */}
          <div className="lg:col-span-5 space-y-3 font-mono text-xs">
            <div className="p-4 bg-[#060c06] border border-[#00ff66]/40">
              <div className="flex items-center justify-between border-b border-[#00ff66]/30 pb-2 mb-3">
                <span className="font-bold text-[#ffb000] text-[11px]">
                  NODE DETAILS: [{selectedNode.toUpperCase()}]
                </span>
                <span className="text-[10px] text-[#00ff66]/60 font-bold">
                  {currentNode.type}
                </span>
              </div>

              <div className="text-sm font-bold text-[#33ff77] text-glow mb-2">
                {currentNode.title}
              </div>

              <p className="text-xs text-[#00ff66]/90 leading-relaxed mb-3">
                {currentNode.role}
              </p>

              <div className="space-y-2 text-[11px] bg-[#020502] p-2.5 border border-[#00ff66]/20">
                <div>
                  <span className="text-[#ffb000] font-bold">ISOLATION MODEL:</span>
                  <div className="text-[#00ff66]/80 mt-0.5">{currentNode.isolation}</div>
                </div>

                <div className="pt-1.5 border-t border-[#00ff66]/15">
                  <span className="text-[#00ff66] font-bold">INPUT VECTOR:</span>
                  <div className="text-[#00ff66]/80 mt-0.5">{currentNode.inputs}</div>
                </div>

                <div className="pt-1.5 border-t border-[#00ff66]/15">
                  <span className="text-[#33ff77] font-bold">OUTPUT VECTOR:</span>
                  <div className="text-[#00ff66]/80 mt-0.5">{currentNode.outputs}</div>
                </div>
              </div>
            </div>

            <div className="p-3 border border-[#00ff66]/20 text-[11px] text-[#00ff66]/60 leading-relaxed">
              &gt; SecureForgeAI enforces zero-trust inter-module communication. All IPC payloads are serialized and signed before crossing subsystem boundaries.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
