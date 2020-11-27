import {extend} from "../utils";
import {ActionType} from "./action";

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
      const citiesList = new Set();
      action.payload.forEach((it) => citiesList.add(it.city.name));
      const cities = [];
      citiesList.forEach((cityItem) => cities.push(action.payload.find((offer) => offer.city.name === cityItem).city));

      return extend(state, {
        cities,
      });
  }

  return state;
};

export {applicationData};
