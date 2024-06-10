import React, { useState } from "react";

export default function Select({ onSend }) {
  const [countryInput, setCountryInput] = useState("");
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setCountryInput(event.target.value);
  };

  const handleButtonClick = () => {
    if (countryInput.length < 3) {
      setError("Country name must be at least 3 characters long");
      return;
    }
    setError(null);
    onSend(countryInput);
  };

  return (
    <div className="select">
      <h1 className="select__title">Select country</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        type="text"
        className="select__input"
        value={countryInput}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick} className="select__button">
        send
      </button>
    </div>
  );
}
