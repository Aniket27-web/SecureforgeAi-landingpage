export interface CommandItem {
  command: string;
  description: string;
  targetId: string;
  category?: 'system' | 'modules' | 'security' | 'deploy' | 'help';
}

export interface ModuleItem {
  id: string;
  code: string;
  name: string;
  status: 'ACTIVE' | 'READY' | 'LOADED' | 'STANDBY';
  type: string;
  description: string;
  features: string[];
  specs: string;
  iconName: string;
}

export interface PipelineStage {
  id: string;
  number: string;
  name: string;
  action: string;
  description: string;
  status: 'IDLE' | 'PROCESSING' | 'PASSED' | 'ACTIVE';
  details: string[];
}

export interface SecurityCheckItem {
  id: string;
  name: string;
  category: string;
  status: 'PASSED' | 'PENDING' | 'SCANNING' | 'WARNING';
  details: string;
}

export interface TechStackItem {
  name: string;
  level: number;
  bar: string;
  category: string;
  description: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  role: string;
  category: 'core' | 'engine' | 'storage' | 'output';
  details: string;
}
