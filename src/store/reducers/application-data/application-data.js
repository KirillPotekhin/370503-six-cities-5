import {extend} from "../../../utils";
import {ActionType} from "../../action";
import offers from "../../../mocks/offers";
import reviews from "../../../mocks/reviews";
import cities from "../../../mocks/cities";

const initialState = {
  offers: [],
  reviews: [],
  cities: [],
};

const applicationData = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.LOAD_REVIEWS:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.GET_CITIES:
      // const citiesList = new Set();
      // action.payload.forEach((it) => citiesList.add(it.city.name));
      // const cities = [];
      // citiesList.forEach((cityItem) => cities.push(action.payload.find((offer) => offer.city.name === cityItem).city));

      return extend(state, {
        cities,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        offers,
      });

    case ActionType.GET_REVIEWS:
      return extend(state, {
        reviews,
      });
  }

  return state;
};

export {applicationData};
