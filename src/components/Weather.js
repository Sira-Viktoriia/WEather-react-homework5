import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import NewWeather from "./NewWeather";

export default function Weather(props) {
 let [weatherData, setWeatherData] = useState({ ready: false });
 let [city, setCity] = useState(props.defaultCity);


 function handleResponse(response) {
   setWeatherData({
     ready: true,
     coordinates: response.data.coord,
     temperature: response.data.main.temp,
     humidity: response.data.main.humidity,
     date: new Date(response.data.dt * 1000),
     description: response.data.weather[0].description,
     icon: response.data.weather[0].icon,
     wind: response.data.wind.speed,
     city: response.data.name,
   });
 }

 function handleSubmit(event) {
   event.preventDefault();
   search();
 }

 function handleCityChange(event) {
   setCity(event.target.value);
 }

  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

   if (weatherData.ready) {
     return (
       <div className="Weather">
         <form onSubmit={handleSubmit}>
           <input
             type="seach"
             value={city}
             placeholder="Type a city"
             onChange={handleCityChange}
           />
           <input type="submit" value="Seach" />
         </form>
         <NewWeather data={weatherData} />
         </div>
     );
   } else {
    search();
    return "Loading...";
  }
}

    