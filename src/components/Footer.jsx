import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="https://github.com/linaabuelezz" target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/lina-abuelezz-a92a10299/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/linaabuelezz/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6" />
          </a>
          <a href="mailto:labuelez@uoguelph.ca" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="h-6 w-6" />
          </a>
        </div>
        <div className="text-sm">
          &copy; 2024 Lina Abu Elezz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
