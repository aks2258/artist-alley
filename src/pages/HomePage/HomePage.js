import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class HomePage extends Component {
	render() {
		return (        
		<div className="Options">
          <Link to="../Login">Login</Link>
          <Link to="../SignUp">Sign-up</Link>
        </div>
		);
	}
}