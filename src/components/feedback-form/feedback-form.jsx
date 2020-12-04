import React, {useState, useCallback, useEffect} from "react";
import RatingList from "../rating-list/rating-list";
import {connect} from "react-redux";
import {postReview} from "../../store/api-actions";
import applicationPropTypes from "../../application-prop-types";
import {extend} from "../../utils";

const FeedbackForm = (props) => {
  const {postReviewLoading, errorMessage, postReviewLoaded} = props;
  const [reviewInfo, setReviewInfo] = useState({rating: ``, review: ``});

  useEffect(() => {
    setReviewInfo({
      rating: ``,
      review: ``
    });
  }, [postReviewLoaded]);

  const handleSubmit = useCallback((evt) => {
    const {onSubmit} = props;

    evt.preventDefault();
    onSubmit(
        props.id,
        {
          comment: reviewInfo.review,
          rating: reviewInfo.rating,
        });
  }, [reviewInfo.review, reviewInfo.rating]);

  const handleFieldChange = useCallback((name) => {
    return (evt) => (setReviewInfo(extend(reviewInfo, {
      [name]: evt.target.value
    })));
  }, [reviewInfo.review, reviewInfo.rating]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating" name="rating" onChange={handleFieldChange(`rating`)}>
        <RatingList rating={reviewInfo.rating} onRatingChange={handleFieldChange(`rating`)}/>
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" minLength="50" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleFieldChange(`review`)} value={reviewInfo.review}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          {errorMessage !== `` && errorMessage}
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={postReviewLoading}>Submit</button>
      </div>
    </form>
  );
};

FeedbackForm.propTypes = {
  errorMessage: applicationPropTypes.errorMessage,
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

export {FeedbackForm};
export default connect(mapStateToProps, mapDispatchToProps)(FeedbackForm);
