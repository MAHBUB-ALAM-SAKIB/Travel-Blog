import React from 'react'
import starling from './assets/Starling.webp'
function Money() {
  return (
    <div className='w-full py-16 px-10'>
        <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
            <div>
                <h1 className='font-bold text-3xl pb-6'>MONEY</h1>
                <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>Starling Bank </span> // The Starling Mastercard has excellent exchange rates, no payment fees and no fees for withdrawing cash through an ATM (although the ATM provider may charge you). It’s an excellent card for travel. </p>
               
            </div>
            <div className='grid grid-row-3 '>
                <img className='w-[100px] mx-auto mt-20' src={starling} alt="/" />
            </div>

        </div>

    </div>
  )
}

export default Money

