export const ActionType = {
  CITY_CHANGE: `CITY CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  GET_ACTIVE_OFFER_ID: `GET_ACTIVE_OFFER_ID`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_DEFAULT_CITY: `GET_DEFAULT_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
};

// export const ActionCreator = {
//   cityChange: (string) => ({
//     type: ActionType.CITY_CHANGE,
//     payload: string,
//   }),
//   getOffers: () => ({
//     type: ActionType.GET_OFFERS,
//   }),
//   getCities: () => ({
//     type: ActionType.GET_CITIES,
//   }),
//   getActiveOfferId: (string) => ({
//     type: ActionType.GET_ACTIVE_OFFER_ID,
//     payload: string,
//   }),
//   getReviews: () => ({
//     type: ActionType.GET_REVIEWS,
//   }),
//   getDefaultCity: () => ({
//     type: ActionType.GET_DEFAULT_CITY,
//   }),
// };

export const cityChange = (string) => ({
  type: ActionType.CITY_CHANGE,
  payload: string,
});

export const getOffers = () => ({
  type: ActionType.GET_OFFERS,
});

export const getCities = () => ({
  type: ActionType.GET_CITIES,
});

export const getActiveOfferId = (string) => ({
  type: ActionType.GET_ACTIVE_OFFER_ID,
  payload: string,
});

export const getReviews = () => ({
  type: ActionType.GET_REVIEWS,
});

export const getDefaultCity = () => ({
  type: ActionType.GET_DEFAULT_CITY,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status
});
