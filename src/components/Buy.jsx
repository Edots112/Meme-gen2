import React from 'react';
import { FaWallet, FaCoins, FaExchangeAlt, FaMagic, FaUsers, FaShareAlt } from 'react-icons/fa';
import '../Buy.css'; // Skapa en separat CSS-fil för anpassade stilar

const Buy = () => {
  return (
    <div id="buy" className='bg-cover bg-center py-10' >
      <h1 className="text-4xl font-bold text-center mb-10 font-Geo text-white">HOW TO BUY?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        <div className="border-2 border-white p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 bg-black bg-opacity-50 rounded-xl text-white">
          <FaWallet className="text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-Geo font-bold mb-4 text-center "> Download a Wallet</h2>
          <p className='font-Geo text-center'>We recommend using Phantom, although any wallet supporting $SOL is suitable. Desktop users can opt for the Chrome extension, while mobile users can download the respective app.</p>
        </div>
        <div className="border-2 border-white p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 bg-black bg-opacity-50 rounded-xl text-white">
          <FaCoins className="text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-Geo mb-4 text-center">Fund Your Wallet with SOL</h2>
          <p className='font-Geo text-center'>Ensure your wallet is loaded with $SOL to participate in the $SMILEO dog community. $SOL is required to acquire $SMILEO dog tokens.</p>
        </div>
        <div className="border-2 border-white p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 bg-black bg-opacity-50 rounded-xl text-white">
          <FaExchangeAlt className="text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-Geo mb-4 text-center"> SWAP SOL for SMILEO dog</h2>
          <p className='font-Geo text-center'>SWAP your $SOL into $SMILEO dog tokens at pump.fun.</p>
        </div>
        <div className="border-2 border-white p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 bg-black bg-opacity-50 rounded-xl text-white">
          <FaMagic className="text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-Geo mb-4 text-center"> Create Your SMILEO dog</h2>
          <p className='font-Geo text-center'>Utilize the SMILEO dog meme generator to forge your unique SMILEO dog.</p>
        </div>
        <div className="border-2 border-white p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 bg-black bg-opacity-50 rounded-xl text-white">
          <FaUsers className="text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-Geo mb-4 text-center"> Engage with the Community</h2>
          <p className='font-Geo text-center'>Connect with the SMILEO dog on social media platforms. Share your creations and listen out for updates and family meetings.</p>
        </div>
        <div className="border-2 border-white p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 bg-black bg-opacity-50 rounded-xl text-white">
          <FaShareAlt className="text-4xl mx-auto mb-4" />
          <h2 className="text-2xl font-Geo mb-4 text-center"> Share and Thrive</h2>
          <p className='font-Geo text-center'>Promote your SMILEO dog creation and relish the perks of being an integral part of the SMILEO dog community.</p>
        </div>
      </div>
    </div>
  );
};

export default Buy;
