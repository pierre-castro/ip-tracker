import arrow_icon from "../assets/img/icon-arrow.svg";

function validateIPaddress(ipaddress) {
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress,
    ) ||
    ipaddress === ""
  ) {
    return true;
  }
  window.alert("Please enter a valid IP Adress !");
  return false;
}

function SearchBar({ setIp }) {
  return (
    <div className="relative z-10 mx-auto flex h-14 min-h-14 max-w-72 justify-center rounded-xl shadow-md sm:max-w-[500px]">
      <input
        id="ipInput"
        type="text"
        className="h-full w-[90%] rounded-l-xl px-4 text-lg text-black focus:outline-none"
        placeholder="Search IP address"
        onKeyDown={(e) => {
          if (e.key === "Enter")
            if (validateIPaddress(document.getElementById("ipInput").value))
              setIp(document.getElementById("ipInput").value);
        }}
      />
      <button
        className="h-full w-[10%] rounded-r-xl bg-black hover:bg-slate-800 hover:transition active:bg-slate-600"
        type="submit"
        onClick={() => {
          if (validateIPaddress(document.getElementById("ipInput").value))
            setIp(document.getElementById("ipInput").value);
        }}
      >
        <img src={arrow_icon} className="mx-auto" alt="" />
      </button>
    </div>
  );
}

export default SearchBar;
