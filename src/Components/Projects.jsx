import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Project 1</h3>
            <p className="text-gray-300">A web app built with React.</p>
            <a href="https://github.com/yourusername/project1" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">View on GitHub</a>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Project 2</h3>
            <p className="text-gray-300">A simple game built with JavaScript.</p>
            <a href="https://github.com/yourusername/project2" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;