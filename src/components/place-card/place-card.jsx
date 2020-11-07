import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    // this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
    // this.handlerMouseLeave = this.handlerMouseLeave.bind(this);
  }

  // handlerMouseEnter(evt) {
  //   evt.preventDefault();
  //   evt.target.style.background = `red`;
  // }

  // handlerMouseLeave(evt) {
  //   evt.preventDefault();
  //   evt.target.style.background = `transparent`;
  // }

  render() {
    const {handlerMouseEnter, handlerMouseLeave, offers} = this.props;
    const {isMark, images, name, price, type} = offers;
    return (
      <article className="cities__place-card place-card" onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
        {isMark ?
          `<div className="place-card__mark">
            <span>Premium</span>
          </div>` : ``
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={images.src} width="260" height="200" alt={`${name} image`} />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `80%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>
    );
  }
}

PlaceCard.propTypes = {
  handlerMouseEnter: PropTypes.func.isRequired,
  handlerMouseLeave: PropTypes.func.isRequired,
  offers: PropTypes.shape({
    id: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    isMark: PropTypes.bool.isRequired,
    images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
    })).isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    bedrooms: PropTypes.string.isRequired,
    adults: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    inside: PropTypes.arrayOf(PropTypes.string).isRequired,
    host: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PlaceCard;
