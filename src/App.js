import React, { useState }from "react";
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
import { registerFormContext } from './components/contexts/registerFormContext'

function App() {
  const initialState = {
    userId: null,
    // userId: 10,
    projectName: "",
    headline: "",
    valuationCap: null,
    discount: null,
    minInvestment: null,
    contract: "Crowd SAFE",
    goalLow: null,
    goalHigh: null,
    city: "",
    state: "",
    country: "",
    email: "",
    postDate: "2020-03-12",
    startDate: "",
    endDate: "",
    active: false
  }

  const [startup, setStartup] = useState(initialState);
  const updateStartup = updates => {
    setStartup({
      
      updates
    });
  } 
  return (
    <div className="App">
      <registerFormContext.Provider value={{startup, updateStartup}}>
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
      </registerFormContext.Provider>
    </div>
  );
}

export default App;
