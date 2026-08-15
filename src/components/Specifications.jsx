import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Shield, Check } from 'lucide-react';
import { productData } from '../data/productData';

export const Specifications = () => {
  return (
    <section id="specifications" className="relative py-28 px-4 sm:px-6 bg-[#05070B] overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00D9FF]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-cyan-500/30 bg-[#081019] text-[10px] font-mono text-cyan-400 tracking-widest uppercase">
            <ClipboardList className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>PRODUCT DATA SHEET</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            PRODUCT AT A GLANCE
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Authoritative technical breakdown of the AGM Voyage Thermal & Digital Day/Night Vision Binocular observation platform.
          </p>
        </div>

        {/* Technical Specification Table Container */}
        <div className="rounded-2xl border border-cyan-500/30 bg-[#081019]/90 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Table Header Strip */}
          <div className="bg-[#0D1722] px-6 py-4 border-b border-cyan-500/20 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs font-mono font-bold text-white tracking-wider uppercase">
                AGM VOYAGE SPECIFICATION MATRIX
              </span>
            </div>
            <span className="text-[10px] font-mono text-cyan-400/80">
              OFFICIAL SUPPLIED DATA
            </span>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/5">
            {productData.specifications.map((spec, idx) => (
              <div 
                key={idx}
                className="px-6 py-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-center hover:bg-cyan-500/5 transition-colors"
              >
                <div className="sm:col-span-4 text-xs font-mono font-bold text-cyan-400 uppercase flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00D9FF]" />
                  <span>{spec.category}</span>
                </div>
                <div className="sm:col-span-8 text-sm font-sans text-gray-200">
                  {spec.information}
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Note */}
          <div className="bg-[#05070B] px-6 py-3 border-t border-cyan-500/15 flex items-center justify-between text-[10px] font-mono text-gray-400">
            <span>SPECIFICATIONS ARE SUBJECT TO PRODUCT REVISION</span>
            <span className="text-cyan-400">AGM ELECTRO-OPTICS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
