import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { FaMapMarkerAlt, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


function Home(){
    const imageUrl = "/Images/Homepic.png"; 

    const [events, setEvents] = useState([]);
    const [serviceProgram, setServiceProgram] = useState([]);

    useEffect(() => {
      
      fetch('/api/events')
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

        fetch ('api/service-program')
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
    }, []);



  return (
    <div>
      
      <Header />
      <div className="image-container">
        <img src={imageUrl} alt="Image" className="image" />
        <div className="overlay">
          <h2 className="title">Welcome to Chrisco Central Church</h2>
          <h3>Join our community of Faith</h3>
          <p className="description">Loving God, loving others and serving the world through the words of the Lord</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
      <div className="service-program">
        <h2>Service Program</h2>
        <div className="columns">
          {serviceProgram.map((column, index) => (
            <div key={index} className="column">
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="events">
          <h2>Events</h2>
          {events.map(event => (
            <div key={event.id} className="event">
              <h3>{event.title}</h3>
              <p>{event.description}</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
      </div>
      
      <Footer/>
    </div>
    
  );
}

export default Home;
