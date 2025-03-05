import React from 'react'

import {Swiper, SwiperSlide} from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import { FreeMode, Pagination}  from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';


import Course_Card from './Course_Card'

const CourseSlider = ({Courses}) => {
  return (
    <>
      {Courses?.length ? (
        <Swiper
          slidesPerView={1}
          spaceBetween={25}
          loop={true}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            1024: {
              slidesPerView: 4,
            },
            768:{
              slidesPerView: 3,
            },
            640:{
              slidesPerView: 2,
            },
            360:{
              slidesPerView: 1,
            },

          }}
          className="max-h-[30rem]"
        >
          {Courses?.map((course, i) => (
            <SwiperSlide key={i}>
              <Course_Card course={course} Height={"lg:h-[250px] max-lg:h-[200px] max-md:[h-[150px]]  max-sm:w-[300px] "} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <p className="text-xl text-richblack-5">No Course Found</p>
      )}
    </>
  )
}

export default CourseSlider




