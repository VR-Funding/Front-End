import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import RegisterStartup from "./components/RegisterStartup";
import RegisterInvestor from "./components/RegisterInvestor";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/login"></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/registerStartup" component={RegisterStartup}></Route>
          <Route path="/registerInvestor" component={RegisterInvestor}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
