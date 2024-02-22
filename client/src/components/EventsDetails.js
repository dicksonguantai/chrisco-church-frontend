import React from "react";

function EventsDetails({event}) {
    return (
        <div className="event-popup">
            <h1>Event Details</h1>
            <div className="event-popup-header">
                <div className="event-header">
                    <p className="event-id">{event.id}</p>
                    <h3 className="event-title">{event.title}</h3>
                </div>
                <p><strong>Theme: </strong>{event.theme}</p>
                <p><strong>Scripture: </strong>{event.scripture}</p>
            </div>
            <div className="event-popup-location"><strong>Location: </strong>{event.location}</div>
            <p className="event-popup-date"><strong>Date: </strong>{event.date}</p>
            <p className="event-popup-time"><strong>Time: </strong>{event.start_time}-{event.end_time}</p>
            <p className="event-popup-host"><strong>Host: </strong>{event.event_host}</p>
            <p className="event-popup-description"><strong>Description: </strong>{event.description}</p>

        </div>
    );
}

export default EventsDetails;