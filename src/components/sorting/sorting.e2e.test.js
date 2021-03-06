import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import storeMock, {storeEmptyMock} from "../../__mocks__/storeMock";

import {Sorting} from "./sorting";
import configureStore from "redux-mock-store";

configure({adapter: new Adapter()});

it(`Should sorting`, () => {
  const handlerActiveChangeclick = jest.fn();
  const handlerSortingOptionClick = jest.fn();

  const mockStore = configureStore([]);
  let store = null;
  store = mockStore(storeEmptyMock);

  store.dispatch = jest.fn();

  const wrapper = shallow(
      <Sorting
        isActive={false}
        onActiveChange={handlerActiveChangeclick}
        onClickSortingOption={handlerSortingOptionClick}
        sortingOption={storeMock.STATE.sortingOption}
      />
  );

  const sortingType = wrapper.find(`.places__sorting-type`).at(0);
  sortingType.simulate(`click`);
  expect(handlerActiveChangeclick).toHaveBeenCalledTimes(1);
  const option = wrapper.find(`.places__option`).at(0);
  option.simulate(`click`);
  expect(handlerSortingOptionClick).toHaveBeenCalledTimes(4);
});
