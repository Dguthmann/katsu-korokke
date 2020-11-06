import React, { Component } from "react";
import SearchForm from "./SearchForm";
import EmployeeList from "./EmployeeList";
import API from "../utils/API";

class SearchEmployeeContainer extends Component {
  state = {
    search: "",
    results: [],
    keySort: true,
    nameSort: false
  };

  // When this component mounts, search the Random API for pictures of kittens
  componentDidMount() {
    this.searchRandom("https://randomuser.me/api/?results=200&nat=us");
  }

  searchRandom = query => {
    // Get 200 Placeholder people from
    // https://randomuser.me/api/?results=200&nat=us
    API.search(query)
      .then(res => {
        let i = 1
        res.data.results.forEach(element => {
          element.key = i;
          i++;
        });
        this.setState({ results: res.data.results })
      })
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
  orderByKey = () => {
    if(this.state.keySort){
      this.state.results.sort((a, b) => (a.key > b.key) ? -1 : 1)
      this.setState({ keySort: false })
    }
    else {
    this.state.results.sort((a, b) => (a.key > b.key) ? 1 : -1)
    this.setState({ keySort: true })
    }
  }

  orderByName = () => {
    if(this.state.nameSort){
      this.state.results.sort((a, b) => (a.name.last > b.name.last) ? -1 : (a.name.last === b.name.last) ? ((a.name.first > b.name.first) ? -1 : 1) : 1)
      this.setState({ nameSort: false })
    }
    else {
    this.state.results.sort((a, b) => (a.name.last > b.name.last) ? 1 : (a.name.last === b.name.last) ? ((a.name.first > b.name.first) ? 1 : -1) : -1)
    this.setState({ nameSort: true })
    }
  }

  orderByLocation = () => {
    if(this.state.locationSort){
      this.state.results.sort((a, b) => (a.location.state > b.location.state) ? -1 : (a.location.state === b.location.state) ? ((a.location.city > b.location.city) ? -1 : 1) : 1)
      this.setState({ locationSort: false })
    }
    else {
    this.state.results.sort((a, b) => (a.location.state > b.location.state) ? 1 : (a.location.state === b.name.last) ? ((a.location.city > b.location.city) ? 1 : -1) : -1)
    this.setState({ locationSort: true })
    }
  }


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
              <th onClick={() => this.orderByKey()}>#</th>
              <th scope="col" onClick={() => this.orderByName()}>Name</th>
              <th scope="col">Address</th>
              <th scope="col" onClick={() => this.orderByLocation()}>City, State</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          {console.log(this.state)}
          <EmployeeList results={this.state.results} />
        </table>
      </div>
    );
  }
}

export default SearchEmployeeContainer;
