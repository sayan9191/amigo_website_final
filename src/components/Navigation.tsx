import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import ContactForm from '@/components/ContactForm';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    {
      name: 'Career',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=marketingamigo.contact@gmail.com',
    },
    { name: 'Contact Us', href: '#contact' },
  ];

  // Helper to decide if link should open in new tab
  const isExternal = (href: string) =>
    href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      {/* Top Info Bar */}
      <div className="bg-primary text-white text-xs sm:text-sm py-1 px-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="font-semibold mb-1 sm:mb-0">MSME &amp; ISO Certified Company</div>
        <div className="text-center sm:text-right text-[13px]">
          CALL US:{' '}
          <a href="tel:7812010950" className="underline-offset-2 hover:underline">
            7812010950
          </a>
          , EMAIL US:{' '}
          <a
            href="mailto:marketingamigo.contact@gmail.com"
            className="underline-offset-2 hover:underline"
          >
            marketingamigo.contact@gmail.com
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* use min-h so row can grow slightly with the logo; py-2 gives breathing room */}
        <div className="flex justify-between items-center min-h-16 py-2">
          {/* Brand */}
          <div className="flex items-center">
            <div className="relative inline-block mr-3 shrink-0">
              <img
                src="/lovable-uploads/eb0797fc-2ed6-4d04-ab2b-474629c1ebc0.png"
                alt="Marketing Amigo"
                className="h-8 sm:h-9 md:h-10 lg:h-12 w-auto"
              />
              <span className="absolute top-1 right-1 text-[10px] text-gray-700 font-bold">™</span>
            </div>

            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent leading-tight">
                Marketing Amigo
              </div>
              <p className="text-xs text-gray-600">MSME &amp; ISO Certified</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  target={isExternal(item.href) ? '_blank' : '_self'}
                  rel={isExternal(item.href) ? 'noopener noreferrer' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary">
                  Get in Touch
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center text-primary">Get in Touch</DialogTitle>
                </DialogHeader>
                <ContactForm />
              </DialogContent>
            </Dialog>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen((s) => !s)}
              className="text-gray-700 hover:text-primary"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
                target={isExternal(item.href) ? '_blank' : '_self'}
                rel={isExternal(item.href) ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-gradient-to-r from-primary to-primary-light">
                    Get in Touch
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-2xl text-center text-primary">Get in Touch</DialogTitle>
                  </DialogHeader>
                  <ContactForm />
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
