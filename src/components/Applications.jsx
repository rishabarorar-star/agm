import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Radio, Search, Anchor, Compass, Eye, Mountain, ExternalLink } from 'lucide-react';
import { productData } from '../data/productData';

export const Applications = () => {
  const [hoveredApp, setHoveredApp] = useState(null);

  const iconMap = {
    "SEC-01": Shield,
    "LE-02": Radio,
    "SAR-03": Search,
    "AS-04": Anchor,
    "BO-05": Compass,
    "WO-06": Eye,
    "OA-07": Mountain,
  };

  return (
    <section id="applications" className="relative py-28 px-4 sm:px-6 bg-[#05070B] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-[#00D9FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#081019] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Shield className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>FIELD OPERATIONS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            DESIGNED FOR PROFESSIONAL FIELD APPLICATIONS
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Engineered to support critical observation, perimeter protection, search missions, and field navigation across demanding operational sectors.
          </p>
        </div>

        {/* Rich Application Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productData.applications.map((app, idx) => {
            const AppIcon = iconMap[app.code] || Shield;
            const isHovered = hoveredApp === app.code;

            return (
              <motion.div
                key={app.code}
                onMouseEnter={() => setHoveredApp(app.code)}
                onMouseLeave={() => setHoveredApp(null)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative rounded-2xl p-6 border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isHovered
                    ? 'border-[#00D9FF] bg-[#0D1722] shadow-[0_0_30px_rgba(0,217,255,0.25)] scale-[1.02]'
                    : 'border-cyan-500/20 bg-[#081019]/70 hover:border-cyan-500/40'
                }`}
              >
                {/* Background Pattern Graphic */}
                <div className="absolute inset-0 bg-tactical-grid opacity-20 pointer-events-none" />

                {/* Top Bar with Icon & Code */}
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#05070B] border border-cyan-500/30 flex items-center justify-center text-[#00D9FF] group-hover:scale-110 transition-transform">
                    <AppIcon className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#05070B] border border-cyan-500/20 text-[10px] font-mono text-cyan-400 tracking-widest">
                    {app.code}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2 relative z-10">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-[#00D9FF] transition-colors">
                    {app.name}
                  </h3>
                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {app.desc}
                  </p>
                </div>

                {/* Bottom Action / Status bar */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between relative z-10 text-[10px] font-mono text-cyan-400/70">
                  <span>DEPLOYMENT: VERIFIED</span>
                  <ExternalLink className={`w-3.5 h-3.5 transition-transform ${
                    isHovered ? 'text-[#00D9FF] translate-x-0.5 -translate-y-0.5' : 'text-gray-600'
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
