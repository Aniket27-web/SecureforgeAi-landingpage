import React, { useState, useRef, useEffect } from 'react';
import { Terminal, HelpCircle, CornerDownLeft } from 'lucide-react';
import { sound } from '../utils/sound';

interface InteractiveCommandBarProps {
  onExecuteCommand: (command: string) => void;
}

export const InteractiveCommandBar: React.FC<InteractiveCommandBarProps> = ({ onExecuteCommand }) => {
  const [inputVal, setInputVal] = useState('');
  const [commandFeedback, setCommandFeedback] = useState<string | null>(null);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    { cmd: 'whoami', desc: 'Identity & Core Platform Tagline', target: 'whoami' },
    { cmd: 'system_status', desc: 'Real-time telemetry & subsystem status', target: 'status' },
    { cmd: 'neofetch', desc: 'ASCII Cyber Shield & System Specs', target: 'neofetch' },
    { cmd: 'ls modules', desc: 'Core feature modules list', target: 'modules' },
    { cmd: './pipeline', desc: 'Visual security workflow pipeline', target: 'pipeline' },
    { cmd: 'security_scan', desc: 'Interactive multi-layer vulnerability audit', target: 'security' },
    { cmd: 'ai_engine --status', desc: 'Cloud vs Offline Local LLM inspection', target: 'ai-engine' },
    { cmd: 'cat stack.txt', desc: 'Technology stack & skill meters', target: 'stack' },
    { cmd: 'architecture', desc: 'Subsystem architecture diagram', target: 'architecture' },
    { cmd: 'launch --preview', desc: 'Interactive Windows Desktop App GUI preview', target: 'preview' },
    { cmd: 'cat mission.txt', desc: 'Core mission & objectives', target: 'mission' },
    { cmd: 'download SecureForgeAI.exe', desc: 'Download Windows .EXE & SHA-256 integrity', target: 'download' },
    { cmd: './contact', desc: 'Connect with developers & repository', target: 'contact' },
    { cmd: 'help', desc: 'List all valid terminal commands', target: '' },
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
    else if (lower.includes('neofetch')) target = 'neofetch';
    else if (lower.includes('module') || lower.includes('ls')) target = 'modules';
    else if (lower.includes('pipeline')) target = 'pipeline';
    else if (lower.includes('scan') || lower.includes('security')) target = 'security';
    else if (lower.includes('ai') || lower.includes('llm')) target = 'ai-engine';
    else if (lower.includes('stack') || lower.includes('tech')) target = 'stack';
    else if (lower.includes('arch') || lower.includes('architecture')) target = 'architecture';
    else if (lower.includes('preview') || lower.includes('launch') || lower.includes('mockup')) target = 'preview';
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

  // Keyboard shortcut '/' or 'Ctrl+K' to focus input
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
      <div className="sticky bottom-0 z-30 bg-[#060c06]/95 backdrop-blur border-t-2 border-[#00ff66]/40 p-2 sm:p-3 shadow-[0_-10px_30px_rgba(0,0,0,0.9)]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
          
          {/* CLI Input Prompt */}
          <div className="flex-1 flex items-center bg-[#020502] border border-[#00ff66]/40 px-3 py-1.5 focus-within:border-[#00ff66] focus-within:shadow-[0_0_12px_rgba(0,255,102,0.3)] transition-all">
            <span className="text-[#00ff66] font-bold text-xs sm:text-sm select-none mr-2 whitespace-nowrap">
              C:\SecureForgeAI&gt;
            </span>

            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a command (e.g. whoami, download, security_scan, help)..."
              className="w-full bg-transparent text-[#33ff77] placeholder-[#00ff66]/40 text-xs sm:text-sm outline-none font-mono selection:bg-[#00ff66]/30"
            />

            <button
              onClick={() => handleRun()}
              className="ml-2 text-[#00ff66] hover:text-[#33ff77] hover:bg-[#00ff66]/20 p-1 border border-[#00ff66]/40 transition-all cursor-pointer"
              title="Execute Command (Enter)"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Quick Helper Chips */}
          <div className="flex items-center space-x-1.5 overflow-x-auto text-[11px] select-none py-0.5 scrollbar-none">
            <button
              onClick={() => setShowHelpModal(true)}
              className="px-2 py-1 border border-[#ffb000]/60 text-[#ffb000] hover:bg-[#ffb000] hover:text-[#040704] transition-all flex items-center space-x-1 cursor-pointer font-bold"
            >
              <HelpCircle className="w-3 h-3" />
              <span>HELP</span>
            </button>

            <button
              onClick={() => handleRun('download SecureForgeAI.exe')}
              className="px-2 py-1 border border-[#00ff66] bg-[#00ff66]/20 text-[#00ff66] hover:bg-[#00ff66] hover:text-[#040704] transition-all cursor-pointer font-bold whitespace-nowrap text-glow"
            >
              &gt; download.exe
            </button>

            <button
              onClick={() => handleRun('security_scan')}
              className="px-2 py-1 border border-[#00ff66]/40 text-[#00ff66]/80 hover:bg-[#00ff66]/10 transition-all cursor-pointer whitespace-nowrap hidden lg:inline-block"
            >
              &gt; security_scan
            </button>

            <button
              onClick={() => handleRun('launch --preview')}
              className="px-2 py-1 border border-[#00ff66]/40 text-[#00ff66]/80 hover:bg-[#00ff66]/10 transition-all cursor-pointer whitespace-nowrap hidden sm:inline-block"
            >
              &gt; preview
            </button>
          </div>
        </div>

        {/* Feedback / Log Line */}
        {commandFeedback && (
          <div className="max-w-7xl mx-auto mt-1.5 px-3 py-1 bg-[#020502] border-l-2 border-[#00ff66] text-[11px] text-[#00ff66]/90 flex items-center justify-between">
            <span>&gt; {commandFeedback}</span>
            <button
              onClick={() => setCommandFeedback(null)}
              className="text-[#00ff66]/50 hover:text-[#00ff66] ml-2 text-[10px]"
            >
              [DISMISS]
            </button>
          </div>
        )}
      </div>

      {/* Help Modal */}
      {showHelpModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#060c06] border-2 border-[#00ff66] shadow-[0_0_30px_rgba(0,255,102,0.4)] max-w-2xl w-full p-4 sm:p-6 font-mono text-[#00ff66] max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-[#00ff66]/40 pb-3 mb-4">
              <div className="flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-[#00ff66]" />
                <span className="font-bold text-sm tracking-wider text-glow">
                  COMMAND REGISTRY MANUAL // SECUREFORGEAI
                </span>
              </div>
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-2 py-0.5 border border-[#ff3344] text-[#ff3344] hover:bg-[#ff3344] hover:text-black transition-all text-xs font-bold cursor-pointer"
              >
                [ ESC / CLOSE ]
              </button>
            </div>

            <p className="text-xs text-[#00ff66]/70 mb-4">
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
                  className="p-2 border border-[#00ff66]/25 hover:border-[#00ff66] hover:bg-[#00ff66]/10 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-1 cursor-pointer"
                >
                  <span className="font-bold text-[#33ff77] text-glow">
                    &gt; {item.cmd}
                  </span>
                  <span className="text-[#00ff66]/70 text-[11px]">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-3 border-t border-[#00ff66]/30 flex justify-between items-center text-[11px] text-[#00ff66]/50">
              <span>TIP: Press [ / ] anywhere to quickly focus CLI</span>
              <button
                onClick={() => setShowHelpModal(false)}
                className="px-3 py-1 border border-[#00ff66] text-[#00ff66] hover:bg-[#00ff66] hover:text-[#040704] transition-all cursor-pointer font-bold"
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
