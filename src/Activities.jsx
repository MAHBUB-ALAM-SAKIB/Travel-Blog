import React from 'react'
import guide from './assets/guide.webp'
import advisor from './assets/Tripadvisor.webp'


function Activities() {
  return (
    <div className='w-full bg-white py-16 px-10'>
        <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
            <div>
                <h1 className='font-bold text-3xl pb-6'>ACTIVITIES & ATTRACTIONS</h1>
                <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>Get Your Guide </span>// Our trusted partner for attractions is <span className='font-bold'>Get Your Guide</span> who offer a massive range of skip-the-line tickets and tours, delivered directly to your smartphone.</p>
                <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>TripAdvisor</span> // TripAdvisor is great for checking restaurant reviews and booking travel experiences, particularly in more remote destinations</p>
            </div>
            <div className='grid grid-row-3 '>
                <img className='w-[100px] mx-auto mt-20' src={guide} alt="/" />
                <img className='w-[100px] mx-auto my-4' src={advisor} alt="/" />
            </div>

        </div>

    </div>
  )
}

export default Activities