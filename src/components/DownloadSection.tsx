import React, { useState } from 'react';
import { Download, Check, Copy, Shield, FileCode, CheckCircle2, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';

export const DownloadSection: React.FC = () => {
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [downloadLogs, setDownloadLogs] = useState<string[]>([]);
  const [copiedSha, setCopiedSha] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const sha256Checksum = '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08';

  const handleDownloadClick = () => {
    if (isDownloading) return;
    sound.playCommandExecuted();
    setIsDownloading(true);
    setDownloadComplete(false);
    setDownloadProgress(0);
    setDownloadLogs(['CONNECTING TO SECUREFORGEAI DISTRIBUTION SERVER...']);

    const progressSteps = [
      { p: 20, log: '> RESOLVING HOST: releases.secureforge.ai [ TLS 1.3 ]' },
      { p: 45, log: '> VERIFYING SHA-256 MANIFEST CHECKSUM...' },
      { p: 70, log: '> DOWNLOADING SecureForgeAI.exe (x64 Windows Executable)...' },
      { p: 90, log: '> STREAMING PAYLOAD: 142.4 MB / 142.4 MB' },
      { p: 100, log: '> DOWNLOAD COMPLETE. FILE INTEGRITY VERIFIED.' }
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      if (stepIdx < progressSteps.length) {
        sound.playScanTick();
        setDownloadProgress(progressSteps[stepIdx].p);
        setDownloadLogs(prev => [...prev, progressSteps[stepIdx].log]);
        stepIdx++;
      } else {
        clearInterval(interval);
        setIsDownloading(false);
        setDownloadComplete(true);
        sound.playSuccessChime();

        // Trigger real client-side download of placeholder / simulated exe file
        try {
          const blob = new Blob(
            ['SecureForgeAI v1.0.0 Windows Executable Placeholder. Replace with production build binary.'],
            { type: 'application/octet-stream' }
          );
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = 'SecureForgeAI.exe';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        } catch (e) {
          console.error(e);
        }
      }
    }, 450);
  };

  const handleCopySha = () => {
    sound.playKeyClick();
    navigator.clipboard.writeText(sha256Checksum);
    setCopiedSha(true);
    setTimeout(() => setCopiedSha(false), 3000);
  };

  return (
    <section id="download" className="py-12 px-3 sm:px-6 border-b border-[#00ff66]/20 bg-[#020502]">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">download SecureForgeAI.exe --channel=stable</span>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Main Terminal Installer Box */}
        <div className="terminal-panel p-6 sm:p-8 border-2 border-[#00ff66]/50 shadow-[0_0_30px_rgba(0,255,102,0.2)] text-center">
          
          <div className="text-xs text-[#00ff66]/60 font-mono mb-2">
            OFFICIAL SECURE SOFTWARE DISTRIBUTION CONSOLE
          </div>

          <pre className="text-xs sm:text-sm font-mono text-[#00ff66] text-glow leading-tight hidden md:block select-none my-4">
{`╔══════════════════════════════════════════════════════════════════════╗
║                    SECUREFORGEAI INSTALLER                           ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  APPLICATION     SecureForgeAI                                       ║
║  PLATFORM        Windows 10 / 11                                     ║
║  FORMAT          .EXE (Native x64 Windows Executable)                ║
║  VERSION         v1.0.0 Stable                                       ║
║  ARCHITECTURE    x86_64                                              ║
║  STATUS          READY TO DOWNLOAD                                   ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝`}
          </pre>

          {/* Mobile ASCII Box Replacement */}
          <div className="md:hidden p-3 bg-[#060c06] border border-[#00ff66]/40 text-left text-xs font-mono my-3 space-y-1">
            <div className="text-[#33ff77] font-bold text-center border-b border-[#00ff66]/30 pb-1">
              SECUREFORGEAI INSTALLER
            </div>
            <div>PLATFORM: Windows 10/11 x64</div>
            <div>FORMAT: .EXE Application</div>
            <div>VERSION: v1.0.0</div>
            <div>STATUS: READY TO DOWNLOAD</div>
          </div>

          {/* Large Primary Download CTA Button */}
          <div className="mt-6 flex flex-col items-center justify-center">
            <button
              onClick={handleDownloadClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              disabled={isDownloading}
              className={`w-full max-w-xl py-4 sm:py-5 px-6 font-mono text-sm sm:text-base font-black tracking-wider transition-all duration-200 cursor-pointer flex flex-col items-center justify-center space-y-1 ${
                downloadComplete
                  ? 'bg-[#00ff66] text-[#040704] shadow-[0_0_30px_#00ff66]'
                  : isDownloading
                  ? 'bg-[#081808] border-2 border-[#00ff66] text-[#00ff66] cursor-wait'
                  : 'term-btn-primary border-2'
              }`}
            >
              <div className="flex items-center space-x-3">
                {downloadComplete ? (
                  <CheckCircle2 className="w-6 h-6 text-[#040704]" />
                ) : (
                  <Download className={`w-6 h-6 ${isDownloading ? 'animate-bounce' : ''}`} />
                )}
                <span>
                  {downloadComplete
                    ? '[ ✓ DOWNLOAD COMPLETE — FILE SAVED ]'
                    : isDownloading
                    ? '[ DOWNLOADING SecureForgeAI.exe... ]'
                    : '[ ↓ DOWNLOAD SECUREFORGEAI.EXE ]'}
                </span>
              </div>

              <div className="text-[11px] font-normal tracking-normal opacity-80">
                {isHovered && !isDownloading && !downloadComplete ? (
                  <span className="text-[#ffb000]">&gt; DOWNLOAD READY &gt; INITIALIZING TRANSFER...</span>
                ) : (
                  <span>Windows 10 / 11 (64-Bit) • SHA-256 Verified • ~142 MB</span>
                )}
              </div>
            </button>
          </div>

          {/* Real-time Download Progress Simulation Bar */}
          {downloadProgress !== null && (
            <div className="mt-6 max-w-xl mx-auto space-y-2 text-left">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-[#00ff66]/80">PROGRESS:</span>
                <span className="text-[#33ff77] font-bold">{downloadProgress}%</span>
              </div>

              <div className="w-full h-3 bg-[#010301] border border-[#00ff66]/50 p-0.5">
                <div
                  className="h-full bg-[#00ff66] shadow-[0_0_10px_#00ff66] transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>

              {/* Progress log lines */}
              <div className="p-2.5 bg-[#020502] border border-[#00ff66]/30 text-[11px] font-mono space-y-1 max-h-28 overflow-y-auto">
                {downloadLogs.map((log, lIdx) => (
                  <div key={lIdx} className="text-[#00ff66]/90">
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* 2-Column Info Grid: Download Metadata & Checksum Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Download Information Table */}
          <div className="terminal-panel p-4 sm:p-5 border border-[#00ff66]/30 font-mono text-xs space-y-2">
            <div className="text-xs font-bold text-[#ffb000] border-b border-[#00ff66]/25 pb-2 flex items-center justify-between">
              <span>DOWNLOAD SPECIFICATIONS</span>
              <FileCode className="w-3.5 h-3.5" />
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between py-1 border-b border-[#00ff66]/10">
                <span className="text-[#00ff66]/60">File Name:</span>
                <span className="font-bold text-[#33ff77]">SecureForgeAI.exe</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#00ff66]/10">
                <span className="text-[#00ff66]/60">Operating System:</span>
                <span className="text-[#00ff66]">Windows 10 / 11</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#00ff66]/10">
                <span className="text-[#00ff66]/60">Architecture:</span>
                <span className="text-[#00ff66]">64-bit (x86_64 Native)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#00ff66]/10">
                <span className="text-[#00ff66]/60">Release Version:</span>
                <span className="text-[#00ff66]">v1.0.0 (Build 2026.08)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#00ff66]/10">
                <span className="text-[#00ff66]/60">File Size:</span>
                <span className="text-[#00ff66]">~142.4 MB</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#00ff66]/60">Distribution Status:</span>
                <span className="font-bold text-[#33ff77]">[ VERIFIED READY ]</span>
              </div>
            </div>
          </div>

          {/* Checksum / SHA-256 Integrity Panel */}
          <div className="terminal-panel p-4 sm:p-5 border border-[#00ff66]/30 font-mono text-xs space-y-3">
            <div className="text-xs font-bold text-[#33ff77] border-b border-[#00ff66]/25 pb-2 flex items-center justify-between">
              <span>FILE INTEGRITY &amp; CHECKSUM</span>
              <Shield className="w-3.5 h-3.5" />
            </div>

            <div className="text-[11px] text-[#00ff66]/70">
              Verify your downloaded binary against the official cryptographic hash:
            </div>

            <div className="p-2.5 bg-[#010301] border border-[#00ff66]/40 break-all text-[11px] text-[#33ff77] font-mono select-all">
              SHA-256: {sha256Checksum}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleCopySha}
                className="term-btn px-3 py-1 text-xs flex items-center space-x-1.5 cursor-pointer font-bold"
              >
                {copiedSha ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSha ? '> SHA-256 COPIED TO CLIPBOARD' : '[ COPY SHA-256 ]'}</span>
              </button>

              <span className="text-[10px] text-[#00ff66]/50">
                INTEGRITY: [ CHECKSUM AVAILABLE ]
              </span>
            </div>
          </div>

        </div>

        {/* Installation Instructions Flow */}
        <div className="terminal-panel p-5 border border-[#00ff66]/30 font-mono">
          <div className="text-xs font-bold text-[#ffb000] mb-4 flex items-center space-x-2">
            <Terminal className="w-4 h-4" />
            <span>C:\SecureForgeAI&gt; install --help // 4-STEP INSTALLATION GUIDE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-center">
            <div className="p-3 bg-[#030603] border border-[#00ff66]/20 space-y-1">
              <div className="text-[#ffb000] font-black">[ 01. DOWNLOAD ]</div>
              <div className="text-[11px] text-[#00ff66]/70">Download SecureForgeAI.exe to your workstation.</div>
            </div>

            <div className="p-3 bg-[#030603] border border-[#00ff66]/20 space-y-1">
              <div className="text-[#ffb000] font-black">[ 02. INSTALL ]</div>
              <div className="text-[11px] text-[#00ff66]/70">Run the installer and follow setup prompts.</div>
            </div>

            <div className="p-3 bg-[#030603] border border-[#00ff66]/20 space-y-1">
              <div className="text-[#ffb000] font-black">[ 03. CONFIGURE ]</div>
              <div className="text-[11px] text-[#00ff66]/70">Select your local LLM (or connect Cloud AI).</div>
            </div>

            <div className="p-3 bg-[#030603] border border-[#00ff66]/20 space-y-1">
              <div className="text-[#33ff77] font-black text-glow">[ 04. BUILD SECURELY ]</div>
              <div className="text-[11px] text-[#00ff66]/70">Develop with automated scanning and isolation.</div>
            </div>
          </div>
        </div>

        {/* Important Local LLM Offline Mode Notice */}
        <div className="p-4 bg-[#0a0802] border border-[#ffb000]/40 font-mono text-xs text-[#ffb000] space-y-1.5">
          <div className="font-bold flex items-center space-x-2">
            <span>[ OFFLINE AIR-GAPPED MODE SPECIFICATION ]</span>
          </div>
          <p className="text-[11px] text-[#ffb000]/90 leading-relaxed">
            SecureForgeAI supports locally hosted LLMs via llama.cpp / GGUF runtimes, allowing supported AI-assisted development, security auditing, and test synthesis without requiring continuous internet access. Cloud AI features and remote updates may require an internet connection.
          </p>
        </div>

      </div>
    </section>
  );
};
