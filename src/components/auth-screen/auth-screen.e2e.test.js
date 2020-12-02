import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import storeMock from "../../__mocks__/storeMock";

import {AuthScreen} from "./auth-screen";


configure({adapter: new Adapter()});

it(`Should auth form send`, () => {
  const handlerFormSubmit = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        onSubmit={handlerFormSubmit}
        city={storeMock.STATE.city}
      />
  );

  const placeCardTitle = wrapper.find(`.form`);
  placeCardTitle.simulate(`submit`, {
    preventDefault: handlerFormSubmit,
  });
  expect(handlerFormSubmit).toHaveBeenCalledTimes(1);
});
