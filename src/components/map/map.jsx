import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import applicationPropTypes from "../../application-prop-types";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/action";
import {getFilteredOffers} from "../../utils";

class Map extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.marker = {};
    this.icon = L.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });
    this.iconActive = L.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });
  }


  componentDidUpdate(prevProps) {
    // const {offers, city, activeOffer = ``} = this.props;
    // const filteredOffers = getFilteredOffers(offers, city);

    // if (activeOffer !== ``) {
    //   this.marker[activeOffer.id] = L.marker([activeOffer.city.location.latitude, activeOffer.city.location.longitude]);
    //   this.marker[activeOffer.id].setIcon(this.iconActive);
    //   this.marker[activeOffer.id].addTo(this.map);
    // }

    // filteredOffers.map((filteredOffer) => {
    //   this.marker[filteredOffer.id] = L.marker([filteredOffer.city.location.latitude, filteredOffer.city.location.longitude]);
    //   this.marker[filteredOffer.id].setIcon(this.icon);
    //   this.marker[filteredOffer.id].addTo(this.map);
    // });
    if (prevProps.active !== ``) {
      this.marker[prevProps.active].setIcon(this.icon);
    }
    if (this.props.active !== ``) {
      this.marker[this.props.active].setIcon(this.iconActive);
    }
    if (this.props.city !== prevProps.city) {
      const cityCoordinate = [this.props.city.location.latitude, this.props.city.location.longitude];
      const zoom = this.props.city.location.zoom;
      this.map.setView(cityCoordinate, zoom);
    }
  }

  componentDidMount() {
    const {offers, city, getOffers} = this.props;
    getOffers();

    const cityCoordinate = [city.location.latitude, city.location.longitude];

    const zoom = city.location.zoom;

    this.map = L.map(this.ref.current, {
      center: cityCoordinate,
      zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(cityCoordinate, zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}).addTo(this.map);

    // const filteredOffers = getFilteredOffers(offers, city);
    // const activeOffer = offers.find((offer) => `${this.props.active}` === `${offer.id}`);

    offers.map((offer) => {
      this.marker[offer.id] = L.marker([offer.city.location.latitude, offer.city.location.longitude]);
      this.marker[offer.id].setIcon(this.icon);
      this.marker[offer.id].addTo(this.map);
    });

    if (this.props.active !== ``) {
      // this.marker[activeOffer.id] = L.marker([activeOffer.city.location.latitude, activeOffer.city.location.longitude]);
      // this.marker[this.props.active].setIcon(this.iconActive);
      // this.marker[activeOffer.id].addTo(this.map);
    }
  }

  render() {
    return (
      <div id="map" ref={this.ref} style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
  getOffers: applicationPropTypes.getOffers,
  city: PropTypes.object,
  active: applicationPropTypes.active,
  activeOffer: PropTypes.object,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  active: state.active,
});

const mapDispatchToProps = (dispatch) => ({
  getActiveOfferId(value) {
    dispatch(ActionCreator.getActiveOfferId(value));
  },
  getOffers() {
    dispatch(ActionCreator.getOffers());
  },
});

export {Map};
export default connect(mapStateToProps, mapDispatchToProps)(Map);
