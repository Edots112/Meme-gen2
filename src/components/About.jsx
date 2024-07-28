import React from 'react';
import { motion } from 'framer-motion';
import maxImage from '../assets/Max/maxfull.png'; // Make sure to add this image to your assets folder
import backgroundImg from '../assets/Max/bg.png'; // Make sure to add this image to your assets folder

const About = () => {
  return (
    <div className=" p-8  shadow-lg bg-yellow-400 mx-10 mt-24 " >
        <div className="bg-blue-400 p-10 rounded-xl drop-shadow-2xl max-w-8xl mx-auto my-12">
      <motion.h1 
        className="text-6xl md:text-8xl font-bold text-yellow-400 mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MAX, THE GOLDEN PUPPER
      </motion.h1>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between bg-black">
        <motion.div 
          className="md:w-2/3 mb-8 md:mb-0 md:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xl md:text-6xl font-semibold  p-4 rounded-lg shadow-inner text-center ">
            MAX ISN'T JUST A PUP.... HE'S A BEACON OF HAPPINESS AND A REMINDER THAT EVEN IN THE WORLD OF JEETING DEGENERATES, THERE'S ALWAYS ROOM FOR A LITTLE CANINE CHARM. WILL THIS GOLDEN PUPPY BE YOUR GOLDEN TICKET?
          </p>
        </motion.div>
        
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <img src={maxImage} alt="Max the Golden Pupper" className=" shadow-lg w-full" />
        </motion.div>
      </div>
    </div>
  );
};

export default About;