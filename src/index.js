import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const Settings = {
  RENTAL_OFFERS: 395,
};

ReactDom.render(
    <App rentalOffers = {Settings.RENTAL_OFFERS} />,
    document.querySelector(`#root`)
);
