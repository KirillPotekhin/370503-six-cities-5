import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesList, {CitiesList as CitiesListWithoutStore} from "./cities-list";
import storeMock, {storeEmptyMock} from "../../__mocks__/storeMock";

const noop = () => {};

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesListWithoutStore
          city={storeMock.STATE.city}
          cities={storeMock.DATA.cities}
          onClick={noop}
          cityChangeAction={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

describe(`Render CitiesList connected to store component`, () => {
  const mockStore = configureStore([]);
  let store = null;
  let CitiesListComponent = null;

  beforeEach(() => {
    store = mockStore(storeEmptyMock);

    store.dispatch = jest.fn();

    CitiesListComponent = renderer.create(
        <Provider store={store}>
          <CitiesList
            onClick={noop}
            cityChangeAction={noop}
          />
        </Provider>
    );
  });

  it(`Should AuthScreen connected to store render correctly`, () => {
    expect(CitiesListComponent.toJSON()).toMatchSnapshot();
  });

  it(`Should call dispatch when click city`, () => {
    renderer.act(() => {
      CitiesListComponent.root.findByType(`a`).props.onClick();
    });

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

});
