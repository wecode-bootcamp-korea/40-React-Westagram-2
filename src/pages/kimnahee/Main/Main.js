import './Main.scss';
import React, { useState } from 'react';

const Nav = () => {
  return (
    <div className="nav">
      <div className="navBox">
        <div className="logoIcon">
          <div className="instaIcon">
            <img alt="인스타그램 로고" src="/images/Nav/instagram.png" />
          </div>
          <div className="instaLogo">westagram</div>
        </div>
        <div className="searchBox">
          <input type="text" placeholder="검색" className="search" />
        </div>
        <div className="navButtonBox">
          <button>
            <img
              className="navButtonImg"
              alt="explore"
              src="/images/Nav/explore.png"
            />
          </button>
          <button>
            <img
              className="navButtonImg"
              alt="heart"
              src="/images/Nav/heart.png"
            />
          </button>
          <button>
            <img
              className="navButtonImg"
              alt="profile"
              src="/images/Nav/profile.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Comment = ({ commentArray }) => {
  return (
    <li className="commentElement">
      <span className="commentUserName">{commentArray.userName}</span>
      <span className="userComment">{commentArray.userContent}</span>
    </li>
  );
};

const CommentList = () => {
  const [comment, setComment] = useState([
    { id: 1, userName: 'kikiki.m', userContent: '안녕하세요' },
  ]);
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
  };
  const createComment = comment.map(commentArray => (
    <Comment key={commentArray.id} commentArray={commentArray} />
  ));
  return (
    <form onSubmit={addComment}>
      <ul id="commentList">{createComment}</ul>
      <div className="time">1일 전</div>
      <div className="commentBox">
        <input
          type="text"
          className="comment"
          placeholder="댓글 달기..."
          onChange={saveInputValue}
        />
        <input type="submit" className="upload" value="게시" />
      </div>
    </form>
  );
};

const Feed = () => {
  return (
    <div className="feed">
      <article>
        <div className="profile">
          <div className="feedUserInfo">
            <div>
              <img
                className="feedUserImage"
                alt="feedUserImage"
                src="/images/MainPage/myprofile.png"
              />
            </div>
            <div className="feedUserName">heehee.hee</div>
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
          <img
            className="feedImg"
            alt="feed사진"
            src="https://images.unsplash.com/photo-1668613962618-b389448296c9?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
          />
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
          <CommentList />
        </div>
      </article>
    </div>
  );
};

const StoryBox = () => {
  return (
    <div className="main-right">
      <div className="profileBox">
        <div>
          <img
            alt="profile image"
            className="profileImage"
            src="/images/MainPage/myprofile.png"
          />
        </div>
        <div className="userId">
          heehee.hee
          <div className="profileUserName">안녕하세요. 머리아파요</div>
        </div>
      </div>
      <div className="storyBox">
        <div className="storyHead">
          <div>스토리</div>
          <a href="####">
            <div className="listAll">모두 보기</div>
          </a>
        </div>
        <div className="storyListBox">
          <div className="storyList">
            <div className="storyImage">
              <img
                alt="new stroty user"
                className="storyUserImage"
                src="https://images.unsplash.com/photo-1668493468813-22aba1caaf0f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
              />
            </div>
            <div className="userId">
              hihihi.bye
              <div className="userTime">1시간 전</div>
            </div>
          </div>
          <div className="storyList">
            <div className="storyImage">
              <img
                alt="new stroty user"
                className="storyUserImage"
                src="https://images.unsplash.com/photo-1668429090678-4f0e6759d489?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMTZ8fHxlbnwwfHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
              />
            </div>
            <div className="userId">
              asdgwgwqq
              <div className="userTime">1시간 전</div>
            </div>
          </div>
          <div className="storyList">
            <div className="storyImage">
              <img
                className="storyUserImage"
                alt="new stroty user"
                src="https://images.unsplash.com/photo-1668457248686-e797dcdc0a48?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2852&amp;q=80"
              />
            </div>
            <div className="userId">
              sghdgrew_w
              <div className="userTime">4시간 전</div>
            </div>
          </div>
          <div className="storyList">
            <div className="storyImage">
              <img
                className="storyUserImage"
                alt="new stroty user"
                src="https://images.unsplash.com/photo-1668500330070-a65b343a73fa?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=770&amp;q=80"
              />
            </div>
            <div className="userId">
              yuyuyuh
              <div className="userTime">20시간 전</div>
            </div>
          </div>
          <div className="storyList">
            <div className="storyImage">
              <img
                className="storyUserImage"
                alt="new stroty user"
                src="https://images.unsplash.com/photo-1668493468813-22aba1caaf0f?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
              />
            </div>
            <div className="userId">
              akakkakak_c
              <div className="userTime">22시간 전</div>
            </div>
          </div>
        </div>
      </div>
      <div className="suggestion">
        <div className="suggestionHead">
          <div>회원님을 위한 추천</div>
          <a href="####">
            <div className="listAll">모두 보기</div>
          </a>
        </div>
        <div className="pickList">
          <div>
            <img
              alt="user"
              className="userImage"
              src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2864&amp;q=80/"
            />
          </div>
          <div className="userId">
            comeback_home
            <div className="userInformation">회원님을 위한 추천</div>
          </div>
          <button>팔로우</button>
        </div>
        <div className="pickList">
          <div>
            <img
              className="userInformation"
              src="https://images.unsplash.com/photo-1668635716727-aa176f3204d1?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
            />
          </div>
          <div className="userId">
            nanunbabo95
            <div className="userInformation">회원님을 위한 추천</div>
          </div>
          <button>팔로우</button>
        </div>
        <div className="pickList">
          <div>
            <img
              className="userImage"
              src="https://images.unsplash.com/photo-1668619834434-a9fb20654726?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=774&amp;q=80"
            />
          </div>
          <div className="userId">
            hrjlagjlaw90
            <div className="userTime">회원님을 위한 추천</div>
          </div>
          <button>팔로우</button>
        </div>
      </div>
      <div className="information">
        Instagram 정보 ∙ 지원 ∙ 홍보 센터 ∙ API ∙<br />
        채용정보 ∙ 개인정보처리방침 ∙ 약관 ∙<br />
        디렉토리 ∙ 프로필 ∙ 해시태그 ∙ 언어
        <br />
        <br />© 2019 INSTARGRAM
      </div>
    </div>
  );
};

const MainNaHee = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <Feed />
        <StoryBox />
      </div>
    </>
  );
};

export default MainNaHee;
