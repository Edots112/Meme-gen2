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
        <div id='meme-gen'>
            <h1 style={{padding: '80px 0', textAlign: 'center', fontSize: '3rem'}} className="font-Mangat">Create your own Mucati</h1>
            <div className='d-flex'>
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
    );
};

export default CatMeme;
