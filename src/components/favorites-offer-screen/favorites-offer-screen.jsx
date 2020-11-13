import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import applicationPropTypes from "../../application-prop-types";

class FavoritesOfferScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.handlerMouseEnter = this.handlerMouseEnter.bind(this);
    this.handlerMouseLeave = this.handlerMouseLeave.bind(this);

    this.state = {
      active: ``,
    };
  }

  handlerMouseEnter(evt) {
    evt.preventDefault();
    const id = evt.currentTarget.id;
    this.setState({active: id});
  }

  handlerMouseLeave() {
    this.setState({active: ``});
  }

  render() {
    const {offers} = this.props;
    const favorites = offers.filter((it) => it.isFavorite);
    const cities = new Set();
    favorites.forEach((it) => cities.add(it.city));
    const filteredFavorites = [];
    Array.from(cities).forEach((it) => filteredFavorites.push(favorites.filter((favorite) => favorite.city === it)));
    return (
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
                </a>
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

        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {Array.from(cities).map((city, i) => (
                  <li key={`${city}${i}`} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {filteredFavorites[i].map((offer) => (
                        <article key={`${offer.images[2].src}${i}`} id={offer.id} className="favorites__card place-card" onMouseEnter={this.handlerMouseEnter} onMouseLeave={this.handlerMouseLeave}>
                          <div className="favorites__image-wrapper place-card__image-wrapper">
                            <a href="#">
                              <img className="place-card__image" src={offer.images[0].src} width="150" height="110" alt="Place image" />
                            </a>
                          </div>
                          <div className="favorites__card-info place-card__info">
                            <div className="place-card__price-wrapper">
                              <div className="place-card__price">
                                <b className="place-card__price-value">&euro;{offer.price}</b>
                                <span className="place-card__price-text">&#47;&nbsp;night</span>
                              </div>
                              <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                                <svg className="place-card__bookmark-icon" width="18" height="19">
                                  <use xlinkHref="#icon-bookmark"></use>
                                </svg>
                                <span className="visually-hidden">In bookmarks</span>
                              </button>
                            </div>
                            <div className="place-card__rating rating">
                              <div className="place-card__stars rating__stars">
                                <span style={{width: `100%`}}></span>
                                <span className="visually-hidden">Rating</span>
                              </div>
                            </div>
                            <h2 className="place-card__name">
                              <a href="#">{offer.name}</a>
                            </h2>
                            <p className="place-card__type">{offer.type}</p>
                          </div>
                        </article>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <a className="footer__logo-link" href="main.html">
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </a>
        </footer>
      </div>
    );
  }
}

FavoritesOfferScreen.propTypes = {
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
};

export default FavoritesOfferScreen;
