import React, { Component } from "react";
import SearchForm from "./components/SearchForm/index";
import ResultList from "./components/ResultList/index";
import MapBox from "./components/MapBox/MapBox";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    results: [],
    filtered: [],
  };

  componentDidMount() {
    this.searchArrestType();
  }

  searchArrestType = () => {
    axios({
      method: "GET",
      url: "https://data.cityofnewyork.us/resource/uip8-fykc.json",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        this.setState({
          results: res.data,
          filtered: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleInputChange = (event) => {
    let value = event.target.value;
    console.log(value);
    this.setState({
      filtered: this.state.results.filter((x) => x.ofns_desc === value),
    });
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-dark">
          <span className="navbar-brand mb-0 h1 text-white">
            Visualization of every arrest in NYC by the NYPD during the current
            year
          </span>
        </nav>
        <div className="container-fluid">
          <div className="row mt-4">
            <div className="col-md-4">
              <SearchForm
                results={this.state.results}
                handleInputChange={this.handleInputChange}
              />
            </div>
            <div className="col-md-8">
              <MapBox results={this.state.filtered} />
            </div>
            <div className="col-12">
              <ResultList results={this.state.filtered} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
