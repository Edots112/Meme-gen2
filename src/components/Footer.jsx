import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTelegram } from 'react-icons/fa';

import pumpImg from '../assets/pumpfa.png';

const Footer = () => {

    function copy() {
        const textToCopy = "This is the special string to be copied";

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                alert("Copied the text: " + textToCopy);
            })
            .catch(err => {
                console.error('Could not copy text: ', err);
            });
    }

    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://x.com/WrinkleDog_Sol" target="_blank" rel="noopener noreferrer">
                    <FaTwitter size={48} />
                </a>
                <a href="https://t.me/wrinkledogs" target="_blank" rel="noopener noreferrer">
                    <FaTelegram size={48} />
                </a>
                <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
                    <img src={pumpImg} alt="pump logo" className="w-12" />
                </a>
            </div>
            <h1 className="font-Priest text-yellow-200 text-4xl md:text-6xl text-center">$WRINKLY</h1>
            <div className="whitespace-nowrap">
                <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
                    <button className="font-Priest w-60 bg-red-700 hover:bg-blue-700 text-black font-bold py-4 px-6 rounded">
                        BUY NOW
                    </button>
                </a>
            </div>
        </footer>
    )
}

export default Footer;
