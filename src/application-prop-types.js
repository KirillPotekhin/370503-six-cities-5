import PropTypes from "prop-types";

const applicationPropTypes = {
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
    isPremium: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
    })).isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    adults: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    goods: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  cities: PropTypes.array.isRequired,
  city: PropTypes.object,
  getCities: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired,
  cityChange: PropTypes.func.isRequired,
  getActiveOfferId: PropTypes.func.isRequired,
  active: PropTypes.any,
};

export default applicationPropTypes;
