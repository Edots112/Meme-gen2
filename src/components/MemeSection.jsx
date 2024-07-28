import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import your meme images here
import meme1 from '../assets/Max/meme1.png';
import meme2 from '../assets/Max/meme2.png';
import meme3 from '../assets/Max/meme3.png';
import meme4 from '../assets/Max/meme4.png';
// Add more meme imports as needed

const memes = [
  { src: meme1, alt: "Meme 1" },
  { src: meme2, alt: "Meme 2" },
  { src: meme3, alt: "Meme 3" },
  { src: meme4, alt: "Meme 4" },
  // Add more memes as needed
];

const Meme = ({ src, alt, opacity }) => {
  return (
    <motion.div
      style={{
        opacity,
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
      }}
      className="flex items-center justify-center"
    >
      <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
    </motion.div>
  );
};

const MemeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacities = memes.map((_, i) => 
    useTransform(
      scrollYProgress,
      [i / memes.length, (i + 0.5) / memes.length],
      [1, 0]
    )
  );

  return (
    <div ref={containerRef} style={{ height: `${100 * memes.length}vh` }}>
      {memes.map((meme, index) => (
        <Meme 
          key={index} 
          src={meme.src} 
          alt={meme.alt} 
          opacity={opacities[index]}
        />
      ))}
    </div>
  );
};

export default MemeSection;