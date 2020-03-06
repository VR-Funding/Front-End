import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { Range } from "react-range";
import GoalRange from "./Range";
import * as yup from "yup";
import Capture from "./andrew-neel-QLqNalPe0RA-unsplash.jpg";
import "./RegisterStartup.css";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import StartUpCard from "./StartUpCard";
import { registerFormContext } from '../components/contexts/registerFormContext'

const RegisterStartup = props => {
  const { register, handleSubmit, errors } = useForm();

 
  const {startup, setStartup}=useContext(registerFormContext)
  
    const userIdLocal = JSON.parse(window.localStorage.getItem("userId"));
    const userIdString = JSON.stringify(userIdLocal)
    



  const handleChange = e => {
   
    
      setStartup({
        userId:userIdString, 
        [e.target.name]: e.target.value
      });
   
  };

  const onSubmit = data => {
   
    console.log(window.localStorage.getItem("userId"))
    axiosWithAuth()
      .post("https://venture-backend.herokuapp.com/api/startups", data)
      .then(res => {
        console.log(res);
        props.history.push("founder-dashboard");
      });
    console.log("Who??", data);
  };

  return (
    <div className="container">
      <div>
        <h1> Create your Project </h1>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className="row1">
            <div>
              {/* <label class="">
              Company id
              <input
                type="text"
                name="userId"
                onChange={handleChange}
                value={startup.userId}
                ref={register({ required: true, maxLength: 80 })}
              />
            </label>  */}
            </div>
            <label>
              Company name
              <input
                type="text"
                name="projectName"
                onChange={handleChange}
                value={startup.projectName}
                ref={register({ required: true, maxLength: 80 })}
              />
            </label>
          </div>

          <div className='row3'>
            <label>
              Headline
              <input
                type="text"
                name="headline"
                onChange={handleChange}
                value={startup.headline}
                ref={register({ required: true, maxLength: 80 })}
              />
            </label>
            <label>
              Valuation Cap
              <input
                type="text"
                name="valuationCap"
                onChange={handleChange}
                value={startup.valuationCap}
                step="1000"
                min="0"
                ref={register({ required: true })}
              />
            </label>
          </div>

          <div className="row2">
            <label>
              Minimum investment
              <input
                type="text"
                name="minInvestment"
                step="100"
                min="0"
                value={startup.minInvestment}
                onChange={handleChange}
                ref={register({ required: true, min: 1000 })}
              />
            </label>

            <label>
              Security type              
              <select className='select'
                name="contract"
                onChange={handleChange}
                ref={register({ required: true })}
              >
                <option value={startup.contract}>Crowd SAFE</option>

                <option value={startup.contract}>Crowd IPA</option>
                {/* onChange={handleChanges}
                value={data.role} */}
              </select>
            </label>

            <label>
              Investor discount
              <input
                type="text"
                name="discount"
                onChange={handleChange}
                value={startup.discount}
                min="0"
                max="100"
                ref={register({
                  required: true,
                  max: 100,
                  min: 0,
                  maxLength: 12
                })}
              />
            </label>
          </div>

          <div className="range">
            <h3>Set your minimum and maximum fundraising goals</h3>            
            <label htmlFor="goalLow"></label>
            <input
              type="text"
              name="goalLow"
              onChange={handleChange}
              value={startup.goalLow}
              ref={register({ required: true })}
            />{" "}

            <label htmlFor="goalHigh"></label>
            <input
              type="text"

          
              name="goalHigh"
              onChange={handleChange}
              value={startup.goalHigh}
              ref={register({ required: true })}
            />
            <GoalRange />
          </div>

          <div className="bottom">
            <div className="companyLocation">
              <h3>Where is your company</h3>
              <label htmlFor="city">CITY</label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={startup.city}
                ref={register({ required: true })}
              />
              <label htmlFor="state">STATE</label>
              <input
                type="text"
                name="state"
                onChange={handleChange}
                value={startup.state}
                ref={register({ required: true })}
              />
              <label htmlFor="country">COUNTRY</label>
              <input
                type="text"
                name="country"
                onChange={handleChange}
                value={startup.country}
                ref={register({ required: true })}
              />
            </div>

            <div className="fundraisingPeriod">
              <h3>When are you fundraising?</h3>
              <label htmlFor='startDate'>START</label>
                <input
                  type="date"
                  name="startDate"
                  onChange={handleChange}
                  value={startup.startDate}
                  ref={register({ required: true })}
                />
              
              <label htmlFor='endDate'>END</label>
                <input
                  type="date"
                  name="endDate"
                  onChange={handleChange}
                  value={startup.endDate}
                  ref={register({ required: true })}
                />              
            </div>
          </div>

          <label>
            Email:
            <input
              className="emailInput"
              type="email"
              name="email"
              onChange={handleChange}
              value={startup.email}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>

          <button type="submit">REGISTER</button>
        </form>
      </div>
      <img className="founderRegisterImage" src={Capture} />
    </div>
  );
};

export default RegisterStartup;
