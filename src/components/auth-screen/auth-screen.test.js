import React from "react";
import renderer from "react-test-renderer";
import {AuthScreen} from "./auth-screen";
import {Route, Switch, Router as BrowserRouter} from "react-router-dom";
import {AppRoute} from "../../const";
import browserHistory from "../../browser-history";

const noop = () => () => {};

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
              <AuthScreen
                city={city}
                login={`hi@MediaList.ru`}
                password={`sdfsdfsf`}
                onSubmitForm={noop}
                onChangeField={noop}
              />
            </Route>
          </Switch>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
