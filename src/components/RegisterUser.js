import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Capture from './VR Register pic.png';
import axios from 'axios';
import { userContext } from '../components/contexts/userContext';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  investor: yup.boolean().required()
});

const RegisterUser = props => {
  const { register, handleSubmit, errors } = useForm({
    validationSchema: schema
  });
  const { userData, setUserData } = useContext(userContext);

  const onChange = () => {
    setUserData({ ...userData, investor: false });
  };

  const onSubmit = data => {
    axios
      .post('https://venture-backend.herokuapp.com/api/auth/register', data)
      .then(res => {
        console.log('newUser.id:', res.data.newUser.id);
        window.localStorage.setItem('userId', res.data.newUser.id);
        window.localStorage.setItem('investor', res.data.newUser.investor);
        props.history.push('/login');
      });
  };

  return (
    <div className="investorcont">
      <img className="registerImage" src={Capture} alt="Register" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          <h1 className="top-h1"> Register</h1>
          <label>
            Full Name
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              ref={register}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="  Email"
              ref={register}
            />
          </label>
          {errors.email && <p>{errors.email.message}</p>}
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Password"
              ref={register}
            />
          </label>
          {errors.password && <p>{errors.password.message}</p>}
          <br />
          <label>
            I am an investor
            <input type="radio" name="investor" value={true} ref={register} />
          </label>
          <label>
            I am a founder
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
          {' '}
          REGISTER
        </button>
      </form>
    </div>
  );
};
export default RegisterUser;
