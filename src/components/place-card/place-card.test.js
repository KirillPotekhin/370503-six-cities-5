import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";
import storeMock from "../../__mocks__/storeMock";

const noop = () => {};

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      key={`random`}
      offer={storeMock.DATA.offers[0]}
      active={1}
      onClickCard={noop}
      onClickFavoritesButton={noop}
      handlerMouseEnter={noop}
      handlerMouseLeave={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
