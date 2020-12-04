import React, {useState, useCallback} from "react";
import {SortingOption} from "../../const";
import applicationPropTypes from "../../application-prop-types";
import {connect} from "react-redux";
import {setSortingOption} from "../../store/action";

const Sorting = (props) => {
  const {sortingOption, setSortingOptionAction} = props;
  const [isActive, setIsActive] = useState(false);
  const handleActiveChange = useCallback(() => {
    setIsActive((prevState) => (!prevState));
  }, [isActive]);

  const onSortingDropDown = useCallback((value) => {
    return () => {
      handleActiveChange();
      setSortingOptionAction(value);
    };
  }, [isActive]);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleActiveChange}>
        {sortingOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isActive && `places__options--opened`}`}>
        {Object.keys(SortingOption).map((option) => (
          <li key={SortingOption[option]} className={`places__option ${SortingOption[option] === sortingOption && `places__option--active`}`} tabIndex="0" onClick={onSortingDropDown(SortingOption[option])}>{SortingOption[option]}</li>
        ))}
      </ul>
    </form>
  );
};

Sorting.propTypes = {
  sortingOption: applicationPropTypes.sortingOption,
  setSortingOptionAction: applicationPropTypes.setSortingOptionAction,
};

const mapStateToProps = ({STATE}) => ({
  sortingOption: STATE.sortingOption,
});

const mapDispatchToProps = (dispatch) => ({
  setSortingOptionAction(value) {
    dispatch(setSortingOption(value));
  },
});

export {Sorting};

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
