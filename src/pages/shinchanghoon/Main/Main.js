import React, { useState } from 'react';
import './Main.css';

function Main() {
  let [userName] = useState('username');
  let [comment, setComment] = useState('');
  let [feedComments, setFeedComments] = useState([]);
  let [isValid, setIsValid] = useState(false);

  let post = e => {
    const copyFeedComments = [...feedComments];
    copyFeedComments.push(comment);
    setFeedComments(copyFeedComments);
    setComment('');
  };

  const CommentList = props => {
    return (
      <div className="userCommentBox">
        <p className="userName" class="bold">
          {props.userName}
        </p>
        <div className="userComment">{props.userComment}</div>
      </div>
    );
  };

  return (
    <>
      <div class="header">
        <img
          className="instagram"
          alt="instagramImage"
          src="./images/shinchanghoon/instagram.png"
        />
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
            <div class="articlebox1">
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
            {/* <!--댓글기능 구현 추가된댓글창 수정해야함--> */}

            <div className="addcomment">
              {feedComments.map((commentArr, i) => {
                return (
                  <CommentList
                    userName={userName}
                    userComment={commentArr}
                    key={i}
                  />
                );
              })}
              <input
                type="text"
                className="inputComment"
                placeholder="댓글 달기..."
                onChange={e => {
                  setComment(e.target.value);
                }}
                onKeyUp={e => {
                  e.target.value.length > 0
                    ? setIsValid(true)
                    : setIsValid(false);
                }}
                value={comment}
              />
              <button
                type="button"
                className={
                  comment.length > 0
                    ? 'submitCommentActive'
                    : 'submitCommentInactive'
                }
                onClick={post}
                disabled={isValid ? false : true}
              >
                게시
              </button>
            </div>
          </div>
        </div>

        {/* <!--오른쪽 팔로워들--> */}
        <div class="right">
          <div className="rightbox1">
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
          </div>

          <div className="rightbox2">
            <div className="story">스토리 모두보기</div>
            <div className="followers">
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage1.jpg"
                />
                {'user1 '}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage2.jpg"
                />
                user2
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage3.jpg"
                />
                {'user3 '}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage4.jpg"
                />
                {'  user4'}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage5.jpg"
                />
                {'user5 '}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage6.jpg"
                />
                {'  user6 '}
              </div>
            </div>
          </div>

          <div className="rightbox3">
            <div className="story">스토리 모두보기</div>
            <div className="followers">
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage1.jpg"
                />
                {'user1 '}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage2.jpg"
                />
                user2
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage3.jpg"
                />
                {'user3 '}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage4.jpg"
                />
                {'  user4'}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage5.jpg"
                />
                {'user5 '}
              </div>
              <div className="follower">
                <img
                  class="circleIamge"
                  src=".\images\shinchanghoon\rightimage6.jpg"
                />
                {'  user6 '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
