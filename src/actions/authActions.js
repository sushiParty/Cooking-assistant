import Request from 'superagent';
import fire from '../fire';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESSFUL';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

//Login Attempt
export function attemptLogin(data) {
  return dispatch => {
    fire.auth().signInWithEmailAndPassword(data.identifier, data.password).catch(function(error) {
      dispatch(loginFail(error));
    })

    fire.auth().onAuthStateChanged(function(user) {
      if(user) {
        dispatch(loginSuccess({
          username: user.email
        }));
      }
    })
  }
}

export function loginSuccess(userObject) {
  return { type: LOGIN_SUCCESS, payload: userObject }
}

export function loginFail(error) {
  return { type: LOGIN_FAIL, payload: error }
}
