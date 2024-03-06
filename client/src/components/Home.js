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
import Services from "./Services";
import './Home.css';

function Home() {
  const imageUrl2 = "/Images/20230818_142741.jpg";
  const imageUrl = "/Images/20230827_124235.jpg";

  const [events, setEvents] = useState([]);
  const [expandedEvents, setExpandedEvents] = useState({});

  useEffect(() => {
    fetch("https://chrisco-church-endpoints.onrender.com/events/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching events");
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });

    
  }, [events]);

  const handleReadMoreClick = (eventId) => {
    setExpandedEvents({ ...expandedEvents, [eventId]: true });
  };

  const isEventExpanded = (eventId) => {
    return expandedEvents[eventId];
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
      <div className='slider-container'>
      <Slider {...settings} className='slider'>
        <div className="image-container">
          <img src={imageUrl} alt="background" className="image" />
          <div className="overlay">
            <h2 className="title">Welcome to Chrisco Central Church</h2>
            <h3>Join our community of Faith</h3>
            <p className="description">Loving God, loving others and serving the world through the words of the Lord</p>
          </div>
        </div>
        <div className="image-container">
          <img src={imageUrl2} alt="background" className="image" />
        </div>
        <div className="image-container">
          <img src={imageUrl} alt="background" className="image" />
        </div>
      </Slider>
      </div>
      <Services/>
      <SpotifyEmbeds />
      <div className="container-banner-container-rounded">
      </div>
      <Youtube />
      <div className="container-banner-container-round">
      </div>
      <h1 className='events-h1'><strong>Events</strong></h1>
      <div className="events">
        {events.map(event => (
          <div key={event.id} className="event-grid">
            <div className='event'>
                <div className="event-img">
                  <img src={event.event_img} alt={event.title} />
                </div>
                  <h3>{event.title}</h3>
                  {isEventExpanded(event.id) ? <p>{event.description}</p> : <p>{event.description.slice(0, 55)}</p>}
                  <button className="read-more" onClick={() => handleReadMoreClick(event.id)}>Read More</button>
            </div>
          </div>
        ))}
        <div className="explore-more-container">
        <Link to="/events">
          <button className="explore-more-button">Explore more</button>
        </Link>
      </div>
          </div>
      
  
      <Footer />
      </div>
  );
}

export default Home;

