import React, { Component, useState } from 'react';
import { withRouter, Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const goToMain = () => {
    if (idValue.includes('@') && pwValue.length >= 5) {
      navigate('/mainchanghoon');
    } else {
      alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
    }
  };

  // 버튼 구현

  let [active, setActive] = useState(false);

  let [idValue, setIdInput] = useState('');
  let [pwValue, setPwInput] = useState('');

  const ActiveIsPassedLogin = () => {
    return idValue.includes('@') && pwValue.length >= 5
      ? setActive(true)
      : setActive(false);
  };

  const handleId = event => {
    setIdInput(event.target.value);
  };

  const handlePw = event => {
    setPwInput(event.target.value);
  };

  return (
    <div class="layout">
      <img src=".\images\shinchanghoon\westagram.png" />

      <div class="login-container">
        <div className="idForm">
          <input
            className="idInputForm"
            type="text"
            id="id"
            name="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={ActiveIsPassedLogin}
            onChange={handleId}
          />
        </div>

        <div className="passForm">
          <input
            className="pwInputForm"
            type="password"
            id="pw"
            name="pw"
            placeholder="비밀번호"
            onKeyUp={ActiveIsPassedLogin}
            onChange={handlePw}
          />
        </div>

        <button
          type="button"
          onClick={goToMain}
          name=""
          className={active ? 'activeLoginBtn' : 'loginBtn'}
          disabled={idValue === '' || pwValue === '' ? true : false}
        >
          로그인
        </button>

        <div class="pwComment">비밀번호를 잊으셨나요?</div>
      </div>
    </div>
  );
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
}

export default Login;
