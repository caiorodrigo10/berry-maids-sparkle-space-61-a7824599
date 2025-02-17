import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
const workShowcase = [{
  image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070",
  title: "Modern Living Room Cleaning",
  description: "Professional cleaning service for contemporary homes"
}, {
  image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070",
  title: "Kitchen Excellence",
  description: "Thorough kitchen cleaning and sanitization"
}, {
  image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2070",
  title: "Bathroom Perfection",
  description: "Spotless bathroom cleaning services"
}, {
  image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2074",
  title: "Office Space Cleaning",
  description: "Professional commercial cleaning services"
}, {
  image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2080",
  title: "Bedroom Organization",
  description: "Detailed bedroom cleaning and organizing"
}];
const BeforeAfter = () => {
  return <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">Discover our work</h2>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {workShowcase.map((item, index) => <CarouselItem key={index}>
                <div className="relative">
                  <div className="h-[500px] relative rounded-lg overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.description}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>;
};
export default BeforeAfter;