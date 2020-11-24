import React, {Fragment} from "react";
import applicationPropTypes from "../../application-prop-types";

const RatingItem = (props) => {
  const {ratingTitle, value} = props;
  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" />
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
};

export default RatingItem;
