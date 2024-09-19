import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const innovationPoints = [
  {
    title: "Localized Emission Factors",
    description: "The platform takes into account region-specific factors.",
  },
  {
    title: "Automated Regulatory Compliance Alerts",
    description: "Checks the user's emissions against current regulatory guidelines and sends alerts when thresholds are exceeded.",
  },
  {
    title: "Predictive Emission Analytics",
    description: "Utilize historical data and trends to predict future emission levels.",
  },
  {
    title: "Instant Admin Directives",
    description: "Admins can instantly create or update records or guidelines which users will receive as new notifications or entries.",
  },
  {
    title: "Instant Reports",
    description: "Generate PDF reports summarizing emissions and sustainability progress.",
  },
];

const FeatureRow = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const contentVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        height: { type: "spring", stiffness: 100, damping: 30 },
        opacity: { duration: 0.2 }
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { 
        height: { type: "spring", stiffness: 100, damping: 30 },
        opacity: { duration: 0.2 }
      }
    }
  };

  return (
    <div className="mb-4 rounded-xl overflow-hidden shadow-md bg-green-100">
      <motion.div
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleOpen}
        whileHover={{ backgroundColor: 'rgba(0, 128, 0, 0.1)' }}
      >
        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
        {isOpen ? <ChevronUp className="w-6 h-6 text-green-600" /> : <ChevronDown className="w-6 h-6 text-green-600" />}
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="p-4 bg-green-50">
              <p className="text-green-800">{description}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const InnovationShowcase = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-green-50 rounded-3xl">
      <h2 className="text-[3rem] font-bold text-zinc-600 mb-[4rem] text-center">Innovation and Uniqueness</h2>
      <div className="space-y-4">
        {innovationPoints.map((point, index) => (
          <FeatureRow key={index} title={point.title} description={point.description} />
        ))}
      </div>
    </div>
  );
};

export default InnovationShowcase;