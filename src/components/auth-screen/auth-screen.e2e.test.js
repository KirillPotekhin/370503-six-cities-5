import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import storeMock from "../../__mocks__/storeMock";

import {AuthScreen} from "./auth-screen";


configure({adapter: new Adapter()});

it(`Should auth form send`, () => {
  const handlerFormSubmit = jest.fn();
  const handlerChangeField = jest.fn();

  const wrapper = shallow(
      <AuthScreen
        onSubmitForm={handlerFormSubmit}
        onChangeField={handlerChangeField}
        city={storeMock.STATE.city}
        login={`hi@mail.ru`}
        password={`dssdfsfd`}
      />, {
        createNodeMock: () => {
          return document.createElement(`div`);
        }
      }
  );

  const placeCardTitle = wrapper.find(`.form`);
  placeCardTitle.simulate(`submit`, {
    preventDefault: handlerFormSubmit,
  });
  expect(handlerFormSubmit).toHaveBeenCalledTimes(1);
  const formInput = wrapper.find(`.form__input`).at(0);
  formInput.simulate(`change`, {
    preventDefault: handlerFormSubmit,
  });
  expect(handlerFormSubmit).toHaveBeenCalledTimes(1);
});
