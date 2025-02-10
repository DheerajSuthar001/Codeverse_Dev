import React from 'react';
import SmallCards from './SmallCards';
import Logo1 from '../../../assets/TimeLineLogo/Logo1.svg';
import Logo2 from '../../../assets/TimeLineLogo/Logo2.svg';
import Logo3 from '../../../assets/TimeLineLogo/Logo3.svg';
import Logo4 from '../../../assets/TimeLineLogo/Logo4.svg';
import timelineImage from '../../../assets/Images/TimelineImage.png'
const timeLine = [
    {
        logo: Logo1,
        heading: "Leadership",
        description: "Fully committed to the success company",
        connecting: true

    },
    {
        logo: Logo2,
        heading: "Responsibility",
        description: "Students will always be our top priority",
        connecting: true
    },
    {
        logo: Logo3,
        heading: "Flexibility",
        description: "The ability to switch is an important skills",
        connecting: true
    },
    {
        logo: Logo4,
        heading: "Solve the problem",
        description: "Code your way to a solution",
        connecting: false
    },
]
function TimelineSection() {
    return (
        <div className=' w-8/12 flex  items-center mx-auto gap-16'>
            <div className=''>
                {
                    timeLine.map((el, index) => {
                        return <SmallCards key={index} icon={el.logo} title={el.heading} content={el.description} connect={el.connecting} />
                    })
                }
            </div>
            <div>
                <div className='relative shadow-blue-200 z-0 '>
                    <div className='w-[99%] h-[50%] rounded-full bg-blue-50  shadow-[0_0_150px_10px] shadow-blue-50 absolute top-[25%]   z-[1]  '></div>
                    <div className='z-[11]'>
                    <img src={timelineImage}
                        alt="timelineImage"
                        className=' relative shadow-white object-cover h-fit shadow-[22px_22px_0px_0px_rgba(0,_0,_0,_0.1)] z-10 '
                    />
                    </div>

                    <div className='absolute bg-caribbeangreen-700 flex flex-row rounded-sm text-white uppercase py-7
                left-[50%] translate-x-[-50%] translate-y-[-50%] z-[11]'>
                        <div className='flex flex-row gap-5 items-center border-r border-caribbeangreen-300 px-7'>
                            <p className='text-3xl font-bold'>10</p>
                            <p className='text-caribbeangreen-300 text-sm'>Years of Experience</p>
                        </div>

                        <div className='flex gap-5 items-center px-7'>
                            <p className='text-3xl font-bold'>250</p>
                            <p className='text-caribbeangreen-300 text-sm'>Type of Courses</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default TimelineSection