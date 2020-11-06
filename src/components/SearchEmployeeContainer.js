import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class SearchEmployeeContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Random API for pictures of kittens
  componentDidMount() {
    this.searchRandom("https://randomuser.me/api/?results=200&nat=us");
  }

  searchRandom = query => {
    // Get 200 Placeholder people from
    // https://randomuser.me/api/?results=200&nat=us
    API.search(query)
      .then(res => this.setState({ results: res.results }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // Whent he form is submitted search using the includes method, don't know if I'll need type saving
  handleFormSubmit = event => {
    event.preventDefault();
    // includes method to filter the results down
  };

  // Need a sort method to handle an onclick even on the name tab.

  render() {
    return (
      <div>
        <SearchForm
            search={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">City, State</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          {console.log(this.state)}
          {/* <EmployeeList results={this.state.results} /> */}
        </table>
      </div>
    );
  }
}

export default SearchEmployeeContainer;
