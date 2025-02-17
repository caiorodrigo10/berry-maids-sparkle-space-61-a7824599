
import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    region: "Homestead",
    description: "Serving the Homestead area",
    image: "/lovable-uploads/fe1eb441-aafa-4f05-b618-6939c727a8d5.png"
  },
  {
    region: "Cutler Bay",
    description: "Complete coverage of Cutler Bay",
    image: "/lovable-uploads/f1766e80-48ff-41f8-861e-ffed513d3fe6.png"
  },
  {
    region: "Palmetto Bay",
    description: "Serving Palmetto Bay residents",
    image: "/lovable-uploads/fd0b23cd-5538-486f-bb7f-8e9c67981f0d.png"
  },
  {
    region: "Pinecrest",
    description: "Full service in Pinecrest area",
    image: "/lovable-uploads/287b64e7-7ef1-4c9c-b15b-0652a8784aef.png"
  },
  {
    region: "Kendall",
    description: "Serving the Kendall community",
    image: "/lovable-uploads/b53a8a2d-ed1b-4dcf-98d7-c720fcde16dd.png"
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
