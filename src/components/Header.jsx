import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBeer,  } from 'react-icons/fa';
import { TbDogBowl } from "react-icons/tb";
import mainImg from '../assets/Smully/smully.png';
import pumpImg from '../assets/pumpfa.png';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

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
    <div style={{ width: '100vw' }}>
      <nav className={`flex fixed z-50 w-screen p-6  justify-center items-center  transition-all duration-300  ${scrolled ? 'bg-orange-200' : 'bg-transparent'} ${hidden ? '-top-40' : 'top-0'}`}>
        <div className="container mx-auto flex justify-between items-center p-2">
          <a className="absolute top-0 right-6" href="/">
            <motion.img
              src={mainImg}
              alt="logo"
              width="75"
              height="75"
              className="pt-2"
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            />
          </a>
          <div id="navbarSupportedContent" className="flex items-center justify-center w-screen">
            <ul className="flex font-Geo gap-14  ">
              <motion.li
                className="flex items-center space-x-3 text-center justify-center "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}

              >
				    <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}

                >
                  <TbDogBowl size={30} className="text-amber-600 mb-1" />
                </motion.div>
                <a className="text-amber-800 2xl:text-4xl xl:text-2xl lg:text-xl font-bold" href="#meme-gen">
                  Make Meme
                </a>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}
              >
                <a className="text-amber-800 2xl:text-4xl xl:text-2xl lg:text-xl font-bold" href="#buy">
                  How to buy?
                </a>
              </motion.li>
              <motion.li
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleLinkClick}
              >
                <motion.div
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  <FaBeer size={30} className="text-amber-600" />
                </motion.div>
                <a className="text-amber-800 2xl:text-4xl xl:text-2xl lg:text-xl font-bold" href="#token">
                  Tokenomics
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
		   <div className="social-links absolute left-0 pl-3">
        <a href="https://x.com/Smully_Solana" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={48} className='text-amber-800'/>
        </a>
        <a href="https://t.me/SmullySolana" target="_blank" rel="noopener noreferrer">
          <FaTelegram  size={48} className='text-amber-800'/>
        </a>
        <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
        <img src={pumpImg} alt='pumplogo' className='w-12 ' />
        </a>
      </div>
          <div className=" whitespace-nowrap">

			</div>
      </nav>
		
    </div>
  );
};

export default Header;
