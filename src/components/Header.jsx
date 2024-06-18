import React from 'react'
import headerGif from '../assets/headergif.gif'

const Header = () => {
	return (
		<div style={{ width: '100vw' }}>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					{/* <a className="navbar-brand" href="/">
						<img src={headerGif} alt="logo" width="75" height="50" className="d-inline-block align-text-top" />
					</a> */}
					<div className="" id="navbarSupportedContent">
						<ul className="flex font-Yujin 0   text-4xl gap-10 align-center justify-start">
							{/* <li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#landing">Home</a>
							</li> */}
							<li className="nav-item">
								<a className="nav-link " href="#buy">How to buy?</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#token">Tokenomic</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#meme-gen">Make Meme</a>
							</li>
							{/* <li className="nav-item">
								<a className="nav-link" href="#game">Play Game</a>
							</li> */}
							
						</ul>
						
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header