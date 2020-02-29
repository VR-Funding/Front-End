import React from 'react'
import { Link } from 'react-router-dom'
import RegisterStartup from './RegisterStartup'
import RegisterInvestor from './RegisterInvestor'

const Register = () => {
    return(
    <div>
        <h1> Register </h1>
        
        <Link to="/RegisterStartup">
        Register as Startup
        </Link><br/>
        <Link to="/RegisterInvestor">
        Register as Investor
        </Link>

    </div>
    )
}

export default Register