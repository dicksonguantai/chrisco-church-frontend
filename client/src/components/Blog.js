import React from 'react';
import './blog.css';
import Header from './Header'
import Footer from './Footer';


const Blog = () => {
    const {title, writer, readTime, comments, likes, dislikes,content} = {
        "id": 6,
        "title": "Introduction to Python Programming",
        "writer": "Sophia Williams",
        "readTime": 7,
        "comments": 18,
        "likes": 110,
        "dislikes": 6,
        "content": "Fusce at arcu in velit gravida fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      }
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
        <button className="like-btn">Upvotes ({likes})</button>
        <button className="dislike-btn">Downvotes ({dislikes})</button>
        <span className="comments">Comments ({comments})</span>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Blog;
