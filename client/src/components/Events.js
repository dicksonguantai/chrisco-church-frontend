import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";


function Events(){

    const [Events, setEvents] = useState([]);
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
                <div key = {event.id} className="event-grid">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    {/* <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p> */}
                </div>
            ))}
            </div>
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