import React from 'react';
import './signup.css';

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Sign In clicked");
  };

  return (
    <div className="signup-container">
      <img src="./logo.svg" alt="Logo" className="signup-logo" />
      <h6 className="signup-header">Already have an account? <a href="#" className="signin-link">Log in here</a></h6>
      <form>
        <div className="signup-row">
          <div className="signup-column">
            <input 
              className="signup-input"
              type="text" 
              placeholder="First Name" 
              required 
            />
          </div>
          <div className="signup-column">
            <input 
              className="signup-input"
              type="text" 
              placeholder="Last Name" 
              required 
            />
          </div>
        </div>
        <div>
          <input 
            className="signup-input"
            type="email" 
            placeholder="Email" 
            required 
          />
        </div>
        <div>
          <input 
            className="signup-input"
            type="password" 
            placeholder="Password" 
            required 
          />
        </div>
        <div>
          <input 
            className="signup-input"
            type="password" 
            placeholder="Confirm Password" 
            required 
          />
        </div>
        <button onClick={handleSignUp} className="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;