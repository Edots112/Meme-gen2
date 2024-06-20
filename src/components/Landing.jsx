import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import mainImg from '../assets/Smully/smully.png';
import dog1 from '../assets/Solana/drink.png'; // Lägg till dina hundbilder
import dog2 from '../assets/Solana/sun.png';
import dog3 from '../assets/Solana/palm.png';
import catSolanaImg from '../assets/Solana/catSolana.png';
import '../Landing.css'; // Add a CSS file for the styles

const dogImages = [ dog1, dog2, dog3,]; // Array med bilder

const Landing = () => {
  const controls = useAnimation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      y: scrollY / 2, // Justera för att skapa en parallax-effekt
      transition: { type: 'spring', stiffness: 100 },
    });
  }, [scrollY, controls]);

  // Funktion för att generera regnande hundar
  const generateRain = () => {
    const rainArray = [];
    for (let i = 0; i < 100; i++) {
      const randomImage = dogImages[Math.floor(Math.random() * dogImages.length)];
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 2 + 5}s`,
        animationDelay: `${Math.random() * 2}s`,
      };
      rainArray.push(<img key={i} src={randomImage} style={style} alt="small dog" />);
    }
    return rainArray;
  };

  return (
    <div id='' className="relative flex flex-col items-center h-[100vh] overflow-hidden z-10 ">
      <div className="parallax-background absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="rain">{generateRain()}</div>

      <motion.h1
        className='absolute z-10 bottom-0 font-Adelia text-[10rem] xl:text-[15rem] xl:bottom-0 2xl:text-[18rem] text-purple-400  right-'
        animate={controls}
      >
        JUNO
      </motion.h1>

      <p className='text-purple-400 z-10 absolute top-[35%]  font-Adelia text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-6xl font-bold animate-text'>
        Juno Is ready for Solana Summer
      </p>

      <motion.img
        src={catSolanaImg}
        className='z-10 w-[425px] absolute bottom-[-80px] right-0'
        alt="Smully"
        animate={controls}
      />
     <motion.div
        className="social-links absolute top-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <a href="https://pump.fun/board" target="_blank" rel="noopener noreferrer">
          <motion.button
            className='font-Dino w-64 bg-green-500 hover:bg-purple-700 text-white font-bold py-8 px-4 rounded border-2 border-purple-500 font-Adelia'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            BUY NOW 
          </motion.button>
        </a>
      </motion.div>
    </div>
  );
};

export default Landing;
