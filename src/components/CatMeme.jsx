import React, { useState } from 'react';
import OutputImage from './OutputImage';
import SelectionLayer from './SelectionLayer';

const CatMeme = () => {
    const [selected, setSelected] = useState({
        background: '21.png',
        character: '1.png',
        face: '',
        frontaccessory: '',
        hat: '',
        accessory: '' // New accessory layer
    });

    const [images, setImages] = useState({
        background: ["21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png"],
        character: ["1.png", "28.png", "29.png", ],
        face: ["2.png", "3.png", "9.png", "10.png", "11.png"],
        frontAccessory: ["12.png", "13.png", "16.png", "15.png"],
        hat: ["4.png", "5.png", "6.png", "7.png", "8.png"],
        accessory: ["18.png", "19.png", "20.png",] // Add your accessory images here
    });

    return (
        <div id='meme-gen' className='min-h-screen bg-slate-500 py-10 px-4  mx-10'>
            <div className='container mx-auto'>
                <h1 className="font-Priest text-4xl lg:text-8xl font-bold text-center text-white mb-10">
                     <span className='text-black'>HENRI </span>
                     MEME GEN
                </h1>
                
                <div className='flex flex-col lg:flex-row justify-between items-start gap-10'>
                    {/* Left column: Output Image */}
                    
                    {/* Right column: Selection Layers */}
                    <div className='lg:w-1/2 space-y-2'>
                        {/* <h3 className="text-center font-Priest text-3xl lg:text-5xl font-bold text-green-400  underline">
                            Layers
                        </h3> */}
                        <SelectionLayer selected={selected} images={images.character} layer={'character'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.background} layer={'background'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.face} layer={'face'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.frontAccessory} layer={'frontaccessory'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.hat} layer={'hat'} setSelected={setSelected} />
                        <SelectionLayer selected={selected} images={images.accessory} layer={'accessory'} setSelected={setSelected} />
                    </div>
                    <div className='lg:w-1/2 sticky top-10'>
                        <OutputImage selected={selected} setSelected={setSelected} images={images} />
                        {/* <p className="font-Priest text-xl text-center text-white mt-4">
                            When you're happy, click the Download button and share your awesome creation!
                        </p> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatMeme;