import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Slider1() {
  var settings = {
    dots: true,
    infinite: true,
    arrows:true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div className="image-container">
      <img className="image" src="/Images/Homepic.png" alt="..." />
      <div className="overlay">
          <h2 className="title-slider">Welcome to Chrisco Central Church</h2>
          <h3>Join our community of Faith</h3>
          <p className="description">Loving God, loving others and serving the world through the words of the Lord</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      
    </Slider>
  );
}
