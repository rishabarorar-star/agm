import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Search, Layers, Compass, Play, Pause, ChevronRight } from 'lucide-react';
import { productData } from '../data/productData';
import { HUDOverlay } from './HUDOverlay';

export const DetectionRecognition = () => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStepIdx((prev) => (prev + 1) % productData.hudSteps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const currentStep = productData.hudSteps[activeStepIdx];

  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[#081019]/90  overflow-hidden">
  
      <div className="max-w-7xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#0D1722] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <Target className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>TARGET TELEMETRY WORKFLOW</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            LOCATE. EXAMINE. UNDERSTAND.
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Step-by-step target isolation and telemetry sequence powered by AGM dual-channel fusion intelligence.
          </p>
        </div>

        {/* HUD Storytelling Sequence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive 4-step Timeline navigation */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between px-2 mb-2">
              <span className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
                SEQUENCE PROGRESSION
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#0D1722] border border-cyan-500/30 text-[10px] font-mono text-cyan-400 hover:border-[#00D9FF] transition-colors"
              >
                {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                <span>{isPlaying ? 'PAUSE AUTOPLAY' : 'PLAY AUTOPLAY'}</span>
              </button>
            </div>

            <div className="space-y-3">
              {productData.hudSteps.map((step, idx) => {
                const isActive = activeStepIdx === idx;

                return (
                  <div
                    key={step.step}
                    onClick={() => {
                      setActiveStepIdx(idx);
                      setIsPlaying(false);
                    }}
                    className={`cursor-pointer p-4 rounded-xl border transition-all duration-300 ${
                      isActive
                        ? 'border-[#00D9FF] bg-[#0D1722] shadow-[0_0_20px_rgba(0,217,255,0.2)]'
                        : 'border-white/10 bg-[#05070B]/60 hover:border-cyan-500/30 hover:bg-[#081019]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-xs border ${
                          isActive 
                            ? 'bg-[#00D9FF] text-white border-[#00D9FF]' 
                            : 'bg-[#05070B] text-gray-400 border-cyan-500/30'
                        }`}>
                          {step.step}
                        </span>
                        <div>
                          <div className="text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
                            0{idx + 1} — {step.code}
                          </div>
                          <div className="text-sm font-bold text-white font-heading">
                            {step.title}
                          </div>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 transition-transform ${
                        isActive ? 'text-[#00D9FF] translate-x-1' : 'text-gray-600'
                      }`} />
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 pt-3 border-t border-white/10 text-xs text-gray-300 font-sans"
                      >
                        {step.desc}
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Animated Viewfinder HUD display */}
          <div className="lg:col-span-7">
            <HUDOverlay
              title={`TARGET WORKFLOW // STAGE ${currentStep.step}`}
              status={currentStep.code}
            >
              <div className="relative w-full aspect-[16/10] bg-[#05070B] rounded-lg overflow-hidden flex flex-col justify-between p-6">
                {/* Simulated Target Image / Grid View */}
                <div className={`absolute inset-0 transition-all duration-700 ${
                  activeStepIdx === 0 ? 'bg-gradient-to-tr from-amber-950 via-red-900/30 to-black' :
                  activeStepIdx === 1 ? 'bg-gradient-to-tr from-emerald-950 via-teal-900/30 to-black' :
                  activeStepIdx === 2 ? 'bg-gradient-to-tr from-cyan-950 via-purple-900/40 to-black' :
                  'bg-gradient-to-tr from-blue-950 via-cyan-900/40 to-black'
                }`} />

                {/* Animated Scanning Horizontal Line */}
                <div className="absolute inset-x-0 h-1 bg-[#00D9FF] animate-scan z-20 pointer-events-none shadow-[0_0_15px_#00D9FF]" />

                {/* Target Bounding Box & HUD Reticle */}
                <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-4">
                  <div className="relative w-48 h-48 border border-cyan-400/40 rounded-xl flex items-center justify-center">
                    {/* Corner Crosshairs */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#00D9FF]" />
                    <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#00D9FF]" />
                    <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#00D9FF]" />
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#00D9FF]" />

                    {/* Target Reticle Graphic */}
                    <div className={`w-28 h-28 rounded-full border-2 border-dashed flex items-center justify-center transition-all ${
                      activeStepIdx === 0 ? 'border-amber-500 text-amber-400 animate-pulse' :
                      activeStepIdx === 1 ? 'border-emerald-400 text-emerald-300' :
                      activeStepIdx === 2 ? 'border-cyan-400 text-cyan-300' :
                      'border-blue-400 text-blue-300'
                    }`}>
                      <Target className="w-10 h-10" />
                    </div>

                    <span className="absolute -bottom-6 text-[10px] font-mono text-cyan-400 tracking-widest uppercase bg-[#081019] px-2 py-0.5 rounded border border-cyan-500/30">
                      {currentStep.code} LOCK
                    </span>
                  </div>
                </div>

                {/* Bottom Live Metrics */}
                <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-gray-300 bg-[#081019]/90 border border-cyan-500/30 px-3 py-1.5 rounded backdrop-blur-md">
                  <span>{currentStep.metrics}</span>
                  <span className="text-[#00D9FF]">MODE: {currentStep.title}</span>
                </div>
              </div>
            </HUDOverlay>
          </div>
        </div>
      </div>
    </section>
  );
};
