import React, { Component } from 'react'
import { Link } from "react-router-dom"
import './css/navbar.scss'

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <h1>Plank</h1>
        </Link>
        <div className="nav-right">
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/search">
            <p>Search</p>
          </Link>
        </div>
      </div>
    )
  }
}

export default Navbar
