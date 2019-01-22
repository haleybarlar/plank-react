import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Home extends Component {

  state = {
    clicked: false
  }

  handleClick = () => {
    this.setState({
      clicked: true
    })
  }

  render() {
    if (this.state.clicked) {
      return <Redirect to='/search'/>
    }

    return (
      <div className="home">
        <p>Namaste y'all! Welcome to Plank, the place where you can find cheap yoga</p>
        <button onClick={this.handleClick}>get started</button>
      </div>
    )
  }
}

export default Home
