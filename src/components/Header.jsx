import SearchBar from "./SearchBar";

function Header({ setIp }) {
  return (
    <div className="place-content-center gap-4 py-6 sm:py-12">
      <h1 className="p-3 text-center text-3xl font-semibold">
        IP Adress Tracker
      </h1>
      <SearchBar setIp={setIp} />
    </div>
  );
}

export default Header;
