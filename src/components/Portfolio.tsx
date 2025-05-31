
import React from 'react';
import { Building2, GraduationCap, Store, ChefHat, Camera, Home } from 'lucide-react';

const Portfolio = () => {
  const industries = [
    {
      icon: GraduationCap,
      title: "Education & Coaching",
      description: "Creating modern websites and digital solutions for schools, colleges, and coaching institutes"
    },
    {
      icon: ChefHat,
      title: "Food and Restaurant",
      description: "Developing booking systems and promotional websites for restaurants and food businesses"
    },
    {
      icon: Store,
      title: "Retail & E-commerce",
      description: "Building e-commerce platforms and digital marketing strategies for retail stores"
    },
    {
      icon: Home,
      title: "Home & Services",
      description: "Digital solutions for home improvement, maintenance, and service providers"
    },
    {
      icon: Camera,
      title: "Photography & Creative",
      description: "Portfolio websites and creative marketing for photographers and artists"
    },
    {
      icon: Building2,
      title: "Local Businesses",
      description: "Helping small and medium enterprises establish their digital presence"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've helped businesses across various industries achieve their digital goals
          </p>
        </div>

        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h4>
                <p className="text-gray-600 text-sm">{industry.description}</p>
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
                <span className="text-white font-semibold">E-commerce Store</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">E-commerce Platform</h4>
              <p className="text-gray-600 text-sm">Complete online store with payment integration and inventory management</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-gradient-to-r from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Restaurant Website</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Restaurant Website</h4>
              <p className="text-gray-600 text-sm">Professional restaurant website with online menu and reservation system</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 text-center">
              <div className="w-full h-32 bg-gradient-to-r from-primary to-primary-light rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white font-semibold">Digital Campaign</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Social Media Marketing</h4>
              <p className="text-gray-600 text-sm">Comprehensive social media campaigns with increased engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
