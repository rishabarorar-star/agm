
import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Eye,
  Sliders,
  Crosshair,
  Scan,
  Ruler,
  Compass,
  Camera,
  Cpu,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { productData } from '../data/productData';

export const Features = () => {
  const iconMap = {
    Layers,
    Eye,
    Sliders,
    Crosshair,
    Scan,
    Ruler,
    Compass,
    Camera,
    Cpu,
    ShieldCheck,
  };

  return (
    <section
      id="features"
      className="relative py-28 px-4 sm:px-6 bg-[#05070B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/20 bg-[#081019] text-[10px] font-mono text-cyan-400 tracking-[0.2em] uppercase">
            <Zap className="w-3.5 h-3.5" />
            SYSTEM FEATURES
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            ENGINEERED FOR
            <br />
            <span className="text-gray-500">
              FIELD OPERATION
            </span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base text-gray-400 leading-relaxed">
            A versatile observation platform combining advanced imaging
            with practical field functionality.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {productData.features.map((feature, idx) => {
            const IconComp = iconMap[feature.icon] || Zap;

            const featured =
              idx === 0 ||
              idx === 4 ||
              idx === 7;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.04,
                }}
                className={featured ? 'lg:row-span-2' : ''}
              >

                <div
                  className={`
                    group relative h-full
                    min-h-[240px]
                    overflow-hidden
                    rounded-3xl
                    bg-white
                    p-6 sm:p-7
                    border border-black/[0.06]
                    shadow-[0_12px_35px_rgba(0,0,0,0.18)]
                    transition-all duration-500
                    hover:-translate-y-1
                    hover:shadow-[0_22px_55px_rgba(0,0,0,0.28)]
                    ${featured ? 'lg:min-h-[500px]' : ''}
                  `}
                >

                  {/* Background number */}
                  <span
                    className="
                      absolute
                      -right-3
                      -top-8
                      select-none
                      text-[140px]
                      font-black
                      leading-none
                      text-black/[0.035]
                      transition-all
                      duration-500
                      group-hover:text-cyan-600/[0.07]
                    "
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  {/* Top row */}
                  <div className="relative z-10 flex items-center justify-between mb-5">

                    {/* Icon */}
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-[#F1F4F6]
                        border
                        border-black/[0.07]
                        text-[#0891B2]
                        transition-all
                        duration-300
                        group-hover:bg-[#ECFEFF]
                        group-hover:border-cyan-500/30
                      "
                    >
                      <IconComp className="h-5 w-5" />
                    </div>

                    {/* Feature ID */}
                    <span className="font-mono text-[9px] tracking-[0.15em] text-gray-400">
                      FEAT // {feature.id}
                    </span>

                  </div>

                  {/* Content */}
                  <div className="relative z-10">

                    <h3
                      className="
                        text-lg
                        sm:text-xl
                        font-bold
                        text-[#111827]
                        font-heading
                        tracking-tight
                        transition-colors
                        duration-300
                        group-hover:text-cyan-700
                      "
                    >
                      {feature.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>

                  </div>

                  {/* Bottom status */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-6
                      right-6
                      pt-4
                      pb-5
                      border-t
                      border-black/[0.06]
                      flex
                      items-center
                      justify-between
                      text-[9px]
                      font-mono
                      text-gray-400
                    "
                  >

                    <span className="flex items-center gap-1.5">

                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />

                      <span>
                        SYSTEM INTEGRATED
                      </span>

                    </span>

                    <span className="text-cyan-700 font-semibold">
                      VERIFIED
                    </span>

                  </div>

                  {/* Bottom hover accent */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[2px]
                      w-0
                      bg-cyan-500
                      transition-all
                      duration-500
                      group-hover:w-full
                    "
                  />

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};