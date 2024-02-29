import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://chrisco-church-endpoints.onrender.com/blogs/all');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleReadMore = () => {
    navigate('/blog');
  };

  return (
    <>
      <Header />
      <h2 className="text-center text-2xl font-bold border-b-2 border-black p-4">
          Blogs
        </h2>
        <div className='block mx-auto md:flex blogs-card p-4'>
        {blogs.map(blog => (
          <BlogCard
            key={blog.id}
            id ={blog.id}
            title={blog.title}
            description={blog.description}
            onClick={handleReadMore}
          />
        ))}
      </div>
      
      <Footer />
    </>
  );
}

export default Blogs;
