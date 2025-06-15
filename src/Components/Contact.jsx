import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg text-white">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-800 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-800 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-gray-800 rounded h-32"
          />
          <button type="submit" className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;