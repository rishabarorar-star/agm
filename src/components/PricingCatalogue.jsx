import React from 'react';
import { FileText, ArrowRight, Download, Shield, Sparkles, CheckCircle2 } from 'lucide-react';
import { productData } from '../data/productData';

export const PricingCatalogue = () => {
  return (
    <section className="relative py-28 px-4 sm:px-6 bg-[#081019]/90 overflow-hidden">
    
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full border border-gray-500/30 bg-[#0D1722] text-[10px] font-mono text-gray-400 tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#00D9FF]" />
            <span>COMMERCIAL PROCUREMENT</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-heading">
            ADVANCED VISION. DEPENDABLE OBSERVATION.
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Contact our team for product availability, specifications, commercial details and procurement information.
          </p>
        </div>

        {/* Commercial Grid: Pricing Info + Premium Catalogue Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Pricing / Availability Card */}
          <div className="lg:col-span-7 rounded-2xl border border-gray-500/30 bg-[#0D1722]/90 backdrop-blur-xl p-8 flex flex-col justify-between space-y-8 shadow-2xl relative">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-xs font-mono text-gray-400 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
                <span>OFFICIAL PRODUCT DESIGNATION</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-heading">
                {productData.fullName}
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed font-sans">
                Full-capability dual-spectrum observation system integrating thermal infrared detection and digital low-light vision for field operations.
              </p>
            </div>

            {/* Price on Request Callout */}
            <div className="p-6 rounded-xl border border-gray-500/40 bg-[#05070B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">
                  COMMERCIAL PRICING
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#040b14] font-heading">
                  {productData.price}
                </span>
              </div>

              <a
                href="#contact"
                className="px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#040b14] text-black font-bold text-xs font-mono tracking-widest uppercase hover:shadow-[0_0_25px_rgba(0,217,255,0.7)] transition-all flex items-center space-x-2"
              >
                <span>REQUEST INFORMATION</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 text-xs font-mono text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>DIRECT PROCUREMENT</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#00D9FF]" />
                <span>TECHNICAL SUPPORT</span>
              </div>
            </div>
          </div>

          {/* Right Premium Catalogue Brochure Card */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#0D1722]/90 to-[#05070B]/70 p-8 flex flex-col justify-between space-y-6 shadow-2xl relative group hover:border-[#00D9FF] transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-xl bg-[#05070B] border border-gray-500/30 flex items-center justify-center text-[#00D9FF] group-hover:scale-110 transition-transform">
                  <FileText className="w-7 h-7" />
                </div>
                <span className="px-3 py-1 rounded-full bg-gray-300/60 border border-gray-500/30 text-[10px] font-mono text-black uppercase tracking-widest">
                  {productData.catalogueFormat}
                </span>
              </div>

              <div>
                <h4 className="text-xl font-bold text-black font-heading">
                  {productData.catalogueTitle}
                </h4>
                <p className="mt-2 text-xs text-[#ffffff]/70 font-sans leading-relaxed">
                  Download the comprehensive PDF product brochure containing technical overview, dual-spectrum imaging breakdown, and operational capabilities.
                </p>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <a
                href={productData.cataloguePath}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-lg border border-[#00D9FF] bg-[#000000] text-white font-mono text-xs tracking-widest uppercase hover:bg-[#00D9FF] hover:text-white transition-all flex items-center justify-center space-x-2 font-bold shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>VIEW CATALOGUE PDF</span>
              </a>

              <p className="text-[10px] font-mono  text-[#ffffff]/70 text-center">
                OPENS PDF BROCHURE IN A NEW BROWSER TAB
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
