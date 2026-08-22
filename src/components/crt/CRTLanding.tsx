import React, { useState } from 'react';
import { TerminalWindow } from '../TerminalWindow';
import { TerminalHeader } from '../TerminalHeader';
import { InteractiveCommandBar } from '../InteractiveCommandBar';
import { HeroWhoami } from '../HeroWhoami';
import { SystemStatus } from '../SystemStatus';
import { Neofetch } from '../Neofetch';
import { FeatureModules } from '../FeatureModules';
import { WorkflowPipeline } from '../WorkflowPipeline';
import { SecurityEngine } from '../SecurityEngine';
import { AIEngine } from '../AIEngine';
import { TechStack } from '../TechStack';
import { Architecture } from '../Architecture';
import { MissionObjective } from '../MissionObjective';
import { ApplicationPreview } from '../ApplicationPreview';
import { DownloadSection } from '../DownloadSection';
import { ContactSection } from '../ContactSection';
import { TerminalFooter } from '../TerminalFooter';
import { BootSequence } from '../BootSequence';
import { sound } from '../../utils/sound';

interface CRTLandingProps {
  onNavigate?: (sectionId: string) => void;
}

export const CRTLanding: React.FC<CRTLandingProps> = () => {
  const [scanlinesEnabled, setScanlinesEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('whoami');
  const [isRebooting, setIsRebooting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    const isMuted = sound.toggleMute();
    setSoundEnabled(!isMuted);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleReboot = () => {
    setIsRebooting(true);
  };

  return (
    <div className="bg-[#040704] text-[#00ff66] font-mono min-h-screen w-full selection:bg-[#00ff66]/30 selection:text-[#33ff77] flex flex-col">
      {/* Reboot BIOS POST sequence screen */}
      {isRebooting && (
        <BootSequence onComplete={() => setIsRebooting(false)} />
      )}

      {/* Main Authentic Retro CRT Terminal Workspace */}
      <TerminalWindow scanlinesEnabled={scanlinesEnabled}>
        <TerminalHeader
          scanlinesEnabled={scanlinesEnabled}
          onToggleScanlines={() => setScanlinesEnabled(!scanlinesEnabled)}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onReboot={handleReboot}
          onNavigate={handleNavigate}
          activeSection={activeSection}
        />

        <main className="flex-1 max-w-7xl w-full mx-auto pb-16">
          <HeroWhoami onNavigate={handleNavigate} />
          <SystemStatus />
          <Neofetch />
          <FeatureModules />
          <WorkflowPipeline />
          <SecurityEngine />
          <AIEngine />
          <TechStack />
          <Architecture />
          <MissionObjective />
          <ApplicationPreview />
          <DownloadSection />
          <ContactSection onNavigate={handleNavigate} />
        </main>

        <TerminalFooter onScrollToTop={scrollToTop} />
        <InteractiveCommandBar onExecuteCommand={handleNavigate} />
      </TerminalWindow>
    </div>
  );
};
