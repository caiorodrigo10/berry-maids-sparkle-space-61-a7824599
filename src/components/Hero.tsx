import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-black text-berry-white">
      <div className="absolute inset-0 bg-[url('/images/cleaning-bg.jpg')] bg-cover bg-center opacity-50" />
      <div className="relative z-10 container mx-auto text-center px-4">
        <div className="animate-float mb-8">
          <img src="/images/logo.png" alt="Berry Maids Logo" className="mx-auto h-32 w-auto" />
        </div>
        <h1 className="text-4xl md:text-6xl mb-4 font-bauhaus">
          Berry Maids
        </h1>
        <p className="text-xl md:text-2xl mb-8 relative inline-block">
          You Relax, We'll Take Care of the Rest
          <span className="absolute bottom-[-8px] left-0 w-full h-1 bg-berry-lime"></span>
        </p>
        <Button className="btn-primary text-lg">
          BOOK NOW
        </Button>
      </div>
    </div>
  );
};

export default Hero;