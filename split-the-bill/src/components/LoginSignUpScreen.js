import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const LoginSignupScreen = (props) => {
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
    axios.post(
      'https://split-the-bill-postgres.herokuapp.com/api/users/login', loginCredentials
      )
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userId', res.data.user.id);
        props.history.push('/dashboard');
        // props.setUserId(res.data.user.id);
      })
      .catch (err => {
        console.log(err);
      })
  }

  return (
    <div className="login-screen">
      <div className="login-form-container">
        <h2 className="login-form-title">Login</h2>
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