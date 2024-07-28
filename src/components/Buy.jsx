import React from 'react';
import { FaWallet, FaCoins, FaExchangeAlt, FaMagic, FaUsers, FaShareAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Buy = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div id="buy" className=' py-20 px-4 mx-10 '>
      <div className="container mx-auto">
        <h1 className="text-7xl   p-6 font-bold text-center mb-16 font-Priest text-yellow-400">How to Buy <span className="text-blue-500">Spyly</span>?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-blue-900 p-8 shadow-lg rounded-xl text-white hover:shadow-2xl transition-shadow duration-300">
            <FaWallet className="text-5xl mx-auto mb-6 text-yellow-400" />
            <h2 className="text-2xl font-Priest font-bold mb-4 text-center">Download a Wallet</h2>
            <p className='font-Priest text-center'>We recommend using Phantom wallet. It supports $SOL and is available as a browser extension or mobile app.</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-blue-900 p-8 shadow-lg rounded-xl text-white hover:shadow-2xl transition-shadow duration-300">
            <FaCoins className="text-5xl mx-auto mb-6 text-yellow-400" />
            <h2 className="text-2xl font-Priest font-bold mb-4 text-center">Fund Your Wallet</h2>
            <p className='font-Priest text-center'>Load your wallet with $SOL. You'll need it to buy $SPY tokens and participate in our community.</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-blue-900 p-8 shadow-lg rounded-xl text-white hover:shadow-2xl transition-shadow duration-300">
            <FaExchangeAlt className="text-5xl mx-auto mb-6 text-yellow-400" />
            <h2 className="text-2xl font-Priest font-bold mb-4 text-center">Swap for $SPY</h2>
            <p className='font-Priest text-center'>Visit pump.fun to swap your $SOL for $SPY tokens. Join the pack!</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-blue-900 p-8 shadow-lg rounded-xl text-white hover:shadow-2xl transition-shadow duration-300">
            <FaMagic className="text-5xl mx-auto mb-6 text-yellow-400" />
            <h2 className="text-2xl font-Priest font-bold mb-4 text-center">Create Your Spyly</h2>
            <p className='font-Priest text-center'>Use our Spyly meme generator to create your unique Spyly character. Let your creativity run wild!</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-blue-900 p-8 shadow-lg rounded-xl text-white hover:shadow-2xl transition-shadow duration-300">
            <FaUsers className="text-5xl mx-auto mb-6 text-yellow-400" />
            <h2 className="text-2xl font-Priest font-bold mb-4 text-center">Join the Community</h2>
            <p className='font-Priest text-center'>Connect with fellow Spyly enthusiasts on our social media platforms. Stay updated and participate in events!</p>
          </motion.div>

          <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-blue-900 p-8 shadow-lg rounded-xl text-white hover:shadow-2xl transition-shadow duration-300">
            <FaShareAlt className="text-5xl mx-auto mb-6 text-yellow-400" />
            <h2 className="text-2xl font-Priest font-bold mb-4 text-center">Share and Thrive</h2>
            <p className='font-Priest text-center'>Show off your Spyly creation and enjoy being part of our vibrant community. Together, we'll make Spyly howl!</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Buy;