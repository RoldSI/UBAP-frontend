import React, { useEffect, useRef } from 'react';
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

function Locations({ uxvs }) {
  const mapRef = useRef(null);
  const center = { lat: 45.52145, lng: 9.21256 }

  useEffect(() => {
    const new_center = {
      lat: uxvs.length > 0 ? uxvs[0].location.latitude : 45.52145,
      lng: uxvs.length > 0 ? uxvs[0].location.longitude : 9.21256,
    };
    if (mapRef.current) {
      mapRef.current.setView([new_center.lat, new_center.lng], mapRef.current.getZoom());
    }
  }, [uxvs]);

  return (
    <div className="h-full w-full">
      <MapContainer
        center={center}
        zoom={13}
        className="h-full w-full"
        dragging={false}
        touchZoom={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        zoomControl={false}
        keyboard={false}
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {uxvs.map((loc, index) => (
          <Marker key={index} position={[loc.location.latitude, loc.location.longitude]}>
            <Popup>
              name: {loc.uvx_id}
              <br />
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