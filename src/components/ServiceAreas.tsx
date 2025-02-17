
import React from 'react';
import { MapPin } from 'lucide-react';

const areas = [
  {
    region: "Homestead",
    description: "Serving the Homestead area",
    image: "https://maps.googleapis.com/maps/api/staticmap?center=Homestead,FL&zoom=13&size=800x600&maptype=roadmap&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:water%7Ccolor:0x4a90e2"
  },
  {
    region: "Cutler Bay",
    description: "Complete coverage of Cutler Bay",
    image: "https://maps.googleapis.com/maps/api/staticmap?center=Cutler+Bay,FL&zoom=13&size=800x600&maptype=roadmap&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:water%7Ccolor:0x4a90e2"
  },
  {
    region: "Palmetto Bay",
    description: "Serving Palmetto Bay residents",
    image: "https://maps.googleapis.com/maps/api/staticmap?center=Palmetto+Bay,FL&zoom=13&size=800x600&maptype=roadmap&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:water%7Ccolor:0x4a90e2"
  },
  {
    region: "Pinecrest",
    description: "Full service in Pinecrest area",
    image: "https://maps.googleapis.com/maps/api/staticmap?center=Pinecrest,FL&zoom=13&size=800x600&maptype=roadmap&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:water%7Ccolor:0x4a90e2"
  },
  {
    region: "Kendall",
    description: "Serving the Kendall community",
    image: "https://maps.googleapis.com/maps/api/staticmap?center=Kendall,FL&zoom=13&size=800x600&maptype=roadmap&style=feature:administrative%7Celement:geometry%7Cvisibility:off&style=feature:poi%7Cvisibility:off&style=feature:road%7Celement:labels.icon%7Cvisibility:off&style=feature:transit%7Cvisibility:off&style=feature:water%7Ccolor:0x4a90e2"
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
