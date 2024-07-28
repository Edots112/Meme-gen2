import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

// Import your meme images here
import meme1 from '../assets/Max/meme1.png';
import meme2 from '../assets/Max/meme2.png';
import meme3 from '../assets/Max/meme3.png';
import meme4 from '../assets/Max/meme4.png';
import meme5 from '../assets/Max/meme5.png';
import meme6 from '../assets/Max/meme6.png';
import meme7 from '../assets/Max/meme7.png';
import meme8 from '../assets/Max/meme8.png';
import meme9 from '../assets/Max/meme9.png';
import meme10 from '../assets/Max/meme10.png';

const memes = [
  { src: meme1, alt: "Meme 1", direction: "left" },
  { src: meme2, alt: "Meme 2", direction: "right" },
  { src: meme3, alt: "Meme 3", direction: "bottom" },
  { src: meme4, alt: "Meme 4", direction: "left" },
  { src: meme5, alt: "Meme 5", direction: "right" },
  { src: meme6, alt: "Meme 6", direction: "bottom" },
  { src: meme7, alt: "Meme 7", direction: "left" },
  { src: meme8, alt: "Meme 8", direction: "right" },
  { src: meme9, alt: "Meme 9", direction: "bottom" },
  { src: meme10, alt: "Meme 10", direction: "left" },
];

const Meme = ({ src, alt, opacity, direction }) => {
  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
      y: direction === 'bottom' ? 100 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <motion.div
      style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
      }}
      className="flex items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <motion.img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-full object-contain" 
        style={{ opacity }}
      />
    </motion.div>
  );
};

const MemeSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const [opacities, setOpacities] = useState(memes.map(() => 1));

  useEffect(() => {
    const updateOpacities = () => {
      const newOpacities = memes.map((_, index) => {
        const start = index / memes.length;
        const end = (index + 1) / memes.length;
        if (scrollYProgress.get() < start) return 1;
        if (scrollYProgress.get() > end) return 0;
        return 1 - (scrollYProgress.get() - start) / (end - start);
      });
      setOpacities(newOpacities);
    };

    const unsubscribe = scrollYProgress.on('change', updateOpacities);
    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} style={{ height: `${100 * memes.length}vh` }}>
      {memes.map((meme, index) => (
        <Meme 
          key={index} 
          src={meme.src} 
          alt={meme.alt} 
          opacity={opacities[index]}
          direction={meme.direction}
        />
      ))}
    </div>
  );
};

export default MemeSection;