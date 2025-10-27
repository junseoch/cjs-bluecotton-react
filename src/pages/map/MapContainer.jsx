import React, { useState } from 'react';
import { MapMarker } from 'react-kakao-maps-sdk';
import { StyledMap } from './style';

const MapContainer = () => {
  const [latitude, setLatitude] = useState(37.44937029089704);
  const [longitude, setLongitude] = useState(126.65436049042351);

  return (
    <div>
      <StyledMap center={{ lat: latitude, lng: longitude }} isPanto={true}>
        <MapMarker position={{ lat: latitude, lng: longitude }} />
      </StyledMap>
    </div>
  );
};

export default MapContainer;