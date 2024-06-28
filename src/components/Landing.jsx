import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import mainImg from '../assets/Smully/smully.png';
import dog1 from '../assets/Villy/olliys.png'; // Lägg till dina hundbilder
import gifImg from "../assets/Gremliy/GREMLIY.gif"
import object2Img from "../assets/priest/object2.png"
import object3Img from "../assets/priest/object3.png"
import backgroundVideo from '../assets/priest/bg-video.mp4'; // Importera videofilen
import doggyImg from '../assets/qusi.png'; // Importera din hundbild
import backgroundImg from '../assets/2580.jpg'; // Importera din bakgrundsbild
import '../Landing.css'; // Lägg till en CSS-fil för stilarna

const dogImages = [doggyImg]; // Array med bilder

const Landing = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleBoxes, setVisibleBoxes] = useState([false, false, false]);

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
    const order = [0, 1, 2];
    order.sort(() => Math.random() - 0.5);

    order.forEach((index, i) => {
      setTimeout(() => {
        setVisibleBoxes((prev) => {
          const newBoxes = [...prev];
          newBoxes[index] = true;
          return newBoxes;
        });
      }, i * 1000); // Small delay of 1 second between each box
    });
  }, []);

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
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundImg}
        alt="background"
      />
      {/* <div className="rain">{generateRain()}</div> */}

      <motion.h1
        className='absolute z-30 top-0 left-0 font- font-Adelia text-[8rem] xl:text-[13rem] 2xl:text-[17rem] text-blue-600 right-'
      >
        QUISI
      </motion.h1>

      <motion.img
        src={doggyImg}
        className='z-10 w-[525px] absolute top-[32%] rounded-xl'
        alt="MUM"
      />

      {visibleBoxes[0] && (
        <div className='text-red-500 z-10 absolute top-[30%] right-2 w-[35%] font-Geo text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-6xl font-bold animate-text'>
          Quisi! Just took a nap and woke up ready to pump!
        </div>
      )}

      {visibleBoxes[1] && (
        <div className='text-green-400 z-10 absolute  p-4 rounded-full top-[45%] w-[35%] left-4 font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-6xl font-bold animate-text'>
          To see the world upside down is understandable, but to see it upside down and backwards is a whole new level of understanding.
        </div>
      )}

      {visibleBoxes[2] && (
        <div className='text-orange-500 z-10 absolute  p-4 rounded-full top-[75%] left-[65%] font-Demon text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold animate-text'>
          Be smart! Buy Quisi! 
        </div>
      )}

      <motion.div
        className="social-links absolute top-10 left-[45%] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
          <motion.button
            className='font-Priest w-[30rem] bg-pink-200 hover:bg-green-300 hover:text-white text-black font-bold py-8 px-4  border-2 border-black rounded-full '
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
