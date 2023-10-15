import React from 'react'

function Booking() {
  return (
    <div className='bg-white w-full py-16 px-10'>
        <div className='max-w-[1240px] flex flex-col md:flex-row justify-between '>
          <div >
            <p  className='mb-4 '>book </p>
            <div className='border-t border-blue-700 w-9'>

            <span ></span>
            </div>
           <div className='py-4'>
           <h1 className='text-2xl font-serif '>OUR PREFERRED <br />TRAVEL RESOURCES</h1>
            <p className='text-sm text-gray-600'>We make a small commission from purchases made from this page at no extra cost to you. <br /></p>
            <p className='text-sm text-gray-600 py-3'>We have only included the services that we think are the best and booking from these links will help keep our blog going. Thanks for supporting Anywhere We Roam.</p>
           </div>
           </div>
           <div className=' py-3 px-8   border-gray-300 bg-gray-200  w-[550px] h-[280px]'>
            <div className='flex flex-col justify-end items-center ml-72'>

            <h1 className='text-gray-600 mt-[55px] pb-4  w-[205px] ml-[40px]'>ANYWHERE WE ROAM</h1>
            <span className='border border-blue-700 w-9 ml-[120px] mb-2'></span>
            
            <ul className='text-sm flex flex-col items-end ml-20'>
              <li className='text-sm textblack py-2 '>BLOG</li>
              <li className='text-sm textblack py-2 '>PLACES</li>
              <li className='text-sm textblack py-2 '>EXPLORE</li>
              <li className='text-sm textblack py-2 '>INSTAGRAM</li>
            </ul>
            </div>
           </div>
        </div>

    </div>
  )
}

export default Booking