import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://chrisco-church-endpoints.onrender.com/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (id) {
      fetchData();
    }

    // Cleanup function to reset blog state if id is not provided
    return () => {
      setBlog(null);
    };
  }, [id]);

  if (!blog) {
    return null; // Render null or loading indicator while fetching data
  }

  return (
    <>
      <Header />
      <div className="b">
        <h2 className="title">{blog.title}</h2>
        <div className="meta">
          <span className="writer">By {blog.writer}</span>
          <span className="read-time">{blog.readTime} min read</span>
        </div>
        <p className="content">
          {blog.content}
        </p>
        <div className="actions">
          <button className="like-btn">Upvotes ({blog.likes})</button>
          <button className="dislike-btn">Downvotes ({blog.dislikes})</button>
          <span className="comments">Comments ({blog.comments})</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;