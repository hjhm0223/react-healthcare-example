import React from 'react';
import logo from '../logo.svg';
import './Login.css';

const clickLogin = () => {
  window.location.href = "/home";
}

const Login = () => {
  return (
    <div className="Login">
      <div className="Login-header">
        <div className="Login-logo">
          <img src={logo} className="React-logo" alt="logo" />
          <div>Health Care</div>
        </div>
        <div>로그인</div>
      </div>
      <form className="Login-form">
        <input type="text" className="Login-input" placeholder="아이디를 입력해주세요."/>
        <input type="text" className="Login-input" placeholder="비밀번호를 입력해주세요."/>
      </form>
      <button className="Login-button" onClick={clickLogin}>로그인</button>
    </div>
  );
}

export default Login;
