import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {AuthorizationStatus} from "../../const";
import App from "./app";

const mockStore = configureStore([]);
let store = null;
let AppComponent = null;

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

  AppComponent = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
  );
});

it(`Should App connected to store render correctly`, () => {
  expect(AppComponent.toJSON()).toMatchSnapshot();
});
