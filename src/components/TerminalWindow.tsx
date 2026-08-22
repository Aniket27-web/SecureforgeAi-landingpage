import React from 'react';

interface TerminalWindowProps {
  children: React.ReactNode;
  scanlinesEnabled: boolean;
  crtCurveEnabled?: boolean;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({
  children,
  scanlinesEnabled,
}) => {
  return (
    <div className="relative min-h-screen w-full bg-[#040704] text-[#00ff66]">
      {/* CRT Moving Scanline Beam Overlay */}
      {scanlinesEnabled && (
        <div className="fixed inset-0 pointer-events-none z-50 crt-scanlines crt-beam" />
      )}

      {/* Screen Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 crt-vignette" />

      {/* Content Container - Fixed 1:1 matching modern viewport */}
      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {children}
      </div>
    </div>
  );
};
