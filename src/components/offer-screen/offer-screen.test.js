import React from "react";
import {Provider} from "react-redux";
import {Switch, Router as BrowserRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import OfferScreen, {OfferScreen as OfferScreenWithoutStore} from "./offer-screen";
import storeMock, {storeEmptyMock} from "../../__mocks__/storeMock";
import browserHistory from "../../browser-history";

const noop = () => {};

it(`Should OfferScreen render correctly`, () => {
  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter history={browserHistory}>
            <Switch>
              <OfferScreenWithoutStore
                location={browserHistory.location}
                history={browserHistory}
                offers={storeMock.DATA.offers}
                reviews={storeMock.DATA.reviews}
                getActiveOfferIdAction={noop}
                getReviewsAction={noop}
                cities={storeMock.DATA.cities}
                cityChangeAction={noop}
                city={storeMock.STATE.city}
                email={storeMock.USER.email}
                fetchOffersNearbyAction={noop}
                offersNearby={storeMock.DATA.offersNearby}
                fetchOfferAction={noop}
                openedHotel={storeMock.STATE.openedHotel}
                authorizationStatus={storeMock.USER.authorizationStatus}
                postOfferFavoriteStatusAction={noop}
                active={storeMock.STATE.active}
                onClickFavoritesButton={noop}
                errorMessage={storeMock.STATE.errorMessage}

              />
            </Switch>
          </BrowserRouter>
        </Provider>
    ).toJSON();

  expect(tree).toMatchSnapshot();
});

const mockStore = configureStore([]);
let store = null;
let OfferScreenComponent = null;

beforeEach(() => {
  store = mockStore(storeMock);

  store.dispatch = jest.fn();

  OfferScreenComponent = renderer.create(
      <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <Switch>
            <OfferScreen
              location={browserHistory.location}
              history={browserHistory}
              getActiveOfferIdAction={noop}
              getReviewsAction={noop}
              cityChangeAction={noop}
              fetchOffersNearbyAction={noop}
              fetchOfferAction={noop}
              postOfferFavoriteStatusAction={noop}
              onClickFavoritesButton={noop}

            />
          </Switch>
        </BrowserRouter>
      </Provider>
  );
});

it(`Should OfferScreen connected to store render correctly`, () => {
  expect(OfferScreenComponent.toJSON()).toMatchSnapshot();
});
