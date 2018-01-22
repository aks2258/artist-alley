import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router"
// import "./App.css";
import HomePage from"./pages/HomePage";
import ProfilePage from"./pages/ProfilePage";
import SignUp from "./pages/SignUp";


const App = () =>
  <Router>
    <div>
      <Switch>
      	
        <Route exact path="/" component={ProfilePage} />
      </Switch>
    </div>
  </Router>;

export default App;