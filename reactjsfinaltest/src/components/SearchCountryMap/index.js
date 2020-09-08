import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import "./styles.css";
import "leaflet/dist/leaflet.css";
const SearchCountryMap = (props) => {
  const position = [
    props.weatherData?.latitud ?? 51.505,
    props.weatherData?.longitud ?? -0.09,
  ];

  return (
    <div>
      <Map
        center={position}
        zoom={7}
        position="topright"
        showPopup={true}
        provider="OpenStreetMap"
        showMarker={true}
        openSearchOnLoad={true}
        closeResultsOnClick={true}
      >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default SearchCountryMap;
