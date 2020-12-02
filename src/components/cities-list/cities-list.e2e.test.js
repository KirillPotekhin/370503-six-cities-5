import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import storeMock from "../../__mocks__/storeMock";

import {CitiesList} from "./cities-list";


configure({adapter: new Adapter()});

it(`Should active tab item click`, () => {
  const handleCityTitleClick = jest.fn();
  const onClickCityName = jest.fn();

  const wrapper = mount(
      <CitiesList
        onClick={handleCityTitleClick}
        cityChangeAction={onClickCityName}
        cities={storeMock.DATA.cities}
        city={storeMock.DATA.cities[1]}
      />
  );

  const tabsLink = wrapper.find(`a.locations__item-link`);
  tabsLink.simulate(`click`);
  expect(handleCityTitleClick).toHaveBeenCalledTimes(1);
  expect(onClickCityName).toHaveBeenCalledTimes(1);
});
