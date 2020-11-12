import React, {PureComponent, Fragment} from "react";
import PropTypes from "prop-types";
import PlaceCard from "../place-card/place-card";
import applicationPropTypes from "../../application-prop-types";

class PlacesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      active: ``,
    };
  }

  render() {
    const {history, offers} = this.props;
    return (
      <Fragment>
        {offers.map((offer, i) => (
          <PlaceCard
            key={`${offer.images[0].src}${i}`}
            history={history}
            offer={(offer)}
            handlerMouseEnter={(evt) => {
              evt.preventDefault();
              const activeId = evt.currentTarget.id;
              this.setState({active: activeId});
            }}
            handlerMouseLeave={() => this.setState({active: ``})}
          />
        ))}
      </Fragment>
    );
  }
}

PlacesList.propTypes = {
  history: PropTypes.object.isRequired,
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
};

export default PlacesList;
