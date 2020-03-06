import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Capture from "./VR Register pic.png";
import axios from "axios";
const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  investor: yup.boolean().required()
});

const RegisterInvestor = props => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const [data, setData] = useState({});
  // const handleChange = e => {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   });
  // };

  const [investor, setInvestor] = useState(true)
  const onChange = () =>{
    setInvestor(!investor)
  }
  
  const dashboard = () =>{    
    investor ? props.history.push("/login") : props.history.push("/register-startup")
  }

  const onSubmit = data => {
    axios
      .post("https://venture-backend.herokuapp.com/api/auth/register", data)
      .then(res => {
        console.log(res.data.newUser.id);
        window.localStorage.setItem('userId', res.data.newUser.id)
        dashboard()
        // props.history.push("/StartUpList");
   
      });
    console.log(data);
  };
  return (
    <div className="investorcont">
      <img className="registerImage" src={Capture} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h1 className="top-h1"> Register</h1>

          <label>
          <input
            type="text"
            name="fullName"
            // onChange={handleChange}
            placeholder="Full Name"
            ref={register}
          />
        </label>
        <label>  
          <input
            type="email"
            name="email"
            // onChange={handleChange}
            placeholder="  Email"
            ref={register}
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}
        <label>
          <input
            type="password"
            name="password"
            // onChange={handleChange}
            placeholder="  Password"
            ref={register}
          />
        </label>
        {errors.password && <p>{errors.password.message}</p>}        
        
 
        <label>I am an investor
          <input 
          type="radio"
          name="investor"
          value={true}
          ref={register}
          />
        </label>

        <label>I am a founder
          <input 
          type="radio"
          name="investor"
          value={false}
          onChange={onChange}
          ref={register}
          />
        </label>
      </label>
        <button className="InvestorRegister" type="submit">
          {" "}
          REGISTER
        </button>
      </form>
    </div>
  );
};
export default RegisterInvestor;
