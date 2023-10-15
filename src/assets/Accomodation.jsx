import React from 'react'
import Booking from '../assets/booking.webp'
import Hotel from '../assets/hotels.webp'
import Vrbo from '../assets/vrbo.webp'
function Accomodation() {
  return (
    <div className=' bg-white w-full py-16 px-10'>
    <div className='max-w-[1240px] mx-auto grid gap-8 md:grid-cols-2'>
        <div className=''>
            <h1 className='text-3xl font-bold pb-6'>ACCOMODATION</h1>
            <p className='text-xl pb-4'><span className='text-blue-700 font-bold'>Booking.com </span> // Our preferred accommodation platform is <span className='font-bold'>booking.com</span>, for their wide selection and excellent trip calendar. Regular users can qualify for ‘Genius’  to get 10% – 15% off selected hotels.</p>
            <p className='text-xl pb-4'><span className='text-blue-700 font-bold'>Hotels.com </span> // <span className='font-bold'>Hotels.com</span> can be marginally more expensive than booking.com, but their rewards programme gives you a voucher for the average of your last booked 10 nights – effectively a 10% discount.</p>
            <p className='text-xl pb-4'><span className='text-blue-700 font-bold'>VRBO</span> // For holiday rentals, <span className=' font-bold'>VRBO</span> have a great selection of properties and a thorough fraud screening process.</p>
           
        </div>
        <div className='grid grid-row-3 '>
                <img className='w-[100px] mx-auto mt-20' src={Booking} alt="/" />
                <img className='w-[100px] mx-auto my-4' src={Hotel} alt="/" />
                <img className='w-[100px] mx-auto my-4' src={Vrbo} alt="/" />
            </div>

    </div>
    
    
    </div>
    
  )
}

export default Accomodation