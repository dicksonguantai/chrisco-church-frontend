import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'flowbite-react';
import { TextInput } from 'flowbite-react';

function EditableEventsTable() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    event_category: '',
    event_host: '',
    location: '',
    start_time: '',
    end_time: '',
    theme: '',
    scripture: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/events/all');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e, id, key) => {
    const { value } = e.target;
    setEvents(prevEvents => {
      return prevEvents.map(event => {
        if (event.id === id) {
          return { ...event, [key]: value };
        }
        return event;
      });
    });
  };

  const handleSave = async (id) => {
    try {
      const eventToUpdate = events.find(event => event.id === id);
      await axios.patch(`https://chrisco-church-endpoints.onrender.com/events/${id}`, eventToUpdate);
      console.log(`Event with ID ${id} updated successfully`);
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://chrisco-church-endpoints.onrender.com/events/${id}`);
      setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
      console.log(`Event with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  const handleAddEvent = async () => {
    try {
      await axios.post('https://chrisco-church-endpoints.onrender.com/events', newEvent);
      setNewEvent({
        title: '',
        description: '',
        event_category: '',
        event_host: '',
        location: '',
        start_time: '',
        end_time: '',
        theme: '',
        scripture: ''
      });
      fetchData();
      console.log('New event added successfully');
    } catch (error) {
      console.error('Error adding new event:', error);
    }
  };

  return (
<div className="p-6">     
 <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Event Category</th>
            <th>Event Host</th>
            <th>Location</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Theme</th>
            <th>Scripture</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map(event => (
            <tr key={event.id}>
              <td className='px-4 py-2'>
                <TextInput
                  value={event.title}
                  onChange={(e) => handleInputChange(e, event.id, 'title')}
                />
              </td>
              <td>
                <TextInput
                  value={event.description}
                  onChange={(e) => handleInputChange(e, event.id, 'description')}
                />
              </td>
              <td>
                <TextInput
                  value={event.event_category}
                  onChange={(e) => handleInputChange(e, event.id, 'event_category')}
                />
              </td>
              <td>
                <TextInput
                  value={event.event_host}
                  onChange={(e) => handleInputChange(e, event.id, 'event_host')}
                />
              </td>
              <td>
                <TextInput
                  value={event.location}
                  onChange={(e) => handleInputChange(e, event.id, 'location')}
                />
              </td>
              <td>
                <TextInput
                  value={event.start_time}
                  onChange={(e) => handleInputChange(e, event.id, 'start_time')}
                />
              </td>
              <td>
                <TextInput
                  value={event.end_time}
                  onChange={(e) => handleInputChange(e, event.id, 'end_time')}
                />
              </td>
              <td>
                <TextInput
                  value={event.theme}
                  onChange={(e) => handleInputChange(e, event.id, 'theme')}
                />
              </td>
              <td>
                <TextInput
                  value={event.scripture}
                  onChange={(e) => handleInputChange(e, event.id, 'scripture')}
                />
              </td>
              <td className='flex'>
                <Button className='mx-4' onClick={() => handleSave(event.id)}>Save</Button>
                <Button className='mx-4' onClick={() => handleDelete(event.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
          <tr>
            <td className='px-4 py-2'>
              <TextInput
                value={newEvent.title}
                onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                placeholder="Title"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                placeholder="Description"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.event_category}
                onChange={(e) => setNewEvent({ ...newEvent, event_category: e.target.value })}
                placeholder="Event Category"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.event_host}
                onChange={(e) => setNewEvent({ ...newEvent, event_host: e.target.value })}
                placeholder="Event Host"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.location}
                onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                placeholder="Location"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.start_time}
                onChange={(e) => setNewEvent({ ...newEvent, start_time: e.target.value })}
                placeholder="Start Time"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.end_time}
                onChange={(e) => setNewEvent({ ...newEvent, end_time: e.target.value })}
                placeholder="End Time"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.theme}
                onChange={(e) => setNewEvent({ ...newEvent, theme: e.target.value })}
                placeholder="Theme"
              />
            </td>
            <td>
              <TextInput
                value={newEvent.scripture}
                onChange={(e) => setNewEvent({ ...newEvent, scripture: e.target.value })}
                placeholder="Scripture"
              />
            </td>
            <td>
              <Button className='mx-4' onClick={handleAddEvent}>Add New Event</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default EditableEventsTable;
