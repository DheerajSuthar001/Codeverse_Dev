import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"

import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules'
import ReactStars from "react-rating-stars-component"
import { apiConnector } from '../../../services/apiConnector'
import { ratingsEndpoints } from '../../../services/apis'
import { FaStar } from 'react-icons/fa'


const ReviewSlider = () => {

    const [reviews, setReviews] = useState([]);
    const truncateWords = 15;


    useEffect(() => {
        const fetchAllReviews = async () => {
            const { data } = await apiConnector("GET", ratingsEndpoints.REVIEWS_DETAILS_API)
            console.log("LOgging response in rating", data);

            if (data?.success) {
                setReviews(data?.data);
            }

            console.log("Printing Reviews", reviews);

        }
        fetchAllReviews();
    }, []);


    return (
        <div className='text-white mt-5'>
            <div className='h-[190px] max-w-maxContent'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={24}
                    loop={true}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className='w-full'
                >

                    {
                        reviews.map((review, index) => (
                            <SwiperSlide key={index} className='flex flex-col gap-4 bg-richblack-700 rounded-lg p-3 min-w-[300px]'>
                                <div className='flex gap-4'>
                                    <img
                                        src={review?.user?.image
                                            ? review?.user?.image
                                            : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`}
                                        alt='Profile Pic'
                                        className='h-9 w-9 object-cover rounded-full'
                                    />
                                    <div>
                                    <p className='font-bold '>{review?.user?.firstName} {review?.user?.lastName}</p>
                                    <p className=' text-richblack-300 text-xs'>{review?.course?.courseName}</p>
                                    </div>
                                </div>
                                <p>
                                    {review?.review}
                                </p>
                                <div className='flex text-yellow-5 items-center gap-4'>
                                <p>{review?.rating.toFixed(1)}</p>
                                <ReactStars
                                    count={5}
                                    value={review.rating}
                                    size={20}
                                    edit={false}
                                    activeColor="#ffd700"
                                    emptyIcon={<FaStar />}
                                    fullIcon={<FaStar />}
                                />
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    )
}

export default ReviewSlider
