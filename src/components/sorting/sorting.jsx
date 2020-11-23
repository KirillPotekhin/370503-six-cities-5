import React from "react";
import {SortingOption} from "../../const";
import applicationPropTypes from "../../application-prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";

const Sorting = (props) => {
  const sortingOption = props.sortingOption;
  const onClickDropDownOption = () => {
    return () => props.dropDownMenuOptionChange();
  };
  const onClickSortingOption = (value) => {
    return () => props.getSortingOption(value);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onClickDropDownOption()}>
        {sortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${props.isOptionOpened && `places__options--opened`}`}>
        {SortingOption.map((option) => (
          <li key={option.method} className={`places__option ${option.method === sortingOption && `places__option--active`}`} tabIndex="0" onClick={onClickSortingOption(option.method)}>{option.method}</li>
        ))}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  sortingOption: applicationPropTypes.sortingOption,
  getSortingOption: applicationPropTypes.getSortingOption,
  isOptionOpened: applicationPropTypes.isOptionOpened,
  dropDownMenuOptionChange: applicationPropTypes.dropDownMenuOptionChange,
};

const mapStateToProps = (state) => ({
  sortingOption: state.sortingOption,
  isOptionOpened: state.isOptionOpened,
});

const mapDispatchToProps = (dispatch) => ({
  getSortingOption(sortingOption) {
    dispatch(ActionCreator.getSortingOption(sortingOption));
  },
  dropDownMenuOptionChange() {
    dispatch(ActionCreator.dropDownMenuOptionChange());
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
