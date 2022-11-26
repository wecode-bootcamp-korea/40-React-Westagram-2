import React, { useState } from 'react';
import './Login.scss';
import { Navigate, useNavigate } from 'react-router-dom';

const LoginNaHee = () => {
  const navigate = useNavigate();

  const [idValue, setIdValue] = useState('');
  const [pwdValue, setPwdValue] = useState('');
  const saveUserId = e => {
    setIdValue(e.target.value);
  };
  const saveUserPwd = e => {
    setPwdValue(e.target.value);
  };
  const goToMain = () => {
    navigate('/MainNaHee');
  };

  return (
    <div id="loginBox">
      <h1 className="loginLogo">westagram</h1>
      <input
        className="idBox"
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={saveUserId}
      />
      <input
        className="pwdBox"
        placeholder="비밀번호"
        type="password"
        onChange={saveUserPwd}
      />
      <button onClick={goToMain}>로그인</button>
      <div className="forgetPassword">
        <a className="passwordLink" href="####">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginNaHee;
