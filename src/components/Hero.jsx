import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowRight, Shield, Crosshair, Eye, Compass, Activity, Zap } from 'lucide-react';
import { productData } from '../data/productData';
import { HUDOverlay } from './HUDOverlay';

export const Hero = () => {
  return (
    <section id="overview" className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 flex flex-col justify-between items-center overflow-hidden">
      {/* Background Lighting & Radar graphic */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-soft rounded-full blur-3xl pointer-events-none" />

      {/* Radar Ring Visual */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-accent-soft rounded-full pointer-events-none animate-radar" />
      {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-accent-soft/60 rounded-full pointer-events-none" /> */}

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 my-auto">
        {/* Left Column: Hero Text & Actions */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-6 flex flex-col justify-center space-y-6 text-left"
        >
          {/* Technical Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-soft bg-bg-tertiary w-fit">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-accent uppercase">
              {productData.eyebrow}
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight font-heading text-heading leading-tight">
              {productData.tagline}
            </h1>
            <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#040b14] via-[#040b14] to-[#7567E8]">
              {productData.subTagline}
            </h2>
          </div>

          {/* Description */}
            <p className="text-secondary text-sm sm:text-base leading-relaxed max-w-xl font-sans">
            {productData.description}
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-lg bg-accent text-black font-bold text-xs font-mono tracking-widest uppercase transition-all flex items-center space-x-2 group shadow-soft"
              style={{ backgroundImage: 'linear-gradient(90deg, var(--color-primary), var(--color-secondary))' }}
            >
              <span  >REQUEST INFORMATION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform " />
            </a>

            <a
              href={productData.cataloguePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-lg border border-neutral bg-card text-heading font-mono text-xs tracking-widest uppercase hover-border-accent hover:bg-bg-secondary transition-all flex items-center space-x-2"
            >
              <FileText className="w-4 h-4 text-accent" />
              <span>VIEW CATALOGUE</span>
            </a>
          </div>

          {/* Tactical Badges */}
          <div className="pt-4 flex flex-wrap gap-2">
            {productData.heroIndicators.map((badge, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded bg-[#0D1722]/80 border border-cyan-500/20 text-[10px] font-mono text-cyan-300 tracking-wider flex items-center space-x-1"
              >
                <span className="w-1 h-1 rounded-full bg-accent" />
                <span>{badge}</span>
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Prominent Product Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          {/* Animated SVG HUD Product Chassis Container */}
          <HUDOverlay title="AGM VOYAGE // DUAL OPTICS" status="ACTIVE SEARCH">
            <div className="relative w-full aspect-[4/3] bg-gradient-to-b from-[#05070B] via-[#0D1722] to-[#05070B] rounded-lg flex items-center justify-center p-6 overflow-hidden">
              {/* Tactical Scanning Beam Line */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#040b14] to-transparent animate-scan z-20 pointer-events-none opacity-80" />

              {/* Technical Reticle Overlay */}
              <svg className="absolute inset-0 w-full h-full text-cyan-500/15 pointer-events-none" viewBox="0 0 400 300">
                <circle cx="200" cy="150" r="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" fill="none" />
                <circle cx="200" cy="150" r="130" stroke="currentColor" strokeWidth="1" fill="none" />
                <line x1="200" y1="20" x2="200" y2="280" stroke="currentColor" strokeWidth="0.5" />
                <line x1="20" y1="150" x2="380" y2="150" stroke="currentColor" strokeWidth="0.5" />
              </svg>

              {/* Stylized Electro-Optic Binocular SVG Graphic */}
              <div className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center">
                <svg viewBox="0 0 500 320" className="w-full h-auto filter drop-shadow-[0_0_25px_#040b14]">
                  {/* Outer Armor Chassis */}
                  <path d="M 80 80 L 210 60 L 250 80 L 290 60 L 420 80 L 440 240 L 320 270 L 250 250 L 180 270 L 60 240 Z" fill="#0D1722" stroke="#040b14" strokeWidth="2" />
                  
                  {/* Grip Texture Strips */}
                  <rect x="90" y="100" width="30" height="100" rx="4" fill="#05070B" stroke="rgba(0,217,255,0.3)" />
                  <rect x="380" y="100" width="30" height="100" rx="4" fill="#05070B" stroke="rgba(0,217,255,0.3)" />

                  {/* Dual Objective Lenses */}
                  {/* Left Objective Lens: Thermal Channel */}
                  <circle cx="160" cy="170" r="55" fill="#05070B" stroke="#040b14" strokeWidth="3" />
                  <circle cx="160" cy="170" r="42" fill="url(#thermalGradient)" stroke="#FF5500" strokeWidth="1.5" />
                  <circle cx="160" cy="170" r="25" fill="none" stroke="#040b14" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Right Objective Lens: Digital Low-Light Channel */}
                  <circle cx="340" cy="170" r="55" fill="#05070B" stroke="#040b14" strokeWidth="3" />
                  <circle cx="340" cy="170" r="42" fill="url(#digitalGradient)" stroke="#00FF88" strokeWidth="1.5" />
                  <circle cx="340" cy="170" r="25" fill="none" stroke="#00FF88" strokeWidth="1" strokeDasharray="3 3" />

                  {/* Central Emitter / Rangefinder Port */}
                  <rect x="230" y="140" width="40" height="50" rx="6" fill="#081019" stroke="#040b14" strokeWidth="2" />
                  <circle cx="250" cy="165" r="12" fill="#040b14" opacity="0.8" className="animate-pulse" />

                  {/* Control Buttons Panel (Top) */}
                  <rect x="180" y="75" width="140" height="25" rx="4" fill="#05070B" stroke="#040b14" />
                  <circle cx="200" cy="87.5" r="4" fill="#040b14" />
                  <circle cx="230" cy="87.5" r="4" fill="#040b14 " />
                  <circle cx="270" cy="87.5" r="4" fill="#7567E8" />
                  <circle cx="300" cy="87.5" r="4" fill="#00FF88" />

                  {/* Gradients */}
                  <defs>
                    <radialGradient id="thermalGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FF9900" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#CC0055" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#110022" stopOpacity="1" />
                    </radialGradient>
                    <radialGradient id="digitalGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#00FFCC" stopOpacity="0.9" />
                      <stop offset="60%" stopColor="#008855" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#001100" stopOpacity="1" />
                    </radialGradient>
                  </defs>
                </svg>

                {/* Subtitle Label on Graphic */}
                <div className="mt-2 flex items-center space-x-4 text-[11px] font-mono text-cyan-300">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>THERMAL CH1</span>
                  </span>
                  <span className="text-gray-500">|</span>
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span>DIGITAL CH2</span>
                  </span>
                  <span className="text-gray-500">|</span>
                    <span className="text-[#040b14]">FUSED OUTPUT</span>
                </div>
              </div>

              {/* Floating Orbit Indicators around chassis */}
              <div className="absolute top-4 left-4 bg-[#081019]/90 border border-cyan-500/30 px-2.5 py-1 rounded text-[10px] font-mono text-cyan-400 flex items-center space-x-1.5 shadow-lg">
                <Crosshair className="w-3 h-3 text-[#040b14]" />
                <span>POSITIONING: ENGAGED</span>
              </div>

              <div className="absolute bottom-12 right-1 bg-[#081019]/90 border border-cyan-500/30 px-2.5 py-1 rounded text-[10px] font-mono text-cyan-400 flex items-center space-x-1.5 shadow-lg">
                <Activity className="w-3 h-3 text-emerald-400" />
                <span>RANGEFINDER: ACTIVE</span>
              </div>
            </div>
          </HUDOverlay>
        </motion.div>
      </div>

      {/* Hero Technical Information Strip (Section 5 requirement) */}
      <div className="w-full max-w-7xl mx-auto mt-12 pt-6 border-t border-cyan-500/20 z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {productData.heroInfoStrip.map((item, idx) => (
            <div 
              key={idx}
              className="p-3 rounded-lg border border-cyan-500/15 bg-[#081019]/60 backdrop-blur-md flex flex-col space-y-1 hover:border-[#040b14]/40 transition-colors"
            >
              <div className="text-[10px] font-mono text-cyan-400 tracking-widest uppercase flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#040b14]" />
                <span>{item.label}</span>
              </div>
              <div className="text-xs font-bold text-gray-200 tracking-wide font-heading">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
