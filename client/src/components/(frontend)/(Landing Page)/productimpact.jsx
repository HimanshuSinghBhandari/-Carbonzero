import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Pickaxe, Building, TrendingUp } from 'lucide-react';

const ImpactItem = ({ title, description, icon: Icon, imageUrl, progress }) => {
    const opacity = useTransform(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const x = useTransform(progress, [0, 0.2, 0.8, 1], ['100%', '0%', '0%', '-100%']);
  
    return (
      <motion.div
        style={{ opacity, x }}
        className="flex flex-col md:flex-row items-center justify-between absolute top-0 left-0 w-full h-full"
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="md:w-[28%] md:ml-[4rem] p-4">
          <img src={imageUrl} alt={title} className="w-full aspect-square object-cover rounded-lg shadow-lg" />
        </div>
        <div className="md:w-[60%] pl-8">
          <div className="flex items-center mb-6">
            <Icon className="w-12 h-12 text-green-500 mr-4" />
            <h3 className="text-[2.5rem] font-bold text-green-800">{title}</h3>
          </div>
          <p className="text-zinc-700 text-xl leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
};

const ProductImpact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });

  const items = [
    {
      title: "Empowering Coal Mines",
      description: "Provide real-time carbon insights, enabling efficient progress tracking and the opportunity to earn valuable carbon credits. Our platform revolutionizes how coal mines manage their environmental impact.",
      icon: Pickaxe,
      imageUrl: "https://thumbs2.imgbox.com/fb/f3/IOU6fKqi_t.jpg"
    },
    {
      title: "Streamlining Regulatory Compliance",
      description: "Simplify the compliance process for regulatory bodies with accurate, up-to-date emission data. Our solution ensures transparency and ease of reporting, making oversight more effective and efficient.",
      icon: Building,
      imageUrl: "https://thumbs2.imgbox.com/f9/23/hoVFeEcs_t.jpg"
    },
    {
      title: "Boosting Investor Confidence",
      description: "Offer investors and stakeholders unparalleled confidence in sustainability efforts through transparent and comprehensive reporting. Our platform provides the data needed to showcase commitment to environmental responsibility.",
      icon: TrendingUp,
      imageUrl: "https://thumbs2.imgbox.com/9f/16/ASbFoHzN_t.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-1 py-8">
      <h2 className="text-[3rem] text-green-800 font-bold text-center mt-4 ">Transforming Industries</h2>
      <div ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          {items.map((item, index) => (
            <ImpactItem
              key={index}
              {...item}
              progress={useTransform(
                scrollYProgress,
                [index / 3, (index + 1) / 3],
                [0, 1]
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImpact;