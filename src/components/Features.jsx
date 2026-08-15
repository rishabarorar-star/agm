import React from 'react';
import { motion } from 'framer-motion';
import { 
  Layers, Eye, Sliders, Crosshair, Scan, 
  Ruler, Compass, Camera, Cpu, ShieldCheck, 
  Zap 
} from 'lucide-react';
import { productData } from '../data/productData';

export const Features = () => {
  const iconMap = {
    Layers: Layers,
    Eye: Eye,
    Sliders: Sliders,
    Crosshair: Crosshair,
    Scan: Scan,
    Ruler: Ruler,
    Compass: Compass,
    Camera: Camera,
    Cpu: Cpu,
    ShieldCheck: ShieldCheck
  };

  return (
    <section id="features" className="relative py-28 px-4 sm:px-6 bg-[#05070B] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#00D9FF]/5 via-[#4EA8FF]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#081019] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>SYSTEM FEATURES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            ENGINEERED FOR FIELD OPERATION
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            A versatile observation platform combining advanced imaging with practical field functionality.
          </p>
        </div>

        {/* Premium Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.features.map((feature, idx) => {
            const IconComp = iconMap[feature.icon] || Zap;
            const isFeatured = idx === 0 || idx === 1; // Give extra visual prominence to key fusion features

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`tactical-card rounded-2xl p-6 relative transition-all duration-300 group flex flex-col justify-between ${
                  isFeatured 
                    ? 'border-[#00D9FF]/50 bg-gradient-to-br from-[#0D1722] to-[#081019] shadow-[0_0_25px_rgba(0,217,255,0.15)]' 
                    : 'hover:border-cyan-500/40'
                }`}
              >
                {/* Identifier Top Bar */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#05070B] border border-cyan-500/30 flex items-center justify-center text-[#00D9FF] group-hover:scale-110 group-hover:border-[#00D9FF] transition-all">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400/60 tracking-widest">
                    FEAT // {feature.id}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00D9FF] transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Telemetry Marker */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-400">
                  <span className="flex items-center space-x-1">
                    <span className="w-1 h-1 rounded-full bg-[#00D9FF]" />
                    <span>SYSTEM INTEGRATED</span>
                  </span>
                  <span className="text-cyan-400/80">VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
