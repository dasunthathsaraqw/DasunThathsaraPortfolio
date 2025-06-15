import React, { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState('');
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const projects = [
    {
      title: "E-Commerce Web App",
      description: "A responsive e-commerce platform with cart functionality, user authentication, and payment integration for seamless online shopping experiences.",
      github: "https://github.com/yourusername/ecommerce-app",
      languages: ["React", "Node.js", "CSS"],
      date: "2024-12-15",
    },
    {
      title: "Snake Game",
      description: "A classic Snake game with score tracking, smooth animations, and customizable difficulty levels for an engaging user experience.",
      github: "https://github.com/yourusername/snake-game",
      languages: ["JavaScript", "HTML", "CSS"],
      date: "2024-10-10",
    },
    {
      title: "Personal Portfolio",
      description: "A portfolio site showcasing my work and skills, featuring a modern design with responsive layouts and interactive elements.",
      github: "https://github.com/yourusername/portfolio",
      languages: ["HTML", "CSS", "JavaScript"],
      date: "2024-08-20",
    },
    {
      title: "Mobile Task Manager",
      description: "A task management app for mobile devices, allowing users to organize tasks, set reminders, and sync data across devices using Firebase.",
      github: "https://github.com/yourusername/task-manager",
      languages: ["React Native", "Firebase"],
      date: "2025-03-01",
    },
    {
      title: "RESTful API Server",
      description: "A backend API for user authentication and data management, built with Node.js and Express, featuring secure endpoints and MongoDB integration.",
      github: "https://github.com/yourusername/rest-api",
      languages: ["Node.js", "Express", "MongoDB"],
      date: "2025-01-15",
    },
    {
      title: "Data Dashboard",
      description: "Interactive data visualization tool for analytics, built with D3.js and React, offering dynamic charts and real-time data updates.",
      github: "https://github.com/yourusername/data-dashboard",
      languages: ["D3.js", "React", "CSS"],
      date: "2025-06-01",
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