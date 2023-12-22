function InfoCard({ ipInfos }) {
  return (
    <div className="flex items-center justify-center">
      <div className=" z-20 grid w-72 grid-cols-1 gap-4 rounded-xl bg-white p-6 text-center text-black shadow-md sm:mx-7 sm:min-h-[150px] sm:w-auto sm:grid-cols-4 sm:text-left lg:max-w-[1000px]">
        <div className="grid grid-rows-2">
          <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
            <p>IP ADDRESS</p>
          </div>
          <p className="font-semibold">{ipInfos.ip}</p>
        </div>
        <div className="grid auto-rows-fr sm:border-l sm:px-6 ">
          <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
            <p>LOCATION</p>
          </div>
          <p className="font-semibold">{ipInfos.location}</p>
        </div>
        <div className="grid auto-rows-fr sm:border-l sm:px-6">
          <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
            <p>TIMEZONE</p>
          </div>
          <p className="font-semibold">{ipInfos.timezone}</p>
        </div>
        <div className="grid auto-rows-fr sm:border-l sm:px-6">
          <div className="flex items-center justify-center text-xs font-semibold text-gray-500 sm:justify-normal">
            <p>ISP</p>
          </div>
          <p className="font-semibold">{ipInfos.isp}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
