import "./Navbar.css";
import {Link} from 'react-router-dom'
import { useState } from "react";
import Modal from './Modal';
import React from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  const handleLogout = () => {
    // Clear the logged-in status from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
      localStorage.removeItem('firstName');
      localStorage.removeItem('lastName');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      localStorage.removeItem('id')
    // Redirect to the login page or homepage after logout
    // navigate("/login");
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  
    const scrollToBottom = () => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth'
      });}
      
   return (
    <header className="nav-link-krgcjpg-parent">
      <img
        className="nav-link-krgcjpg"
        loading="eager"
        alt=""
        src="/logo.svg"
      />
      <div className="menu-icon" onClick={toggleMenu}>
              <span></span>
              <span></span>
               <span></span>
            </div>
      <nav className={`${isMenuOpen ? 'open navbar' : ''}`}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about-us">About Us</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/blogs">Services</Link></li>
        <li><Link to="/contact-us">ContactUs</Link></li>
        <button className="give login-text nav-container sm-buttons">
            <b className="login">Give</b>
          </button>

          <button className="nav-container sm-buttons" onClick={scrollToBottom}>
            <b className="login">Login</b>
          </button>
      </ul>
    </nav>
      <div className="give-button-wrapper">
        <div className="give-button">
          <div className="nav-item-link">
            <div className="nav-list">
                <Link to="/">Home</Link>
              </div>
          </div>
          <div className="nav-item-link1">
            <div className="nav-list1">
            <Link to= "/about-us">AboutUs</Link>
            </div>
          </div>
          <div className="nav-item-link2">
            <div className="nav-list2">
            <Link to="/departments">Departments</Link>

            </div>
          </div>
          <div className="nav-list3">
            
          <Link to= "/blogs">Blogs</Link>
          </div>
          <div className="nav-item-link3">
            <div className="nav-list4">
            <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
          <button className="give login-text nav-container" onClick={scrollToBottom}>
            <b className="login">Give</b>
          </button>
          {/* <button className="nav-container" onClick={toggleModal}>
            <b className="login" >Login</b>
          </button> */}
          {isLoggedIn ? (
              <button className="nav-container" onClick={handleLogout}>Logout</button>
            ) : (
            <button className="nav-container" onClick={toggleModal}>
            <b className="login" >Login</b>
          </button>            )}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal} />
    </header>
  )}

 export default Navbar