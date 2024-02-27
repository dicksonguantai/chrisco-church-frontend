import React from "react";
import { useState } from "react";

function Comment({comments, onCreateComment, onDeleteComment }){
    const [newComment, setNewComment] = useState('');

    const handleCreateComment = () => {
        onCreateComment({ id: comments.length + 1, content: newComment });
        setNewComment('');
      };
    
  
    return (
      <div className="comment-section">
        <h3>Comments</h3>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              {comment.content}
              <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <textarea value={newComment} onChange={e => setNewComment(e.target.value)} />
        <button onClick={handleCreateComment}>Add Comment</button>
      </div>
    );
  };

  export default Comment;