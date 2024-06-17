import React from 'react'

const Game = () => {
	return (
		<div className='game' id='game'>
			<h1 style={{ padding: '80px 0', textAlign: 'center', fontSize: '3rem' }}>Time to play some game with missy</h1>

			<div className="content">
				<img src={`${process.env.PUBLIC_URL}/images/character/image2.png`} alt="" />
				<div className="text game-text">
					<h1>Play with missy</h1>
					<p>Make the cat jump to catch the ball</p>
				</div>
			</div>
		</div>
	)
}

export default Game