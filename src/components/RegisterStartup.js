import React from "react";
import { useForm } from 'react-hook-form';
import { Range } from 'react-range';
import GoalRange from './Range';

const RegisterStartup = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  

  return (
    
    <div>
      <h1> Create your Profile </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="companyName">Company name</label>
        <input type="text" name="companyName" ref={register({required: true, maxLength: 80})} />

        <label htmlFor="valuation">Expected valuation</label>
        <input type="number" name="valuation" ref={register({required: true, })} />

        <label htmlFor="investment">Minimum investment</label>
        <input type="number" name="investment" ref={register({required: true, min: 1000})} />

        <label htmlFor="contract">Contract</label>
        <input type="text" name="contract" ref={register({required: true, })} />

        <label htmlFor="discount">Investor discount</label>
        <input type="number" name="discount" ref={register({required: true, max: 100, min: 0, maxLength: 12})} />

        <GoalRange />

        <h3>Where is your company</h3>
        <label htmlFor="city">CITY</label>
        <input type="text" name="city" ref={register({required: true})} />
        <label htmlFor="state">STATE</label>
        <input type="text" name="state" ref={register({required: true})} />
        <label htmlFor="country">COUNTRY</label>
        <input type="text" name="country" ref={register({required: true})} />

        <h3>When are you fundraising?</h3>
        <label htmlFor="dateStart">START</label>
        <input type="date" name="dateStart" ref={register({required: true})} />
        <label htmlFor="dateEnd">END</label>
        <input type="date" name="dateEnd" ref={register({required: true})} />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" ref={register({required: true, pattern: /^\S+@\S+$/i})} />

        <button type="submit"/>REGISTER<button />
    </form>

    </div>
  );
};

export default RegisterStartup;

