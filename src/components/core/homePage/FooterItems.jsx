import React from 'react'
import { Link } from 'react-router-dom'

function FooterItems({data}) {
  return (
    <div>
        <h3 className=' text-richblack-50 font-bold'>{data.title}</h3>
        <ul className=' text-richblack-200 text-xs leading-6'>
        {
            data.links.map((el,index)=>{
                return <li key={index} className=' text-richblack-200'><Link to={el.link}>{el.title}</Link></li>
            })
        }
        </ul>
       
    </div>
  )
}

export default FooterItems