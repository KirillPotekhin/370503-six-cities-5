import React, {PureComponent} from "react";
import applicationPropTypes from "../application-prop-types";
import {SortingOption} from "../const";

const withActiveFlag = (Component) => {
  class WithActiveFlag extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isActive: false,
        sortingOption: SortingOption.POPULAR,
      };

      this.handleActiveChange = this.handleActiveChange.bind(this);
      this.getSortingOption = this.getSortingOption.bind(this);
    }

    handleActiveChange() {
      this.setState((prevState) => ({isActive: !prevState.isActive}));
    }

    getSortingOption(value) {
      return () => {
        this.setState(() => ({
          sortingOption: value,
        }));
        // this.props.onChangeSortingOption(value);
        this.handleActiveChange();
      };
    }

    render() {
      return (
        <Component
          {...this.props}
          isActive={this.state.isActive}
          sortingOption={this.state.sortingOption}
          onActiveChange={() => this.handleActiveChange}
          onClickSortingOption={this.getSortingOption}
        />
      );
    }
  }

  WithActiveFlag.propTypes = {
    // onChangeSortingOption: applicationPropTypes.onChangeSortingOption,
  };

  return WithActiveFlag;
};

export default withActiveFlag;
