import React from 'react';

const Comment = ({ commentArray, removeComment }) => {
  return (
    <li className="commentElement">
      <span className="commentUserName">{commentArray.userName}</span>
      <span className="userComment">{commentArray.userContent}</span>
      <input
        type="button"
        value="✕"
        onClick={() => removeComment(commentArray.id)}
        className="deleteButton"
      />
    </li>
  );
};

export default Comment;
