import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map, {Map as MapWithoutStore} from "./map";
import storeMock from "../../__mocks__/storeMock";

it(`Should Map render correctly`, () => {
  const tree = renderer
    .create(
        <MapWithoutStore
          city={storeMock.STATE.city}
          offers={storeMock.DATA.offers}
          active={storeMock.STATE.active}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

describe(`Render Map connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let MapComponent = null;

  beforeEach(() => {
    store = mockStore(storeMock);

    store.dispatch = jest.fn();

    MapComponent = renderer.create(
        <Provider store={store}>
          <Map
            offers={storeMock.DATA.offers}
          />
        </Provider>
    );
  });

  it(`Should Map connected to store render correctly`, () => {
    expect(MapComponent.toJSON()).toMatchSnapshot();
  });

});
