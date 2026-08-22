import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ModernFeatureModules: React.FC = () => {
  const [selectedModule, setSelectedModule] = useState<number | null>(null);

  const modules = [
    {
      id: '01',
      code: 'MOD_AI_CODEGEN',
      name: 'AI CODE GENERATION',
      status: 'ACTIVE',
      type: 'AI_SYNTHESIS_CORE',
      summary: 'Generate, explain, refactor and improve code using AI with security-aware synthesis.',
      details: [
        'Context-aware AST generation with strict boundary verification',
        'Refactoring engine that eliminates legacy syntax vulnerabilities',
        'Inline code explanations and security rationale for every diff',
        'Support for Python, TypeScript, Rust, C/C++, Go, and Java'
      ],
      cmd: 'run ai_codegen --optimize --secure-pass'
    },
    {
      id: '02',
      code: 'MOD_SEC_SCANNER',
      name: 'SECURITY SCANNING',
      status: 'ACTIVE',
      type: 'SAST_ANALYZER',
      summary: 'Detect vulnerabilities, insecure patterns and potential security issues in real-time.',
      details: [
        'Multi-layer SAST & AST taint tracking for injection flaws',
        'Continuous CVE dependency scanning with SBOM verification',
        'Entropy-based secret & cryptographic key leak detection',
        'OWASP Top 10 & CWE classification mapping'
      ],
      cmd: 'run security_scanner --deep-scan --cwe-audit'
    },
    {
      id: '03',
      code: 'MOD_TEST_ENGINE',
      name: 'AUTOMATED TESTING',
      status: 'ACTIVE',
      type: 'TEST_SYNTHESIZER',
      summary: 'Generate and execute tests to validate functionality, edge-cases and reliability.',
      details: [
        'Automated unit & property-based test case generation',
        'Boundary condition & fuzzing attack simulation',
        'Coverage gap analysis with visual branch reports',
        'Zero-mock validation for critical security routines'
      ],
      cmd: 'run test_engine --gen-unit-tests --fuzz'
    },
    {
      id: '04',
      code: 'MOD_LOCAL_LLM',
      name: 'LOCAL LLM SUPPORT',
      status: 'ACTIVE',
      type: 'OFFLINE_RUNTIME',
      summary: 'Run locally hosted language models for total privacy and offline development.',
      details: [
        'Native llama.cpp & GGUF quantized model runtime support',
        'Full air-gapped functionality with zero external network calls',
        'Compatibility with Llama-3, DeepSeek-Coder, Mistral & Qwen',
        'Optimized for AVX2 / AVX-512 & Vulkan/CUDA GPU offload'
      ],
      cmd: 'run local_llm --engine llama.cpp --model local'
    },
    {
      id: '05',
      code: 'MOD_SEC_DEPLOY',
      name: 'SECURE DEPLOYMENT',
      status: 'ACTIVE',
      type: 'RELEASE_PIPELINE',
      summary: 'Prepare and deploy software through a verified, security-aware workflow.',
      details: [
        'Automated release packaging with tamper-evident SHA-256 hashes',
        'Cryptographic binary signature verification',
        'Artifact provenance & build environment attestation',
        'Multi-target release packaging (.exe, installer, portable zip)'
      ],
      cmd: 'run secure_deploy --sign --generate-sbom'
    },
    {
      id: '06',
      code: 'MOD_AI_DOCS',
      name: 'AI-ASSISTED DOCUMENTATION',
      status: 'ACTIVE',
      type: 'DOC_GENERATOR',
      summary: 'Automatically generate useful, accurate technical documentation and threat models.',
      details: [
        'Automated API specification and architecture markdown generator',
        'Threat modeling documentation & risk mitigation logs',
        'Changelog synthesis directly from Git commits and code diffs',
        'Internal developer onboarding summaries and sequence charts'
      ],
      cmd: 'run doc_generator --format markdown --threat-model'
    }
  ];

  const handleInspect = (idx: number) => {
    sound.playCommandExecuted();
    setSelectedModule(selectedModule === idx ? null : idx);
  };

  return (
    <section id="modules" className="py-10 px-3 sm:px-6 border-b border-slate-200 bg-white font-mono">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>ls modules --details</span>
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="text-xs text-slate-600">
          TOTAL MODULES LOADED: [ 06/06 ] // ALL SUBSYSTEMS REGISTERED
        </div>
        <span className="text-[11px] text-blue-700 font-bold">
          CLICK ANY MODULE TO INSPECT SPECIFICATIONS
        </span>
      </div>

      {/* Grid of Module Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modules.map((mod, idx) => {
          const isSelected = selectedModule === idx;
          return (
            <div
              key={idx}
              onClick={() => handleInspect(idx)}
              className={`p-4 border rounded-xl transition-all cursor-pointer relative ${
                isSelected
                  ? 'bg-blue-50/40 border-blue-500 shadow-sm ring-1 ring-blue-500/30'
                  : 'modern-card hover:border-blue-300'
              }`}
            >
              {/* Module Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-3">
                <span className="font-bold text-xs text-blue-700">
                  [{mod.id}] {mod.code}
                </span>
                <span className="px-2 py-0.5 text-[10px] bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-bold">
                  {mod.status}
                </span>
              </div>

              {/* Module Title */}
              <h3 className="text-sm font-bold text-slate-900 mb-1 tracking-wide font-heading">
                {mod.name}
              </h3>

              {/* Module Type Pill */}
              <div className="text-[10px] text-slate-500 font-mono mb-2.5">
                TYPE: {mod.type}
              </div>

              {/* Summary Description */}
              <p className="text-xs text-slate-600 leading-relaxed mb-4 font-sans">
                {mod.summary}
              </p>

              {/* Action / Inspect prompt */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                <span className="font-mono text-blue-700 font-bold">
                  {isSelected ? '[- COLLAPSE SPEC -]' : '[+ INSPECT SPEC]'}
                </span>
                <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-blue-600' : ''}`} />
              </div>

              {/* Expanded Specs Inside Card if Selected */}
              {isSelected && (
                <div className="mt-3 pt-3 border-t border-slate-200 space-y-2 text-xs bg-slate-50 p-2.5 rounded-lg font-sans">
                  <div className="text-[11px] text-blue-800 font-bold font-mono">
                    CAPABILITY SPECIFICATIONS:
                  </div>
                  <ul className="space-y-1 text-[11px] text-slate-700">
                    {mod.details.map((d, dIdx) => (
                      <li key={dIdx} className="flex items-start space-x-1.5">
                        <span className="text-blue-600 font-bold">&gt;</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-1.5 text-[10px] text-slate-500 font-mono">
                    CLI: <span className="text-blue-700 font-bold">{mod.cmd}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
