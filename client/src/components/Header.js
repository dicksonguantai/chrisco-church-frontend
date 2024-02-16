import React from 'react';
// import {Link} from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Header(){
    const churchTitle = "CENTRAL CHURCH - NAIROBI";
    const logoUrl = "/Churchlogo.png"; 

    return (
        <header className="header">
            <div className="left-container">
                <img src={logoUrl} alt="Logo" className="logo" />
                <span className="title">{churchTitle}</span>
            </div>
            <nav className="navbar">
                {/* <ul className="nav-links">
                    <li className="nav-item">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" >About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/departments" >Departments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services" >Services</Link>
                    </li>
                </ul> */}
            </nav>
            <div>
                <button className="button">Give</button>
                <button className="button">Login</button>
            </div>
        </header>
    );
}

export default Header;
