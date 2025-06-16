import React, { useState, useEffect, useRef } from 'react';
import a1 from "./a2.jpeg";
import a2 from "./a1.jpeg";

const Skills = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const sectionRef = useRef(null);
  const techSectionRef = useRef(null);
  const leadershipSectionRef = useRef(null);

  const technicalSkills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-yellow-500" },
    { name: "React", level: 85, color: "from-blue-400 to-blue-500" },
    { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-cyan-500" },
    { name: "Git & GitHub", level: 82, color: "from-gray-400 to-gray-500" },
    { name: "Node.js", level: 75, color: "from-green-400 to-green-500" },
    { name: "CSS", level: 90, color: "from-purple-400 to-purple-500" },
    { name: "HTML", level: 95, color: "from-orange-400 to-orange-500" },
    { name: "Firebase", level: 70, color: "from-red-400 to-red-500" }
  ];

  const leadershipSkills = [
    { name: "Team Leadership", level: 85, color: "from-indigo-400 to-indigo-500" },
    { name: "Project Management", level: 80, color: "from-pink-400 to-pink-500" },
    { name: "Communication", level: 90, color: "from-teal-400 to-teal-500" },
    { name: "Problem Solving", level: 88, color: "from-amber-400 to-amber-500" },
    { name: "Decision Making", level: 82, color: "from-violet-400 to-violet-500" },
    { name: "Mentoring", level: 78, color: "from-emerald-400 to-emerald-500" }
  ];

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === techSectionRef.current) {
              setTimeout(() => setVisibleSections(prev => [...prev, 'tech']), 200);
            } else if (entry.target === leadershipSectionRef.current) {
              setTimeout(() => setVisibleSections(prev => [...prev, 'leadership']), 400);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (techSectionRef.current) observer.observe(techSectionRef.current);
    if (leadershipSectionRef.current) observer.observe(leadershipSectionRef.current);

    return () => observer.disconnect();
  }, []);

  // Animated background circles
  const BackgroundCircles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/4 -left-24 w-72 h-72 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute -bottom-20 right-1/3 w-64 h-64 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '3s'}}></div>
      
      {/* Medium floating circles */}
      <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '5s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-2xl opacity-20 animate-bounce" style={{animationDuration: '7s', animationDelay: '2s'}}></div>
      
      {/* Small floating circles */}
      <div className="absolute top-1/2 right-16 w-20 h-20 bg-orange-200 rounded-full blur-xl opacity-40 animate-ping" style={{animationDuration: '3s'}}></div>
      <div className="absolute top-3/4 left-16 w-24 h-24 bg-orange-300 rounded-full blur-xl opacity-30 animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
    </div>
  );

  const SkillBar = ({ skill, index, isVisible }) => (
    <div 
      className={`mb-4 transform transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
      onMouseEnter={() => setHoveredSkill(skill.name)}
      onMouseLeave={() => setHoveredSkill(null)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-semibold text-gray-700">{skill.name}</span>
        <span className="text-xs text-gray-500 font-medium">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden shadow-inner">
        <div
          className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform ${
            hoveredSkill === skill.name ? 'scale-y-110' : 'scale-y-100'
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 150}ms`
          }}
        />
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden min-h-screen"
    >
      <BackgroundCircles />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-orange-600 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full shadow-lg mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Combining technical excellence with leadership capabilities to drive innovation and team success
          </p>
        </div>

        {/* Technical Skills Section */}
        <div 
          ref={techSectionRef}
          className={`flex flex-col lg:flex-row items-center gap-12 mb-20 transform transition-all duration-1000 ${
            visibleSections.includes('tech') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image Content */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={a1}
                alt="Technical Skills Illustration"
                className="relative w-80 h-80 object-cover shadow-2xl rounded-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Technical Skills</h2>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Crafting modern, performant web applications with a focus on user experience and accessibility. 
                Passionate about clean code and innovative solutions.
              </p>

              <div className="mb-8">
                {technicalSkills.map((skill, idx) => (
                  <SkillBar 
                    key={idx} 
                    skill={skill} 
                    index={idx} 
                    isVisible={visibleSections.includes('tech')} 
                  />
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/thathsarahema"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-[#0077B5] to-[#005A8D] text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Explore on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Leadership Skills Section */}
        <div 
          ref={leadershipSectionRef}
          className={`flex flex-col lg:flex-row-reverse items-center gap-12 transform transition-all duration-1000 ${
            visibleSections.includes('leadership') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Image Content */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src={a2}
                alt="Leadership Skills Illustration"
                className="relative w-80 h-80 object-cover shadow-2xl rounded-2xl transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Leadership Skills</h2>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Guiding teams, managing projects, and fostering collaboration to achieve shared goals with efficiency. 
                Building bridges between vision and execution.
              </p>

              <div className="mb-8">
                {leadershipSkills.map((skill, idx) => (
                  <SkillBar 
                    key={idx} 
                    skill={skill} 
                    index={idx} 
                    isVisible={visibleSections.includes('leadership')} 
                  />
                ))}
              </div>

              <a
                href="https://www.linkedin.com/in/thathsarahema"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center bg-gradient-to-r from-[#0077B5] to-[#005A8D] text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>Explore on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-orange-50/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/4 bg-gradient-to-t from-orange-50/30 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Skills;