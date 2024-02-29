import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import { useState, useEffect } from 'react';
// import Comment from './Comment';

const Blog = () => {

    const {title, writer, readTime, likes, dislikes,content} = {
        "id": 6,
        "title": "Introduction to Python Programming",
        "writer": "Sophia Williams",
        "readTime": 7,
        "likes": 110,
        "dislikes": 6,
        "content": "Fusce at arcu in velit gravida fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      }

      // const [showComments, setShowComments] = useState(false);
      // const [comments, setComments] = useState([]);
    
      // useEffect(() => {
      //   fetch('https://chrisco-church-endpoints.onrender.com/comments/all')
      //     .then(response => response.json())
      //     .then(data => setComments(data))
      //     .catch(error => console.error('Error fetching comments:', error));
      // }, []);
    
      // const handleCreateComment = (newComment) => {
      //   setComments([...comments, newComment]);
      // };
    
      // const handleDeleteComment = (commentId) => {
      //   fetch(`samplefetch/${commentId}`, {
      //     method: 'DELETE',
      //   })
      //     .then(() => {
      //       setComments(comments.filter(comment => comment.id !== commentId));
      //     })
      //     .catch(error => console.error('Error deleting comment:', error));
      // };
    

  
  return (
    <>
    <Header/>
    <div className="blog">
      <h2 className="title">{title}</h2>
      <div className="meta">
        <span className="writer">By {writer}</span>
        <span className="read-time">{readTime} min read</span>
      </div>
      <p className="content">
        {content}
      </p>
      <div className="actions">
        {/* <button className="like-btn">Upvotes ({likes})</button>
        <button className="dislike-btn">Downvotes ({dislikes})</button> */}
        {/* <button className="comments" onClick={() => setShowComments(!showComments)}>
            Comments ({comments.length})
        </button> */}
      </div>
    </div>
    {/* {showComments && (
        <Comment
        comments={comments}
        onCreateComment={handleCreateComment}
        onDeleteComment={handleDeleteComment}
        />
      )} */}
    <Footer/>

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
