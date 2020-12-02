import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import storeMock from "../../__mocks__/storeMock";

import PlaceCard from "./place-card";


configure({adapter: new Adapter()});

it(`Should active place card on click and hover`, () => {
  const handlerCardTitleClick = jest.fn();
  const handlerFavotiteButtonClick = jest.fn();
  const handlerMouseEnter = jest.fn();
  const handlerMouseLeave = jest.fn();

  const wrapper = shallow(
      <PlaceCard
        key={`random`}
        offer={storeMock.DATA.offers[0]}
        active={1}
        onClickCard={handlerCardTitleClick}
        onClickFavoritesButton={handlerFavotiteButtonClick}
        handlerMouseEnter={handlerMouseEnter}
        handlerMouseLeave={handlerMouseLeave}
      />
  );

  const placeCardTitle = wrapper.find(`.place-card__name`);
  placeCardTitle.simulate(`click`);
  expect(handlerCardTitleClick).toHaveBeenCalledTimes(1);
  wrapper.simulate(`mouseenter`);
  expect(handlerMouseEnter).toHaveBeenCalledTimes(1);
  wrapper.simulate(`mouseleave`);
  expect(handlerMouseLeave).toHaveBeenCalledTimes(1);

  const placeCardFavoriteButton = wrapper.find(`.button`);
  placeCardFavoriteButton.simulate(`click`);
  expect(handlerFavotiteButtonClick).toHaveBeenCalledTimes(1);
});
