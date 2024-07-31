import React from 'react';
import { motion } from 'framer-motion';
import maxImage from '../assets/Max/maxfull.png'; // Make sure to add this image to your assets folder
import backgroundImg from '../assets/Max/bg.jpg'; // Make sure to add this image to your assets folder

const About = () => {
  return (
    <div className=" p-8 font-Lon shadow-lg bg-slate-500 mx-10 mt-24 " id='about' >
        <div className="bg-black p-10 rounded-xl drop-shadow-2xl max-w-8xl mx-auto my-12">
      <motion.h1 
        className="text-6xl md:text-8xl font-bold text-white mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        HENRIE!
      </motion.h1>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between bg-black">
        <motion.div 
          className="md:w-2/3 mb-8 md:mb-0 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="sm:text-xl md:text-4xl font-semibold  p-4 rounded-lg shadow-inner text-center ">
           Henrie is not just a pet but a beloved member of the family, that wants to be at the top with his brothers and sisters. Henrie is the youngest and dreams about standing at the same marketcap as his family. Jeeters won't stop Henrie on his journey to the top. 
Will you help Henrie reunite with his family?
          </p>
        </motion.div>
        
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={maxImage} alt="HENRI" className=" shadow-lg w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;