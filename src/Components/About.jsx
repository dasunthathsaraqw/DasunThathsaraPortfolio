import React, { useEffect, useRef } from 'react';
import dasunImage from './dasunThathsara.jpg';

const About = () => {
  const aboutRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (imageRef.current) observer.observe(imageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Background Circles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300 rounded-full opacity-20 blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-orange-400 rounded-full opacity-15 blur-2xl animate-float-delayed"></div>
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-orange-500 rounded-full opacity-25 blur-lg animate-bounce-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 bg-orange-200 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-600 rounded-full opacity-15 blur-2xl animate-float"></div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-orange-50/80 to-white/95 -z-5"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div 
            ref={textRef}
            className="w-full lg:w-1/2 text-left opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-light text-orange-500 mb-2 animate-slide-in-left">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent animate-slide-in-left delay-100">
                Dasun Thathsara
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-300 mb-6 animate-expand"></div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-6 font-light animate-fade-in delay-300">
              Undergraduate Software Engineer | Creative Designer | Sri Lanka
            </p>
            
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed animate-fade-in delay-500">
              I'm a software engineering student with a passion for creative design and technology. 
              I love building clean, user-friendly digital experiences that are both functional and visually engaging.
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in delay-700">
              <button className="group relative px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105">
                <span className="relative z-10">About Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </button>
              
              <div className="flex space-x-4">
                {[
                  { href: "https://www.linkedin.com/in/thathsarahema", icon: "linkedin", color: "hover:bg-blue-600" },
                  { href: "https://github.com/dasunthathsaraqw", icon: "github", color: "hover:bg-gray-800" },
                  { href: "mailto:thathsarahema18@email.com", icon: "email", color: "hover:bg-red-600" }
                ].map((social, index) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-110 ${social.color} hover:text-white group animate-bounce-in`}
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <img 
                      src={`https://img.icons8.com/ios-filled/24/000000/${social.icon}.png`} 
                      alt={social.icon} 
                      className="w-6 h-6 group-hover:filter group-hover:brightness-0 group-hover:invert transition-all duration-300" 
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div 
            ref={imageRef}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end opacity-0 transform translate-y-8 transition-all duration-1000"
          >
            <div className="relative group">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute -top-2 -left-2 w-full h-full bg-gradient-to-br from-orange-300 to-orange-500 rounded-2xl transform rotate-1 group-hover:rotate-3 transition-transform duration-500"></div>
              
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={dasunImage}
                  alt="Dasun Thathsara"
                  className="w-80 h-96 md:w-96 md:h-[28rem] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-orange-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-orange-300 rounded-full opacity-60 animate-bounce"></div>
            </div>
          </div>
        </div>
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
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes expand {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3) translateY(50px); }
          50% { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite; }
        .animate-bounce-slow { animation: bounce-slow 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 5s ease-in-out infinite; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out forwards; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-expand { animation: expand 1s ease-out forwards; }
        .animate-bounce-in { animation: bounce-in 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
      `}</style>
    </section>
  );
};

export default About;