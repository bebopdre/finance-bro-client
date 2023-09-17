import React from "react";
import "../LandingPage/LandingPage.scss";
const LandingPage = () => {
  return (
    <div className="landing">
      <div className="landing___title-container">
        <h1 className="landing__title"> Shell City Trails</h1>
        <div className="landing__subtitle-container">
          <h2 className="landing_subtitle">The financial literacy game.</h2>
        </div>
      </div>

      <div className="landing__buttons">
        <div className="landing__item">
          <button className="landing__button"> New Game</button>
        </div>
        <div className="landing__item">
          <button className="landing__button"> Save Game</button>
        </div>
        <div className="landing__item">
          <button className="landing__button"> Exit</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
