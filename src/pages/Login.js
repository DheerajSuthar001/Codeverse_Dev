import React  from 'react'
import loginImg from '../assets/Images/login.webp';

import Template from '../components/core/auth/Template'
function Login() {

    // const setIsLoggedin = props.setIsLoggedin;

   
    return (
        <Template
        title='Welcome Back'
        description1='Build skills for today, tomorrow and beyond'
        description2='Education to future-proof your carrer'
        image={loginImg}
        formType='login'
        ></Template>
    )
}

export default Login