import "./Popup.scss";

function Popup(props) {
  return (
    <nav className="popup" ref={props.data}>
      <ul className="popup__list" onClick={props.bgrExit}>
        <li className="popup__item">
          <a href="#" className="popup__link">
            Главная
          </a>
        </li>
        <li className="popup__item">
          <a href="#" className="popup__link">
            Технология
          </a>
        </li>
        <li className="popup__item">
          <a href="#" className="popup__link">
            График полетов
          </a>
        </li>
        <li className="popup__item">
          <a href="#" className="popup__link">
            Гарантии
          </a>
        </li>
        <li className="popup__item">
          <a href="#" className="popup__link">
            О компании
          </a>
        </li>
        <li className="popup__item">
          <a href="#" className="popup__link">
            Контакты
          </a>
        </li>
      </ul>
      <div className="popup__bgr" onClick={props.bgrExit}></div>
    </nav>
  );
}

export default Popup;
