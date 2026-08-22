import React, { useState } from 'react';
import { ExternalLink, Terminal, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { sound } from '../utils/sound';

interface ContactSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [msgInput, setMsgInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    sound.playSuccessChime();
    setSubmitted(true);
    setTimeout(() => {
      setEmailInput('');
      setMsgInput('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 px-3 sm:px-6 border-b border-[#00ff66]/20 bg-[#030603]">
      {/* Command prompt */}
      <div className="flex items-center space-x-2 text-xs sm:text-sm font-bold text-[#00ff66] mb-4">
        <span>C:\SecureForgeAI&gt;</span>
        <span className="text-[#33ff77] text-glow">./contact --init-link</span>
      </div>

      <div className="max-w-4xl mx-auto terminal-panel p-6 sm:p-8 border border-[#00ff66]/40">
        <div className="text-center space-y-3 mb-6">
          <h2 className="text-lg sm:text-2xl font-black text-[#33ff77] text-glow tracking-widest uppercase">
            READY TO BUILD SECURE SOFTWARE?
          </h2>
          <div className="text-xs sm:text-sm text-[#00ff66]/80 font-mono">
            Initialize SecureForgeAI on your workstation and transform your development security.
          </div>

          <div className="pt-2 text-xs font-mono text-[#ffb000] space-y-1">
            <div>&gt; connect developer</div>
            <div>&gt; explore project repository</div>
            <div>&gt; view architecture specifications</div>
            <div>&gt; start development with zero-trust safety</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 mb-8">
          <button
            onClick={() => {
              sound.playSuccessChime();
              onNavigate('download');
            }}
            className="term-btn-primary px-5 py-2.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer"
          >
            <span>[ DOWNLOAD SECUREFORGEAI.EXE ]</span>
          </button>

          <a
            href="https://github.com/placeholder-secureforgeai"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playKeyClick()}
            className="term-btn px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>[ GITHUB REPOSITORY ]</span>
            <ExternalLink className="w-3 h-3 text-[#00ff66]/60" />
          </a>

          <button
            onClick={() => {
              sound.playCommandExecuted();
              onNavigate('architecture');
            }}
            className="term-btn-amber px-4 py-2.5 text-xs sm:text-sm font-bold flex items-center space-x-2 cursor-pointer"
          >
            <Terminal className="w-4 h-4" />
            <span>[ VIEW ARCHITECTURE ]</span>
          </button>
        </div>

        {/* Terminal Dispatcher Form */}
        <div className="border-t border-[#00ff66]/30 pt-6">
          <div className="text-xs font-bold text-[#ffb000] mb-3 flex items-center space-x-2 font-mono">
            <MessageSquare className="w-4 h-4" />
            <span>DIRECT OPERATOR INQUIRY &amp; FEEDBACK DISPATCHER</span>
          </div>

          {submitted ? (
            <div className="p-4 bg-[#081508] border border-[#00ff66] text-center space-y-2 text-xs font-mono">
              <div className="text-[#33ff77] font-bold text-glow flex items-center justify-center space-x-2">
                <CheckCircle2 className="w-4 h-4" />
                <span>&gt; TRANSMISSION ENCRYPTED &amp; DISPATCHED</span>
              </div>
              <p className="text-[#00ff66]/80 text-[11px]">
                Thank you. The SecureForgeAI development core will respond to your operator frequency shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 font-mono text-xs">
              <div>
                <label className="block text-[11px] text-[#00ff66]/70 mb-1">
                  OPERATOR EMAIL / CONTACT HANDLE:
                </label>
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="operator@domain.sec"
                  className="w-full bg-[#010301] border border-[#00ff66]/40 px-3 py-2 text-xs text-[#33ff77] outline-none focus:border-[#00ff66] focus:shadow-[0_0_10px_rgba(0,255,102,0.3)]"
                />
              </div>

              <div>
                <label className="block text-[11px] text-[#00ff66]/70 mb-1">
                  PROJECT INQUIRY / SECURITY SPECIFICATION:
                </label>
                <textarea
                  rows={3}
                  value={msgInput}
                  onChange={(e) => setMsgInput(e.target.value)}
                  placeholder="Enter deployment requirements, local LLM specs, or technical queries..."
                  className="w-full bg-[#010301] border border-[#00ff66]/40 px-3 py-2 text-xs text-[#33ff77] outline-none focus:border-[#00ff66] focus:shadow-[0_0_10px_rgba(0,255,102,0.3)]"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="term-btn px-4 py-2 text-xs font-bold flex items-center space-x-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>[ DISPATCH TRANSMISSION ]</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
