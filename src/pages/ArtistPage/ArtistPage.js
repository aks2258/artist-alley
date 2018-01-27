import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
//For Appbar
import Theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import AppBar from 'material-ui/AppBar';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
///////////////////////////////////////////////////////////////////

export default class ArtistPage extends Component {

  state = {
    artists:[],
    name: "",
    title: "",
    comment: ""
  };

  componentDidMount(){
    this.loadResults();
  }

  loadResults = () => {
    this.setState({artists:[
      {
        name: "Marco Rudy",
        specialties: "Artist",
        comment: "Testing"
      },
      {
        name: "Mike Deodato",
        specialties: "Illustrator",
        comment: "Testing"
      }
    ]})
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
        <AppBar title="Artist Alley" />
      </MuiThemeProvider>,
      this.state.artists.map(artist =>(
          <Card>
            <CardHeader
              title={artist.name}
              subtitle={artist.specialties}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardActions>
              <FlatButton label="Action1" />
              <FlatButton label="Action2" />
            </CardActions>
            <CardText expandable={true}>
              {artist.comment}
            </CardText>
          </Card>
      ))
    );
  }
}