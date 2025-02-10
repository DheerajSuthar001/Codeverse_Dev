import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6"; 
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { NavLink, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedin}) {
    const navigate=useNavigate();
    const [showPassword,setShowPassword]=useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    function changeHandler(event) {
        const { name, value } = event.target;
        setLoginData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function loginHandler(event) {
        event.preventDefault();
        setIsLoggedin(true);
        console.log(loginData);
        toast.success('Logged in successfully')
       navigate('/dashboard');
    }
    return (
        <form onSubmit={loginHandler} className=' w-full flex flex-col gap-2 '>
            <label htmlFor='email'>Email Address <span className='text-red-700'>*</span></label>
            <input required onChange={changeHandler} className='rounded-md px-3 py-2 bg-gray-800 border-b-[1px] border-white focus:border-[1px]  focus:border-yellow-500 focus:outline-none ' type='email' id='email' name='email' value={loginData.email} placeholder='Enter email Address'></input>
            <label htmlFor='pass'>Email Address <span>*</span></label>
            <div className='w-full relative'>
                <input required onChange={changeHandler} className='w-full z-10  rounded-md px-3 py-2 bg-gray-800 border-b-[1px] border-white focus:border-[1px] focus:outline-none focus:border-yellow-500 ' type={showPassword?'Text':'password'} id='pass' name='password' value={loginData.password} placeholder='Enter Password'></input>
                <span onClick={()=>setShowPassword(prev=>!prev)} className='absolute right-3 top-3 z-20 cursor-pointer'>
                    {showPassword?<FaRegEyeSlash />:<MdOutlineRemoveRedEye />}
                </span>
                <NavLink to='#' className='text-right text-blue-800 text-sm'>Forgot Password</NavLink>
            </div>
            <div className='flex flex-col gap-4 mt-5'>
                <button type='submit' className='text-black rounded-md bg-yellow-500 text-center font-bold py-1'>Sign in</button>
                <span className='lineThrough text-sm'> OR </span>
                <button className='flex justify-center gap-2 items-center rounded-md border-[1px] border-gray-700 py-1'>
                    <FcGoogle />
                    Sign in with Google
                </button>
            </div>
        </form>
    )
}

export default LoginForm