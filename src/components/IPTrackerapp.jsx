import { useEffect, useState } from "react";
import Header from "./Header";
import InfoCard from "./InfoCard";
import Map from "./Map";
import axios from "axios";

let api_key = import.meta.env.VITE_API_KEY;

function IPTrackerapp() {
  const [ip, setIp] = useState("");
  const [ipInfos, setIpInfos] = useState({
    ip: "",
    location: "test",
    lat: 0,
    lng: 0,
    timezone: "test",
    isp: "test",
  });

  useEffect(() => {
    if (ip !== null) {
      let ipify_url = `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`;
      axios
        .get(ipify_url)
        .then((response) => {
          setIpInfos({
            ip: response.data.ip,
            location: `${response.data.location.city},  ${response.data.location.country}`,
            lat: response.data.location.lat,
            lng: response.data.location.lng,
            timezone: `UTC ${response.data.location.timezone}`,
            isp: response.data.isp,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [ip]);

  return (
    <>
      <div className=" h-[40vh] gap-5 sm:h-[30vh]">
        <Header setIp={setIp} />
        <InfoCard ipInfos={ipInfos} />
      </div>
      <Map ipInfos={ipInfos} />
    </>
  );
}

export default IPTrackerapp;
