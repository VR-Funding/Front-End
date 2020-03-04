import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import StartUpCard from "./StartUpCard";
import StartUpPage from "./StartUpCard";


const StartUpList = () => {
  const [startUps, setStartUps] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get("https://venture-backend.herokuapp.com/api/startups")
    .then(res=> setStartUps(res.data))

  })
  return (
    <div> 
      <div className = "moveup">
           <h1 className ="trending"> TRENDING STARTUPS </h1>
           <p>  All companies are backed by </p>
           <h4 className = "rights">  ACME Co. & have passed liability checks</h4>
      </div>


      {startUps.map(startUp => (
        <StartUpCard key={startUp.id} startUp = {startUp}/>
        
        
      ))}
    </div>

    
  );
};

export default StartUpList;
