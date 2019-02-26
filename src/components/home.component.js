import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'

class Home extends Component {
  render() {
    return (
      <div className="App">
        <div>Welcome to the Home page</div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Home
