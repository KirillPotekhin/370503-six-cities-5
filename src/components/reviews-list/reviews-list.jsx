import React, {Fragment} from "react";
import PropTypes from "prop-types";
import Review from "../review/review";
import applicationPropTypes from "../../application-prop-types";

const ReviewsList = (props) => {
  const {reviews} = props;
  return (
    <Fragment>
      {reviews.slice(0, 10).map((review, i) => (
        <li key={`${review.text}${i}`} className="reviews__item">
          <Review
            review={review}
          />
        </li>
      ))}
    </Fragment>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(applicationPropTypes.review).isRequired,
};

export default ReviewsList;
