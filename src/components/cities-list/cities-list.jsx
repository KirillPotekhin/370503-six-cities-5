import React, {PureComponent} from "react";
import applicationPropTypes from "../../application-prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

class CitiesList extends PureComponent {
  constructor(props) {
    super(props);

  }

  onClickCityName(value) {
    return () => this.props.cityChange(value);
  }

  componentDidMount() {
    this.props.getCities();
    this.props.getDefaultCity();
  }

  render() {
    const {cities, city} = this.props;

    return (
      <ul className="locations__list tabs__list">
        {cities.map((it, i) => (
          <li key={`${it.name}${i}`} className="locations__item">
            <a className={`locations__item-link tabs__item tabs__item ${it.name === city.name && `tabs__item--active`}`} href="#" onClick={this.onClickCityName(it)}>
              <span>{it.name}</span>
            </a>
          </li>
        ))}
      </ul>
    );
  }
}

CitiesList.propTypes = {
  cities: applicationPropTypes.cities,
  city: applicationPropTypes.city,
  getCities: applicationPropTypes.getCities,
  cityChange: applicationPropTypes.cityChange,
  getDefaultCity: applicationPropTypes.getDefaultCity,
};

const mapStateToProps = (state) => ({
  cities: state.cities,
  city: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  cityChange(cityValue) {
    dispatch(ActionCreator.cityChange(cityValue));
  },
  getCities() {
    dispatch(ActionCreator.getCities());
  },
  getDefaultCity() {
    dispatch(ActionCreator.getDefaultCity());
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
