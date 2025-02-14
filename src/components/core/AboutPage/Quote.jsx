import React from 'react'
import HighlightText from '../homePage/HighlightText'

const Quote = () => {
  return (
    <div className='text-3xl py-16 text-center '>
      "We are passionate about revolutionizing the way we learn. Our innovative platform
      <HighlightText text={"combines technology"}/>
      <span className='text-brown-500'>
        {" "}
        expertise
      </span>
      , and community to create an 
      <span  className='text-brown-500'>
      {" "}
        unparalleled educational experience.
      </span>"
    </div>
  )
}

export default Quote
