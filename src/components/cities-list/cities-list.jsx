import React from "react";
import PropTypes from "prop-types";
import applicationPropTypes from "../../application-prop-types";
import {connect} from "react-redux";
import {cityChange} from "../../store/action";

const CitiesList = (props) => {
  const {cities, city} = props;
  const onClickCityName = (value) => {
    return () => props.cityChangeAction(value);
  };

  return (
    <ul className="locations__list tabs__list">
      {cities.map((it, i) => (
        <li key={`${it.name}${i}`} className="locations__item">
          <a className={`locations__item-link tabs__item tabs__item ${it.name === city.name && `tabs__item--active`}`} href="#" onClick={onClickCityName(it)}>
            <span>{it.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(applicationPropTypes.city).isRequired,
  city: applicationPropTypes.city,
  cityChangeAction: applicationPropTypes.cityChangeAction,
};

const mapStateToProps = ({DATA, STATE}) => ({
  cities: DATA.cities,
  city: STATE.city,
});

const mapDispatchToProps = (dispatch) => ({
  cityChangeAction(cityValue) {
    dispatch(cityChange(cityValue));
  },
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
