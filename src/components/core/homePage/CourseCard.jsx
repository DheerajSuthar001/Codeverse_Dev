import React from 'react'
import { MdPersonSearch } from "react-icons/md";
import { TbBinaryTree2Filled } from "react-icons/tb";
function CourseCard({ cardData, currentCard, setCurrentCard }) {
    return (
        <div className={` h-[300px]  flex flex-col justify-between p-5 ${currentCard===cardData.heading?
        'bg-white text-richblack-900 shadow-yellow-50 shadow-[12px_12px_0px_0px_rgba(0,_0,_0,_0.1)]':
         ' bg-richblack-800 text-richblack-200 hover:scale-95'} transition-transform duration-200 cursor-pointer  `}
         onClick={()=>setCurrentCard(cardData.heading)}
         >
            <div className='my-2'>
                <h3 className='font-bold'>{cardData.heading}</h3>
                <p className=' text-richblack-200 text-sm'>{cardData.description}</p>
            </div>
            <div className={`flex text-sm  pt-3 justify-between border-t-[1px] border-dashed border-richblack-200 ${currentCard===cardData.heading?
            ' text-[#0F7A9D]':' text-richblack-200' } `}>
                <div className='flex gap-2'>
                    <MdPersonSearch />
                    <p>{cardData.level}</p>
                </div>
                <div className='flex gap-2'>
                    <TbBinaryTree2Filled />
                    <p>{cardData.lessonNumber} Lessons</p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard