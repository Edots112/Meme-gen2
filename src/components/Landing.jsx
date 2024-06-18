import React from 'react'
import gifImg from '../assets/landing.png'
import '../Landing.css' // Add a CSS file for the styles

const Landing = () => {
	return (
		<div id='' className="relative flex flex-col items-center h-[90vh] overflow-hidden">
			<div className="parallax-background absolute top-0 left-0 w-full h-full z-0"></div>
			<div className="relative z-10 text-center mt-[10%]">
				<h1 className='font-Yujin text-[5rem] md:text-[10rem] text-red-500 animate-text'>Billy's Cousine</h1>
			</div>
				<p className='absolute w-1/4 bottom-16 left-4 font-Yujin text-[1.5rem] md:text-[2.5rem] text-red-500 font-bold animate-text '>Meet Cilly, Billy's closest cousine</p>
			<img src={gifImg} className=' z-2 w-[700px] absolute bottom-0' alt="Mucati" />
		</div>
	)
}

export default Landing
