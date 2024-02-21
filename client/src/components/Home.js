import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SpotifyEmbeds from './Spotify';
<<<<<<<<< Temporary merge branch 1
// import Slider from 'react-slick';
import Youtube from './Youtube';
=========
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
>>>>>>>>> Temporary merge branch 2


function Home(){
    const imageUrl = "/Images/Homepic.png"; 

    const [events, setEvents] = useState([]);
    const [serviceProgram, setServiceProgram] = useState([]);

    useEffect(() => {
      
      fetch('https://chrisco-church-endpoints.onrender.com/events/all')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching events');
          }
          return response.json();
        })
        .then(data => {
          setEvents(data);
        })
        .catch(error => {
          console.error('Error fetching events:', error);
        });

        fetch ('https://chrisco-church-endpoints.onrender.com/services/all')
        .then(response => {
          if (!response.ok) {
            throw new Error('Error fetching service program');
          }
          return response.json();
        })
        .then(data => {
          setServiceProgram(data);
        })
        .catch(error => {
          console.error('Error fetching service program:', error);
        });
    }, [serviceProgram]);



  return (
    <div>
      
      <Header />
      <div className="image-container">
        <img src={imageUrl} alt="background" className="image" />
        <div className="overlay">
          <h2 className="title">Welcome to Chrisco Central Church</h2>
          <h3>Join our community of Faith</h3>
          <p className="description">Loving God, loving others and serving the world through the words of the Lord</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      <div className="service-program">
        <h2>Service Program</h2>
        <div className="service">
          {serviceProgram.map((service, index) => (
            <div key={index} className="service-grid">
              <strong><p>{service.name}</p></strong>
              <div className='service-footer'>
                <p>{service.start_time} - {service.end_time}</p>
                <p>{service.service_type}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <SpotifyEmbeds/>
<<<<<<<<< Temporary merge branch 1
      <Youtube/>
      <h1><strong>Events</strong></h1>
      <div className="events">
          {events.map(event => (
            <div key={event.id} className="event-grid">
              <img src={event.event_img} alt={event.title}/>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
      </div>
        <Link to="/events">
        <button className="explore-more">Explore more</button>
        </Link>
      
      
      <Footer/>
    </div>
    
  );
}

export default Home;
