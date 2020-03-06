import React from "react";
import StartUpList from "./StartUpList";
import styled from "styled-components";
import "./StartUpCard.css";
import swan from "../images/swan.png" 
import trending from "../images/trending.png" 


const ProjectNames = styled.h4`
position:relative;
right:10%;
bottom:10%

`
const DivStyle = styled.div`

// background:white;
margin:30px;
display:flex;
height:50vh;
width:26vw;
flex-direction:column;
color:black;
position:relative;
top:20px;
box-shadow: 12px 14px 3px 0 rgba(0, 0, 0, 0.2);

&&:hover{
box-shadow: 22px 34px 3px 0 rgba(0, 0, 0, 0.2);
-moz-transform: scale(1.6) rotate(0deg);
-webkit-transform: scale(1.6) rotate(0deg);
-o-transform: scale(1.5) rotate(0deg);
-ms-transform: scale(1.5) rotate(0deg);
transform: scale(1.1) rotate(0deg);
-webkit-transition: 0.8s;
-moz-transition: 0.8s;
-o-transition: 0.8s;
-ms-transition: 0.8s;
transition: 0.8s;
 }
text-align: center;
`

const Imgg = styled.img`

width:300px
`
const Add = styled.p`
color:gray;
position:relative;
bottom:12%
`
const Img = styled.p`

`
const Add2 = styled.p`
position:relative;
bottom:12%
`
const StartUpCard = (props) => {
  
  return (
    <DivStyle>
      <div>
        <Imgg className = "trendsing" src = {trending}/>
      <img className = "logo11" src={swan}/>
 

      </div>

      <h4>{props.startUp.projectName}</h4>

    <ProjectNames>{props.startUp.projectName}</ProjectNames>
    
      <add>{props.startUp.contract} contract, thats {props.startUp.discount}% off</add>
 <add> {props.startUp.country}, {props.startUp.state} {props.startUp.city}</add>
     
      
    </DivStyle>
    
  );
};

export default StartUpCard;
