import React, { useState, useEffect } from 'react';
import Comment from './CommentList';

const FeedLists = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then(response => response.json())
      .then(data => setFeedList(data));
  }, []);

  const Feeds = feedList.map(feed => <Feed key={feed.id} feed={feed} />);
  return <div>{Feeds}</div>;
};

const Feed = ({ feed }) => {
  const [comment, setComment] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [keyId, setKeyId] = useState(2);

  const saveInputValue = e => {
    e.preventDefault();
    setInputValue(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    const commentElement = [
      { id: keyId, userName: 'dlatldyd_dlatl', userContent: inputValue },
    ];
    const newComment = comment.concat(commentElement);
    setKeyId(keyId + 1);
    setComment(newComment);
    setInputValue('');
  };
  const removeComment = id => {
    setComment(comment.filter(array => array.id !== id));
  };

  const createComment = comment.map(commentArray => (
    <Comment
      key={commentArray.id}
      commentArray={commentArray}
      removeComment={removeComment}
    />
  ));
  return (
    <div className="feed">
      <article>
        <div className="profile">
          <div className="feedUserInfo">
            <div>
              <img
                className="feedUserImage"
                alt="feedUserImage"
                src={feed.profileImgUrl}
              />
            </div>
            <div className="feedUserName">{feed.name}</div>
          </div>
          <button className="overflow">
            <img
              alt="more"
              className="overflowImg"
              src="/images/MainPage/more.png"
            />
          </button>
        </div>
        <div className="feedImgBox">
          <img className="feedImg" alt="feed사진" src={feed.imgUrl} />
        </div>
        <div className="feedLine">
          <div className="feedButtonBox">
            <button className="feedButton">
              <img alt="like" src="/images/MainPage/like.png" />
            </button>
            <button className="feedButton">
              <img
                alt="chat"
                src="/images/MainPage/chat.png"
                style={{ opacity: 0.7 }}
              />
            </button>
            <button className="feedButton">
              <img
                alt="upload"
                src="/images/MainPage/upload.png"
                style={{ opacity: 0.6 }}
              />
            </button>
          </div>
          <div>
            <button className="bookMark">
              <img alt="'bookmark" src="/images/MainPage/bookmark.png" />
            </button>
          </div>
        </div>
        <div className="commentArea">
          <div className="likeNumber">
            <img
              className="likeFeedUser"
              alt="user image"
              src="https://plus.unsplash.com/premium_photo-1666788168130-959f109c07fc?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=822&amp;q=80"
            />
            <span>
              <span style={{ fontWeight: 'bold' }}>algkjaweglkja</span>님
              <span style={{ fontWeight: 'bold' }}>외 10명이</span>
              좋아합니다.
            </span>
          </div>
          <ul id="commentList">{createComment}</ul>
          <div className="time">1일 전</div>
          <div className="commentBox">
            <form onSubmit={addComment}>
              <input
                type="text"
                className="comment"
                placeholder="댓글 달기..."
                onChange={saveInputValue}
                value={inputValue}
              />
              <input type="submit" className="upload" value="게시" />
            </form>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FeedLists;
