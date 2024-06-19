import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import mainImg from '../assets/Smully/smully.png';
// import smallDog from '../assets/smalldog.png'; // Lägg till en liten hundbild
import '../Landing.css'; // Add a CSS file for the styles

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
    for (let i = 0; i < 50; i++) {
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 2 + 5}s`,
        animationDelay: `${Math.random() * 5}s`,
      };
      rainArray.push(<img key={i} src={mainImg} style={style} alt="small dog" />);
    }
    return rainArray;
  };

  return (
    <div id='' className="relative flex flex-col items-center h-[90vh] overflow-hidden z-10">
      <div className="parallax-background absolute top-0 left-0 w-full h-full z-0"></div>
      <div className="rain">{generateRain()}</div>

      <motion.h1
        className='absolute z-10 bottom-0 font-Dino text-[10rem] xl:text-[15rem] xl:bottom-0 2xl:text-[22rem] text-amber-800 2xl:bottom-[-50px] right-10'
        animate={controls}
      >
        Smully
      </motion.h1>

      <p className='text-amber-700 z-10 absolute w-2/4 top-[25%] left-[40%] font-Dino text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-6xl font-bold animate-text'>
        Solanas most clueless dog
      </p>

      <motion.img
        src={mainImg}
        className='z-10 w-[550px] absolute bottom-[-50px] left-0'
        alt="Smully"
		animate={controls}
      />
    </div>
  );
};

export default Landing;
