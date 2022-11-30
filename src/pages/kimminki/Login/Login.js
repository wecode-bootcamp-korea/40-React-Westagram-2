import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pass, setPassword] = useState('');

  const saveUserId = event => {
    setId(event.target.value);
  };
  const savePassword = event => {
    setPassword(event.target.value);
  };

  const Navigate = useNavigate();
  const buttonChange = id.includes('@') && pass.length > 5 ? false : true;

  const goToMain = () => {
    Navigate('/mainminki');
  };
  return (
    <div className="login-display">
      <div className="login-box">
        <div className="logo">westagram</div>
        <div className="check-box">
          <input
            className="idpas"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={id}
            onChange={saveUserId}
          />
          <input
            className="idpas"
            type="password"
            placeholder="비밀번호"
            value={pass}
            onChange={savePassword}
          />
          <button
            className="loginBtn"
            onClick={goToMain}
            disabled={buttonChange}
          >
            로그인
          </button>
          <Link to="/main">main페이지로 이동</Link>
          <a href="#" className="forget">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
