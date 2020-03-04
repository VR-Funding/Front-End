import React from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
    return(
    <div>
        <h1> Register </h1>
        
        <Link to="/register-startup">
        Register as Startup
        </Link><br/>
        <Link to="/register-investor">
        Register as Investor
        </Link>

    </div>
    )
}

export default Register