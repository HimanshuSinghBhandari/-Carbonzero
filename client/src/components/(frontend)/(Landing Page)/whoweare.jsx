import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const useInView = (threshold = 0.2) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, inView];
};

const FeatureItem = ({ title, description }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView(0.2);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h3 className="text-xl text-zinc-700 font-semibold mb-2">{title}</h3>
      <p className='text-md'>{description}</p>
    </motion.div>
  );
};

const HighlightedText = ({ children }) => (
  <span className="text-green-500 font-semibold">{children}</span>
);

const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#f4f9fd] relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 opacity-20"></div>
      
      <div className="md:w-1/2 z-10">
        <h2 className="text-[2.5rem] text-green-700 font-bold mb-6">Who We Are</h2>
        <FeatureItem
          title="Carbon Emission Management"
          description={
            <>
              A web-based platform that calculates, tracks, and reduces carbon emissions from{' '}
              <HighlightedText>fuel combustion</HighlightedText>,{' '}
              <HighlightedText>electricity consumption</HighlightedText>,{' '}
              <HighlightedText>methane release</HighlightedText>, and{' '}
              <HighlightedText>land disturbance</HighlightedText>.
            </>
          }
        />
        <FeatureItem
          title="Real-time Solutions"
          description={
            <>
              Includes a real-time data input,{' '}
              <HighlightedText>emission calculation engine</HighlightedText>, and{' '}
              <HighlightedText>solution recommendation engine</HighlightedText>.
            </>
          }
        />
        <FeatureItem
          title="Historical Data & Reporting"
          description={
            <>
              Users can retrieve historical data using a unique mine code,{' '}
              <HighlightedText>assess progress</HighlightedText>, and{' '}
              <HighlightedText>generate reports</HighlightedText>.
            </>
          }
        />
      </div>
      
      <div className="md:w-3/2 relative mt-8 mr-[4rem] md:mt-0">
        <img
          src="https://thumbs2.imgbox.com/cc/19/6mkHQTXp_t.jpg"
          alt="Main feature"
          className="w-full rounded-lg shadow-lg"
        />
        <img
          src="https://thumbs2.imgbox.com/7a/18/T8Cv3gnC_t.jpg"
          alt="Secondary feature"
          className="absolute -bottom-4 -right-4 w-1/2 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;