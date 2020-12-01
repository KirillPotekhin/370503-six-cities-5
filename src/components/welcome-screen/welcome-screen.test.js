import React from "react";
import {Provider} from "react-redux";
import {Switch, Router as BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import WelcomeScreen, {WelcomeScreen as WelcomeScreenWithoutStore} from "./welcome-screen";
import {storeEmptyMock} from "../../__mocks__/storeMock";
import browserHistory from "../../browser-history";

const noop = () => {};

it(`Should WelcomeScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <Switch>
              <WelcomeScreenWithoutStore
                history={browserHistory}
                offers={storeEmptyMock.DATA.offers}
                getOffersAction={noop}
                getActiveOfferIdAction={noop}
                city={storeEmptyMock.STATE.city}
                active={storeEmptyMock.STATE.active}
                setSortingOptionDefaultAction={noop}
                email={storeEmptyMock.USER.email}
                postOfferFavoriteStatusAction={noop}
              />
            </Switch>
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

const mockStore = configureStore([]);
let store = null;
let WelcomeScreenComponent = null;

beforeEach(() => {
  store = mockStore(storeEmptyMock);

  store.dispatch = jest.fn();

  WelcomeScreenComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <Switch>
            <WelcomeScreen
              history={browserHistory}
              getOffersAction={noop}
              getActiveOfferIdAction={noop}
              setSortingOptionDefaultAction={noop}
              postOfferFavoriteStatusAction={noop}
            />
          </Switch>
        </BrowserRouter>
      </Provider>
  );
});

it(`Should WelcomeScreen connected to store render correctly`, () => {
  expect(WelcomeScreenComponent.toJSON()).toMatchSnapshot();
});
