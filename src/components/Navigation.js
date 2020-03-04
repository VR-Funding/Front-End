import React from "react";
import { Link } from "react-router-dom";
import "./StartUpCard.css";
import logo from "./images/logo1.png";

const Navigation = () => {
  return (
    <div className = "Link">
      <img className = "logo" src = {logo}/>
     <ul> <Link to="/Login">Login</Link></ul>
      <ul> <Link to="/Register">Register</Link></ul>
      <ul> <Link to="#">Home</Link></ul>
     <ul> <Link to="#">Contact Us</Link></ul>
     <ul className = "Logoutnav"> <Link to="#">Log Out</Link></ul>

    </div>
  );
};

export default Navigation;
