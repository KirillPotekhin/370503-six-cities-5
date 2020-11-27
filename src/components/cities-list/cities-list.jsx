import React, {PureComponent} from "react";
import applicationPropTypes from "../../application-prop-types";
import {connect} from "react-redux";
import {cityChange, getCities, getDefaultCity} from "../../store/action";

class CitiesList extends PureComponent {
  constructor(props) {
    super(props);

  }

  onClickCityName(value) {
    return () => this.props.cityChangeAction(value);
  }

  componentDidMount() {
    // this.props.getCitiesAction();
    // this.props.getDefaultCityAction();
  }

  render() {
    const {cities, city} = this.props;
    console.log(cities);

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
  // getCitiesAction: applicationPropTypes.getCitiesAction,
  cityChangeAction: applicationPropTypes.cityChangeAction,
  // getDefaultCityAction: applicationPropTypes.getDefaultCityAction,
};

const mapStateToProps = ({DATA, STATE}) => ({
  cities: DATA.cities,
  city: STATE.city,
});

const mapDispatchToProps = (dispatch) => ({
  cityChangeAction(cityValue) {
    dispatch(cityChange(cityValue));
  },
  // getCitiesAction() {
  //   dispatch(getCities());
  // },
  // getDefaultCityAction() {
  //   dispatch(getDefaultCity());
  // }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
