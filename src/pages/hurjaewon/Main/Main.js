import React from 'react';
import './Main.scss';
import westagramNavIcon from '../../../assets/hurjaewon/nav_left_westagramicon.png';
import westagramSmallLogo from '../../../assets/hurjaewon/nav_left_westagramsmalllogo.png';
import westagramNavExplore from '../../../assets/hurjaewon/nav_right_explore.png';
import westagramNavLineHeart from '../../../assets/hurjaewon/nav_right_lineheart.png';
import westagramNavProfile from '../../../assets/hurjaewon/nav_right_profile.png';
import smallAccount from '../../../assets/hurjaewon/small_account.png';
import moreIcon from '../../../assets/hurjaewon/main_article_top_moreicon.png';
import articleMainImg from '../../../assets/hurjaewon/main_article.png';
import redHeart from '../../../assets/hurjaewon/main_article_comment_redheart.png';
import message from '../../../assets/hurjaewon/main_article_comment_message.png';
import share from '../../../assets/hurjaewon/main_article_comment_share.png';
import mark from '../../../assets/hurjaewon/main_article_comment_mark.png';
import commentAccount from '../../../assets/hurjaewon/main_article_comment_account.png';
import accountRight from '../../../assets/hurjaewon/right_top_account.png';
import account1 from '../../../assets/hurjaewon/small_account.png';
import account2 from '../../../assets/hurjaewon/small_account.png';
import account3 from '../../../assets/hurjaewon/small_account.png';

function Main() {
  return (
    <div className="Main">
      <div class="wrap">
        <nav className="mainNav">
          <div className="navLeft">
            <img
              className="westagramNavIcon"
              src={westagramNavIcon}
              alt="westgram icon"
            />
            <img
              className="westagramSmallLogo"
              src={westagramSmallLogo}
              alt="westgram small logo"
            />
          </div>
          <div className="searchBox">
            <input
              id="inputSearchBox"
              name="search"
              type="text"
              placeholder="검색"
            />
          </div>
          <div className="navRight">
            <img
              className="westagramNavExplore"
              src={westagramNavExplore}
              alt="explore icon"
            />
            <img
              className="westagramNavLineHeart"
              src={westagramNavLineHeart}
              alt="heart icon"
            />
            <img
              className="westagramNavProfile"
              src={westagramNavProfile}
              alt="profile icon"
            />
          </div>
        </nav>
        <main>
          <div className="feeds">
            <article>
              <div className="article1">
                <div className="article1Left">
                  <img
                    className="accountIcon"
                    src={smallAccount}
                    alt="account icon"
                  />
                  <p className="accountName">wecode</p>
                </div>
                <img className="moreIcon" src={moreIcon} alt="more icon" />
              </div>
              <div className="article2">
                <img
                  className="articleMainImg"
                  src={articleMainImg}
                  alt="article main img"
                />
              </div>
              <div className="article3">
                <div className="article31">
                  <div className="article31Left">
                    <img
                      className="redHeart"
                      src={redHeart}
                      alt="red heart icon"
                    />
                    <img className="message" src={message} alt="message icon" />
                    <img className="share" src={share} alt="share icon" />
                  </div>
                  <img className="mark" src={mark} alt="mark icon" />
                </div>
                <div className="article32">
                  <img
                    className="commentAccount"
                    src={commentAccount}
                    alt="small account icon"
                  />
                  <div className="textLike">
                    <span className="textLike1">jaewon_123</span>
                    <span className="textLike2">님</span>
                    <sapn className="textLike3">외 11명</sapn>
                    <span className="textLike4">이 좋아합니다</span>
                  </div>
                </div>
                <div className="article33">
                  <div className="article33Left">
                    <span className="otherAccountname">jaetwo_23</span>
                    <span className="comment1">
                      위워크에서 진행한 베이킹 클래스...
                    </span>
                  </div>
                  <span className="delete">x</span>
                </div>
                <div className="article4">
                  <span className="time">42분 전</span>
                </div>
              </div>
              <div className="article5">
                <input
                  id="commentInput"
                  type="text"
                  placeholder="댓글 달기..."
                />
                <buttotn id="submit">게시</buttotn>
              </div>
            </article>
          </div>
          <div className="main-right">
            <div class="right1">
              <img
                className="accountRight"
                src={accountRight}
                alt="account_right"
              />
              <div className="topHighText">
                <div className="rightAccountText">wecode_bootcamp</div>
                <div className="rightSmallAccountText">WeCode | 위코드</div>
              </div>
            </div>
            <div className="right2">
              <div className="rightBox">
                <div className="highText">
                  <div className="textStory">스토리</div>
                  <div className="textAll">모두 보기</div>
                </div>
                <div className="rightAccountImage">
                  <img
                    className="account1"
                    src={account1}
                    alt="small_account"
                  />
                  <img
                    className="account2"
                    src={account2}
                    alt="small_account"
                  />
                  <img
                    className="account3"
                    src={account3}
                    alt="small_account"
                  />
                </div>
                <div className="rightAccountText">
                  <div className="accountMainId1">
                    <div className="accountId1">_yum_s</div>
                    <div className="accountId11">3시간 전</div>
                  </div>
                  <div className="accountMainId2">
                    <div className="accountId2">drinks_eat</div>
                    <div className="accountId21">16분 전</div>
                  </div>
                  <div className="accountMainId3">
                    <div className="accountId3">hyukyc</div>
                    <div className="accountId31">20시간 전</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Main;
