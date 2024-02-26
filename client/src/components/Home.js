import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import SpotifyEmbeds from './Spotify';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Youtube from './Youtube';
import { Link } from 'react-router-dom';



function Home(){
    const imageUrl2 = "/Images/Homepic.png"; 
    const imageUrl = "/Images/20230827_124235.jpg"; 

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
    
    var settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: false,
      verticalSwiping: false,
    };

  return (
    <div>
      
      <Header />
      <Slider {...settings}>
        <div className="image-container">
          <img src={imageUrl} alt="background" className="image" />
          <div className="overlay">
            <h2 className="title">Welcome to Chrisco Central Church</h2>
            <h3>Join our community of Faith</h3>
            <p className="description">Loving God, loving others and serving the world through the words of the Lord</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
        <div className="image-container">
        <img src={imageUrl2} alt="background" className="image" />
        </div>
        <div className="image-container">
          <img src={imageUrl} alt="background" className="image" />
        </div>
      </Slider>
      <div className="service-program">
        <h1><strong>Service Program</strong></h1>
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
      <h1 className='events-h1'><strong>Events</strong></h1>
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
