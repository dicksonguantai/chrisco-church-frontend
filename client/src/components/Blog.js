import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`https://chrisco-church-endpoints.onrender.com/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Error fetching blog:', error);
      }
    };

    fetchBlog();

    return () => {
    };
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  const { title, writer, readTime, comments, likes, dislikes, content } = blog;

  return (
    <>
      <Header />
      <div className="blog">
        <h2 className="title">{title}</h2>
        <div className="meta">
          <span className="writer">By {writer}</span>
          <span className="read-time">{readTime} min read</span>
        </div>
        <p className="content">{content}</p>
        <div className="actions">
          <button className="like-btn">Upvotes ({likes})</button>
          <button className="dislike-btn">Downvotes ({dislikes})</button>
          <span className="comments">Comments ({comments})</span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
