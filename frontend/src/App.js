import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Employee from "./components/employee";
import Stock from "./components/stock";
import ContractManager from "./components/contract";
import Report from "./components/report";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router basename={this.props.publicPath}>
          <Switch>
            <Route exact path="/" render={props => <Dashboard {...props} />} />
            <Route exact path="/login" render={props => <Login {...props} />} />
            <Route
              exact
              path="/employee"
              render={props => <Employee {...props} />}
            />
            <Route exact path="/stock" render={props => <Stock {...props} />} />
            <Route
              exact
              path="/contract/:contractId?"
              render={props => <ContractManager {...props} />}
            />
            <Route
              exact
              path="/report"
              render={props => <Report {...props} />}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
