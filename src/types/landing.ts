export type SeverityLevel = 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW' | 'INFO';

export interface VulnerabilitySnippet {
  id: string;
  name: string;
  category: string;
  cwe: string;
  cveRef?: string;
  severity: SeverityLevel;
  language: string;
  filename: string;
  line: number;
  vulnerableCode: string;
  fixedCode: string;
  vulnHighlightLines: number[];
  fixedHighlightLines: number[];
  description: string;
  attackVector: string;
  remediationSummary: string;
  taintPath: string[];
  astVerification: {
    passed: boolean;
    rulesChecked: number;
    syntaxTreeDiff: string;
  };
}

export interface TerminalScanScenario {
  id: string;
  title: string;
  framework: string;
  targetFile: string;
  cwe: string;
  severity: SeverityLevel;
  logs: {
    time: string;
    agent: 'ReconAgent' | 'PlannerAgent' | 'ContextAgent' | 'FixAgent' | 'VerifierAgent' | 'SYSTEM';
    tag: string;
    message: string;
    status?: 'pending' | 'success' | 'warning' | 'alert';
    badgeColor?: string;
  }[];
  patchPreview: {
    file: string;
    original: string;
    patched: string;
  };
}

export interface CveIntelligenceItem {
  id: string;
  cveId: string;
  title: string;
  affected: string;
  cvss: number;
  severity: SeverityLevel;
  discoveredAgo: string;
  remediationStatus: 'Synthesizing Patch' | 'AST Verified' | 'PR Deployed' | 'Auto-Mitigated';
  exploitInWild: boolean;
}

export interface BenchmarkComparison {
  metric: string;
  secureForge: number | string;
  legacySast: number | string;
  semgrep: number | string;
  snyk: number | string;
  unit: string;
  isLowerBetter: boolean;
  gain: string;
}

export interface PipelineStageInfo {
  id: string;
  stepNum: string;
  title: string;
  agentName: string;
  agentRole: string;
  badge: string;
  description: string;
  iconName: string;
  color: string;
  telemetry: {
    label: string;
    value: string;
  }[];
  liveLogs: string[];
}
