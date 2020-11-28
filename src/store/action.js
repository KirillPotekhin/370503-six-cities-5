export const ActionType = {
  CITY_CHANGE: `CITY CHANGE`,
  GET_OFFERS: `GET_OFFERS`,
  GET_CITIES: `GET_CITIES`,
  GET_ACTIVE_OFFER_ID: `GET_ACTIVE_OFFER_ID`,
  GET_REVIEWS: `GET_REVIEWS`,
  GET_DEFAULT_CITY: `GET_DEFAULT_CITY`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_REVIEWS: `LOAD_REVIEWS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_ACTIVE_CITY: `GET_ACTIVE_CITY`,
  SET_SORTING_OPTION: `SET_SORTING_OPTION`,
  SET_SORTING_OPTION_DEFAULT: `SET_SORTING_OPTION_DEFAULT`,
};

export const cityChange = (string) => ({
  type: ActionType.CITY_CHANGE,
  payload: string,
});

export const getOffers = () => ({
  type: ActionType.GET_OFFERS,
});

export const getCities = () => ({
  type: ActionType.GET_CITIES,
});

export const getActiveOfferId = (string) => ({
  type: ActionType.GET_ACTIVE_OFFER_ID,
  payload: string,
});

export const getReviews = () => ({
  type: ActionType.GET_REVIEWS,
});

export const getDefaultCity = (city) => ({
  type: ActionType.GET_DEFAULT_CITY,
  payload: city,
});

export const getActiveCity = () => ({
  type: ActionType.GET_ACTIVE_CITY,
});

export const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

export const loadReviews = (reviews) => ({
  type: ActionType.LOAD_REVIEWS,
  payload: reviews,
});

export const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

export const setSortingOption = (option) => ({
  type: ActionType.SET_SORTING_OPTION,
  payload: option,
});

export const setSortingOptionDefault = () => ({
  type: ActionType.SET_SORTING_OPTION_DEFAULT,
});

export const adapterData = (data) => {
  const offers = [];
  let offer = {};
  const citiesList = new Set();
  const cities = [];

  for (let i = 0; i < data.length; i++) {
    citiesList.add(data[i].city.name);
    offer.id = data[i].id;
    offer.isPremium = data[i].is_premium;
    offer.isFavorite = data[i].is_favorite;
    offer.previewImage = data[i].preview_image;
    offer.images = data[i].images;
    offer.goods = data[i].goods;
    offer.bedrooms = data[i].bedrooms;
    offer.maxGuestsNumber = data[i].max_adults;
    offer.description = data[i].description;
    offer.host = {};
    offer.host.avatar = data[i].host.avatar_url;
    offer.host.name = data[i].host.name;
    offer.host.isPro = data[i].host.is_pro;
    offer.host.id = data[i].host.id;
    offer.price = data[i].price;
    offer.rating = data[i].rating;
    offer.title = data[i].title;
    offer.type = data[i].type;
    offer.city = {};
    offer.city.name = data[i].city.name;
    offer.city.location = {};
    offer.city.location.latitude = data[i].city.location.latitude;
    offer.city.location.longitude = data[i].city.location.longitude;
    offer.city.location.zoom = data[i].city.location.zoom;
    offer.location = {};
    offer.location.latitude = data[i].location.latitude;
    offer.location.longitude = data[i].location.longitude;
    offer.location.zoom = data[i].location.zoom;

    offers.push(offer);
    offer = {};
  }

  citiesList.forEach((cityItem) => cities.push(data.find((it) => it.city.name === cityItem).city));
  const information = {offers, cities};

  return information;
};
