import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const FirstName = localStorage.getItem('firstName') || '';
  const LastName = localStorage.getItem('lastName') || '';
  const Email = localStorage.getItem('email') || '';
  const Role = localStorage.getItem('role') || '';
  const Token = localStorage.getItem('accessToken') || '';
  const Refresh = localStorage.getItem('refreshToken') || '';
  console.log("First Name:", FirstName);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div>
      <h1>Welcome, {FirstName}</h1>
      <h1> Surname, {LastName}</h1>
      <h1>Email, {Email}</h1>
      <h1>Role, {Role}</h1>
      <h1>Token, {Token}</h1>
      <h1>Refresh, {Refresh}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
