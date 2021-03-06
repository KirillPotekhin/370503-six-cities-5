import React, {PureComponent} from "react";
import {connect} from "react-redux";
import {postReview} from "../../store/api-actions";
import applicationPropTypes from "../../application-prop-types";

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
      const {onSubmit} = this.props;

      evt.preventDefault();

      onSubmit(
          this.props.id,
          {
            comment: this.state.review,
            rating: this.state.rating,
          });
    }

    handleFieldChange(evt, name) {
      const {value} = evt.target;
      return (this.setState({[name]: value}));
    }

    componentDidUpdate(prevProps) {
      if (this.props.postReviewLoaded !== prevProps.postReviewLoaded && this.props.postReviewLoaded) {
        this.setState({
          rating: ``,
          review: ``,
        });
      }
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
          postReviewLoading={this.props.postReviewLoading}
        />
      );
    }
  }

  WithData.propTypes = {
    id: applicationPropTypes.id,
    onSubmit: applicationPropTypes.onSubmit,
    postReviewLoaded: applicationPropTypes.postReviewLoaded,
    postReviewLoading: applicationPropTypes.postReviewLoading,
  };

  const mapStateToProps = ({STATE}) => ({
    postReviewLoading: STATE.postReviewLoading,
    postReviewLoaded: STATE.postReviewLoaded,
  });

  const mapDispatchToProps = (dispatch) => ({
    onSubmit(id, {comment, rating}) {
      dispatch(postReview(id, {comment, rating}));
    }
  });

  return connect(mapStateToProps, mapDispatchToProps)(WithData);
};

export default withData;
