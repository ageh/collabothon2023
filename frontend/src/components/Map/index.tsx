/*tslint:disable*/
import React, { useRef, useEffect, useState } from 'react';
import handshake from "../../../assets/handshake.svg";
import Map, {Marker} from 'react-map-gl';
 
export default function App() {
    const accessToken = 'pk.eyJ1IjoidHBhY2htYW5uIiwiYSI6ImNsbnp1eGQzZTA0ejEyaW55NW1vbzE5d20ifQ.L6Zdph0v9eh_js0Uzp-73g';


const [lat, setLat] = useState(50.11897524369268);
const [lng, setLng] = useState(8.678862480605105);
const [zoom, setZoom] = useState(15);

return (
    <div className="map-container h-60 w-full">
        <Map
        mapboxAccessToken={accessToken}
        initialViewState={{
        longitude: lng,
        latitude: lat,
        zoom: zoom
        }}
        mapStyle="mapbox://styles/mapbox/streets-v12"
    >
        <Marker longitude={lng} latitude={lat} anchor="bottom" draggable={true}>
            <img src= {handshake} width="40px" height="40 px"/>
        </Marker>
    </Map>
  </div>
  );
}