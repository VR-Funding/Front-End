import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./FounderDashboard.css";
import styled from "styled-components"
import EditForm from "./EditForm";

const FounderDashboard = () => {

    const [showModal, setShowModal] = useState(false)

    const closeModal = () => {
        setShowModal(false);
    }
      return (
        <div className='container'>
            <div className='sidebar'>
                <div>
                    <img src=''/>
                    <h3>Hello,<br/>Karen</h3>
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
            <div className='main'>
                <h1><span>Founder: </span>Karen Anderson</h1>
                <div className='investors'>
                    <h3>Total investors:<p>0</p></h3>            
                    <h3>Time left:<p>0 DAYS</p></h3>
                </div>               
                <h2><span>Location: </span>Denver, COLORADO</h2>
                <div className='buttons'>
                    <button onClick={()=> setShowModal(!showModal)}>EDIT</button>
                    <button>DELETE</button>

                    <div> { showModal ? <EditForm closeModal={closeModal}/> : null}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default FounderDashboard;