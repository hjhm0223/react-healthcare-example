import React from 'react';
import logo from '../../asserts/images/logo.svg';
import '../../asserts/styles/Header.css';

const Header = (props) => {
  const { menuItem, menuClick } = props;
  
  const menuList = menuItem.map((item, index) => {
    return (
      <li className="Menu-item" key={index} id={item.page} onClick={menuClick}>{item.name}</li> 
    );
  });

  return (
    <div className="Header">
      <div className="Header-top">
        <div className="Logo">
          <img src={logo} className="React-logo" alt="logo" />
          <div><a href="/main">Health Care</a></div>
        </div>
        <ul className="Menu">
          { menuList }
        </ul>
        <ul className="My">
          <li className="My-item"><span>알림</span></li>
          <li className="My-item"><span>설정</span></li>
          <li className="My-item">
            <a href="/" className="Logout">로그아웃</a>
          </li>
        </ul>
      </div>
      <div className="Header-bottom">
        <ul className="Menu">
          <li className="Menu-item"><a href="/main">Home</a></li>
          <li className="Menu-item"><span>메뉴1</span></li>
          <li className="Menu-item"><span>메뉴2</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
