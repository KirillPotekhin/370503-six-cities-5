import React, {Component, createRef} from "react";
import PropTypes from "prop-types";
import applicationPropTypes from "../../application-prop-types";
import "leaflet/dist/leaflet.css";
import leaflet from "leaflet";

class Map extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    const {offers, cityName} = this.props;

    const city = [52.38333, 4.9];

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;

    const map = leaflet.map(this.ref.current, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });

    map.setView(city, zoom);

    leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
        {attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`}).addTo(map);

    const filteredOffers = offers.filter((it) => it.city.name === cityName);

    filteredOffers.map((filteredOffer) => {
      leaflet
        .marker([filteredOffer.city.location.latitude, filteredOffer.city.location.longitude], {icon})
        .addTo(map);
    });
  }

  render() {

    return (
      <div id="map" ref={this.ref} style={{height: `100%`}}></div>
    );
  }
}

Map.propTypes = {
  offers: PropTypes.arrayOf(applicationPropTypes.offer).isRequired,
  cityName: PropTypes.string.isRequired,
};

export default Map;
