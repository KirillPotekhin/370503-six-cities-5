import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import Sorting, {SortingComponent as withActiveFlagSortingComponent} from "./sorting";
import storeMock from "../../__mocks__/storeMock";

const noop = () => { };

it(`Should SortingComponent render correctly`, () => {
  const tree = renderer
    .create(<withActiveFlagSortingComponent
      isActive={false}
      onActiveChange={noop}
      onClickSortingOption={noop}
      sortingOption={storeMock.STATE.sortingOption}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

const mockStore = configureStore([]);
let store = null;
let SortingComponent = null;

beforeEach(() => {
  store = mockStore(storeMock);

  store.dispatch = jest.fn();

  SortingComponent = renderer.create(
      <Provider store={store}>
        <Sorting
          isActive={false}
          onActiveChange={noop}
          onClickSortingOption={noop}
        />
      </Provider>
  );
});

it(`Should Sorting render correctly`, () => {
  expect(SortingComponent.toJSON()).toMatchSnapshot();
});
