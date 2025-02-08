import React from 'react'
import { Link } from 'react-router-dom'
function CustomButton({children,active,linkTo}) {
  return (
    <Link  to={linkTo}>
        <button className={`text-center flex gap-2 items-center text-[13px] px-6 py-3 ${active?"bg-yellow-50 text-black":"bg-richblack-800 text-white"} rounded-lg shadow-[1px_1px_0px_0px_rgba(249,_115,_22,_0.5)]
         shadow-richblack-600 hover:scale-95 transition-all duration-200 font-[700]` }>
            {children}
        </button>
    </Link>
  )
}

export default CustomButton