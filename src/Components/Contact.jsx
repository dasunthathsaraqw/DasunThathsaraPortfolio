import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/thathsarahema',
      icon: 'https://img.icons8.com/ios-filled/50/0077B5/linkedin.png',
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:bg-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dasunthathsaraqw',
      icon: 'https://img.icons8.com/ios-filled/50/333333/github.png',
      color: 'from-gray-700 to-gray-800',
      hoverColor: 'hover:bg-gray-700'
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/+94775409408',
      icon: 'https://img.icons8.com/ios-filled/50/25D366/whatsapp.png',
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:bg-green-500'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/12LdNZc9DrK/?mibextid=wwXIfr',
      icon: 'https://img.icons8.com/ios-filled/50/1877F2/facebook.png',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:bg-blue-600'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@dasun_thathsara_hema?_t=ZS-8xEcf0e1CTP&_r=1',
      icon: 'https://img.icons8.com/ios-filled/50/000000/tiktok.png',
      color: 'from-pink-500 to-pink-600',
      hoverColor: 'hover:bg-pink-500'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dasun.hema?igsh=MW94eWJyNjNzemgwcA%3D%3D&utm_source=qr',
      icon: 'https://img.icons8.com/ios-filled/50/E4405F/instagram.png',
      color: 'from-pink-500 to-purple-600',
      hoverColor: 'hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600'
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@thathsarahema?si=Y_RRY-ilnV55orlm',
      icon: 'https://img.icons8.com/ios-filled/50/FF0000/youtube.png',
      color: 'from-red-500 to-red-600',
      hoverColor: 'hover:bg-red-500'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/dasunthathsara3?s=11',
      icon: 'https://img.icons8.com/ios-filled/50/000000/twitter.png',
      color: 'from-gray-800 to-black',
      hoverColor: 'hover:bg-gray-800'
    }
  ];

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === headerRef.current) {
              setTimeout(() => setVisibleSections(prev => [...prev, 'header']), 100);
            } else if (entry.target === formRef.current) {
              setTimeout(() => setVisibleSections(prev => [...prev, 'form']), 300);
            } else if (entry.target === socialRef.current) {
              setTimeout(() => setVisibleSections(prev => [...prev, 'social']), 500);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: '-50px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (formRef.current) observer.observe(formRef.current);
    if (socialRef.current) observer.observe(socialRef.current);

    return () => observer.disconnect();
  }, []);

  // Animated background circles
  const BackgroundCircles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating circles */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute top-1/4 -left-40 w-80 h-80 bg-gradient-to-br from-orange-300 to-orange-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute -bottom-32 right-1/3 w-72 h-72 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl opacity-25 animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Medium floating circles */}
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full blur-2xl opacity-30 animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-2xl opacity-20 animate-bounce" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
      
      {/* Small floating circles */}
      <div className="absolute top-1/2 right-16 w-24 h-24 bg-orange-200 rounded-full blur-xl opacity-40 animate-ping" style={{animationDuration: '4s'}}></div>
      <div className="absolute top-3/4 left-16 w-28 h-28 bg-orange-300 rounded-full blur-xl opacity-30 animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/5 w-20 h-20 bg-orange-200 rounded-full blur-xl opacity-35 animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
    </div>
  );

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-slate-50 via-white to-orange-50 relative overflow-hidden min-h-screen"
    >
      <BackgroundCircles />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Animated Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transform transition-all duration-1000 ${
            visibleSections.includes('header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-gray-700 to-orange-600 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full shadow-lg mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's connect and discuss how we can work together to achieve your goals.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Contact Form */}
          <div 
            ref={formRef}
            className={`w-full lg:w-2/3 transform transition-all duration-1000 ${
              visibleSections.includes('form') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 bg-gray-50 rounded-xl text-lg text-gray-700 border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'name' 
                        ? 'border-orange-500 bg-white shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                    required
                  />
                  {focusedField === 'name' && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 bg-gray-50 rounded-xl text-lg text-gray-700 border-2 transition-all duration-300 focus:outline-none ${
                      focusedField === 'email' 
                        ? 'border-orange-500 bg-white shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                    required
                  />
                  {focusedField === 'email' && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={6}
                    className={`w-full p-4 bg-gray-50 rounded-xl text-lg text-gray-700 border-2 transition-all duration-300 focus:outline-none resize-none ${
                      focusedField === 'message' 
                        ? 'border-orange-500 bg-white shadow-lg transform scale-105' 
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                    required
                  ></textarea>
                  {focusedField === 'message' && (
                    <div className="absolute right-3 top-4">
                      <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="group w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center justify-center"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5 mr-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Links */}
          <div className="w-full lg:w-1/3 space-y-8">
            {/* Contact Information */}
            <div 
              className={`bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 transform transition-all duration-1000 ${
                visibleSections.includes('form') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Quick Response</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                I typically respond within 24 hours. For urgent matters, feel free to contact me directly via WhatsApp.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Response time: 24 hours
                </div>
                <div className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 mr-2 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  Based in Sri Lanka
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div 
              ref={socialRef}
              className={`bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-white/50 transform transition-all duration-1000 ${
                visibleSections.includes('social') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Connect with Me</h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center p-3 bg-white rounded-xl shadow-md hover:shadow-lg transform hover:scale-110 transition-all duration-300 border border-gray-100 ${social.hoverColor}`}
                    onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <img 
                      src={social.icon} 
                      alt={social.name} 
                      className={`w-6 h-6 transition-all duration-300 ${
                        hoveredSocial === index ? 'scale-110 brightness-0 invert' : ''
                      }`} 
                    />
                    <span className="ml-2 text-xs font-medium text-gray-700 group-hover:text-white transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-orange-50/40 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/4 bg-gradient-to-t from-orange-50/30 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>
    </section>
  );
};

export default Contact;