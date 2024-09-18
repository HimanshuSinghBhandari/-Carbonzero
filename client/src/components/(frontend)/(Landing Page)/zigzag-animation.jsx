import React from 'react';
import { motion } from 'framer-motion';

const ZigZagBackground = () => {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { 
      pathLength: 1, 
      opacity: 0.2,
      transition: { 
        pathLength: {
          duration: 2,
          ease: "easeInOut",
        },
        opacity: {
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.8, 1],
          values: [0, 0.3, 0.1]
        }
      }
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 800"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M-100,200 Q360,400 720,200 T1540,200"
          stroke="#34D399"
          strokeWidth="4"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
        <motion.path
          d="M-100,400 Q360,600 720,400 T1540,400"
          stroke="#34D399"
          strokeWidth="4"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
        <motion.path
          d="M-100,600 Q360,800 720,600 T1540,600"
          stroke="#34D399"
          strokeWidth="4"
          fill="none"
          initial="hidden"
          animate="visible"
          variants={pathVariants}
        />
      </svg>
    </div>
  );
};

export default ZigZagBackground;