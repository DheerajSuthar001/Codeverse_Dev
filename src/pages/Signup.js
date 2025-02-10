import React from 'react'
import Template from '../components/core/auth/Template'
import suImg from '../assets/Images/signup.webp'
function Signup({setIsLoggedin}) {
  return (
    <Template
        title='Join the millions learning ro code with StudyNotion for free'
        desc1='Build skills for today, tomorrow and beyond'
        desc2='Education to future-proof your carrer'
        img={suImg}
        formType='signup'
        setIsLoggedin={setIsLoggedin}
        ></Template>
  )
}

export default Signup