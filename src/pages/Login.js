import React, { Component } from 'react';
// import PropTypes from 'props-types';
import logo from '../logo.svg';
import '../asserts/styles/Login.css';

class Login extends Component {
  state = {
    id: "",
    password: ""
  };

  render() {
    const { id, password } = this.state;
    const clickLogin = () => {
      alert('로그인 정보'+'\nid: '+id+'\npassword: '+password);
      window.location.href = "/main";
    }

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
          <input type="text" className="Login-input" onChange={(e) => {this.setState({ id: e.target.value })}} placeholder="아이디를 입력해주세요."/>
          <input type="text" className="Login-input" onChange={(e) => {this.setState({ password: e.target.value })}} placeholder="비밀번호를 입력해주세요."/>
        </form>
        <button className="Login-button" onClick={clickLogin}>로그인</button>
      </div>
    );
  }
}

export default Login;
