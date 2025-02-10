import React, { useState } from 'react'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function SignupForm({ setIsLoggedin }) {
    const navigate=useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
    const [signupData, setSignupData] = useState({ firstName: '', lastName: '', email: '', password: '',cPassword:'',accountType:'' })
    function changeHandler(event) {
        const { name, value } = event.target;
        setSignupData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    function signupHandler(event) {
        event.preventDefault();
        if(signupData.password !== signupData.cPassword){
            toast.warn('Password don\'t match');
        }
        else{
            setIsLoggedin(true);
        console.log(signupData);
        toast.success('Account created succesfully')
        navigate('/login');
        }
        
    }
    return (
        <div className='flex flex-col gap-3'>
            <div className='rounded-full w-fit px-1 py-1 bg-gray-800 border-b-[1px] border-white  '>
                <button onClick={changeHandler} name='accountType' value='student' className={`rounded-full px-4 py-1 ${signupData.accountType==='student'?'bg-gray-900':''} `}>Student</button>
                <button onClick={changeHandler} name='accountType' value='instructor' className={`rounded-full px-4 py-1 ${signupData.accountType==='instructor'?'bg-gray-900':''} `}>Instructor</button>
            </div>
            <form onSubmit={signupHandler} className=' w-full flex flex-col gap-2 '>
                <div className='flex'>
                    <div>
                        <label htmlFor='firstName'>First Name <span className='text-red-700'>*</span></label>
                        <input required onChange={changeHandler} className='rounded-md px-3 py-2 bg-gray-800 border-b-[1px] border-white focus:border-[1px] focus:outline-none focus:border-yellow-500 ' type='text' id='firstName' name='firstName' value={signupData.firstName} placeholder='Enter first name'></input>
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name <span className='text-red-700'>*</span></label>
                        <input required onChange={changeHandler} className='rounded-md px-3 py-2 bg-gray-800 border-b-[1px] border-white focus:border-[1px] focus:outline-none focus:border-yellow-500 ' type='text' id='lastName' name='lastName' value={signupData.lastName} placeholder='Enter last name'></input>

                    </div>
                </div>
                <label htmlFor='email'>Email Address <span className='text-red-700'>*</span></label>
                <input required onChange={changeHandler} className='rounded-md px-3 py-2 bg-gray-800 border-b-[1px] border-white focus:border-[1px] focus:outline-none focus:border-yellow-500 ' type='email' id='email' name='email' value={signupData.email} placeholder='Enter email Address'></input>
                <div className='flex'>
                    <div className='relative'>
                        <label htmlFor='createPass'>Create Password <span className='text-red-700'>*</span></label>
                        <input required onChange={changeHandler} className='rounded-md px-3 py-2 bg-gray-800 border-b-[1px] border-white focus:border-[1px] focus:outline-none focus:border-yellow-500 ' type={showPassword ? 'Text' : 'password'} id='createPass' name='password' value={signupData.password} placeholder='Enter password'></input>
                        <span onClick={() => setShowPassword(prev => !prev)} className='absolute right-6 top-9 z-20 cursor-pointer'>
                            {showPassword ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
                        </span>
                    </div>
                    <div className='relative'> 
                        <label htmlFor='confirmPass'>Confirm Password  <span className='text-red-700'>*</span></label>
                        <input required onChange={changeHandler} className='rounded-md px-3 py-2 bg-gray-800 border-b-[1px] border-white focus:border-[1px] focus:outline-none focus:border-yellow-500 ' type={showPasswordConfirm ? 'Text' : 'password'} id='confirmPass' name='cPassword' value={signupData.cPassword} placeholder='Confirm password'></input>
                        <span onClick={() => setShowPasswordConfirm(prev => !prev)} className='absolute right-6 top-9 z-20 cursor-pointer'>
                            {showPasswordConfirm ? <FaRegEyeSlash /> : <MdOutlineRemoveRedEye />}
                        </span>
                    </div>
                </div>
                <div className='flex flex-col gap-4 mt-5'>
                    <button type='submit' className='text-black rounded-md bg-yellow-500 text-center font-bold py-1'>Sign up</button>
                    <span className='lineThrough text-sm'> OR </span>
                    <button className='flex justify-center gap-2 items-center rounded-md border-[1px] border-gray-700 py-1'>
                        <FcGoogle />
                        Sign up with Google
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignupForm