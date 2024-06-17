import React from 'react'
import gifImg from '../assets/landing.gif'

const Landing = () => {
	return (
		<div id='landing' className="flex  items-center">
			<div className="background-orange-100">
				<h1 className='font-Adventure text-[10rem] md:text-[15rem]'>Mucati</h1>
				<p className='font-Mangat text-center text-[2.5rem]'>The most memeable newborn cat on solana.</p>
			</div>
			<img src={gifImg} className='w-[65vh] z-10 hidden md:block' alt="" />
			<img src={gifImg} className='w-[30vh] z-10 md:hidden' alt="" />
			{/* Your code goes here */}
		</div>
	)
}

export default Landing