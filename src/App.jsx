import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

const position = { x: 0, y: 0 };
position.x = -0.09;
position.y = 51.505;

function App() {
  var LeafIcon = L.Icon.extend({
    options: {
      iconSize: [30, 40],
      iconAnchor: [15, 40],
    },
  });

  var locationIcon = new LeafIcon({
    iconUrl: "images/icon-location.svg",
  });

  return (
    <>
      <div className=" h-[40vh] gap-5 sm:h-[30vh]">
        {/* Header */}
        <div className="place-content-center gap-4 py-6 sm:py-12">
          <h1 className="p-3 text-center text-3xl font-semibold">
            IP Adress Tracker
          </h1>
          {/* SearchBar */}
          <div className="relative z-10 mx-auto flex h-14 min-h-14 max-w-72 justify-center rounded-xl shadow-md sm:max-w-[500px]">
            <input
              type="text"
              className="h-full w-[90%] rounded-l-xl px-4 text-lg text-black"
              placeholder="Search IP address"
            />
            <button
              className="h-full w-[10%] rounded-r-xl bg-black hover:bg-slate-800 hover:transition active:bg-slate-600"
              type="submit"
            >
              <img src="images/icon-arrow.svg" className="mx-auto" alt="" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center">
          {/* Info Card */}
          <div className=" z-20 grid w-72 grid-cols-1 gap-4 rounded-xl bg-white p-6 text-center text-black shadow-md sm:mx-7 sm:min-h-[150px] sm:w-auto sm:grid-cols-4 sm:text-left lg:max-w-[1000px]">
            <div className="grid auto-rows-fr">
              <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
                <p>IP ADDRESS</p>
              </div>
              <p className="font-semibold">198.198.176.190</p>
            </div>
            <div className="grid auto-rows-fr sm:border-l sm:px-6 ">
              <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
                <p>LOCATION</p>
              </div>
              <p className="font-semibold">Lorem ipsum dolor sit</p>
            </div>
            <div className="grid auto-rows-fr sm:border-l sm:px-6">
              <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
                <p>TIMEZONE</p>
              </div>
              <p className="font-semibold">UTC +1:00</p>
            </div>
            <div className="grid auto-rows-fr sm:border-l sm:px-6">
              <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
                <p>ISP</p>
              </div>
              <p className="font-semibold">Free SAS</p>
            </div>
          </div>
        </div>
      </div>
      <MapContainer
        center={[position.y + 0.0005, position.x]}
        zoom={17}
        zoomControl={false}
        scrollWheelZoom={true}
        dragging={true}
        className=" z-0 h-[60vh] min-h-[70%] sm:h-[70vh]"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          icon={locationIcon}
          position={[position.y, position.x]}
          draggable={false}
        ></Marker>
      </MapContainer>
    </>
  );
}

export default App;
