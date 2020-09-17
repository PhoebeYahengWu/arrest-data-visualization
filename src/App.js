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
    this.setState({
      filtered: this.state.results.filter((x) => x.ofns_desc === value),
    });
  };

  render() {
    return (
      <>
        {/* <nav className="navbar navbar-light bg-dark">
          <span className="navbar-brand mb-0 h1 text-white">
            Visualization of every arrest in NYC by the NYPD during the current
            year
          </span>
        </nav> */}
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-4">
            <h5>Visualization of every arrest in NYC by the NYPD during the current year</h5>
              <SearchForm
                results={this.state.results}
                handleInputChange={this.handleInputChange}
              />
              <p>The first bar chart is based on borough of arrest. B(Bronx), S(Staten Island), K(Brooklyn), M(Manhattan), Q(Queens)</p>
              <p>The second bar chart is based on perpetrator’s age within a category</p>
              <p>Data Source: <a href="https://data.cityofnewyork.us/Public-Safety/NYPD-Arrest-Data-Year-to-Date-/uip8-fykc" aria-label="NYCOpenData" title="NYCOpenData" target="_blank" rel="noopener noreferrer">NYC OpenData</a></p>
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
