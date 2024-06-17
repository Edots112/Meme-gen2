import React from 'react'

const Header = () => {
	return (
		<div style={{ width: '100vw' }}>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/">Meme Gen</a>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#landing">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#buy">How to buy?</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#token">Tokenomic</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#meme-gen">Make Meme</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#game">Play Game</a>
							</li>
							
						</ul>
						
					</div>
				</div>
			</nav>
		</div>
	)
}

export default Header