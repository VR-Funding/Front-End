import React from "react";
import { Link } from "react-router-dom";
import "./StartUpCard.css";
import logo from "../images/logo1.png";

const NavBar = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  color: #62BC4E;
  font-size: 40px;
  background-color: #white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  a:first-child {
    font-size: calc(16px + 1.25vw);
  }

  div:not(:first-child) a {
    font-size: calc(6px + 1vw);
  }

  @media (max-width: 900px) {
    div:not(:first-child) a {
      display: none;
    }

    form {
      display: none;
    }

    img {
      display: inline;
    }
  }
`;


const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 25px;
  padding: 20px;
  text-decoration: none;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  white-space: nowrap;
`;


const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  padding-right: 20px;
  font-family: passion one;
  :visited {
    color: inherit;
  }

  :hover {
    color: #bbb;
  }
`;

const Venture = styled.h1`
  font-size: 30px;
  font-weight: 900;
  // color: red;

`


const Navigation = ({ logout, isAuthenticated, toggleNav }) => {
  return (
    <div className = "Link">
      <img className = "logo" src = {logo}/>
     <ul> <Link to="/Login">Login</Link></ul>
      <ul> <Link to="/Register">Register</Link></ul>
      <ul> <Link to="#">Home</Link></ul>
     <ul> <Link to="#">Contact Us</Link></ul>
     <ul className = "Logoutnav"> <Link to="#">Log Out</Link></ul>

    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.isAuthenticated
  };
};

export default connect(mapStateToProps, { logout, toggleNav })(Navigation);
