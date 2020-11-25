export const ActionType = {
  CITY_CHANGE: `CITY CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  GET_ACTIVE_OFFER_ID: `GET_ACTIVE_OFFER_ID`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_DEFAULT_CITY: `GET_DEFAULT_CITY`,
};

export const ActionCreator = {
  cityChange: (string) => ({
    type: ActionType.CITY_CHANGE,
    payload: string,
  }),
  getOffers: () => ({
    type: ActionType.GET_OFFERS,
  }),
  getCities: () => ({
    type: ActionType.GET_CITIES,
  }),
  getActiveOfferId: (string) => ({
    type: ActionType.GET_ACTIVE_OFFER_ID,
    payload: string,
  }),
  getReviews: () => ({
    type: ActionType.GET_REVIEWS,
  }),
  getDefaultCity: () => ({
    type: ActionType.GET_DEFAULT_CITY,
  }),
};
