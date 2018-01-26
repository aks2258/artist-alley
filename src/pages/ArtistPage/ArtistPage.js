import React, { Component } from "react";
import { Link } from "react-router-dom";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


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
        name: "Rob Prior",
        specialties: "Painter, Illustrator",
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