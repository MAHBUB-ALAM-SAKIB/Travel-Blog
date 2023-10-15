import React from 'react'
import tree from './assets/true.webp'
import col from './assets/columbus.webp'

function Insurence() {
  return (
    <div className='w-full py-16 px-10'>
        <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
             <div>
                <h1 className='font-bold text-3xl pb-6'>INSURANCE</h1>
                <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>True Traveller</span> // True Traveller is good for European citizens with competitive multi-trip policies as well as policies with advanced medical support.</p>
                <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>Columbus Direct</span> // Columbus Direct have very good multi-trip policies and they’re a good option for families and solo travellers looking for standard travel insurance.</p>
             </div>
             <div className='grid grid-row-3 '>
                <img className='w-[150px] mx-auto mt-20' src={tree} alt="/" />
                <img className='w-[150px] mx-auto my-4' src={col} alt="/" />
            </div>

        </div>
    </div>
  )
}

export default Insurence