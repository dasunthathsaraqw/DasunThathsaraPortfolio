import React from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Your Name</h1>
        <nav className="space-x-6">
          <Link to="about" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">About</Link>
          <Link to="projects" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">Projects</Link>
          <Link to="skills" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">Skills</Link>
          <Link to="contact" smooth={true} duration={500} className="text-gray-600 hover:text-gray-900 cursor-pointer">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;