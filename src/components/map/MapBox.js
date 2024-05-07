import React from 'react';
import GoogleMapReact , {} from 'google-map-react';
import { Tooltip } from '@mui/material';
import './Map.css'

import SmallMarker from './../../assets/img/icons/marker-icon.png'

const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY

const MapMarker = ({ text }) => (
  <div className="map-marker">
    <Tooltip title={text}>
      <div className='w-12 flex'>
        <img src={SmallMarker} alt='' className='absolute bottom-0 right-0 left-0 mx-auto w-8 h-12 hover:animate-bounce'/>
      </div>
    </Tooltip>
  </div>
 );

const Map = () => {
  const center = { lat: 40.7607334, lng: -73.8294727 };
  return (
    <>
      <div style={{ height: '500px', }} className='mx-12 lg:mx-36'>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey }}
          defaultCenter={center}
          defaultZoom={18}
          className="focus:outline-none"
          draggable={false}
        >
          <MapMarker
            lat={40.7607334}
            lng={-73.8294727}
            text="Union Center"
          />
        </GoogleMapReact>
      </div>
    </>
  );
};

export default Map;