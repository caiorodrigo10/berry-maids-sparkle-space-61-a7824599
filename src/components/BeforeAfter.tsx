
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const workShowcase = [
  {
    image: "/lovable-uploads/5a772a75-a90e-4966-84f8-3bf2f4c71b9c.png",
    title: "Leather Furniture Care",
    description: "Professional leather cleaning and conditioning"
  },
  {
    image: "/lovable-uploads/af6f2fab-fac8-40ba-bbb5-5271c33560ed.png",
    title: "Furniture & Decor Cleaning",
    description: "Detailed cleaning of furniture and decorative items"
  },
  {
    image: "/lovable-uploads/5fde8d5f-0d3c-43f5-8906-12053364d290.png",
    title: "Window Cleaning",
    description: "Professional window cleaning services"
  },
  {
    image: "/lovable-uploads/9212175a-799c-40a4-99a8-2b8d92a69617.png",
    title: "Glass & Shower Cleaning",
    description: "Expert glass and shower door cleaning"
  },
  {
    image: "/lovable-uploads/9c37e505-acbd-4730-aed1-6e7475949d18.png",
    title: "Kitchen Deep Cleaning",
    description: "Thorough kitchen cleaning and sanitization"
  },
  {
    image: "/lovable-uploads/de44a741-85c6-431e-aa23-4bf1e059270b.png",
    title: "Floor Care",
    description: "Professional floor cleaning services"
  },
  {
    image: "/lovable-uploads/4e594db0-bd02-414b-a16c-0a053c35f619.png",
    title: "Outdoor Cleaning",
    description: "Patio and outdoor area maintenance"
  },
  {
    image: "/lovable-uploads/591b7cfb-035c-4c87-91c8-c26da4bcd81d.png",
    title: "Appliance Cleaning",
    description: "Detailed appliance cleaning services"
  },
  {
    image: "/lovable-uploads/cbdb556c-6681-453a-a2de-fb8441ebaf24.png",
    title: "Cooktop Cleaning",
    description: "Professional cooktop and surface cleaning"
  }
];

const BeforeAfter = () => {
  return (
    <section id="discover-works" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Discover Our Work
        </h2>
        <Carousel 
          className="w-full max-w-7xl mx-auto"
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            slidesToScroll: 3,
          }}
        >
          <CarouselContent className="-ml-4">
            {workShowcase.map((item, index) => (
              <CarouselItem key={index} className="pl-4 basis-full md:basis-1/3">
                <div className="relative">
                  <div className="h-[300px] relative rounded-lg overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default BeforeAfter;
