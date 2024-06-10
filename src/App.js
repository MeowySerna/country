import { useState } from "react";
import Info from "./Components/Info";
import Select from "./Components/Select";
import apiCountries from "./utils/Api";

function App() {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleApiRequest = (countryName) => {
    setLoading(true);
    setError(null);
    apiCountries
      .getInfo(countryName)
      .then((countryData) => {
        setCountry(countryData);
        setLoading(false);
        setShowInfo(true);
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
        setError(error);
      });
  };

  return (
    <div className="root">
      <div className="background">
        {showInfo ? (
          <Info country={country} />
        ) : (
          !loading && !error && <Select onSend={handleApiRequest} />
        )}
        {loading && (
          <p style={{ color: "white", fontSize: "40px" }}>Loading...</p>
        )}
        {error && (
          <p style={{ color: "white", fontSize: "40px" }}>
            Something's gone wrong, reload the page
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
