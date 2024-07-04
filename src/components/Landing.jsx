import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import mainImg from '../assets/Smully/smully.png';
import dog1 from '../assets/Villy/olliys.png'; // Lägg till dina hundbilder
import gifImg from "../assets/Gremliy/GREMLIY.gif"
import object2Img from "../assets/priest/object2.png"
import object3Img from "../assets/priest/object3.png"
import backgroundVideo from '../assets/testa.mp4'; // Importera videofilen
import doggyImg from '../assets/vikie.png'; // Importera din hundbild
import small from '../assets/smallgeggy.png'; // Importera din hundbild
import backgroundImg from '../assets/bg2.jpeg'; // Importera din bakgrundsbild
import '../Landing.css'; // Lägg till en CSS-fil för stilarna

const dogImages = [small]; // Array med bilder

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
    for (let i = 0; i < 100; i++) {
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
    <div id='' className="relative flex flex-col items-center h-[100vh] overflow-hidden z-10 bg-blue-200 ">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={backgroundImg}
        alt="background"
      />

      {/* <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      {/* <div className="rain">{generateRain()}</div> */}

      <motion.h1
        className='absolute z-30 bottom-[-50px] left-4  font- font-Adelia text-[8rem] xl:text-[10rem] 2xl:text-[20rem] text-black right-'
      >
        Vikie
      </motion.h1>

           <div className='text-black z-10 absolute bottom-[400px] rounded-full p-2 left-16 text-center font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold animate-text'>
        The most adroable cat on Solana blockchain! 
        </div>
      <motion.img
        src={doggyImg}
        className='z-10 w-[505px] absolute bottom-48 right-36   rounded-xl'
        alt="MUM"
      />

         {/* <motion.img
        src={barbImg}
        className=' w-[805px] absolute bottom-0 right-10  rounded-xl'
        alt="MUM"
      /> */}

      {/* {visibleBoxes[0] && (
        <div className='text-red-500 z-10 absolute top-[30%] right-2 w-[35%] font-Geo text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-6xl font-bold animate-text'>
          Quisi! Just took a nap and woke up ready to pump!
        </div>
      )} */}

   

      {/* {visibleBoxes[2] && (
        <div className='text-orange-500 z-10 absolute  p-4 rounded-full top-[75%] left-[65%] font-Demon text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold animate-text'>
          Be smart! Buy Quisi! 
        </div>
      )} */}

      <motion.div
        className="social-links absolute bottom-10 right-36   z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
          <motion.button
            className='font-Flame w-[30rem] text-white  bg-black hover:bg-white hover:text-black text-White font-bold py-8 px-4 rounded-full  border-2 border-black '
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
