import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SpotifyEmbeds from './Spotify';
import Slider from './Slider1';
import Youtube from './Youtube';
import { Link } from 'react-router-dom';



function Home(){
    const imageUrl = "/Images/Homepic.png"; 

    const [events, setEvents] = useState([]);
    const [serviceProgram, setServiceProgram] = useState([]);
    const [showFullText, setShowFullText] = useState(false);

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

    const handleReadMoreClick = () => {
      setShowFullText(true);
    };

  return (
    <div>
      
      <Header />
      <Slider />
      {/* <div className="image-container">
        <img src={imageUrl} alt="background" className="image" />
        <div className="overlay">
          <h2 className="title">Welcome to Chrisco Central Church</h2>
          <h3>Join our community of Faith</h3>
          <p className="description">Loving God, loving others and serving the world through the words of the Lord</p>
          <button className="read-more">Read More</button>
        </div>
      </div> */}
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
      <Youtube/>
      <h1><strong>Events</strong></h1>
      <div className="events">
          {events.map(event => (
            <div key={event.id} className="event-grid">
              <img src={event.event_img} alt={event.title}/>
              <h3>{event.title}</h3>
              {showFullText ? <p>{event.description}</p> : <p>{event.description.slice(0, 50)}</p>}
              <button className="read-more" onClick={handleReadMoreClick}>Read More</button>
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
