import React from 'react';
import image from '../images/image.png'
import { FaCopyright, FaEnvelope, FaLocationArrow, FaLocationPin, FaPhone, FaRegCopyright} from 'react-icons/fa6';
import { FaFacebook, FaFacebookF, FaFacebookMessenger, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-50 p-10'>
     <div className='flex justify-evenly mb-10'>
      <div>
        <img src={image} className='w-20 '/>
        <p className='w-40 text-sm'>A law firm is a business entity formed by one or more lawyers to engage in the practice of law. The primary service offered by a law firm.</p>
      </div>
      <div>
        <h3 className='font-semibold text-custom-gold-100' style={{color: 'rgb(166, 139, 51)'}}>PRACTICE AREA</h3>
        <p>Corporate and Commercial Law</p>
        <p>Intellectual Property</p>
        <p>Employment Law</p>
        <p>Real Estate Law</p>
        <p>General Contracts</p>
        <p>Tax Law</p>
      </div>
      <div>
        <h3 className='font-semibold text-custom-gold-100' style={{color: 'rgb(166, 139, 51)'}}>ESSENTIAL</h3>
        <p>About Us</p>
        <p>Services</p>
        <p>Terms & Conditions</p>
      </div>
      <div>
        <h3 className='font-semibold text-custom-gold-100' style={{color: 'rgb(166, 139, 51)'}}>CONTACT</h3>
        <a className='flex gap-4 items-center' href='tel: +2347046453599'><FaPhone style={{color: 'rgb(166, 139, 51)'}}/> +234 704 645 3599</a>
        <a onClick={() => console.log("Send email")} className='flex gap-4 items-center' href='mailto:izangkushim1@gmail.com'><FaEnvelope style={{color: 'rgb(166, 139, 51)'}}/> Send Email</a>
        <p className='flex gap-4 items-center w-[-50px]'><FaLocationPin style={{color: 'rgb(166, 139, 51)'}}/>No.2 Boundary Street, Jos, Plateau State.</p>
      </div>
        <hr/>
        </div>
           <div className='flex justify-center'> 
            <p className='flex items-center gap-1 text-center'>Copyright <span> <FaRegCopyright/> </span> 2025 Design by  All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
