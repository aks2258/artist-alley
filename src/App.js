import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import "./App.css";
import SignUp from "./pages/SignUp";

const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={SignUp} />
      </Switch>
    </div>
  </Router>;

export default App;