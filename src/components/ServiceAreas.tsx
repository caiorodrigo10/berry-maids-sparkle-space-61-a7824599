
import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    region: "Homestead",
    description: "Serving the Homestead area",
    image: "/lovable-uploads/73196e4a-8c7b-4a6f-b97f-d5395976a551.png"
  },
  {
    region: "Cutler Bay",
    description: "Complete coverage of Cutler Bay",
    image: "/lovable-uploads/694ecd3c-ba9f-43dc-821c-c8921afceca3.png"
  },
  {
    region: "Palmetto Bay",
    description: "Serving Palmetto Bay residents",
    image: "/lovable-uploads/cd95ea27-22b6-43ae-896d-25e7e73cefe7.png"
  },
  {
    region: "Pinecrest",
    description: "Full service in Pinecrest area",
    image: "/lovable-uploads/f7e980df-d4af-4a9a-a4d8-45398984484a.png"
  },
  {
    region: "Kendall",
    description: "Serving the Kendall community",
    image: "/lovable-uploads/f56a6655-b58e-4fdf-ad20-34d116bfd040.png"
  }
];

const ServiceAreas = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl text-center mb-12 text-berry-purple">
          Service Areas in Florida
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img 
                src={area.image} 
                alt={area.region}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 text-white mb-2">
                  <MapPin className="w-5 h-5" />
                  <h3 className="text-xl font-semibold">{area.region}</h3>
                </div>
                <p className="text-white text-sm">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
