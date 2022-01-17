import logo from '../logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-top">
        <div className="Logo">
          <img src={logo} className="React-logo" alt="logo" />
          <div>Health Care</div>
        </div>
        <ul className="Menu">
          <li className="Menu-item"><a href="/home">진료일정</a></li>
          <li className="Menu-item"><a href="/home">진료예약</a></li>
          <li className="Menu-item"><a href="/patient-info">환자정보</a></li>
          <li className="Menu-item"><a href="/home">진료이력</a></li>
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
          <li className="Menu-item"><a href="/home">Home</a></li>
          <li className="Menu-item"><span>메뉴1</span></li>
          <li className="Menu-item"><span>메뉴2</span></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
