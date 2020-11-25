import React, {PureComponent} from "react";

const withData = (Component) => {
  class WithData extends PureComponent {
    constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFieldChange = this.handleFieldChange.bind(this);

      this.state = {
        rating: ``,
        review: ``,
      };
    }

    handleSubmit(evt) {
      return () => evt.preventDefault();
    }

    handleFieldChange(evt) {
      const {name, value} = evt.target;
      return (this.setState({[name]: value}));
    }

    render() {
      return (
        <Component
          {...this.props}
          onSubmitReview={this.handleSubmit}
          rating={this.state.rating}
          review={this.state.review}
          onRatingChange={this.handleFieldChange}
          onTextareaChange={this.handleFieldChange}

        />
      );
    }
  }

  WithData.propTypes = {};

  return WithData;
};

export default withData;
