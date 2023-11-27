import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
  return (
    <form className="SearchForm">
      <input
        type="search"
        autoFocus="off"
        autoComplete="off"
        className="form"
        placeholder="Search weather for another city..."
      />
      <input type="submit" value="ok" className="button" />
    </form>
  );
}