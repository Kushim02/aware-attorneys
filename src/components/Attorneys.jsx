import React, { useState, useRef } from 'react'
import './Attorneys.css'
import image1 from '../images/steward-masweneng-IvaGYGAX3jI-unsplash.jpg';
import image2 from '../images/lawyer.avif';
import image3 from '../images/lawyer1.avif';
import image4 from '../images/melvin-kioko-svGwIp_YcOU-unsplash.jpg';
import image5 from '../images/sebastian-herrmann-n4_Q2dDYy80-unsplash.jpg';
import image6 from '../images/nussbaum-law-IOvsEAEjnDE-unsplash.jpg';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { RxArrowTopRight } from 'react-icons/rx';


const Attorneys = () => {
  const [currentSlide, setCurrentSlide] = useState(0);


  const cards = [
    {image: image1, name: 'Izang Kushim', title: 'Founder'},
    {image: image2, name: 'David Harry', title: 'Co-Founder'},
    {image: image3, name: 'Sabrina Carpenter', title: 'Associate Lawyer'},
    {image: image4, name: 'Kuminga John', title: 'Associate Lawyer'},
    {image: image5, name: 'John Albert', title: 'Associate Lawyer'},
    {image: image6, name: 'Patricia Lebsack', title: 'Associate Lawyer'},
  ]

  
  const nextSlide = () => {
    
  };

  const prevSlide = () => {
    
  };

  return (
    <div className='p-[20px]'>
      <h2 className="text-xl md:text-2xl font-bold font-['Georgia',serif]" style={{color: 'rgb(166, 139, 51)'}}>Meet Our Talented Attorneys</h2>
      <p className=''>Our team consists of professionals with decades of combined experience, who are dedicated to providing strategic and effective legal solutions.</p>
      <div className='w-3/4 m-auto'>
      <div className='mt-20 relative p-10'>
        <Swiper 
        breakpoints = {{
          340: {
            slidesPerView: 1,
            spaceBetween: 15
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1200:{
            slidesPerView: 3,
            spaceBetween: 15
          }
        }}
        freeMode={true}
        pagination={{
          clickable: true
        }}
        loop={true}
        autoplay={{
          pauseOnMouseEnter: true,
          stopOnLastSlide: false,
          speed: 1000,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        className='max-w-[90%] lg:max-w-[80%]'
        >
           {cards.map((card) => ( 
            <SwiperSlide key={card.name}>
            <div  className='bg-white/80 h-[350px] overflow-hidden text-black rounded-xl shadow-xl/30 relative transform transition-all duration-300 hover:scale-105'>
            <div className='h-56 rounded-t-xl bg-white flex justify-center items-center rounded-t-xl '>
            <img src= {card.image} className='h-44 w-44 rounded-full border-4 border-white'/>
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
            <p className=' font-semibold'>{card.name}</p>
            <p className='text-center'>{card.title}</p>
            </div>
             <RxArrowTopRight className='absolute bottom-5 left-2 w-[15px] h-[15px] '/>
          </div>
            </SwiperSlide>
            ))}
  
        </Swiper>
       
        
        {/* <button className='absolute top-1/2 left-[-30px] transform -translate-y-1/2 text-custom-gold/80  p-2 rounded-full  z-10'
        onClick={prevSlide}>
          <FaArrowLeft/>
          </button>
        <button className='absolute top-1/2 right-[-30px] transform -translate-y-1/2 text-custom-gold/80 p-2 rounded-full hover:white z-10'
        onClick={nextSlide}>
          <FaArrowRight/>
          </button> */}
      </div>
      </div>

    </div>
  )
}

export default Attorneys;

