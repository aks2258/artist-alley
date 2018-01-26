import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from "react-router"
// import "./App.css";
import ArtistPage from "./pages/ArtistPage"
import HomePage from"./pages/HomePage";
import ProfilePage from"./pages/ProfilePage";
import SignUp from "./pages/SignUp";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



const ArtistAlley = () =>
  <Router>
  <MuiThemeProvider>
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/ProfilePage" component={ProfilePage} />
        <Route exact path="/ArtistPage" component={ArtistPage} />
      </Switch>
    </div>
    </MuiThemeProvider>
  </Router>;

export default ArtistAlley;