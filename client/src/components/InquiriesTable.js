import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "flowbite-react";

function EditableInquiriesTable() {

  const token = localStorage.getItem('accessToken');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const [inquiries, setInquiries] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://chrisco-church-endpoints.onrender.com/inquiries/all",config
      );
      setInquiries(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://chrisco-church-endpoints.onrender.com/inquiries/${id}`,config
      );
      setInquiries((prevInquiries) => prevInquiries.filter((inquiry) => inquiry.id !== id));
      console.log(`Inquiry with ID ${id} deleted successfully`);
    } catch (error) {
      console.error("Error deleting inquiry:", error);
    }
  };

  return (
    <div className="p-6">
      <Table>
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Inquiry</th>
            <th>Submitted At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inquiries.map((inquiry) => (
            <tr key={inquiry.id}>
              <td className="px-4 py-2">{inquiry.id}</td>
              <td className="px-4 py-2">{inquiry.name}</td>
              <td>{inquiry.email}</td>
              <td>{inquiry.inquiry}</td>
              <td>{inquiry.submitted_at}</td>
              <td className="flex">
                <Button
                  onClick={() => handleDelete(inquiry.id)}
                  variant="danger"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default EditableInquiriesTable;
