import React from 'react';
import './Login.scss';
import westagramLogo from '../../../assets/hurjaewon/login_westgramlogo.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const main = () => {
    navigate('/mainjaewon');
  };
  // const main = navigate("/main");

  //   const changeColor = () => {
  //     const isValid = id.value.includes('@') && pw.value.length > 4;
  //     button.disabled = !isValid;
  // }
  // const useNavigate = useNavigate();
  return (
    <div class="wrap">
      <div class="container">
        <div class="inner">
          <div className="loginLogo">
            <img
              className="loginWestagramLogo"
              src={westagramLogo}
              alt="westgramlogo"
            />
          </div>
          <div className="inputBox">
            <input
              id="textBox"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
          </div>
          <div className="inputBox">
            <input
              id="passwordBox"
              name="pw"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          {/* 로그인 버튼 활성화 자바스크립트 기능 구현 */}
          {/* <div className="inputBox"><input id="textBox" name="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" onKeyup={changeColor}/></div>
            <div className="inputBox"><input id="passwordBox" name="pw" type="password" placeholder="비밀번호" onKeyup={changeColor}/></div> */}
          {/* 버튼 Link 구현 */}
          {/* <Link to="/Main">
              <button className="buttonBox" onKeyUp={changeColor}>로그인</button>
            </Link> */}
          {/* useNavigate hook 기능 구현 */}
          <button className="buttonBox" onClick={main}>
            로그인
          </button>
          <div className="forgetPassword">비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
// {/*
// // <div class="wrap">
// // <div class="container">
// //     <div class="inner">
// //         <div class="westagram_logo"><img src="img/westgramlogo.png" alt="westgramlogo"></div>
// //         <div class="input_box"><input id="text_box" name="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
// //         </div>
// //         <div class="input_box"><input id="password_box" name="pw" type="password" placeholder="비밀번호" />
// //         </div>
// //         <button class="button_box">로그인</button>
// //         <div class="forget_password">비밀번호를 잊으셨나요?</div>
// //     </div>
// // </div>
// // </div> */}
