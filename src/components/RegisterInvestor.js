import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Capture from "./VR Register pic.png"
const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .required()
});
const RegisterInvestor = () => {       
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
      });
      const onSubmit = data => {
        console.log(data);
      };
  return (
      <div className = "investorcont">
              <img className = "registerImage"src = {Capture}/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
      <h1 className = "top-h1"> Register</h1>
        <input type="email" name="email" placeholder = "  Email" ref={register} />
      </label>
      {errors.email && <p>{errors.email.message}</p>}
      <label>
        <input type="password" name="password" placeholder = "  Password" ref= {register} />
      </label>
      {errors.password && <p>{errors.password.message}</p>}
      <button className = "InvestorRegister"type="submit"> REGISTER</button>
    </form>
    </div>
  );
}
export default RegisterInvestor