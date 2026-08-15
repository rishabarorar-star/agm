import React from 'react';

export const HUDOverlay = ({ title = "TARGET ACQUIRED", status = "TRACKING", children, className = "" }) => {
  return (
    <div className={`relative rounded-xl border border-[#00D9FF]/20 bg-[#081019]/80 backdrop-blur-md p-1 overflow-hidden shadow-2xl ${className}`}>
      {/* Corner Bracket Graphics */}
      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#00D9FF] z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#00D9FF] z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#00D9FF] z-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#00D9FF] z-20 pointer-events-none" />

      {/* Top HUD Status Bar */}
      <div className="flex items-center justify-between px-3 py-1.5 border-b border-[#00D9FF]/15 bg-[#0D1722]/90 text-[10px] font-mono text-cyan-400 z-10 relative">
        <div className="flex items-center space-x-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF] animate-pulse" />
          <span className="tracking-widest uppercase">{title}</span>
        </div>
        <div className="text-gray-400 tracking-wider">
          STATUS: <span className="text-[#00D9FF]">{status}</span>
        </div>
      </div>

      {/* Inner Content Area */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Bottom HUD Telemetry Line */}
      <div className="flex items-center justify-between px-3 py-1 border-t border-[#00D9FF]/15 bg-[#0D1722]/90 text-[9px] font-mono text-gray-400 z-10 relative">
        <span>AGM ELECTRO-OPTICS</span>
        <span className="text-cyan-400/80">AZ: 142° | EL: +04°</span>
      </div>
    </div>
  );
};
