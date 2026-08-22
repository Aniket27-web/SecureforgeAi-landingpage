import React, { useState } from 'react';
import { Volume2, VolumeX, Tv, RefreshCw, Terminal as TerminalIcon } from 'lucide-react';
import { sound } from '../utils/sound';

interface TerminalHeaderProps {
  scanlinesEnabled: boolean;
  onToggleScanlines: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onReboot: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const TerminalHeader: React.FC<TerminalHeaderProps> = ({
  scanlinesEnabled,
  onToggleScanlines,
  soundEnabled,
  onToggleSound,
  onReboot,
  onNavigate,
  activeSection,
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
    <header className="sticky top-0 z-40 bg-[#040704]/95 backdrop-blur border-b border-[#00ff66]/30 shadow-[0_4px_20px_rgba(0,0,0,0.8)] font-mono w-full">
      {/* Primary Top Bar */}
      <div className="px-3 sm:px-6 py-2.5 flex items-center justify-between border-b border-[#00ff66]/15">
        {/* Left: Traffic Lights & Title */}
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff3344] inline-block opacity-80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffb000] inline-block opacity-80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] inline-block animate-pulse" />
          </div>
          
          <div className="flex items-center space-x-2">
            <TerminalIcon className="w-4 h-4 text-[#00ff66]" />
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#00ff66] text-glow">
              SECUREFORGEAI TERMINAL
            </span>
            <span className="hidden md:inline-block text-[10px] px-1.5 py-0.5 border border-[#00ff66]/30 text-[#00ff66]/70">
              v1.0-EXE
            </span>
          </div>
        </div>

        {/* Center/Right: Live System Status Badges */}
        <div className="hidden lg:flex items-center space-x-2 text-[11px]">
          <span className="px-2 py-0.5 bg-[#00ff66]/10 border border-[#00ff66]/40 text-[#00ff66] flex items-center space-x-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff66] animate-ping" />
            <span>[ ONLINE ]</span>
          </span>
          <span className="px-2 py-0.5 bg-[#ffb000]/10 border border-[#ffb000]/40 text-[#ffb000] flex items-center space-x-1">
            <span>[ LOCAL LLM ]</span>
          </span>
          <span className="px-2 py-0.5 bg-[#00ff66]/10 border border-[#00ff66]/40 text-[#00ff66] flex items-center space-x-1">
            <span>[ SECURE ]</span>
          </span>
        </div>

        {/* Right: CRT & Audio Controls Deck */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          {/* Sound Toggle */}
          <button
            onClick={() => {
              onToggleSound();
            }}
            title={soundEnabled ? 'Mute Retro Audio FX' : 'Enable Retro Audio FX'}
            className={`px-2 py-1 text-[11px] border transition-all flex items-center space-x-1 cursor-pointer ${
              soundEnabled
                ? 'border-[#00ff66] bg-[#00ff66]/20 text-[#00ff66] text-glow'
                : 'border-[#00ff66]/30 text-[#00ff66]/50 hover:border-[#00ff66]/60'
            }`}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{soundEnabled ? 'FX: ON' : 'FX: OFF'}</span>
          </button>

          {/* Scanlines Toggle */}
          <button
            onClick={onToggleScanlines}
            title="Toggle CRT Scanlines"
            className={`px-2 py-1 text-[11px] border transition-all flex items-center space-x-1 cursor-pointer ${
              scanlinesEnabled
                ? 'border-[#00ff66] bg-[#00ff66]/20 text-[#00ff66]'
                : 'border-[#00ff66]/30 text-[#00ff66]/50 hover:border-[#00ff66]/60'
            }`}
          >
            <Tv className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{scanlinesEnabled ? 'CRT: ON' : 'CRT: OFF'}</span>
          </button>

          {/* Re-boot */}
          <button
            onClick={onReboot}
            title="Replay Terminal Boot Sequence"
            className="p-1.5 text-[#00ff66]/70 hover:text-[#00ff66] border border-[#00ff66]/30 hover:border-[#00ff66] transition-all cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden px-2 py-1 text-xs border border-[#00ff66]/50 text-[#00ff66]"
          >
            {mobileMenuOpen ? '[ CLOSE ]' : '[ MENU ]'}
          </button>
        </div>
      </div>

      {/* Navigation Command Bar (Desktop) */}
      <div className="hidden md:flex items-center px-3 sm:px-6 py-1.5 overflow-x-auto space-x-2 text-[11px] bg-[#020502]/80 border-t border-[#00ff66]/10 scrollbar-none">
        <span className="text-[#00ff66]/40 select-none">EXEC:</span>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-2 py-0.5 transition-all whitespace-nowrap cursor-pointer ${
                item.isHighlight
                  ? 'border border-[#ffb000] bg-[#ffb000]/15 text-[#ffb000] font-bold text-glow-amber hover:bg-[#ffb000] hover:text-[#040704]'
                  : isActive
                  ? 'border border-[#00ff66] bg-[#00ff66]/25 text-[#33ff77] font-bold text-glow'
                  : 'text-[#00ff66]/70 hover:text-[#00ff66] hover:bg-[#00ff66]/10 border border-transparent hover:border-[#00ff66]/30'
              }`}
            >
              &gt; {item.label}
            </button>
          );
        })}
      </div>

      {/* Navigation Command Bar (Mobile Dropdown) */}
      {mobileMenuOpen && (
        <div className="md:hidden p-3 bg-[#060c06] border-b border-[#00ff66]/30 grid grid-cols-2 gap-2 text-xs">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`p-2 text-left border ${
                item.isHighlight
                  ? 'border-[#ffb000] bg-[#ffb000]/10 text-[#ffb000] font-bold'
                  : 'border-[#00ff66]/30 text-[#00ff66] hover:bg-[#00ff66]/10'
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
