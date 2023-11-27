import React from "react";
import "./Forecast.css";

import DayForecast from "./DayForecast";

export default function Forecast() {
  return (
    <div className="row Forecast">
      <div className="col">
        <DayForecast day="Mon" tempmax={30} tempmin={10} />
      </div>
      <div className="col">
        <DayForecast day="Tue" tempmax={30} tempmin={10} />
      </div>
      <div className="col">
        <DayForecast day="Wed" tempmax={30} tempmin={10} />
      </div>
      <div className="col">
        <DayForecast day="Thu" tempmax={30} tempmin={10} />
      </div>
      <div className="col">
        <DayForecast day="Fri" tempmax={30} tempmin={10} />
      </div>
      <div className="col">
        <DayForecast day="Sat" tempmax={30} tempmin={10} />
      </div>
      <div className="col">
        <DayForecast day="Sun" tempmax={30} tempmin={10} />
      </div>
    </div>
  );
}