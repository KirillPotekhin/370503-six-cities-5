import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {ReviewRatingTitle} from "../../const";

import RatingItem from "./rating-item";


configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Should rating item change`, () => {
  const onRatingChange = jest.fn();

  const wrapper = shallow(
      <RatingItem
        key={`Star1`}
        ratingTitle={ReviewRatingTitle.PERFECT}
        value={5}
        onRatingChange={onRatingChange}
        rating={`5`}
      />
  );

  const ratingItem = wrapper.find(`.form__rating-input`).at(0);
  ratingItem.simulate(`change`, mockEvent);
  expect(onRatingChange).toHaveBeenCalledTimes(1);
});
