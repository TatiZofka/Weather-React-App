import React from "react";
import "./DayForecast.css";

export default function DayForecast(props) {
  return (
    <div className="DayForecast">
      <div>{props.day}</div>
      <div>
        <i className="fa-solid fa-cloud-showers-heavy"></i>
      </div>
      <div className="ForecastNumbers">
        <span className="ForecastTempMax">{props.tempmax}°</span>
        <span className="ForecastTempMin">{props.tempmin}°</span>
      </div>
    </div>
  );
}