import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
// import mainImg from '../assets/Smully/smully.png';
import dog1 from '../assets/Villy/olliys.png'; // Lägg till dina hundbilder
import object1Img from "../assets/priest/object1.png"
import object2Img from "../assets/priest/object2.png"
import object3Img from "../assets/priest/object3.png"
import backgroundVideo from '../assets/priest/bg-video.mp4'; // Importera videofilen
import '../Landing.css'; // Lägg till en CSS-fil för stilarna

const dogImages = [object1Img,object2Img, object3Img ]; // Array med bilder

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
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="rain">{generateRain()}</div>

      <motion.h1
        className='absolute z-10  top-10 left-10 font-Priest text-[8rem] xl:text-[13rem]  2xl:text-[15rem] text-white  right-'
        animate={controls}
      >
        Halo Cat
      </motion.h1>

      <p className='text-white z-10 absolute top-[40%] left-10 w-[35%]  font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-6xl font-bold animate-text'>
        Preach the gospel of the Halo Cat to the world
      </p>

      {/* <motion.img
        src={catSolanaImg}
        className='z-10 w-[625px] absolute bottom-[-50px] left-[-100px]'
        alt="ARCHIE"
        animate={controls}
      /> */}
     <motion.div
        className="social-links absolute bottom-10 right-10 z-10 "
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <a href="https://pump.fun/CiBhBScHVT7v12zBrzVk5tyDcwfS9HnQmwy8ZNUpump" target="_blank" rel="noopener noreferrer">
          <motion.button
            className='font-Priest w-[30rem] bg-white hover:bg-red-600 hover:text-white text-black font-bold py-8 px-4  border-2 border-black rounded-full '
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
