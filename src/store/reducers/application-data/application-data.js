import {extend} from "../../../utils";
import {ActionType} from "../../action";
// import reviews from "../../../mocks/reviews";

const initialState = {
  offers: [],
  reviews: [],
  cities: [],
  offersNearby: [],
  offersFavorites: [],
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

    case ActionType.LOAD_OFFERS_NEARBY:
      return extend(state, {
        offersNearby: action.payload.offers,
      });

    case ActionType.POST_REVIEW_SUCCES:
      return extend(state, {
        reviews: action.payload,
      });

    case ActionType.LOAD_OFFERS_FAVORITES:
      return extend(state, {
        offersFavorites: action.payload.offers,
      });

    case ActionType.SET_FAVORITE_STATUS_TO_OFFER:
      return extend(state, {
        offers: state.offers.map((offer) => offer.id === action.payload.id ? action.payload : offer),
      });

  }

  return state;
};

export {applicationData};
