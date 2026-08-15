import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Eye, Zap, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import { productData } from '../data/productData';

export const ProductIntro = () => {
  const [activeStep, setActiveStep] = useState(2); // Default to FUSION step

  return (
    <section className="relative py-24 px-4 sm:px-6 bg-[#081019]/70 border-y border-cyan-500/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#00D9FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-[#0D1722] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>{productData.intro.eyebrow}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            {productData.intro.headline}
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {productData.intro.description}
          </p>
        </div>

        {/* Large Interactive Vision Composition Architecture */}
        <div className="p-6 sm:p-8 rounded-2xl border border-cyan-500/25 bg-[#0D1722]/90 backdrop-blur-xl shadow-2xl relative">
          <div className="absolute top-3 left-4 text-[10px] font-mono text-cyan-400/60 tracking-widest uppercase">
            SYSTEM ARCHITECTURE // SPECTRUM INTEGRATION FLOW
          </div>

          {/* Interactive Step Controls */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            {productData.intro.flow.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 relative ${
                    isSelected
                      ? 'border-[#00D9FF] bg-cyan-500/15 shadow-[0_0_20px_rgba(0,217,255,0.2)]'
                      : 'border-white/10 bg-[#05070B]/60 hover:border-cyan-500/40 hover:bg-[#081019]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${
                      isSelected ? 'text-[#00D9FF]' : 'text-gray-400'
                    }`}>
                      STAGE 0{idx + 1}
                    </span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />}
                  </div>
                  <div className="text-sm font-bold text-white font-heading mb-1">
                    {item.step}
                  </div>
                  <div className="text-xs text-gray-400 font-sans">
                    {item.detail}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Dynamic Visual Composition Output Area */}
          <div className="mt-8 relative rounded-xl border border-cyan-500/20 bg-[#05070B] p-6 sm:p-10 min-h-[280px] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
            {/* Visual Canvas Backdrop */}
            <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />

            {/* Left Info Column */}
            <div className="flex-1 space-y-4 z-10 text-left">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-ping" />
                <span>ACTIVE STAGE: {productData.intro.flow[activeStep].step}</span>
              </div>

              <h3 className="text-2xl font-bold text-white font-heading">
                {activeStep === 0 && "Thermal Energy Detection Channel"}
                {activeStep === 1 && "High-Sensitivity Digital Low-Light Channel"}
                {activeStep === 2 && "Bi-Spectrum Algorithmic Fusion Output"}
                {activeStep === 3 && "Enhanced Tactical Situational Awareness"}
              </h3>

              <p className="text-sm text-gray-300 max-w-xl">
                {activeStep === 0 && "Senses heat emitted by living targets, vehicles, and equipment through total darkness, smoke, and light foliage."}
                {activeStep === 1 && "Captures ambient photon data to reveal crisp optical details, terrain textures, and physical target outlines."}
                {activeStep === 2 && "Combines thermal heat outlines directly over digital visible imagery for fast detection without sacrificing background context."}
                {activeStep === 3 && "Provides operators with immediate target identification, precise distance telemetry, and environmental awareness."}
              </p>
            </div>

            {/* Right Graphic Visualization */}
            <div className="w-full md:w-80 h-48 rounded-lg border border-cyan-500/40 bg-[#081019] relative flex items-center justify-center p-4 overflow-hidden z-10 shadow-inner">
              {/* Simulated Optical Viewfinder */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${
                activeStep === 0 ? 'bg-gradient-to-tr from-purple-900/60 via-amber-600/40 to-black' :
                activeStep === 1 ? 'bg-gradient-to-tr from-emerald-950 via-emerald-800/40 to-black' :
                activeStep === 2 ? 'bg-gradient-to-tr from-cyan-950 via-[#00D9FF]/20 to-purple-900/40' :
                'bg-gradient-to-tr from-blue-950 via-cyan-900/30 to-emerald-950'
              }`} />

              {/* Viewfinder Target Reticle SVG */}
              <svg className="absolute inset-0 w-full h-full text-cyan-400/40 pointer-events-none" viewBox="0 0 200 150">
                <circle cx="100" cy="75" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <line x1="100" y1="15" x2="100" y2="135" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="75" x2="180" y2="75" stroke="currentColor" strokeWidth="0.5" />
                {/* Target Heat Signature Box */}
                <rect x="75" y="55" width="50" height="40" stroke={activeStep === 0 ? '#FF5500' : activeStep === 1 ? '#00FF88' : '#00D9FF'} strokeWidth="1.5" fill="none" className="animate-pulse" />
              </svg>

              <div className="relative z-10 text-center space-y-1">
                <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block">
                  {productData.intro.flow[activeStep].step}
                </span>
                <span className="text-[9px] font-mono text-gray-400 block">
                  FPS: 50HZ // SPEC: AGM VOYAGE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
