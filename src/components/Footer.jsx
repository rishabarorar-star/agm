import React from 'react';
import { Shield, FileText, ArrowUp } from 'lucide-react';
import { productData } from '../data/productData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-site border-t border-neutral pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-lg bg-bg-secondary border border-accent-soft flex items-center justify-center text-accent">
                <Shield className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-wider text-white font-heading">
                AGM VOYAGE
              </span>
            </div>

            <p className="text-xs text-muted max-w-sm font-sans leading-relaxed">
              Thermal + Digital Day/Night Vision Fusion Binocular system designed for professional field observation across demanding operational environments.
            </p>

            <div className="text-[10px] font-mono text-accent/70 tracking-widest uppercase pt-2">
              THERMAL / DIGITAL VISION / FUSION / FIELD OBSERVATION
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4 text-xs font-mono">
            <div className="space-y-3">
              <span className="text-accent font-bold block tracking-wider uppercase">NAVIGATION</span>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#overview" className="hover-text-accent transition-colors">Overview</a></li>
                <li><a href="#fusion" className="hover-text-accent transition-colors">Fusion Technology</a></li>
                <li><a href="#features" className="hover-text-accent transition-colors">Features</a></li>
                <li><a href="#applications" className="hover-text-accent transition-colors">Applications</a></li>
                <li><a href="#specifications" className="hover-text-accent transition-colors">Specifications</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <span className="text-accent font-bold block tracking-wider uppercase">RESOURCES</span>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href={productData.cataloguePath} target="_blank" rel="noopener noreferrer" className="hover-text-accent transition-colors flex items-center space-x-1">
                    <FileText className="w-3 h-3 text-accent" />
                    <span>View Catalogue</span>
                  </a>
                </li>
                <li><a href="#contact" className="hover-text-accent transition-colors">Request Information</a></li>
                <li><a href="#contact" className="hover-text-accent transition-colors">Commercial Enquiry</a></li>
              </ul>
            </div>
          </div>

          {/* Top Jump Action */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-4">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl border border-accent-soft bg-bg-tertiary text-accent hover-border-accent hover:bg-bg-secondary transition-all flex items-center space-x-2 text-xs font-mono"
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
          <div className="pt-8 border-t border-neutral flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-muted gap-4">
          <div>
            © {new Date().getFullYear()} AGM Electro-Optics. All Rights Reserved.
          </div>
            <div className="flex items-center space-x-4">
            <span>DEFENSE TECH SPEC</span>
            <span>|</span>
            <span className="text-accent/80">PRICE ON REQUEST</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
