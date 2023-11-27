import React from "react";
import "./WeatherToday.css";

import TempToday from "./TempToday";
import Emoji from "./Emoji";
import Time from "./Time";
import Conditions from "./Conditions";

export default function WeatherToday() {
  return (
    <div className="WeatherToday">
      <div className="row">
        <div className="col">
          <TempToday />
        </div>
        <div className="col">
          <Emoji />
        </div>
        <div className="col">
          <Time />
        </div>
        <div className="col">
          <Conditions />
        </div>
      </div>
    </div>
  );
}