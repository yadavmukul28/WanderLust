  // TO MAKE THE MAP APPEAR YOU MUST
  // ADD YOUR ACCESS TOKEN FROM
  // https://account.mapbox.com
  const coordinates=listing.geometry.coordinates;

  mapboxgl.accessToken = mapToken;
  const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: coordinates, // starting position [lng, lat]
    zoom: 9, // starting zoom
  });


const marker1 = new mapboxgl.Marker({ color: 'red'})
.setLngLat(coordinates)
.setPopup(
  new mapboxgl.Popup({offset:25})
  .setHTML(`<h5>${listing.location+','+listing.country}</h5> <p>Exact Location Provided After Booking</p>`)) // add popup
.addTo(map);

