import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, ShieldCheck } from 'lucide-react';
import { productData } from '../data/productData';

export const Specifications = () => {
  return (
    <section
      id="specifications"
      className="relative py-28 px-4 sm:px-6 bg-[#fff] overflow-hidden"
    >
      {/* Soft background lighting */}
      <div className="absolute top-0 right-0 w-[650px] h-[650px] rounded-full bg-gray-400/[0.06] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-16">

          <div className="lg:col-span-7">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gray-700/15 bg-white text-[10px] font-mono text-gray-700 tracking-[0.2em] uppercase shadow-sm">
              <ClipboardList className="w-3.5 h-3.5" />
              PRODUCT DATA SHEET
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#111827] tracking-tight font-heading">
              PRODUCT
              <br />
              <span className="text-[#9CA3AF]">
                AT A GLANCE
              </span>
            </h2>

          </div>

          <div className="lg:col-span-5">

            <p className="text-sm sm:text-base text-[#6B7280] leading-7 max-w-lg">
              Technical specifications of the AGM Voyage Thermal &
              Digital Day/Night Vision Binocular observation platform.
            </p>

          </div>

        </div>

        {/* Main specification surface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="
            rounded-[2rem]
            bg-white
            border border-black/[0.06]
            shadow-[0_20px_70px_rgba(15,23,42,0.08)]
            overflow-hidden
          "
        >

          {/* Product identity */}
          <div className="px-7 sm:px-10 lg:px-12 py-8 sm:py-10 border-b border-black/[0.06] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

            <div>

              <div className="text-[10px] font-mono tracking-[0.2em] text-gray-700 uppercase">
                AGM ELECTRO-OPTICS
              </div>

              <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#111827] font-heading">
                AGM Voyage
              </h3>

              <p className="mt-1 text-xs text-[#9CA3AF]">
                Thermal & Digital Day/Night Vision Binocular
              </p>

            </div>

            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#F3F5F7]">
              <ShieldCheck className="w-4 h-4 text-gray-700" />

              <span className="text-[9px] font-mono tracking-[0.12em] text-[#6B7280]">
                OFFICIAL SUPPLIED DATA
              </span>
            </div>

          </div>

          {/* Specification grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {productData.specifications.map((spec, idx) => (

              <div
                key={idx}
                className="
                  group
                  relative
                  p-7 sm:p-8
                  min-h-[150px]
                  border-b
                  border-black/[0.06]
                  sm:border-r
                  lg:[&:nth-child(3n)]:border-r-0
                  sm:[&:nth-child(2n)]:border-r-0
                  lg:[&:nth-child(2n)]:border-r
                  hover:bg-[#F8FAFC]
                  transition-colors
                  duration-300
                "
              >

                {/* Number */}
                <div className="flex items-center justify-between">

                  <span className="text-[9px] font-mono tracking-widest text-[#B0B7C3]">
                    {String(idx + 1).padStart(2, '0')}
                  </span>

                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500/70 group-hover:bg-gray-500 transition-colors" />

                </div>

                {/* Category */}
                <div className="mt-5">

                  <div className="text-[9px] font-mono font-semibold tracking-[0.15em] text-gray-700 uppercase">
                    {spec.category}
                  </div>

                  <div className="mt-2 text-sm sm:text-[15px] font-semibold text-[#1F2937] leading-6">
                    {spec.information}
                  </div>

                </div>

                {/* Hover line */}
                <div className="absolute bottom-0 left-7 right-7 h-[2px] w-0 bg-gray-500 group-hover:w-[calc(100%-3.5rem)] transition-all duration-500" />

              </div>

            ))}

          </div>

          {/* Footer */}
          <div className="px-7 sm:px-10 py-5 bg-[#F8FAFC] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

            <span className="text-[9px] font-mono tracking-[0.12em] text-[#9CA3AF]">
              SPECIFICATIONS ARE SUBJECT TO PRODUCT REVISION
            </span>

            <span className="text-[9px] font-mono tracking-[0.15em] text-[#9CA3AF]">
              AGM ELECTRO-OPTICS
            </span>

          </div>

        </motion.div>

      </div>
    </section>
  );
};