import React from 'react'

const Buy = () => {
  return (
	<div id="buy" className='buy'>
		<h1>HOW TO BUY?</h1>

		<div className="options">
			<div className="option">
				<h2>01. Create a Wallet</h2>
				<h4>Mobile Users</h4>
				<p>Download Phantom or your wallet of choice from the App Store or Google Play Store for free.</p>
				<h4>Desktop Users</h4>
				<p>Download the Google Chrome extension by visiting phantom.app.</p>
			</div>
			<div className="option">
				<h2>02. Buy some sol</h2>
				<h4>Buy with Solana
				</h4>
				<p>Have SOL in your wallet to switch to $MUCATI. If you don't have any SOL, you can buy SOL from an exchange.</p>
				<h4>Phantom wallet
				</h4>
				<p>Send your solana to your phantom wallet.</p>
			</div>
			<div className="option">
				<h2>03. Go to Raydium</h2>
				<h4>Mobile Users</h4>
				<p>Ready to join the movement? Head over to Raydium to easily purchase. Simply connect your wallet and swap for $MUCATI to become part of the strongest community in crypto!</p>
				
			</div>
			<div className="option">
				<h2>04. Enjoy</h2>
				<h4>Progress</h4>
				<p>You can follow us along our journey here and here.</p>
				<h4>Community</h4>
				<p>if you want constant updates join our amazing community here.</p>
			</div>
		</div>
	</div>
  )
}

export default Buy