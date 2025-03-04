
import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Features from '@/components/Features';
import ServiceAreas from '@/components/ServiceAreas';
import BeforeAfter from '@/components/BeforeAfter';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import RecoverTime from '@/components/RecoverTime';
import LiveMore from '@/components/LiveMore';
import EstimateCTA from '@/components/EstimateCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <RecoverTime />
      <Features />
      <div id="services">
        <Services />
      </div>
      <BeforeAfter />
      <EstimateCTA />
      <div id="areas">
        <ServiceAreas />
      </div>
      <LiveMore />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
