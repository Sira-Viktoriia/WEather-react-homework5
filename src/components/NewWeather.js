import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function NewWeather(props) {
  return (
    <div className="NewWeather">
      <p>{props.data.city}</p>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="show-weather">
        <div className="weather-picture">
          <WeatherIcon code={props.data.icon} size={52} />
          {Math.round(props.data.temperature)}℃
        </div>
        <div className="weather-description">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
