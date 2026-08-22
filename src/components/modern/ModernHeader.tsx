import React, { useState } from 'react';
import { Volume2, VolumeX, Tv, Terminal as TerminalIcon } from 'lucide-react';
import { sound } from '../../utils/sound';

interface ModernHeaderProps {
  soundEnabled: boolean;
  onToggleSound: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  onTriggerGlitch?: () => void;
}

export const ModernHeader: React.FC<ModernHeaderProps> = ({
  soundEnabled,
  onToggleSound,
  onNavigate,
  activeSection,
  onTriggerGlitch,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'whoami', label: 'whoami' },
    { id: 'status', label: 'status' },
    { id: 'neofetch', label: 'neofetch' },
    { id: 'modules', label: 'modules' },
    { id: 'pipeline', label: 'pipeline' },
    { id: 'security', label: 'security_scan' },
    { id: 'ai-engine', label: 'ai_engine' },
    { id: 'stack', label: 'stack' },
    { id: 'architecture', label: 'architecture' },
    { id: 'preview', label: 'preview' },
    { id: 'download', label: 'DOWNLOAD.EXE', isHighlight: true },
    { id: 'contact', label: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    sound.playKeyClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-slate-200 shadow-xs font-mono">
      {/* Primary Top Bar */}
      <div className="px-3 sm:px-6 py-2.5 flex items-center justify-between border-b border-slate-100">
        {/* Left: Traffic Lights & Title */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3344] inline-block opacity-90" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffb000] inline-block opacity-90" />
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 inline-block animate-pulse" />
          </div>
          
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-blue-600" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-900 font-heading">
              SECURE<span className="text-blue-600">FORGEAI</span> MODERN
            </span>
            <span className="hidden md:inline-block text-[10px] px-1.5 py-0.5 border border-blue-200 bg-blue-50 text-blue-700 rounded font-semibold">
              v1.0-EXE
            </span>
          </div>
        </div>

        {/* Center/Right: Live System Status Badges */}
        <div className="hidden lg:flex items-center space-x-2 text-[11px]">
          <span className="px-2 py-0.5 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded font-semibold flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>[ ONLINE ]</span>
          </span>
          <span className="px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-900 rounded font-semibold flex items-center space-x-1">
            <span>[ LOCAL LLM ]</span>
          </span>
          <span className="px-2 py-0.5 bg-blue-50 border border-blue-200 text-blue-800 rounded font-semibold flex items-center space-x-1">
            <span>[ SECURE ]</span>
          </span>
        </div>

        {/* Right: Controls Deck */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            title={soundEnabled ? 'Mute Audio FX' : 'Enable Audio FX'}
            className={`px-2 py-1 text-[11px] border rounded-lg transition-colors flex items-center space-x-1 cursor-pointer ${
              soundEnabled
                ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                : 'border-slate-200 text-slate-500 hover:border-slate-300 bg-white'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{soundEnabled ? 'FX: ON' : 'FX: OFF'}</span>
          </button>

          {/* Glitch Trigger Button */}
          {onTriggerGlitch && (
            <button
              onClick={onTriggerGlitch}
              title="Trigger Quantum CRT Anomaly"
              className="px-2 py-1 text-[11px] border border-slate-200 text-slate-700 hover:border-blue-400 hover:bg-blue-50 bg-white rounded-lg transition-colors flex items-center space-x-1 cursor-pointer"
            >
              <Tv className="w-3.5 h-3.5 text-blue-600" />
              <span className="hidden sm:inline">GLITCH</span>
            </button>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-2 py-1 text-xs border border-slate-200 rounded-lg text-slate-800 bg-white"
          >
            {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </div>

      {/* Navigation Command Bar (Desktop) */}
      <div className="hidden md:flex items-center px-3 sm:px-6 py-1.5 overflow-x-auto space-x-2 text-[11px] bg-slate-50 border-t border-slate-100 scrollbar-none">
        <span className="text-slate-400 font-semibold select-none">EXEC:</span>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-2.5 py-0.5 rounded transition-colors whitespace-nowrap cursor-pointer ${
                item.isHighlight
                  ? 'border border-amber-300 bg-amber-50 text-amber-900 font-bold hover:bg-amber-100'
                  : isActive
                  ? 'border border-blue-500 bg-blue-600 text-white font-bold shadow-xs'
                  : 'text-slate-700 hover:text-blue-700 hover:bg-white border border-transparent hover:border-slate-200'
              }`}
            >
              &gt; {item.label}
            </button>
          );
        })}
      </div>

      {/* Navigation Command Bar (Mobile Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden p-3 bg-white border-b border-slate-200 grid grid-cols-2 gap-2 text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-2 text-left rounded-lg border ${
                item.isHighlight
                  ? 'border-amber-300 bg-amber-50 text-amber-900 font-bold'
                  : activeSection === item.id
                  ? 'border-blue-500 bg-blue-50 text-blue-700 font-bold'
                  : 'border-slate-200 text-slate-700 hover:bg-slate-50'
              }`}
            >
              &gt; {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
