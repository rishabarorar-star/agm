import React from 'react';
import { Sparkles } from 'lucide-react';
import image1 from '../assets/1.jpeg';
import image2 from '../assets/2.jpeg';
import image3 from '../assets/3.jpeg';

export const FusionShowcase = () => {
  const images = [image1, image2, image3];

  return (
    <section
      id="fusion"
      className="relative py-8 px-4 sm:px-6 bg-[#F3F5F7] overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-cyan-400/[0.06] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-600/20 bg-white text-[10px] font-mono text-cyan-700 tracking-[0.2em] uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            FUSION TECHNOLOGY
          </div>

          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight font-heading">
            FUSION THAT ADAPTS
            <br />
            <span className="text-[#6B7280]">
              TO THE ENVIRONMENT
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#6B7280] leading-relaxed max-w-2xl mx-auto">
            When conventional optical observation becomes difficult, the AGM
            Voyage combines complementary imaging technologies to provide
            additional visual information across changing conditions.
          </p>
        </div>

        {/* Image Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-center">

          {/* Card 1 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-black/[0.06] shadow-[0_15px_50px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={images[0]}
                  alt="AGM Voyage"
                  className="w-full h-full  object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="px-6 py-5">
                <div className="text-[10px] font-mono tracking-[0.2em] text-cyan-700 uppercase">
                  THERMAL
                </div>

                <h3 className="mt-2 text-lg font-bold text-[#111827] font-heading">
                  See beyond visible light.
                </h3>
              </div>
            </div>
          </div>

          {/* Card 2 - Featured */}
          <div className="group md:-translate-y-8">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-black/[0.06] shadow-[0_20px_60px_rgba(15,23,42,0.12)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_rgba(15,23,42,0.17)]">

              {/* Accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent z-10" />

              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={images[1]}
                  alt="AGM Voyage Fusion"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="px-6 py-5">
                <div className="text-[10px] font-mono tracking-[0.2em] text-cyan-700 uppercase">
                  FUSION
                </div>

                <h3 className="mt-2 text-lg font-bold text-[#111827] font-heading">
                  Multiple views. One experience.
                </h3>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group">
            <div className="relative overflow-hidden rounded-3xl bg-white border border-black/[0.06] shadow-[0_15px_50px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_25px_70px_rgba(15,23,42,0.14)]">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={images[2]}
                  alt="AGM Voyage Digital"
                  className="w-full h-full  object-contain transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="px-6 py-5">
                <div className="text-[10px] font-mono tracking-[0.2em] text-cyan-700 uppercase">
                  DIGITAL
                </div>

                <h3 className="mt-2 text-lg font-bold text-[#111827] font-heading">
                  Preserve the details that matter.
                </h3>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};