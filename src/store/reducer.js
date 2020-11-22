import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import reviews from "../mocks/reviews";
import cities from "../mocks/cities";
import {SortingOption} from "../const";

const initialState = {
  offers: [],
  reviews,
  city: {
    location: {
      latitude: ``,
      longitude: ``,
      zoom: ``,
    },
    name: ``
  },
  cities: [],
  active: ``,
  sortingOption: SortingOption[0].method,
  isOptionOpened: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers,
      });

    case ActionType.GET_CITIES:
      return extend(state, {
        cities,
        city: cities[0],
      });

    case ActionType.GET_ACTIVE_OFFER_ID:
      return extend(state, {
        active: action.payload,
      });

    case ActionType.GET_SORTING_METHOD:
      return extend(state, {
        sortingOption: action.payload,
        isOptionOpened: !state.isOptionOpened,
      });
    case ActionType.DROP_DOWN_MENU_OPTION_CHANGE:
      return extend(state, {
        isOptionOpened: !state.isOptionOpened,
      });
  }

  return state;
};

export {reducer};
