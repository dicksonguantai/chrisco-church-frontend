// import React from "react";
// import { useState } from "react";

// function Comment({comments, onCreateComment, onDeleteComment }){
//     const [newComment, setNewComment] = useState('');

//     function handlePostComment(){
//         fetch('/postComment/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ content: newComment }),
//         })
//           .then(response => response.json())
//           .then(data => {
//             onCreateComment(data);
//             setNewComment('');
//           })
//           .catch(error => console.error('Error posting comment:', error));
//       };
    
//       const handleCreateComment = () => {
//         handlePostComment();
//       };
  
//     return (
//       <div className="comment-section">
//         <h3>Comments</h3>
//         <ul>
//           {comments.map(comment => (
//             <li key={comment.id}>
//               <p>{comment.comment}    --    {comment.written_by}</p>
//               <p className="owner"></p>
//               <button onClick={() => onDeleteComment(comment.id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//         <textarea value={newComment} onChange={e => setNewComment(e.target.value)} />
//         <button onClick={handleCreateComment}>Add Comment</button>
//       </div>
//     );
//   };

//   export default Comment;