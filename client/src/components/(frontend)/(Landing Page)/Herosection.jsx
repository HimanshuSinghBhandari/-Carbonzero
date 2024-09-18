import React from 'react';
import { motion } from 'framer-motion';
import NavBar from '../Navbar/navbar';
import ZigZagBackground from './zigzag-animation';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f9fd] text-zinc-700 flex flex-col relative overflow-hidden">
      <ZigZagBackground />
      <NavBar className="relative z-20" />
      <div className="flex-grow container mx-auto px-4 py-20 flex flex-col justify-center relative z-10">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            className="text-5xl font-bold mb-4"
            variants={itemVariants}
          >
            <span className="text-green-800 text-[5rem]">Quantify</span> and <span className="text-green-800 text-[5rem]">Neutralize</span>
          </motion.h1>
          <motion.h2 
            className="text-4xl font-semibold mb-8"
            variants={itemVariants}
          >
            Your Coal Mine's Carbon Footprint
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Empowering Indian coal mines with cutting-edge technology to measure, manage, and minimize environmental impact.
          </motion.p>
          <motion.div 
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-800 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:bg-green-600 transition duration-300"
            >
              Start Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-800 text-white px-8 py-3 rounded-2xl font-semibold text-lg shadow-lg hover:bg-zinc-600 transition duration-300"
            >
              Read Guidelines
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;