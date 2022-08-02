import "./Main.scss";
import bgr from "../assets/images/main.png";
import planet from "../assets/images/planet.png";
import line from "../assets/images/фигура.png";
import Card from "./Card";
import { useState } from "react";

function Main() {
  const [count, setCount] = useState(0);

  return (
    <section className="main">
      <img src={bgr} alt="" className="main__bgr" />
      <img src={planet} alt="" className="main__planet" />
      <div className="main__wrapper container">
        <div className="main__text">
          <h1 className="main__title">
            Путешествие <span>на красную планету</span>
          </h1>
          <a href="#" className="main__link">
            Начать путешествие
          </a>
          <div className="main__line-wrapper">
            <img src={line} alt="" className="main__line" />
          </div>
        </div>
        <div className="main__cards">
          <Card topSubtitle="мы" numbers="1" subtitle="на рынке" />
          <Card
            topSubtitle="гарантируем"
            numbers="50%"
            subtitle="безопасность"
          />
          <Card
            topSubtitle="календарик за"
            numbers="2001"
            subtitle="в подарок"
            year="г."
          />
          <Card topSubtitle="путешествие" numbers="597" subtitle="дней" />
        </div>
      </div>
    </section>
  );
}

export default Main;
