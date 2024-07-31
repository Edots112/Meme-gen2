import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import rocketImg from '../assets/Max/dog.png'; // Replace with your rocket image

const roadmapData = [
  {
    step: "LAUNCH",
    title: "BLAST OFF",
    content: "1. Fair launch on pump.fun\n2. Update CA on website\n3. Prepay DEX",
    color: "bg-blue-400"
  },
  {
    step: "ORBIT",
    title: "COMMUNITY FORMATION",
    content: "Create and share cosmic memes to build a strong community around Max.",
    color: "bg-purple-400"
  },
  {
    step: "EXPLORE",
    title: "EXPAND VISIBILITY",
    content: "Apply for DEX ads, SOL and Finder's trending on Ray for increased visibility.",
    color: "bg-pink-400"
  },
  {
    step: "COLONIZE",
    title: "GALACTIC GROWTH",
    content: "Organize interstellar raids and focus on further community expansion.",
    color: "bg-green-400"
  }
];

const StarConstellation = ({ isActive, onClick, style }) => (
  <motion.div 
    className={`cursor-pointer absolute ${isActive ? 'scale-125' : ''}`}
    style={style}
    whileHover={{ scale: 1.2 }}
    onClick={onClick}
  >
    <div className="relative">
      <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-0"></div>
      <div className="w-2 h-2 bg-white rounded-full absolute top-2 left-2"></div>
      <div className="w-2 h-2 bg-white rounded-full absolute top-0 left-4"></div>
      <div className="w-3 h-3 bg-yellow-300 rounded-full absolute top-1 left-2 animate-pulse"></div>
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
        const roadmapWidth = fullWidth * 0.8;
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
    <div className="bg-gradient-to-b from-purple-900/30 to-black p-6 md:p-10 rounded-3xl mx-4 mb-10 relative overflow-hidden font-Lon" ref={containerRef} id="roadmap">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">Roadmap</h2>

      <div className="relative mb-32 mx-auto" ref={roadmapRef}>
        <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-8" />
        <motion.div 
          className="absolute top-0 left-0"
          initial={{ x: 0 }}
          animate={{ x: `${(activeStep / (roadmapData.length - 1)) * containerWidth}px` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <img src={rocketImg} alt="Rocket" className="w-12 h-12 md:w-16 md:h-16 -mt-6 -ml-6 transform -rotate-45" />
        </motion.div>
        {roadmapData.map((item, index) => (
          <StarConstellation 
            key={index}
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
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="text-center text-white"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-3">{roadmapData[activeStep].step}: {roadmapData[activeStep].title}</h3>
          <p className="whitespace-pre-line text-sm md:text-base max-w-2xl mx-auto">{roadmapData[activeStep].content}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Roadmap;