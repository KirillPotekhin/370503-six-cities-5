import React, {Fragment} from "react";
import applicationPropTypes from "../../application-prop-types";

const RatingItem = (props) => {
  const {ratingTitle, value, rating} = props;
  const onRatingChange = (evt) => {
    props.onRatingChange(evt, `rating`);
  };
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" value={value} id={`${value}-stars`} type="radio" checked={rating === value} required onChange={onRatingChange}/>
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={ratingTitle}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
};

RatingItem.propTypes = {
  ratingTitle: applicationPropTypes.ratingTitle,
  value: applicationPropTypes.value,
  rating: applicationPropTypes.rating,
  onRatingChange: applicationPropTypes.onRatingChange,
};

export default RatingItem;
