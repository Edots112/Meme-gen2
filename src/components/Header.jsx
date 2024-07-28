import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaTelegram } from 'react-icons/fa';
import doggyImg2 from '../assets/jaxly/head.png';
import solImg from '../assets/Max/sol.png';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrolled = currentScrollPos > 0;
    const isHidden = prevScrollPos < currentScrollPos && currentScrollPos > 100;

    setScrolled(isScrolled);
    setHidden(isHidden);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const handleLinkClick = () => {
    setHidden(true);
  };

  return (
    <div className="w-full">
      <nav className={`fixed z-50 w-full transition-all duration-300 ${scrolled ? 'bg-transparent' : 'bg-transparent'} ${hidden ? '-top-40' : 'top-6'}`}>
        <div className=" mx-auto px-4 py-2 flex justify-center items-center relative h-24">
          {/* Logo in the left corner */}
          {/* <motion.a 
            href="/"
            className="absolute left-10 top-0 "
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={doggyImg2}
              alt="logo"
              className="w-32 h-32"
            />
          </motion.a> */}

          {/* Centered Navigation items */}
          <div className="bg-green-500 bg-opacity-90 rounded-full px-10 py-5">
            <ul className="flex space-x-10 font-Geo text-blue-700">
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}
              >
                <a className="text-lg font-bold" href="#meme-gen">Make Meme</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}
              >
                <a className="text-lg font-bold" href="#buy">How to buy?</a>
              </motion.li>
              <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}
              >
                <a className="text-lg font-bold" href="#token">Tokenomics</a>
              </motion.li>
            </ul>
          </div>

          {/* Right side with Buy button and social icons */}
          <div className="flex items-center space-x-4 absolute right-8 top-1/2 transform -translate-y-1/2">
            {/* <motion.a 
              href="https://pump.fun/"
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-400 font-Geo text-black font-bold py-4 px-12 rounded-full"
            >
              BUY NOW
            </motion.a>
            <motion.a 
              href="https://x.com/Spyly_Solana" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter size={50} className='text-black' />
            </motion.a> */}
            {/* <motion.a 
              href="https://t.me/spylysol" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTelegram size={50} className='text-black' />
            </motion.a> */}

            <motion.img
              src={solImg}
              alt="logo"
              className="w-32 h-32"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;