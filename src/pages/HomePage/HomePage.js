import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./HomePage.css"


export default class HomePage extends Component {
		state = {
			email: "",
			password: "",
		}

		onChange = (e) => {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}

	render() {
		return (
			<MuiThemeProvider>
				<div className = "loginForm">
					<TextField
					name = "email"
					placeholder = "Email"
					onChange = {e => this.onChange(e)}
					value = {this.state.email} />
					<br/>
					<TextField
					name = "password"
					placeholder = "Password"
					type = "password"
					onChange = {e => this.onChange(e)}
					value = {this.state.password} />
					<br />
					<RaisedButton label="Login" onClick={e => this.onSubmit(e)} primary />
				</div>
				<br/>
				<div className = "signUpButton">
					<RaisedButton component={Link} to="/SignUp" primary label= "Sign Up">
					</RaisedButton>
				</div>
			</MuiThemeProvider>
		);
	}
}