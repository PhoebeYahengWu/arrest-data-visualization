import React, { Component } from 'react'
import SearchForm from './components/SearchForm/index'
import ResultList from './components/ResultList/index'
import MapBox from './components/MapBox/index'
import axios from 'axios';
import './App.css';


class App extends Component {
    state = {
        arrestType: "",
        results: []
      };
    

      componentDidMount() {
        this.searchArrestType()
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
              results: res.data
            });
          })
          .catch((err) => {
            console.log(err);
          });
      
      }
    
      handleInputChange = event => {
        let value = event.target.value;
        this.setState({
          arrestType: value
        });
        this.searchArrestType(this.state.arrestType)
        this.setState({
          arrestType: ''
        });
      };


    render() {
        return (
            <div>
            <nav class="navbar navbar-light bg-dark">
              <span class="navbar-brand mb-0 h1 text-white">
                Visualization of every arrest in NYC by the NYPD during the
                current year
              </span>
            </nav>
            <div class="container-fluid">
            <div class="row mt-4">
            <div class="col-md-4">
                <SearchForm
                    arrestType={this.state.arrestType}
                    results={this.state.results} 
                    handleInputChange={this.handleInputChange}
                    />
              </div>
              <div class="col-md-8">
                <MapBox results={this.state.results}/>
              </div>
              </div> 
              </div>
                <ResultList results={this.state.results}/> 
            </div>
        )
    }
}

export default App;
