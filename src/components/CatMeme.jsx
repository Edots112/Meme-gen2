import React, { useState } from 'react';
import OutputImage from './OutputImage';
import SelectionLayer from './SelectionLayer';

const CatMeme = () => {
    const [selected, setSelected] = useState({
        background: '24.png',
        character: '1.png',
        face: '',
        frontaccessory: '',
        hat: '',
        accessory: '' // New accessory layer
    });

    const [images, setImages] = useState({
        background: ["24.png", "20.png", "21.png", "22.png", "23.png", "19.png"],
        character: ["1.png", "25.png", "26.png", "27.png", "28.png"],
        face: ["2.png", "4.png", "6.png", "8.png", "11.png", "12.png"],
        frontAccessory: ["5.png", "7.png", "9.png",],
        hat: ["3.png", "10.png", "13.png", "14.png",],
        accessory: ["15.png", "16.png", "17.png", "18.png"] // Add your accessory images here
    });

    return (
        <div id='meme-gen' className='min-h-screen bg-green-200 py-10 px-4 rounded-[5rem] mb-20'>
            <div className='container mx-auto'>
                <h1 className="font-Priest text-4xl lg:text-8xl font-bold text-center text-yellow-400 mb-10">
                    Make your own <span className='text-blue-500'>Jaxly</span>
                </h1>
                
                <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                    {/* Left column: Output Image */}
                    <div className='lg:w-1/2 sticky top-10'>
                        <OutputImage selected={selected} setSelected={setSelected} images={images} />
                        <p className="font-Priest text-xl text-center text-white mt-4">
                            When you're happy, click the Download button and share your awesome creation!
                        </p>
                    </div>
                    
                    {/* Right column: Selection Layers */}
                    <div className='lg:w-1/2 space-y-6'>
                        <h3 className="text-center font-Priest text-2xl lg:text-3xl font-bold text-white mb-5">
                            Select your layers to create your Jaxly:
                        </h3>
                        <SelectionLayer selected={selected} images={images.character} layer={'character'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.background} layer={'background'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.face} layer={'face'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.frontAccessory} layer={'frontaccessory'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.hat} layer={'hat'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.accessory} layer={'accessory'} setSelected={setSelected} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatMeme;