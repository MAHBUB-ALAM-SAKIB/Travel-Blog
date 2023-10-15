import React from 'react'
import rental from './assets/rental.webp'
import trainline from './assets/trainline.webp'

function Transport() {
  return (
    <div className='w-full bg-white py-16 px-10'>
        <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
            <div>
                <h1 className='font-bold text-3xl pb-6'>TRANSPORT</h1>
                <p className='text-xl pb-4'><span className='text-blue-700 font-bold'>Rentalcars.com</span> // Our favourite portal is for hire cars is <span font-bold>rentalcars.com</span>. They compare prices from all the major car rental companies in a user-friendly interface with results that are easy to sort based on your requirements.</p>
                <p className='text-xl pb-4'><span className='text-blue-700 font-bold'>Trainline.com</span> // Book UK and Europe rail and coach journeys on Train Line who consolidate prices from over 270 providers across 45 European countries.</p>
                </div>
                <div className='grid grid-row-3 '>
                <img className='w-[100px] mx-auto mt-20' src={rental} alt="/" />
                <img className='w-[100px] mx-auto my-4' src={trainline} alt="/" />
            </div>
            

        </div>

    </div>
  )
}

export default Transport