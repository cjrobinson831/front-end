import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignUpScreen from './components/LoginSignUpScreen';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';
import RegisterScreen from './components/RegisterScreen';

function App() {
  return (
    // app wrapped in a router, starts by default with login page
    // will route users to dashboard once signed in or registered
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={LoginSignUpScreen}/>
          <Route path ="/register" component={RegisterScreen}/>
          <PrivateRoute path="/protected"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
