import React from 'react'

const Landing = () => {
	return (
		<div id='landing'>
			<div className="text">
				<h1>Missy the cool Cat</h1>
				<p>Make your favorite cat missy look sassy</p>
			</div>
			<img src={`${process.env.PUBLIC_URL}/images/character/image1.png`} alt="" />
		</div>
	)
}

export default Landing