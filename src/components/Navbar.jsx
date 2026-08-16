import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, FileText, ChevronRight } from 'lucide-react';
import { productData } from '../data/productData';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Fusion Technology', href: '#fusion' },
    { name: 'Features', href: '#features' },
    { name: 'Applications', href: '#applications' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-xl border transition-all duration-300 ${
        scrolled 
          ? 'bg-[#081019]/85 backdrop-blur-xl border-[#00D9FF]/30 shadow-lg shadow-[#00D9FF]/5 py-3' 
          : 'bg-[#081019]/60 backdrop-blur-md border-white/10 py-4'
      }`}>
        <div className="flex items-center justify-between px-4 sm:px-6">
          {/* Logo Placeholder */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#0D1722] to-[#05070B] border border-[#00D9FF]/40 flex items-center justify-center shadow-md group-hover:border-[#00D9FF] transition-all">
              <Shield className="w-5 h-5 text-[#00D9FF] group-hover:scale-110 transition-transform" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#00D9FF] animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wider text-white font-heading group-hover:text-[#00D9FF] transition-colors">
                AGM VOYAGE
              </span>
              <span className="text-[9px] font-mono text-cyan-400/70 tracking-widest uppercase">
                ELECTRO-OPTICS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono tracking-wider text-gray-300 hover:text-[#00D9FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0   hover:after:w-full after:transition-all"
              >
                {link.name.toUpperCase()}
              </a>
            ))}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center space-x-4">
            <a
              href={productData.cataloguePath}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#0D1722]/80 text-xs font-mono text-cyan-400 hover:border-[#00D9FF] hover:bg-cyan-500/10 transition-all flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>CATALOGUE</span>
            </a>

            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#040b14] text-black font-semibold text-xs tracking-wider uppercase hover:shadow-[0_0_20px_rgba(0,217,255,0.6)] transition-all flex items-center space-x-1.5"
            >
              <span>REQUEST INFORMATION</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-cyan-500/20 px-4 pb-4 flex flex-col space-y-3 bg-[#081019]/95 backdrop-blur-2xl rounded-b-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xs font-mono tracking-widest text-gray-300 hover:text-[#00D9FF] py-2 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name.toUpperCase()}</span>
                <ChevronRight className="w-3.5 h-3.5 text-cyan-400/50" />
              </a>
            ))}
            <div className="pt-2 flex flex-col space-y-2">
              <a
                href={productData.cataloguePath}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg border border-cyan-500/40 text-center font-mono text-xs text-cyan-400 bg-[#0D1722]"
              >
                VIEW CATALOGUE PDF
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#040b14] text-black font-semibold text-center font-mono text-xs uppercase"
              >
                REQUEST INFORMATION
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
