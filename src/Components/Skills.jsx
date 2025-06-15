import React from 'react';

const Skills = () => {
  const technicalSkills = ["JavaScript", "React", "Tailwind CSS", "Git & GitHub", "Node.js", "CSS", "HTML", "Firebase"];
  const leadershipSkills = ["Team Leadership", "Project Management", "Communication", "Problem Solving", "Decision Making", "Mentoring"];

  return (
    <section id="skills" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Technical Skills Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          {/* Image Content (Left Side) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <img
              src="skills-image.png" // Replace with your actual technical skills image
              alt="Technical Skills Illustration"
              className="w-56 h-56 object-cover shadow-lg rounded-lg"
            />
          </div>
          {/* Text Content (Right Side) */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Technical Skills</h2>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              Crafting modern, performant web applications with a focus on user experience and accessibility.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technicalSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-sm font-medium text-orange-700 bg-orange-100 rounded-full px-3 py-1 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/thathsarahema"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#0077B5] text-white px-2 py-1 rounded-full hover:bg-[#005A8D] hover:scale-105 transition-all duration-300 text-xs"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                  alt="LinkedIn"
                  className="w-3.5 h-3.5 mr-1"
                />
                Explore on LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Leadership Skills Section */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          {/* Image Content (Right Side) */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src="leadership-image.png" // Replace with your actual leadership skills image
              alt="Leadership Skills Illustration"
              className="w-56 h-56 object-cover shadow-lg rounded-lg"
            />
          </div>
          {/* Text Content (Left Side) */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Leadership Skills</h2>
            <p className="text-sm text-gray-600 mb-4 max-w-md">
              Guiding teams, managing projects, and fostering collaboration to achieve shared goals with efficiency.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {leadershipSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="text-sm font-medium text-orange-700 bg-orange-100 rounded-full px-3 py-1 shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/thathsarahema"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#0077B5] text-white px-2 py-1 rounded-full hover:bg-[#005A8D] hover:scale-105 transition-all duration-300 text-xs"
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                  alt="LinkedIn"
                  className="w-3.5 h-3.5 mr-1"
                />
                Explore on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Watercolor Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-gray-100 to-white opacity-50 -z-10"></div>
    </section>
  );
};

export default Skills;