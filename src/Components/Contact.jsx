import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-12">Get in Touch</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg" aria-label="Contact form">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md text-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md text-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-gray-100 rounded-md text-lg text-gray-600 h-32 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            type="submit"
            className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 hover:scale-105 transition-all duration-300 text-base font-medium"
            aria-label="Send message"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Connect with Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.linkedin.com/in/thathsarahema" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
            <a href="https://github.com/dasunthathsaraqw" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
            <a href="https://wa.me/+94775409408" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <img src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png" alt="WhatsApp" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
            <a href="https://www.facebook.com/share/12LdNZc9DrK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <img src="https://img.icons8.com/ios-filled/50/000000/facebook.png" alt="Facebook" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
            <a href="https://www.tiktok.com/@dasun_thathsara_hema?_t=ZS-8xEcf0e1CTP&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <img src="https://img.icons8.com/ios-filled/50/000000/tiktok.png" alt="TikTok" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
            <a href="https://www.instagram.com/dasun.hema?igsh=MW94eWJyNjNzemgwcA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <img src="https://img.icons8.com/ios-filled/50/000000/instagram.png" alt="Instagram" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
            <a href="https://youtube.com/@thathsarahema?si=Y_RRY-ilnV55orlm" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <img src="https://img.icons8.com/ios-filled/50/000000/youtube.png" alt="YouTube" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
            <a href="https://x.com/dasunthathsara3?s=11" target="_blank" rel="noopener noreferrer" aria-label="X">
              <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="X" className="w-7 h-7 hover:opacity-80 transition" />
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-11/12 h-full bg-gradient-to-r from-white via-gray-100 to-white opacity-50 -z-10"></div>
    </section>
  );
};

export default Contact;