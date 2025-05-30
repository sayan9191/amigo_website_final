
import React from 'react';

const ClientLogos = () => {
  // Client logos from the uploaded image
  const clientLogos = [
    { name: "Gold Mark", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" },
    { name: "Web Infozen", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" },
    { name: "Pet Paradise", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" },
    { name: "Green Leaf Restaurant", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" },
    { name: "Royal Academy", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" },
    { name: "Knowledge Hub", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" },
    { name: "Canvas Theory", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" },
    { name: "ZYMT English", image: "/lovable-uploads/6c85163d-7159-441e-9d11-d60489245291.png" }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">
            Our Happy Clients
          </h2>
          <p className="text-lg text-white/90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Trusted by businesses across various industries
          </p>
        </div>

        {/* Moving logos container */}
        <div className="relative">
          <div className="flex animate-scroll-left space-x-8">
            {/* First set of logos */}
            {clientLogos.map((client, index) => (
              <div 
                key={`first-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-600 text-center font-medium">{client.name}</span>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {clientLogos.map((client, index) => (
              <div 
                key={`second-${index}`}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
              >
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-xs text-gray-600 text-center font-medium">{client.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid md:grid-cols-3 gap-8 text-white">
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold">12+</h3>
              <p className="text-white/90">Projects Delivered</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-2xl font-bold">5+</h3>
              <p className="text-white/90">Team Members</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <h3 className="text-2xl font-bold">3x</h3>
              <p className="text-white/90">More Productive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
