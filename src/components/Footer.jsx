import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
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
