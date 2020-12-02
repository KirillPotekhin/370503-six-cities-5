import React from "react";
import renderer from "react-test-renderer";
import PropTypes from "prop-types";
import withAuthData from "./with-auth-data";
import {AppRoute, AuthorizationStatus} from "../../const";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {Route, Router as BrowserRouter, Switch} from "react-router-dom";
import browserHistory from "../../browser-history";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

const MockComponentWrapped = withAuthData(MockComponent);

describe(`test withAuthData`, () => {
  it(`test withAuthData!`, () => {
    const mockStore = configureStore([]);
    let store = null;
    let WithAuthDataComponent = null;

    beforeEach(() => {
      store = mockStore({
        STATE: {
          city: {
            location: {
              latitude: 52.3909553943508,
              longitude: 4.85309666406198,
              zoom: 12,
            },
            name: `Amsterdam`,
          },
        },
        DATA: {
          offers: [],
          reviews: [],
          cities: [],
          offersNearby: [],
          offersFavorites: [],
        },
        USER: {
          authorizationStatus: AuthorizationStatus.NO_AUTH,
          email: ``,
        }
      });

      store.dispatch = jest.fn();

      WithAuthDataComponent = renderer.create(
          <Provider store={store}>
            <BrowserRouter history={browserHistory}>
              <Switch>
                <Route exact path={AppRoute.LOGIN}>
                  <MockComponentWrapped />
                </Route>
              </Switch>
            </BrowserRouter>
          </Provider>
      );
    });

    expect(WithAuthDataComponent).toMatchSnapshot();
  });
});
