import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-green-100 py-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="text-lg font-semibold">Carbon Zone</div>
        <div className="text-md">Created by Quantum Coders</div>
        <div className="text-md">&copy; {new Date().getFullYear()} All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;