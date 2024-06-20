import React from 'react'

const Buy = () => {
  return (
    <div id="buy" className='bg-[#696d6b] py-10'>
      <h1 className="text-4xl font-bold text-center mb-10 font-Spark text-black">HOW TO BUY?</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        <div className="border-2 border-black p-8 shadow-md transition-transform transform hover:scale-105 duration-300 font-Spark">
          <h2 className="text-2xl font-bold text-black mb-4 text-center"> Download a Wallet</h2>
          <p className='font-Dino text-2xl text-center'>We recommend using Phantom, although any wallet supporting $SOL is suitable. Desktop users can opt for the Chrome extension, while mobile users can download the respective app.</p>
        </div>
        <div className="border-2 border-black p-8 shadow-md transition-transform transform hover:scale-105 duration-300 font-Spark">
          <h2 className="text-2xl font-bold text-black mb-4 text-center">Fund Your Wallet with $SOL</h2>
          <p className='font-Dino text-2xl text-center'>Ensure your wallet is loaded with $SOL to participate in the $ARCHIE community. $SOL is required to acquire $ARCHIE tokens.</p>
        </div>
        <div className="border-2 border-black p-8 shadow-md transition-transform transform hover:scale-105 duration-300 font-Spark">
          <h2 className="text-2xl font-bold text-black mb-4 text-center"> SWAP $SOL for $ARCHIE</h2>
          <p className='font-Dino text-2xl text-center'>SWAP your $SOL into $ARCHIE tokens at pump.fun.</p>
        </div>
        <div className="border-2 border-black p-8 shadow-md transition-transform transform hover:scale-105 duration-300 font-Spark">
          <h2 className="text-2xl font-bold text-black mb-4 text-center"> Create Your ARCHIE</h2>
          <p className='font-Dino text-2xl text-center'>Utilize the ARCHIE meme generator to forge your unique ARCHIE.</p>
        </div>
        <div className="border-2 border-black p-8 shadow-md transition-transform transform hover:scale-105 duration-300 font-Spark">
          <h2 className="text-2xl font-bold text-black mb-4 text-center"> Engage with the Community</h2>
          <p className='font-Dino text-2xl text-center'>Connect with the ARCHIE on social media platforms. Share your creations and listen out for updates and family meetings.</p>
        </div>
        <div className="border-2 border-black p-8 shadow-md transition-transform transform hover:scale-105 duration-300 font-Spark">
          <h2 className="text-2xl font-bold text-black mb-4 text-center"> Share and Thrive</h2>
          <p className='font-Dino text-2xl text-center'>Promote your ARCHIE creation and relish the perks of being an integral part of the ARCHIE community.</p>
        </div>
      </div>
    </div>
  )
}

export default Buy
