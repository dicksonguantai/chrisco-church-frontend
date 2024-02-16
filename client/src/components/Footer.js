import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <div>
        <footer className="footer">
            {/* <div className="footer-column">
                <h3>Quick Links</h3>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/departments">Departments</Link></li>
                    <li><Link to="/services">Services</Link></li>
                </ul>
            </div> */}
            <div className="footer-column">
                <h3>Subscribe to the newsletter</h3>
                <input type="email" placeholder="Enter your email address" />
                <button>Subscribe</button>
            </div>
            <div className="footer-column">
                    <h3>Contact Us</h3>
                    <p>Phone: (+254) 7111111212</p>
                    <p>Address: Kibera Dr Woodley Estate</p>
                    <p>Email: contactus@gmail.com</p>
            </div>
            <div className="footer-column">
                    <h3>Give</h3>
                    <h4>M-pesa paybill:</h4>
                    <p>303030</p>
                    <h4>Bank Account:</h4>
                    <p>Paybill no: 303030</p>
                    <h4>Account no: 0948003171</h4>
                    <h4>Cheques to: <em>CHRISCO FELLOWSHIP</em></h4>
            </div>
        </footer>
        <button onClick={() => window.scrollTo(0, 0)} className="back-to-top">Back Top</button>
        </div>
    );
}

export default Footer;