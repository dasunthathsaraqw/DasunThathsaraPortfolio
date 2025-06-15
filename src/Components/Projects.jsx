import React, { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

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

  return (
    <section id="projects" className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-12">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">My Projects</h2>
        <div className="mb-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter('')}
            className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
              filter === '' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
            }`}
          >
            All Technologies
          </button>
          {technologies.map((tech, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(tech)}
              className={`text-xs font-medium px-3 py-1 rounded-full transition-all duration-300 ${
                filter === tech ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-orange-100'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedProjects.map((project, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-2">
                {expandedDescriptions[index]
                  ? project.description
                  : truncateDescription(project.description)}
                {project.description.length > 60 && (
                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-orange-500 hover:text-orange-600 text-sm ml-2"
                  >
                    {expandedDescriptions[index] ? 'See Less' : 'See More'}
                  </button>
                )}
              </p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-gray-700 bg-gray-200 rounded-full px-2 py-1"
                  >
                    {lang}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 mb-2">Date: {new Date(project.date).toLocaleDateString()}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-orange-500 hover:text-orange-600 text-sm transition-all duration-300 group"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/github.png"
                  alt="GitHub"
                  className="w-4 h-4 mr-1 transform group-hover:scale-110 transition-transform duration-300"
                />
                View on GitHub
              </a>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="text-orange-500 hover:text-orange-600 text-lg font-medium"
            >
              See More...
            </button>
          </div>
        )}
      </div>
      {/* Watercolor Background Effect */}
      <div className="absolute top-0 left-0 w-11/12 h-full bg-gradient-to-r from-white via-gray-200 to-white opacity-30 -z-10"></div>
    </section>
  );
};

export default Projects;