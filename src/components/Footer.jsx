import React from 'react';
import { Shield, FileText, ArrowUp } from 'lucide-react';
import { productData } from '../data/productData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070B] border-t border-cyan-500/20 pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-[#0D1722] border border-cyan-500/40 flex items-center justify-center text-[#00D9FF]">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-wider text-white font-heading">
                AGM VOYAGE
              </span>
            </div>

            <p className="text-xs text-gray-400 max-w-sm font-sans leading-relaxed">
              Thermal + Digital Day/Night Vision Fusion Binocular system designed for professional field observation across demanding operational environments.
            </p>

            <div className="text-[10px] font-mono text-cyan-400/70 tracking-widest uppercase pt-2">
              THERMAL / DIGITAL VISION / FUSION / FIELD OBSERVATION
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-3">
              <span className="text-cyan-400 font-bold block tracking-wider uppercase">NAVIGATION</span>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#overview" className="hover:text-[#00D9FF] transition-colors">Overview</a></li>
                <li><a href="#fusion" className="hover:text-[#00D9FF] transition-colors">Fusion Technology</a></li>
                <li><a href="#features" className="hover:text-[#00D9FF] transition-colors">Features</a></li>
                <li><a href="#applications" className="hover:text-[#00D9FF] transition-colors">Applications</a></li>
                <li><a href="#specifications" className="hover:text-[#00D9FF] transition-colors">Specifications</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-cyan-400 font-bold block tracking-wider uppercase">RESOURCES</span>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href={productData.cataloguePath} target="_blank" rel="noopener noreferrer" className="hover:text-[#00D9FF] transition-colors flex items-center space-x-1">
                    <FileText className="w-3 h-3 text-[#00D9FF]" />
                    <span>View Catalogue</span>
                  </a>
                </li>
                <li><a href="#contact" className="hover:text-[#00D9FF] transition-colors">Request Information</a></li>
                <li><a href="#contact" className="hover:text-[#00D9FF] transition-colors">Commercial Enquiry</a></li>
              </ul>
            </div>
          </div>

          {/* Top Jump Action */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl border border-cyan-500/30 bg-[#081019] text-cyan-400 hover:border-[#00D9FF] hover:bg-cyan-500/10 transition-all flex items-center space-x-2 text-xs font-mono"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-4 h-4" />
            </button>

            <div className="text-[10px] font-mono text-gray-500 md:text-right">
              SYSTEM REF: AGM-VOYAGE-SPEC
            </div>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} AGM Electro-Optics. All Rights Reserved.
          </div>
          <div className="flex items-center space-x-4">
            <span>DEFENSE TECH SPEC</span>
            <span>|</span>
            <span className="text-cyan-400/80">PRICE ON REQUEST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
