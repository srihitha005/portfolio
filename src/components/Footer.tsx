import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary-400 mb-2">Portfolio</h2>
            <p className="text-gray-400 max-w-md">
              Creating beautiful digital experiences with a focus on performance, accessibility, and user experience.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors duration-300">Projects</a>
                </li>
                <li>
                  <a href="#resume" className="text-gray-400 hover:text-white transition-colors duration-300">Resume</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://github.com/srihitha005" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/srihitha05/" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Balasankula Srihitha. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart className="text-red-500 mx-1" size={16} /> and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;