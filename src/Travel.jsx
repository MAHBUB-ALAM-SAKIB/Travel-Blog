import React from 'react'
import evisa from './assets/evisa.webp'
function Travel() {
  return (
    <div className='w-full py-16 px-10'>
    <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
        <div>
            <h1 className='font-bold text-3xl pb-6'>TRAVEL VISAS</h1>
            <p className='text-xl pb-4'><span className='text-blue-600 font-bold'>e-visa.co.uk </span> //  For a full-service visa agency, we recommend e-visa.co.uk. They have a team of professionals who keep up to date with changes to travel visa requirements and if you’re stretched for time, they’ll take care of the process for you. </p>
           
        </div>
        <div className='grid grid-row-3 '>
            <img className='w-[100px] mx-auto mt-20' src={evisa} alt="/" />
        </div>

    </div>

</div>
  )
}

export default Travel