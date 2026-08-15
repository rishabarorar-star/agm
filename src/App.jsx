import React from 'react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductIntro } from './components/ProductIntro';
import { FusionShowcase } from './components/FusionShowcase';
import { EnvironmentSection } from './components/EnvironmentSection';
import { Features } from './components/Features';
import { DetectionRecognition } from './components/DetectionRecognition';
import { Applications } from './components/Applications';
import { Capabilities } from './components/Capabilities';
import { Specifications } from './components/Specifications';
import { PricingCatalogue } from './components/PricingCatalogue';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#05070B] text-gray-100 font-sans selection:bg-[#00D9FF] selection:text-black">
      {/* Background Graphic & Particle Effects */}
      <AnimatedBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="relative z-10">
        <Hero />
        <ProductIntro />
        <FusionShowcase />
        <EnvironmentSection />
        <Features />
        <DetectionRecognition />
        <Applications />
        <Capabilities />
        <Specifications />
        <PricingCatalogue />
        <ContactForm />
      </main>

      {/* Technical Footer */}
      <Footer />
    </div>
  );
}

export default App;
