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
import StartUpList from "./components/StartUpList";
import StartUpCard from "./components/StartUpCard";
import PrivateRoute from "./components/PrivateRoute";
import FounderDashboard from "./components/FounderDashboard";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Redirect exact from="/" to="/login"></Redirect>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/register-startup" component={RegisterStartup}></Route>
          <Route path="/register-investor" component={RegisterInvestor}></Route>
          <Route path="/founder-dashboard" component={FounderDashboard}></Route>
          <PrivateRoute path="/startup-list" component={StartUpList}></PrivateRoute>
          <PrivateRoute path="/startup-card" component={StartUpCard}></PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
