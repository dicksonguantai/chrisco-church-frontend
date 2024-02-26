import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, TextInput } from 'flowbite-react';
import Image from 'react-bootstrap/Image';

function UserCard({ user, onSave }) {
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    setEditedUser(user);
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  return (
    <Card className="max-w-sm">
      <div className="flex flex-col items-center pb-10">
        <Image
          alt={`${user.firstname} ${user.lastname}`}
        //   src={`/images/people/${user.profilePicture}.jpg`}
        src ={`faith.png`}
          className="mb-3 rounded-full shadow-lg"
        />
        <TextInput
          type="text"
          name="firstname"
          value={editedUser.firstname || ''}
          onChange={handleInputChange}
          placeholder="First Name"
          className="mb-2"
        />
        <TextInput
          type="text"
          name="lastname"
          value={editedUser.lastname || ''}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="mb-2"
        />
        <TextInput
          type="email"
          name="email"
          value={editedUser.email || ''}
          onChange={handleInputChange}
          placeholder="Email"
          className="mb-2"
        />
        <button onClick={() => onSave(editedUser)}>Save</button>
      </div>
    </Card>
  );
}

function UserDetails() {
  const [user, setUser] = useState(null);
  const userId = 1;

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  const fetchData = async (userId) => {
    try {
      const response = await axios.get(`https://chrisco-church-endpoints.onrender.com/users/${userId}`);
      setUser(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSave = async (editedUser) => {
    try {
      await axios.put(`https://chrisco-church-endpoints.onrender.com/users/${editedUser.id}`, editedUser);
      setUser(editedUser);
      alert('User details saved successfully!');
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Failed to save user details. Please try again.');
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center">
      <UserCard user={user} onSave={handleSave} />
    </div>
  );
}

export default UserDetails;
