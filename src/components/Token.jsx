import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram, FaBone, FaPaw } from 'react-icons/fa';
import pumpImg from '../assets/pumpfa.png';

const TokenInfo = ({ title, value }) => (
  <motion.div
    className="bg-blue-900 rounded-full p-6 flex flex-col items-center justify-center shadow-lg"
    whileHover={{ scale: 1.05, rotate: 5 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <FaPaw className="text-yellow-400 text-4xl mb-2" />
    <h3 className="font-Priest text-2xl text-yellow-400 mb-1">{title}</h3>
    <p className="font-Priest text-xl text-white">{value}</p>
  </motion.div>
);

const Token = () => {
  return (
    <div id='token' className=' w-full text-white py-20 px-4 relative overflow-hidden'>
      <div className="container mx-auto relative z-10">
        {/* <motion.h1 
          className='font-Priest text-5xl md:text-7xl text-center mb-16 text-blue-500'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Spyly <span className="text-yellow-400">Tokenomics</span>
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <TokenInfo title="Supply" value="1 Billion" />
          <TokenInfo title="Tax" value="0% Buy/sell" />
          <TokenInfo title="Liquidity" value="100% Burn" />
        </div> */}

        <motion.div
          className="rounded-3xl bg-black/90 p-8 shadow-2xl max-w-2xl mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <h2 className='font-Priest text-6xl md:text-8xl text-center mb-6 text-white'>$HENRIE</h2>
          <p className="font-Priest text-xl text-center text-white mb-8">Join the journey and get some $HENRIE!</p>
          
          <div className="flex justify-center items-center gap-8">
            <motion.a 
              href="https://x.com/Henrie_Solana" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={40} className='text-white'/>
            </motion.a>
            <motion.a 
              href="https://pump.fun/" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: -10 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={pumpImg} alt='pumplogo' className='w-12 h-12' />
            </motion.a>
            <motion.a 
              href="https://t.me/+9LJl2fgVrxQ0N2Fk" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram size={40} className='text-white'/>
            </motion.a>
          </div>
        </motion.div>
      </div>
      

      <motion.div 
        className="absolute top-10 left-10 text-yellow-400 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaBone size={100} />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 text-yellow-400 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <FaBone size={100} />
      </motion.div>
    </div>
  );
}

export default Token;