import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navItems = [
    { name: 'Features', path: '/features' },
    { name: 'About Us', path: '/about' },
    { name: 'FAQs', path: '/faqs' },
  ];

  return (
    <motion.nav 
      className="mx-4 my-2 mt-4 px-8 py-5 bg-green-800 rounded-xl flex items-center justify-between text-white"
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/" className="text-xl font-bold">MineNet Zero</Link>
      </motion.div>

      <ul className="flex space-x-6 text-lg">
        {navItems.map((item) => (
          <motion.li 
            key={item.name}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={item.path}>{item.name}</Link>
          </motion.li>
        ))}
      </ul>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/signup" className="bg-white text-green-800 px-4 py-2 rounded-lg">Sign Up</Link>
      </motion.div>
    </motion.nav>
  );
};

export default NavBar;