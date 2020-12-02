import React from "react";
import renderer from "react-test-renderer";
import PlacesListEmpty from "./places-list-empty";

const city = {
  location: {
    latitude: 48.851162,
    longitude: 2.312317,
    zoom: 12,
  },
  name: `Paris`,
};

it(`Should PlacesListEmpty render correctly`, () => {
  const tree = renderer
    .create(<PlacesListEmpty
      city={city}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
