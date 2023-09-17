import React from "react";
import "../../pages/AdventurePage/AdventurePage.scss";
const AdventurePage = () => {
  return (
    <div className="adventure">
      <div className="adventure__title-container">
        <h1 className="adventure__title">Pick your Adventure</h1>
      </div>
      <article className="adventure__item-flex">
        <section className="adventure__contents">
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              <h2 className="adventure__subheading">Credit</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Taxes</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Budgeting</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Mortgages</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
        </section>
        <section className="adventure__contents-two">
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Real Estate</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Bit Coin</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Crypto</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AdventurePage;
