import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/Home.js'
import Search from './components/Search.js'
import Navbar from './components/Navbar.js'
import Showpage from './components/Showpage.js'
import studios from './fake_data.js'

class App extends Component {

  state = {
    studios,
    currentStudio: "",
    filteredStudios: []
  }

  selectedStudio = (studio) => {
    this.setState({
      currentStudio: studio
    }, () => console.log(this.state.currentStudio))
  }

  handleChange = (style) => {
    const filteredStudios = this.state.studios.filter(studio => studio.style === style)
    this.setState({
      filteredStudios
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path={'/search'} render={() => <Search studios={this.state.studios} handleChange={this.handleChange} filteredStudios={this.state.filteredStudios} selectedStudio={this.selectedStudio}/>} />
              <Route exact path={'/showpage'} render={() => <Showpage currentStudio={this.state.currentStudio}/>} />
            </Switch>
        </header>
      </div>
    );
  }
}

export default App

// <Route exact path={'/filter'} render={() => <Filter studios={this.state.studios} selectedStudio={this.selectedStudio}/>} />
// <Route exact path={'/showpage'} render={() => <Showpage currentStudio={this.state.currentStudio}/>} />
