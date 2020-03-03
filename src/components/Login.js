// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import axiosWithAuth from "../utils/axiosWithAuth";

// const Login = props => {
//   const [data, setData] = useState({});
//   const handleChange = e => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value
//     });
//   };

//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => {
//     axiosWithAuth()
//       .post("auth/login/", data)
//       .then(res =>  {
//         console.log(res)
//         localStorage.setItem("token", res.data.payload);
//         props.history.push("/StartUpList");
//       });
//   };
//   return (
//     <div>
//       <h1>Welcome</h1>

//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input
//           type="text"
//           placeholder="Username"
//           name="username"
//         //  value={data.username}
//           onChange={handleChange}
//           ref={register({ required: true, maxLength: 80 })}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="Password"
//           name="password"
//         //  value={data.password}
//           onChange={handleChange}
//           ref={register({ required: true })}
//         />
//         <br />

//         <button onClick={handleSubmit}>log in</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React from "react";
import axios from 'axios';
import { connect } from 'react-redux'
import { login } from '../actions/'

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.setState.credentials,
        [e.target.name]: e.target.value 
      }
    });
  };  

  login = e => {
    e.preventDefault();
    axios
      .post("hhttps://venture-backend.herokuapp.com/auth/login", this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.props.history.push('/friends')
      })
      .catch(err => console.log(err))
  };

  render() {
    return (
      <div>
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          // value={this.state.credentials.username}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="password"
          // value={this.state.credentials.password}
          onChange={this.handleChange}
        />
        <button onSubmit={this.login}>Log in</button>
      </form>
    </div>
    );
  }
}

export default connect(
  null,
  { login }
)(Login)
