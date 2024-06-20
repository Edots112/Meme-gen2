import React, { useState } from 'react';
import OutputImage from './OutputImage';
import SelectionLayer from './SelectionLayer';
import splashImg from '../assets/Villy/splash.png';

const CatMeme = () => {
    const [selected, setSelected] = useState({
        background: '9.png',
        character: '1.png',
        face: '',
        frontaccessory: '',
        hat: ''
    });

    const [images, setImages] = useState({
        background: [
            "9.png", "18.png",  "19.png", "20.png", "21.png", 
        ],
        character: [
            "1.png","2.png", "3.png", "4.png", 
        ],
        face: [
            "6.png", "7.png", "8.png", "10.png", "12.png",  "16.png", "17.png", "22.png", "23.png", "35.png"
        ],
        frontAccessory: [
            "11.png", "24.png", "25.png", "26.png",
        ],
        hat: [
            "13.png", "14.png", "15.png" , "27.png", "28.png", "29.png", "30.png", "31.png", "32.png", "33.png", 
        ]
    });

    return (
        <div id='meme-gen' className='flex justify-center items-center h-screen '  >
            <div>
                <div className=' flex justify-evenly w-screen text-center rounded-2xl   items-top '>
                           <div className='relative flex flex-col justify-center items-center'>
            <img src={splashImg} alt='logo' className='absolute ' style={{ zIndex: 1 }} />
            <h1 className="font-Dino 2xl:text-8xl xl:text-5xl lg:text-4xl  text-black font-bold text-center mb-5 mr-14   z-10">Make a ARCHIE</h1>
            <h3 className="font-Dino 2xl:text-3xl xl:text-2xl  text-black font-bold text-center mb-5 mr-14 w-1/2 z-10">Scroll through the options and customise your own ARCHIE.</h3>
            <h4 className="font-Dino 2xl:text-2xl xl:text-2xl text-black font-bold text-center mb-5 mr-14 w-1/2 z-10">When you're happy with your own ARCHIE, click Download and share your awesome creation</h4>
        </div>
                    <div className='flex flex-col  items-center justify-center  p-2  flex-1'>
                         <OutputImage selected={selected} setSelected={setSelected} images={images} />
                        <div id='selectionLayers '>
                            <SelectionLayer selected={selected} images={images.character} layer={'character'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.face} layer={'face'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.frontAccessory} layer={'frontaccessory'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.background} layer={'background'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.hat} layer={'hat'} setSelected={setSelected} />
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatMeme;
