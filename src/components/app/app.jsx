import React, {Fragment} from "react";
import {Route, Switch, Router as BrowserRouter, Link} from "react-router-dom";
import WelcomeScreen from "../welcome-screen/welcome-screen";
import AuthScreen from "../auth-screen/auth-screen";
import FavoritesOfferScreen from "../favorites-offer-screen/favorites-offer-screen";
import OfferScreen from "../offer-screen/offer-screen";
import PrivateRoute from "../privat-route/privat-route";
import browserHistory from "../../browser-history";

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/"
          render={({location, history}) =>
            <WelcomeScreen
              location={location}
              history={history}
            />
          }
        />
        <Route exact path="/login">
          <AuthScreen />
        </Route>
        <PrivateRoute exact path="/favorites"
          render={({location, history}) =>
            <FavoritesOfferScreen
              location={location}
              history={history}
            />
          }
        />
        <Route exact path="/hotels/:id"
          render={({location, history}) =>
            <OfferScreen
              location={location}
              history={history}
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

App.propTypes = {};

export default App;
