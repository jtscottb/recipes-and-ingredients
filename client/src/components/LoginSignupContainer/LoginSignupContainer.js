import React, { useState } from 'react'
import "./LoginSignupContainer.css"
import Login from '../login/Login';
import Signup from '../signup/Signup';

const LoginSignupContainer = () => {
    const [login, setLogin] = useState(true);
    const [signup, setSignup] = useState(false)
    const handleClick = () => {
        setLogin(!login);
    }

return (
    <div className="login-signup-container">
    <Login />
    <div className="side-div">
    <button type="button" onClick={handleClick}> {login ? "Login" : "Signup"}</button>
    </div>
    <Signup/>
    
    </div>
)
}

export default LoginSignupContainer
