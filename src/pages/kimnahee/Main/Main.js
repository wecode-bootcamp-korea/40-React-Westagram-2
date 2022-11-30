import React, { useState, useEffect } from 'react';
import Comment from './CommentList';
import FeedLists from './Feed';
import Footer from './Footer';
import './Main.scss';

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
      <Footer />
    </div>
  );
};

const MainNaHee = () => {
  return (
    <>
      <Nav />
      <div className="main">
        <FeedLists />
        <StoryBox />
      </div>
    </>
  );
};

export default MainNaHee;
