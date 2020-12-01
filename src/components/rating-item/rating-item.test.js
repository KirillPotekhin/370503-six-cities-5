import React from "react";
import renderer from "react-test-renderer";
import RatingItem from "./rating-item";

const noop = () => {};

const ratingTitle = `perfect`;

it(`Should RatingItem render correctly`, () => {
  const tree = renderer
    .create(<RatingItem
      rating={`3`}
      value={5}
      ratingTitle={ratingTitle}
      onRatingChange={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
