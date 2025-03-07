import React from 'react'
import Instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CustomButton from "../homePage/CustomButton"
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className=' mx-auto max-sm:mx-0'>
      <div className='flex flex-row gap-20 items-center max-sm:flex-col-reverse max-sm:items-start '>

        <div className='w-[50%] max-sm:w-full'>
            <img
                src={Instructor}
                alt=""
                className='shadow-white'
            />
        </div>

        <div className='w-[50%] max-sm:w-full max-sm:gap-5 flex flex-col gap-10'>
            <div className='text-4xl max-sm:text-3xl font-semobold w-[50%]'>
                <p>Become an <HighlightText text={"Instructor"} /></p>
                
            </div>

            <p className='font-medium text-[16px] w-[80%] text-richblack-300'>
            Instructors from around the world teach millions of students on Codeverse. We provide the tools and skills to teach what you love.
            </p>

            <div className='w-fit'>
                <CustomButton active={true} linkto={"/signup"}>
                    <div className='flex flex-row gap-2 items-center'>
                        Start Learning Today
                        <FaArrowRight />
                    </div>
                </CustomButton>
            </div>


        </div>

      </div>
    </div>
  )
}

export default InstructorSection
