import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import storeMock from "../../__mocks__/storeMock";

import SortingComponent from "./sorting";


configure({adapter: new Adapter()});

it(`Should sorting`, () => {
  const handlerActiveChangeclick = jest.fn();
  const handlerSortingOptionClick = jest.fn();

  const wrapper = shallow(
      <SortingComponent
        isActive={false}
        onActiveChange={handlerActiveChangeclick}
        onClickSortingOption={handlerSortingOptionClick}
        sortingOption={storeMock.STATE.sortingOption}
      />
  );

  const sortingType = wrapper.find(`.places__sorting-type`);
  sortingType.simulate(`click`);
  expect(handlerActiveChangeclick).toHaveBeenCalledTimes(1);
  const option = wrapper.find(`.places__option`).at(0);
  option.simulate(`click`);
  expect(handlerSortingOptionClick).toHaveBeenCalledTimes(1);
});
