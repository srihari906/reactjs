import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Home from "../components/home.component";
import Header from "../components/header.component";
import Customers from "../components/customers.component";

export default class RouterOutlet extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <div>
          <div className="container-fluid">
            <Header />
            <div className="main-container">
              <Switch>
                <Route
                  exact
                  path={`${"/"}`}
                  render={() => <Redirect to="/home" />}
                />
                <Route path="/home" component={Home} />
                <Route path="/customers" component={Customers} />
                <Route render={() => <Redirect to="/home" />} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
