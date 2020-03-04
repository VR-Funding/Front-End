import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Capture from "./VR Register pic.png";
import axios from "axios";
const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required()
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
  const onSubmit = data => {
    axios
      .post("https://venture-backend.herokuapp.com/api/auth/register", data)
      .then(res => {
        console.log(res);
        props.history.push("/StartUpList");
   
      });
    console.log(data);
  };
  return (
    <div className="investorcont">
      <img className="registerImage" src={Capture} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h1 className="top-h1"> Register</h1>
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
        <label>
          <input
            type="text"
            name="fullName"
            // onChange={handleChange}
            placeholder="Full Name"
            ref={register}
          />
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
