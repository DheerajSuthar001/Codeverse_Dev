import React from 'react'

import frame from '../assets/frame.png';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

function Template({ title, desc1, desc2, img, formType,setIsLoggedin }) {
    return (
        <div className='relative w-[100%] flex justify-between my-9 '>
            <div className='w-[45%] flex flex-col gap-5'>
                <h1 className='text-3xl font-bold'>{title}</h1>
                <p>
                    {desc1}
                    <span className='italic block text-blue-800'>{desc2}</span>
                </p>

                {
                    formType === 'login' ? <LoginForm setIsLoggedin={setIsLoggedin} /> : <SignupForm setIsLoggedin={setIsLoggedin} />
                }


            </div>
            <div className='relative'>
                <img src={frame} height='400px' width='300px' alt='frame'></img>
                <img src={img} className='absolute -top-3 right-3 ' height='400px' width='300px' alt='frame'></img>
            </div>
        </div>
    )
}

export default Template