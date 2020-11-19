import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list";
import FeedbackForm from "../feedback-form/feedback-form";
import PlacesList from "../places-list/places-list";
import applicationPropTypes from "../../application-prop-types";
import getStarValue from "../../getStarValue";
import Map from "../map/map";

class OfferScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: ``,
    };
  }

  render() {
    const {location, history, offers, reviews} = this.props;
    const path = location.pathname.split(`/`);
    const offer = offers.find((it) => it.id === path[path.length - 1]);
    const {id, isPremium, images, name, price, type, isFavorite, rating, bedrooms, adults, goods, host, avatar, description, city} = offer;
    const actualReviews = reviews.filter((review) => review.id === id).sort((a, b) => b.date - a.date);
    const actualOffers = offers.filter((it) => it.city.name === city.name && it.id !== id);

    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to="/" className="header__logo-link">
                  <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {images.map((image, i) => (
                  <div key={`${image.src}${i}offerscreen`} className="property__image-wrapper">
                    <img className="property__image" src={image.src} alt={`${name} ${i}`} />
                  </div>
                ))}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium ?
                  <div className="property__mark">
                    <span>Premium</span>
                  </div> : ``}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {name}
                  </h1>
                  <button className={`property__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``} button`} type="button">
                    <svg className="property__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${getStarValue(rating)}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {type}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms} Bedrooms
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {adults} adults
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {goods.map((good, i) => (
                      <li key={`${good}${i}`} className="property__inside-item">
                        {good}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={avatar} width="74" height="74" alt={`${host} avatar`} />
                    </div>
                    <span className="property__user-name">
                      {host}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{actualReviews.length}</span></h2>
                  <ul className="reviews__list">
                    <ReviewsList reviews={actualReviews} />
                  </ul>
                  <FeedbackForm />
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map offers={actualOffers} cityName={city.name} active={this.state.active} activeOffer={offer}/>
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                <PlacesList
                  offers={actualOffers.slice(0, 3)}
                  onClickCard={(offerId) => {
                    return function () {
                      history.push(`/offer/${offerId}`);
                    };
                  }}
                  handlerMouseEnter={(evt) => {
                    evt.preventDefault();
                    const activeId = evt.currentTarget.id;
                    this.setState({active: activeId});
                  }}
                  handlerMouseLeave={() => this.setState({active: ``})}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

OfferScreen.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
  reviews: PropTypes.arrayOf(applicationPropTypes.review).isRequired,
};

export default OfferScreen;
