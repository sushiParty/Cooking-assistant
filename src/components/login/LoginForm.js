import React from 'react';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';


const validate = values => {
	const errors = {};
	const requiredFields = ['identifier', 'password'];

	requiredFields.forEach(field => {
		if(!values[field]) {
			errors[field] = 'Required'
		}
	});
	return errors;
}

class LoginForm extends React.Component {

	componentDidUpdate() {

		const { isAuthenticated } = this.props;

		if(isAuthenticated)
			alert('Successfully log in');
	}

	submitForm(val){
		this.props.attemptLogin(document.getElementById("identifier").value,
			document.getElementById("password").value);
	}

	render() {
		const { handleSubmit, loginError } = this.props;

		return(
			<div>
				<form onSubmit={this.submitForm}>
				<div>
					<input id="identifier" type="text" placeholder="Username" />
				</div>
				<div>
					<input id="password" type="password" placeholder="Password" />
				</div>
				<div>
				<button className="ui button" role="button">Login</button>
				</div>
				</form>
				{
					loginError.length > 0 &&
						<h4 style={{ color: '#F86E60' }}> { loginError } </h4>

				}
			</div>
		);
	}
}

// Decorate with redux-form
export default reduxForm({
	form: 'LoginForm'
})(LoginForm)
