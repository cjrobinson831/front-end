import React from 'react';

const LoginSignupScreen = () => {
  return (
    <div className="login-screen">
      <div className="login-form-container">
        <h2 className="login-form-title">Login Below</h2>
        <form className="login-form">
          <input 
          className="input-email"
          name="email"
          type="email"
          placeholder="Email"
          required
          />
          <input 
          className="input-password"
          name="password"
          type="password"
          placeholder="Password"
          required
          />
          <button>Login</button>
        </form>
        <div className="register-description">

        </div>
      </div>
    </div>
  );
}

export default LoginSignupScreen;