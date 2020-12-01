import React from "react";
import renderer from "react-test-renderer";
import PlaceCard from "./place-card";

const noop = () => {};

const offer = {
  id: 1,
  city: {
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 12,
    },
    name: `Amsterdam`,
  },
  isPremium: true,
  previewImage: `http://placehold.it/260x200/33bee5&text=view1`,
  images: [
    `http://placehold.it/260x200/33bee5&text=view1`,
    `http://placehold.it/260x200/33bee5&text=view2`,
    `http://placehold.it/260x200/33bee5&text=view3`,
    `http://placehold.it/260x200/33bee5&text=view4`,
    `http://placehold.it/260x200/33bee5&text=view5`,
    `http://placehold.it/260x200/33bee5&text=view6`,
  ],
  title: `Beautiful & luxurious studio at great location`,
  rating: 5,
  type: `Apartment`,
  bedrooms: 3,
  maxGuestsNumber: 4,
  price: 195,
  goods: [
    `Wi-Fi`,
    `Washing machine`,
    `Towels`,
    `Heating`,
    `Coffee machine`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  host: {
    avatar: `https://api.adorable.io/avatars/120`,
    name: `Angelina`,
    isPro: false,
    id: 25
  },
  description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  isFavorite: true,
};

it(`Should PlaceCard render correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      key={`random`}
      offer={offer}
      active={1}
      onClickCard={noop}
      onClickFavoritesButton={noop}
      handlerMouseEnter={noop}
      handlerMouseLeave={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
