import React from "react";
import RatingList from "../rating-list/rating-list";
import applicationPropTypes from "../../application-prop-types";
import withData from "../../hocs/with-data";

const FeedbackForm = (props) => {
  const {onSubmitReview, onRatingChange, onTextareaChange, postReviewLoading, review} = props;
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitReview}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" name="rating" onChange={onRatingChange}>
        <RatingList />
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" minLength="50" placeholder="Tell how was your stay, what you like and what can be improved" onChange={onTextareaChange} value={review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={postReviewLoading}>Submit</button>
      </div>
    </form>
  );
};

FeedbackForm.propTypes = {
  onSubmitReview: applicationPropTypes.onSubmitReview,
  onRatingChange: applicationPropTypes.onRatingChange,
  onTextareaChange: applicationPropTypes.onTextareaChange,
  postReviewLoading: applicationPropTypes.postReviewLoading,
  review: applicationPropTypes.review,
};

export default withData(FeedbackForm);
