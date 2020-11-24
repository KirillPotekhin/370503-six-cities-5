import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import applicationPropTypes from "../../application-prop-types";
import PlacesList from "../places-list/places-list";
import {SizePreviewImage} from "../../const";

class FavoritesOfferScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: ``,
    };
  }

  render() {
    const {offers, history} = this.props;
    const favorites = offers.filter((it) => it.isFavorite);
    const cities = new Set();
    favorites.forEach((it) => cities.add(it.city.name));
    const filteredFavorites = [];
    Array.from(cities).forEach((it) => filteredFavorites.push(favorites.filter((favorite) => favorite.city.name === it)));
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
                      <PlacesList
                        offers={filteredFavorites[i]}
                        classNameHeaderCard={`favorites`}
                        widthPreview={SizePreviewImage.WIDTH_PREVIEW_FOR_FAVORITES}
                        heightPreview={SizePreviewImage.HEIGHT_PREVIEW_FOR_FAVORITES}
                        classNameInfoCard={`favorites__card-info`}
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
  history: PropTypes.any,
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
};

export default FavoritesOfferScreen;
