import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";

const reviewItem = {
  comment: `Ad quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-05-08T14:13:56.569Z`,
  id: 1,
  rating: 4,
  user: {
    avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
    id: 2,
    isPro: false,
    name: `Max`
  }
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(<Review
      reviewItem={reviewItem}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
