import React from 'react';
import { useState, useEffect } from 'react';


function Home(){
    const imageUrl = "/Images/Homepic.png"; 

    const [events, setEvents] = useState([]);

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
    }, []);

  return (
    <div>
    <div className="image-container">
      <img src={imageUrl} alt="Image" className="image" />
      <div className="overlay">
        <h2 className="title">Welcome to Chrisco Central Church</h2>
        <h3>Join our community of Faith</h3>
        <p className="description">Loving God, loving others and serving the world through the words of the Lord</p>
        <button className="read-more">Read More</button>
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
    </div>
    
  );
}

export default Home;
