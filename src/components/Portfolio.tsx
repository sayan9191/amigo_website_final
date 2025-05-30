
import React from 'react';
import { Building2, GraduationCap, Store, ChefHat } from 'lucide-react';

const Portfolio = () => {
  const clients = [
    {
      icon: Building2,
      title: "Local Businesses",
      description: "Helping small and medium enterprises establish their digital presence"
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Creating modern websites and digital solutions for schools and colleges"
    },
    {
      icon: Store,
      title: "Retail Stores",
      description: "Building e-commerce platforms and digital marketing strategies"
    },
    {
      icon: ChefHat,
      title: "Caterers & Service Providers",
      description: "Developing booking systems and promotional websites"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Work & Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped businesses across various industries achieve their digital goals
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">
            Clients We've Worked With
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <client.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{client.title}</h4>
                <p className="text-gray-600 text-sm">{client.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Project Showcase
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-gradient-to-r from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Project Image</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">E-commerce Store</h4>
              <p className="text-gray-600 text-sm">Complete online store with payment integration</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-gradient-to-r from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Project Image</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Business Website</h4>
              <p className="text-gray-600 text-sm">Professional corporate website with CMS</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-gradient-to-r from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Project Image</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Digital Campaign</h4>
              <p className="text-gray-600 text-sm">Social media marketing campaign success</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
