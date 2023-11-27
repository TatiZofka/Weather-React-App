import React from "react";
import "./Time.css";

export default function Time() {
  let timeData = {
    today: "Sunday",
    now: "12:28"
  };

  return (
    <div className="Time">
      <div>
        <i className="far fa-calendar-alt"></i>
        <i className="far fa-clock"></i>
      </div>
      <div>{timeData.today}</div>
      <div>{timeData.now}</div>
    </div>
  );
}