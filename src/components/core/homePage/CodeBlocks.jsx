import React from 'react'
import CustomButton from './CustomButton'
import { FaArrowRight } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
function CodeBlocks({ position, heading, subheading, custombutton1, custombutton2, codeblock, backgroundgradient, codecolor }) {

    return (
        <div className={`flex ${position} gap-12 my-[9rem] items-center  `}>
            <div className=' flex flex-col gap-12 flex-1 '>
                <div className=''>
                    <h1 className='font-bold text-3xl text-white'>{heading}</h1>
                    <p className=' text-richblack-200 mt-2'>{subheading}</p>
                </div>
                <div className='flex gap-4'>
                    <CustomButton active={custombutton1.active} linkTo={custombutton1.linkTo}>
                        <span>{custombutton1.text}</span>
                        <FaArrowRight />
                    </CustomButton>
                    <CustomButton active={custombutton2.active} linkTo={custombutton2.linkTo}>
                        <p>{custombutton2.text}</p>
                    </CustomButton>
                </div>
            </div>
            <div className='flex flex-1 h-fit p-4 bg-richblack-800 bg-opacity-25 relative ' >
                <div class="absolute -top-[7rem] -left-[7rem] opacity-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_rgba(0,255,255,0.3),_rgba(0,255,255,0)_60%)]"></div>
                <div className=' flex flex-col   items-center text-richblack-200 font-bold px-3 '>
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
                <div className={` font-mono ${codecolor} pr-2 `}>
                    <pre className='w-[500px]'>
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