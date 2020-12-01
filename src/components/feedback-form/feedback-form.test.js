import React from "react";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import FeedbackForm from "./feedback-form";
import storeMock from "../../__mocks__/storeMock";

const noop = () => { };

const mockStore = configureStore([]);
let store = null;
let FeedbackFormComponent = null;

beforeEach(() => {
  store = mockStore(storeMock);

  store.dispatch = jest.fn();

  FeedbackFormComponent = renderer.create(
      <Provider store={store}>
        <FeedbackForm
          onSubmitReview={noop}
          onRatingChange={noop}
          onTextareaChange={noop}
          postReviewLoading={false}
          postReviewLoaded={false}
          rating={0}
          review={``}
          errorMessage={``}
          id={1}
        />
      </Provider>
  );
});

it(`Should FeedbackForm render correctly`, () => {
  expect(FeedbackFormComponent.toJSON()).toMatchSnapshot();
});
