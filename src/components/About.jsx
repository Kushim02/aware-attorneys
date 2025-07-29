import React, { useState } from 'react'
import about from '../images/lawimage1.avif';
import {FaCheck, FaShieldAlt, FaLock} from 'react-icons/fa';
import './About.css'

const About = () => {
    const [showMore, setShowMore] = useState (false);

    const handleClick = () => {
        setShowMore(!showMore); 
    };

  return (
    <div className='' style={{padding: '20px'}}>
        <h3 className='font-semibold text-sm sm:text-lg pl-5 mb-[-10] md:mb-[-40]' >About Us</h3>
        <div className=' flex flex-col sm:flex-col md:flex-row justify-between items-center gap-4 md:gap-6'>
    <div className=' text-center sm:text-center md:text-left sm:w-fit md:w-1/2 max-w-md mx-auto md:mx-0'>
        <h2 className='text-lg sm:text-xl md:text-2xl font-bold text-[rgb(166,139,51)] font-georgia w-fit sm:w-fit md:w-[600px] mb-5 md:w-[100px]'>Our Experienced Attorneys Combine Legal Expertise with Personalized Service</h2>
        <p className='mb-2 text-sm sm:text-base'>Our law firm provides legal services and was founded by legal advisors who have expertise and have the same vision and mission in providing legal services based on integrity and the advocate code of ethics.</p>
        <p className='mb-2 text-sm sm:text-base'>In general, we provide legal services consisting of non-litigation services and litigation legal services</p>
        <button className='p-1 border-none text-white bg-[rgb(180,150,45)] cursor-pointer w-40 text-xs font-bold' onClick={handleClick}> {showMore ? 'Hide Details' : 'More About Us'}</button>
        {showMore && (
            <div className='extra'>
                <ul className='list-disc pl-5 text-xs sm:text-sm'>
                <li>Efficient legal solutions tailored to clients</li>
                <li>Clear communication throughout the process</li>
                <li>The experienced team has a proven track record of success</li>
                <li>Protecting creative innovations and intellectual property</li>
                </ul>
            </div>
        )}
      </div>
      <div>
        <img src= {about} className='about-image w-full md:w-auto md:max-w-md h-auto object-cover'/>
      </div>
        </div>
    </div>
  )
}

export default About


