import React from "react";
import "./Header.css";
import {IoIosCall} from 'react-icons/io'
import { CiLocationOn } from "react-icons/ci";
import { SlSocialFacebook,SlSocialYoutube } from "react-icons/sl";
import { PiTiktokLogo } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="home-page-inner">
        <div className="frame-parent">
          <div className="frame-group">
            <div className="vector-parent">
              
              <div className="vector-icon"><IoIosCall size= {28}/></div>
              
              <div className="empty-frame">+25471111234567</div>
            </div>
            <div className="location-parent">
             
              <div className="location-icon"><CiLocationOn size= {28}/></div>

              <div className="nairobi-woodley">
                <a href="https://maps.app.goo.gl/uquZp7P6f5Gdh29T9">Nairobi, Woodley , Ngong Road.</a>
              </div>
            </div>
          </div>
          <div className="nav-link">
            <div className="join-our-community">Join our Community:</div>
            <a href="https://www.facebook.com/chrisconairobi?mibextid=JRoKGi">
            <SlSocialFacebook /> 
            </a>   
            <a href="https://www.youtube.com/@chrisconairobi">      
            <SlSocialYoutube />
            </a>  
            <a href="https://www.tiktok.com/@chrisconairobi">
            <PiTiktokLogo />
            </a>
            <a href="https://x.com/chrisconairobi?t=3ZQ1zpqWYmXwUjIEyEuvaQ&s=09">
            <FaXTwitter />
            </a>


          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default HomePage;