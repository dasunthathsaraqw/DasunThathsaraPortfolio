import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Content (Left Side) */}
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-4xl font-bold text-orange-500 mb-2">Hello, I'm</h2>
            <h1 className="text-5xl font-bold text-gray-800 mb-3">Dasun Thathsara</h1>
            <p className="text-xl text-gray-600 mb-4">Undergraduate Software Engineer | Creative Designer | Sri Lanka</p>
            <p className="text-lg text-gray-700 mb-6 max-w-md">
              I'm a software engineering student with a passion for creative design and technology. I love building clean, user-friendly digital experiences that are both functional and visually engaging.
            </p>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-4">
                <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 transition">
                  About Me
                </button>
              </div>
              <div className="flex space-x-4">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="w-7 h-7" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="w-7 h-7" />
                </a>
                <a href="mailto:example@email.com" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="Email" className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          {/* Image Content (Right Side) */}
          <div className="w-full md:w-1/2 flex justify-end relative">
            <img
              src="dizme-logo.png" // Replace with your profile image path
              alt="Dasun Thathsara"
              className="w-72 h-88 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Watercolor Background Effect */}
      <div className="absolute top-0 left-0 w-11/12 h-full bg-gradient-to-r from-white via-gray-100 to-white opacity-50 -z-10"></div>
    </section>
  );
};

export default About;