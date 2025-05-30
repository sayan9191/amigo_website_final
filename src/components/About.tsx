
import React from 'react';
import { Target, Users, Clock, Headphones } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Target,
      title: "Customized strategies",
      description: "Tailored solutions for your unique business needs"
    },
    {
      icon: Users,
      title: "Transparent communication",
      description: "Clear, honest updates throughout your project"
    },
    {
      icon: Clock,
      title: "Timely delivery",
      description: "Meeting deadlines without compromising quality"
    },
    {
      icon: Headphones,
      title: "Ongoing support",
      description: "Continuous assistance even after project completion"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Welcome to Marketing Amigo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Marketing Amigo, we believe that digital transformation is the key to sustainable growth. With 
              a dedicated team of professionals, we provide comprehensive digital marketing, website 
              development, and e-commerce management services that help businesses thrive in a 
              competitive online landscape.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To deliver cost-effective and result-driven digital solutions tailored to every client's unique goals.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900">{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
