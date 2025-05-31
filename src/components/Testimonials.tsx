
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Abhijit Ghosh",
      role: "Proprietor, Rasana Caterer and Event Organizer",
      content: "Their banner designs truly reflect the spirit of our catering services. Very affordable and professional team.",
      rating: 5
    },
    {
      name: "Rittick Dutta",
      role: "Restaurant Owner, GREEN LEAF – Family Fine Dine Restaurant",
      content: "Marketing Amigo helped us improve our local brand recognition. Their campaigns brought in new customers during key festive periods.",
      rating: 5
    },
    {
      name: "Debasish Ghosh",
      role: "Co-Owner, Sunshine Creation Jewellery",
      content: "We needed clean, professional marketing without fluff, and that's exactly what Marketing Amigo delivered. Very reliable.",
      rating: 5
    },
    {
      name: "Store Manager",
      role: "Senco Gold & Diamonds (Basirhat)",
      content: "We were looking for a marketing partner who could maintain the premium image of the Senco brand while reaching local customers effectively. Marketing Amigo understood our brand positioning and delivered professional, tasteful creatives that align perfectly with our identity.",
      rating: 5
    },
    {
      name: "Owner",
      role: "Bhooter Raja Dilo Bor, Rajarhat",
      content: "Our restaurant stands out for its unique theme and Bengali culinary experience, and Marketing Amigo captured that essence beautifully through their social media strategies and banner designs. Their festive campaigns brought in great visibility and customer engagement.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-light mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real testimonials from our satisfied clients across different industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Quote className="w-8 h-8 text-primary mb-4" />
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
