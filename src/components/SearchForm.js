import React from "react";

function SearchForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="search">Search for name contains:</label>
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for Person"
          id="search"
        />
        <button className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
