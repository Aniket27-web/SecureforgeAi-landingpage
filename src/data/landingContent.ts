// Shared Content & Data Definitions for SecureForgeAI
// Guarantees 100% parity across Modern Mode and CRT Mode

export const NAV_ITEMS = [
  { id: 'whoami', label: 'whoami', modernLabel: 'Overview' },
  { id: 'status', label: 'status', modernLabel: 'System Status' },
  { id: 'neofetch', label: 'neofetch', modernLabel: 'Specifications' },
  { id: 'modules', label: 'modules', modernLabel: 'Capabilities' },
  { id: 'pipeline', label: 'pipeline', modernLabel: 'Security Pipeline' },
  { id: 'security', label: 'security_scan', modernLabel: 'Security Engine' },
  { id: 'ai-engine', label: 'ai_engine', modernLabel: 'Dual AI Core' },
  { id: 'stack', label: 'stack', modernLabel: 'Tech Stack' },
  { id: 'architecture', label: 'architecture', modernLabel: 'Architecture' },
  { id: 'mission', label: 'mission', modernLabel: 'Mission' },
  { id: 'preview', label: 'preview', modernLabel: 'App Preview' },
  { id: 'download', label: 'DOWNLOAD.EXE', modernLabel: 'Download .EXE', isHighlight: true },
  { id: 'contact', label: 'contact', modernLabel: 'Contact / Repo' },
];

export const SYSTEM_STATUS_ROWS = [
  { label: 'CORE ENGINE', status: 'ONLINE', state: 'green', desc: 'Kernel v1.0.4 - Secure Memory Ring' },
  { label: 'AI ENGINE', status: 'ONLINE', state: 'green', desc: 'Multi-provider Orchestrator + Fallback' },
  { label: 'SECURITY SCANNER', status: 'ACTIVE', state: 'green', desc: 'SAST / AST / Secret Anomaly Scanner' },
  { label: 'CODE ANALYZER', status: 'ACTIVE', state: 'green', desc: 'Tree-Sitter Syntax & Taint Tracker' },
  { label: 'TEST ENGINE', status: 'READY', state: 'green', desc: 'Automated Test Generation & Runner' },
  { label: 'LOCAL LLM', status: 'AVAILABLE', state: 'amber', desc: 'llama.cpp GGUF Quantized Offline Engine' },
  { label: 'DEPLOYMENT ENGINE', status: 'READY', state: 'green', desc: 'Cryptographic SHA-256 Pipeline' },
  { label: 'THREAT MONITOR', status: 'ACTIVE', state: 'green', desc: 'Real-time Buffer & Supply-Chain Guard' }
];

export const NEOFETCH_SPECS = [
  { key: 'OS', value: 'Windows Desktop (10 / 11)' },
  { key: 'Platform', value: '.EXE APPLICATION (Native x64)' },
  { key: 'AI', value: 'LOCAL + CLOUD LLM (GGUF / Ollama / API)' },
  { key: 'Security', value: 'MULTI-LAYER SCANNING (SAST / AST / CVE)' },
  { key: 'Testing', value: 'AUTOMATED (Unit / Integration / Fuzz)' },
  { key: 'Deployment', value: 'SECURE PIPELINE (Cryptographic Sign)' },
  { key: 'Network', value: 'ONLINE / OFFLINE (Air-gap Capable)' },
  { key: 'Status', value: 'OPERATIONAL' },
  { key: 'Version', value: 'v1.0.0-RELEASE' },
  { key: 'Uptime', value: '99.99% Local Reliability' },
];

export const FEATURE_MODULES = [
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

export const WORKFLOW_STAGES = [
  {
    id: 'user',
    step: '01',
    title: 'OPERATOR INPUT / USER INTENT',
    sub: 'Natural Language Spec & Code Requirements',
    action: 'INITIATING_SESSION',
    input: 'Developer prompt or project scaffold requirement',
    output: 'Parsed intent tokens & security policy parameters',
    telemetry: 'Security Enclave Isolation Level: Strict'
  },
  {
    id: 'codegen',
    step: '02',
    title: 'AI CODE GENERATION',
    sub: 'Context-Aware Synthesis Engine',
    action: 'GENERATING_AST',
    input: 'Intent tokens + Project repository context',
    output: 'Candidate source code AST with defensive guards',
    telemetry: 'Model: Local llama.cpp / Cloud LLM Hybrid'
  },
  {
    id: 'analysis',
    step: '03',
    title: 'CODE ANALYSIS',
    sub: 'Static Semantic & Syntax Verification',
    action: 'TREE_SITTER_PARSING',
    input: 'Synthesized AST representation',
    output: 'Validated control flow graph & data dependencies',
    telemetry: 'Language Parsers: Python / TS / Rust / C++'
  },
  {
    id: 'scan',
    step: '04',
    title: 'SECURITY SCAN',
    sub: 'Multi-layer SAST & Secret Leak Engine',
    action: 'VULN_AUDITING',
    input: 'Control flow graph + AST nodes',
    output: 'Zero high-risk findings, SBOM dependency clear',
    telemetry: 'Rule Count: 1,420+ OWASP / CWE Signatures'
  },
  {
    id: 'testing',
    step: '05',
    title: 'AUTOMATED TESTING',
    sub: 'Synthesized Unit & Property Fuzzing',
    action: 'EXECUTING_TESTS',
    input: 'Function signatures & boundary invariants',
    output: '100% passing test assertions, 92%+ coverage',
    telemetry: 'Test Execution Duration: 240ms'
  },
  {
    id: 'vuln_analysis',
    step: '06',
    title: 'VULNERABILITY ANALYSIS',
    sub: 'Threat Modeling & Taint Propagation Check',
    action: 'FINAL_AUDIT_PASS',
    input: 'Full codebase & test runtime execution logs',
    output: 'Threat Model verified, zero unhandled exceptions',
    telemetry: 'Cryptographic Attestation Token Generated'
  },
  {
    id: 'deploy',
    step: '07',
    title: 'SECURE DEPLOYMENT',
    sub: 'Tamper-Evident Binary Packaging & Sign',
    action: 'PIPELINE_COMPLETE',
    input: 'Verified codebase & signed build artifacts',
    output: 'Production executable with SHA-256 manifest',
    telemetry: 'Artifact: SecureForgeAI.exe Verified'
  }
];

export const SECURITY_SCAN_ITEMS = [
  { name: 'SOURCE CODE ANALYSIS', details: 'Full AST syntax tree tokenized & checked for dangerous sinks', ruleCount: '342 Rules' },
  { name: 'STATIC SECURITY ANALYSIS', details: 'SAST taint tracking for SQLi, XSS, RCE, and memory corruptions', ruleCount: '480 Rules' },
  { name: 'VULNERABILITY DETECTION', details: 'Cross-checked with MITRE CWE & OWASP Top 10 database', ruleCount: '1,200 Rules' },
  { name: 'DEPENDENCY ANALYSIS', details: 'Automated SBOM generation + CVE vulnerability intelligence feed', ruleCount: '65,000+ CVEs' },
  { name: 'SECRET DETECTION', details: 'High-entropy regex scan for private keys, AWS/API tokens, and passwords', ruleCount: '190 Patterns' },
  { name: 'AI SECURITY REVIEW', details: 'Adversarial prompt injection & model logic boundary assessment', ruleCount: '95 Checks' },
  { name: 'TEST VALIDATION', details: 'Dynamic fuzzing & assert boundary checks pass with zero exceptions', ruleCount: '100% Pass' }
];

export const LOCAL_MODELS = [
  { name: 'DeepSeek-Coder-V2-Lite (GGUF)', params: '16B Quantized Q4_K_M', ram: '8.4 GB RAM', context: '32k tokens', speed: '48 tok/s' },
  { name: 'Llama-3.1-8B-Instruct (GGUF)', params: '8B Quantized Q5_K_M', ram: '5.8 GB RAM', context: '128k tokens', speed: '62 tok/s' },
  { name: 'Qwen-2.5-Coder-7B (GGUF)', params: '7B Quantized Q4_K_M', ram: '4.9 GB RAM', context: '32k tokens', speed: '70 tok/s' },
  { name: 'Mistral-Nemo-12B (GGUF)', params: '12B Quantized Q4_K_M', ram: '7.2 GB RAM', context: '128k tokens', speed: '52 tok/s' },
];

export const TECH_STACK_ITEMS = [
  { name: 'PYTHON / C++ CORE', level: 90, bar: '████████████████░░', role: 'High-performance runtime & AST bindings', tags: ['Python 3.12', 'C++20', 'PyInstaller'] },
  { name: 'AI / LOCAL LLM', level: 85, bar: '███████████████░░░', role: 'llama.cpp, GGUF, Ollama, ONNX Runtime', tags: ['llama.cpp', 'GGUF', 'ONNX', 'PyTorch'] },
  { name: 'CYBERSECURITY', level: 85, bar: '███████████████░░░', role: 'Tree-sitter SAST, CWE/CVE heuristics, SBOM', tags: ['Tree-Sitter', 'Semgrep Rules', 'MITRE CWE'] },
  { name: 'SOFTWARE DEV / GUI', level: 90, bar: '████████████████░░', role: 'Windows Native GUI (.EXE) & CLI Interface', tags: ['Win32 / Modern UI', 'TypeScript', 'Node'] },
  { name: 'AUTOMATION & TEST', level: 80, bar: '██████████████░░░░', role: 'Automated test synthesizer & coverage suite', tags: ['Pytest', 'Jest', 'Hypothesis Fuzz'] },
  { name: 'ENCLAVE DATABASE', level: 75, bar: '█████████████░░░░░', role: 'Encrypted local SQLite & vector index', tags: ['SQLite3 Encrypted', 'HNSW Vector', 'FAISS'] }
];

export const ARCHITECTURE_NODES: Record<string, { title: string; type: string; role: string; isolation: string; inputs: string; outputs: string }> = {
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

export const SHA256_CHECKSUM = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';
