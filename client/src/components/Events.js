import React from "react";
import { useState, useEffect } from "react";


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
            <h1>Events</h1>
            {Events.map(event =>(
                <div key = {event.id} className="event-grid">
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.location}</p>
                </div>
            ))}
        </div>
    )
}

export default Events;