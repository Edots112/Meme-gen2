import React from 'react'
import gifImg from '../assets/landing.gif'

const Landing = () => {
	return (
		<div id='landing' className="flex justify-top items-center">
			<div className="background-orange-100">
				<h1 className='font-Adventure text-[20rem]  '>Mucati</h1>
				<p className='font-Mangat text-center text-[3rem]'>Newborn baby</p>
			</div>
			<img src={gifImg} className='w-[65vh] z-10' alt="" />
			{/* Your code goes here */}
		</div>
	)
}

export default Landing