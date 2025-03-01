import React from 'react'
import CustomButton from './CustomButton'
import { FaArrowRight } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
function CodeBlocks({ position, heading, subheading, custombutton1, custombutton2, codeblock, backgroundgradient, codecolor }) {

    return (
        <div className={`flex ${position} gap-12 my-[6rem] max-sm:my-[3rem] max-sm:flex-col  max-md:my-[3rem] max-lg:my-[3rem] max-md:flex-col items-center max-lg:px-4  `}>
            <div className=' flex flex-col gap-12 flex-1 max-sm:gap-6 max-lg:gap-6  '>
                <div className='max-sm:text-justify max-md:text-center '>
                    <h1 className='font-bold text-3xl text-white max-lg:text-2xl'>{heading}</h1>
                    <p className=' text-richblack-200 mt-2 max-lg:text-sm'>{subheading}</p>
                </div>
                <div className='flex gap-4 max-md:justify-center '>
                    <CustomButton active={custombutton1.active} linkTo={custombutton1.linkTo}>
                        <span>{custombutton1.text}</span>
                        <FaArrowRight />
                    </CustomButton>
                    <CustomButton active={custombutton2.active} linkTo={custombutton2.linkTo}>
                        <p>{custombutton2.text}</p>
                    </CustomButton>
                </div>
            </div>
            <div className='flex flex-1 h-fit p-4 bg-richblack-800 bg-opacity-25 relative max-sm:w-full ' >
                <div className="absolute -top-[7rem] -left-[7rem] opacity-40 max-w-[500px] max-h-[500px] min-w-[300px] min-h-[300px] rounded-full bg-[radial-gradient(circle,_rgba(0,255,255,0.3),_rgba(0,255,255,0)_60%)]"></div>
                <div className=' flex flex-col   items-center text-richblack-200 font-bold px-3  max-sm:text-sm max-lg:text-sm '>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                </div>
                <div className={` font-mono ${codecolor} pr-2   `}>
                    <pre className='w-[500px] max-sm:text-sm max-lg:text-sm max-lg:w-[380px] '>
                        <TypeAnimation

                            sequence={[codeblock, 1000, ""]}
                            repeat={Infinity}
                            style={
                                {
                                    whiteSpace: 'pre-line',
                                    display: 'block'
                                }
                            }
                            omitDeletionAnimation={true}
                        />
                    </pre>

                </div>
            </div>
        </div>
    )
}

export default CodeBlocks