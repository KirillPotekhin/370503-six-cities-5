import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withData from "./with-data";

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withData(MockComponent);

it.skip(`Should withData`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  expect(wrapper.state().activePlayerId).toEqual(-1);
});
