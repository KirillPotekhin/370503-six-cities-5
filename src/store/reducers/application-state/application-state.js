import {extend} from "../../../utils";
import {ActionType} from "../../action";
import {SortingOption} from "../../../const";

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
  sortingOption: SortingOption.POPULAR,
  openedHotel: null,
  postReviewLoading: false,
  postReviewLoaded: false,
  errorMessage: ``,
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
        city: action.payload,
      });

    case ActionType.SET_SORTING_OPTION:
      return extend(state, {
        sortingOption: action.payload,
      });

    case ActionType.SET_SORTING_OPTION_DEFAULT:
      return extend(state, {
        sortingOption: SortingOption.POPULAR,
      });

    case ActionType.GET_OPENED_HOTEL:
      return extend(state, {
        openedHotel: action.payload.offers[0],
      });

    case ActionType.POST_REVIEW_START:
      return extend(state, {
        postReviewLoading: true,
        postReviewLoaded: false,
      });

    case ActionType.POST_REVIEW_SUCCES:
      return extend(state, {
        postReviewLoading: false,
        postReviewLoaded: true,
        errorMessage: ``,
      });

    case ActionType.POST_REVIEW_FAILED:
      return extend(state, {
        postReviewLoading: false,
      });

    case ActionType.SHOW_ERROR_MESSAGES:
      return extend(state, {
        errorMessage: action.payload,
      });

    case ActionType.SET_FAVORITE_STATUS_TO_OFFER:
      if (state.openedHotel && state.openedHotel.id === action.payload.id) {
        return extend(state, {
          openedHotel: extend(state.openedHotel, {isFavorite: action.payload.isFavorite})
        });
      }
  }

  return state;
};

export {applicationState};
