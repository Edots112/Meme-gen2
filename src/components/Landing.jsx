import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import mainImg from '../assets/Smully/smully.png';
import dog1 from '../assets/Villy/olliys.png'; // Lägg till dina hundbilder
import gifImg from "../assets/Gremliy/GREMLIY.gif"
import object2Img from "../assets/priest/object2.png"
import object3Img from "../assets/priest/object3.png"
import backgroundVideo from '../assets/priest/bg-video.mp4'; // Importera videofilen
import doggyImg from '../assets/Gremliy/Gremliy.png'; // Importera din hundbild
import backgroundImg from '../assets/Gremliy/background.gif'; // Importera din bakgrundsbild
import '../Landing.css'; // Lägg till en CSS-fil för stilarna

const dogImages = [doggyImg ]; // Array med bilder

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
    for (let i = 0; i < 500; i++) {
      const randomImage = dogImages[Math.floor(Math.random() * dogImages.length)];
      const style = {
        left: `${Math.random() * 100}vw`,
        animationDuration: `${Math.random() * 2 + 2.5}s`,
        animationDelay: `${Math.random() * 1}s`,
      };
      rainArray.push(<img key={i} src={randomImage} style={style} alt="small dog" />);
    }
    return rainArray;
  };

  return (
    <div id='' className="relative flex flex-col items-center h-[100vh] overflow-hidden z-10 bg-black ">
      {/* <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundImg}
        alt="background"
      /> */}
      {/* <div className="rain">{generateRain()}</div> */}

      <motion.h1
        className='absolute z-30  bottom-[-130px] font-Priest text-[8rem] xl:text-[13rem]  2xl:text-[22rem] text-[#FFF500]  right-'
        animate={controls}
      >
        MUMTY
      </motion.h1>

      <p className='text-[#FFF500] z-10 absolute top-[40%] right-10 w-[35%]  font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-6xl font-bold animate-text'>
        Don't get fouled by his looks, he can bite! 
      </p>

      <motion.img
        src={doggyImg}
        className='z-10 w-[425px] absolute bottom-[-10%] left-[10%] '
        alt="MUM"
        animate={controls}
      />

      {/* <motion.img 
        src={gifImg}
        className='z-10 absolute bottom-[-15%]'
        alt="MUM"
        animate={controls}
      /> */}
     <motion.div
        className="social-links absolute bottom-36 left-10 z-10 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
          <motion.button
            className='font-Priest w-[30rem] bg-white hover:bg-red-600 hover:text-white text-black font-bold py-8 px-4  border-2 border-black rounded-full '
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
