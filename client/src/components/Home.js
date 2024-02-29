import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import SpotifyEmbeds from "./Spotify";
import Slider from "./Slider1";
import Youtube from "./Youtube";
import { Link } from "react-router-dom";
import Services from "./Services";
import Footer2 from "./Footer2";

function Home() {
  const [events, setEvents] = useState([]);
  const [showFullText, setShowFullText] = useState(false);

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

  const handleReadMoreClick = () => {
    setShowFullText(true);
  };

  return (
    <div>
      <Header />
      <Slider />

      <Services />
      <SpotifyEmbeds />
      <Youtube />
      <h1 className="text-center text-2xl font-bold border-b-2 border-black p-2">
        <strong >Events</strong>
      </h1>
      <div className="events md:block">
        {events.map((event) => (
          <div key={event.id} className="event-grid">
            {/* <img src={event.event_img} alt={event.title}/> */}
            <img src="/baptism.png" alt={event.title} />
            <h3>{event.title}</h3>
            {showFullText ? (
              <p>{event.description}</p>
            ) : (
              <p>{event.description.slice(0, 50)}</p>
            )}
            <button className="read-more" onClick={handleReadMoreClick}>
              Read More
            </button>
          </div>
        ))}
        
        <button className=" mx-auto"><Link to="/events">Explore more</Link></button>
      
      </div>
      

      
      <Footer2/>
    </div>
  );
}

export default Home;
