import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list";

const reviews = [
  {
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
  }, {
    comment: `Ad quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-06-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/6.jpg`,
      id: 3,
      isPro: false,
      name: `Sofia`
    }
  }, {
    comment: `Ad quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-03-08T14:13:56.569Z`,
    id: 1,
    rating: 5,
    user: {
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
      id: 3,
      isPro: false,
      name: `Max`
    }
  }, {
    comment: `Ad quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    date: `2019-05-08T14:13:51.569Z`,
    id: 1,
    rating: 3,
    user: {
      avatar: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/7.jpg`,
      id: 2,
      isPro: false,
      name: `Max`
    }
  },
];

it(`Should ReviewsList render correctly`, () => {
  const tree = renderer
    .create(<ReviewsList
      reviews={reviews}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
