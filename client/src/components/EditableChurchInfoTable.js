import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';
import { TextInput,Button } from 'flowbite-react';

function EditableChurchInfoTable() {
  const [churchInfo, setChurchInfo] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/churchinfo/all');
      setChurchInfo(response.data[0]); // Assuming there's only one church info object
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e, key) => {
    const { value } = e.target;
    setChurchInfo(prevInfo => ({
      ...prevInfo,
      [key]: value
    }));
  };

  const handleSave = async () => {
    try {
      await axios.patch('https://chrisco-church-endpoints.onrender.com/churchinfo/all', churchInfo);
      console.log('Church information updated successfully');
    } catch (error) {
      console.error('Error updating church information:', error);
    }
  };

  if (!churchInfo) {
    return <div>Loading...</div>;
  }

  return (
<div className="p-6">  
    <Table>
        <tbody  >
          {Object.entries(churchInfo).map(([key, value]) => (
            <tr className='my-4' key={key}>
              <td>{key}</td>
              <td>
                <TextInput
                  
                  value={value}
                  onChange={(e) => handleInputChange(e, key)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button className='my-6' onClick={handleSave}>Save</Button>
    </div>
  );
}

export default EditableChurchInfoTable;
