import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavLink from './nav-link.component';
import '../App.css';

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Tutorial</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto ml-auto">
                <NavLink to="/home">
                    <i className="glyphicon glyphicon-home"></i> <span>Home</span>
                </NavLink>
                <NavLink to="/customers">
                    <i className="glyphicon glyphicon-camera"></i> <span>Customers</span>
                </NavLink>
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header
