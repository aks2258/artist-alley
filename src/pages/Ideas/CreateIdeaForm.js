import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from "material-ui/TextField";
import TextArea from "./TextArea"


export default class CreateIdeas extends Component {

    state = {
      title: "",
      synopsis: ""
    };

  change = e => {
    this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };



  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        title: "",
        synopsis: ""
      });
      this.props.onChange({
        title: "",
        synopsis: ""      });
    }
  };

  render() {
    return (
        <MuiThemeProvider>
          <TextField
            name="title"
            hintText="Title"
            floatingLabelText="Title"
            value={this.state.title}
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
          <TextArea
            name="synopsis"
            hintText="Synopsis goes here"
            floatingLabelText="Synopsis"
            value={this.state.synopsis}
            onChange={e => this.change(e)}
            floatingLabelFixed
          />
        <RaisedButton label="Submit your story idea" onClick={e => this.onSubmit(e)} primary />
        </MuiThemeProvider>
      );
  }
}