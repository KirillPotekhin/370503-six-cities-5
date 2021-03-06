import React from "react";
import renderer from "react-test-renderer";
import PlacesList from "./places-list";

const noop = () => {};

const offers = [
  {
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
  }, {
    id: 2,
    city: {
      location: {
        latitude: 52.369553943508,
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
    rating: 1,
    type: `Apartment`,
    bedrooms: 3,
    maxGuestsNumber: 4,
    price: 15,
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
      id: 26
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    isFavorite: true,
  }, {
    id: 3,
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.929309666406198,
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
    type: `Street`,
    bedrooms: 3,
    maxGuestsNumber: 4,
    price: 155,
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
      avatar: `https://api.adorable.io/avatars/110`,
      name: `Andrey`,
      isPro: false,
      id: 27
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    isFavorite: true,
  }, {
    id: 4,
    city: {
      location: {
        latitude: 48.851162,
        longitude: 2.312317,
        zoom: 12,
      },
      name: `Paris`,
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
    rating: 4,
    type: `Room`,
    bedrooms: 3,
    maxGuestsNumber: 2,
    price: 115,
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
      name: `Lisa`,
      isPro: false,
      id: 28
    },
    description: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    isFavorite: true,
  },
];

it(`Should PlacesList render correctly`, () => {
  const tree = renderer
    .create(<PlacesList
      key={`random`}
      offers={offers}
      offer={offers[0]}
      active={1}
      onClickCard={noop}
      onClickFavoritesButton={noop}
      handlerMouseEnter={noop}
      handlerMouseLeave={noop}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
