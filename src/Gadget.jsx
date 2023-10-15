import React from 'react'
import amazon from './assets/Amazon.webp'
function Gadget() {
  return (
    <div className='w-full py-16 px-10'>
    <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
        <div>
            <h1 className='font-bold text-3xl pb-6'>TRAVEL GADGETS</h1>
            <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>Amazon </span> // For any travel-related gadgets from universal chargers and waterproof phone cases; to refillable water bottles and first aid kits, this is our Amazon affiliate link. </p>
           
        </div>
        <div className='grid grid-row-3 '>
            <img className='w-[100px] mx-auto mt-20' src={amazon} alt="/" />
        </div>

    </div>

</div>
  )
}

export default Gadget