import React , {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log("Forgot password clicked");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const response = await fetch('https://chrisco-church-endpoints.onrender.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();

      localStorage.setItem('accessToken', data.tokens.access);
      localStorage.setItem('firstName', data.user_details.username);

      console.log("i am redirecting")
      navigate("/dashboard" );
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="login-container">
      <img src="./logo.svg" alt="Logo" className="login-logo" />

      <h6 className="signup-header">Don't have an account yet? <Link to="/signup" className="signup-link">Sign up here</Link></h6>
      <form>
        <div>
          <input 
            className="login-input"
            type="email" 
            placeholder="Email"
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required  
          />
        </div>
        <div>
          <input 
            className="login-input"
            type="password" 
            placeholder="Password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required  
          />
          <div className="password-help">
            <a href="/" onClick={handleForgotPassword}>Forgot your password?</a>
          </div>
        </div>
        <button className="login-button" type="submit" onClick={handleLogin}>Log In</button>
      </form>
    </div>
  );
};

export default LogIn;