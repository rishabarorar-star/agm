import React from 'react';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070B]">
      {/* Ambient gradient lighting */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#00D9FF]/10 via-[#4EA8FF]/5 to-transparent blur-3xl opacity-70" />
      <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-l from-[#7567E8]/10 via-[#00D9FF]/5 to-transparent blur-3xl opacity-50" />
      <div className="absolute bottom-10 -left-40 w-[700px] h-[700px] bg-gradient-to-r from-[#00D9FF]/10 to-transparent blur-3xl opacity-40" />

      {/* Tactical Grid Overlay */}
      <div className="absolute inset-0 bg-tactical-grid opacity-60" />

      {/* Atmospheric Scanning Beam */}
      <div className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#00D9FF]/5 to-transparent animate-scan pointer-events-none" />

      {/* Corner HUD Telemetry Markers */}
      <div className="hidden lg:block absolute top-6 left-6 text-[10px] font-mono text-cyan-500/30 tracking-widest uppercase">
        SYS.LOC // 34°12'19.4"N 118°14'33.1"W
      </div>
      <div className="hidden lg:block absolute top-6 right-6 text-[10px] font-mono text-cyan-500/30 tracking-widest uppercase text-right">
        STAT // FUSION_READY // CH: DUAL-SPEC
      </div>
      <div className="hidden lg:block absolute bottom-6 left-6 text-[10px] font-mono text-cyan-500/30 tracking-widest uppercase">
        AGM ELECTRO-OPTICS // VOYAGE-SYSTEM
      </div>
      <div className="hidden lg:block absolute bottom-6 right-6 text-[10px] font-mono text-cyan-500/30 tracking-widest uppercase text-right">
        VER 4.2.8 // FIELD_CONFIG
      </div>
    </div>
  );
};
