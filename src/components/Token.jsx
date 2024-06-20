import React from 'react';

const Token = () => {


  return (
    <div id='token' className='bg-black w-full text-white p-10 rounded-lg shadow-lg h-[50vh]'>
      <h1 className='font-Emo text-4xl md:text-6xl text-center mb-10 text-white '>Tokenomics</h1>
      <div className="flex flex-col md:flex-row justify-around items-stretch space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex-1 p-5 bg-white rounded-lg text-center">
          <span className='font-Emo text-2xl md:text-3xl block mb-2 text-black'>Supply</span>
          <p className='font-Spark text-xl md:text-2xl text-black'>1 Billion</p>
        </div>
        <div className="flex-1 p-5 bg-white rounded-lg text-center">
          <span className='font-Emo text-2xl md:text-3xl block mb-2 text-black'>Tax</span>
          <p className='font-Spark text-xl md:text-2xl text-black'>0% Buy/sell</p>
        </div>
        <div className="flex-1 p-5 bg-white rounded-lg text-center">
          <span className='font-Emo text-2xl md:text-3xl block mb-2 text-black'>Liquidity</span>
          <p className='font-Spark text-xl md:text-2xl text-black'>100% Burn</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
      </div>
      <h1 className='font-Spark text-4xl md:text-9xl text-center mb-10  text-white'>$ARCHIE</h1>
    </div>
  )
}

export default Token;
