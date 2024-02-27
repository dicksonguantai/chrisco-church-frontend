import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'flowbite-react';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';

const PrayerRequestsTable = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/requests/all');
      setRequests(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://chrisco-church-endpoints.onrender.com/requests/${id}`);
      setRequests(requests.filter(request => request.id !== id));
      console.log(`Request with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting request:', error);
    }
  };

  const handlePrayedFor = async (id) => {
    try {
      // Update the request in the backend to mark it as prayed for
      await axios.patch(`https://chrisco-church-endpoints.onrender.com/requests/${id}`, { prayed_for: true });
      // Update the local state to reflect the change
      setRequests(prevRequests =>
        prevRequests.map(request =>
          request.id === id ? { ...request, prayed_for: true } : request
        )
      );
      console.log(`Request with ID ${id} marked as prayed for`);
    } catch (error) {
      console.error('Error marking request as prayed for:', error);
    }
  };

  return (
    <div  className="p-6">
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Request</th>
          <th>Timestamp</th>
          <th>Prayed For</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {requests.map(request => (
          <tr className="px-4 py-2"key={request.id}>
            <td className="px-4 py-2">{request.id}</td>
            <td className="px-4 py-2">{request.request}</td>
            <td className="px-4 py-2">{request.timestamp}</td>
            <td className="px-4 py-2">
              {request.prayed_for ? <BsCheckCircle color="green" /> : <BsCircle color="red" />}
            </td>
            <td className='flex '>
              <Button className='mx-4' onClick={() => handleDelete(request.id)} variant="danger">Delete</Button>
              {!request.prayed_for && (
                <Button className='mx-4' onClick={() => handlePrayedFor(request.id)}>Prayed For</Button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  );
};

export default PrayerRequestsTable;
