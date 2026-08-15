import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Flame, CloudFog, CloudRain, Snowflake, ShieldAlert } from 'lucide-react';
import { productData } from '../data/productData';

export const EnvironmentSection = () => {
  const iconMap = {
    Moon: Moon,
    Flame: Flame,
    CloudFog: CloudFog,
    CloudRain: CloudRain,
    Snowflake: Snowflake,
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#081019]/80 border-y border-cyan-500/15 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 -right-40 w-[600px] h-[600px] bg-[#7567E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#0D1722] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <ShieldAlert className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>ENVIRONMENTAL ADAPTABILITY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            WHEN VISIBILITY BREAKS DOWN, KEEP OBSERVING.
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            AGM Voyage is designed to support observation when visibility is affected by darkness and challenging weather conditions including smoke, fog, rain and snow.
          </p>
        </div>

        {/* Asymmetric Environmental Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {productData.environments.map((env, idx) => {
            const IconComponent = iconMap[env.icon] || Moon;

            return (
              <motion.div
                key={env.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 rounded-2xl border border-cyan-500/20 bg-[#0D1722]/80 backdrop-blur-md hover:border-[#00D9FF]/60 hover:shadow-[0_0_25px_rgba(0,217,255,0.2)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Environmental Graphic Background Accent */}
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <IconComponent className="w-20 h-20 text-[#00D9FF]" />
                </div>

                <div className="space-y-4 relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#05070B] border border-cyan-500/30 flex items-center justify-center text-[#00D9FF] group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-[#00D9FF] transition-colors">
                      {env.name}
                    </h3>
                    <p className="mt-2 text-xs text-gray-300 leading-relaxed font-sans">
                      {env.desc}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-cyan-400/70">
                  <span>SPECTRUM: DUAL</span>
                  <span>READY</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
