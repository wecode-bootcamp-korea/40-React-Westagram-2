import React, { useEffect } from 'react';
import '../Main/Main.scss';
import { useState } from 'react';
import Feeds from './Feeds';
const MainPage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    fetch('/data/userInfo.json')
      .then(respons => respons.json())
      .then(result => setUserInfo(result));
  }, []);
  useEffect(() => {
    fetch('/data/feeds.json')
      .then(respons => respons.json())
      .then(result => setFeeds(result));
  }, []);

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
        <div className="feedss">
          {feeds.map(element => {
            return <Feeds element={element} />;
          })}
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
            {userInfo.map(element => {
              return (
                <div className="boundary" key={element.id}>
                  <img className="profile2" />
                  <div className="right-font1">{element.username}</div>
                  <div className="right-font2">1 분전</div>
                </div>
              );
            })}
          </div>
          <div className="right-3">
            <div className="right-op">
              <div className="story right-font2">회원님을 위한 추천</div>
              <div className="all">모두 보기</div>
            </div>
            {userInfo.map(element => {
              return (
                <div className="boundary" key={element.id}>
                  <img className="profile2" />
                  <div className="right-font1">{element.username}</div>
                  <div className="right-font2">1 분전</div>
                  <div className="follow">팔로우</div>
                </div>
              );
            })}
          </div>
          <div className="info">
            {FOOTER.map(element => {
              return <span key={element.id}>{element.name}&nbsp; &nbsp; </span>;
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainPage;

const FOOTER = [
  { id: 1, name: '소개' },
  { id: 2, name: '도움말' },
  { id: 3, name: '홍보 센터' },
  { id: 4, name: 'API' },
  { id: 5, name: '채용정보' },
  { id: 6, name: '개인정보처리방침' },
  { id: 7, name: '약관' },
  { id: 8, name: '위치' },
  { id: 9, name: '인기 계정' },
  { id: 10, name: '해시태그' },
  { id: 11, name: '언어' },
];
