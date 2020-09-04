import React from 'react'
import './style.css'

function SearchForm(props) {

    const selector = () => {
        let obj = {};
        for (let i = 0; i < props.results.length; i++) {
          if (obj[props.results[i].ofns_desc] === undefined) {
            obj[props.results[i].ofns_desc] = 1;
          } else {
            obj[props.results[i].ofns_desc] = obj[props.results[i].ofns_desc] + 1;
          }
        }
        return (
          <div class="input-group mb-3">
          <select class="custom-select" id="inputGroupSelect01" onChange={props.handleInputChange} value={props.arrestType}>
            <option selected>Choose Arrest Type</option>
              {Object.keys(obj).map(ele => <option value={ele}>{ele.toLowerCase()}</option>)}
          </select>
        </div>
        );
      }

    return (
        <div className="container mt-4">
        <div class="row">
        <div class="col-md-4">
          {selector()}
        </div>
        <div class="col-md-8">
        </div>
        </div>
        </div>
    )
}

export default SearchForm;