import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "flowbite-react";
import { TextInput } from "flowbite-react";

function EditableUsersTable() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://chrisco-church-endpoints.onrender.com/users/all"
      );
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleInputChange = (e, id, key) => {
    const { value } = e.target;
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, [key]: value };
        }
        return user;
      });
    });
  };

  const handleSave = async (id) => {
    try {
      const userToUpdate = users.find((user) => user.id === id);
      await axios.patch(
        `https://chrisco-church-endpoints.onrender.com/users/${id}`,
        userToUpdate
      );
      console.log(`User with ID ${id} updated successfully`);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://chrisco-church-endpoints.onrender.com/users/${id}`
      );
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      console.log(`User with ID ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleAddNewUser = async () => {
    try {
      const response = await axios.post(
        "https://chrisco-church-endpoints.onrender.com/users",
        newUser
      );
      setUsers((prevUsers) => [...prevUsers, response.data]);
      setNewUser({});
      console.log("New user added successfully");
    } catch (error) {
      console.error("Error adding new user:", error);
    }
  };

  const handleNewUserInputChange = (e, key) => {
    const { value } = e.target;
    setNewUser((prevNewUser) => ({
      ...prevNewUser,
      [key]: value,
    }));
  };

  return (
    <div className="p-6">
      <Table>
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="px-4 py-2">{user.id}</td>
              <td className="px-4 py-2">
                <TextInput
                  value={user.firstname}
                  onChange={(e) => handleInputChange(e, user.id, "firstname")}
                />
              </td>
              <td>
                <TextInput
                  value={user.lastname}
                  onChange={(e) => handleInputChange(e, user.id, "lastname")}
                />
              </td>
              <td>
                <TextInput
                  value={user.email}
                  onChange={(e) => handleInputChange(e, user.id, "email")}
                />
              </td>
              <td className="flex">
                <Button className="mx-4" onClick={() => handleSave(user.id)}>
                  Save
                </Button>
                <Button
                  onClick={() => handleDelete(user.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              
            </td>
            <td>
              <TextInput
                value={newUser.firstname || ""}
                onChange={(e) => handleNewUserInputChange(e, "firstname")}
                placeholder="First Name"
              />
            </td>
            <td>
              <TextInput
                value={newUser.lastname || ""}
                onChange={(e) => handleNewUserInputChange(e, "lastname")}
                placeholder="Last Name"
              />
            </td>
            <td>
              <TextInput
                value={newUser.email || ""}
                onChange={(e) => handleNewUserInputChange(e, "email")}
                placeholder="Email"
              />
            </td>
            <td>
              <Button className='mx-4' onClick={handleAddNewUser}>Add New User</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default EditableUsersTable;
