import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flame, Eye, Sparkles, Check, Sliders, RefreshCw } from 'lucide-react';
import { productData } from '../data/productData';
import { HUDOverlay } from './HUDOverlay';

export const FusionShowcase = () => {
  const [selectedMode, setSelectedMode] = useState('fusion'); // Strongest emphasis on Fusion

  const activeModeData = productData.fusionModes.find(m => m.id === selectedMode);

  return (
    <section id="fusion" className="relative py-28 px-4 sm:px-6 bg-[#05070B] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#00D9FF]/10 via-[#7567E8]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#081019] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>FUSION TECHNOLOGY</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            FUSION THAT ADAPTS TO THE ENVIRONMENT
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            When conventional optical observation becomes difficult, the AGM Voyage combines complementary imaging technologies to provide additional visual information across changing conditions.
          </p>
        </div>

        {/* 3 Visual Mode Selector Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {productData.fusionModes.map((mode) => {
            const isActive = selectedMode === mode.id;
            const isFusion = mode.id === 'fusion';

            return (
              <div
                key={mode.id}
                onClick={() => setSelectedMode(mode.id)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? isFusion
                      ? 'border-[#00D9FF] bg-gradient-to-b from-[#0D1722] via-[#081019] to-[#05070B] shadow-[0_0_30px_rgba(0,217,255,0.3)] ring-1 ring-[#00D9FF]'
                      : 'border-cyan-500/60 bg-[#0D1722] shadow-[0_0_20px_rgba(0,217,255,0.15)]'
                    : 'border-white/10 bg-[#081019]/60 hover:border-cyan-500/30 hover:bg-[#0D1722]/60'
                }`}
              >
                {/* Special Tag for Fusion mode */}
                {isFusion && (
                  <span className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-gradient-to-r from-[#00D9FF] to-[#7567E8] text-black font-extrabold text-[9px] font-mono tracking-widest uppercase shadow-md">
                    RECOMMENDED MODE
                  </span>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                        isActive 
                          ? 'bg-[#00D9FF]/20 border-[#00D9FF] text-[#00D9FF]' 
                          : 'bg-[#05070B] border-white/10 text-gray-400'
                      }`}>
                        {mode.id === 'thermal' && <Flame className="w-5 h-5" />}
                        {mode.id === 'digital' && <Eye className="w-5 h-5" />}
                        {mode.id === 'fusion' && <Sparkles className="w-5 h-5" />}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-white font-heading">
                          {mode.name}
                        </h3>
                        <span className="text-[10px] font-mono text-cyan-400/80 tracking-wider">
                          {mode.title}
                        </span>
                      </div>
                    </div>

                    {isActive && (
                      <div className="w-5 h-5 rounded-full bg-[#00D9FF] flex items-center justify-center text-black">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}
                  </div>

                  <p className="text-xs text-gray-300 font-sans leading-relaxed">
                    {mode.caption}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-400">
                  <span>CHANNEL STATUS</span>
                  <span className={isActive ? 'text-[#00D9FF]' : 'text-gray-500'}>
                    {isActive ? 'ENGAGED' : 'STANDBY'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Visual Viewfinder Demonstration */}
        <div className="mt-10">
          <HUDOverlay 
            title={`OBSERVATION MODE // ${activeModeData.name}`} 
            status="REAL-TIME RENDER"
          >
            <div className="relative w-full aspect-[16/9] max-h-[500px] bg-[#05070B] rounded-lg overflow-hidden flex items-center justify-center p-6">
              {/* Simulated Landscape & Target Canvas */}
              <div className={`absolute inset-0 transition-all duration-700 ${
                selectedMode === 'thermal'
                  ? 'bg-[#150520]'
                  : selectedMode === 'digital'
                  ? 'bg-[#031508]'
                  : 'bg-gradient-to-tr from-[#081019] via-[#0D1722] to-[#150520]'
              }`}>
                {/* Simulated Terrain Mesh Lines */}
                <svg className="w-full h-full opacity-40" viewBox="0 0 800 450">
                  <path d="M 0 300 Q 200 250 400 320 T 800 280 L 800 450 L 0 450 Z" fill="rgba(0, 217, 255, 0.05)" stroke="rgba(0, 217, 255, 0.2)" strokeWidth="1" />
                  <path d="M 0 350 Q 300 290 600 380 T 800 340 L 800 450 L 0 450 Z" fill="rgba(0, 217, 255, 0.08)" stroke="rgba(0, 217, 255, 0.3)" strokeWidth="1" />
                </svg>
              </div>

              {/* Target Heat Signature Overlay depending on selectedMode */}
              <div className="relative z-10 flex flex-col items-center justify-center space-y-4">
                {/* Simulated Target 1 (Center) */}
                <div className="relative flex items-center justify-center">
                  <div className={`w-36 h-36 rounded-full border-2 transition-all duration-500 flex items-center justify-center ${
                    selectedMode === 'thermal' 
                      ? 'border-amber-500 bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 animate-pulse shadow-[0_0_40px_rgba(255,85,0,0.8)]' 
                      : selectedMode === 'digital'
                      ? 'border-emerald-400 bg-emerald-900/40 text-emerald-300 shadow-[0_0_20px_rgba(0,255,136,0.3)]'
                      : 'border-[#00D9FF] bg-gradient-to-r from-amber-500 via-[#00D9FF] to-emerald-400 shadow-[0_0_50px_rgba(0,217,255,0.8)]'
                  }`}>
                    <div className="text-center space-y-1">
                      <span className="text-xs font-mono font-bold tracking-widest text-black uppercase block">
                        {selectedMode === 'thermal' && "HEAT SIGNATURE"}
                        {selectedMode === 'digital' && "OPTICAL DETAIL"}
                        {selectedMode === 'fusion' && "FUSED SYNERGY"}
                      </span>
                      <span className="text-[9px] font-mono text-black/80 font-semibold block">
                        TARGET LOCATED
                      </span>
                    </div>
                  </div>

                  {/* Target Bounding Frame */}
                  <div className="absolute -inset-4 border border-dashed border-cyan-400/60 rounded-xl pointer-events-none animate-spin-slow" />
                </div>

                {/* Technical Coordinates and Details */}
                <div className="bg-[#081019]/90 border border-cyan-500/30 px-4 py-2 rounded-lg text-center font-mono space-y-1 backdrop-blur-md">
                  <p className="text-xs text-white font-bold">
                    {activeModeData.description}
                  </p>
                  <p className="text-[10px] text-cyan-400">
                    MODE: {activeModeData.name} // CHANNEL: DUAL-SPECTRUM // GAIN: AUTO
                  </p>
                </div>
              </div>

              {/* Viewfinder Overlay Crosshairs */}
              <div className="absolute inset-0 pointer-events-none border border-cyan-500/20 m-4 rounded">
                <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyan-500/20" />
                <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-cyan-500/20" />
              </div>
            </div>
          </HUDOverlay>
        </div>
      </div>
    </section>
  );
};
