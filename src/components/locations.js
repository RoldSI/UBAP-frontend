import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMapEvents } from 'react-leaflet';
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

// Create a custom icon for goals
const goalIcon = L.divIcon({
  className: 'custom-goal-icon',
  html: '<div class="text-blue-500 text-xl">&#x2716;</div>', // Unicode for 'x'
  iconSize: [20, 20],
  iconAnchor: [12, 15],
});

// Create a custom icon for landmarks
const landmarkIcon = L.divIcon({
  className: 'custom-landmark-icon',
  html: '<div class="text-red-500 text-xl">&#9733;</div>', // Unicode for 'star' symbol
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

// Create a custom icon for images
const imageIcon = L.divIcon({
  className: 'custom-landmark-icon',
  html: '<div class="text-red-500 text-xl">&#128247;</div>', // Unicode for 'camera' symbol
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

function Locations({ uxvs, landmarks, images, setImageUrl }) {
  const mapRef = useRef(null);
  const center = { lat: 45.52145, lng: 9.21256 };
  const [rightClickLocation, setRightClickLocation] = useState(null);

  useEffect(() => {
    const new_center = {
      lat: uxvs.length > 0 ? uxvs[0].location.latitude : 45.52145,
      lng: uxvs.length > 0 ? uxvs[0].location.longitude : 9.21256,
    };
    if (mapRef.current) {
      mapRef.current.setView([new_center.lat, new_center.lng], mapRef.current.getZoom());
    }
  }, [uxvs]);

  // Custom hook to handle map events
  const MapEvents = () => {
    useMapEvents({
      contextmenu: (e) => {
        setRightClickLocation(e.latlng);
        // Perform any action with the selected location
        console.log("Right-clicked location:", e.latlng);
      },
    });
    return null;
  };

  // Function to handle popup open event
  const handlePopupOpen = (locUrl) => {
    setImageUrl(locUrl);
  };

  return (
    <div className="h-full w-full">
      <MapContainer
        center={center}
        zoom={13}
        className="h-full w-full"
        ref={mapRef}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {uxvs.map((loc, index) => (
          <React.Fragment key={index}>
            <Marker position={[loc.location.latitude, loc.location.longitude]}>
              <Popup>
                {loc.uvx_id}
                <br />
                Location: {loc.location.latitude}, {loc.location.longitude}
              </Popup>
            </Marker>
            <Marker position={[loc.goal.latitude, loc.goal.longitude]} icon={goalIcon}>
              <Popup>
                {loc.uvx_id}
                <br />
                Goal: {loc.goal.latitude}, {loc.goal.longitude}
              </Popup>
            </Marker>
            <Polyline positions={[[loc.location.latitude, loc.location.longitude], [loc.goal.latitude, loc.goal.longitude]]} />
          </React.Fragment>
        ))}
        {landmarks.map((loc, index) => (
          <React.Fragment key={index}>
            <Marker position={[loc.location.latitude, loc.location.longitude]} icon={landmarkIcon}>
              <Popup>
                {loc.detected_object}
                <br />
                Location: {loc.location.latitude}, {loc.location.longitude}
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
        {images.map((loc, index) => (
          <React.Fragment key={index}>
            <Marker 
              position={[loc.location.latitude, loc.location.longitude]} 
              icon={imageIcon} 
              eventHandlers={{ popupopen: () => handlePopupOpen(loc.url) }}
            >
              <Popup>
                Location: {loc.location.latitude}, {loc.location.longitude}
              </Popup>
            </Marker>
          </React.Fragment>
        ))}
        {rightClickLocation && (
          <Marker position={rightClickLocation} icon={DefaultIcon}>
            <Popup>
              Right-clicked location:
              <br />
              {rightClickLocation.lat}, {rightClickLocation.lng}
            </Popup>
          </Marker>
        )}
        <MapEvents />
      </MapContainer>
    </div>
  );
}

export default Locations;