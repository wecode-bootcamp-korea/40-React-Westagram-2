import React, { useState } from 'react';
import '../Login/Login.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pass, setPassword] = useState('');
  const [color, setColor] = useState('blue');
  const [button, setButton] = useState(true);

  const saveUserId = event => {
    setId(event.target.value);
    checkLogin();
  };
  const savePassword = event => {
    setPassword(event.target.value);
    checkLogin();
  };

  const checkLogin = () => {
    if (id.includes('@') && pass.length > 5) {
      setColor('skyblue');
      setButton(false);
    }
  };

  const Navigate = useNavigate();

  const goToMain = () => {
    Navigate('/main');
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
            style={{ backgroundColor: color }}
            className="check"
            onClick={goToMain}
            disabled={button}
          >
            로그인
          </button>
          {/* disabled */}
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
