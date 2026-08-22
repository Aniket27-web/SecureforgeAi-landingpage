import React, { useState } from 'react';
import { Code, Shield, Bug, Cpu, Play, CheckCircle2, Send, Lock, FolderTree } from 'lucide-react';
import { sound } from '../utils/sound';

export const ApplicationPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'editor' | 'ai' | 'security' | 'tests' | 'llm' | 'deploy'>('editor');
  const [copilotPrompt, setCopilotPrompt] = useState('');
  const [aiChat, setAiChat] = useState([
    { sender: 'system', text: 'SecureForgeAI Local Copilot initialized (llama.cpp / DeepSeek-Coder-V2). Offline enclave active.' },
    { sender: 'user', text: 'Analyze this auth handler for SQL injection & timing attacks.' },
    { sender: 'ai', text: 'Vulnerability Detected: Raw string concatenation in query sink. Rewrote function using parameterized prepared statements + constant-time password comparison (HMAC).' }
  ]);

  const handleTabChange = (tab: 'editor' | 'ai' | 'security' | 'tests' | 'llm' | 'deploy') => {
    sound.playKeyClick();
    setActiveTab(tab);
  };

  const handleSendAiPrompt = () => {
    if (!copilotPrompt.trim()) return;
    sound.playCommandExecuted();
    const userMsg = copilotPrompt;
    setAiChat(prev => [...prev, { sender: 'user', text: userMsg }]);
    setCopilotPrompt('');

    setTimeout(() => {
      sound.playScanTick();
      setAiChat(prev => [
        ...prev,
        {
          sender: 'ai',
          text: `[OFFLINE LLM RESPONSE]: Verified AST branch for '${userMsg.slice(0, 30)}...'. Added memory boundary guards and verified zero cryptographic leaks.`
        }
      ]);
    }, 600);
  };

  return (
    <section id="preview" className="py-10 px-3 sm:px-6 border-b border-[#00ff66]/20">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">launch --preview --gui-enclave</span>
      </div>

      <div className="terminal-panel p-2 sm:p-4 border border-[#00ff66]/40 bg-[#020502]">
        
        {/* Windows .EXE Application Window Frame */}
        <div className="bg-[#060c06] border-2 border-[#00ff66]/50 shadow-[0_0_30px_rgba(0,255,102,0.15)]">
          
          {/* Windows Title Bar */}
          <div className="bg-[#030703] border-b border-[#00ff66]/30 px-3 py-2 flex items-center justify-between select-none">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 border border-[#00ff66] bg-[#00ff66]/30 flex items-center justify-center text-[9px] font-bold text-[#00ff66]">
                SF
              </div>
              <span className="text-xs font-bold text-[#00ff66] tracking-wider">
                SecureForgeAI v1.0.0 — [Workspace: /src/auth] — [Enclave: AIR-GAPPED]
              </span>
            </div>

            <div className="flex items-center space-x-2 text-xs">
              <span className="hidden sm:inline-block px-1.5 py-0.5 bg-[#00ff66]/10 border border-[#00ff66]/30 text-[#00ff66] text-[10px]">
                LOCAL LLM: ACTIVE (48 tok/s)
              </span>
              <div className="flex space-x-1.5">
                <span className="w-3 h-3 border border-[#00ff66]/40 text-[#00ff66] flex items-center justify-center text-[9px]">_</span>
                <span className="w-3 h-3 border border-[#00ff66]/40 text-[#00ff66] flex items-center justify-center text-[9px]">□</span>
                <span className="w-3 h-3 border border-[#ff3344]/60 text-[#ff3344] flex items-center justify-center text-[9px]">✕</span>
              </div>
            </div>
          </div>

          {/* Application Navigation Toolbar */}
          <div className="bg-[#040804] border-b border-[#00ff66]/20 px-2 py-1.5 flex items-center overflow-x-auto space-x-1 text-xs font-mono scrollbar-none">
            {[
              { id: 'editor', label: '1. CODE EDITOR', icon: Code },
              { id: 'ai', label: '2. AI COPILOT', icon: Cpu },
              { id: 'security', label: '3. SECURITY SCANNER', icon: Shield },
              { id: 'tests', label: '4. TEST ENGINE', icon: Bug },
              { id: 'llm', label: '5. OFFLINE LLM CONFIG', icon: Lock },
              { id: 'deploy', label: '6. DEPLOY PIPELINE', icon: Play },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
                  className={`px-2.5 py-1 text-[11px] font-bold transition-all flex items-center space-x-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#00ff66] text-[#040704] shadow-[0_0_10px_#00ff66]'
                      : 'text-[#00ff66]/70 hover:text-[#00ff66] hover:bg-[#00ff66]/10'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Area */}
          <div className="p-3 sm:p-4 bg-[#030603] min-h-[380px] font-mono text-xs">
            
            {/* Tab 1: Code Editor */}
            {activeTab === 'editor' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-full">
                {/* File Tree */}
                <div className="md:col-span-3 border border-[#00ff66]/20 p-2.5 bg-[#020402] space-y-1 text-[11px]">
                  <div className="font-bold text-[#ffb000] border-b border-[#00ff66]/20 pb-1 mb-2 flex items-center space-x-1">
                    <FolderTree className="w-3.5 h-3.5" />
                    <span>PROJECT EXPLORER</span>
                  </div>
                  <div className="text-[#00ff66] font-bold">&gt; src/</div>
                  <div className="pl-3 text-[#33ff77] bg-[#00ff66]/10 border-l-2 border-[#00ff66] py-0.5">
                    auth_service.py [EDITING]
                  </div>
                  <div className="pl-3 text-[#00ff66]/60">crypto_vault.py</div>
                  <div className="pl-3 text-[#00ff66]/60">jwt_validator.py</div>
                  <div className="pl-3 text-[#00ff66]/60">test_auth.py</div>
                  <div className="pl-3 text-[#00ff66]/60">SecureForge.yaml</div>
                </div>

                {/* Editor Surface */}
                <div className="md:col-span-9 border border-[#00ff66]/30 p-3 bg-[#010301] space-y-2">
                  <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-1 text-[11px] text-[#00ff66]/60">
                    <span>auth_service.py // Python 3.12 Enclave Mode</span>
                    <span className="text-[#33ff77]">0 VULNERABILITIES DETECTED</span>
                  </div>

                  <pre className="text-[#00ff66] text-[11px] sm:text-xs leading-relaxed overflow-x-auto">
{`1  import hmac, hashlib
2  from secureforge.enclave import sanitize_input, ConstantTimeCompare
3  
4  def authenticate_user(user_token: str, secret_hash: str) -> bool:
5      # [AI COPILOT]: Sanitizing input with strict buffer boundary
6      sanitized = sanitize_input(user_token, max_length=128)
7      
8      # [SECURITY ENGINE]: Constant-time verification against timing attacks
9      computed = hashlib.sha256(sanitized.encode()).hexdigest()
10     return ConstantTimeCompare(computed, secret_hash)`}
                  </pre>

                  {/* AI Inline Suggestion Box */}
                  <div className="mt-3 p-2.5 bg-[#081508] border-l-2 border-[#33ff77] text-[11px] space-y-1">
                    <div className="text-[#33ff77] font-bold flex items-center space-x-1.5">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>SECUREFORGE AI COPILOT ADVISORY:</span>
                    </div>
                    <p className="text-[#00ff66]/90">
                      Automated analysis passed. The function enforces strict length validation and constant-time string comparison, mitigating CWE-208 and CWE-89.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 2: AI Copilot Chat */}
            {activeTab === 'ai' && (
              <div className="flex flex-col h-[340px] justify-between border border-[#00ff66]/30 p-3 bg-[#010301]">
                <div className="overflow-y-auto space-y-3 pr-2">
                  {aiChat.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 border text-xs ${
                        msg.sender === 'user'
                          ? 'border-[#ffb000]/40 bg-[#0c0903] text-[#ffb000] ml-8'
                          : msg.sender === 'system'
                          ? 'border-[#00ff66]/20 bg-[#020502] text-[#00ff66]/60 text-[11px]'
                          : 'border-[#00ff66]/40 bg-[#040c04] text-[#33ff77] mr-8'
                      }`}
                    >
                      <div className="font-bold text-[10px] uppercase mb-1">
                        {msg.sender === 'user' ? 'OPERATOR' : msg.sender === 'ai' ? 'SECUREFORGE LOCAL LLM' : 'SYSTEM LOG'}
                      </div>
                      <p>{msg.text}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#00ff66]/20 flex items-center space-x-2">
                  <input
                    type="text"
                    value={copilotPrompt}
                    onChange={(e) => setCopilotPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendAiPrompt()}
                    placeholder="Ask AI Copilot to refactor code, find vulnerabilities, or generate tests..."
                    className="flex-1 bg-[#020502] border border-[#00ff66]/40 px-3 py-1.5 text-xs text-[#00ff66] outline-none font-mono"
                  />
                  <button
                    onClick={handleSendAiPrompt}
                    className="term-btn px-3 py-1.5 text-xs font-bold flex items-center space-x-1 cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>SEND</span>
                  </button>
                </div>
              </div>
            )}

            {/* Tab 3: Security Scanner */}
            {activeTab === 'security' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-2">
                  <span className="font-bold text-[#33ff77]">LIVE AST SCANNER FINDINGS</span>
                  <span className="text-[11px] px-2 py-0.5 border border-[#00ff66]/40 text-[#00ff66]">
                    STATUS: 0 ISSUES FOUND
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-[#040a04] border border-[#00ff66]/30 space-y-1">
                    <div className="font-bold text-[#00ff66] flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33ff77]" />
                      <span>SQL &amp; COMMAND INJECTION (CWE-89/78)</span>
                    </div>
                    <p className="text-[11px] text-[#00ff66]/70">Zero unescaped string interpolations across 14 modules.</p>
                  </div>

                  <div className="p-3 bg-[#040a04] border border-[#00ff66]/30 space-y-1">
                    <div className="font-bold text-[#00ff66] flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33ff77]" />
                      <span>SECRET &amp; PRIVATE KEY LEAKS (CWE-798)</span>
                    </div>
                    <p className="text-[11px] text-[#00ff66]/70">Entropy scanner verified: no hardcoded API tokens found.</p>
                  </div>

                  <div className="p-3 bg-[#040a04] border border-[#00ff66]/30 space-y-1">
                    <div className="font-bold text-[#00ff66] flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33ff77]" />
                      <span>MEMORY BUFFER INTEGRITY (CWE-119/120)</span>
                    </div>
                    <p className="text-[11px] text-[#00ff66]/70">Bounds checking verified on all slice and pointer operations.</p>
                  </div>

                  <div className="p-3 bg-[#040a04] border border-[#00ff66]/30 space-y-1">
                    <div className="font-bold text-[#00ff66] flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#33ff77]" />
                      <span>SUPPLY CHAIN &amp; CVE SBOM</span>
                    </div>
                    <p className="text-[11px] text-[#00ff66]/70">All 38 third-party libraries matched against National Vulnerability DB.</p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 4: Automated Testing */}
            {activeTab === 'tests' && (
              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between border-b border-[#00ff66]/20 pb-2">
                  <span className="font-bold text-[#33ff77]">AUTOMATED TEST RUNNER</span>
                  <span className="text-[11px] text-[#00ff66]/70">24/24 PASSING (100% SUCCESS)</span>
                </div>

                <div className="space-y-1.5 bg-[#010301] p-3 border border-[#00ff66]/30 text-[11px]">
                  <div className="text-[#33ff77]">✓ test_auth_valid_token_constant_time (0.012s)</div>
                  <div className="text-[#33ff77]">✓ test_auth_buffer_overflow_fuzz_attack (0.045s)</div>
                  <div className="text-[#33ff77]">✓ test_sql_injection_taint_rejection (0.018s)</div>
                  <div className="text-[#33ff77]">✓ test_timing_attack_variance_below_threshold (0.032s)</div>
                  <div className="text-[#33ff77]">✓ test_memory_enclave_zeroization (0.009s)</div>
                  <div className="pt-2 text-[#ffb000] border-t border-[#00ff66]/20">
                    ALL ASSERTIONS VERIFIED. CODE COVERAGE: 94.8%
                  </div>
                </div>
              </div>
            )}

            {/* Tab 5: Offline LLM Config */}
            {activeTab === 'llm' && (
              <div className="space-y-3 text-xs">
                <div className="font-bold text-[#ffb000] border-b border-[#ffb000]/20 pb-1">
                  OFFLINE LOCAL LLM ENGINE PREFERENCES
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3 border border-[#ffb000]/40 bg-[#0c0903] space-y-2">
                    <span className="font-bold text-[#ffb000]">ACTIVE MODEL: DeepSeek-Coder-V2-Lite (GGUF)</span>
                    <div className="text-[11px] text-[#ffb000]/80">
                      Quantization: Q4_K_M (8.4GB) | Context: 32,768 tokens | Threads: 12
                    </div>
                    <div className="text-[10px] text-[#00ff66]">
                      STATUS: LOADED IN GPU VRAM (RTX 4070 / Vulkan)
                    </div>
                  </div>

                  <div className="p-3 border border-[#00ff66]/30 bg-[#040804] space-y-2">
                    <span className="font-bold text-[#00ff66]">AIR-GAP PRIVACY POLICY</span>
                    <p className="text-[11px] text-[#00ff66]/80">
                      In offline mode, socket listening and outbound HTTP requests from the AI engine are blocked at the kernel driver layer.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab 6: Deploy Pipeline */}
            {activeTab === 'deploy' && (
              <div className="space-y-3 text-xs">
                <div className="font-bold text-[#33ff77] border-b border-[#00ff66]/20 pb-1">
                  SECURE RELEASE DISTRIBUTION PIPELINE
                </div>

                <div className="p-3 bg-[#010301] border border-[#00ff66]/30 space-y-2 text-[11px]">
                  <div className="text-[#00ff66]">[1] Clean compilation: PyInstaller / C++ Native Build ... OK</div>
                  <div className="text-[#00ff66]">[2] SBOM manifest generated at release/sbom.json ... OK</div>
                  <div className="text-[#00ff66]">[3] SHA-256 binary hash computed ... OK</div>
                  <div className="text-[#33ff77] font-bold">[4] Output Target: dist/SecureForgeAI.exe (READY)</div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom Terminal Output Log */}
          <div className="bg-[#020402] border-t border-[#00ff66]/30 px-3 py-2 flex items-center justify-between text-[10px] text-[#00ff66]/70 font-mono">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-pulse" />
              <span>TERMINAL: Enclave Sandboxed // Memory Ring 3 // Log Level: VERBOSE</span>
            </div>
            <span className="text-[#ffb000]">READY FOR OPERATOR INSTRUCTIONS</span>
          </div>

        </div>

      </div>
    </section>
  );
};
