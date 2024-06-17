import React from 'react'

const Token = () => {
	function copy() {
		var copyText = document.getElementById("value");

		navigator.clipboard.writeText(copyText.textContent);
	  
		alert("Copied the text: " + copyText.textContent);
	  }
	  
  return (
	<div id='token' className='token'>
		<h1>Tokenomics</h1>
		<div className="supply">
			<span>Supply</span>
			<p>1000000000</p>
		</div>
		<div className="number">
			<button onClick={copy}>Copy</button>
			<p id='value'>8zFovnzXzK9JDiftGaw7wiRxARrRtvm9Lz12vJ8CZ5ZA</p>
		</div>
	</div>
  )
}

export default Token