import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginNaHee = () => {
  const navigate = useNavigate();

  const [idValue, setIdValue] = useState('');
  const [pwdValue, setPwdValue] = useState('');

  const [active, setActive] = useState(true);

  const saveUserId = e => {
    setIdValue(e.target.value);
  };
  const saveUserPwd = e => {
    setPwdValue(e.target.value);
  };

  const valid = () => {
    return idValue.includes('@') && pwdValue.length >= 5
      ? setActive(false)
      : setActive(true);
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
        onKeyUp={valid}
        onChange={saveUserId}
      />
      <input
        className="pwdBox"
        placeholder="비밀번호"
        type="password"
        onKeyUp={valid}
        onChange={saveUserPwd}
      />
      <button
        className={active ? 'loginBtn' : 'loginBtnActive'}
        disabled={active}
        onClick={goToMain}
      >
        로그인
      </button>
      <div className="forgetPassword">
        <a className="passwordLink" href="####">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
};

export default LoginNaHee;
