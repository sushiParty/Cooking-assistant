import React from 'react';
import { reduxForm } from 'redux-form';
import { push } from 'react-router-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { TextFormField, PasswordFormField} from '../field/TextFieldComponents';


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
			console.log('Successfully log in');
	}

	submitForm(val){
		this.props.attemptLogin(val);
	}

	render() {
		const { handleSubmit, loginError } = this.props;

		return(
			<div>
				<form onSubmit={ handleSubmit((values) => {
					this.submitForm(values)
				})}>
				<div>
					<TextFormField
						name="identifier"
						floatingLabelText="Username"/>
				</div>
				<div>
					<PasswordFormField
						name="password"
						floatingLabelText="Password"/>
				</div>
				<div>
					<RaisedButton className="RaisedButton"
								label="Login"
								primary type="submit"
								style={{ width: '100%' }}/>
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
	form: 'LoginForm',
	validate
})(LoginForm)
