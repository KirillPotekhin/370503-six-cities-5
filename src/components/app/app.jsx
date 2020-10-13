import React, {Fragment} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesOfferScreen from "../favorites-offer-screen/favorites-offer-screen";
import OfferScreen from "../offer-screen/offer-screen";

const App = (props) => {
  const {rentalOffers} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <WelcomeScreen rentalOffers={rentalOffers} />
        </Route>
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesOfferScreen />
        </Route>
        <Route exact path="/offer/:id" component={OfferScreen} />
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentalOffers: PropTypes.number.isRequired,
};

export default App;
