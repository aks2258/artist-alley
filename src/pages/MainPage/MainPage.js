import React, {Component} from 'react';
import Artists from '../ArtistPage';
import Profile from '../ProfilePage';
import Ideas from "../Ideas"
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar'

const paperStyle = {
    height: '85%',
    width: "85%",
    margin: '7%',
    textAlign: 'center',
    display: 'inline-block',
};


class AppWindow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    showProfile = () => {
        this.setState({show: 'Profile', open: false });
    };

    showArtists = () => {
        this.setState({show: 'Artists', open: false });
    };

    showIdeas = () => {
        this.setState({show: "Ideas", open: false});
    };



    render() {
        let content = null;

        switch(this.state.show) {
            case 'Artists':
                content = (<Artists/>);
                break;

            case 'Profile':
                content = (<Profile/>);
                break;
            case 'Ideas':
                content = (<Ideas/>);
                break;

            default:
                content = <h3>Select an option from the Menu at the top left.</h3>
        }

        return (
            <div className="App">

                <AppBar
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    title="Artists' Alley"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                    <AppBar title="Menu"/>
                    <MenuItem onClick={this.showArtists}>Show Artists</MenuItem>
                    <MenuItem>Show Writers</MenuItem>
                    <MenuItem onClick={this.showIdeas}>Show Your Ideas</MenuItem>
                    <MenuItem onClick={this.showProfile}>Your Profile</MenuItem>
                    <MenuItem>Logout</MenuItem>

                </Drawer>
                <Paper style={paperStyle} zDepth={5}>

                    <Toolbar style={{"justifyContent": "center"}}>
                        <ToolbarTitle text="Welcome to Artists' Alley"/>
                    </Toolbar>
                    {content}
                </Paper>
            </div>
        );
    }
}

export default AppWindow;