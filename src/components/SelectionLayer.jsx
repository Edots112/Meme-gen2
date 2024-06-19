import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SelectionLayer = (props) => {
    const scrollContainerRef = useRef(null);

    const handleClick = (imageName) => {
        props.setSelected(prevSelected => ({
            ...prevSelected,
            [props.layer]: imageName
        }));
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -165, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 165, behavior: 'smooth' });
        }
    };

    return (
        <div className="flex items-center max-h-20">
            <button onClick={scrollLeft} className="bg-transparent border-none cursor-pointer text-3xl mx-2 text-black">
                <FontAwesomeIcon icon={faChevronLeft} className='scroller' />
            </button>
            <div 
                ref={scrollContainerRef} 
                className="flex overflow-x-scroll max-w-[500px] min-w-[500px] whitespace-nowrap scrollbar-hide"
            >
                {(props.layer !== 'character' && props.layer !== 'background') && (
                    <div
                        onClick={() => handleClick('')}
                        key='null'
                        className="border-2 border-black rounded-lg m-2 p-1 w-[150px] h-[75px] min-w-[150px] min-h-[75px] max-w-[150px] max-h-[75px] inline-flex items-center justify-center bg-transparent cursor-pointer"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/reset.png`}
                            alt='Reset'
                            className="max-w-full max-h-full"
                        />
                    </div>
                )}

                {props.images.map((imageName) => (
                    <div
                        key={imageName}
                        className="border-2 border-black rounded-lg m-2 p-1 w-[150px] h-[75px] min-w-[150px] min-h-[75px] max-w-[150px] max-h-[75px] inline-flex items-center justify-center bg-transparent cursor-pointer"
                    >
                        <img
                            src={`${process.env.PUBLIC_URL}/images/${props.layer}/${imageName}`}
                            alt={imageName}
                            className="max-w-full max-h-full"
                            onClick={() => handleClick(imageName)}
                        />
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} className="bg-transparent border-none cursor-pointer text-3xl mx-2 text-black">
                <FontAwesomeIcon icon={faChevronRight} className='scroller' />
            </button>
        </div>
    );
};

export default SelectionLayer;
