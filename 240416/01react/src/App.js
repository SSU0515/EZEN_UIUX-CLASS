import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect, CSSProperties } from "react";
import WheatherBox from "./components/WheatherBox";
import WeatherButton from "./components/WeatherButton";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const cities = ["paris", "new york", "tokyo", "seoul"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setWeather(data);
  };

  const getWeatherByCity = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=kr&units=metric`;
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    setLoading(false);
    setWeather(data);
  };

  // useEffect(() => {
  //   getCurrentLocation();
  // }, []);
  // useEffect(() => {
  //   getWeatherByCity();
  // }, [city]);
  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);
  const handleCityChange = (city) => {
    if (city === "current") {
      setWeather(getCurrentLocation());
    } else {
      setCity(city);
    }
  };
  return (
    <div className="App">
      {loading ? (
        <div className="container">
          <ClipLoader color="#fff" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WheatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
          />
        </div>
      )}
    </div>
  );
}

export default App;
