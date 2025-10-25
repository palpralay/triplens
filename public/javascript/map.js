mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/standard",
  projection: "globe",
  zoom: 10,
  center: coordinates,
});
map.addControl(new mapboxgl.NavigationControl());
map.scrollZoom.disable();
map.on("style.load", () => {
  map.setFog({});
});

const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(coordinates)

  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<p>Exact Location will be provided after booking</p>`
    )
  )
  .addTo(map);
