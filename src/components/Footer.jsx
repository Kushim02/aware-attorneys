import React from 'react';
import image from '../images/image.png'
import { FaCopyright, FaEnvelope, FaLocationArrow, FaLocationPin, FaPhone, FaRegCopyright} from 'react-icons/fa6';
import { FaFacebook, FaFacebookF, FaFacebookMessenger, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-50 p-5 md:p-10 w-fit'>
     <div className='flex justify-evenly mb-10'>
      <div>
        <img src={image} className='w-14 sm:w-16 md:w-20 mb-4'/>
        <p className='w-22 mr-2 md:w-40 text-[9px] sm:text-[12px]'>A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service offered by a law firm.</p>
      </div>
      <div className='flex flex-row justify-between gap-2 sm:gap-3'>
      <div className='w-25 md:w-40'>
        <h3 className='font-semibold text-xs sm:text-base text-custom-gold-100' style={{color: 'rgb(166, 139, 51)'}}>PRACTICE AREA</h3>
        <p className='text-[10px] mb-1 md:mb-0 sm:text-sm md:text-base'>Corporate and Commercial Law</p>
        <p className='text-[10px] mb-1 md:mb-0 sm:text-sm md:text-base'>Intellectual Property</p>
        <p className='text-[10px] mb-1 md:mb-0 sm:text-sm md:text-base'>Employment Law</p>
        <p className='text-[10px] mb-1 md:mb-0 sm:text-sm md:text-base'>Real Estate Law</p>
        <p className='text-[10px] mb-1 md:mb-0 sm:text-sm md:text-base'>General Contracts</p>
        <p className='text-[10px] sm:text-sm md:text-base'>Tax Law</p>
      </div>
      <div className=' md:w-40'>
        <h3 className='font-semibold text-xs sm:text-base text-custom-gold-100' style={{color: 'rgb(166, 139, 51)'}}>ESSENTIAL</h3>
        <p className='text-[10px] sm:text-sm mb-1 md:mb-0 md:text-base'>About Us</p>
        <p className='text-[10px] sm:text-sm mb-1 md:mb-0 md:text-base'>Services</p>
        <p className='text-[10px] sm:text-sm md:text-base'>Terms & Conditions</p>
      </div>
      <div>
        <h3 className='font-semibold text-xs sm:text-base text-custom-gold-100' style={{color: 'rgb(166, 139, 51)'}}>CONTACT</h3>
        <a className='flex gap-4 items-center text-[10px] sm:text-sm mb-1 md:mb-0 md:text-base' href='tel: +2347046453599'><FaPhone style={{color: 'rgb(166, 139, 51)'}}/> +234 704 645 3599</a>
        <a onClick={() => console.log("Send email")} className='flex gap-4 items-center text-[10px] sm:text-sm mb-1 md:mb-0 md:text-base' href='mailto:izangkushim1@gmail.com'><FaEnvelope style={{color: 'rgb(166, 139, 51)'}}/> Send Email</a>
        <p className='flex gap-4 items-center w-[-50px] text-[10px] sm:text-sm md:mb-0 md:text-base'><FaLocationPin style={{color: 'rgb(166, 139, 51)'}}/>No.2 Boundary Street, Jos, Plateau State.</p>
      </div>
      </div>
        <hr/>
        </div>
           <div className='flex justify-center'> 
            <p className='flex items-center gap-1 text-center text-xs sm:text-sm md:text-base'>Copyright <span> <FaRegCopyright/> </span> 2025 Design by  All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
