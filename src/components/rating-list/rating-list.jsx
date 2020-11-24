import React, {Fragment} from "react";
// import PropTypes from "prop-types";
// import applicationPropTypes from "../../application-prop-types";
import {ReviewRatingTitle} from "../../const";
import RatingItem from "../rating-item/rating-item";

const RatingList = (props) => {
  const reviewRatingTitleList = Object.keys(ReviewRatingTitle);
  return (
    <Fragment>
      {reviewRatingTitleList.map((ratingTitle, i) => (
        <RatingItem
          key={`${ReviewRatingTitle.ratingTitle}${i}`}
          ratingTitle={ReviewRatingTitle[ratingTitle]}
          value={reviewRatingTitleList.length - i}
          {...props}
        />
      ))}
    </Fragment>
  );
};

RatingList.propTypes = {
  // ratingTitles: PropTypes.arrayOf(applicationPropTypes.ratingTitle).isRequired,
};

export default RatingList;
