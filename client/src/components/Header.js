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
                Nairobi, Woodley , Ngong Road.
              </div>
            </div>
          </div>
          <div className="nav-link">
            <div className="join-our-community">Join our Community:</div>
            <SlSocialFacebook />            
            <SlSocialYoutube />
            <PiTiktokLogo />
            <FaXTwitter />


          </div>
        </div>
      </div>
      <Navbar/>
    </div>
  );
};

export default HomePage;