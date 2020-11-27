import {extend} from "../utils";
import {ActionType} from "./action";

const initialState = {
  city: {
    location: {
      latitude: ``,
      longitude: ``,
      zoom: ``,
    },
    name: ``
  },
  active: ``,
};

const applicationState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CITY_CHANGE:
      return extend(state, {
        city: action.payload,
      });

    case ActionType.GET_ACTIVE_OFFER_ID:
      return extend(state, {
        active: action.payload,
      });

    case ActionType.GET_DEFAULT_CITY:
      return extend(state, {
        city: state.cities[0],
      });
  }

  return state;
};

export {applicationState};
