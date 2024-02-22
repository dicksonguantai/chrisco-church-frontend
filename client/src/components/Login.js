import React from 'react';
import './login.css';

const LogIn = () => {
  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password clicked");
  };

  return (
    <div className="login-container">
      <img src="./logo.svg" alt="Logo" className="login-logo" />
      <h6 className="signup-header">Don't have an account yet? <a href="/" className="signup-link">Sign up here</a></h6>
      <form>
        <div>
          <input 
            className="login-input"
            type="email" 
            placeholder="Email" 
            required 
          />
        </div>
        <div>
          <input 
            className="login-input"
            type="password" 
            placeholder="Password" 
            required 
          />
          <div className="password-help">
            <a href="/" onClick={handleForgotPassword}>Forgot your password?</a>
          </div>
        </div>
        <button className="login-button" type="submit">Log In</button>
      </form>
    </div>
  );
};

export default LogIn;