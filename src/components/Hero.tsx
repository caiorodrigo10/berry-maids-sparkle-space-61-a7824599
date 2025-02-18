import React from 'react';
import { Button } from '@/components/ui/button';
import Navigation from './Navigation';
import { useNavigate } from 'react-router-dom';
import { Calculator } from 'lucide-react';
const Hero = () => {
  const navigate = useNavigate();
  return <div className="relative min-h-[90vh] flex items-center justify-center bg-black text-berry-white">
      <div className="absolute inset-0 bg-[url('https://storage.googleapis.com/msgsndr/JY9ENR4Wt2w5E1Fjx2ix/media/67b380287c70fc5d430a354c.png')] bg-cover bg-center opacity-50" />
      <Navigation />
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-5xl mb-4 font-bauhaus md:text-5xl">The Best Cleaning Service in Homestead &amp; Miami-Dade</h1>
        <div className="mb-12">
          <p className="text-lg mb-8 max-w-2xl mx-auto md:text-lg">Residential, office &amp; commercial cleaning in Homestead &amp; Miami-Dade.</p>
        </div>
        <Button onClick={() => navigate('/estimate')} className="bg-berry-purple hover:bg-berry-purple/90 text-white h-[48px] px-8 text-base font-semibold uppercase">
          <Calculator className="mr-2 h-5 w-5" />
          Get Your Estimate
        </Button>
      </div>
    </div>;
};
export default Hero;