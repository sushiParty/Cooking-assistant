import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react';
import './login.css';

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(e) {
    let newUsername = e.target.value;
    this.setState({
      username: newUsername
    });
    console.log("Username: " + this.state.username);
  }

  handlePasswordChange(e) {
    let newPassword = e.target.value;
    this.setState({
      username: newPassword
    });
    console.log("Password: " + this.state.username);
  }

  // Logs user in and clears state
  handleSubmit() {
    alert("Logging in");
  }

  render() {
    return(
      <div>
	<div>Login to RECIPES</div>
	<div className="login-form">
	  <Form>
	    <Form.Input
	      placeholder="Username"
	      type="text"
	      onChange={this.handleUsernameChange}
	      />
	    <Form.Input
	      placeholder="Password"
	      type="password"
	      onChange={this.handlePasswordChange}
	      />
	    <Button type="submit" onClick={this.handleSubmit}>LOGIN</Button>
	  </Form>
	</div>
      </div>
    );
  }
}

export default Login;
