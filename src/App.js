import "./components/form.css";

import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Landing from "./components/catalog/landing";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Landing />{" "}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
