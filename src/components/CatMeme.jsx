import React, { useState } from 'react';
import OutputImage from './OutputImage';
import SelectionLayer from './SelectionLayer';

const CatMeme = () => {
    const [selected, setSelected] = useState({
        background: 'image1.png',
        character: 'image1.png',
        face: '',
        frontaccessory: '',
        hat: ''
    });

    const [images, setImages] = useState({
        background: [
            'image1.png', 'image2.png', 'image3.png', 'image4.png'
        ],
        character: [
            'image1.png', 'image2.png', 'image3.png', 'image4.png'
        ],
        face: [
            'image1.png', 'image2.png', 'image3.png', 'image4.png'
        ],
        frontAccessory: [
            'image1.png', 'image2.png', 'image3.png', 'image4.png'
        ],
        hat: [
            'image1.png', 'image2.png', 'image3.png', 'image4.png', "image5.png", "image6.png", "image7.png"
        ]
    });

    return (
        <div id='meme-gen' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div>
                <h1 className="font-Yujin text-6xl text-red-400 font bold text-center mb-5 ">Create your own Mucati</h1>
                <div className='relative flex justify-center text-center border-2 border-green-400 rounded-2xl p-5 gap-5 items-center '>
                    <div className='absolute inset-0 blur-background bg-white/65 '></div>
                    <div className='flex gap-7 relative z-10 items-center '>
                        <div id='selectionLayers'>
                            <SelectionLayer selected={selected} images={images.character} layer={'character'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.face} layer={'face'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.frontAccessory} layer={'frontaccessory'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.background} layer={'background'} setSelected={setSelected} />
                            <SelectionLayer selected={selected} images={images.hat} layer={'hat'} setSelected={setSelected} />
                        </div>
                        <OutputImage selected={selected} setSelected={setSelected} images={images} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CatMeme;
