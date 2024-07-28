import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import doggyImg from '../assets/Max/dog.png';
import backgroundImg from '../assets/Max/bg.png'; // Import your background image
import headImg from '../assets/Max/head.png'; // Import your head image
import { FaTwitter, FaTelegram } from 'react-icons/fa';

const Landing = () => {
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
    <div 
      className="relative rounded-xl  flex flex-col items-center h-[90vh] overflow-hidden z-10"
    >
      {/* <div className='text-white z-10 absolute top-[350px] w-[50%] rounded-full p-2 left-48 text-center font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold'>
        <motion.h3 className='text-black z-10 absolute w-[70%] rounded-full p-2 left-0 text-center font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold animate-text'>
          Hello! I'm Spyly and I'm a dog. You can call me SPY! Cause I'm a spy dog. 
        </motion.h3>
      </div> */}

      <AnimatePresence>
        <motion.img
          src={headImg}
          className='z-10  absolute sm:left-[-100px] top-32 sm:top-12 rounded-xl   cursor-pointer 2xl:w-[1250px] md:w-[1000px]'
          alt="Max"
          transition={{ 
            type: 'spring', 
            stiffness: 120, 
            damping: 10 
          }}
        />
      </AnimatePresence>

      <AnimatePresence>
        <motion.img
          src={doggyImg}
          className='z-10 2xl:w-[525px] 2xl:top-10 xl:right-32 w-[300px] absolute bottom-24 sm:bottom-0 right-32 rounded-xl cursor-pointer'
          alt="Max"
          initial="initial"
          animate="animate"
          variants={dogVariants}
          whileHover="hover"
          transition={{ 
            type: 'spring', 
            stiffness: 120, 
            damping: 10 
          }}
        />
      </AnimatePresence>

      <motion.div
        className="social-links absolute bottom-44 left-[22%] z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Social links or other content can be added here */}
      </motion.div>
      


         <div className="flex flex-col sm:hidden items-center justify-between w-full px-4 py-2 bg-gray-800 fixed top-0 left-0 z-20">
        <div className="flex items-center space-x-2 mb-2">
          <motion.a 
            href="https://x.com/MaxOnSolan" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-black p-2 rounded-full"
          >
            <FaTwitter size={30} className='text-white' />
          </motion.a> 
          <motion.a 
            href="https://t.me/+fFU5cQ34Pb44ZjEx" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-200 p-2 rounded-full"
          >
            <FaTelegram size={30} className='text-white' />
          </motion.a> 
        </div>
        <motion.a 
          href="https://pump.fun/AeM2PqV6n4Jn3otRPenutWbfXfz6xtAME6URzCLppump"
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-400 font-Lon text-black font-bold py-2 px-4 rounded-full text-sm"
        >
          BUY NOW
        </motion.a>
      </div>

      {/* Desktop layout */}
      <div className="hidden sm:block">
        <div className="flex items-center space-x-4 absolute bottom-24 left-5 bg-black p-5 rounded-2xl">
          <motion.a 
            href="https://x.com/MaxOnSolan" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTwitter size={125} className='text-white' />
          </motion.a> 
        </div>

        <div className="flex items-center space-x-4 absolute bottom-24 left-48 bg-blue-200 p-5 rounded-2xl">
          <motion.a 
            href="https://t.me/+fFU5cQ34Pb44ZjEx" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaTelegram size={125} className='text-white' />
          </motion.a> 
        </div>
        
        <div className="flex items-center absolute bottom-24 left-[25rem] p-5 rounded-2xl">
          <motion.a 
            href="https://pump.fun/AeM2PqV6n4Jn3otRPenutWbfXfz6xtAME6URzCLppump"
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-yellow-400 font-Lon text-black font-bold py-10 w-80 text-center rounded-full text-3xl"
          >
            BUY NOW
          </motion.a> 
        </div>
      </div>

      <h3 className='text-white z-10 absolute left-6 bottom-6 w-full font-Priest text-[1.5rem] md:text-[3.5rem] lg:text-5xl 2xl:text-5xl font-bold'>
        CA: AeM2PqV6n4Jn3otRPenutWbfXfz6xtAME6URzCLppump
      </h3>
    </div>
  );
};

export default Landing;