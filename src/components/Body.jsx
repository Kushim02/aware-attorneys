import React from 'react'
import './Body.css'
import sideimage from '../images/lawimage2.avif'
import { FaPhoneAlt } from 'react-icons/fa'

const Body = () => {
   
  return (
    <div className='pt-16 flex flex-col md:flex-row justify-between items-center p-4 mt-8'>
      <div className='flex flex-col justify-center items-center md:justify-start text-center md:text-left mb-5 max-w-lg'>
        <h2 className='text-sm sm:text-xl md:text-2xl font-bold mb-5 mt-10 md:mt-0'> Trusted legal solutions for the real world.</h2>
        <p className='mb-3 text-[10px] sm:text-sm '>We specialise in corporate, commercial, intellectual property law and dispute resolution</p>
        <div className='flex flex-col  sm:flex-row sm:justify-start  mt-2 sm:gap-2'>
            <button className='request w-40 p-2 sm:mb-0 sm:text-sm md:text-base sm:w-auto text-[10px]'><a href='mailto:izangkushim1@gmail.com'>Request Consultation</a></button>
            <button className='call bg-stone-50 p-2 sm:mb-0 mt-2 sm:mt-0 w-40 text-xs sm:text-sm md:text-base  sm:w-auto flex items-center'><a href='tel: +2347046453599' className='flex'><FaPhoneAlt className='text-custom text-xl sm:text-2xl mr-1'/> <span>+234-704-645-3599</span></a> </button>
        </div>
      </div>
      <div>
        <img src= {sideimage} className='w-[700px]'/>
      </div>
    </div>
  )
}

export default Body
