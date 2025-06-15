import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Disable/enable body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // Cleanup on component unmount or menu close
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  return (
    <header className="bg-white shadow-md py-4 relative overflow-hidden">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="dizme-logo.png" // Replace with your logo path or use text as a placeholder
            alt="Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="md:hidden text-gray-600 focus:outline-none z-30"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation (Desktop: Horizontal, Mobile: Content-sized) */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-6 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none fixed top-16 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[80rem] h-auto bg-white p-4 shadow-md z-20 overflow-y-auto md:overflow-visible`}
        >
          <a
            href="#home"
            className="text-gray-600 hover:text-orange-500 relative transition duration-300 transform hover:scale-110 group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#portfolio"
            className="text-gray-600 hover:text-orange-500 relative transition duration-300 transform hover:scale-110 group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Portfolio
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#service"
            className="text-gray-600 hover:text-orange-500 relative transition duration-300 transform hover:scale-110 group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Service
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#blog"
            className="text-gray-600 hover:text-orange-500 relative transition duration-300 transform hover:scale-110 group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-orange-500 relative transition duration-300 transform hover:scale-110 group py-2 md:py-0"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          {/* Download CV Button (Inside Mobile Menu) */}
          <a
            href="your-cv.pdf" // Replace with your CV file path or link
            download
            className="md:hidden block text-center text-orange-500 border-2 border-orange-500 px-6 py-2 rounded-full transition duration-300 transform hover:scale-105 mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Download CV
          </a>
        </nav>

        {/* Download CV Button (Desktop Only) */}
        <a
          href="your-cv.pdf" // Replace with your CV file path or link
          download
          className="hidden md:inline-block relative text-orange-500 border-2 border-orange-500 px-6 py-2 rounded-full transition duration-300 transform hover:scale-105"
        >
          Download CV
        </a>
      </div>

      {/* Background Splash Effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-white via-gray-100 to-white opacity-50 -z-10"></div>
    </header>
  );
};

export default Header;