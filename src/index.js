import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";
import offers from "./mocks/offers";
import reviews from "./mocks/reviews";

const Settings = {
  RENTAL_OFFERS: 395,
};

ReactDom.render(
    <App
      rentalOffers={Settings.RENTAL_OFFERS}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
