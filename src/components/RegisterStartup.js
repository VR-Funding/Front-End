import React from "react";
import { useForm } from 'react-hook-form';
import { Range } from 'react-range';
import GoalRange from './Range';
import * as yup from "yup";
import Capture from "./andrew-neel-QLqNalPe0RA-unsplash.jpg";
import "./RegisterStartup.css";

const RegisterStartup = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);  

  return (
    <div className="container">
    <div>
      <h1> Create your Project </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='row1'>
          <label>Company name
            <input type="text" name="companyName" ref={register({required: true, maxLength: 80})} />
          </label>
          <label>Valuation Cap
            <input type="number" name="valuation" step="1000" min='0' ref={register({required: true, })} />
          </label>
        </div>

        <div className='row2'>
          <label>Minimum investment
            <input type="number" name="investment" step="100" min='0' ref={register({required: true, min: 1000,
            })} />
          </label>

          <label>Security type
            <select name="security" ref={register({required: true})}>            
              <option value='1'>Crowd SAFE</option>
              <option value='2'>Crowd IPA</option>             
                {/* onChange={handleChanges}
                value={data.role} */}
            </select>
          </label>

          <label>Investor discount
            <input type="number" name="discount" min='0' max='100' ref={register({required: true, max: 100, min: 0, maxLength: 12})} />
          </label>
        </div>

        <div className='range'>
          <h3>Set your minimum and maximum fundraising goals</h3>
          <br></br>          
          <GoalRange />
        </div>        

        <div className='bottom'>
          <div className='companyLocation'>
            <h3>Where is your company</h3>
            <label htmlFor="city">CITY</label>
              <input type="text" name="city" ref={register({required: true})} />
            <label htmlFor="state">STATE</label>
              <input type="text" name="state" ref={register({required: true})} />
            <label htmlFor="country">COUNTRY</label>
              <input type="text" name="country" ref={register({required: true})} />
          </div>
          
          <div className='fundraisingPeriod'>
            <h3>When are you fundraising?</h3>
            <label htmlFor="dateStart">START</label>
              <input type="date" name="dateStart" ref={register({required: true})} />
            <label htmlFor="dateEnd">END</label>
              <input type="date" name="dateEnd" ref={register({required: true})} />
          </div>
        </div>

        <label>Email: 
          <input className='emailInput' type="email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />
        </label>

        <button type="submit">REGISTER</button>
      </form>    
    </div>    
    <img className="founderRegisterImage" src = {Capture} />  
    </div>
  );
};

export default RegisterStartup;

