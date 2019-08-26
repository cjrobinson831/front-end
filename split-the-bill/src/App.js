import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginSignUpScreen from './components/LoginSignUpScreen';
import Dashboard from "./components/Dashboard.js";
import AddExpenseForm from "./components/AddExpenseForm.js";

function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={LoginSignUpScreen}/>
      </Switch>

      <Dashboard />

      <AddExpenseForm />

      </div>
    </Router>
  );
}

export default App;
