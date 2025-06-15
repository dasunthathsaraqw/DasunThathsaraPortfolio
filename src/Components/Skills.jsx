import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-xl text-gray-800">JavaScript</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-xl text-gray-800">React</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-xl text-gray-800">Tailwind CSS</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <p className="text-xl text-gray-800">Git & GitHub</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;