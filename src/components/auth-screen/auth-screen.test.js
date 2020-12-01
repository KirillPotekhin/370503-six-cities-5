import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import AuthScreen, {AuthScreen as AuthScreenWithoutStore} from "./auth-screen";
import {Route, Switch, Router as BrowserRouter} from "react-router-dom";
import {AppRoute} from "../../const";
import browserHistory from "../../browser-history";

const noop = () => {};

const city = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 12,
  },
  name: `Amsterdam`,
};

it(`Should AuthScreen render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter history={browserHistory}>
          <Switch>
            <Route exact path={AppRoute.LOGIN}>
              <AuthScreenWithoutStore
                city={city}
                onSubmit={noop}
              />
            </Route>
          </Switch>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

describe(`Render AuthScreen connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let AuthScreenComponent = null;

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
      }
    });

    store.dispatch = jest.fn();

    AuthScreenComponent = renderer.create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <Switch>
              <Route exact path={AppRoute.LOGIN}>
                <AuthScreen
                  onSubmit={noop}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </Provider>
    );
  });

  it(`Should AuthScreen connected to store render correctly`, () => {
    expect(AuthScreenComponent.toJSON()).toMatchSnapshot();
  });

});
