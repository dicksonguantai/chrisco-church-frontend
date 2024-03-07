import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button } from 'flowbite-react';
import { TextInput } from 'flowbite-react';

function EditableTable() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    service_type: '',
    start_time: '',
    end_time: ''
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/services/all');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e, rowIndex, fieldKey) => {
    const { value } = e.target;
    setData(prevData => {
      const newData = [...prevData];
      newData[rowIndex][fieldKey] = value;
      return newData;
    });
  };

  const handleSave = async (id) => {
    try {
      const itemToUpdate = data.find(item => item.id === id);
      await axios.patch(`https://chrisco-church-endpoints.onrender.com/services/${id}`, itemToUpdate);
      fetchData();
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://chrisco-church-endpoints.onrender.com/services/${id}`);
      fetchData();
      console.log(`Item with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleAddItem = async () => {
    try {
      await axios.post('https://chrisco-church-endpoints.onrender.com/services', newItem);
      setNewItem({
        name: '',
        service_type: '',
        start_time: '',
        end_time: ''
      });
      fetchData();
      console.log('New item added successfully');
    } catch (error) {
      console.error('Error adding new item:', error);
    }
  };

  return (
    <div className="p-6">
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Service Type</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td className='px-4 py-2'>
                <TextInput
                  value={row.name}
                  onChange={(e) => handleInputChange(e, rowIndex, 'name')}
                />
              </td>
              <td>
                <TextInput
                  value={row.service_type}
                  onChange={(e) => handleInputChange(e, rowIndex, 'service_type')}
                />
              </td>
              <td>
                <TextInput
                  value={row.start_time}
                  onChange={(e) => handleInputChange(e, rowIndex, 'start_time')}
                />
              </td>
              <td>
                <TextInput
                  value={row.end_time}
                  onChange={(e) => handleInputChange(e, rowIndex, 'end_time')}
                />
              </td>
              <td className='flex '>
                <Button className='mx-4' onClick={() => handleSave(row.id)}>Save</Button>
                <Button className='mx-4'onClick={() => handleDelete(row.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
          <tr>
            <td className='px-4 py-2'>
              <TextInput
                value={newItem.name}
                onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                placeholder="Name"
              />
            </td>
            <td>
              <TextInput
                value={newItem.service_type}
                onChange={(e) => setNewItem({ ...newItem, service_type: e.target.value })}
                placeholder="Service Type"
              />
            </td>
            <td>
              <TextInput
                value={newItem.start_time}
                onChange={(e) => setNewItem({ ...newItem, start_time: e.target.value })}
                placeholder="Start Time"
              />
            </td>
            <td>
              <TextInput
                value={newItem.end_time}
                onChange={(e) => setNewItem({ ...newItem, end_time: e.target.value })}
                placeholder="End Time"
              />
            </td>
            <td>
              <Button className='mx-4' onClick={handleAddItem}>Add New Service</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default EditableTable;
