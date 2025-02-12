import React from 'react'
import Template from '../components/core/auth/Template'
import suImg from '../assets/Images/signup.webp'
function Signup() {
  return (
    <Template
        title='Join the millions learning ro code with StudyNotion for free'
        description1='Build skills for today, tomorrow and beyond'
        description2='Education to future-proof your carrer'
        image={suImg}
        formType='signup'
        
        ></Template>
  )
}

export default Signup