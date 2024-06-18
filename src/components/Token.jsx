import React from 'react';

const Token = () => {


  return (
    <div id='token' className='bg-yellow-300 w-full text-white p-10 rounded-lg shadow-lg h-[50vh]'>
      <h1 className='font-Yujin text-4xl md:text-6xl text-center mb-10'>Tokenomics</h1>
      <div className="flex flex-col md:flex-row justify-around items-stretch space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex-1 p-5 bg-gray-800 rounded-lg text-center">
          <span className='font-Yellow text-2xl md:text-3xl block mb-2'>Supply</span>
          <p className='font-Yellow text-xl md:text-2xl'>1 Billion</p>
        </div>
        <div className="flex-1 p-5 bg-gray-800 rounded-lg text-center">
          <span className='font-Yellow text-2xl md:text-3xl block mb-2'>Tax</span>
          <p className='font-Yellow text-xl md:text-2xl'>0% Buy/sell</p>
        </div>
        <div className="flex-1 p-5 bg-gray-800 rounded-lg text-center">
          <span className='font-Yellow text-2xl md:text-3xl block mb-2'>Liquidity</span>
          <p className='font-Yellow text-xl md:text-2xl'>100% Burn</p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-10">
      </div>
    </div>
  )
}

export default Token;
