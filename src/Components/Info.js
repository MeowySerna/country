import React from "react";

export default function Info({ country }) {
  return (
    <div className="info">
      <h1 className="info__country-title">
        {country.data ? country.data.name : ""}
        <img
          src={country.data ? country.data.href.flag : ""}
          alt="country flag"
          className="info__country-flag"
        />
      </h1>
      <div className="info__container">
        <h2 className="info__title">Full Name</h2>
        <p className="info__text">
          {country.data ? country.data.full_name : ""}
        </p>
      </div>
      <div className="info__container">
        <h2 className="info__title">Сurrency</h2>
        <p className="info__text">
          {country.data ? country.data.currency : ""}
        </p>
      </div>
      <div className="info__container">
        <h2 className="info__title">Phone number</h2>
        <p className="info__text">
          {country.data ? "+" + country.data.phone_code : ""}
        </p>
      </div>
      <div className="info__container">
        <h2 className="info__title">Capital</h2>
        <p className="info__text">{country.data ? country.data.capital : ""}</p>
      </div>
      <div className="info__container">
        <h2 className="info__title">Continent</h2>
        <p className="info__text">
          {country.data ? country.data.continent : ""}
        </p>
      </div>
      <div className="info__container">
        <h2 className="info__title">Size</h2>
        <p className="info__text">{country.data ? country.data.size : ""}</p>
      </div>
      <div className="info__container">
        <h2 className="info__title">Population</h2>
        <p className="info__text">
          {country.data ? country.data.population : ""}
        </p>
      </div>
      <div className="info__container">
        <h2 className="info__title">Leader</h2>
        <p className="info__text">
          {country.data && country.data.current_president
            ? country.data.current_president.name
            : "no information"}
        </p>
      </div>
    </div>
  );
}
