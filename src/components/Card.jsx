import "./Card.scss";
import img from "../assets/images/фон.png";
import imgHover from "../assets/images/bgr-hover.png";

function Card({ topSubtitle, subtitle, numbers, year }) {
  return (
    <a href="#" className="card">
      <img src={img} className="card__bgr"></img>
      <img src={imgHover} className="card__bgr-hover"></img>
      <div className="card__text">
        <span className="card__suptitle card__suptitle_top">{topSubtitle}</span>
        <div className="card__numbers">
          {numbers}
          {year && <span className="card__year">{year}</span>}
        </div>
        <span className="card__suptitle">{subtitle}</span>
      </div>
    </a>
  );
}

export default Card;
