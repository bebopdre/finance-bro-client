import React from "react";
import "../LandingPage/LandingPage.scss";
const LandingPage = () => {
  return (
    <div className="landing">
      <section className="landing__background">
        <div className="landing__title-container">
          <h1 className="landing__title"> Shell City Trails</h1>
          <div className="landing__subtitle-container">
            <h2 className="landing__subtitle">The financial literacy game.</h2>
          </div>
        </div>

        <div className="landing__buttons">
            <button className="landing__button"> New Game</button>
            <button className="landing__button"> Save Game</button>
            <button className="landing__button"> Exit</button>
        </div>
      </section>
      
    </div>
  );
};

export default LandingPage;
