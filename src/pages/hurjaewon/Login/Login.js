// import React, { useState } from 'react';
import './Login.scss';
import westagramLogo from '../../../assets/hurjaewon/login_westgramlogo.png';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const main = () => {
    navigate('/mainjaewon');
  };
  const [id, setId] = useState('');
  const saveUserId = event => {
    setId(event.target.value);
    console.log('id', id);
  };
  const [pw, setPw] = useState('');
  const saveUserPw = event => {
    setPw(event.target.value);
    console.log('pw', pw);
  };

  const buttonBox = !(id.includes('@') && pw.length > 4);

  // // {/* 로그인 버튼 활성화 기능 구현 */}
  // const [pw, setPW] = useState('');
  // const [id, setId] = useState('');
  // const dis = !(id.includes('@') && pw.length > 4);

  // const saveId = event => {
  //   setId(event.target.value);
  // };

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
              onChange={saveUserId}
              // onKeyUp={idChangeColor}
            />
          </div>
          <div className="inputBox">
            <input
              id="passwordBox"
              name="pw"
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
              // onKeyUp={pwChangeColor}
            />
          </div>
          {/* 로그인 버튼 활성화 기능 구현 */}
          {/* <div className="inputBox">
            <input
              id="textBox"
              name="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onKeyup={changeColor}
            />
          </div> */}
          {/* <div className="inputBox">
            <input
              id="passwordBox"
              name="pw"
              type="password"
              placeholder="비밀번호"
              onKeyup={changeColor}
            />
          </div> */}
          {/* 버튼 Link 구현 */}
          {/* <Link to="/Main">
              <button className="buttonBox" onKeyUp={changeColor}>로그인</button>
            </Link> */}
          {/* useNavigate hook 기능 구현 */}
          <button disabled={buttonBox} onClick={main}>
            로그인
          </button>
          <div className="forgetPassword">비밀번호를 잊으셨나요?</div>
        </div>
      </div>
    </div>
  );
}

export default Login;
