import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dogImg from '../assets/Max/dog.png';

const roadmapData = [
  {
    step: "STEP 01",
    title: "FAIR LAUNCH OF PUMP.FUN",
    content: "1. Fair launch on pump.fun\n2. Update CA on website\n3. Prepay DEX",
    color: "bg-red-500"
  },
  {
    step: "STEP 02",
    title: "MEME MAKING AND COMMUNITY FORMATION",
    content: "Create and share memes to build a strong community around Max.",
    color: "bg-purple-500"
  },
  {
    step: "STEP 03",
    title: "APPLY FOR DEX ADS",
    content: "Apply for DEX ads, SOL and Finder's trending on Ray for increased visibility.",
    color: "bg-green-500"
  },
  {
    step: "STEP 04",
    title: "CONSTANT RAIDS AND COMMUNITY GROWTH",
    content: "Organize constant raids and focus on further community formation and engagement.",
    color: "bg-pink-500"
  }
];

const RoadmapItem = ({ data, isActive, onClick, style }) => (
  <motion.div 
    className={`cursor-pointer absolute ${isActive ? 'scale-110' : ''}`}
    style={style}
    whileHover={{ scale: 1.1 }}
    onClick={onClick}
  >
    <div className={`w-12 h-12 md:w-16 md:h-16 ${data.color} rounded-full flex items-center justify-center mb-2`}>
      <span className="text-white font-bold text-xs md:text-sm">{data.step}</span>
    </div>
  </motion.div>
);

const Roadmap = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);
  const roadmapRef = useRef(null);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current && roadmapRef.current) {
        const fullWidth = containerRef.current.offsetWidth;
        const roadmapWidth = fullWidth * 0.7; // 70% of container width
        setContainerWidth(roadmapWidth);
        roadmapRef.current.style.width = `${roadmapWidth}px`;
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const getItemPosition = (index) => {
    const position = (index / (roadmapData.length - 1)) * 90;
    return { left: `${position}%`, transform: 'translateX(-50%)' };
  };

  return (
    <div className="bg-black/50 shadow-2xl p-4 md:p-8 rounded-3xl mx-4 mb-10 relative overflow-hidden" ref={containerRef} id="roadmap">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Roadmap</h2>

      <div className="relative mb-28 mx-auto" ref={roadmapRef}>
        <div className="h-2 bg-white rounded-full mb-8" />
        <motion.div 
          className="absolute top-0 left-0"
          initial={{ x: 0 }}
          animate={{ x: `${(activeStep / (roadmapData.length - 1)) * containerWidth}px` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img src={dogImg} alt="Max" className="w-12 h-16 md:w-28 md:h-20 rounded-full -mt-10 -ml-6 md:-ml-12" />
        </motion.div>
        {roadmapData.map((item, index) => (
          <RoadmapItem 
            key={index} 
            data={item} 
            isActive={index === activeStep}
            onClick={() => setActiveStep(index)}
            style={getItemPosition(index)}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-2">{roadmapData[activeStep].title}</h3>
          <p className="whitespace-pre-line text-sm md:text-base">{roadmapData[activeStep].content}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Roadmap;