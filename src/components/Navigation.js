import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/Login">Login</Link>
      <br />
      <Link to="/Register">Register</Link>
    </div>
  );
};

export default Navigation;
