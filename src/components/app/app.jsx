import React, {Fragment} from "react";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import PropTypes from "prop-types";
import {Route, Switch, BrowserRouter, Link} from "react-router-dom";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesOfferScreen from "../favorites-offer-screen/favorites-offer-screen";
import OfferScreen from "../offer-screen/offer-screen";
import applicationPropTypes from "../../application-prop-types";

const App = (props) => {
  const {offers, reviews} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({location, history}) =>
            <WelcomeScreen
              location={location}
              history={history}
              // sortingOption={this.props.sortingOption}
            />
          }
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <Route exact path="/favorites"
          render={({location, history}) =>
            <FavoritesOfferScreen
              offers={offers}
              location={location}
              history={history}
            />
          }
        />
        <Route exact path="/offer/:id"
          render={({location, history}) =>
            <OfferScreen
              location={location}
              history={history}
              offers={offers}
              reviews={reviews}
              // sortingOption={sortingOption}
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
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
  reviews: PropTypes.arrayOf(applicationPropTypes.review).isRequired,
  // sortingOption: applicationPropTypes.sortingOption,
};

export default App;
