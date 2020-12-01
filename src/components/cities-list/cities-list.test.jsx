import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import CitiesList, {CitiesList as CitiesListWithoutStore} from "./cities-list";

const noop = () => {};

const cities = [
  {
    location: {
      latitude: 48.864716,
      longitude:	2.349014,
      zoom: 12,
    },
    name: `Paris`
  },
  {
    location: {
      latitude: 50.937531,
      longitude: 6.960279,
      zoom: 12,
    },
    name: `Cologne`
  },
  {
    location: {
      latitude: 50.850346,
      longitude: 4.351721,
      zoom: 12,
    },
    name: `Brussels`
  },
  {
    location: {
      latitude: 52.370216,
      longitude: 4.895168,
      zoom: 12,
    },
    name: `Amsterdam`
  },
  {
    location: {
      latitude: 53.551286,
      longitude: 9.993682,
      zoom: 12,
    },
    name: `Hamburg`
  },
  {
    location: {
      latitude: 51.227741,
      longitude: 6.773456,
      zoom: 12,
    },
    name: `Dusseldorf`
  }
];

const city = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 12,
  },
  name: `Amsterdam`,
};

it(`Should CitiesList render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesListWithoutStore
          city={city}
          cities={cities}
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
    store = mockStore({
      STATE: {
        city,
      },
      DATA: {
        cities,
      }
    });

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
