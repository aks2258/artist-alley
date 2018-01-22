import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Link } from "react-router";

import Form from "./form.js";
import "./App.css";

injectTapEventPlugin();

class SignUp extends Component {
  state = {
    fields: {}
  };

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  render() {
    return (
      // const ProfilePage = () => (
      //   <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
      //     <AppBar title="Artist Alley" />
      //   </MuiThemeProvider>
      // );
      <MuiThemeProvider>
        <div className="App">
          <Form onChange={fields => this.onChange(fields)} />
          <p>
            {JSON.stringify(this.state.fields, null, 2)}
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default SignUp;