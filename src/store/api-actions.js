import {loadOffers, loadReviews, requireAuthorization} from "./action";
import {AuthorizationStatus} from "../const";
import {adapterData, getDefaultCity} from "../store/action";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const information = adapterData(data);
      console.log(information);
      dispatch(getDefaultCity(information.cities[0]));
      dispatch(loadOffers(information));
    })
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const fetchReviewList = () => (dispatch, _getState, api) => (
  api.get(`/comments/:hotel_id`)
    .then(({data}) => dispatch(loadReviews(data)))
);
