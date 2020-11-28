import {extend} from "../../../utils";
import {ActionType} from "../../action";
import reviews from "../../../mocks/reviews";

const initialState = {
  offers: [],
  reviews: [],
  cities: [],
};

const applicationData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload.offers,
        cities: action.payload.cities,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews,
      });
  }

  return state;
};

export {applicationData};
