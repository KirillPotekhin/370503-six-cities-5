import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import PlacesList from "../places-list/places-list";
import applicationPropTypes from "../../application-prop-types";
import Map from "../map/map";
import CitiesList from "../cities-list/cities-list";
import Sorting from "../sorting/sorting";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getFilteredOffers} from "../../utils";
import {SortingOption} from "../../const";

class WelcomeScreen extends PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.getOffers();
  }

  render() {
    const {history, offers, city, getActiveOfferId, sortingOption} = this.props;
    switch (sortingOption) {
      case SortingOption[0].method:
        this.filteredOffers = getFilteredOffers(offers, city);
        break;
      case SortingOption[1].method:
        this.filteredOffers.sort((a, b) => a.price - b.price);
        break;
      case SortingOption[2].method:
        this.filteredOffers.sort((a, b) => b.price - a.price);
        break;
      case SortingOption[3].method:
        this.filteredOffers.sort((a, b) => b.rating - a.rating);
        break;
    }
    return (
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
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

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesList />
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                {city && <b className="places__found">{this.filteredOffers.length} places to stay in {city.name}</b>}
                <Sorting />
                <div className="cities__places-list places__list tabs__content">
                  <PlacesList
                    offers={this.filteredOffers}
                    onClickCard={(offerId) => {
                      return function () {
                        history.push(`/offer/${offerId}`);
                      };
                    }}
                    handlerMouseEnter={(evt) => {
                      evt.preventDefault();
                      const activeId = evt.currentTarget.id;
                      getActiveOfferId(activeId);
                    }}
                    handlerMouseLeave={() => getActiveOfferId(``)}
                  />
                </div>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {city && <Map />}
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

WelcomeScreen.propTypes = {
  history: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
  sortingOption: applicationPropTypes.sortingOption,
  getOffers: applicationPropTypes.getOffers,
  getActiveOfferId: applicationPropTypes.getActiveOfferId,
  city: applicationPropTypes.city,
  active: applicationPropTypes.active,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  active: state.active,
  sortingOption: state.sortingOption,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveOfferId(value) {
    dispatch(ActionCreator.getActiveOfferId(value));
  },
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
});

export {WelcomeScreen};
export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
