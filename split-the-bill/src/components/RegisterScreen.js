import React, { useState } from 'react';
import axios from 'axios';


const RegisterScreen = (props) => {
  const [newUserInfo, setNewUserInfo] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setNewUserInfo({
      ...newUserInfo,
      [e.target.name]: e.target.value
    })
    console.log(newUserInfo)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://split-the-bill-postgres.herokuapp.com/api/users/register', newUserInfo)
    
      .then(res => {
        localStorage.setItem('userId', res.data.id);
        console.log(res);
        axios.post('https://split-the-bill-postgres.herokuapp.com/api/users/login', {email: newUserInfo.email, password: newUserInfo.password})
          .then(res => {
            localStorage.setItem('token', res.data.token);
            props.history.push('/dashboard');
          })
      })
  }

  return (
    <div className="register-screen">
      <div className="register-form-container">
        <form onSubmit={handleSubmit} className="register-form">

          <div className="name-input-field">
            <input 
            onChange={handleChange}
            name="firstname"
            placeholder="First Name"
            type="text"
            required
            />
            <input 
            onChange={handleChange}
            name="lastname"
            placeholder="Last Name"
            type="text"
            required
            />
          </div>

          <div className="email-password-field">
            <input 
            onChange={handleChange}
            name="email"
            placeholder="Desired Email"
            type="email"
            required
            />
            <input 
            onChange={handleChange}
            name="password"
            placeholder="Desired Password"
            type="password"
            required
            />
          </div>
          <button>Submit</button>
        </form>
        <div onClick={() => props.history.push('/')} className="back-to-login-btn">
          <p>{"<"} Back To Login</p>
        </div>
      </div>
    </div>
  );
}
export default RegisterScreen;