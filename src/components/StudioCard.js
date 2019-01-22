import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class StudioCard extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
    this.props.selectedStudio(this.props.singleStudio)
  }

  render() {
    if (this.state.clicked) {
      return <Redirect to='/showpage'/>
    }

    return (
      <div className="studio-card" onClick={this.handleClick}>
        <h1>Name: {this.props.singleStudio.name}</h1>
        {this.props.singleStudio.price !== 'free' ? <p>Price: ${this.props.singleStudio.price}</p> : <p>Price: {this.props.singleStudio.price}</p>}
        <p>Style: {this.props.singleStudio.style}</p>
      </div>
    )
  }
}

export default StudioCard
