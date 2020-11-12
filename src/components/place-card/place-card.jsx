import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import applicationPropTypes from "../../application-prop-types";

class PlaceCard extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerMouseEnter = this.props.handlerMouseEnter.bind(this);
    this.handlerMouseLeave = this.props.handlerMouseLeave.bind(this);
  }

  render() {
    const {history, offer} = this.props;
    const {id, isPremium, images, name, price, type, isFavorite} = offer;
    return (
      <article id={id} className="cities__place-card place-card" onClick={() => history.push(`/offer/${id}`)} onMouseEnter={this.handlerMouseEnter} onMouseLeave={this.handlerMouseLeave}>
        {isPremium ?
          <div className="place-card__mark">
            <span>Premium</span>
          </div> : ``
        }
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img className="place-card__image" src={images[0].src} width="260" height="200" alt={`${name} image`} />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
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
  history: PropTypes.any,
  offer: applicationPropTypes.offer,
  handlerMouseEnter: PropTypes.func.isRequired,
  handlerMouseLeave: PropTypes.func.isRequired,
};

export default PlaceCard;
