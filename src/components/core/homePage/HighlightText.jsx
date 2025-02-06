import React from 'react'

function HighlightText({text}) {
  return (
    <span className=' text-transparent bg-clip-text bg-gradient-to-b from-blue-50 to-blue-100'>{text}</span>
  )
}

export default HighlightText