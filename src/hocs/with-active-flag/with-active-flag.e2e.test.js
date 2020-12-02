import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withActiveFlag from "./with-active-flag";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveFlag(MockComponent);

it.skip(`Should withActiveFlag`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activePlayerId).toEqual(-1);
});
