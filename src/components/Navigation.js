import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components'
import "./Navigation.css";

// const NavBar = styled.div`
//  z-index: 10;
//  position: relative;
// display: flex;
// justify-content: space-evenly;
// align-items: center;
// width: 100%;
// color: white;
// font-size: 40px;
// background-color: lightgrey;
// box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
//  overflow: hidden;
// `
// const NavLinks = styled.div`
//   display: flex;
//   justify-content: space-around;
//   font-size: 25px;
//   padding: 20px;
//   text-decoration: none;
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: 20px;
//   white-space: nowrap;
// `;

// const vrImage = styled.img`
//   width: calc(28px + 1.25vw);
//   height: auto;
//   transform: scaleX(-1);
//   padding-top: 10px;
//   margin-left: -15px;

// `;

// const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
//   padding-right: 20px;
// `;

const Navigation = () => {

  return (

    <div id="navbar">
      <nav id="nav">
        <div id="logo">
          <a id="logoa" href="https://venturer.netlify.com">
            <img src={require('./Vr.svg')} alt="company logo"></img>
            <h1>VentureR</h1>
          </a>
        </div>
        <a id="homelink" href="https://venturer.netlify.com/index.html">Home</a>
        <a id="aboutlink" href="https://venturer.netlify.com/about.html">About us</a>
        <a id="contactlink" href="#">Contact us</a>
        <div id="links"><Link to="/login">Login</Link>
        <Link to="/register-investor">| Register</Link></div>
      </nav>
    </div>
  );
};



export default Navigation
