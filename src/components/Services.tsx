
import React from 'react';
import { Megaphone, Globe, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "Grow your online presence with our targeted marketing services",
      features: [
        "Social Media Management",
        "Google Ads & Pay-Per-Click Campaigns",
        "SEO (Search Engine Optimization)",
        "Brand Promotion",
        "Content Creation"
      ]
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "We build professional, mobile-responsive websites designed to convert",
      features: [
        "Static & Dynamic Websites",
        "Business & Portfolio Websites",
        "CMS Integration",
        "Domain and Hosting Support",
        "Maintenance & Security"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Management",
      description: "We help you build, run, and grow your online store",
      features: [
        "E-commerce Website Setup",
        "Product Listing & Inventory Management",
        "Payment Gateway Integration",
        "Order & Delivery Workflow Setup",
        "Monthly Maintenance & Reporting"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the online world
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
