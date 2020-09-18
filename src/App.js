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
        <nav className="navbar navbar-light bg-dark">
          <span className="navbar-brand mb-0 h1 text-white pt-1">
          NYC Arrest Data Visualization
          </span>
        </nav> 
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-4">
              <SearchForm
                results={this.state.results}
                handleInputChange={this.handleInputChange}
              />
              <div class="alert alert-danger" role="alert">
                Number of Arrests: {this.state.filtered.length}
              </div>
              <p>
              NYC Arrest Data Visualization is a dashboard that displays every arrest by the NYPD during the current year. Users can select an arrest type from the drop-down list; the location of each arrest will then be displayed on the map with their arrest date. Meanwhile, the aggregate number of arrests in each borough will be displayed on one bar chart, with the number of arrestees in each age range displayed on another bar chart.
              </p>
         
              <p>Data Source: <a href="https://data.cityofnewyork.us/Public-Safety/NYPD-Arrest-Data-Year-to-Date-/uip8-fykc" aria-label="NYCOpenData" title="NYCOpenData" target="_blank" rel="noopener noreferrer">NYC OpenData</a></p>
            </div>
            <div className="col-md-8">
              <MapBox results={this.state.filtered} />
            </div>

       
            <div className="col-md-12">
              <ResultList results={this.state.filtered} /> 
            </div>
        
          </div>
        </div>
      </>
    );
  }
}

export default App;
