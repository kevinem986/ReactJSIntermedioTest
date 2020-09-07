import React from "react";
// import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

const SearchCountryMap = (props) => {
  const position = [
    props.weatherData?.latitud ?? 51.505,
    props.weatherData?.longitud ?? -0.09,
  ];
  // let map = L.map("leafletmap").setView(position, 13);

  return (
    <Map center={position} zoom={13}>
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
  );
};

export default SearchCountryMap;
