import React from 'react'
import './style.css'

function SearchForm(props) {
    return (
      <form className="m-3">
      <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Arrest Type</label>
      </div>
      <select class="custom-select" id="inputGroupSelect01" onChange={props.handleInputChange} name="arrestType" value={props.arrestType}>
        <option selected>Choose...</option>
          {props.results.map(result => <option value={result.ofns_desc}>{result.ofns_desc}</option>)}
      </select>
    </div> 
    </form>
    )
}

export default SearchForm;