import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Navigation from './components/Navigation';
import RegisterStartup from './components/RegisterStartup';
import RegisterUser from './components/RegisterUser';
import StartUpList from './components/StartUpList';
import StartUpCard from './components/StartUpCard';
import PrivateRoute from './components/PrivateRoute';
import FounderDashboard from './components/FounderDashboard';
import { registerFormContext } from './components/contexts/registerFormContext';
import { userContext } from './components/contexts/userContext';
import { authContext } from './components/contexts/authContext';

function App() {
  const initialStartupState = {
    id: 0,
    userId:
      localStorage.getItem('token') === null
        ? undefined
        : localStorage.getItem('userId'),
    projectName: '',
    headline: '',
    valuationCap: '',
    discount: '',
    minInvestment: '',
    contract: 'Crowd SAFE',
    goalLow: '',
    goalHigh: '',
    city: '',
    state: '',
    country: '',
    email: '',
    startDate: '',
    endDate: '',
    image: null,
    summary: null,
    problem: null,
    solution: null,
    product: null,
    traction: null,
    businessModel: null,
    market: null,
    vision: null,
    founders: null
  };
  const initialUserState = {
    email: '',
    password: '',
    fullName: '',
    investor: true,
    image: ''
  };
  const [userData, setUserData] = useState(initialUserState);
  const [startup, setStartup] = useState(initialStartupState);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <authContext.Provider value={{ loggedIn, setLoggedIn }}>
        <userContext.Provider value={{ userData, setUserData }}>
          <registerFormContext.Provider value={{ startup, setStartup }}>
            <Router>
              <Navigation />
              <Switch>
                <Redirect exact from="/" to="/login"></Redirect>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route
                  path="/register-startup"
                  component={RegisterStartup}
                ></Route>
                <Route path="/register-user" component={RegisterUser}></Route>
                <Route
                  path="/founder-dashboard"
                  component={FounderDashboard}
                ></Route>
                <PrivateRoute
                  path="/startup-list"
                  component={StartUpList}
                ></PrivateRoute>
                <PrivateRoute
                  path="/startup-card"
                  component={StartUpCard}
                ></PrivateRoute>
              </Switch>
            </Router>
          </registerFormContext.Provider>
        </userContext.Provider>
      </authContext.Provider>
    </div>
  );
}

export default App;
