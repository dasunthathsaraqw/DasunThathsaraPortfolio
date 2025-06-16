import React, { useState, useEffect } from 'react';
import logo from "./logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Disable/enable body scroll when menu is open/closed
  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-br from-white/90 via-orange-50/80 to-white/95'
    } py-3 md:py-4 relative overflow-hidden`}>
      
      {/* Clean gradient overlay - no circles */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-orange-50/80 to-white/95 -z-5"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center group">
          <div className="relative">
            <img
              src={logo}
              alt="Logo"
              className="h-8 sm:h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-400/20 to-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
          </div>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-gray-600 hover:text-orange-500 focus:outline-none z-30 relative p-2 rounded-full transition-all duration-300 hover:bg-orange-50"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div className="relative w-5 h-5 sm:w-6 sm:h-6">
            <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
              isMenuOpen ? 'rotate-45 top-2 sm:top-3' : 'top-0.5 sm:top-1'
            }`}></span>
            <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 top-2 sm:top-3 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute block w-full h-0.5 bg-current transform transition-all duration-300 ${
              isMenuOpen ? '-rotate-45 top-2 sm:top-3' : 'top-3.5 sm:top-5'
            }`}></span>
          </div>
        </button>

        {/* Navigation */}
        <nav
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } md:flex flex-col md:flex-row md:space-x-8 md:static md:w-auto md:h-auto md:bg-transparent md:p-0 md:shadow-none fixed top-20 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[30rem] h-auto bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-orange-100/50`}
        >
          {[
            { href: "#about", label: "About" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#services", label: "Services" },
            { href: "#contact", label: "Contact" }
          ].map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-orange-500 relative transition-all duration-300 transform hover:scale-105 group py-3 md:py-0 font-medium animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              <span className="absolute bottom-1 md:bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300 group-hover:w-full"></span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </a>
          ))}
          
          {/* Download CV Button (Mobile) */}
          <a
            href="your-cv.pdf"
            download
            className="md:hidden group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 mt-4 text-center animate-fade-in"
            style={{ animationDelay: '500ms' }}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="relative z-10">Download CV</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </a>
        </nav>

        {/* Download CV Button (Desktop) */}
        <a
          href="your-cv.pdf"
          download
          className="hidden md:inline-block group relative px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105"
        >
          <span className="relative z-10">Download CV</span>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
        </a>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-5deg); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.05); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        
        .no-scroll {
          overflow: hidden;
        }
      `}</style>
    </header>
  );
};

export default Header;