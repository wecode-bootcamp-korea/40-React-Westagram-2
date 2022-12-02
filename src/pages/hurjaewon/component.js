import React from 'react';
const ComponentChild = ({ arrayComment }) => {
  return arrayComment.map((value, index) => {
    return (
      <li key={index}>
        <span className="commentId">jaewon_123</span>
        {value.comment}
      </li>
    );
  });
};

export default ComponentChild;
