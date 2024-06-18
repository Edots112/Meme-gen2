import React from 'react'

const Token = () => {
	function copy() {
		var copyText = document.getElementById("value");

		navigator.clipboard.writeText(copyText.textContent);
	  
		alert("Copied the text: " + copyText.textContent);
	  }
	  
  return (
	<div id='token' className='token'>
		<h1 className='font-Adventure'>Tokenomics</h1>
		<div className="flex ">
		<div className="supply">
			<span className=' font-Adventure'>Supply</span>
			<p className=' font-Mangat'>1 Billion</p>

			<span className=' font-Adventure'>Tax</span>
			<p className=' font-Mangat'>0% Buy/sell</p>
		</div>
		</div>
			<div className="flex ">
		<div className="supply">
			<span className=' font-Adventure'>Liquidity</span>
			<p className=' font-Mangat'>100% Burn</p>
		</div>

		</div>
		<div className="number ">
			<button onClick={copy} className=' font-Adventure'>Copy</button>
			<p id='value' className=' font-Adventure'></p>
		</div>
	</div>
  )
}

export default Token