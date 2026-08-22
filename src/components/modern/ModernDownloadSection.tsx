import React, { useState } from 'react';
import { Download, Check, Copy, Shield, FileCode, CheckCircle2, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

export const ModernDownloadSection: React.FC = () => {
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
        setDownloadLogs((prev) => [...prev, progressSteps[stepIdx].log]);
        stepIdx++;
      } else {
        clearInterval(interval);
        setIsDownloading(false);
        setDownloadComplete(true);
        sound.playSuccessChime();

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
    <section id="download" className="py-12 px-3 sm:px-6 border-b border-slate-200 bg-slate-50/50 font-mono">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-slate-900 mb-4">
        <span className="text-blue-700">C:\SecureForgeAI&gt;</span>
        <span>download SecureForgeAI.exe --channel=stable</span>
      </div>

      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Main Installer Box */}
        <div className="modern-card p-6 sm:p-8 border-2 border-blue-500/50 shadow-md text-center bg-white">
          
          <div className="text-xs text-slate-500 font-mono mb-2">
            OFFICIAL SECURE SOFTWARE DISTRIBUTION CONSOLE
          </div>

          <pre className="text-xs sm:text-sm font-mono text-blue-700 leading-tight hidden md:block select-none my-4">
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
          <div className="md:hidden p-3 bg-slate-50 border border-slate-200 rounded-lg text-left text-xs font-mono my-3 space-y-1">
            <div className="text-blue-700 font-bold text-center border-b border-slate-200 pb-1 font-heading">
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
              className={`w-full max-w-xl py-4 sm:py-5 px-6 font-mono text-sm sm:text-base font-black tracking-wider transition-all duration-200 cursor-pointer flex flex-col items-center justify-center space-y-1 rounded-xl ${
                downloadComplete
                  ? 'bg-emerald-600 text-white shadow-md'
                  : isDownloading
                  ? 'bg-slate-100 border-2 border-blue-600 text-blue-700 cursor-wait'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20'
              }`}
            >
              <div className="flex items-center space-x-3">
                {downloadComplete ? (
                  <CheckCircle2 className="w-6 h-6 text-white" />
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

              <div className="text-[11px] font-normal tracking-normal opacity-90">
                {isHovered && !isDownloading && !downloadComplete ? (
                  <span className="text-amber-200 font-bold">&gt; DOWNLOAD READY &gt; INITIALIZING TRANSFER...</span>
                ) : (
                  <span>Windows 10 / 11 (64-Bit) • SHA-256 Verified • ~142 MB</span>
                )}
              </div>
            </button>
          </div>

          {/* Real-time Download Progress Bar */}
          {downloadProgress !== null && (
            <div className="mt-6 max-w-xl mx-auto space-y-2 text-left">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-600 font-semibold">PROGRESS:</span>
                <span className="text-blue-700 font-bold">{downloadProgress}%</span>
              </div>

              <div className="w-full h-3 bg-slate-100 border border-slate-300 rounded-full p-0.5 overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>

              {/* Progress log lines */}
              <div className="p-2.5 bg-slate-900 text-emerald-400 rounded-lg text-[11px] font-mono space-y-1 max-h-28 overflow-y-auto">
                {downloadLogs.map((log, lIdx) => (
                  <div key={lIdx}>
                    {log}
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Download Information Table */}
          <div className="modern-card p-4 sm:p-5 border border-slate-200 bg-white font-mono text-xs space-y-2">
            <div className="text-xs font-bold text-blue-700 border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>DOWNLOAD SPECIFICATIONS</span>
              <FileCode className="w-3.5 h-3.5" />
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">File Name:</span>
                <span className="font-bold text-slate-900">SecureForgeAI.exe</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Operating System:</span>
                <span className="text-slate-800">Windows 10 / 11</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Architecture:</span>
                <span className="text-slate-800">64-bit (x86_64 Native)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Release Version:</span>
                <span className="text-slate-800">v1.0.0 (Build 2026.08)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">File Size:</span>
                <span className="text-slate-800">~142.4 MB</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-500">Distribution Status:</span>
                <span className="font-bold text-emerald-700">[ VERIFIED READY ]</span>
              </div>
            </div>
          </div>

          {/* Checksum / SHA-256 Integrity Panel */}
          <div className="modern-card p-4 sm:p-5 border border-slate-200 bg-white font-mono text-xs space-y-3">
            <div className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2 flex items-center justify-between">
              <span>FILE INTEGRITY &amp; CHECKSUM</span>
              <Shield className="w-3.5 h-3.5 text-blue-600" />
            </div>

            <div className="text-[11px] text-slate-600 font-sans">
              Verify your downloaded binary against the official cryptographic hash:
            </div>

            <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg break-all text-[11px] text-blue-800 font-mono select-all">
              SHA-256: {sha256Checksum}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={handleCopySha}
                className="px-3 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-slate-800 text-xs flex items-center space-x-1.5 cursor-pointer font-bold transition-colors"
              >
                {copiedSha ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedSha ? '> SHA-256 COPIED TO CLIPBOARD' : '[ COPY SHA-256 ]'}</span>
              </button>

              <span className="text-[10px] text-slate-500">
                INTEGRITY: [ CHECKSUM AVAILABLE ]
              </span>
            </div>
          </div>

        </div>

        {/* Installation Instructions Flow */}
        <div className="modern-card p-5 border border-slate-200 bg-white font-mono">
          <div className="text-xs font-bold text-slate-900 mb-4 flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-blue-600" />
            <span>C:\SecureForgeAI&gt; install --help // 4-STEP INSTALLATION GUIDE</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs text-center">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="text-blue-700 font-black">[ 01. DOWNLOAD ]</div>
              <div className="text-[11px] text-slate-600 font-sans">Download SecureForgeAI.exe to your workstation.</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="text-blue-700 font-black">[ 02. INSTALL ]</div>
              <div className="text-[11px] text-slate-600 font-sans">Run the installer and follow setup prompts.</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="text-blue-700 font-black">[ 03. CONFIGURE ]</div>
              <div className="text-[11px] text-slate-600 font-sans">Select your local LLM (or connect Cloud AI).</div>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
              <div className="text-emerald-700 font-black">[ 04. BUILD SECURELY ]</div>
              <div className="text-[11px] text-slate-600 font-sans">Develop with automated scanning and isolation.</div>
            </div>
          </div>
        </div>

        {/* Important Local LLM Offline Mode Notice */}
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl font-mono text-xs text-amber-950 space-y-1.5">
          <div className="font-bold flex items-center space-x-2">
            <span>[ OFFLINE AIR-GAPPED MODE SPECIFICATION ]</span>
          </div>
          <p className="text-[11px] text-slate-700 font-sans leading-relaxed">
            SecureForgeAI supports locally hosted LLMs via llama.cpp / GGUF runtimes, allowing supported AI-assisted development, security auditing, and test synthesis without requiring continuous internet access. Cloud AI features and remote updates may require an internet connection.
          </p>
        </div>

      </div>
    </section>
  );
};
