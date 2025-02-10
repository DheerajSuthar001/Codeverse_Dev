import React from 'react';
import { Link } from 'react-router-dom';
import { FooterLink1, FooterLink2 } from '../../../data/footer-links';
import FooterItems from './FooterItems';
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import LogoMain from '../../../assets/Logo/LogoMainDark.png';
function Footer() {
    return (
        <div className='w-full py-10 px-16 bg-richblack-700'>
            <div className='flex'>
                {/* section 1 */}
                <div className=' flex-1 grid grid-cols-3 grid-rows-1 px-8'>
                    <div className='flex flex-col gap-2'>
                        <img src={LogoMain} width='200px' alt='logoMain'></img>
                        <FooterItems data={FooterLink1[0]} />
                        <div className='flex gap-3 text-richblack-200'>
                            <IoLogoFacebook />
                            <AiFillGoogleCircle />
                            <FaTwitter />
                            <FaYoutube />
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <FooterItems data={FooterLink1[1]} />
                        <FooterItems data={FooterLink1[2]} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <FooterItems data={FooterLink1[3]} />
                        <FooterItems data={FooterLink1[4]} />
                    </div>


                </div>
                <div class="min-h-full border-l-2 border-richblack-200"></div>
                {/* Section 2 */}
                <div className='flex-1 grid grid-cols-3 px-8'>
                    <div className='flex flex-col gap-4'>
                        <FooterItems data={FooterLink2[0]} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <FooterItems data={FooterLink2[1]} />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <FooterItems data={FooterLink2[2]} />
                    </div>
                </div>
            </div>
            <div className='flex  justify-between mt-5 border-t-[1px] border-richblack-200 py-5'>
                <div className=' text-richblack-200 font-bold flex gap-4'>
                <span className='border-r-[1px] border-richblack-300'><Link to='/privacy-policy'>Privacy Policy</Link></span>
                <span className='border-r-[1px] border-richblack-300'><Link to='/cookie-policy'>Cookie Policy</Link></span>
                <span className='border-l-[1px] border-richblack-300'><Link to='/terms'>Terms</Link></span>
                </div>
                <div className=' text-richblack-200'>
                    <p>Made with <span className=' text-[#EF476F] '>❤</span> by Dheeraj </p>
                </div>
            </div>


        </div>
    )
}

export default Footer;