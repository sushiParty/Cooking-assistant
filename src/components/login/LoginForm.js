import React from 'react';
import { reduxForm } from 'redux-form';
import { store } from '../../routes.js';
import { push } from 'react-router-redux';
import { Button, Form } from 'semantic-ui-react';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    // const { isAuthenticated } = this.props;
    // if (isAuthenticated) {
    //   console.log(this.props);
    //   alert('Successfully logged in');
    // }
    // console.log(store.getState());
  }

  handleChange(e) {
    switch (e.target.placeholder) {
    case "Username":
      this.setState({ username: e.target.value });
      break;
    case "Password":
      this.setState({ password: e.target.value });
      break;
    default:
      console.log("Unused field");
    }
  }

  // Clear input values on submit
  handleSubmit() {
    this.props.attemptLogin(this.state.username, this.state.password);
    this.setState({
    username: '',
    password: ''
    });
    const { isAuthenticated } = this.props;
    if (!isAuthenticated) {
      alert("Unsuccessful Login");
    } else {
      alert("Successful Login");
    }
  }

  render() {
    const { handleSubmit, loginError } = this.props;

    return(
      <div>
	<Form>
	  <Form.Field>
	    <input
	      type="text"
	      placeholder="Username"
	      onChange={this.handleChange}
	      />
	  </Form.Field>
	  <Form.Field>
	    <input
	      type="password"
	      placeholder='Password'
	      onChange={this.handleChange}/>
	  </Form.Field>
	  <Button type='submit' onClick={this.handleSubmit}>Submit</Button>
	</Form>
	<div>
	{
	  loginError.length > 0 &&
	    <h4 style={{ color: '#F86E60' }}> { loginError } </h4>
	}
	</div>
      </div>
    );
  };
}

// Decorate with redux-form
export default reduxForm({
  form: 'LoginForm'
})(LoginForm);
