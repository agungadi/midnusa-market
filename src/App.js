import './components/form.css';


import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from "react-redux";

import Landing from './components/catalog/landing';


function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Router>

    <div className="App">

    <Switch>
    <Route exact path="/"><Landing /> </Route>
   
    </Switch>
    </div>
    </Router>

  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}

export default connect(mapStateToProps)(App);
