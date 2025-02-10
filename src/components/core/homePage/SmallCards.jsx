import React from 'react'

function SmallCards({ icon, title, content, connect }) {
    return (
        <div className='flex gap-8 '>
            <div className='flex flex-col items-center'>
                <div className='rounded-full  bg-white flex justify-center items-center min-w-[80px] min-h-[80px]'>
                    <img width={'25px'} src={icon} alt='smallCardIcon'></img>
                </div>
                {
                    connect?<div className='min-h-[50px] border-l-[2px] border-dashed border-richblack-300 my-3'/>:''
                }

                
            </div>
            <div>
                <h3 className='text-2xl font-bold'>{title}</h3>
                <p className=' text-richblack-600 leading-5'>{content}</p>
            </div>
        </div>
    )
}

export default SmallCards