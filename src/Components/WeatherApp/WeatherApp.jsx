import React, { useState } from "react";
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
  const [weatherData, setWeatherData] = useState({
    humidity: 0,
    windSpeed: 0,
    temperature: 0,
    loading: false,
    error: null,
  });

  const api_key = "fb620a4e881940e96504120c440354ba";
  const [wicon, setWicon] = useState(cloud_icon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return;
    }

    setWeatherData((prevData) => ({ ...prevData, loading: true, error: null }));

    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
      let response = await fetch(url);

      if (response.status === 200) {
        let data = await response.json();

        if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
          setWicon(clear_icon);
        } else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n") {
          setWicon(cloud_icon);
        } else if (data.weather[0].icon === "04d" || data.weather[0].icon === "04n") {
          setWicon(drizzle_icon);
        } else if (data.weather[0].icon === "09d" || data.weather[0].icon === "09n") {
          setWicon(rain_icon);
        } else if (data.weather[0].icon === "10d" || data.weather[0].icon === "10n") {
          setWicon(rain_icon);
        } else if (data.weather[0].icon === "13d" || data.weather[0].icon === "13n") {
          setWicon(snow_icon);
        } else {
          setWicon(clear_icon);
        }

        setWeatherData({
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
          temperature: data.main.temp,
          location: data.name,
          loading: false,
          error: null,
        });
      } else {
        setWeatherData((prevData) => ({
          ...prevData,
          loading: false,
          error: "Error fetching weather data. Please try again.",
        }));
      }
    } catch (error) {
      console.error("An error occurred while fetching data:", error);
      setWeatherData((prevData) => ({
        ...prevData,
        loading: false,
        error: "An error occurred. Please try again later.",
      }));
    }
  };

  return (
    <div className="container">
      <br/> 
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '3rem' }}>WEATHER APP</h1>

      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='Search' />
        <div className="search-icon" onClick={search}>
          <img src={search_icon} alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={wicon} alt="" /> {/* Use the dynamic weather icon */}
      </div>
      <div className="weather-temp">{weatherData.temperature}°C</div>
      <div className="weather-location">{weatherData.location}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percent">{weatherData.humidity}%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rate">{weatherData.windSpeed} km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
      {weatherData.error && (
        <div className="error-message">{weatherData.error}</div>
      )}
    </div>
  );
};

export default WeatherApp;
