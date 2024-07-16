import React, { useRef } from 'react';
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { GrPowerReset } from "react-icons/gr";
import { MdDownload } from "react-icons/md";

const OutputImage = (props) => {
    const canvasRef = useRef(null);
    const { images } = props;

    const layerStyles = {
        background: { zIndex: 0, width: 500, height: 500, top: 0, left: 0 },
        character: { zIndex: 1, width: 500, height: 500, top: 0, left: 0 },
        face: { zIndex: 4, width: 500, height: 500, top: 0, left: 0 },
        frontaccessory: { zIndex: 3, width: 500, height: 500, top: 0, left: 0 },
        hat: { zIndex: 2, width: 500, height: 500, top: 0, left: 0 },
        accessory: { zIndex: 5, width: 500, height: 500, top: 0, left: 0 }
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
            { layer: 'hat' },
            { layer: 'accessory' } // Add your new layer here
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
        link.download = 'Jaxly.png';
        link.href = canvas.toDataURL();
        link.click();
    };

    const handleReset = () => {
        props.setSelected({
            background: '24.png',
            character: '1.png',
            face: '',
            frontaccessory: '',
            hat: '',
            accessory: ''
        });
    };

    const handleRandom = () => {
        props.setSelected({
            background: images.background[Math.floor(Math.random() * images.background.length)] || '',
            face: images.face[Math.floor(Math.random() * images.face.length)] || '',
            hat: images.hat[Math.floor(Math.random() * images.hat.length)] || '',
            frontaccessory: images.frontAccessory[Math.floor(Math.random() * images.frontAccessory.length)] || '',
            character: images.character[Math.floor(Math.random() * images.character.length)] || '',
            accessory: images.accessory[Math.floor(Math.random() * images.accessory.length)] || ''
        });
    };

    return (
        <div>
            <div id='parent' style={{ position: 'relative', width: 500, height: 500 }}>
                {Object.entries(layerStyles).map(([layer, style]) => (
                    props.selected[layer] && (
                        <img 
                            key={layer}
                            id={layer} 
                            src={`${process.env.PUBLIC_URL}/images/${layer}/${props.selected[layer]}`} 
                            alt=""
                            style={{
                                position: 'absolute',
                                top: style.top,
                                left: style.left,
                                width: style.width,
                                height: style.height,
                                zIndex: style.zIndex
                            }}
                        />
                    )
                ))}
            </div>
            <div className='w-[68%] mx-auto flex flex-col gap-1 pt-2 '>
                <button id='random' className='btn flex justify-center items-center gap-5 font-Geo' onClick={handleRandom}>
                    <GiPerspectiveDiceSixFacesRandom size={30} className='text-black' />
                    Random
                </button>
                <button id='download' className='btn flex justify-center items-center gap-5 font-Geo' onClick={handleDownload}>
                    <MdDownload size={30} className='text-black' />
                    Download
                </button>
                <button id='reset' className='btn flex justify-center items-center gap-5 font-Geo' onClick={handleReset}>
                    <GrPowerReset size={30} className='text-black' />
                    Reset
                </button>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} width={500} height={500} />
        </div>
    );
};

export default OutputImage;