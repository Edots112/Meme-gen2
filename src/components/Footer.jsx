import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

import pumpImg from '../assets/pump.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://x.com/Mucati_Solana" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://t.me/mucativerify" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="https://pump.fun/w8rpyFjPfaMKmKP8Vj5uXuJBdKprPknSEdPBXxYpump" target="_blank" rel="noopener noreferrer">
        <img src={pumpImg} className='w-10' />
        </a>
      </div>
      <div className="flowing-text-container">
        <div className="flowing-text ">
          <span>$MuCati</span>
          <span>$MuCati</span>
          <span>$MuCati</span>
          <span>$MuCati</span>
          <span>$MuCati</span>
          <span>$MuCati</span>
          <span>$MuCati</span>
          <span>$MuCati</span>
        </div>
      </div>
      <p className='p-3'>Mucati</p>
    </footer>
  )
}

export default Footer
