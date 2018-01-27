import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/authActions';

const initialState = {
  isAuthenticated: false,
  username: '',
  error: {},
};

export default function userReducer(state=initialState, action) {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isAuthenticated: true,
        username: action.payload.username,
        error: {}
      });

    case LOGIN_FAIL:
      return Object.assign({}, state, {
        error: action.payload
      });

    case LOGOUT:
      return Object.assign({}, state, {
        isAuthenticated: false,
        username: '',
        error:{}
      });

    default:
      return state;
  }
}
