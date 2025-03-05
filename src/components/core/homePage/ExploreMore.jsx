import React from 'react'
import  {HomePageExplore} from "../../../data/homepage-explore"
import HighlightText from './HighlightText';
import { useState } from 'react';
import CourseCard from './CourseCard';

const tabsName = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const ExploreMore = () => {

    const [currentTab,setCurrentTab]=useState(tabsName[0]);
    const [courses,setCourses]=useState(HomePageExplore[0]?.courses);
    const [currentCard,setCurrentCard]=useState(HomePageExplore[0].courses[0].heading);

    const setMyCards=(element)=>{
        setCurrentTab(element);
        const result = HomePageExplore.filter((course) => course.tag === element);
        
        setCourses(result[0].courses);
        setCurrentCard(result[0].courses[0].heading);
    }

  return (
    <div className='relative w-11/12 max-sm:w-full flex flex-col items-center max-sm:items-start'>

      <div className='text-4xl max-sm:text-3xl font-semibold text-center max-sm:text-start'>
        <p>Unlock the </p> 
        <HighlightText text={"Power of Code"} />
      </div>

      <p className='text-center text-richblack-300 text-sm text-[16px] mt-3'>
        Learn to build anything you can imagine
      </p>  

      <div className='mt-5 w-8/12 max-sm:w-full max-md:w-full max-lg:w-fit flex flex-row justify-between rounded-full bg-richblack-800 mb-5 border-richblack-100
      px-1 py-1'>
      {
        tabsName.map( (element, index) => {
            return (
                <div
                key={index}
                className={`text-[16px] max-sm:text-sm max-sm:justify-center max-sm:min-w-[18%] max-md:min-w-[18%] text-center flex items-center gap-2
                ${currentTab===element?
                'text-white bg-richblack-900 font-medium':
                ' text-richblack-200'
                } rounded-full transition-all duration-200 cursor-pointer
                hover:bg-richblack-900 hover:text-richblack-5 px-7 py-2 max-sm:px-2 max-sm:py-1`} 
                onClick={()=>setMyCards(element)}
                >
                {element}
                </div>
                
            )
        })
      }

      </div>

      

      {/* course card ka group */}

      <div className=' flex flex-row max-sm:flex-col max-md:flex-col gap-10 justify-between w-full'>
        {
            courses.map(  (element, index) => {
                return (
                    <CourseCard 
                    key={index}
                    cardData = {element}
                    currentCard = {currentCard}
                    setCurrentCard = {setCurrentCard}
                    />
                )
            } )
        }
      </div>


    </div>
  )
}

export default ExploreMore
