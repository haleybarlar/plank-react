import React, { Component } from 'react'
import StudioCard from './StudioCard.js'

class Results extends Component {

  render() {
    const studios = (this.props.filteredStudios ? this.props.filteredStudios.map(studio => <StudioCard singleStudio={studio} key={studio.name} selectedStudio={this.props.selectedStudio}/>) : null)

    return (
      <div>
        {studios}
      </div>
    )
  }
}

export default Results
