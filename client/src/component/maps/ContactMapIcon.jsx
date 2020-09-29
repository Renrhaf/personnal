import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: require('../../../public/assets/images/leaflet/marker-icon.svg'),
  iconRetinaUrl: require('../../../public/assets/images/leaflet/marker-icon.svg'),
  iconAnchor: [17, 50],
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(35, 50),
  className: ''
});

export { icon };
