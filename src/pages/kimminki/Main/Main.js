import React from 'react';
import '../Main/Main.scss';
import { useState } from 'react';
import CommentArea from './comment';
const MainPage = () => {
  const [comment, setComment] = useState([]);
  const [commentList, setCommentList] = useState([]);

  const commentValue = event => {
    setComment(event.target.value);
  };

  const addComment = () => {
    setCommentList(commentList.concat(comment));
    setComment('');
  };

  const commentArea = commentList.map((element, i) => (
    <span key={i}>
      <li>{element}</li>
    </span>
  ));
  return (
    <div className="main-display">
      <nav className="navi">
        <div className="left-top">
          <i className="fa-solid fa-camera camera" />
          <span className="searchLogo">westagram</span>
        </div>
        <div className="search-bar">
          <input className="search" placeholder="검색" type="text" />
          <i className="fa-solid fa-magnifying-glass glass" />
        </div>
        <div className="right-logo">
          <div className="compass" />
          <div className="heart" />
          <div className="mypage" />
        </div>
      </nav>

      <main>
        <div className="feeds">
          <div className="profile">
            <img className="user-img" />
            <div className="user-name"> min__ki</div>
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
        <div className="main-right">
          <div className="right-1">
            <img className="profile2" />
            <div className="right-font1">wecode_bootcamp</div>
            <div className="right-font2">wecode | 위코드</div>
          </div>
          <div className="right-2">
            <div className="right-op">
              <div className="story right-font2">스토리</div>
              <div className="all">모두보기</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
            </div>
          </div>
          <div className="right-3">
            <div className="right-op">
              <div className="story right-font2">회원님을 위한 추천</div>
              <div className="all">모두 보기</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
              <div className="follow">팔로우</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
              <div className="follow">팔로우</div>
            </div>
            <div className="boundary">
              <img className="profile2" />
              <div className="right-font1">abcdefg</div>
              <div className="right-font2">1 분전</div>
              <div className="follow">팔로우</div>
            </div>
          </div>
          <div className="info">
            <p>
              instagram정보 지원 홍보 센터 API <br />
              채용 정보 개인정보처리방침 약관
              <br />
              디렉터리 프로필 해시태그 언어
              <br />
              <br />
              <br />@ 2019 INSTAGRAM
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;
