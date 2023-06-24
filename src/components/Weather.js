import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather() {
 let [city, setCity] = useState("");
 let [forecastData, setForecastData] = useState(null);

 function handleSubmit(event) {
   event.preventDefault();
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f81614abe2395d5dfecd45b9298041de&units=metric`;
   axios.get(url).then(showTemperature);
 }

 function updateCity(event) {
   setCity(event.target.value);
 }

 function showTemperature(response) {
   setForecastData(response.data);
   console.log(forecastData);
 }

    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <input
            type="seach"
            value={city}
            placeholder="Type a city"
            onChange={updateCity}
          />
          <input type="submit" value="Seach" />
        </form>
        <p>Kyiv</p>
        <ul>
          <li>Saturday 11:00</li>
          <li>Moustly cloudy</li>
        </ul>
        <div className="show-weather">
          <div className="weather-picture">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="cloudy"
            />
            {/* {Math.round(forecastData.data.main.temp)} */}
          </div>
          <div className="weather-description">
            <ul>
              <li>Precipitation: 1%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 2 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
}