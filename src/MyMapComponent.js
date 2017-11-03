import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  SearchBox
} from 'react-google-maps';

function location() {
  navigator.geolocation.getCurrentPosition(function(position) {
    let pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
  });
  return pos;
}

console.log(location());

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyA2lCWQx9mVQz2C7c_J_f182J40O0ldYkE&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={13} defaultCenter={{ lat: 29.571, lng: -98.546 }}>
    <Marker position={{ lat: 29.571, lng: -98.546 }} />
  </GoogleMap>
));

export default MyMapComponent;

// {{lat: 29.571, lng: -98.546}}

// {() => location()}
