import {ActionType, cityChange, getActiveOfferId, getDefaultCity, setSortingOption, setSortingOptionDefault, getUserEmail, getOpenedHotel, postReviewSucces, postReviewFailed, setFavoriteStatusToOffer, showErrorMessages, loadOffers, loadReviews, loadOffersNearby, loadOffersFavorites, requireAuthorization} from "./action";

describe(`Action creators work correctly`, () => {
  it(`Action creator for cityChange returns correct action with payload`, () => {
    expect(cityChange({
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
      name: `Amsterdam`,
    })).toEqual({
      type: ActionType.CITY_CHANGE,
      payload: {
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 12,
        },
        name: `Amsterdam`,
      },
    });
  });

  it(`Action creator for getActiveOfferId returns correct action with payload`, () => {
    expect(getActiveOfferId(1)).toEqual({
      type: ActionType.GET_ACTIVE_OFFER_ID,
      payload: 1,
    });
  });

  it(`Action creator for getDefaultCity returns correct action`, () => {
    expect(getDefaultCity({
      location: {
        latitude: 52.3909553943508,
        longitude: 4.85309666406198,
        zoom: 12,
      },
      name: `Amsterdam`,
    })).toEqual({
      type: ActionType.GET_DEFAULT_CITY,
      payload: {
        location: {
          latitude: 52.3909553943508,
          longitude: 4.85309666406198,
          zoom: 12,
        },
        name: `Amsterdam`,
      },
    });
  });

  it(`Action creator for setSortingOption returns correct action`, () => {
    expect(setSortingOption(`Price: low to high`)).toEqual({
      type: ActionType.SET_SORTING_OPTION,
      payload: `Price: low to high`,
    });
  });

  it(`Action creator for setSortingOptionDefault returns correct action`, () => {
    expect(setSortingOptionDefault()).toEqual({
      type: ActionType.SET_SORTING_OPTION_DEFAULT,
    });
  });

  it(`Action creator for getUserEmail returns correct action`, () => {
    expect(getUserEmail({
      "avatar_url": `img/1.png`,
      "email": `Oliver.conner@gmail.com`,
      "id": 1,
      "is_pro": false,
      "name": `Oliver.conner`
    })).toEqual({
      type: ActionType.GET_USER_EMAIL,
      payload: {
        "avatar_url": `img/1.png`,
        "email": `Oliver.conner@gmail.com`,
        "id": 1,
        "is_pro": false,
        "name": `Oliver.conner`
      },
    });
  });

  it(`Action creator for getOpenedHotel returns correct action`, () => {
    expect(getOpenedHotel({
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
      ]})).toEqual({
      type: ActionType.GET_OPENED_HOTEL,
      payload: {
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
        ]},
    });
  });

  it(`Action creator for postReviewStart returns correct action`, () => {
    expect(getUserEmail()).toEqual({
      type: ActionType.GET_USER_EMAIL,
    });
  });

  it(`Action creator for postReviewSucces returns correct action with payload`, () => {
    expect(postReviewSucces(
        [
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
        ]
    )).toEqual({
      type: ActionType.POST_REVIEW_SUCCES,
      payload: [
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
      ],
    });
  });

  it(`Action creator for postReviewFailed returns correct action`, () => {
    expect(postReviewFailed()).toEqual({
      type: ActionType.POST_REVIEW_FAILED,
    });
  });

  it(`Action creator for setFavoriteStatusToOffer returns correct action with payload`, () => {
    expect(setFavoriteStatusToOffer(
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
        }
    )).toEqual({
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
    });
  });

  it(`Action creator for showErrorMessages returns correct action`, () => {
    expect(showErrorMessages(`Error Aplication`)).toEqual({
      type: ActionType.SHOW_ERROR_MESSAGES,
      payload: `Error Aplication`
    });
  });

  it(`Action creator for loadOffers returns correct action with payload`, () => {
    expect(loadOffers({
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
        }
      ],
      cities: [
        {
          location: {
            latitude: 48.864716,
            longitude: 2.349014,
            zoom: 12,
          },
          name: `Paris`
        }
      ]
    })).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: {
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
          }
        ],
        cities: [
          {
            location: {
              latitude: 48.864716,
              longitude: 2.349014,
              zoom: 12,
            },
            name: `Paris`
          }
        ]
      }
    });
  });

  it(`Action creator for loadReviews returns correct action with payload`, () => {
    expect(loadReviews(
        [
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
        ]
    )).toEqual({
      type: ActionType.LOAD_REVIEWS,
      payload: [
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
      ],
    });
  });

  it(`Action creator for loadOffersNearby returns correct action with payload`, () => {
    expect(loadOffersNearby({
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
        }
      ],
      cities: [
        {
          location: {
            latitude: 48.864716,
            longitude: 2.349014,
            zoom: 12,
          },
          name: `Paris`
        }
      ]
    })).toEqual({
      type: ActionType.LOAD_OFFERS_NEARBY,
      payload: {
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
          }
        ],
        cities: [
          {
            location: {
              latitude: 48.864716,
              longitude: 2.349014,
              zoom: 12,
            },
            name: `Paris`
          }
        ]
      }
    });
  });

  it(`Action creator for loadOffersFavorites returns correct action with payload`, () => {
    expect(loadOffersFavorites({
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
        }
      ],
      cities: [
        {
          location: {
            latitude: 48.864716,
            longitude: 2.349014,
            zoom: 12,
          },
          name: `Paris`
        }
      ]
    })).toEqual({
      type: ActionType.LOAD_OFFERS_FAVORITES,
      payload: {
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
          }
        ],
        cities: [
          {
            location: {
              latitude: 48.864716,
              longitude: 2.349014,
              zoom: 12,
            },
            name: `Paris`
          }
        ]
      }
    });
  });

  it(`Action creator for requireAuthorization returns correct action`, () => {
    expect(requireAuthorization(`NO_AUTH`)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: `NO_AUTH`
    });
  });

});
