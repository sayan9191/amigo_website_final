
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary-light to-white bg-clip-text text-transparent mb-4">
            Marketing Amigo
          </div>
          <p className="text-gray-400 mb-4">
            Empowering businesses with digital solutions that drive growth
          </p>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400 text-sm">
              © 2025 Marketing Amigo. All rights reserved. | 
              <span className="ml-1">Built with passion for digital excellence</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
