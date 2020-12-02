import {applicationData} from "./application-data";
import {ActionType} from "../../action";

const information = {
  offers: [
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
      location: {
        latitude: 52.37554,
        longitude: 4.9019759999999994,
        zoom: 12,
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
    }
  ], cities: [
    {
      location: {
        latitude: 48.864716,
        longitude: 2.349014,
        zoom: 12,
      },
      name: `Paris`
    }
  ]};

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
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(applicationData(void 0, {})).toEqual({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  });
});

it(`Reducer should update offers by load offers`, () => {
  expect(applicationData({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  }, {
    type: ActionType.LOAD_OFFERS,
    payload: {
      offers: information.offers,
      cities: information.cities,
    },
  })).toEqual({
    offers: information.offers,
    reviews: [],
    cities: information.cities,
    offersNearby: [],
    offersFavorites: [],
  });
});

it(`Reducer should update reviews by load reviews`, () => {
  expect(applicationData({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  }, {
    type: ActionType.LOAD_REVIEWS,
    payload: reviews,
  })).toEqual({
    offers: [],
    reviews,
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  });
});

it(`Reducer should update offersNearby by load offersNearby`, () => {
  expect(applicationData({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  }, {
    type: ActionType.LOAD_OFFERS_NEARBY,
    payload: {
      offers: information.offers,
    },
  })).toEqual({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: information.offers,
    offersFavorites: [],
  });
});

it(`Reducer should update offersFavorites by load offersFavorites`, () => {
  expect(applicationData({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  }, {
    type: ActionType.LOAD_OFFERS_FAVORITES,
    payload: {
      offers: information.offers,
    },
  })).toEqual({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: information.offers,
  });
});

it(`Reducer should update reviews by postReviewSucces`, () => {
  expect(applicationData({
    offers: [],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  }, {
    type: ActionType.POST_REVIEW_SUCCES,
    payload: reviews,
  })).toEqual({
    offers: [],
    reviews,
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  });
});

it(`Reducer should update offer by setFavoriteStatusToOffer`, () => {
  expect(applicationData({
    offers: [{
      id: 1,
      city: {
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 12,
        },
        name: `Amsterdam`,
      },
      location: {
        latitude: 52.37554,
        longitude: 4.9019759999999994,
        zoom: 12,
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
    }],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  }, {
    type: ActionType.SET_FAVORITE_STATUS_TO_OFFER,
    payload: {
      offers: [{
        id: 1,
        city: {
          location: {
            latitude: 52.3909553943508,
            longitude: 4.85309666406198,
            zoom: 12,
          },
          name: `Amsterdam`,
        },
        location: {
          latitude: 52.37554,
          longitude: 4.9019759999999994,
          zoom: 12,
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
      }],
      isFavorite: true,
      offersNearby: [],
    },
  })).toEqual({
    offers: [{
      id: 1,
      city: {
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 12,
        },
        name: `Amsterdam`,
      },
      location: {
        latitude: 52.37554,
        longitude: 4.9019759999999994,
        zoom: 12,
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
    }],
    reviews: [],
    cities: [],
    offersNearby: [],
    offersFavorites: [],
  });
});
