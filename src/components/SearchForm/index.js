import React from 'react'
import './style.css'

function SearchForm(props) {
    return (
      <form className="m-3">
      <div className="input-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for Another GitHub User"
          id="search"
        />
        <div className="input-group-append">
        <button onClick={props.handleFormSubmit} className="btn btn-dark">
          Search
        </button>
        </div>
      </div>



{/* 
      <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Arrest Type</label>
      </div>
      <select class="custom-select" id="inputGroupSelect01" onChange={e => props.setArrestType(e.target.value)}>
        <option selected>Choose...</option>
          {Object.keys(obj).map(ele => <option value={ele}>{ele.toLowerCase()}</option>)}
      </select>
    </div> */}
    </form>
    )
}

export default SearchForm;