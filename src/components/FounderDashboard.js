import React, { useState, useEffect, useContext } from 'react';
import './FounderDashboard.css';
// import styled from "styled-components";
import EditForm from './EditForm';
import axiosWithAuth from '../utils/axiosWithAuth';
import { registerFormContext } from '../components/contexts/registerFormContext';

const FounderDashboard = props => {
  const [showModal, setShowModal] = useState(false);
  const { startup, setStartup } = useContext(registerFormContext);
  //   const [startUps, setStartUps] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    axiosWithAuth()
      .get(`https://venture-backend.herokuapp.com/api/startups/users/${userId}`)
      .then(res => setStartup(res.data[0]));
  }, [setStartup]);

  const deleteStartup = () => {
    axiosWithAuth()
      .delete(`startups/${startup.id}`, startup.id)
      .then(res => {
        console.log(res);
        props.history.push('register-startup');
      });
  };

  return (
    <div className="container">
      <div className="sidebar">
        <div className="greet">
          {/* <img src="" alt="Dashboard image" /> */}
        </div>
        <nav>
          <a href="#">DASHBOARD</a>
          <a href="#">INVESTORS</a>
          <a href="#">FUNDS</a>
          <a href="#">PROFILE</a>
          <a href="#">SETTINGS</a>
          <a href="#">LOGOUT</a>
        </nav>
      </div>

      <div className="main" key="item.id">
        <h1>Project Name: {startup.projectName}</h1>
        <h1>Founder: {startup.email}</h1>

        <div className="location">
          <h1>
            Location: {startup.city}, {startup.state}, {startup.country}
          </h1>
        </div>

        <div className="buttons">
          <button onClick={() => setShowModal(!showModal)}>EDIT</button>
          <button onClick={() => deleteStartup()}>DELETE</button>

          <div>
            {' '}
            {showModal ? (
              <EditForm
                setShowModal={setShowModal}
                setStartup={setStartup}
                startup={startup}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderDashboard;
