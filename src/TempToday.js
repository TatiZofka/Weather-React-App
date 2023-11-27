import React from "react";
import "./TempToday.css";

export default function TempToday() {
  let tempData = {
    valueToday: 20,
    maxToday: 30,
    minToday: 10
  };

  return (
    <div className="TempToday">
      <h1>
        <span className="temp-value">{tempData.valueToday}</span>
        <span>
          <a href="" className="current-units">
            °C
          </a>
        </span>
        <span className="separator">|</span>
        <span>
          <a href="" className="different-units">
            F
          </a>
        </span>
      </h1>
      <h6>
        <i className="fa-solid fa-temperature-high"></i>
        <span className="temp-max">{tempData.maxToday}°</span>
        <i className="fa-solid fa-temperature-low"></i>
        <span className="temp-min">{tempData.minToday}°</span>
      </h6>
    </div>
  );
}