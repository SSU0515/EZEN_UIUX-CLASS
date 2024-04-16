import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div className="weatherButton">
      <Button onClick={() => handleCityChange("current")} variant="light">
        Current Button
      </Button>
      {cities.map((city, idx) => (
        <Button onClick={() => setCity(city)} key={idx} variant="light">
          {city}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
