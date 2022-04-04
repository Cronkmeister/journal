import "./Map.scss";
import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import mapStyles from "../../styles/mapStyles";
import photoData from "../../assests/data/photo-locations.json";

//map container styles
const containerStyle = {
  width: "100vw",
  height: "90vh",
};

//position of map when page first loaded: Vancouver
const center = {
  lat: 49.283,
  lng: -123.12,
};

//appearance of map and controls
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const mapId = "51250d1ff6cc5f6c";

function Map() {
  console.log(photoData.entries);
  //load google map api with id and API key
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    mapId: "51250d1ff6cc5f6c",
    googleMapsApiKey: "AIzaSyAZ6KbgLsi5vqICnw2fgHcK4lWF50AFeKM",
  });

  //state for markers
  const [selectedEntry, setSelectedEntry] = useState(null);
  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedEntry(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={6}
        onLoad={onMapLoad}
        mapId={mapId}
        options={options}
      >
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={[49.784764, -123.250995]} />
        {photoData.entries.map((entry) => (
          <Marker
            key={entry.properties.ENTRY_ID}
            position={{
              lat: entry.geometry.coordinates[1],
              lng: entry.geometry.coordinates[0],
            }}
            onClick={() => {
              setSelectedEntry(entry);
            }}
            icon={{
              url: "../../assests/icons/pin.png",
              scaledSize: new window.google.maps.Size(25, 25),
            }}
          />
        ))}
      </GoogleMap>
    </>
  );
}

export default Map;

// return (
//     <>
//       <section className="map">
//         <div className="map__wrapper">
//           <h1 className="map__heading">World Map</h1>
//         </div>
//       </section>
//     </>
//   );

//   const [map, setMap] = React.useState(null);

//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds();
//     map.fitBounds(bounds);
//     setMap(map);
//   }, []);

//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null);
//   }, []);

//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(14);
//   }, []);
