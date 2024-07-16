import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const SelectionLayer = ({ selected, images, layer, setSelected }) => {
    const scrollContainerRef = useRef(null);

    const handleClick = (imageName) => {
        setSelected(prevSelected => ({
            ...prevSelected,
            [layer]: imageName
        }));
    };

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex items-center bg-blue-900 rounded-lg p-4">
            <button onClick={() => scroll('left')} className="bg-yellow-400 text-blue-900 p-2 rounded-full mr-4">
                <FaChevronLeft size={24} />
            </button>
            <div 
                ref={scrollContainerRef} 
                className="flex overflow-x-scroll scrollbar-hide space-x-4 flex-grow"
            >
                {(layer !== 'character' && layer !== 'background') && (
                    <motion.div
                        onClick={() => handleClick('')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 w-32 h-32 bg-green-200 rounded-lg flex items-center justify-center cursor-pointer"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/reset.png`}
                            alt='Reset'
                            className="max-w-full max-h-full"
                        />
                    </motion.div>
                )}

                {images.map((imageName) => (
                    <motion.div
                        key={imageName}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0 w-32 h-32 bg-green-200 rounded-lg flex items-center justify-center cursor-pointer"
                        onClick={() => handleClick(imageName)}
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${layer}/${imageName}`}
                            alt={imageName}
                            className="max-w-full max-h-full object-contain"
                        />
                    </motion.div>
                ))}
            </div>
            <button onClick={() => scroll('right')} className="bg-yellow-400 text-blue-900 p-2 rounded-full ml-4">
                <FaChevronRight size={24} />
            </button>
        </div>
    );
};

export default SelectionLayer;