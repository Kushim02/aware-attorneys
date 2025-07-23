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
        <h3 className='font-semibold' style={{paddingLeft: '20px', marginBottom: '-40px'}}>About Us</h3>
        <div className='about-container'>
    <div className='about-content'>
        <h2 className='text-xl font-bold w-150 mb-5'>Our Experienced Attorneys Combine Legal Expertise with Personalized Service</h2>
        <p className='mb-2'>Our law firm provides legal services and was founded by legal advisors who have expertise and have the same vision and mission in providing legal services based on integrity and the advocate code of ethics.</p>
        <p className='mb-2'>In general, we provide legal services consisting of non-litigation services and litigation legal services</p>
        <button className='w-40 text-xs font-bold' onClick={handleClick}> {showMore ? 'Hide Details' : 'More About Us'}</button>
        {showMore && (
            <div className='extra'>
                <ul>
                <li>Efficient legal solutions tailored to clients</li>
                <li>Clear communication throughout the process</li>
                <li>The experienced team has a proven track record of success</li>
                <li>Protecting creative innovations and intellectual property</li>
                </ul>
            </div>
        )}
      </div>
      <div>
        <img src= {about} className='about-image'/>
      </div>
        </div>
    </div>
  )
}

export default About


