import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { productData } from '../data/productData';
import { HUDOverlay } from './HUDOverlay';

export const Capabilities = () => {
  const [selectedCapId, setSelectedCapId] = useState(productData.capabilities[0].id);

  const selectedCap = productData.capabilities.find(c => c.id === selectedCapId) || productData.capabilities[0];

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[#081019]/80 border-y border-cyan-500/15 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#7567E8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#0D1722] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Sliders className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>SYSTEM CAPABILITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            ONE SYSTEM. MULTIPLE OBSERVATION MODES.
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Select an observation capability to view operational parameters and tactical feature details.
          </p>
        </div>

        {/* Horizontal Scrollable Capability Selector */}
        <div className="flex items-center space-x-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-cyan-500/30">
          {productData.capabilities.map((cap) => {
            const isSelected = selectedCapId === cap.id;

            return (
              <button
                key={cap.id}
                onClick={() => setSelectedCapId(cap.id)}
                className={`flex-shrink-0 px-5 py-3 rounded-xl border text-xs font-mono tracking-wider transition-all duration-300 flex items-center space-x-2 ${
                  isSelected
                    ? 'border-[#00D9FF] bg-[#00D9FF] text-black font-bold shadow-[0_0_20px_rgba(0,217,255,0.4)]'
                    : 'border-white/10 bg-[#05070B] text-gray-300 hover:border-cyan-500/40 hover:bg-[#0D1722]'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                <span>{cap.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Display Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Explanation */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 text-xs font-mono text-cyan-400 uppercase">
              <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
              <span>CAPABILITY REFERENCE // {selectedCap.id.toUpperCase()}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-extrabold text-white font-heading">
                {selectedCap.title}
              </h3>
              <p className="text-sm font-mono text-cyan-400">
                {selectedCap.subtitle}
              </p>
            </div>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
              {selectedCap.desc}
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 rounded-lg border border-cyan-500/20 bg-[#0D1722]">
                <span className="text-gray-400 block text-[10px]">OPERATIONAL SPECTRUM</span>
                <span className="text-white font-bold">MULTI-BAND DUAL</span>
              </div>
              <div className="p-3 rounded-lg border border-cyan-500/20 bg-[#0D1722]">
                <span className="text-gray-400 block text-[10px]">SYSTEM STATUS</span>
                <span className="text-[#00D9FF] font-bold">READY FOR DEPLOYMENT</span>
              </div>
            </div>
          </div>

          {/* Right Visual Output */}
          <div className="lg:col-span-6">
            <HUDOverlay
              title={`MODE: ${selectedCap.title}`}
              status="ACTIVE PARAMETER"
            >
              <div className="relative w-full aspect-[4/3] bg-[#05070B] rounded-lg overflow-hidden flex flex-col items-center justify-center p-6">
                {/* Visual Viewfinder Background */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1722] via-[#05070B] to-[#150520] opacity-80" />
                <div className="absolute inset-0 bg-tactical-grid opacity-30" />

                {/* Animated HUD Elements */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_30px_rgba(0,217,255,0.4)] animate-pulse">
                    <Zap className="w-10 h-10 text-[#00D9FF]" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-bold text-white font-heading">
                      {selectedCap.title}
                    </div>
                    <div className="text-[10px] font-mono text-cyan-400">
                      SYSTEM FUNCTION ENGAGED
                    </div>
                  </div>
                </div>
              </div>
            </HUDOverlay>
          </div>
        </div>
      </div>
    </section>
  );
};
