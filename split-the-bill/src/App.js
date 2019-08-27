import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignUpScreen from './components/LoginSignUpScreen';
import PrivateRoute from './components/PrivateRoute';
import SplitProofHeader from './components/SplitProofHeader';
import RegisterScreen from './components/RegisterScreen';
import Dashboard from "./components/Dashboard.js";
import AddExpenseForm from "./components/AddExpenseForm.js";

function App() {

  
 

  return (
    // app wrapped in a router, starts by default with login page
    // will route users to dashboard once signed in or registered
    <Router>
      <div className="App">

        <SplitProofHeader />

        <Switch>
          <Route exact path="/" component={LoginSignUpScreen}/>
          <Route path ="/register" component={RegisterScreen}/>
          <PrivateRoute path="/dashboard" component={Dashboard}/>

          
        </Switch>

        <Dashboard />



      </div>
    </Router>
  );
}

export default App;
