import "./Navbar.css";
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="nav-link-krgcjpg-parent">
      <img
        className="nav-link-krgcjpg"
        loading="eager"
        alt=""
        src="./logo.svg"
      />

      <div className="give-button-wrapper">
        <div className="give-button">
          <div className="nav-item-link">
            <div className="nav-list">
                <Link to="/">Home</Link>
              </div>
          </div>
          <div className="nav-item-link1">
            <div className="nav-list1">
            <Link to= "/about-us">About Us</Link>
            </div>
          </div>
          <div className="nav-item-link2">
            <div className="nav-list2">
            <Link to="/departments">Departments</Link>

            </div>
          </div>
          <div className="nav-list3">
            
          <Link to= "/services">Services</Link>
          </div>
          <div className="nav-item-link3">
            <div className="nav-list4">
            <Link to="/contact-us">Contact Us</Link>
            </div>
          </div>
          <button className="give login-text nav-container">
            <b className="login">Give</b>
          </button>

          <button className="nav-container">
            <b className="login">Login</b>
          </button>
        </div>
      </div>
    </header>
  )}

  export default Navbar;