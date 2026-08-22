import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, CornerDownLeft } from 'lucide-react';
import { sound } from '../../utils/sound';

interface ModernCommandBarProps {
  onExecuteCommand: (command: string) => void;
}

export const ModernCommandBar: React.FC<ModernCommandBarProps> = ({ onExecuteCommand }) => {
  const [inputVal, setInputVal] = useState('');
  const [commandFeedback, setCommandFeedback] = useState<string | null>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    { cmd: 'whoami', desc: 'Identity & Core Platform Tagline', target: 'whoami' },
    { cmd: 'system_status', desc: 'Real-time telemetry & subsystem status', target: 'status' },
    { cmd: 'neofetch', desc: 'System specifications & architecture', target: 'neofetch' },
    { cmd: 'ls modules', desc: 'Enterprise feature modules list', target: 'modules' },
    { cmd: './pipeline', desc: 'Data-flow security pipeline sequencer', target: 'pipeline' },
    { cmd: 'security_scan', desc: 'Interactive multi-layer security audit', target: 'security' },
    { cmd: 'ai_engine', desc: 'Dual Cloud vs Offline Local LLM inspection', target: 'ai-engine' },
    { cmd: 'stack', desc: 'Technology stack & skill meters', target: 'stack' },
    { cmd: 'architecture', desc: 'Subsystem architecture topology', target: 'architecture' },
    { cmd: 'preview', desc: 'Windows Desktop App GUI preview', target: 'preview' },
    { cmd: 'mission', desc: 'Core mission & objectives', target: 'mission' },
    { cmd: 'download', desc: 'Download Windows .EXE & SHA-256 integrity', target: 'download' },
    { cmd: 'contact', desc: 'Connect with developers & repository', target: 'contact' },
    { cmd: 'help', desc: 'Display command registry manual', target: '' },
    { cmd: 'clear', desc: 'Clear command line feedback', target: '' }
  ];

  const handleRun = (cmdToRun?: string) => {
    const rawCmd = (cmdToRun || inputVal).trim();
    if (!rawCmd) return;

    sound.playCommandExecuted();
    setInputVal('');

    const lower = rawCmd.toLowerCase();

    if (lower === 'help' || lower === '?') {
      setShowHelpModal(true);
      setCommandFeedback('Displaying command registry manual...');
      return;
    }

    if (lower === 'clear' || lower === 'cls') {
      setCommandFeedback(null);
      return;
    }

    // Match command to target
    let target = '';
    if (lower.includes('whoami')) target = 'whoami';
    else if (lower.includes('status') || lower.includes('system_status')) target = 'status';
    else if (lower.includes('neofetch') || lower.includes('specs')) target = 'neofetch';
    else if (lower.includes('module') || lower.includes('ls')) target = 'modules';
    else if (lower.includes('pipeline')) target = 'pipeline';
    else if (lower.includes('scan') || lower.includes('security')) target = 'security';
    else if (lower.includes('ai') || lower.includes('llm')) target = 'ai-engine';
    else if (lower.includes('stack') || lower.includes('tech')) target = 'stack';
    else if (lower.includes('arch') || lower.includes('architecture')) target = 'architecture';
    else if (lower.includes('preview') || lower.includes('launch') || lower.includes('gui')) target = 'preview';
    else if (lower.includes('mission')) target = 'mission';
    else if (lower.includes('download') || lower.includes('exe') || lower.includes('install')) target = 'download';
    else if (lower.includes('contact') || lower.includes('github') || lower.includes('exit')) target = 'contact';

    if (target) {
      setCommandFeedback(`Executing '${rawCmd}' -> Routing to module [${target}]...`);
      onExecuteCommand(target);
    } else {
      sound.playWarningBeep();
      setCommandFeedback(`ERR: Command '${rawCmd}' not recognized. Type 'help' for manual.`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    sound.playKeyClick();
    if (e.key === 'Enter') {
      handleRun();
    }
  };

  // Keyboard shortcut '/' or 'Ctrl+K'
  useEffect(() => {
    const handleGlobalKey = (e: KeyboardEvent) => {
      if ((e.key === '/' && document.activeElement !== inputRef.current) || (e.ctrlKey && e.key === 'k')) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleGlobalKey);
    return () => window.removeEventListener('keydown', handleGlobalKey);
  }, []);

  return (
    <>
      <div className="sticky bottom-0 z-30 bg-white/95 backdrop-blur border-t-2 border-slate-200 p-2 sm:p-3 shadow-md font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
          
          {/* CLI Input Prompt */}
          <div className="flex-1 flex items-center bg-slate-50 border border-slate-300 rounded px-3 py-1.5 focus-within:border-blue-600 focus-within:bg-white transition-colors">
            <span className="text-blue-700 font-bold text-xs sm:text-sm select-none mr-2 whitespace-nowrap">
              C:\SecureForgeAI&gt;
            </span>

            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (e.g. whoami, download, security_scan, help)..."
              className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-xs sm:text-sm outline-none font-mono selection:bg-blue-100"
            />

            <button
              onClick={() => handleRun()}
              className="ml-2 text-slate-600 hover:text-blue-700 hover:bg-slate-200/60 p-1 border border-slate-200 rounded transition-colors cursor-pointer"
              title="Execute Command (Enter)"
            >
              <CornerDownLeft className="w-3.5 h-3.5 text-blue-600" />
            </button>
          </div>

          {/* Quick Helper Chips */}
          <div className="flex items-center space-x-1.5 overflow-x-auto text-[11px] select-none py-0.5 scrollbar-none">
            <button
              onClick={() => setShowHelpModal(true)}
              className="px-2 py-1 border border-amber-300 bg-amber-50 text-amber-900 rounded hover:bg-amber-100 transition-colors flex items-center space-x-1 cursor-pointer font-bold"
            >
              <HelpCircle className="w-3 h-3 text-amber-600" />
              <span>HELP</span>
            </button>

            <button
              onClick={() => handleRun('download SecureForgeAI.exe')}
              className="px-2 py-1 border border-blue-500 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer font-bold whitespace-nowrap shadow-xs"
            >
              &gt; download.exe
            </button>

            <button
              onClick={() => handleRun('security_scan')}
              className="px-2 py-1 border border-slate-200 bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors cursor-pointer whitespace-nowrap hidden lg:inline-block font-semibold"
            >
              &gt; security_scan
            </button>

            <button
              onClick={() => handleRun('preview')}
              className="px-2 py-1 border border-slate-200 bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors cursor-pointer whitespace-nowrap hidden sm:inline-block font-semibold"
            >
              &gt; preview
            </button>
          </div>
        </div>

        {/* Feedback / Log Line */}
        {commandFeedback && (
          <div className="max-w-7xl mx-auto mt-1.5 px-3 py-1 bg-blue-50 border-l-2 border-blue-600 text-[11px] text-blue-900 flex items-center justify-between rounded-r font-mono">
            <span>&gt; {commandFeedback}</span>
            <button
              onClick={() => setCommandFeedback(null)}
              className="text-blue-600 hover:text-blue-800 ml-2 text-[10px] font-bold"
            >
              [DISMISS]
            </button>
          </div>
        )}
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl shadow-xl max-w-2xl w-full p-4 sm:p-6 font-mono text-slate-900 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
              <span className="font-bold text-sm tracking-wider text-slate-900 font-heading">
                COMMAND REGISTRY MANUAL // SECUREFORGEAI
              </span>
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-2 py-0.5 border border-rose-300 text-rose-700 hover:bg-rose-50 rounded transition-colors text-xs font-bold cursor-pointer"
              >
                [ ESC / CLOSE ]
              </button>
            </div>

            <p className="text-xs text-slate-600 mb-4 font-sans">
              Type or click any of the available terminal commands below to jump to that module or trigger the corresponding security operation:
            </p>

            <div className="space-y-2 text-xs">
              {availableCommands.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setShowHelpModal(false);
                    handleRun(item.cmd);
                  }}
                  className="p-2 border border-slate-200 hover:border-blue-500 hover:bg-blue-50/50 rounded-lg transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-1 cursor-pointer"
                >
                  <span className="font-bold text-blue-700">
                    &gt; {item.cmd}
                  </span>
                  <span className="text-slate-600 text-[11px] font-sans">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-3 border-t border-slate-200 flex justify-between items-center text-[11px] text-slate-500">
              <span>TIP: Press [ / ] anywhere to quickly focus CLI</span>
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors cursor-pointer font-bold"
              >
                [ RETURN TO WORKSTATION ]
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
