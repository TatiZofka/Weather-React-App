import React from "react";
import "./City.css";

export default function City() {
  let cityData = {
    city: "Rio de Janeiro",
    location: "Brazil, South America"
  };

  return (
    <div className="City">
      <h1>{cityData.city}</h1>
      <h6>{cityData.location} </h6>
    </div>
  );
}