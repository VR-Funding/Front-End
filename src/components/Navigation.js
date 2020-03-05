import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from 'styled-components'


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

    <div>
      <div>
      <svg width="50" height="50" viewBox="0 0 424 523" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M132.958 48.4887L268.814 48.4887L417.157 421.013L272.694 421.013L132.959 421.013L132.958 48.4887Z" fill="#EE2478"/>
<path d="M389.314 159.27C389.314 221.713 338.748 272.333 276.371 272.333C213.993 272.333 163.427 221.713 163.427 159.27C163.427 96.8271 211.677 43.3081 274.054 43.3081C336.431 43.3081 389.314 96.8271 389.314 159.27Z" fill="#41C9F5"/>
<rect x="132.958" y="47.5107" width="114.52" height="372.977" fill="#62BC4E"/>
<path d="M300.553 158.882C307.716 147.676 319.309 139.853 332.36 137.287C360.6 131.733 387.795 151.926 390.113 180.614C390.984 191.394 388.204 202.153 382.22 211.161L356.323 250.152L315.712 300.59L278.558 353.152L265.579 369.85C253.329 385.609 228.827 383.185 219.903 365.33L214.324 357.03C203.721 341.257 202.978 320.837 212.405 304.335L252.951 233.357L300.553 158.882Z" fill="#E8B898"/>
<path d="M132.962 210.997L132.962 47.5106L204 171L296 329L246 420.5L132.962 210.997Z" fill="#FEC11A"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="180" y="39" width="234" height="238">
<path d="M395.638 141.193C405.667 196.221 369.693 248.868 315.289 258.783C260.885 268.697 208.652 232.125 198.624 177.097C188.595 122.068 222.082 67.235 276.486 57.3203C330.89 47.4057 385.61 86.1642 395.638 141.193Z" fill="#41C9F5"/>
</mask>
<g mask="url(#mask0)">
<path d="M362.158 41.1574C362.323 40.8356 362.463 40.5012 362.577 40.1572C364.441 34.5256 371.941 33.6436 375.102 38.6842L408.173 91.4197C412.612 98.4978 414.545 106.878 413.655 115.18L410.742 142.337C410.328 146.195 409.474 149.988 408.196 153.642L397.383 184.554C395.918 188.74 393.91 192.707 391.41 196.351L374.128 221.549L330.087 280.307L311.561 310.145C301.997 325.549 279.342 324.148 271.49 307.668C271 306.641 270.438 305.652 269.805 304.708L264.304 296.489C254.342 281.607 252.922 262.539 260.575 246.434L306.157 150.513L362.158 41.1574Z" fill="#E8B898"/>
</g>
</svg>
    </div>
      
      <NavLink to="/login">login</NavLink>
      <NavLink to="/register-investor">register</NavLink>
    </div>
  );
};



export default Navigation
