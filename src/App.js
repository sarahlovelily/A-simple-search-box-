import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./search/Search";
import Results from "./search/Results";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Search} />
          <Switch>
            <Route path="/results/:query" component={Results} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
