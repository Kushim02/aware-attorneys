import React, { useRef } from "react";
import image1 from "../images/avataaars (1).png";
import image2 from "../images/avataaars (2).png";
import image3 from "../images/avataaars (4).png";
import image4 from "../images/avataaars.png";
import image5 from "../images/avataaars (5).png";
import image6 from "../images/avataaars (3).png";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'

const Review = () => {
  const swiperRef = useRef(null);

  const reviews = [
    {
      image: image1,
      name: "John Doe",
      review:
        "I had an excellent experience with this law firm! the law firm for expertly guiding her to reconcile with her spouse. The team delivers professional support, explains every step clearly, and earns her strong recommendation",
    },
    {
      image: image2,
      name: "James Carter",
      review:
        "I applaud the law firm for skillfully resolving a business dispute, saving his company with meticulous attention and excellent communication.",
    },
    {
      image: image3,
      name: "Sarah Mitchell",
      review:
        "I admire the law firm for compassionately securing fair compensation in her personal injury claim, executing a smooth process with expertise.",
    },
    {
      image: image4,
      name: "Laura Bennett",
      review:
        "I appreciate the law firm for knowledgeably and aggressively resolving her employment issue, achieving a quick, favorable result with a friendly staff.",
    },
    {
      image: image5,
      name: "Thomas Nguyen",
      review:
        "I value the law firm for professionally and empathetically navigating his family law matter, exceeding expectations with consistent availability",
    },
    {
      image: image6,
      name: "Micheal O'Connor",
      review:
        "I commend the law firm for thoroughly managing his real estate transaction, promptly addressing questions, and delivering a satisfying outcome at reasonable fees.",
    },
  ];

  
 const nextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const prevSlide = () => {
    if(swiperRef.current){
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-between md:gap-10 pl-5 md:mx-20">

        <div>
          <p className=" text-sm md:text-base">TESTIMONALS</p>
          <h1 className="font-bold sm:text-lg md:text-2xl font-['Georgia',serif]" style={{color: 'rgb(166, 139, 51)'}}>What Our Clients Say About Us</h1>
        </div>
        <div className=" max-w-6xl relative mt-4 p-4 bg-white/90 rounded-lg ">
        <Swiper
        ref={swiperRef}
        breakpoints={{
          340: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
          700: {slidesPerView: 1,
          spaceBetween: 15
        },
        }}
        freeMode={true}
        pagination={{clickable: true}}
        loop={true}
        modules={[FreeMode, Pagination, Navigation]}
        className=" w-[280px] md:w-[450px] p-10"
        >  
          {reviews.map((review, index) => (
            <SwiperSlide>
            <div key={index} className="w-[-450px] h-[-400] overflow-hidden  bg-white p-4 rounded-lg shadow-md mb-5 ">
              <div className="flex flex-row items-center ">
                <img
                  src={review.image}
                  className="w-15 md:w-20 rounded-full shadow-lg"
                />
                <p className="ml-5 font-semibold md:text-lg">{review.name}</p>
              </div>
              <div>
                <p className="w-fit text-xs md:text-sm">{review.review}</p>
              </div>
            </div>
            </SwiperSlide>
          ))}
          </Swiper>
          <div className="flex gap-4">
            <button className="absolute bottom-[-2] left-2 transform -translate-y-1/2 p-2 rounded-full z-20 cursor-pointer" onClick={prevSlide}>
            <FaArrowLeftLong/>
            </button>
          <button onClick={nextSlide} className="absolute bottom-[-2] right-2 transform -translate-y-1/2 p-2 z-20 cursor-pointer">
            <FaArrowRightLong/>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
