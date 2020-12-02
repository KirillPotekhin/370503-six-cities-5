import React, {useState} from "react";
import applicationPropTypes from "../../application-prop-types";
import {setSortingOption} from "../../store/action";
import {connect} from "react-redux";

const withActiveFlag = (Component) => {

  const WithActiveFlag = (props) => {
    const [isActive, setIsActive] = useState(false);
    const handleActiveChange = () => {
      setIsActive((prevState) => ({isActive: !prevState.isActive}));
    };

    const setSortingDropDown = (value) => {
      return () => {
        handleActiveChange();
        props.setSortingOptionAction(value);
      };
    };
    return (
      <Component
        {...props}
        isActive={isActive}
        onActiveChange={() => handleActiveChange}
        onClickSortingOption={setSortingDropDown}
      />
    );
  };

  WithActiveFlag.propTypes = {
    setSortingOptionAction: applicationPropTypes.setSortingOptionAction,
  };

  const mapDispatchToProps = (dispatch) => ({
    setSortingOptionAction(value) {
      dispatch(setSortingOption(value));
    },
  });

  return connect(null, mapDispatchToProps)(WithActiveFlag);
};

export default withActiveFlag;
