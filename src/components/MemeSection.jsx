import React from 'react';
import { motion } from 'framer-motion';
import meme1 from '../assets/jaxly/meme1.png';

const MemeCard = ({ meme }) => (
  <motion.div
    className="bg-blue-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200 flex flex-col h-full"
    whileHover={{ y: -5 }}
  >
    <div className=" p-2">
      <div className="w-full h-full relative  overflow-hidden">
        <img 
          src={meme.imageUrl} 
          alt={meme.title} 
          className="  w-full h-full object-cover "
        />
      </div>
    </div>
    <div className="p-4 bg-blue-900">
      <h3 className="text-yellow-400 font-Priest text-xl mb-1 truncate">{meme.title}</h3>
      <p className="text-white font-Priest text-sm opacity-80 truncate">{meme.description}</p>
    </div>
  </motion.div>
);

const MemeSection = () => {
  const memes = [
    { id: 1, title: "Jaxly's Bath Time", description: "When you try to give Jaxly a bath", imageUrl: meme1 },
    { id: 2, title: "Treat Time", description: "Jaxly's face when he hears the treat bag", imageUrl: meme1 },
    { id: 3, title: "Walkies!", description: "Jaxly when you say the 'W' word", imageUrl: meme1 },
    { id: 4, title: "Jaxly vs Vacuum", description: "The epic standoff", imageUrl: meme1 },
    { id: 5, title: "Puppy Eyes", description: "Jaxly's secret weapon", imageUrl: meme1 },
    { id: 6, title: "Jaxly's Zoom Call", description: "Working from home with Jaxly", imageUrl: meme1 },
  ];

  return (
    <div className="bg-green-200 py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-6xl font-Priest text-center text-blue-500 mb-12">Jaxly <span className="text-yellow-400">Memes</span></h2>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {memes.map((meme) => (
            <motion.div
              key={meme.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                show: { opacity: 1, y: 0 }
              }}
              className="aspect-w-1 aspect-h-1"
            >
              <MemeCard meme={meme} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MemeSection;