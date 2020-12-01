import React from "react";
import {Provider} from "react-redux";
import {Switch, Router as BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import FavoritesOfferScreen, {FavoritesOfferScreen as FavoritesOfferScreenWithoutStore} from "./favorites-offer-screen";
import storeMock from "../../__mocks__/storeMock";
import browserHistory from "../../browser-history";

const noop = () => { };

it(`Should FavoritesOfferScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <Switch>
              <FavoritesOfferScreenWithoutStore
                history={browserHistory}
                getActiveOfferIdAction={noop}
                fetchOffersFavoritesListAction={noop}
                postOfferFavoriteStatusAction={noop}
                offers={storeMock.DATA.offers}
                email={storeMock.USER.email}
                offersFavorites={storeMock.DATA.offersFavorites}
                active={storeMock.STATE.active}

              />
            </Switch>
          </BrowserRouter>
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

const mockStore = configureStore([]);
let store = null;
let FavoritesOfferScreenComponent = null;

beforeEach(() => {
  store = mockStore(storeMock);

  store.dispatch = jest.fn();

  FavoritesOfferScreenComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <Switch>
            <FavoritesOfferScreen
              history={browserHistory}
              getActiveOfferIdAction={noop}
              fetchOffersFavoritesListAction={noop}
              postOfferFavoriteStatusAction={noop}

            />
          </Switch>
        </BrowserRouter>
      </Provider>
  );
});

it(`Should FavoritesOfferScreen to store render correctly`, () => {
  expect(FavoritesOfferScreenComponent.toJSON()).toMatchSnapshot();
});
