import React, {Fragment} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter, Link} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesOfferScreen from "../favorites-offer-screen/favorites-offer-screen";
import OfferScreen from "../offer-screen/offer-screen";
import applicationPropTypes from "../../application-prop-types";

const App = (props) => {
  const {rentalOffers, offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({location, history}) =>
            <WelcomeScreen
              location={location}
              history={history}
              rentalOffers={rentalOffers}
              offers={offers}
            />
          }
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesOfferScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer/:id"
          render={({location, history}) =>
            <OfferScreen
              location={location}
              history={history}
              offers={offers}
              reviews={reviews}
            />
          }
        />
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to="/">Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  rentalOffers: applicationPropTypes.rentalOffers,
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
  reviews: applicationPropTypes.reviews,
};

export default App;
