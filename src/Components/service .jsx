import React, { useState, useRef, useEffect } from 'react';
import i1 from "./i1.jpeg"
import i2 from "./i2.jpeg"
import i3 from "./i3.jpeg"
import i4 from "./i4.jpeg"
import i5 from "./i5.jpeg"
import i6 from "./i6.jpeg"
import i7 from "./i7.jpeg"
import i8 from "./i8.jpeg"

const Services = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);

  const qualifications = "I hold a degree in Computer Science and have over 5 years of experience in web development and team leadership, certified in Full Stack Development and Project Management.";
  const servicesIntro = "I offer tailored web development, team leadership training, and project management solutions to help businesses and individuals achieve their goals efficiently.";

  const services = [
    {
      name: "Web Development",
      image: i1,
      description: "Modern, responsive websites using the latest technologies like React, Tailwind, and Node.js.",
      whatsapp: "https://wa.me/+94775409408",
      icon: "🌐"
    },
    {
      name: "Mobile App Development",
      image: i2,
      description: "Cross-platform mobile apps built with Kotlin or Flutter, focused on smooth UX and performance.",
      whatsapp: "https://wa.me/+94775409408",
      icon: "📱"
    },
    {
      name: "Social Media Management",
      image: i3,
      description: "Boost your brand's presence through content planning, post design, and analytics tracking.",
      whatsapp: "https://wa.me/+94775409408",
      icon: "📊"
    },
    {
      name: "Software Development",
      image: i4,
      description: "Custom software solutions tailored to business needs, from desktop tools to cloud integrations.",
      whatsapp: "https://wa.me/+94775409408",
      icon: "💻"
    },
    {
      name: "Database Management",
      image: i5,
      description: "Efficient database design, development, and optimization using SQL, MongoDB, and Firebase.",
      whatsapp: "https://wa.me/+94775409408",
      icon: "🗄️"
    },
  ];

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setTimeout(() => setVisibleSections(prev => [...prev, 'header']), 100);
            } else if (entry.target === cardsRef.current) {
              setTimeout(() => setVisibleSections(prev => [...prev, 'cards']), 300);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (cardsRef.current) observer.observe(cardsRef.current);

    return () => observer.disconnect();
  }, []);

  // Animated background circles
  const BackgroundCircles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Medium floating circles */}
      <div className="absolute top-1/4 right-1/5 w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-2xl opacity-20 animate-bounce" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
      
      {/* Small floating circles */}
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-orange-200 rounded-full blur-xl opacity-40 animate-ping" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-2/3 left-20 w-28 h-28 bg-orange-300 rounded-full blur-xl opacity-30 animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-orange-200 rounded-full blur-xl opacity-35 animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
    </div>
  );

  const handleCardClick = () => {
    setIsPaused(!isPaused);
  };

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden min-h-screen"
    >
      <BackgroundCircles />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Animated Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-orange-600 bg-clip-text text-transparent mb-4">
            My Services
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full shadow-lg mb-6"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 mb-4">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Professional Qualifications</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{qualifications}</p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center justify-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">What I Offer</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{servicesIntro}</p>
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div 
          ref={cardsRef}
          className={`relative transform transition-all duration-1000 ${
            visibleSections.includes('cards') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Scroll Controls */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => handleScroll('left')}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-200"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transform group-hover:-translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-200"
              aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
            >
              {isPaused ? (
                <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => handleScroll('right')}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-200"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Services Cards Carousel */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-auto scrollbar-hidden snap-x snap-mandatory py-4 px-4"
              style={{ 
                animation: isPaused ? 'none' : 'scroll-right 30s linear infinite',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {services.concat(services).map((service, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 text-center cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl snap-center group ${
                    hoveredCard === index ? 'ring-2 ring-orange-300' : ''
                  }`}
                  onClick={handleCardClick}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  role="button"
                  aria-label={`Pause or resume scrolling for ${service.name}`}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
                >
                  {/* Service Icon */}
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                  
                  <div className="relative mb-4 overflow-hidden rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <img
                      src={service.image}
                      alt={`${service.name} Illustration`}
                      className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <a
                    href={service.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg className="w-5 h-5 mr-2 transform group-hover/btn:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                    </svg>
                    <span>Contact via WhatsApp</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-orange-50/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/4 bg-gradient-to-t from-orange-50/30 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .snap-x {
          scroll-snap-type: x mandatory;
        }
        
        .snap-center {
          scroll-snap-align: center;
        }
      `}</style>
    </section>
  );
};

export default Services;