var lat;
var lng;
// users current location using HTML5 geolocation.
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function showPosition(position) {
  lat = position.coords.latitude;
  lng = position.coords.longitude;
  console.log('lat: ' + lat + 'lng: ' + latlng); // works fine prints current position
}

console.log('lat: ' + lat + 'lng: ' + latlng); // prints undef

showPosition();
