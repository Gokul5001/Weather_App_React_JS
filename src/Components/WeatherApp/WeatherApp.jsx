import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.png';
import clear_icon from '../Assets/clear.png';
import drizzle_icon from '../Assets/drizzle.png';
import rain_icon from '../Assets/rain.png';
import snow_icon from '../Assets/snow.png';

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState(cloud_icon);

  const api_key = "fb620a4e881940e96504120c440354ba";
  const iconMapping = {
    "01d": clear_icon,
    "01n": clear_icon,
    "02d": cloud_icon,
    "02n": cloud_icon,
    "04d": drizzle_icon,
    "04n": drizzle_icon,
    "09d": rain_icon,
    "09n": rain_icon,
    "10d": rain_icon,
    "10n": rain_icon,
    "13d": snow_icon,
    "13n": snow_icon,
  };

  const fetchWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${api_key}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Weather data fetch failed: ${response.status}`);
    }
    return response.json();
  };

  const { data, error, isLoading, refetch } = useQuery(
    ['weather', city],
    () => fetchWeather(city),
    {
      enabled: false, // Disable automatic refetching
    }
  );

  useEffect(() => {
    if (data && data.main) {
      setIcon(iconMapping[data.weather[0].icon] || clear_icon);
    }
  }, [data]); // Only update icon when data change

  const search = () => {
    if (city) {
      refetch();
    } else {
      alert("Please enter a city name.");
    }
  };

  return (
    <div className="container">
      <div className="weather-app">
        <h1 className="header">WEATHER APP</h1>

        <div className="top-bar">
          <input
            type="text"
            className="cityInput"
            placeholder='Enter city'
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <div className="search-icon" onClick={search} role="button" aria-label="Search">
            <img src={search_icon} alt="Search" />
          </div>
        </div>

        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : error ? (
          <div className="error-message">Error: {error.message}</div>
        ) : (
          data && (
            <div className="weather-card">
              <div className="weather-image">
                <img src={icon} alt="Weather Icon" />
              </div>
              <div className="weather-info">
                <div className="weather-temp">{data.main.temp}°C</div>
                <div className="weather-location">{data.name}</div>
                <div className="data-container">
                  <div className="element">
                    <img src={humidity_icon} alt="Humidity Icon" className="icon" />
                    <div className="data">
                      <div className="humidity-percent">{data.main.humidity}%</div>
                      <div className="text">Humidity</div>
                    </div>
                  </div>
                  <div className="element">
                    <img src={wind_icon} alt="Wind Icon" className="icon" />
                    <div className="data">
                      <div className="wind-rate">{data.wind.speed} km/h</div>
                      <div className="text">Wind Speed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
