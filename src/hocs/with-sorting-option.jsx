import React, {PureComponent} from "react";
import {SortingOption} from "../const";

const withSortingOption = (Component) => {
  class WithSortingOption extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        sortingOption: SortingOption.POPULAR,
      };

      this.getSortingOption = this.getSortingOption.bind(this);
    }

    getSortingOption(value) {
      return this.setState(() => ({
        sortingOption: value,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          sortingOption={this.state.sortingOption}
          onChangeSortingOption={this.getSortingOption}
        />
      );
    }
  }

  WithSortingOption.propTypes = {};

  return WithSortingOption;
};

export default withSortingOption;
