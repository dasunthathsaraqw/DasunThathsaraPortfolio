import React from 'react';

const Header = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:text-gray-300">About</a>
          <a href="#projects" className="hover:text-gray-300">Projects</a>
          <a href="#skills" className="hover:text-gray-300">Skills</a>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;