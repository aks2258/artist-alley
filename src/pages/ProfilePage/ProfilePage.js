import React from 'react';
import Theme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class ProfilePage extends React.Component {
	  render() {
    	return (
		  <MuiThemeProvider muiTheme={getMuiTheme(Theme)}>
		    	<Card>
				    <CardHeader
				      title="Rob Prior"
				      subtitle="Artist"
				      avatar="https://comiconverse.com/wp-content/uploads/2016/10/Rob-Prior-At-Work.jpg"
				    />
				    <CardMedia
				      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
				    >
				      <img src="http://community.wacom.com/~/media/community/blog/2014/february/5%20questions%20with%20illustrator%20rob%20prior/support%20image%201.ashx?la=en&hash=DCF9EEC41DC66902F09175ABA7D0BFD9A7B46A42" alt="" />
				    </CardMedia>
				    <CardTitle title="Card title" subtitle="Card subtitle" />
				    <CardText>
				      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
				      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
				      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
				    </CardText>
				    <CardActions>
				      <FlatButton label="Edit Profile" />
				    </CardActions>
  				</Card>
		  </MuiThemeProvider>
		);
	}
}
//add an about me, fix appbar navigation, appbar on all pages
export default ProfilePage;