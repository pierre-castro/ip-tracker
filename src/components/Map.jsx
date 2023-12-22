import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";

const position = { x: 0, y: 0 };
position.x = -0.09;
position.y = 51.505;

function MyComponent({ lat, lng }) {
  const map = useMap();
  map.panTo([lat + 0.0005, lng]);
  return null;
}

function Map({ ipInfos }) {
  console.log("Map mounted with :", ipInfos);
  // Icon creation
  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [30, 40],
      iconAnchor: [15, 40],
    },
  });
  var locationIcon = new LeafIcon({
    iconUrl: "../../images/icon-location.svg",
  });

  return (
    <MapContainer
      center={[ipInfos.lat + 0.0005, ipInfos.lng]}
      zoom={12}
      zoomControl={false}
      scrollWheelZoom={true}
      dragging={true}
      className=" z-0 h-[60vh] min-h-[70%] sm:h-[70vh]"
    >
      <MyComponent lat={ipInfos.lat} lng={ipInfos.lng} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={locationIcon}
        position={[ipInfos.lat, ipInfos.lng]}
        draggable={false}
      ></Marker>
    </MapContainer>
  );
}

export default Map;
