import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'
import './signup.css';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleSignUp = async (e) => {
    e.preventDefault();
    console.log("Sign In clicked");
    
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
  };

  try {
    const response = await fetch('https://chrisco-church-endpoints.onrender.com/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        firstname: firstName, 
        lastname: lastName, 
        email: email, 
        password: password,
        "confirm-password": confirmPassword
      }),
    });

    if (!response.ok) {
      console.error("Error signing up:", error);
    }

    const data = await response.json();
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    const access = data.jwt;
    localStorage.setItem("accessToken", access);

    navigate("/login");
  } catch (error) {
    console.error("Sign-up failed:", error.message);
    setError("Check your details and try again.");
  }
};

  return (
    <div className="signup-container">
      <img src="./logo.svg" alt="Logo" className="signup-logo" />

      <h6 className="signup-header">Already have an account? <a className="signup-link">switch to Log in below</a></h6>
      <form>
        <div className="signup-row">
          <div className="signup-column">
            <input 
              className="signup-input"
              type="text" 
              placeholder="First Name"
              value={firstName} 
              onChange={(e) => setFirstName(e.target.value)}
              required 
            />
          </div>
          <div className="signup-column">
            <input 
              className="signup-input"
              type="text" 
              placeholder="Last Name" 
              value={lastName} 
              onChange={(e) => setLastName(e.target.value)} 
              required 
            />
          </div>
        </div>
        <div>
          <input 
            className="signup-input"
            type="email" 
            placeholder="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            className="signup-input"
            type="password" 
            placeholder="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <input 
            className="signup-input"
            type="password" 
            placeholder="Confirm Password"
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button onClick={handleSignUp} className="signup-button" type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;