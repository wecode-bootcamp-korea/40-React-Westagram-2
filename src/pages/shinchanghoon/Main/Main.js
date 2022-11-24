import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css';

function Main() {
  return (
    <>
      <div class="header">
        <img class="instagram" src=".\images\shinchanghoon\instagram.png" />
        <img class="westagram" src=".\images\shinchanghoon\westagram.png" />
        <div class="input-wrapper">
          <input type="text" aria-label="검색창" />
          <div class="icon-wrapper">
            <i class="fas fa-keyboard" aria-label="입력 도구" />
            <i class="fas fa-microphone" aria-label="음성 검색" />
          </div>
        </div>
        <img class="explore" src=".\images\shinchanghoon\explore.png" />
        <img class="heart" src=".\images\shinchanghoon\heart.png" />
        <img class="profile" src=".\images\shinchanghoon\profile.png" />
      </div>
      <div class="main">
        <div class="center">
          {/* <!--사진좋아요넣을부분--> */}
          <div class="article">
            <div class="profilephoto">
              <img
                class="circle_photo"
                src=".\images\shinchanghoon\circle_photo.jpg"
              />
            </div>

            <div class="nameandprofile">
              <li>Shinchanghoon</li>
              <li>Frontend Developer</li>
            </div>

            <div class="centerarticle">
              <img
                class="center_photo"
                src=".\images\shinchanghoon\main_sea.jpg"
              />
            </div>

            <div class="follow_icon">
              <img
                class="small_icon heart2"
                src=".\images\shinchanghoon\heart.png"
              />
              <img
                class="small_icon"
                src=".\images\shinchanghoon\follows.png"
              />
              <img
                class="small_icon"
                src=".\images\shinchanghoon\comment.png"
              />

              <img
                class="small_icon flight"
                src=".\images\shinchanghoon\flight.png"
              />
            </div>

            <div class="like">
              <p class="bold">username</p>
              <p class="normal">님 외 10명이 좋아합니다.</p>
            </div>

            <div class="commnet">
              <p class="bold">username</p>

              <p class="normal">어디 바닷가에서 찍었냐?</p>
            </div>
            {/* <!--댓글기능 추가로 손봐야됨--> */}
            <div id="form-commentInfo">
              <div id="comment-count">
                댓글 <span id="count">1</span>
              </div>
              <input id="comment-input" placeholder="댓글을 입력해 주세요." />
              <button id="submit">등록</button>
            </div>
          </div>
        </div>

        {/* <!--오른쪽 팔로워들--> */}
        <div class="right" />
      </div>
    </>
  );
}

export default Main;
