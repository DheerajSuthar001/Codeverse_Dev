import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import HighlightText from '../components/core/homePage/HighlightText';
import CustomButton from '../components/core/homePage/CustomButton';
import banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/homePage/CodeBlocks';
import Footer from '../components/core/common/Footer';
import TimelineSection from '../components/core/homePage/TimelineSection';
import LearningSection from '../components/core/homePage/LearningSection';
import InstructorSection from '../components/core/homePage/InstructorSection';
import ExploreMore from '../components/core/homePage/ExploreMore';
import ReviewSlider from '../components/core/common/ReviewSlider';
const Home = () => {
    return (
        <div>
            {/* section - 1  */}
            <div className='bg-transparent mx-auto flex flex-col gap-11 items-center max-sm:items-start max-sm:px-4 justify-between text-white w-10/12 max-sm:w-full max-md:w-full max-lg:w-full my-10'>
                <Link to={"/signup"}>
                    <div className='bg-richblack-800 shadow-sm shadow-richblack-200  group rounded-full transition-all duration-200 hover:scale-95  '>
                        <button className='px-8 py-2 rounded-full flex gap-3 justify-center items-center  font-bold text-richblack-200 transition-all duration-200
                     group-hover:bg-richblack-900 max-sm:text-base '>
                            <p>Become an instructor</p>
                            <FaArrowRight />
                        </button>
                    </div>


                </Link>

                <div className='flex flex-col items-center  gap-5 w-[70%] max-sm:w-full max-sm:items-start  ' >
                    <h1 className='text-white text-center font-bold text-4xl max-sm:text-3xl'>Empower Your Future with <HighlightText text='Coding Skills' /> </h1>
                    <p className='text-center text-richblack-200 text-lg max-sm:text-justify'>
                        With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
                    </p>
                </div>

                <div className='flex gap-8 max-sm:justify-center max-sm:w-full max-sm:text-xl'>
                    <CustomButton active={true} linkTo={'/signup'} >
                        Learn More
                    </CustomButton>
                    <CustomButton active={false} linkTo={'/login'}>
                        Book a Demo
                    </CustomButton>

                </div>
                <div className='mt-5 relative flex  justify-center w-11/12 '>
                    <div className='max-w-[400px] max-h-[120px] rounded-full bg-blue-50  shadow-[0_0_150px_80px] shadow-blue-50 absolute top-[120px] z-[9]  '></div>
                    <video muted loop autoPlay className='shadow-[22px_22px_0px_0px_rgba(0,_0,_0,_0.1)] max-sm:shadow-[12px_12px_0px_0px_rgba(0,_0,_0,_0.1)] max-sm:shadow-white  max-md:shadow-[12px_12px_0px_0px_rgba(0,_0,_0,_0.1)] max-md:shadow-white  shadow-white z-10  border-none '>
                        <source src={banner} ></source>
                    </video>
                </div>
                <div className='max-sm:w-full max-md:w-full'>
                    <CodeBlocks
                        position={'flex-row'}
                        heading={<div>
                            Start <HighlightText text='coding potential' /> with our online courses.
                        </div>}
                        subheading='Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.'
                        custombutton1={{
                            active: true,
                            linkTo: `/signup`,
                            text: 'Try it Yourself'
                        }}
                        custombutton2={{
                            active: false,
                            linkTo: `/signup`,
                            text: 'Learn More'
                        }}
                        codeblock={`<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Web Page</title>
    <link rel="stylesheet" href="styles.css"> 
</head>
<body>
    <header> <h1>Welcome to My Website</h1></header>
    <nav><ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>`}
                        codecolor={'text-yellow-100'}

                    />
                    <CodeBlocks
                        position={'flex-row-reverse'}
                        heading={<div>
                            Start <HighlightText text='coding in seconds.' />
                        </div>}
                        subheading={`Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson`}
                        custombutton1={{
                            active: true,
                            linkTo: `/signup`,
                            text: 'Continue Lessons'
                        }}
                        custombutton2={{
                            active: false,
                            linkTo: `/signup`,
                            text: 'Learn More'
                        }}
                        codeblock={`<!DOCTYPE html>
<html lang="en">
<head>
    <title>My Web Page</title>
    <link rel="stylesheet" href="styles.css"> 
</head>
<body>
    <header> <h1>Welcome to My Website</h1></header>
    <nav><ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>`}
                        codecolor={'text-yellow-100'}

                    />


                </div>

                <ExploreMore />


            </div>
            {/* Section 2 */}
            <div className=' bg-pure-greys-5 text-richblack-700 max-sm:px-4 '>
                <div className='relative flex items-center justify-center'>
                    <div className='homePage_bg h-[333px] max-sm:h-[200px] max-md:h-[200px]'></div>
                    <div>

                    </div>
                    <div className=' max-w-[11/12] absolute flex gap-4'>
                        <CustomButton active={true} linkTo={'/courses'}>
                            <p>Explore Full Catalog</p>
                            <FaArrowRight />
                        </CustomButton>
                        <CustomButton active={false} linkTo={'/courses'}>
                            <p>Learn More</p>
                        </CustomButton>
                    </div>
                </div>
                <div className='w-8/12 max-sm:w-full  flex max-sm:flex-col mx-auto justify-center gap-12 py-12 
                max-sm:gap-5 '>
                    <div>
                        <h1 className='font-bold text-3xl'>Get the skills you need for a <HighlightText text='job that is in demand.' /></h1>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className=' text-richblack-400 font-bold'>The modern Codeverse is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills</p>
                        <CustomButton active={true} linkTo={'/signup'}>Learn More</CustomButton>
                    </div>

                </div>
                <TimelineSection />
                <LearningSection />

            </div>
            {/* Section 3 */}
            <div className='w-8/12 max-sm:w-full max-sm:px-4 mx-auto  max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>
                <InstructorSection />
                <h2 className='text-center text-4xl max-sm:text-3xl font-bold mt-10 max-sm:text-start '>Review from Other Learners</h2>
                {/* Review Slider here */}
                <ReviewSlider />
            </div>
            {/* Footer Section */}
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home