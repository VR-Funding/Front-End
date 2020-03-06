import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FounderDashboard.css";
import styled from "styled-components"
import EditForm from "./EditForm";
import axiosWithAuth from "../utils/axiosWithAuth";

const FounderDashboard = (props) => {

    const [showModal, setShowModal] = useState(false)
    const [startUps, setStartUps] = useState([])
    useEffect(() => {
        const userId = localStorage.getItem("userId")
        axiosWithAuth()
        .get(`https://venture-backend.herokuapp.com/api/startups/users/${userId}`)
        .then(res=> setStartUps(res.data[0]))
        
    },[])
    console.log(startUps)

    const deleteStartup = () => {
        axiosWithAuth()
          .delete(`startups/${startUps.id}`, startUps.id)
          .then(res => {
            console.log(res);
            props.history.push("register-startup");
          });
    }
      return (
        <div className='container'>
            <div className='sidebar'>
                <div className='greet'>
                    <img src=''/>
                </div>
                <nav>
                    <a href='#'>DASHBOARD</a>
                    <a href='#'>INVESTORS</a>
                    <a href='#'>FUNDS</a>
                    <a href='#'>PROFILE</a>
                    <a href='#'>SETTINGS</a>
                    <a href='#'>LOGOUT</a>
                </nav>
            </div>
            {/* {startUps.map(item=>( */}
                <div className='main' key="item.id">
                    <h1>Project Name: {startUps.projectName}</h1>
            <h1>Founder: {startUps.email}</h1>
                
                <div className='location'>             
            <h1>Location: {startUps.city}, {startUps.state}, {startUps.country}</h1>
                </div>
              
     
                <div className='buttons'>
                    <button onClick={()=> setShowModal(!showModal)}>EDIT</button>
                    <button onClick={()=> deleteStartup()}>DELETE</button>

                    <div> { showModal ? <EditForm setShowModal={ setShowModal} setStartUps={setStartUps} startUps={startUps}/> : null}
                        </div>
                </div>
            </div>
            
            
            
        </div>
    )
}

export default FounderDashboard;