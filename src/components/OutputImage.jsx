import React, { useRef } from 'react';

const OutputImage = (props) => {
    const canvasRef = useRef(null);
    const { images } = props;

    const layerStyles = {
        background: { zIndex: 0, width: 500, height: 500, top: 0, left: 0 },
        character: { zIndex: 1, width: 500, height: 500, top: 0, left: 0  },
        face: { zIndex: 2, width: 500, height: 500, top: 0, left: 0  },
        frontaccessory: { zIndex: 3, width: 500, height: 500, top: 0, left: 0  },
        hat: { zIndex: 4, width: 500, height: 500, top: 0, left: 0 },
    };

    const handleDownload = async () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Clear the canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Load and draw each image onto the canvas
        const layers = [
            { layer: 'background' },
            { layer: 'character' },
            { layer: 'face' },
            { layer: 'frontaccessory' },
            { layer: 'hat' }
        ];

        // Function to load an image
        const loadImage = (layer) => {
            return new Promise((resolve, reject) => {
                if (!props.selected[layer]) {
                    resolve(null); // If the layer is empty, resolve with null
                } else {
                    const img = new Image();
                    img.onload = () => resolve({ img, layer });
                    img.onerror = reject;
                    img.src = `${process.env.PUBLIC_URL}/images/${layer}/${props.selected[layer]}`;
                }
            });
        };

        // Load all images
        const loadedImages = await Promise.all(layers.map(layer => loadImage(layer.layer)));

        // Draw each image in the correct order
        loadedImages.forEach((loadedImage) => {
            if (loadedImage) {
                const { img, layer } = loadedImage;
                const { top, left, width, height } = layerStyles[layer];
                context.drawImage(img, left, top, width, height);
            }
        });

        // Provide a download link for the canvas image
        const link = document.createElement('a');
        link.download = 'Your_MiCati.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    const handleReset = () => {
        props.setSelected({
            background: '',
            character: '',
            face: '',
            frontaccessory: '',
            hat: ''
        });
    };

    const handleRandom = () => {
        props.setSelected({
            background: images.background[Math.floor(Math.random() * images.background.length)] || '',
            face: images.face[Math.floor(Math.random() * images.face.length)] || '',
            hat: images.hat[Math.floor(Math.random() * images.hat.length)] || '',
            frontaccessory: images.frontAccessory[Math.floor(Math.random() * images.frontAccessory.length)] || '',
            character: images.character[Math.floor(Math.random() * images.character.length)] || ''
        });
    };

    return (
        <div>
            <div id='parent'>
                {props.selected.background && <img id='background' src={`${process.env.PUBLIC_URL}/images/background/${props.selected.background}`} alt="" />}
                {props.selected.character && <img id='character' src={`${process.env.PUBLIC_URL}/images/character/${props.selected.character}`} alt="" />}
                {props.selected.face && <img id='face' src={`${process.env.PUBLIC_URL}/images/face/${props.selected.face}`} alt="" />}
                {props.selected.frontaccessory && <img id='frontaccessory' src={`${process.env.PUBLIC_URL}/images/frontaccessory/${props.selected.frontaccessory}`} alt="" />}
                {props.selected.hat && <img id='hat' src={`${process.env.PUBLIC_URL}/images/hat/${props.selected.hat}`} alt="" />}
            </div>
            <div style={{ display: 'flex', marginTop: '10px' }}>
                <button id='random' className='btn' onClick={handleRandom}>Generate Random</button>
                <button id='reset' className='btn' onClick={handleReset}>Reset</button>
            </div>
            <button id='download' className='btn' onClick={handleDownload}>Download</button>
            <canvas ref={canvasRef} style={{ display: 'none' }} width={500} height={500} />
        </div>
    );
};

export default OutputImage;
