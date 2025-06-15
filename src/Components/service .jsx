import React, { useState, useRef } from 'react';

const Services = () => {
  const qualifications = "I hold a degree in Computer Science and have over 5 years of experience in web development and team leadership, certified in Full Stack Development and Project Management.";
  const servicesIntro = "I offer tailored web development, team leadership training, and project management solutions to help businesses and individuals achieve their goals efficiently.";
  const services = [
    {
      name: "Web Development",
      image: "web-dev-image.png",
      description: "Custom websites with modern designs, responsive layouts, and seamless functionality.",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      name: "Leadership Training - Team Building",
      image: "leadership-training-image.png",
      description: "Workshops focused on fostering team cohesion and collaborative skills.",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      name: "Leadership Training - Communication",
      image: "leadership-training-image.png",
      description: "Training to enhance effective communication and conflict resolution.",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      name: "Leadership Training - Strategic Leadership",
      image: "leadership-training-image.png",
      description: "Programs to develop strategic thinking and leadership vision.",
      whatsapp: "https://wa.me/1234567890",
    },
    {
      name: "Project Management",
      image: "project-management-image.png",
      description: "End-to-end project planning, execution, and delivery for optimal results.",
      whatsapp: "https://wa.me/1234567890",
    },
  ];

  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

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
    <section id="services" className="py-16 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
          poster="fallback-image.png" // Replace with actual fallback image
        >
          <source src="background-video.mp4" type="video/mp4" /> {/* Replace with actual video path */}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">My Services</h2>
        <div className="mb-8 text-center max-w-md mx-auto">
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">{qualifications}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{servicesIntro}</p>
        </div>
        <div className="relative">
          <div
            className="absolute top-0 left-0 w-16 md:w-24 h-full bg-gradient-to-r from-white to-transparent z-10 flex items-center justify-start"
            onMouseEnter={() => handleScroll('left')}
            role="button"
            aria-label="Scroll left"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleScroll('left')}
          >
            <svg className="w-8 h-8 text-gray-600 opacity-50 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div
            className="absolute top-0 right-0 w-16 md:w-24 h-full bg-gradient-to-l from-white to-transparent z-10 flex items-center justify-end"
            onMouseEnter={() => handleScroll('right')}
            role="button"
            aria-label="Scroll right"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleScroll('right')}
          >
            <svg className="w-8 h-8 text-gray-600 opacity-50 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hidden snap-x snap-mandatory py-4"
            style={{ animation: isPaused ? 'none' : 'scroll-right 25s linear infinite' }}
          >
            {services.concat(services).map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 bg-white p-4 rounded-xl shadow-lg text-center cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl snap-center"
                onClick={handleCardClick}
                role="button"
                aria-label={`Pause or resume scrolling for ${service.name}`}
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
              >
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{service.name}</h3>
                <img
                  src={service.image}
                  alt={`${service.name} Illustration`}
                  className="w-32 h-32 mx-auto object-cover mb-2 rounded-md"
                />
                <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                <a
                  href={service.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-[#25D366] text-white px-2 py-1 rounded-full hover:bg-[#128C7E] hover:scale-105 transition-all duration-300 text-xs font-medium"
                >
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                    alt="WhatsApp"
                    className="w-3.5 h-3.5 mr-1"
                  />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-gray-100 to-white opacity-50 -z-10"></div>
      <style>
        {`
          @keyframes scroll-right {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
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
        `}
      </style>
    </section>
  );
};

export default Services;