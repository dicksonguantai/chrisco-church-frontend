import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import EventsDetails from "./EventsDetails";
import './Events.css';
import Modal from "react-modal";

function Events(){

    const [Events, setEvents] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);

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
    }, []);

    const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

    return(
        <div>
            <Header />
            <div className="events-intro">
            <strong><em><h1 className="events-h1">EVENTS</h1></em></strong>
            <strong><h2 className="events-h2">Connect With Us Through Events</h2></strong>
            <p>Join our upcoming events; conferences, meetups and more. Whether we are coming to a</p>
            <p>screen or a town near you, there's something for everyone.</p>
            </div>
            <div className="events">
            {Events.map(event =>(
                <div key = {event.id} className="event-grid" onClick={() => handleEventClick(event)}>
                    <div className="event-header">
                        <p className="event-id">{event.id}</p>
                        <h3 className="event-title">{event.title}</h3>
                        <p className="event-date">{event.date}</p>
                    </div>
                    {/* <img src={event.event_img} alt={event.title}/> */}
                    <strong><p className="event-description">{event.description}</p></strong>
                    <p className="event-host"><strong>Host: </strong>{event.event_host}</p>
                    <div className="event-footer">
                        <p className="event-location"><strong>Location: </strong>{event.location}</p>
                        <p className="event-time">{event.start_time}-{event.end_time}</p>
                    </div>
                </div>
            ))}
            </div>
            <Modal isOpen={selectedEvent!==null} onRequestClose={handleCloseModal}>
            {selectedEvent &&(
                <div className="event-popup">
                <h1>Event Details</h1>
                <div className="event-popup-header">
                    <div className="event-headers">
                        <p className="event-popup-id">{selectedEvent.id}</p>
                        <h3 className="event-popup-title">{selectedEvent.title}</h3>
                    </div>
                    <p><strong>Theme: </strong>{selectedEvent.theme}</p>
                    <p><strong>Scripture: </strong>{selectedEvent.scripture}</p>
                </div>
                <div className="event-popup-location"><strong>Location: </strong>{selectedEvent.location}</div>
                <p className="event-popup-date"><strong>Date: </strong>{selectedEvent.date}</p>
                <p className="event-popup-time"><strong>Time: </strong>{selectedEvent.start_time}-{Event.end_time}</p>
                <p className="event-popup-host"><strong>Host: </strong>{selectedEvent.event_host}</p>
                <p className="event-popup-description"><strong>Description: </strong>{selectedEvent.description}</p>
                <button className="event-popup-button" onClick={handleCloseModal}>X</button>
            </div>
            )}
            </Modal>
            <div className="events-info">
            <strong><h2 className="events-h2">Don't miss the latest event's drop</h2></strong>
            <p>Be the first to know about our events. Sign up for special announcements, information</p>
            <p>about event registration, and more right to your inbox.</p>
            <strong><h3 className="events-h3">Know before you go</h3></strong>
            <p>Prepare and make the most of every event with tips and tricks</p>
            <strong><h3 className="events-h3">Know the lineup</h3></strong>
            <p>Take a peek at who is taking the stage and see how you can sign up yourself</p>
            <strong><h3 className="events-h3">Save more durimg early registartion</h3></strong>
            <p>Know exactly when registration opens and take advantage of the best price.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Events;