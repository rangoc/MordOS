import React from 'react';
// sass
import './comment.scss';
const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="title">
        <h2>{comment.name}</h2>
        <div className="line" />
      </div>

      <p className="comment-body">{comment.body}</p>
    </div>
  );
};

export default Comment;
