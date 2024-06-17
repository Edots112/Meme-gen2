import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
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
      <p> | </p>
      <div className="flowing-text-container">
        <div className="flowing-text">
          <span>Meme-Gen</span>
          <span>Meme-Gen</span>
          <span>Meme-Gen</span>
          <span>Meme-Gen</span>
          <span>Meme-Gen</span>
          <span>Meme-Gen</span>
          <span>Meme-Gen</span>
          <span>Meme-Gen</span>
        </div>
      </div>
      <p> | &copy; Meme-Gen 2024</p>
    </footer>
  )
}

export default Footer
