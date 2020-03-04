import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axiosWithAuth from "../utils/axiosWithAuth";
import styled from 'styled-components'



const Login = props => {
  const [data, setData] = useState({});
  const handleChange = e => {
    setData({
      
      ...data,
      [e.target.name]: e.target.value
      
    });
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    axiosWithAuth()
      .post("auth/login/", data)
      .then(res =>  {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        props.history.push("/StartUpList");
      });
  };
  return (
    <div>
      <h1>Login Test</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="email"
          name="email"
        //  value={data.username}
          onChange={handleChange}
          ref={register({ required: true, maxLength: 80 })}
        />
        <br />
        <input
          type="text"
          placeholder="Password"
          name="password"
        //  value={data.password}
          onChange={handleChange}
          ref={register({ required: true })}
        />
        <br />

        <button onClick={handleSubmit}>log in</button>
        <p>Don't have an account?  Sign Up.</p>
      </form>
    </div>
  );
};

export default Login;
