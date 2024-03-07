import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';
import { TextInput, Button } from 'flowbite-react';

function EditableDepartmentsTable() {
  const token = localStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const [departments, setDepartments] = useState([]);
  const [fields, setFields] = useState([]);
  const [newDepartment, setNewDepartment] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/departments/all');
      if (response.data.length > 0) {
        const firstDepartment = response.data[0];
        const departmentFields = Object.keys(firstDepartment);
        setFields(departmentFields.filter(field => field !== 'id')); // Exclude ID field from fields array
        setNewDepartment(Object.fromEntries(departmentFields.map(field => [field, ''])));
      }
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    setDepartments(prevDepartments => {
      return prevDepartments.map(department => {
        if (department.id === id) {
          return { ...department, [field]: value };
        }
        return department;
      });
    });
  };

  const handleSave = async (id) => {
    try {
      const departmentToUpdate = departments.find(department => department.id === id);
      await axios.patch(`https://chrisco-church-endpoints.onrender.com/departments/update/${id}`, departmentToUpdate,config);
      console.log(`Department with ID ${id} updated successfully`);
    } catch (error) {
      console.error('Error updating department:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://chrisco-church-endpoints.onrender.com/departments/delete/${id}`,config);
      setDepartments(prevDepartments => prevDepartments.filter(department => department.id !== id));
      console.log(`Department with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  const handleAddDepartment = async () => {
    try {
      const response = await axios.post('https://chrisco-church-endpoints.onrender.com/departments/new', newDepartment,config);
      setDepartments(prevDepartments => [...prevDepartments, response.data]);
      console.log('New department added successfully');
    } catch (error) {
      console.error('Error adding new department:', error);
    }
  };

  const handleNewDepartmentInputChange = (e, field) => {
    const { value } = e.target;
    setNewDepartment(prevDepartment => ({
      ...prevDepartment,
      [field]: value
    }));
  };

  return (
    <div  className="p-6">
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            {fields.map(field => (
              <th key={field}>{field}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map(department => (
            <tr key={department.id}>
              <td className='px-4 py-2'>{department.id}</td>
              {fields.map(field => (
                <td key={field}>
                  <TextInput
                    value={department[field]}
                    onChange={(e) => handleInputChange(e, department.id, field)}
                  />
                </td>
              ))}
              <td className='flex mx-4 px-4 py-2'>
                <Button className='mx-4' onClick={() => handleSave(department.id)}>Save</Button>
                <Button className='mx-4' onClick={() => handleDelete(department.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="mt-4">
        <h2 className='font-bold'>Add New Department</h2>
        {fields.map(field => (
          <TextInput
          className='px-4 py-1'
            key={field}
            value={newDepartment[field]}
            onChange={(e) => handleNewDepartmentInputChange(e, field)}
            placeholder={field}
          />
        ))}
        <Button className='mx-4'onClick={handleAddDepartment}>Add Department</Button>
      </div>
    </div>
  );
}

export default EditableDepartmentsTable;
