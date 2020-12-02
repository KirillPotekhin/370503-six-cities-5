import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import {FeedbackForm} from "./feedback-form";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};

it(`Should work in form`, () => {
  const handlerSubmitReview = jest.fn();
  const handlerRatingChange = jest.fn();
  const handlerTextareaChange = jest.fn();

  const wrapper = shallow(
      <FeedbackForm
        onSubmitReview={handlerSubmitReview}
        onRatingChange={handlerRatingChange}
        onTextareaChange={handlerTextareaChange}
        postReviewLoading={false}
        postReviewLoaded={false}
        rating={0}
        review={``}
        errorMessage={``}
        id={1}
      />
  );

  const form = wrapper.find(`.form`);
  form.simulate(`submit`, mockEvent);
  expect(handlerSubmitReview).toHaveBeenCalledTimes(1);
  const textarea = wrapper.find(`.form__textarea`);
  textarea.simulate(`change`, mockEvent);
  expect(handlerTextareaChange).toHaveBeenCalledTimes(1);
});
