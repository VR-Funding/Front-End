import React from "react";
import { Link } from "react-router-dom";
import "./StartUpCard.css";
import logo from "../images/logo1.png";





const Navigation = () => {
  const Lougout = () => {
    window.localStorage.removeItem('token')
  }
  return (
    <div className = "Link">
      <img className = "logo" src = {logo}/>
     <ul> <Link to="/Login">Login</Link></ul>
      <ul> <Link to="/Register">Register</Link></ul>
   
     <ul className = "Logoutnav"> <button onClick={Lougout}>Log Out</button></ul>

    </div>
  );
};



export default Navigation
