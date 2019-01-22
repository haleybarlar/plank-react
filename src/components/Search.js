import React, { Component } from 'react'
import Filter from './Filter.js'
import Results from './Results.js'

class Search extends Component {
  render() {

    return (
      <div className="search">
        <Filter studios={this.props.studios} handleChange={this.props.handleChange} />
        <Results filteredStudios={this.props.filteredStudios} selectedStudio={this.props.selectedStudio}/>
      </div>
    )
  }
}

export default Search
