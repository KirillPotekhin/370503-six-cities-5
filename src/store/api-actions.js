import {loadOffers, loadReviews, requireAuthorization, redirectToRoute, getUserEmail} from "./action";
import {AuthorizationStatus} from "../const";
import {adapterData, getDefaultCity} from "../store/action";

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => {
      const information = adapterData(data);
      dispatch(getDefaultCity(information.cities[0]));
      dispatch(loadOffers(information));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(getUserEmail(data));
    })
    .then(() => dispatch(redirectToRoute(`/`)))
);

export const fetchReviewList = () => (dispatch, _getState, api) => (
  api.get(`/comments/:hotel_id`)
    .then(({data}) => dispatch(loadReviews(data)))
);
