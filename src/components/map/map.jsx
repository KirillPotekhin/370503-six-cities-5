import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import applicationPropTypes from "../../application-prop-types";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const icon = L.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

const iconActive = L.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});

class Map extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
    this.marker = {};
  }

  componentDidMount() {
    const {offers, cityName, activeOffer = ``} = this.props;

    const city = [52.38333, 4.9];

    const zoom = 12;

    const map = L.map(this.ref.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}).addTo(map);

    const filteredOffers = offers.filter((it) => it.city.name === cityName);

    if (activeOffer !== ``) {
      this.marker[activeOffer.id] = L.marker([activeOffer.city.location.latitude, activeOffer.city.location.longitude]);
      this.marker[activeOffer.id].setIcon(iconActive);
      this.marker[activeOffer.id].addTo(map);
    }

    filteredOffers.map((filteredOffer) => {
      this.marker[filteredOffer.id] = L.marker([filteredOffer.city.location.latitude, filteredOffer.city.location.longitude]);
      this.marker[filteredOffer.id].setIcon(icon);
      this.marker[filteredOffer.id].addTo(map);
    });
  }

  render() {
    return (
      <div id="map" ref={this.ref} style={{height: `100%`}}></div>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.active !== ``) {
      this.marker[this.props.active].setIcon(iconActive);
    }
    if (prevProps.active !== ``) {
      this.marker[prevProps.active].setIcon(icon);
    }
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
  cityName: PropTypes.string.isRequired,
  active: PropTypes.any,
  activeOffer: PropTypes.object,
};

export default Map;
