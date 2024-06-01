import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons not displaying properly
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
});

L.Marker.prototype.options.icon = DefaultIcon;

function Locations({ locations }) {
  locations = locations || [
    {
      "goal": {
        "latitude": 45.521626,
        "longitude": 9.212506
      },
      "location": {
        "latitude": 45.521626,
        "longitude": 9.212506
      },
    }
  ];

  const defaultCenter = {
    lat: locations.length > 0 ? locations[0].location.latitude : 0,
    lng: locations.length > 0 ? locations[0].location.longitude : 0,
  };

  return (
    <div className="h-full w-full">
      <MapContainer center={defaultCenter} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {locations.map((loc, index) => (
          <Marker key={index} position={[loc.location.latitude, loc.location.longitude]}>
            <Popup>
              Location: {loc.location.latitude}, {loc.location.longitude}
              <br />
              Goal: {loc.goal.latitude}, {loc.goal.longitude}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Locations;