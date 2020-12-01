import React from "react";
import renderer from "react-test-renderer";
import RatingList from "./rating-list";

const noop = () => {};

const ReviewRatingTitle = {
  PERFECT: `perfect`,
  GOOD: `good`,
  NOT_BAD: `not bad`,
  BEADLY: `beadly`,
  TERRIBLY: `terribly`,
};

it(`Should RatingList render correctly`, () => {
  const tree = renderer
    .create(<RatingList
      rating={`3`}
      value={5}
      ratingTitle={ReviewRatingTitle.PERFECT}
      onRatingChange={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
