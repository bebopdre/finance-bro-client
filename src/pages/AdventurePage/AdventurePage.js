import React from "react";
import "../../pages/AdventurePage/AdventurePage.scss";
const AdventurePage = () => {
  return (
    <div className="adventure">
      <div className="adventure__title-container">
        <h1 className="adventure__title">Start your Adventure</h1>
      </div>
      <article className="adventure__item-flex">
        <section className="adventure__contents">
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              <h2 className="adventure__subheading">Wispy Willows</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Cherry Creek</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Isla Morada</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Wynwood</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
        </section>
        <section className="adventure__contents-two">
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Steel District</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">Arcadia</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
          <div className="adventure__item-container">
            <div className="adventure__item-one">
              {" "}
              <h2 className="adventure__subheading">El Capitan</h2>
            </div>
            <div className="adventure__item credit-item"></div>
          </div>
        </section>
      </article>
    </div>
  );
};

export default AdventurePage;
