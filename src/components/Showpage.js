import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Showpage extends Component {

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
      <div>
        <h1>Name: {this.props.currentStudio.name}</h1>
        {this.props.currentStudio.price !== 'free' ? <p>Price: ${this.props.currentStudio.price}</p> : <p>Price: {this.props.currentStudio.price}</p>}
        <p>Style: {this.props.currentStudio.style}</p>
        <img src="https://www.groupon.com/merchant/wp-content/uploads/2018/09/opening-a-yoga-studio_blog.jpg" alt=""/>
        <button onClick={this.handleClick}>Go back to results</button>
      </div>
    )
  }
}

export default Showpage
