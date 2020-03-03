import React, { useState, useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'


const StartUpList = () => {
  const [startUps, setStartUps] = useState([])

  useEffect(() => {
    axiosWithAuth()
    .get("startups")
    .then(res=> console.log(res.data))
  })
  return (
    <div>
      <h1>StartUp List</h1>
      {startUps.map(startUp => (
        <div key={startUp.id}>
        >
          </div>
      ))}
    </div>
  );
};

export default StartUpList;
