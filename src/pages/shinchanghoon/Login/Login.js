import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div class="layout">
      <img src=".\images\shinchanghoon\westagram.png" />
      <div class="login-container">
        <input
          type="text"
          id="login_id"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input type="password" id="login_pw" placeholder="비밀번호" />
        <button class="login-btn" id="login_btn">
          로그인
        </button>
        <p class="alert" />

        <div class="pwComment">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
}

export default Login;

// const idInput = document.getElementById('login_id');
// const pwInput = document.getElementById('login_pw');
// const loginBtn = document.getElementById('login_btn');

// const isActiveLogin = () => {
//   let idValue = idInput.value;
//   let pwValue = pwInput.value;

//   if (pwValue.length > 2 && idValue.length > 2) {
//     loginBtn.classList.add('login_active');
//   } else {
//     loginBtn.classList.remove('login_active');
//   }
// };

// idInput.addEventListener('keyup', isActiveLogin);
// pwInput.addEventListener('keyup', isActiveLogin);
