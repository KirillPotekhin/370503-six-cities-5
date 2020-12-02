import React from "react";
import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import storeMock from "../../__mocks__/storeMock";

import {CitiesList} from "./cities-list";


configure({adapter: new Adapter()});

it(`Should active tab item click`, () => {
  const onClickCityName = jest.fn();

  const wrapper = mount(
      <CitiesList
        cityChangeAction={onClickCityName}
        cities={storeMock.DATA.cities}
        city={storeMock.DATA.cities[1]}
      />
  );

  const tabsLink = wrapper.find(`a.locations__item-link`).at(0);
  tabsLink.simulate(`click`);
  expect(onClickCityName).toHaveBeenCalledTimes(1);
});
