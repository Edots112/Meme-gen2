import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doggyImg from '../assets/jaxly/jaxly.png';
import small from '../assets/jaxly/jaxly.png';

import dog1 from '../assets/jaxly/topdog.png';
import dog2 from '../assets/jaxly/leftdog.png';
import dog3 from '../assets/jaxly/rightdog.png';
// import dogLeft from '../assets/jaxly/jaxly.png';

const Landing = () => {
  const [dogPosition, setDogPosition] = useState({ x: 0, y: 0 });
  const [showDog, setShowDog] = useState(false);
  const [currentDog, setCurrentDog] = useState(null);
  const [peekSide, setPeekSide] = useState('top');
  const [mainDogVisible, setMainDogVisible] = useState(true);

  const dogImages = {
    top: dog1,
    left: dog2,
    right: dog3
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const sides = ['top', 'left', 'right'];
      const randomSide = sides[Math.floor(Math.random() * sides.length)];
      let newPosition;

      switch (randomSide) {
        case 'top':
          newPosition = { 
            x: Math.random() * (window.innerWidth - 100), 
            y: -100 
          };
          break;
        case 'left':
          newPosition = { 
            x: -100, 
            y: Math.random() * (window.innerHeight - 100) 
          };
          break;
        case 'right':
          newPosition = { 
            x: window.innerWidth - 100, 
            y: Math.random() * (window.innerHeight - 100) 
          };
          break;
      }
      
      setDogPosition(newPosition);
      setCurrentDog(dogImages[randomSide]);
      setPeekSide(randomSide);
      setShowDog(true);

      console.log('dogPosition', dogPosition);
      
      
      setTimeout(() => setShowDog(false), 2500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getAnimationProps = (side) => {
    switch (side) {
      case 'top':
        return {
          initial: { y: -50, opacity: 1 },
          animate: { y: 50, opacity: 1 },
          exit: { y: -100, opacity: 1 }
        };
      case 'left':
        return {
          initial: { x: -50, opacity: 1 },
          animate: { x: 75, opacity: 1 },
          exit: { x: -100, opacity: 1 }
        };
      case 'right':
        return {
          initial: { x: 100, opacity: 1 },
          animate: { x:0, opacity: 1 },
          exit: { x: 100, opacity: 1 }
        };
    }
  };

  const generateRepeatingText = () => {
    const text = 'Jaxly ';
    const repeats = 1000;
    const colors = ['text-yellow-400', 'text-blue-500', 'text-red-500', 'text-green-500'];
    let result = [];
    
    for (let i = 0; i < repeats; i++) {
      const colorClass = colors[i % colors.length];
      result.push(<span key={i} className={colorClass}>{text}</span>);
    }
    
    return result;
  };

  const dogVariants = {
    initial: { y: 1000, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    hover: { 
      y: [-50, 0],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "reverse",
          duration: 0.1,
          ease: "easeInOut"
        }
      }
    }
  };
  return (
    <div className="relative rounded-full mb-20 flex flex-col items-center h-[90vh] overflow-hidden z-10 bg-green-200">
         <div 
        className="absolute inset-0 overflow-hidden opacity-30 text-yellow-400"
        style={{
          fontSize: '4rem',
          lineHeight: '1',
          fontFamily: 'Adelia, sans-serif',
          whiteSpace: 'wrap',
          transform: 'rotate(-45deg) translateY(-50%)',
          top: '50%',
          left: '-30%',
          right: '-50%',
          bottom: '-50%',
          width: '200%',
          height: '200%',
        }}
      >
        {generateRepeatingText()}
      </div>

      <div className='text-white z-10 absolute top-[350px] w-[50%] rounded-full p-2 left-48 text-center font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold'>
        <motion.h3 className='text-black z-10 absolute w-[70%] rounded-full p-2 left-0 text-center font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold animate-text'>
          Hello! I'm Jaxly and I'm a dog. People call me Jax, but you can call me <span className='text-yellow-500 underline animate-spin'>PUMP THIS BITCH</span>
        </motion.h3>
      </div>

     <AnimatePresence>
        {mainDogVisible && (
          <motion.img
            src={doggyImg}
            className='z-10 w-[325px] absolute bottom-[4%] right-[30%] rounded-xl cursor-pointer'
            alt="Jaxly"
            variants={dogVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            transition={{ 
              type: 'spring', 
              stiffness: 120, 
              damping: 10 
            }}
          />
        )}
      </AnimatePresence>

       <AnimatePresence>
        {showDog && currentDog && (
          <motion.img
            src={currentDog}
            className='absolute w-40 h-40 object-contain'
            style={{ 
              left: dogPosition.x, 
              top: dogPosition.y, 
            }}
            {...getAnimationProps(peekSide)}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 10,
              duration: 0.1 
            }}
          />
        )}
      </AnimatePresence>

      <motion.div
        className="social-links absolute bottom-44 left-[22%] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
          <motion.button
            className='font-Flame w-[30rem] text-black bg-white hover:bg-white hover:text-black text-White font-bold py-8 px-4 rounded-full border-2 border-black'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            BUY NOW 
          </motion.button>
        </a> */}
      </motion.div>
    </div>
  );
};

export default Landing;