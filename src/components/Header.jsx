import "./Header.scss";
import logo from "../assets/images/logo.png";
import Popup from "./Popup";
import { useRef } from "react";

function Header() {
  const buttonRef = useRef();
  const popupRef = useRef();
  const logoRef = useRef();

  function popup() {
    buttonRef.current.classList.toggle("header__button_active");
    popupRef.current.classList.toggle("popup_active");
    logoRef.current.classList.toggle("header__logo-wrapper_active");
  }

  function popupExit() {
    buttonRef.current.classList.remove("header__button_active");
    popupRef.current.classList.remove("popup_active");
    logoRef.current.classList.remove("header__logo-wrapper_active");
  }

  return (
    <header className="header">
      <div className="header__bgr"></div>
      <div className="header__wrapper container">
        <a href="#" className="header__logo-wrapper" ref={logoRef}>
          <img src={logo} alt="" className="header__logo" />
        </a>
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <a href="#" className="header__link">
                Главная
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Технология
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                График полетов
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Гарантии
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                О компании
              </a>
            </li>
            <li className="header__item">
              <a href="#" className="header__link">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__button" ref={buttonRef} onClick={popup}>
          <span className="header__line"></span>
          <span className="header__line"></span>
          <span className="header__line"></span>
        </div>
      </div>
      <Popup data={popupRef} bgrExit={popupExit} />
    </header>
  );
}

export default Header;
