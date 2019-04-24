import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Employee from "./components/employee";

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
              path="/employee/add"
              render={props => <Employee {...props} />}
            />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
