import React, {PureComponent, Fragment} from "react";
import {ReviewRatingTitle} from "../../const";
import RatingList from "../rating-list/rating-list";

class FeedbackForm extends PureComponent {
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
    evt.preventDefault();
  }

  handleFieldChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  render() {
    // const reviewRatingTitleList = Object.keys(ReviewRatingTitle);
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this.handleSubmit}>
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating" name="rating" onChange={this.handleFieldChange}>
          {/* {reviewRatingTitleList.map((ratingTitle, i) => (
            <Fragment key={`${ReviewRatingTitle.ratingTitle}${i}`}>
              <input className="form__rating-input visually-hidden" name="rating" value={reviewRatingTitleList.length - i} id={`${reviewRatingTitleList.length - i}-stars`} type="radio" />
              <label htmlFor={`${reviewRatingTitleList.length - i}-stars`} className="reviews__rating-label form__rating-label" title={ReviewRatingTitle[ratingTitle]}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))} */}
          <RatingList />
        </div>
        <textarea className="reviews__textarea form__textarea" id="review" name="review" minLength="50" placeholder="Tell how was your stay, what you like and what can be improved" onChange={this.handleFieldChange}></textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
        </div>
      </form>
    );
  }

}

export default FeedbackForm;
