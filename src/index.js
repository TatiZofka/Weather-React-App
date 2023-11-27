import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import City from "./City";
import WeatherToday from "./WeatherToday";
import Forecast from "./Forecast";
import SearchForm from "./SearchForm";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="App">
    <City />
    <br />
    <WeatherToday />
    <br />
    <Forecast />
    <br />
    <SearchForm />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
