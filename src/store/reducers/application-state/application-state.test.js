
import {applicationState} from "./application-state";
import {ActionType} from "../../action";
import {SortingOption} from "../../../const";

const city = {
  location: {
    latitude: 52.3909553943508,
    longitude: 4.85309666406198,
    zoom: 12,
  },
  name: `Amsterdam`,
};

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

it(`Reducer should cityChange`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.CITY_CHANGE,
    payload: city,
  })).toEqual({
    city,
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should getActiveOfferId`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.GET_ACTIVE_OFFER_ID,
    payload: 1,
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: 1,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should getDefaultCity`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.GET_DEFAULT_CITY,
    payload: city,
  })).toEqual({
    city,
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should setSortingOption`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.SET_SORTING_OPTION,
    payload: SortingOption.TOP_RATED_FIRST,
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.TOP_RATED_FIRST,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should setSortingOptionDefault`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.SET_SORTING_OPTION_DEFAULT,
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should getOpenedHotel`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.GET_OPENED_HOTEL,
    payload: information
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: information.offers[0],
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should postReviewStart`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.POST_REVIEW_START,
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: true,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should postReviewSucces`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.POST_REVIEW_SUCCES,
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: true,
    errorMessage: ``,
  });
});

it(`Reducer should postReviewFailed`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.POST_REVIEW_FAILED,
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});

it(`Reducer should showErrorMessages`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.SHOW_ERROR_MESSAGES,
    payload: `Error Messages`
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: null,
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: `Error Messages`,
  });
});

it(`Reducer should setFavoriteStatusToOffer`, () => {
  expect(applicationState({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: {
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
      isFavorite: false,
    },
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  }, {
    type: ActionType.SET_FAVORITE_STATUS_TO_OFFER,
    payload: {
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
  })).toEqual({
    city: {
      location: {
        latitude: ``,
        longitude: ``,
        zoom: ``,
      },
      name: ``
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedHotel: {
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
    },
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  });
});
