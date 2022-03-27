import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import './index.css'

const Map = () => {

  return ( 
  <>
    <Helmet>
      <link
        rel="stylesheet"
        href={withPrefix("https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css")}
      />
    </Helmet>

    <MapContainer
      center={[-34.6037389, -58.3815704]}
      zoom={60}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.6037389, -58.3815704]}>
        <Popup>Estamos ubicados en el obelisco.</Popup>
      </Marker>
    </MapContainer>
  </> 
  );
}

export default Map;