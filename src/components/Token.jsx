import React from 'react';
import { motion } from 'framer-motion';
import '../Token.css';
import pumpImg from '../assets/pumpfa.png';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

const pulseAnimation = {
  rest: { scale: 1, transition: { duration: 0.1, type: 'spring', stiffness: 100 } },
  hover: { scale: 1.1, transition: { duration: 0.1, type: 'spring', stiffness: 100 } }
};

const Token = () => {
  return (
    <div id='token' className='bg-gradient-to-r from-purple-500 to-indigo-500 w-full text-white p-10 rounded-lg shadow-2xl h-auto'>
      <h1 className='font-Priest text-4xl md:text-6xl text-center mb-10 text-white'>Tokenomics</h1>
      <div className="flex flex-col md:flex-row justify-around items-stretch space-y-5 md:space-y-0 md:space-x-5">
        <motion.div
          className="flex-1 p-5 bg-white rounded-lg text-center shadow-lg"
          variants={pulseAnimation}
          initial="rest"
          whileHover="hover"
        >
          <span className='font-Priest text-2xl md:text-3xl block mb-2 text-black'>Supply</span>
          <p className='font-Priest text-xl md:text-2xl text-black'>1 Billion</p>
        </motion.div>
        <motion.div
          className="flex-1 p-5 bg-white rounded-lg text-center shadow-lg"
          variants={pulseAnimation}
          initial="rest"
          whileHover="hover"
        >
          <span className='font-Priest text-2xl md:text-3xl block mb-2 text-black'>Tax</span>
          <p className='font-Priest text-xl md:text-2xl text-black'>0% Buy/sell</p>
        </motion.div>
        <motion.div
          className="flex-1 p-5 bg-white rounded-lg text-center shadow-lg"
          variants={pulseAnimation}
          initial="rest"
          whileHover="hover"
        >
          <span className='font-Priest text-2xl md:text-3xl block mb-2 text-black'>Liquidity</span>
          <p className='font-Priest text-xl md:text-2xl text-black'>100% Burn</p>
        </motion.div>
      </div>
      <div className="flex flex-col items-center mt-10">
      </div>
      <h1 className='font-Priest text-4xl md:text-9xl text-center mb-10 text-white'>$LIONEL</h1>
      <motion.div
        className="social-links   left-7 flex gap-8"
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.a 
          href="https://x.com/HaloCat_Solana" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter size={50} className='text-white'/>
        </motion.a>
        <motion.a 
          href="https://pump.fun/CiBhBScHVT7v12zBrzVk5tyDcwfS9HnQmwy8ZNUpump" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={pumpImg} alt='pumplogo' className='w-12' />
        </motion.a>
        <motion.a 
          href="https://t.me/HALOVERIFY" 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTelegram size={50} className='text-white'/>
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Token;
