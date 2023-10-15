import React from 'react'
import flight from './assets/flight2.jpg'
import Expedia from './assets/expedia.webp'
import flightCentre from './assets/flight-centre.webp'

function Flights() {
  return (
    <div className='w-full bg-white py-16 px-10'>
        <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
            <div>
                <h1 className='text-3xl font-bold pb-6'>FLIGHTS & PACKAGES</h1>
                <p className='text-xl pb-6'> <span className='text-blue-600 font-bold'>Expedia.com</span> // Expedia is one of the largest travel providers with access to discounted flights, accommodation, vacation packages, and experiences.</p>
                <p className='text-xl pb-6'><span className='text-blue-600 font-bold'>Flight Centre </span>// Flight Centre have a range of hand-picked vacation with excellent customer service by travel experts who can help out if things go wrong.</p>
            </div>
            <div className='grid grid-rows-3'>
              <img className='w-[100px] mx-auto mt-20' src={Expedia} alt="/" />
              <img className='w-[100px] mx-auto mt-20' src={flightCentre} alt="/" />

            </div>
        </div>
    </div>
  )
}

export default Flights