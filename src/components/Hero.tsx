import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, Zap, Target, Star, Triangle, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import ContactForm from '@/components/ContactForm';

const BackgroundElement = ({ as: Component, className, ...props }) => {
  const defaultClassName = "absolute text-white/20 animate-float";
  return <Component className={`${defaultClassName} ${className}`} {...props} />;
};

const Hero = () => {
  // Array to hold background elements for easier management
  const backgroundElements = [
    { as: Sparkles, className: "w-8 h-8 top-1/4 right-1/4 animate-pulse", style: { animationDelay: '0.5s' } },
    { as: Zap, className: "w-10 h-10 bottom-1/3 left-1/3", style: { animationDelay: '1.5s' } },
    { as: Target, className: "w-6 h-6 top-1/2 right-16 animate-pulse", style: { animationDelay: '2.5s' } },
    { as: Star, className: "w-8 h-8 top-20 left-20", style: { animationDelay: '0.2s' } },
    { as: Triangle, className: "w-10 h-10 bottom-16 right-1/3 rotate-45", style: { animationDelay: '1.8s' } },
    { as: Circle, className: "w-6 h-6 top-1/3 left-16 animate-pulse", style: { animationDelay: '2.2s' } },
    { as: Sparkles, className: "w-12 h-12 bottom-20 left-32", style: { animationDelay: '3s' } },
    { as: Zap, className: "w-8 h-8 top-16 right-32", style: { animationDelay: '0.8s' } },
    { as: Target, className: "w-10 h-10 bottom-1/2 left-1/4", style: { animationDelay: '3.5s' } },
    { as: Star, className: "w-6 h-6 top-3/4 right-1/4", style: { animationDelay: '1.2s' } }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-light to-white pt-16 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-20">
        {backgroundElements.map((el, i) => (
          <BackgroundElement key={i} {...el} />
        ))}
        {/* You can still keep some of the larger geometric shapes if you like */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full animate-bounce-slow shadow-lg opacity-60"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-blue-300 to-purple-400 rounded-lg rotate-45 animate-pulse-slow shadow-lg opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-slide-in">
            Empowering Your Business
            <span className="block bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent animate-pulse">
              Online
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Your Partner in Digital Growth - We help you scale digitally with expert marketing strategies, custom websites, and e-commerce solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Let's Build Success Together
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center text-primary">Get in Touch</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white bg-white/20 hover:bg-white hover:text-primary text-lg px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://wa.me/7812010950', '_blank')}
            >
              <MessageCircle className="mr-2 w-6 h-6" size={20} />
              WhatsApp Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;