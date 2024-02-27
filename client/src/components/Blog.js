import React from 'react';
import './blog.css';
import Header from './Header'
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Comment from './Comment';


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

      const [showComments, setShowComments] = useState(false);
      const [comments, setComments] = useState([]);
    
      useEffect(() => {
        fetch('https://chrisco-church-endpoints.onrender.com/comments/all')
          .then(response => response.json())
          .then(data => setComments(data))
          .catch(error => console.error('Error fetching comments:', error));
      }, []);
    
      const handleCreateComment = (newComment) => {
        setComments([...comments, newComment]);
      };
    
      const handleDeleteComment = (commentId) => {
        fetch(`https://chrisco-church-endpoints.onrender.com/comments/${commentId}`, {
          method: 'DELETE',
        })
          .then(() => {
            setComments(comments.filter(comment => comment.id !== commentId));
          })
          .catch(error => console.error('Error deleting comment:', error));
      };
    

  
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
        <button className="comments" onClick={() => setShowComments(!showComments)}>
            Comments ({comments.length})
        </button>
      </div>
    </div>
    {showComments && (
        <Comment
        comments={comments}
        onCreateComment={handleCreateComment}
        onDeleteComment={handleDeleteComment}
        />
      )}
    <Footer/>
    </>
  );
};


export default Blog;
