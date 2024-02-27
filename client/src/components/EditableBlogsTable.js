import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'flowbite-react';
import { TextInput, Button, Textarea } from 'flowbite-react';

function EditableBlogsTable() {
  const [blogs, setBlogs] = useState([]);
  const [fields, setFields] = useState([]);
  const [newBlog, setNewBlog] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/blogs/all');
      if (response.data.length > 0) {
        const firstBlog = response.data[0];
        const blogFields = Object.keys(firstBlog);
        setFields(blogFields.filter(field => field !== 'id'));
        setNewBlog(Object.fromEntries(blogFields.map(field => [field, ''])));
      }
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleInputChange = (e, id, field) => {
    const { value } = e.target;
    setBlogs(prevBlogs => {
      return prevBlogs.map(blog => {
        if (blog.id === id) {
          return { ...blog, [field]: value };
        }
        return blog;
      });
    });
  };

  const handleSave = async (id) => {
    try {
      const blogToUpdate = blogs.find(blog => blog.id === id);
      await axios.patch(`https://chrisco-church-endpoints.onrender.com/blogs/${id}`, blogToUpdate);
      console.log(`Blog with ID ${id} updated successfully`);
    } catch (error) {
      console.error('Error updating blog:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://chrisco-church-endpoints.onrender.com/blogs/${id}`);
      setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
      console.log(`Blog with ID ${id} deleted successfully`);
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const handleAddBlog = async () => {
    try {
      const response = await axios.post('https://chrisco-church-endpoints.onrender.com/blogs', newBlog);
      setBlogs(prevBlogs => [...prevBlogs, response.data]);
      console.log('New blog added successfully');
    } catch (error) {
      console.error('Error adding new blog:', error);
    }
  };

  const handleNewBlogInputChange = (e, field) => {
    const { value } = e.target;
    setNewBlog(prevBlog => ({
      ...prevBlog,
      [field]: value
    }));
  };

  return (
    <div>
      <Table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            {fields.map(field => (
              <th key={field} className="px-4 py-2">{field}</th>
            ))}
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map(blog => (
            <tr key={blog.id} className="border-t">
              <td className="px-4 py-2">{blog.id}</td>
              {fields.map(field => (
                <td key={field} className="px-4 py-2">
                  {field === 'description' ? (
                    <Textarea
                      value={blog[field]}
                      onChange={(e) => handleInputChange(e, blog.id, field)}
                      rows={3} // Set the number of rows for the TextArea
                      className="w-full"
                    />
                  ) : (
                    <TextInput
                      value={blog[field]}
                      onChange={(e) => handleInputChange(e, blog.id, field)}
                      className="w-full"
                    />
                  )}
                </td>
              ))}
              <td className=" flex px-4 py-2">
                <Button onClick={() => handleSave(blog.id)} className="mr-2">Save</Button>
                <Button onClick={() => handleDelete(blog.id)} variant="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="mt-4">
        <h2>Add New Blog</h2>
        <div className="flex">
          {fields.map(field => (
            <TextInput
              key={field}
              value={newBlog[field]}
              onChange={(e) => handleNewBlogInputChange(e, field)}
              placeholder={field}
              className="mr-2"
            />
          ))}
        
        <Button  onClick={handleAddBlog}>Add Blog</Button>
        </div>
      </div>
    </div>
  );
}

export default EditableBlogsTable;
