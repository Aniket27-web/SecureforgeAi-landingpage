import React, { useState } from 'react';
import { ModernHeader } from './ModernHeader';
import { ModernHero } from './ModernHero';
import { ModernSystemStatus } from './ModernSystemStatus';
import { ModernNeofetch } from './ModernNeofetch';
import { ModernFeatureModules } from './ModernFeatureModules';
import { ModernWorkflowPipeline } from './ModernWorkflowPipeline';
import { ModernSecurityEngine } from './ModernSecurityEngine';
import { ModernAIEngine } from './ModernAIEngine';
import { ModernTechStack } from './ModernTechStack';
import { ModernArchitecture } from './ModernArchitecture';
import { ModernMissionObjective } from './ModernMissionObjective';
import { ModernApplicationPreview } from './ModernApplicationPreview';
import { ModernDownloadSection } from './ModernDownloadSection';
import { ModernContactSection } from './ModernContactSection';
import { ModernFooter } from './ModernFooter';
import { ModernCommandBar } from './ModernCommandBar';
import { sound } from '../../utils/sound';

interface ModernLandingProps {
  onTriggerGlitch?: () => void;
}

export const ModernLanding: React.FC<ModernLandingProps> = ({ onTriggerGlitch }) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('whoami');

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

  return (
    <div className="bg-white text-slate-800 font-sans min-h-screen w-full selection:bg-blue-100 selection:text-blue-700 antialiased flex flex-col">
      {/* Modern Glass Header */}
      <ModernHeader
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onTriggerGlitch={onTriggerGlitch}
      />

      {/* Main Content Sections - Exact matching width and layout */}
      <main className="flex-1 max-w-7xl w-full mx-auto pb-16">
        <ModernHero onNavigate={handleNavigate} />
        <ModernSystemStatus />
        <ModernNeofetch />
        <ModernFeatureModules />
        <ModernWorkflowPipeline />
        <ModernSecurityEngine />
        <ModernAIEngine />
        <ModernTechStack />
        <ModernArchitecture />
        <ModernMissionObjective />
        <ModernApplicationPreview />
        <ModernDownloadSection />
        <ModernContactSection onNavigate={handleNavigate} />
      </main>

      {/* Modern Footer */}
      <ModernFooter onScrollToTop={scrollToTop} />

      {/* Modern Floating Command Palette */}
      <ModernCommandBar onExecuteCommand={handleNavigate} />
    </div>
  );
};
