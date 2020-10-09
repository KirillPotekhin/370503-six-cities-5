import React from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";

const App = (props) => {
  const {rentalOffers} = props;
  return (
    <WelcomeScreen rentalOffers={rentalOffers} />
  );
};

App.propTypes = {
  rentalOffers: PropTypes.number.isRequired,
};

export default App;
