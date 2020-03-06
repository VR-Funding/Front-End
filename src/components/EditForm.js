import React from 'react';
import { useForm } from 'react-hook-form';
// import { Range } from "react-range";
// import GoalRange from './Range';
// import * as yup from "yup";
import Capture from './andrew-neel-QLqNalPe0RA-unsplash.jpg';
import './RegisterStartup.css';
import axiosWithAuth from '../utils/axiosWithAuth';
// import StartUpCard from "./StartUpCard";

const EditForm = props => {
  const { register, handleSubmit } = useForm();
  const userId = window.localStorage.getItem('userId');

  const handleChange = e => {
    props.setStartup({
      ...props.startup,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = data => {
    axiosWithAuth()
      .put(`startups/${userId}`, data)
      .then(res => {
        console.log(res);
        props.history.push('founder-dashboard');
      });
  };

  return (
    <div className="container">
      <div>
        <h1> Create your Project </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row1">
            <label>
              Company name
              <input
                type="text"
                name="projectName"
                onChange={handleChange}
                value={props.startup.projectName}
                ref={register({ required: true, maxLength: 80 })}
              />
            </label>
            <label>
              Headline
              <input
                type="text"
                name="headline"
                onChange={handleChange}
                value={props.startup.headline}
                ref={register({ required: true, maxLength: 80 })}
              />
            </label>
            <label>
              Valuation Cap
              <input
                type="number"
                name="valuationCap"
                onChange={handleChange}
                value={props.startup.valuationCap}
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
                type="number"
                name="minInvestment"
                step="100"
                min="0"
                value={props.startup.minInvestment}
                onChange={handleChange}
                ref={register({ required: true, min: 1000 })}
              />
            </label>

            <label>
              Security type
              <select
                name="contract"
                onChange={handleChange}
                ref={register({ required: true })}
              >
                <option value={props.startup.contract}>Crowd SAFE</option>

                <option value={props.startup.contract}>Crowd IPA</option>
              </select>
            </label>

            <label>
              Investor discount
              <input
                type="number"
                name="discount"
                onChange={handleChange}
                value={props.startup.discount}
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
            <br></br>
            <label htmlFor="goalLow">CITY</label>
            <input
              type="number"
              name="goalLow"
              onChange={handleChange}
              value={props.startup.goalLow}
              ref={register({ required: true })}
            />{' '}
            <label htmlFor="goalHigh">CITY</label>
            <input
              className="goalHigh"
              type="number"
              name="goalHigh"
              onChange={handleChange}
              value={props.startup.goalHigh}
              ref={register({ required: true })}
            />
            {/* <GoalRange /> */}
          </div>

          <div className="bottom">
            <div className="companyLocation">
              <h3>Where is your company</h3>
              <label htmlFor="city">CITY</label>
              <input
                type="text"
                name="city"
                onChange={handleChange}
                value={props.startup.city}
                ref={register({ required: true })}
              />
              <label htmlFor="state">STATE</label>
              <input
                type="text"
                name="state"
                onChange={handleChange}
                value={props.startup.state}
                ref={register({ required: true })}
              />
              <label htmlFor="country">COUNTRY</label>
              <input
                type="text"
                name="country"
                onChange={handleChange}
                value={props.startup.country}
                ref={register({ required: true })}
              />
            </div>

            <div className="fundraisingPeriod">
              <h3>When are you fundraising?</h3>
              <label>
                START
                <input
                  type="date"
                  name="startDate"
                  onChange={handleChange}
                  value={props.startup.startDate}
                  ref={register({ required: true })}
                />
              </label>
              <label>
                END
                <input
                  type="date"
                  name="endDate"
                  onChange={handleChange}
                  value={props.startup.endDate}
                  ref={register({ required: true })}
                />
              </label>
            </div>
          </div>
          <label>
            Email:
            <input
              className="emailInput"
              type="email"
              name="email"
              onChange={handleChange}
              value={props.startup.email}
              ref={register({ required: true, pattern: /^\S+@\S+$/i })}
            />
          </label>
          <button
            type="submit"
            onClick={() => {
              props.setShowModal(false);
            }}
          >
            Save
          </button>
        </form>
      </div>
      <img className="founderRegisterImage" src={Capture} alt="Founder" />
    </div>
  );
};

export default EditForm;
