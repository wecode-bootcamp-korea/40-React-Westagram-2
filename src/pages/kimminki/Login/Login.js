import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Login/Login.scss';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [pass, setPassword] = useState('');
  const [color, setColor] = useState('rgba(0, 0, 255, 0.5)');
  const [button, setButton] = useState(true);

  const saveUserId = event => {
    setId(event.target.value);
    buttonDisabled();
    buttonColor();
  };
  const savePassword = event => {
    setPassword(event.target.value);
    buttonDisabled();
    buttonColor();
  };

  const Navigate = useNavigate();

  const buttonDisabled = () => {
    id.includes('@') && pass.length > 5 ? setButton(false) : setButton(true);
  };

  const buttonColor = () => {
    id.includes('@') && pass.length > 5
      ? setColor('skyblue')
      : setColor('rgba(0, 0, 255, 0.5)');
  };
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
            style={{ backgroundColor: color }}
            onClick={goToMain}
            disabled={button}
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
