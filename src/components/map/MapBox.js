import React from 'react';
import { MapContainer, Marker, Popup } from 'react-leaflet'
import { TileLayer } from 'react-leaflet/TileLayer' 
import GoogleMapReact from 'google-map-react';
const apiKey = process.env.REACT_APP_GOOGLE_MAP_API
console.log(apiKey)
const Map = () => {
  const center = { lat: 40.7607334, lng: -73.8294727 };
  return (
    <>
       <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: apiKey }}
            defaultCenter={center}
            defaultZoom={11}
          >
            <div
              lat={center.lat}
              lng={center.lng}
              style={{
                color: 'red',
                backgroundColor: 'white',
                borderRadius: '50%',
                padding: '5px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div></div>
            </div>
          </GoogleMapReact>
        </div>
    </>
  );
};

export default Map;