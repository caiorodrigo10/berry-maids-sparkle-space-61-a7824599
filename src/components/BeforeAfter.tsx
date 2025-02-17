
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const workShowcase = [
  {
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
    title: "Living Room Cleaning",
    description: "Deep cleaning for living spaces"
  },
  {
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070",
    title: "Kitchen Excellence",
    description: "Professional kitchen sanitization"
  },
  {
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070",
    title: "Bathroom Cleaning",
    description: "Thorough bathroom maintenance"
  },
  {
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2074",
    title: "Office Spaces",
    description: "Commercial cleaning services"
  },
  {
    image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080",
    title: "Bedroom Service",
    description: "Detailed bedroom cleaning"
  },
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070",
    title: "Window Cleaning",
    description: "Crystal clear window services"
  },
  {
    image: "https://images.unsplash.com/photo-1527515862127-a4303c0c78fb?q=80&w=2070",
    title: "Floor Care",
    description: "Professional floor maintenance"
  },
  {
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070",
    title: "Disinfection Service",
    description: "Complete sanitization solutions"
  },
  {
    image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?q=80&w=2070",
    title: "Carpet Cleaning",
    description: "Deep carpet cleaning service"
  }
];

const BeforeAfter = () => {
  return (
    <section className="section-padding bg-gray-50">
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
