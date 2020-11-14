import PropTypes from "prop-types";

const applicationPropTypes = {
  rentalOffers: PropTypes.number.isRequired,
  offer: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.shape({
      location: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired,
        zoom: PropTypes.number.isRequired,
      }).isRequired,
      city: PropTypes.string.isRequired,
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
  reviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  })).isRequired,
};

export default applicationPropTypes;
