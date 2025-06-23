import React from 'react';
import { Target, Users, Clock, Headphones, Calendar, MapPin, Briefcase, TrendingUp } from 'lucide-react';

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
      description: (
  <>
    Continuous assistance even after project completion.<br />
    May charges Applied (Terms & Condition)
  </>
)

    }
  ];

  const stats = [
    {
      icon: MapPin,
      label: "Presence",
      value: "Kolkata, North 24 PGS & other states"
    },
    {
      icon: Briefcase,
      label: "Projects Delivered",
      value: "100+"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-light rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Welcome to Marketing Amigo
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8 animate-scale-in"></div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in w-full md:w-[48%]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
              <h4 className="font-semibold text-gray-900 text-center text-sm">{stat.label}</h4>
              <p className="text-center text-primary font-bold text-lg">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At Marketing Amigo, we craft high-impact digital marketing strategies that drive engagement, 
              conversions, and brand growth. Leveraging SEO, PPC, content marketing, and social media, 
              we create data-driven, optimized campaigns designed to maximize visibility and ROI.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-primary hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="w-6 h-6 text-primary mr-2" />
                Our Mission
              </h3>
              <p className="text-gray-700">
                To deliver cost-effective and result-driven digital solutions tailored to every client's unique goals. 
                Let's turn your brand into a market leader!
              </p>
            </div>

            <div className="mt-6 bg-gradient-to-r from-primary to-primary-light p-6 rounded-lg text-white">
              <h3 className="text-xl font-semibold mb-3">Core Services</h3>
              <p className="text-sm opacity-90">
                Digital Marketing Services, Website Development & Management, Branding, Graphics Design, 
                Lead Generation, Business Growth Services, Local Business Promotion
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 animate-fade-in">Why Choose Us</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1 + 0.5}s` }}>
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 transform hover:scale-110 transition-transform duration-300">
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