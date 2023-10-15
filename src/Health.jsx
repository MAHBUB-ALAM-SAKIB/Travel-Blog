import React from 'react'
import nomad from './assets/nomad.webp'
import fit from './assets/fit.webp'

function Health() {
  return (
    <div className='w-full py-16 px-10'>
        <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
            <div>
                <h1 className='font-bold text-3xl pb-6'>HEALTH & VACCINATIONS</h1>
                <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>Nomad Travel </span> // An excellent resource to stay up to date with travel health information, Nomad Travel can tell you what vaccinations are required, and you can book appointments with travel clinics.</p>
                <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>Fit for Travel</span> //Run by the NHS, Fit For Travel has detailed information about health risks and precautions for every country. </p>
            </div>
            <div className='grid grid-row-3 '>
                <img className='w-[100px] mx-auto mt-20' src={nomad} alt="/" />
                <img className='w-[100px] mx-auto my-4' src={fit} alt="/" />
            </div>

        </div>

    </div>
  )
}

export default Health