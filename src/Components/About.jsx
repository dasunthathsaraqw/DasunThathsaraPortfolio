import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <img
          src="your-profile-image.jpg" // Replace with your image path
          alt="Your Name"
          className="w-40 h-40 rounded-full mx-auto mb-6 object-cover shadow-lg"
        />
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Hey, This is Your Name</h2>
        <p className="text-xl text-gray-600 mb-6">an Interactive Web Developer</p>
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">Learn More</button>
        <p className="text-lg text-gray-700 mt-6">
          I'm an undergraduate software engineer passionate about building web applications. I love learning new technologies like React and Tailwind CSS. My goal is to create user-friendly and impactful software solutions.
        </p>
      </div>
    </section>
  );
};

export default About;