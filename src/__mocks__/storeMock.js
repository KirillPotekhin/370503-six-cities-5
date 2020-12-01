import {AuthorizationStatus, SortingOption} from "../const";

const storeMock = {
  STATE: {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
      name: `Amsterdam`,
    },
    active: ``,
    sortingOption: SortingOption.POPULAR,
    openedOffer: {
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
    },
    postReviewLoading: false,
    postReviewLoaded: false,
    errorMessage: ``,
  },
  DATA: {
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
    ],
    reviews: [
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
    ],
    cities: [
      {
        location: {
          latitude: 48.864716,
          longitude:	2.349014,
          zoom: 12,
        },
        name: `Paris`
      },
      {
        location: {
          latitude: 50.937531,
          longitude: 6.960279,
          zoom: 12,
        },
        name: `Cologne`
      },
      {
        location: {
          latitude: 50.850346,
          longitude: 4.351721,
          zoom: 12,
        },
        name: `Brussels`
      },
      {
        location: {
          latitude: 52.370216,
          longitude: 4.895168,
          zoom: 12,
        },
        name: `Amsterdam`
      },
      {
        location: {
          latitude: 53.551286,
          longitude: 9.993682,
          zoom: 12,
        },
        name: `Hamburg`
      },
      {
        location: {
          latitude: 51.227741,
          longitude: 6.773456,
          zoom: 12,
        },
        name: `Dusseldorf`
      }
    ],
    offersNearby: [
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
    ],
    offersFavorites: [
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
    ],
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``,
  }
};

export default storeMock;

const storeEmptyMock = {
  STATE: {
    city: {
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
      name: `Amsterdam`,
    },
  },
  DATA: {
    offers: [],
    reviews: [],
    cities: [
      {
        location: {
          latitude: 48.864716,
          longitude: 2.349014,
          zoom: 12,
        },
        name: `Paris`
      }
    ],
    offersNearby: [],
    offersFavorites: [],
  },
  USER: {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    email: ``,
  }
};

export {storeEmptyMock};
