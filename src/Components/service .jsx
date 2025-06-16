import React, { useState, useRef, useEffect } from 'react';

const Services = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef(null);
  const animationRef = useRef(null);
  const scrollPosition = useRef(0);

const qualifications = "I am an undergraduate Software Engineering student with 2 years of experience working on academic projects and as a freelancer, specializing in software and web development.";

const servicesIntro = "I offer services in software development, mobile app development, web development, social media management, and database management, tailored to meet the needs of individuals and businesses.";

  const services = [
    {
      name: "Web Development",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&crop=center",
      description: "Modern, responsive websites using the latest technologies like React, Tailwind, and Node.js.",
      whatsapp: "https://wa.me/+94775409408",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="m2 12c0 5.523 4.477 10 10 10s10-4.477 10-10-4.477-10-10-10"/>
        </svg>
      )
    },
    {
      name: "Mobile App Development",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
      description: "Cross-platform mobile apps built with Kotlin or Flutter, focused on smooth UX and performance.",
      whatsapp: "https://wa.me/+94775409408",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18"/>
        </svg>
      )
    },
    {
      name: "Social Media Management",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop&crop=center",
      description: "Boost your brand's presence through content planning, post design, and analytics tracking.",
      whatsapp: "https://wa.me/+94775409408",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    },
    {
      name: "Software Development",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop&crop=center",
      description: "Custom software solutions tailored to business needs, from desktop tools to cloud integrations.",
      whatsapp: "https://wa.me/+94775409408",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      )
    },
    {
      name: "Database Management",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center",
      description: "Efficient database design, development, and optimization using SQL, MongoDB, and Firebase.",
      whatsapp: "https://wa.me/+94775409408",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="m3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5"/>
          <path d="m3 12c0 1.657 4.03 3 9 3s9-1.343 9-3"/>
        </svg>
      )
    },
  ];

  // Create extended array for seamless scrolling
  const extendedServices = [...services, ...services, ...services];

  // Smooth auto-scroll effect
  useEffect(() => {
    const scroll = () => {
      if (!isPaused && scrollRef.current) {
        scrollPosition.current += 0.5; // Adjust speed here (lower = slower)
        const maxScroll = scrollRef.current.scrollWidth / 3; // Divide by 3 because we have 3 copies
        
        if (scrollPosition.current >= maxScroll) {
          scrollPosition.current = 0;
        }
        
        scrollRef.current.scrollLeft = scrollPosition.current;
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  // Intersection Observer for scroll animations
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
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-24 right-1/4 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      <div className="absolute top-1/4 right-1/5 w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute bottom-1/3 left-1/5 w-40 h-40 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-2xl opacity-20 animate-bounce" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
      
      <div className="absolute top-1/2 right-20 w-24 h-24 bg-orange-200 rounded-full blur-xl opacity-40 animate-ping" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-2/3 left-20 w-28 h-28 bg-orange-300 rounded-full blur-xl opacity-30 animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-orange-200 rounded-full blur-xl opacity-35 animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
    </div>
  );

  const handleCardClick = () => {
    setIsPaused(!isPaused);
  };

  const handleManualScroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = 320; // Card width + gap
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? Math.max(0, currentScroll - cardWidth)
        : currentScroll + cardWidth;
      
      scrollRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
      
      // Update our scroll position reference
      scrollPosition.current = targetScroll;
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
          {/* Control Panel */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => handleManualScroll('left')}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-200"
              aria-label="Scroll left"
            >
              <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transform group-hover:-translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-orange-200">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="group p-2 rounded-full hover:bg-orange-100 transition-all duration-300"
                aria-label={isPaused ? "Resume auto-scroll" : "Pause auto-scroll"}
              >
                {isPaused ? (
                  <svg className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-orange-600 group-hover:text-orange-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                )}
              </button>
              <span className="text-sm font-medium text-gray-700">
                {isPaused ? 'Paused' : 'Auto-scrolling'}
              </span>
            </div>
            
            <button
              onClick={() => handleManualScroll('right')}
              className="group bg-white/80 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border border-orange-200"
              aria-label="Scroll right"
            >
              <svg className="w-6 h-6 text-orange-600 group-hover:text-orange-700 transform group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Services Cards Carousel */}
          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-8 overflow-x-hidden py-4 px-4"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {extendedServices.map((service, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 text-center cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl group ${
                    hoveredCard === index ? 'ring-2 ring-orange-300' : ''
                  }`}
                  onClick={handleCardClick}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  role="button"
                  aria-label={`Learn more about ${service.name}`}
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
          
          {/* Fade edges for better visual effect */}
          <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-orange-50 to-transparent pointer-events-none z-10"></div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-orange-50/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/4 bg-gradient-to-t from-orange-50/30 to-transparent"></div>
      </div>
    </section>
  );
};

export default Services;