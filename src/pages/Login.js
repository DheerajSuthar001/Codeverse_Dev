import React  from 'react'
import loginImg from '../assets/Images/login.webp';
import './Login.css';
import Template from '../components/core/auth/Template'
function Login({setIsLoggedin}) {

    // const setIsLoggedin = props.setIsLoggedin;

   
    return (
        <Template
        title='Welcome Back'
        desc1='Build skills for today, tomorrow and beyond'
        desc2='Education to future-proof your carrer'
        img={loginImg}
        formType='login'
        setIsLoggedin={setIsLoggedin}
        ></Template>
    )
}

export default Login