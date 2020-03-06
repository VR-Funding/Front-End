import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import { authContext } from '../components/contexts/authContext';

const Login = props => {
  const { setLoggedIn } = useContext(authContext);
  const [data, setData] = useState({});
  const { register, handleSubmit } = useForm();

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = credentials => {
    axiosWithAuth()
      .post('auth/login/', credentials)
      .then(res => {
        console.log(res.data);
        setLoggedIn(true);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.id);
        res.data.investor
          ? props.history.push('/startup-list')
          : props.history.push('/register-startup');
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
          onChange={handleChange}
          ref={register({ required: true, maxLength: 80 })}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          ref={register({ required: true })}
        />
        <br />
        <button onClick={handleSubmit}>Login</button>
        <p>
          Don't have an account? Click <em>Register</em> in the top-right.
        </p>
      </form>
    </div>
  );
};

export default Login;
