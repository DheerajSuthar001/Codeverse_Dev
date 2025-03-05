import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { apiConnector } from '../../services/apiConnector';
import { contactusEndpoint } from '../../services/apis';
import CountryCode from "../../data/countrycode.json"

const ContactUsForm = () => {

    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitSuccessful }
    } = useForm();

    const submitContactForm = async (data) => {
        
        try {
            setLoading(true);
            // const response = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, data);
            const response = { status: "OK" };
           
            setLoading(false);
        }
        catch (error) {
            console.log("Error:", error.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset({
                email: "",
                firstname: "",
                lastname: "",
                message: "",
                phoneNo: "",
            })
        }
    }, [reset, isSubmitSuccessful]);


    return (
        <form onSubmit={handleSubmit(submitContactForm)}>

            <div className='flex flex-col gap-5'>
                <div className='flex gap-5 max-sm:flex-col'>
                    {/* firstName */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='firstname' className=' text-white text-sm'>First Name</label>
                        <input
                            type='text'
                            name='firstname'
                            id='firstname'
                            placeholder='Enter first name'
                            className='text-richblack-200 px-3 py-1 bg-richblack-700 placeholder:text-richblack-200 rounded-md border-b-[1px] border-richblack-200'
                            {...register("firstname", { required: true })}
                        />
                        {
                            errors.firstname && (
                                <span>
                                    Please enter Your name
                                </span>
                            )
                        }
                    </div>

                    {/* lastName */}
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='lastname' className=' text-white text-sm'>Last Name</label>
                        <input
                            type='text'
                            name='lastname'
                            id='lastname'
                            className='text-richblack-200 px-3 py-1 bg-richblack-700 placeholder:text-richblack-200 rounded-md border-b-[1px] border-richblack-200'
                            placeholder='Enter Last name'
                            {...register("lastname")}
                        />

                    </div>

                </div>


                {/* email */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='email' className=' text-white text-sm'>Email Address</label>
                    <input
                        type='email'
                        name='email'
                        id='email'
                        className='text-richblack-200 px-3 py-1 bg-richblack-700 placeholder:text-richblack-200 rounded-md border-b-[1px] border-richblack-200'
                        placeholder='Enter email Address'
                        {...register("email", { required: true })}
                    />
                    {
                        errors.email && (
                            <span>
                                Please enter your email address
                            </span>
                        )
                    }
                </div>

                {/* phoneNo */}
                <div className='flex flex-col gap-1 '>

                    <label htmlFor='phonenumber' className=' text-white text-sm'>Phone Number</label>

                    <div className='flex flex-row gap-1'>
                        {/* dropdown */}

                        <select
                            name='dropdown'
                            id="dropdown"
                            className='w-[100px] text-richblack-200 px-3 py-1 bg-richblack-700 placeholder:text-richblack-200 rounded-md border-b-[1px] border-richblack-200'
                            {...register("countrycode", { required: true })}
                        >
                            {
                                CountryCode.map((element, index) => {
                                    return (
                                        <option key={index} value={element.code}>
                                            {element.code} -{element.country}
                                        </option>
                                    )
                                })
                            }
                        </select>

                        <input
                            type='number'
                            name='phonenumber'
                            id='phonenumber'
                            placeholder='12345 67890'
                            className='text-white  w-[calc(100%-90px)] px-3 py-1 bg-richblack-700 placeholder:text-richblack-200 rounded-md border-b-[1px] border-richblack-200'
                            {...register("phoneNo",
                                {
                                    required: { value: true, message: "Please enter Phone Number" },
                                    maxLength: { value: 10, message: "Invalid Phone Number" },
                                    minLength: { value: 8, message: "Invalid Phone Number" }
                                })}
                        />

                    </div>
                    {
                        errors.phoneNo && (
                            <span>
                                {errors.phoneNo.message}
                            </span>
                        )
                    }

                </div>

                {/* message */}
                <div className='flex flex-col gap-1'>
                    <label htmlFor='message' className=' text-white text-sm'>Message</label>
                    <textarea
                        name='message'
                        id='message'
                        cols="30"
                        className='text-richblack-200 px-3 py-1 bg-richblack-700 placeholder:text-richblack-200 rounded-md border-b-[1px] border-richblack-200'
                        rows="7"
                        placeholder='Enter Your message here'
                        {...register("message", { required: true })}
                    />
                    {
                        errors.message && (
                            <span>
                                PLease enter your message.
                            </span>
                        )
                    }
                </div>

                <button type='submit'
                    className='rounded-md bg-yellow-50 text-center px-6 py-1 text-[16px] text-black'>
                    Send Message
                </button>
            </div>

        </form>
    )
}

export default ContactUsForm
