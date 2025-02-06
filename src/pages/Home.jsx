import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/homePage/HighlightText';
import CustomButton from '../components/core/homePage/CustomButton';
import banner from '../assets/Images/banner.mp4'
const Home = () => {
    return (
        <div>
            {/* section - 1  */}
            <div className='bg-transparent mx-auto flex flex-col gap-11 items-center justify-between text-white w-8/12 my-10'>
                <Link to={"/signup"}>
                    <div className='bg-richblack-800 shadow-sm shadow-richblack-200  group rounded-full transition-all duration-200 hover:scale-95 '>
                    <button className='px-8 py-2 rounded-full flex gap-3 justify-center items-center  font-bold text-richblack-200 transition-all duration-200
                     group-hover:bg-richblack-900'>
                        <p>Become an instructor</p>
                        <FaArrowRight />
                    </button>
                    </div>
                    

                </Link>

                <div className='flex flex-col items-center  gap-5 w-[70%]  ' >
                    <h1 className='text-white font-bold text-4xl'>Empower Yout Future with <HighlightText text='Coding Skills'/> </h1>
                    <p className='text-center text-richblack-200 text-lg'>
                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                    </p>
                </div>

                <div className='flex gap-8'>
                    <CustomButton active={true} linkTo={'/signup'} >
                        Learn More
                    </CustomButton>
                    <CustomButton active={false} linkTo={'/login'}>
                        Book a Demo
                    </CustomButton>
                    
                </div>
                <div className='mt-5 relative flex justify-center w-11/12'>
                    <div className='w-[400px] h-[100px] rounded-full bg-blue-50  shadow-[0_0_150px_80px] shadow-blue-50 absolute top-[120px] z-[9]  '></div>
                    <video muted loop autoPlay className='shadow-[22px_22px_0px_0px_rgba(0,_0,_0,_0.1)] shadow-white z-10  border-none '>
                        <source src={banner} ></source>
                    </video>
                </div>

            </div>
        </div>
    )
}

export default Home