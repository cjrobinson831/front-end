import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginSignupScreen = () => {
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value
    })
    console.log('login creds: ', loginCredentials)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="login-screen">
      <div className="login-form-container">
        <h2 className="login-form-title">Login Below</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input 
          onChange={handleChange}
          className="input-email"
          name="email"
          type="email"
          placeholder="Email"
          required
          />
          <input 
          onChange={handleChange}
          className="input-password"
          name="password"
          type="password"
          placeholder="Password"
          required
          />
          <button>Login</button>
        </form>
        <div className="register-description">
          <p>Don't have an account? Signup <Link to='/register'>Here</Link></p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupScreen;