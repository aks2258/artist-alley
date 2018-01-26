import React, { Component } from "react";
import { Link } from "react-router-dom";

import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "./HomePage.css"

import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';


export default class HomePage extends Component {
		state = {
		    email: "",
		    emailError: "",
		    password: "",
		    passwordError: ""
		}

		onChange = (e) => {
			this.setState({
				[e.target.name]: e.target.value,
			});
		}

	validate = () => {
	    let isError = false;
	    const errors = {
	      emailError: "",
	      passwordError: ""
	    };

	    if (this.state.email.indexOf("@") === -1) {
	      isError = true;
	      errors.emailError = "Requires valid email";
	    }
	    if(this.state.password.length<8){
			isError = true;
			errors.passwordError = "Password must be 8 characters long"
		}

	    this.setState({
	      ...this.state,
	      ...errors
	    });
	    return isError;
	};

	onSubmit = e => {
	    e.preventDefault();
	    // this.props.onSubmit(this.state);
	    const err = this.validate();
	    if (!err) {
	      // clear form
	      this.setState({
	        firstName: "",
	        firstNameError: "",
	        lastName: "",
	        lastNameError: "",
	        username: "",
	        usernameError: "",
	        email: "",
	        emailError: "",
	        password: "",
	        passwordError: ""
	      });
	      this.props.onChange({
	        firstName: "",
	        lastName: "",
	        username: "",
	        email: "",
	        password: ""
	      });
	    }
  	};

	render() {
		return (
			<MuiThemeProvider>
				<div className = "loginForm">
					<TextField
					name = "email"
					floatingLabelText = "Email"
					onChange = {e => this.onChange(e)}
					value = {this.state.email}
          			errorText={this.state.emailError} />
					<br/>
					<TextField
					name = "password"
					floatingLabelText = "Password"
					type = "password"
					onChange = {e => this.onChange(e)}
					value = {this.state.password}
          			errorText={this.state.passwordError} />
					<br />
					<RaisedButton component ={Link} to ="/ProfilePage" label="Login" onClick={e => this.onSubmit(e)} primary />
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