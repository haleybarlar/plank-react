import React, { Component } from 'react'

class Filter extends Component {

  state = {
    value: ""
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })

    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <div className="filter">
          <select onChange={this.handleChange} value={this.state.value}>
            <option>choose a style</option>
            <option value="vinyasa">Vinyasa</option>
            <option value="ashtanga">Ashtanga</option>
            <option value="bikram">Bikram</option>
          </select>
      </div>
    )
  }
}

export default Filter
