import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const projects = [
    {
      title: "Pet Care System",
      description: "A full-stack MERN application for pet healthcare management, offering features like appointment booking, digital medical records, adoption services, and lost pet reporting. Includes role-based dashboards for admins and professionals.",
      github: "https://github.com/dasunthathsaraqw/PawPal-Pet-Care-Management-System",
      languages: ["MongoDB", "Express.js", "React","Node.js","Tailwindcss"],
      date: "2025-01-10",
    },
    {
      title: "Train Ticket Booking System",
      description: "A Java-based web application for booking train tickets and managing passengers. Includes automated email confirmations and streamlined booking workflows, reducing manual processing by 40%.",
      github: "https://github.com/dasunthathsaraqw/TrainGo-Train-Ticket-Booking-System",
      languages: ["Java", "HTML", "CSS"],
      date: "2024-08-01",
    },
    {
      title: "Personal Finance Tracker",
      description: "An Android application built with Kotlin for tracking expenses and budgeting. Features interactive financial visualizations using MPAndroidChart and persistent data storage with SharedPreferences.",
      github: "https://github.com/dasunthathsaraqw/TheFinancer-Personal-Financer-Tracker-App",
      languages: ["Kotlin", "Android Studio","MPAndroidChart"],
      date: "2025-03-01",
    },
    {
      title: "Movie Ticket Booking",
      description: "An Android UI prototype for a movie ticket booking app. Designed high-fidelity wireframes in Figma and implemented responsive layouts using Kotlin and XML in Android Studio.",
      github: "https://github.com/dasunthathsaraqw",
      languages: ["Figma", "Kotlin", "XML","Firebase"],
      date: "2025-01-15",
    },
    {
      title: "DocCare Medical Appointment System",
      description: "A Java-based web application that allows patients to book doctor appointments online with automated email confirmations. Includes features for appointment scheduling and patient management.",
      github: "https://github.com/dasunthathsaraqw",
      languages: ["Java", "HTML", "CSS"],
      date: "2025-06-01",
    },
    {
      title: "Personal Portfolio",
      description: "A portfolio site showcasing my work and skills, featuring a modern design with responsive layouts and interactive elements.",
      github: "https://github.com/yourusername/portfolio",
      languages: ["HTML", "CSS", "JavaScript"],
      date: "2024-08-20",
    },
  ];

  const technologies = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "React Native",
    "Node.js",
    "Express",
    "MongoDB",
    "D3.js",
    "Firebase",
  ];

  const displayedProjects = showAll
    ? projects.filter((project) =>
        filter ? project.languages.includes(filter) : true
      )
    : projects.slice(0, 4).filter((project) =>
        filter ? project.languages.includes(filter) : true
      );

  const toggleDescription = (index) => {
    setExpandedDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateDescription = (description, maxLength = 60) => {
    if (description.length <= maxLength) return description;
    return description.slice(0, maxLength) + '...';
  };

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 100);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [displayedProjects]);

  // Animated background circles
  const BackgroundCircles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-24 left-1/4 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Medium floating circles */}
      <div className="absolute top-20 left-1/3 w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute bottom-32 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-2xl opacity-20 animate-bounce" style={{animationDuration: '8s', animationDelay: '1s'}}></div>
      
      {/* Small floating circles */}
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-orange-200 rounded-full blur-xl opacity-40 animate-ping" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-3/4 right-20 w-32 h-32 bg-orange-300 rounded-full blur-xl opacity-30 animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
    </div>
  );

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden min-h-screen"
    >
      <BackgroundCircles />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-12 transform transition-all duration-1000 ease-out">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-orange-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            My Projects
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full shadow-lg"></div>
          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover my journey through innovative solutions and creative implementations
          </p>
        </div>

        {/* Enhanced Filter Buttons */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setFilter('')}
            className={`group relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
              filter === '' 
                ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-200' 
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-orange-50 border border-gray-200'
            }`}
          >
            <span className="relative z-10">All Technologies</span>
            {filter === '' && (
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity"></div>
            )}
          </button>
          {technologies.map((tech, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(tech)}
              className={`group relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-md ${
                filter === tech 
                  ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-orange-200' 
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-orange-50 border border-gray-200'
              }`}
            >
              <span className="relative z-10">{tech}</span>
              {filter === tech && (
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity"></div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedProjects.map((project, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`group relative bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-100 hover:-translate-y-2 transform ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%)',
              }}
            >
              {/* Animated border gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"></div>
                </div>
                
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {expandedDescriptions[index]
                    ? project.description
                    : truncateDescription(project.description)}
                  {project.description.length > 60 && (
                    <button
                      onClick={() => toggleDescription(index)}
                      className="text-orange-500 hover:text-orange-600 font-medium ml-2 transition-colors duration-200"
                    >
                      {expandedDescriptions[index] ? 'See Less' : 'See More'}
                    </button>
                  )}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.languages.map((lang, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full border border-gray-200 hover:from-orange-50 hover:to-orange-100 hover:border-orange-200 transition-all duration-300 transform hover:scale-105"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500 font-medium">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full hover:from-orange-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-5 h-5 transform group-hover/link:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span className="font-medium">View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Show More Button */}
        {!showAll && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(true)}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Explore More Projects</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </div>
        )}
      </div>

      {/* Enhanced watercolor effect */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-orange-50/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-orange-50/20 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Projects;