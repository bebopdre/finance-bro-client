import React from "react";
import "../FeedbackPage/FeedbackPage.scss";

const FeedbackPage = () => {
  return (
    <div className="feedback">
      <section className="feedback__window-container">
        <div className="feedback__text-column">
          <div className="feedback__text-row">
            <p className="feedback__text">New Badge earned! Credit Novice</p>
            <div className="feedback__image-container">
              <div className="feedback__image"></div>
            </div>
          </div>
          <div className="feedback__subheading-container">
            <h2 className="feedback__subheading">Your feedback:</h2>
          </div>
          <div className="feedback__window">
            <p className="feedback__window-text">
              You picked your most ideal choice as your first move. Bit Coin would have been incredibly too risky from your financial well being at
              this time.
            </p>
          </div>
        </div>
        <div className="feedback__window-large">
          <h2 className="feedback__window-container">What would Meemaw have done?</h2>
          <p className="feedback__window-text">
           Meemaw would have put $5000 in cash in a lockbox and put the rest in a high-yield savings account.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;
