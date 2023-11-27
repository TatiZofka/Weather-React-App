import React from "react";
import "./Conditions.css";

export default function Conditions() {
  let conditionData = {
    mainCondition: "Clear",
    humidity: 80,
    wind: 23
  };

  return (
    <div className="Conditions">
      <ul>
        <li>{conditionData.mainCondition}</li>
        <li>
          Humidity: <span>{conditionData.humidity}</span> %
        </li>
        <li>
          Wind: <span>{conditionData.wind}</span>
          <span>km/h</span>
        </li>
      </ul>
    </div>
  );
}