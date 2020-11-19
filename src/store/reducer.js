import {extend} from "../utils";
import {ActionType} from "./action";
import offers from "../mocks/offers";
import reviews from "../mocks/reviews";

const initialState = {
  offers,
  reviews,
  city: `Amsterdam`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.RECEIVING_CURRENT_OFFERS:
      return extend(state, {
        offers,
      });
  }

  return state;
};

export {reducer};
