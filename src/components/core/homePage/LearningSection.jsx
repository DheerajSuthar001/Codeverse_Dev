import React from 'react'
import HighlightText from './HighlightText'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CustomButton from '../homePage/CustomButton';

const LearningSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center max-sm:items-center'>

            <div className='text-4xl max-sm:text-3xl font-semibold text-center max-sm:text-start'>
                Your Swiss Knife for
                <HighlightText text={" learning any language"} />
            </div>

            <div className='text-center max-sm:w-full max-sm:text-justify text-richblack-600 mx-auto max-sm:mx-0 text-base font-medium w-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row max-sm:flex-col max-md:flex-col items-center justify-center max-sm:justify-start mt-5 max-sm:w-full max-lg:w-[80%]'>
                <img 
                    src = {know_your_progress}
                    alt = "KNowYourProgressImage"
                    className='object-contain -mr-32   min-w-[30%] '
                />
                <img 
                    src = {compare_with_others}
                    alt = "KNowYourProgressImage"
                    className='object-contain min-w-[30%]'
                />
                <img 
                    src = {plan_your_lesson}
                    alt = "KNowYourProgressImage"
                    className='object-contain -ml-36 min-w-[30%]'
                />
            </div>

            <div className='w-fit pb-10'>
                <CustomButton active={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                </CustomButton>
            </div>

      </div>
    </div>
  )
}

export default LearningSection
