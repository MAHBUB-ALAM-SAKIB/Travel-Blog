import React, { useState } from 'react'
import bg from './assets/bg.jpg'
import logo from './assets/logo.png'
import {GrClose} from  'react-icons/gr'
import {AiOutlineMenu} from  'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaFacebook} from 'react-icons/fa'
import {AiOutlineSearch} from  'react-icons/ai'
import {FaInstagram} from  'react-icons/fa'
import {FaFacebookF} from  'react-icons/fa'
import InstagramIcon from '@mui/icons-material/Instagram';


function Navabar() {
  const[nav,setNav]=useState(true)
const handleNav=()=>{
 setNav(!nav)
}
const closeNav=()=>{
  setNav(!nav)
}
  
  return (
  
   <div className='relative overflow-hidden  bg-cover bg-no-repeat p-5  h-screen'
   style={{backgroundImage:`url(${bg})`}}>
    
   
   <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto pt-4 text-white right-[60px] '>
        <div className='w-[90px] h-[90px]'>
          <img src={logo} alt="" />
        </div>
        <ul className='hidden md:flex'>
          <li className='text-black p-4'>EXPLORE</li>
          <li className='text-black p-4'>PLACES</li>
          <li className='text-black p-4'>BLOG</li>
          <li className='text-black p-4'>RESOURCES</li>
        </ul>
        <div className=' hidden md:flex space-x-4'> 
          <AiOutlineInstagram className='fill-black'  size={20}/>
          <FaFacebook className='fill-black'  size={20}/>
          <AiOutlineSearch className='fill-black' size={20}/>

        </div>
      
        <div onClick={handleNav} className='block md:hidden'>
        { nav?        <AiOutlineMenu size={20}/>: <GrClose size={20}/> }
        </div>
        <div className={nav?'fixed top-[-100%]' :'fixed left-0 top-0 bg-white h-full w-[100%] border-r-gray-900 ease-in-out duration-500'}>
        <img className='w-[65px] h-[65px] ml-[230px]' src={logo} alt="" />
        <div className='ease-out duration-200'>
        <GrClose onClick={closeNav} className='ml-[455px] mb-[4px] mt-1' size={20}/>
        </div>
        
          <ul className='uppercase p-4'>
          <li className='text-black p-6'>EXPLORE</li>
          <li className='text-black p-6'>PLACES</li>
          <li className='text-black p-6'>BLOG</li>
          <li className='text-black p-6'>ABOUT</li>
          <li className='text-gray-500 p-6'>RESORCES</li>
          <li className='p-2 flex space-x-2'><FaInstagram className='fill-black' size={30}/> <FaFacebookF className='fill-black' size={30} /></li>
          </ul>
         
        </div>
        
       
   </div>
   </div>
   
  
  )
}

export default Navabar