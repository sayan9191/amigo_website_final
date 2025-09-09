
import React, { useState } from 'react';
import { Building2, GraduationCap, Store, ChefHat, Camera, Home, Palette, Image, FileImage } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string } | null>(null);

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

  const projectCategories = [
    {
      icon: Palette,
      title: "Logo Making",
      description: "Professional brand identity creation with modern design principles, color psychology, and scalable vector graphics that work across all platforms",
      skills: [
        "Brand Identity Design",
        "Vector Graphics Creation",
        "Color Psychology Application",
        "Typography Selection",
        "Scalable Design Solutions"
      ],
      projects: [
        {
          image: "/lovable-uploads/pixr_studio.png",
          title: "Pixr Studio",
          description: "Modern photography logo with camera lens and vibrant colors"
        },
        {
          image: "/lovable-uploads/5e7a846c-b127-404f-ab78-94388c2f6272.png",
          title: "Green Leaf Restaurant",
          description: "Eco-friendly restaurant logo with organic design elements"
        },
        {
          image: "/lovable-uploads/shri.png",
          title: "Shri ram Education",
          description: "Professional education institute logo with academic symbolism"
        }
      ]
    },
    {
      icon: Image,
      title: "Poster Design",
      description: "Eye-catching promotional materials that capture attention and drive engagement with strategic messaging and visual hierarchy",
      skills: [
        "Visual Hierarchy Design",
        "Strategic Messaging",
        "Color Composition",
        "Typography Layout",
        "Print & Digital Optimization"
      ],
      projects: [
        {
          image: "/lovable-uploads/d195c3df-2a08-4f78-9756-50da0866ce66.png",
          title: "Senco Gold Mother's Day",
          description: "Elegant Mother's Day promotional poster with emotional appeal"
        },
        {
          image: "/lovable-uploads/44be3f9a-b2bb-4917-bdca-dcb2d93a7ee1.png",
          title: "Arun Summer Campaign",
          description: "Vibrant summer vacation promotional poster with festive elements"
        },
        {
          image: "/lovable-uploads/e47b2e9f-bf14-4a35-bd21-06a534d3c4e0.png",
          title: "Bhooter Raja Bengali Restaurant",
          description: "Traditional Bengali restaurant poster with cultural elements and festive food presentation"
        }
      ]
    },
    {
      icon: FileImage,
      title: "Cover Photo Design",
      description: "Compelling social media covers and banners that enhance brand presence with consistent visual storytelling",
      skills: [
        "Social Media Optimization",
        "Brand Consistency",
        "Visual Storytelling",
        "Platform-Specific Sizing",
        "Engagement-Focused Design"
      ],
      projects: [
        {
          image: "/lovable-uploads/a05bc6c6-5603-414a-881b-b7c954ae0282.png",
          title: "The Creative Creation",
          description: "Creative agency cover showcasing diverse portfolio and imagination"
        },
        {
          image: "/lovable-uploads/03c1d770-0010-4625-8cec-0aed5169f326.png",
          title: "Sunshine Creation Banner",
          description: "Jewelry business banner with elegant product showcase"
        },
        {
          image: "/lovable-uploads/874625ea-165a-4787-a244-efd0a4eb4465.png",
          title: "Pet Paradise Cover",
          description: "Pet care business cover with friendly and welcoming design"
        }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Industries We Serve
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8 animate-scale-in"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            We've helped businesses across various industries achieve their digital goals
          </p>
        </div>

        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce-slow">
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{industry.title}</h4>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fade-in">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-4 animate-scale-in">
            Our Creative Showcase
          </h3>
          <p className="text-center text-gray-600 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Explore our expertise across different design categories
          </p>
          
          <div className="space-y-16">
            {projectCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="animate-fade-in"
                style={{ animationDelay: `${categoryIndex * 0.3}s` }}
              >
                <div className="flex items-center justify-center mb-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-light rounded-full flex items-center justify-center mr-4 animate-pulse-slow">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">{category.title}</h4>
                </div>
                
                <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
                  {category.description}
                </p>
                
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gradient-to-r from-primary/10 to-primary-light/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-200 animate-fade-in"
                      style={{ animationDelay: `${categoryIndex * 0.3 + skillIndex * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <Dialog key={projectIndex}>
                      <DialogTrigger asChild>
                        <div 
                          className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in bg-gradient-to-br from-gray-50 to-white cursor-pointer"
                          style={{ animationDelay: `${categoryIndex * 0.3 + projectIndex * 0.2}s` }}
                        >
                          <div className="relative overflow-hidden">
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                          
                          <div className="p-6">
                            <h5 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                              {project.title}
                            </h5>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {project.description}
                            </p>
                          </div>
                          
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                              <category.icon className="w-4 h-4 text-primary" />
                            </div>
                          </div>
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl w-[90vw] max-h-[90vh] p-0 overflow-hidden">
                        <div className="relative">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                            <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                            <p className="text-white/90 text-sm">{project.description}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
