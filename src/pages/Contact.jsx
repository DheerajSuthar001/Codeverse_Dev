import React from 'react'
import { IoMdChatbubbles } from "react-icons/io";
import { RiRoadMapFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import ContactUsForm from '../components/ContactPage/ContactUsForm';
import Footer from '../components/core/common/Footer';
function Contact() {
    return (
        <div className='w-full mt-16 max-lg:mt-8 '>
            <div className='w-8/12 mx-auto flex justify-center gap-16 mb-16 max-lg:w-full max-lg:px-4 max-lg:flex-col-reverse  '>
                <div className=' bg-richblack-700 text-richblack-200 rounded-lg p-10 flex flex-col gap-10 max-sm:gap-4 max-sm:p-4 h-fit max-lg:flex-row max-lg:justify-between '>
                    <div className='flex items-baseline gap-2 max-lg:flex-col max-lg:items-center max-lg:text-center max-sm:w-[30%]'>
                        <div>
                            <IoMdChatbubbles />
                        </div>
                        <div>
                            <h2 className='font-bold text-lg text-white max-sm:text-sm'>Chat with us</h2>
                            <div className=' text-xs text-richblack-50'>
                                <p>Our friendly team is </p>
                                <a className='font-bold' href='mailto:httpsTheCodeVerse@gmail.com'>@TheCodeVerse</a>
                            </div>
                        </div>
                    </div>

                    <div className='flex gap-2 max-lg:flex-col max-lg:items-center max-lg:text-center max-sm:w-[30%] '>
                        <div>
                            <RiRoadMapFill />

                        </div>
                        <div>
                            <h2 className='font-bold text-lg text-white max-sm:text-sm'>Visit us</h2>
                            <div className='text-xs text-richblack-50'>

                                <p>Come and say hello at our office HQ.</p>
                                <p className='font-bold'>Pune,India</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 max-lg:flex-col max-lg:items-center max-lg:text-center max-sm:w-[30%]'>
                        <div>
                            <IoCall />

                        </div>
                        <div>
                            <h2 className='font-bold text-lg text-white max-sm:text-sm'>Call us</h2>
                            <div className='text-xs text-richblack-50'>

                                <p>Mon - Fri From 8am to 5pm</p>
                                <p className='font-bold'>+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' p-10 max-lg:p-4 border-[1px] border-richblack-200 rounded-lg flex flex-col gap-10 max-lg:border-0'>
                    <div className=''>
                        <h1 className='font-bold text-3xl text-white'>
                            Got a Idea? We’ve got the skills. Let’s team up
                        </h1>
                        <p className=' text-richblack-200'>Tell us more about yourself and what you’re got in mind.</p>
                    </div>
                    <ContactUsForm />
                </div>

            </div>
            <Footer/>
        </div>
    )
}

export default Contact