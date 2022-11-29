import React from 'react';
import { useState } from 'react';
import CommentArea from './comment';

const Feeds = props => {
  const [comment, setComment] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const commentValue = event => {
    setComment(event.target.value);
  };

  const addComment = () => {
    setCommentList(commentList.concat(comment));
    setComment('');
  };

  const deleteComment = i => {
    setCommentList(commentList.filter((_, index) => index !== i));
  };

  const commentArea = commentList.map((element, i) => (
    <span key={i}>
      <li>{element}</li>
      <button onClick={() => deleteComment(i)}>x</button>
    </span>
  ));
  return (
    <div className="feeds" key={props.element.id}>
      <div className="profile">
        <img className="user-img" />
        <div className="user-name">{props.element.nickname}</div>
        <i className="fa-solid fa-bars bar" />
      </div>
      <article className="main-page" />
      <div className="content-bar">
        <i className="fa-regular fa-heart fa-2x like" />
        <i className="fa-regular fa-comment fa-2x spech" />
        <i className="fa-solid fa-arrow-up-from-bracket fa-2x arrow" />
      </div>
      <div className="likey">
        <img className="people" />
        <div className="like-people"> ooo님외 o명이 좋아합니다.</div>
      </div>
      <ul className="comment-area">
        <CommentArea comment={commentArea} />
      </ul>
      <div className="comment-Input">
        <input
          className="comment-text"
          type="text"
          placeholder="댓글달기..."
          value={comment}
          onChange={commentValue}
        />
        <button className="registration" onClick={addComment}>
          게시
        </button>
      </div>
    </div>
  );
};

export default Feeds;
