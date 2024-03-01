import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import EventsDetails from "./EventsDetails";

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
            {selectedEvent && <EventsDetails event={selectedEvent} />}
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