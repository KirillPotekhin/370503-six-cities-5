import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import reviews from "../mocks/reviews";
import cities from "../mocks/cities";

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
  }

  return state;
};

export {reducer};
