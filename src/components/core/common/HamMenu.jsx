import React from 'react'
import { IconName, VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import logo from '../../../assets/Logo/LogoMainDark.png';
function HamMenu({ setHamMenu }) {
    return (
        <div className="fixed !mt-14 inset-0  z-[1000]  grid place-items-center overflow-auto bg-white bg-opacity-10 backdrop-blur-sm">
            <div className=" w-full h-full rounded-lg border bg-richblack-800 p-6 bg-opacity-10 backdrop-blur-sm">
                <div className='flex justify-between text-white font-bold p-1 '>
                    
                    <VscClose fontSize={24} fill="#AFB2BF" onClick={() => setHamMenu(false)} />
                </div>
            </div>
        </div>
    )
}

export default HamMenu