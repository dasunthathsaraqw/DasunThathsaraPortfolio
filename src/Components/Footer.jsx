import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;