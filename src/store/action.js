export const ActionType = {
  CITY_CHANGE: `CITY CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  GET_ACTIVE_OFFER_ID: `GET_ACTIVE_OFFER_ID`,
  // GET_SORTING_OPTION: `GET_SORTING_OPTION`,
  // DROP_DOWN_MENU_OPTION_CHANGE: `DROP_DOWN_MENU_OPTION_CHANGE`,
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
  // getSortingOption: (string) => ({
  //   type: ActionType.GET_SORTING_OPTION,
  //   payload: string,
  // }),
  // dropDownMenuOptionChange: () => ({
  //   type: ActionType.DROP_DOWN_MENU_OPTION_CHANGE,
  // }),
};
